import { NextResponse } from "next/server";

import { supabaseAdmin } from "@/app/lib/supabase/admin";
import { createClient } from "@/app/lib/supabase/server";

export const runtime = "nodejs";

const BUCKET_NAME = "figurinhas";

const pedidoSelect = `
  id,
  nome,
  profissao,
  peso,
  time,
  status,
  erro,
  imagem_original_url,
  imagem_final_url,
  created_at
`;

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user?.email) {
      return NextResponse.json({ error: "Nao autenticado." }, { status: 401 });
    }

    const email = user.email.toLowerCase();
    const formData = await request.formData();

    const foto = formData.get("foto");
    const nome = String(formData.get("nome") ?? "").trim();
    const profissao = String(formData.get("profissao") ?? "").trim();
    const time = String(formData.get("time") ?? "").trim();

    if (!foto || !(foto instanceof File)) {
      return NextResponse.json(
        { error: "Nenhuma imagem enviada." },
        { status: 400 },
      );
    }

    if (!foto.type.startsWith("image/")) {
      return NextResponse.json(
        { error: "O arquivo precisa ser uma imagem." },
        { status: 400 },
      );
    }

    if (!nome || !profissao || !time) {
      return NextResponse.json(
        { error: "Preencha nome, profissao e time." },
        { status: 400 },
      );
    }

    const { data: usuario, error: usuarioError } = await supabaseAdmin
      .from("usuarios")
      .select("id, creditos")
      .eq("email", email)
      .maybeSingle();

    if (usuarioError) {
      console.error("Erro ao buscar usuario:", usuarioError);

      return NextResponse.json(
        { error: "Erro ao validar creditos." },
        { status: 500 },
      );
    }

    const creditosAtuais = Number(usuario?.creditos || 0);

    if (!usuario || creditosAtuais <= 0) {
      return NextResponse.json(
        { error: "Voce nao possui creditos disponiveis." },
        { status: 402 },
      );
    }

    const extension = foto.name.split(".").pop() || "jpg";
    const fileName = `${crypto.randomUUID()}.${extension}`;
    const filePath = `dashboard/originais/${fileName}`;
    const buffer = Buffer.from(await foto.arrayBuffer());

    const { error: uploadError } = await supabaseAdmin.storage
      .from(BUCKET_NAME)
      .upload(filePath, buffer, {
        contentType: foto.type,
        upsert: false,
      });

    if (uploadError) {
      console.error("Erro upload figurinha dashboard:", uploadError);

      return NextResponse.json(
        { error: "Erro ao enviar imagem." },
        { status: 500 },
      );
    }

    const { data: publicUrlData } = supabaseAdmin.storage
      .from(BUCKET_NAME)
      .getPublicUrl(filePath);

    const { data: pedido, error: pedidoError } = await supabaseAdmin
      .from("pedidos_figurinhas")
      .insert({
        tipo: "dashboard",
        origem: "dashboard",
        email,
        nome,
        profissao,
        peso: profissao,
        time,
        imagem_original_url: publicUrlData.publicUrl,
        status: "gerando",
      })
      .select(pedidoSelect)
      .single();

    if (pedidoError) {
      console.error("Erro ao inserir pedido_figurinhas:", {
        message: pedidoError.message,
        details: pedidoError.details,
        hint: pedidoError.hint,
        code: pedidoError.code,
      });

      await supabaseAdmin
        .from("usuarios")
        .update({
          creditos: creditosAtuais,
          updated_at: new Date().toISOString(),
        })
        .eq("id", usuario.id);

      throw pedidoError;
    }

    const creditosRestantes = creditosAtuais - 1;
    const { error: creditoError } = await supabaseAdmin
      .from("usuarios")
      .update({ creditos: creditosRestantes })
      .eq("id", usuario.id);

    if (creditoError) {
      console.error("Erro ao descontar credito:", creditoError);
    }

    return NextResponse.json({
      ok: true,
      pedido,
      creditos_restantes: creditosRestantes,
    });
  } catch (error) {
    console.error("Erro inesperado gerar figurinha:", error);

    return NextResponse.json(
      { error: "Erro inesperado ao gerar figurinha." },
      { status: 500 },
    );
  }
}
