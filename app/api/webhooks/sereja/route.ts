// app/api/webhooks/sereja/route.ts

import { NextResponse } from "next/server";
import { Resend } from "resend";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { supabaseAdmin } from "@/app/lib/supabase/admin";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

type PedidoTipo = "individual" | "familia";

type PedidoFigurinha = {
  id: string;
  tipo: PedidoTipo;
  email: string;
  nome: string | null;
  time: string | null;
  peso: string | null;
  imagem_original_url: string | null;
  imagem_final_url: string | null;
  status: string;
};

type SerejaWebhookPayload = {
  [key: string]: unknown;
  buyer?: SerejaWebhookPayload;
  customer?: SerejaWebhookPayload;
  data?: SerejaWebhookPayload;
  metadata?: SerejaWebhookPayload;
  sale?: SerejaWebhookPayload;
};

function getStringValue(value: unknown): string | null {
  if (typeof value === "string" && value.trim()) {
    return value.trim();
  }

  if (typeof value === "number") {
    return String(value);
  }

  return null;
}

function isValidUuid(value: string | null) {
  if (!value) return false;

  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    value
  );
}

function extractEventName(payload: SerejaWebhookPayload): string | null {
  return (
    getStringValue(payload?.event) ||
    getStringValue(payload?.event_name) ||
    getStringValue(payload?.type) ||
    getStringValue(payload?.status) ||
    getStringValue(payload?.data?.event) ||
    getStringValue(payload?.data?.status)
  );
}

function extractPedidoId(payload: SerejaWebhookPayload): string | null {
  return (
    getStringValue(payload?.external_ref) ||
    getStringValue(payload?.data?.sale?.external_ref) ||
    getStringValue(payload?.data?.external_ref) ||
    getStringValue(payload?.metadata?.external_ref) ||
    getStringValue(payload?.ref) ||
    getStringValue(payload?.reference) ||
    getStringValue(payload?.external_id) ||
    getStringValue(payload?.pedido_id) ||
    getStringValue(payload?.data?.ref) ||
    getStringValue(payload?.data?.reference) ||
    getStringValue(payload?.data?.external_id) ||
    getStringValue(payload?.data?.pedido_id) ||
    getStringValue(payload?.metadata?.ref) ||
    getStringValue(payload?.metadata?.pedido_id) ||
    getStringValue(payload?.data?.metadata?.ref) ||
    getStringValue(payload?.data?.metadata?.pedido_id)
  );
}

function extractBuyerEmail(payload: SerejaWebhookPayload): string | null {
  return (
    getStringValue(payload?.customer?.email) ||
    getStringValue(payload?.buyer?.email) ||
    getStringValue(payload?.data?.sale?.buyer?.email) ||
    getStringValue(payload?.data?.buyer?.email) ||
    getStringValue(payload?.email) ||
    getStringValue(payload?.data?.email)
  )?.toLowerCase() ?? null;
}

function extractBuyerName(payload: SerejaWebhookPayload): string | null {
  return (
    getStringValue(payload?.customer?.name) ||
    getStringValue(payload?.buyer?.name) ||
    getStringValue(payload?.data?.sale?.buyer?.name) ||
    getStringValue(payload?.data?.buyer?.name) ||
    getStringValue(payload?.name) ||
    getStringValue(payload?.data?.name)
  );
}

function extractProductName(payload: SerejaWebhookPayload): string | null {
  return (
    getStringValue(payload?.product_name) ||
    getStringValue(payload?.data?.sale?.product_name) ||
    getStringValue(payload?.data?.product_name)
  );
}

function extractProductId(payload: SerejaWebhookPayload): string | null {
  return (
    getStringValue(payload?.product_id) ||
    getStringValue(payload?.data?.sale?.product_id) ||
    getStringValue(payload?.data?.product_id)
  );
}

