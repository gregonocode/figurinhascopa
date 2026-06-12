import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import QRCode from "qrcode";
import { Resend } from "resend";
import crypto from "crypto";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY!);

function verifySerejaSignature(
  rawBody: string,
  signature: string | null,
  secret: string
) {
  if (!signature) return false;

  const expected = crypto
    .createHmac("sha256", secret)
    .update(rawBody)
    .digest("hex");

  try {
    return crypto.timingSafeEqual(
      Buffer.from(signature, "hex"),
      Buffer.from(expected, "hex")
    );
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  try {
    const rawBody = await req.text();

    const signature = req.headers.get("x-sereja-signature");
    const eventTypeHeader = req.headers.get("x-sereja-event");

    const secret = process.env.SEREJA_WEBHOOK_SECRET!;

    if (!verifySerejaSignature(rawBody, signature, secret)) {
      return NextResponse.json(
        { error: "invalid_signature" },
        { status: 401 }
      );
    }

    const payload = JSON.parse(rawBody);

    const eventType = eventTypeHeader || payload.type;

    if (eventType !== "sale.paid") {
      return NextResponse.json({
        ok: true,
        ignored: true,
        eventType,
      });
    }

    const sale = payload?.data?.sale;

    if (!sale) {
      return NextResponse.json(
        { error: "sale_not_found" },
        { status: 400 }
      );
    }

    const externalRef = sale.external_ref;
    const saleId = sale.id;
    const buyerEmail = sale?.buyer?.email;

    if (!externalRef) {
      return NextResponse.json(
        { error: "external_ref_not_found" },
        { status: 400 }
      );
    }

    const { data: surpresa, error: findError } = await supabaseAdmin
      .from("surpresas_namorados")
      .select("*")
      .eq("id", externalRef)
      .single();

    if (findError || !surpresa) {
      return NextResponse.json(
        { error: "surpresa_not_found" },
        { status: 404 }
      );
    }

    if (surpresa.status === "pago" || surpresa.status === "enviado") {
      return NextResponse.json({
        ok: true,
        alreadyProcessed: true,
      });
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL!;
    const surpresaUrl = `${appUrl}/surpresa/${surpresa.token_publico}`;

    const qrCodeDataUrl = await QRCode.toDataURL(surpresaUrl, {
      width: 600,
      margin: 2,
    });

    const emailDestino = surpresa.email || buyerEmail;

    if (!emailDestino) {
      return NextResponse.json(
        { error: "email_not_found" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: process.env.RESEND_FROM!,
      to: emailDestino,
      subject: "Seu QR Code surpresa de Dia dos Namorados está pronto ❤️",
      html: `
        <div style="font-family: Arial, sans-serif; background: #fff1f2; padding: 32px;">
          <div style="max-width: 560px; margin: 0 auto; background: #ffffff; border-radius: 24px; padding: 32px; text-align: center;">
            <h1 style="color: #18181b; margin: 0 0 12px;">
              Sua surpresa está pronta ❤️
            </h1>

            <p style="color: #52525b; font-size: 15px; line-height: 1.6;">
              ${surpresa.nome_comprador}, o QR Code da surpresa para ${surpresa.nome_amor} já está liberado.
            </p>

            <p style="color: #52525b; font-size: 15px; line-height: 1.6;">
              Entregue esse QR Code para a pessoa escanear e descobrir a página especial.
            </p>

            <img src="${qrCodeDataUrl}" alt="QR Code da surpresa" style="width: 260px; max-width: 100%; margin: 24px auto; display: block;" />

            <a href="${surpresaUrl}" style="display: inline-block; background: #dc2626; color: #ffffff; padding: 14px 22px; border-radius: 16px; text-decoration: none; font-weight: 700;">
              Abrir surpresa
            </a>

            <p style="margin-top: 24px; color: #71717a; font-size: 12px;">
              Link da surpresa: ${surpresaUrl}
            </p>
          </div>
        </div>
      `,
    });

    await supabaseAdmin
      .from("surpresas_namorados")
      .update({
        status: "pago",
        paid_at: new Date().toISOString(),
        sent_at: new Date().toISOString(),
        sereja_order_id: saleId || null,
        sereja_payment_id: saleId || null,
        email: emailDestino,
      })
      .eq("id", surpresa.id);

    return NextResponse.json({
      ok: true,
      eventType,
      externalRef,
    });
  } catch (error) {
    console.error("Erro webhook namorados:", error);

    return NextResponse.json(
      { error: "internal_error" },
      { status: 500 }
    );
  }
}