function isProdutoFamilia(payload: SerejaWebhookPayload) {
  const productName = String(extractProductName(payload) || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  const productId = extractProductId(payload);

  const familiaProductIds = String(process.env.SEREJA_FAMILIA_PRODUCT_IDS || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  if (productId && familiaProductIds.includes(productId)) {
    return true;
  }

  return (
    productName.includes("familia") ||
    productName.includes("family") ||
    productName.includes("figurinhas familia")
  );
}

function extractSaleId(payload: SerejaWebhookPayload): string | null {
  return (
    getStringValue(payload?.id) ||
    getStringValue(payload?.sale_id) ||
    getStringValue(payload?.order_id) ||
    getStringValue(payload?.payment_id) ||
    getStringValue(payload?.data?.id) ||
    getStringValue(payload?.data?.sale_id) ||
    getStringValue(payload?.data?.order_id) ||
    getStringValue(payload?.data?.payment_id)
  );
}

function isPaidEvent(
  eventName: string | null,
  payload: SerejaWebhookPayload
) {
  const normalizedEvent = String(eventName || "").toLowerCase();

  const status =
    getStringValue(payload?.status) ||
    getStringValue(payload?.payment_status) ||
    getStringValue(payload?.data?.status) ||
    getStringValue(payload?.data?.payment_status);

  const normalizedStatus = String(status || "").toLowerCase();

  return (
    normalizedEvent === "sale.paid" ||
    normalizedEvent === "paid" ||
    normalizedEvent === "pago" ||
    normalizedStatus === "paid" ||
    normalizedStatus === "pago" ||
    normalizedStatus === "approved" ||
    normalizedStatus === "aprovado"
  );
}

function gerarSenhaTemporaria() {
  const letras = "ABCDEFGHJKLMNPQRSTUVWXYZ";
  const numeros = "23456789";

  let senha = "";

  for (let i = 0; i < 4; i++) {
    senha += letras[Math.floor(Math.random() * letras.length)];
  }

  for (let i = 0; i < 4; i++) {
    senha += numeros[Math.floor(Math.random() * numeros.length)];
  }

  return senha;
}

async function enviarEmailFamilia(params: {
  email: string;
  senha: string;
}) {
  const appUrl =
    process.env.NEXT_PUBLIC_APP_URL || "https://www.figurinhadacopa.online";

  const from = process.env.RESEND_FROM;

  if (!from) {
    throw new Error("RESEND_FROM não configurado.");
  }

  await resend.emails.send({
    from,
    to: params.email,
    subject: "Seu acesso ao Gerador de Figurinhas da Copa chegou! ⚽",
    html: `
      <div style="font-family: Arial, sans-serif; background: #f7f7f7; padding: 24px;">
        <div style="max-width: 560px; margin: 0 auto; background: #ffffff; border-radius: 18px; padding: 28px;">
          <h1 style="margin: 0 0 12px; color: #181818;">
            Seu acesso foi liberado! ⚽
          </h1>

          <p style="font-size: 15px; line-height: 1.6; color: #444;">
            Obrigado pela compra do pacote família. Você recebeu
            <strong>5 créditos</strong> para gerar suas figurinhas personalizadas.
          </p>

          <div style="background: #f1f8f3; border-radius: 14px; padding: 18px; margin: 22px 0;">
            <p style="margin: 0 0 8px; color: #181818;">
              <strong>Link de acesso:</strong>
            </p>

            <p style="margin: 0 0 14px;">
              <a href="${appUrl}/login" style="color: #0f7a32; font-weight: bold;">
                ${appUrl}/login
              </a>
            </p>

            <p style="margin: 0 0 8px; color: #181818;">
              <strong>E-mail:</strong> ${params.email}
            </p>

            <p style="margin: 0; color: #181818;">
              <strong>Senha temporária:</strong> ${params.senha}
            </p>
          </div>

          <p style="font-size: 14px; line-height: 1.6; color: #555;">
            Depois de entrar, você poderá gerar suas figurinhas e baixar em imagem ou PDF.
          </p>

          <a href="${appUrl}/login" style="display: inline-block; margin-top: 18px; background: #16a34a; color: #ffffff; text-decoration: none; padding: 14px 20px; border-radius: 12px; font-weight: bold;">
            Acessar minha conta
          </a>
        </div>
      </div>
    `,
  });
}

async function processarPedidoFamilia(pedido: PedidoFigurinha) {
  const senhaTemporaria = gerarSenhaTemporaria();
  const senhaHash = await bcrypt.hash(senhaTemporaria, 10);

  const { data: usuarioExistente, error: usuarioBuscaError } =
    await supabaseAdmin
      .from("usuarios")
      .select("id, creditos")
      .eq("email", pedido.email)
      .maybeSingle();

  if (usuarioBuscaError) {
    throw usuarioBuscaError;
  }

  let usuarioId: string;

  if (usuarioExistente) {
    usuarioId = usuarioExistente.id;

    const creditosAtuais = Number(usuarioExistente.creditos || 0);

    const { error: updateUserError } = await supabaseAdmin
      .from("usuarios")
      .update({
        senha_hash: senhaHash,
        senha_temporaria: true,
        creditos: creditosAtuais + 5,
        updated_at: new Date().toISOString(),
      })
      .eq("id", usuarioId);

    if (updateUserError) {
      throw updateUserError;
    }
  } else {
    const { data: novoUsuario, error: insertUserError } = await supabaseAdmin
      .from("usuarios")
      .insert({
        email: pedido.email,
        nome: pedido.nome,
        senha_hash: senhaHash,
        senha_temporaria: true,
        creditos: 5,
      })
      .select("id")
      .single();

    if (insertUserError) {
      throw insertUserError;
    }

    usuarioId = novoUsuario.id;
  }

  await supabaseAdmin.from("creditos_movimentacoes").insert({
    usuario_id: usuarioId,
    tipo: "entrada",
    quantidade: 5,
    origem: "compra_pacote_familia",
    descricao: `Créditos liberados pelo pedido ${pedido.id}`,
  });

  await enviarEmailFamilia({
    email: pedido.email,
    senha: senhaTemporaria,
  });

  const { error: updatePedidoError } = await supabaseAdmin
    .from("pedidos_figurinhas")
    .update({
      status: "concluido",
      updated_at: new Date().toISOString(),
    })
    .eq("id", pedido.id);

  if (updatePedidoError) {
    throw updatePedidoError;
  }
}

async function processarFamiliaSemPedido(params: {
  email: string;
  nome: string | null;
  saleId: string | null;
}) {
  const email = params.email.trim().toLowerCase();
  const nome = params.nome?.trim() || null;
  const saleRef = params.saleId ? `sereja_sale:${params.saleId}` : null;

  if (!email) {
    throw new Error("E-mail do comprador não encontrado.");
  }

  if (saleRef) {
    const { data: movimentacaoExistente, error: buscaMovError } =
      await supabaseAdmin
        .from("creditos_movimentacoes")
        .select("id")
        .eq("origem", "compra_pacote_familia")
        .eq("descricao", saleRef)
        .maybeSingle();

    if (buscaMovError) {
      throw buscaMovError;
    }

    if (movimentacaoExistente) {
      return {
        ok: true,
        alreadyProcessed: true,
      };
    }
  }

  const senhaTemporaria = gerarSenhaTemporaria();
  const senhaHash = await bcrypt.hash(senhaTemporaria, 10);

  const { data: usuarioExistente, error: usuarioBuscaError } =
    await supabaseAdmin
      .from("usuarios")
      .select("id, creditos")
      .eq("email", email)
      .maybeSingle();

  if (usuarioBuscaError) {
    throw usuarioBuscaError;
  }

  let usuarioId: string;

  if (usuarioExistente) {
    usuarioId = usuarioExistente.id;

    const creditosAtuais = Number(usuarioExistente.creditos || 0);

    const { error: updateUserError } = await supabaseAdmin
      .from("usuarios")
      .update({
        nome,
        senha_hash: senhaHash,
        senha_temporaria: true,
        creditos: creditosAtuais + 5,
        updated_at: new Date().toISOString(),
      })
      .eq("id", usuarioId);

    if (updateUserError) {
      throw updateUserError;
    }
  } else {
    const { data: novoUsuario, error: insertUserError } = await supabaseAdmin
      .from("usuarios")
      .insert({
        email,
        nome,
        senha_hash: senhaHash,
        senha_temporaria: true,
        creditos: 5,
      })
      .select("id")
      .single();

    if (insertUserError) {
      throw insertUserError;
    }

    usuarioId = novoUsuario.id;
  }

  const { error: movError } = await supabaseAdmin
    .from("creditos_movimentacoes")
    .insert({
      usuario_id: usuarioId,
      tipo: "entrada",
      quantidade: 5,
      origem: "compra_pacote_familia",
      descricao: saleRef || "Compra pacote família via Sereja",
    });

  if (movError) {
    throw movError;
  }

  await enviarEmailFamilia({
    email,
    senha: senhaTemporaria,
  });

  return {
    ok: true,
    alreadyProcessed: false,
  };
}

async function processarPedidoIndividual(pedido: PedidoFigurinha) {
  /*
    Aqui será a próxima etapa:

    1. Atualizar status para "gerando"
    2. Chamar a API da OpenAI usando:
       - pedido.imagem_original_url
       - pedido.nome
       - pedido.time
       - pedido.peso
    3. Salvar imagem final no bucket figurinhas/geradas
    4. Enviar e-mail com Resend
    5. Atualizar status para "enviado"

    Por enquanto, vamos marcar como "pago" para não perder o pedido.
  */

  const { error } = await supabaseAdmin
    .from("pedidos_figurinhas")
    .update({
      status: "pago",
      updated_at: new Date().toISOString(),
    })
    .eq("id", pedido.id);

  if (error) {
    throw error;
  }
}

function verifySerejaSignature(params: {
  rawBody: string;
  signature: string | null;
  secret: string;
}) {
  const { rawBody, signature, secret } = params;

  if (!signature) return false;

  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(rawBody)
    .digest("hex");

  try {
    const receivedBuffer = Buffer.from(signature, "hex");
    const expectedBuffer = Buffer.from(expectedSignature, "hex");

    if (receivedBuffer.length !== expectedBuffer.length) {
      return false;
    }

    return crypto.timingSafeEqual(receivedBuffer, expectedBuffer);
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  let payload: SerejaWebhookPayload;

  const webhookSecret = process.env.SEREJA_WEBHOOK_SECRET;

  if (!webhookSecret) {
    return NextResponse.json(
      { error: "SEREJA_WEBHOOK_SECRET não configurado." },
      { status: 500 }
    );
  }

  const rawBody = await request.text();

  const signature = request.headers.get("x-sereja-signature");

  const isValidSignature = verifySerejaSignature({
    rawBody,
    signature,
    secret: webhookSecret,
  });

  if (!isValidSignature) {
    return NextResponse.json(
      { error: "Assinatura inválida." },
      { status: 401 }
    );
  }

  try {
    payload = JSON.parse(rawBody) as SerejaWebhookPayload;
  } catch {
    return NextResponse.json(
      { error: "Payload inválido." },
      { status: 400 }
    );
  }

  const eventName = extractEventName(payload);
  const pedidoId = extractPedidoId(payload);
  const saleId = extractSaleId(payload);
  const buyerEmail = extractBuyerEmail(payload);
  const buyerName = extractBuyerName(payload);
  const isFamilia = isProdutoFamilia(payload);

  try {
    if (!isPaidEvent(eventName, payload)) {
      return NextResponse.json({
        ok: true,
        ignored: true,
        reason: "Evento não é de pagamento aprovado.",
        eventName,
      });
    }

    if (isFamilia) {
      if (!buyerEmail) {
        return NextResponse.json(
          {
            error:
              "E-mail do comprador não encontrado no webhook do pacote família.",
            eventName,
          },
          { status: 400 }
        );
      }

      const result = await processarFamiliaSemPedido({
        email: buyerEmail,
        nome: buyerName,
        saleId,
      });

      return NextResponse.json({
        ok: true,
        tipo: "familia",
        semPedido: true,
        alreadyProcessed: result.alreadyProcessed,
        eventName,
      });
    }

    if (!pedidoId) {
      return NextResponse.json(
        {
          error: "Não foi possível encontrar pedido_id/ref no webhook.",
          eventName,
        },
        { status: 400 }
      );
    }

    if (!isValidUuid(pedidoId)) {
      return NextResponse.json(
        {
          error:
            "external_ref inválido. O plano individual precisa receber um UUID real de pedidos_figurinhas.",
          external_ref: pedidoId,
          eventName,
        },
        { status: 400 }
      );
    }

    const { data: pedido, error: pedidoError } = await supabaseAdmin
      .from("pedidos_figurinhas")
      .select(
        "id, tipo, email, nome, time, peso, imagem_original_url, imagem_final_url, status"
      )
      .eq("id", pedidoId)
      .single();

    if (pedidoError || !pedido) {
      console.error("Pedido não encontrado:", pedidoError);

      return NextResponse.json(
        { error: "Pedido não encontrado." },
        { status: 404 }
      );
    }

    if (["concluido", "enviado"].includes(pedido.status)) {
      return NextResponse.json({
        ok: true,
        ignored: true,
        reason: "Pedido já processado.",
        pedidoId: pedido.id,
        status: pedido.status,
      });
    }

    await supabaseAdmin
      .from("pedidos_figurinhas")
      .update({
        status: "pago",
        sereja_sale_id: saleId,
        sereja_event_id: eventName,
        updated_at: new Date().toISOString(),
      })
      .eq("id", pedido.id);

    if (pedido.tipo === "familia") {
      await processarPedidoFamilia({
        ...(pedido as PedidoFigurinha),
        email: buyerEmail || pedido.email,
        nome: buyerName || pedido.nome,
      });
    }

    if (pedido.tipo === "individual") {
      const emailDestino = buyerEmail || pedido.email;

      await processarPedidoIndividual({
        ...(pedido as PedidoFigurinha),
        email: emailDestino,
      });
    }

    return NextResponse.json({
      ok: true,
      pedidoId: pedido.id,
      tipo: pedido.tipo,
      eventName,
    });
  } catch (error) {
    console.error("Erro no webhook da Sereja:", error);

    if (isValidUuid(pedidoId)) {
      await supabaseAdmin
        .from("pedidos_figurinhas")
        .update({
          status: "erro",
          erro:
            error instanceof Error
              ? error.message
              : "Erro desconhecido no webhook.",
          updated_at: new Date().toISOString(),
        })
        .eq("id", pedidoId);
    }

    return NextResponse.json(
      {
        error: "Erro ao processar webhook.",
        details: error instanceof Error ? error.message : "Erro desconhecido.",
      },
      { status: 500 }
    );
  }
}
