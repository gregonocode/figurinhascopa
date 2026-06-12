import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

function gerarToken() {
  return crypto.randomUUID().replaceAll("-", "");
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const nomeComprador = String(formData.get("nomeComprador") || "").trim();
    const nomeAmor = String(formData.get("nomeAmor") || "").trim();
    const dia = Number(formData.get("dia"));
    const mes = Number(formData.get("mes"));
    const presente = String(formData.get("presente") || "").trim();
    const email = String(formData.get("email") || "").trim();

    const fotos = [
      formData.get("foto1"),
      formData.get("foto2"),
      formData.get("foto3"),
    ].filter(Boolean) as File[];

    if (!nomeComprador || !nomeAmor || !dia || !mes || !presente || !email) {
      return NextResponse.json(
        { error: "Preencha todos os campos obrigatórios." },
        { status: 400 }
      );
    }

    const uploadedUrls: string[] = [];

    for (const foto of fotos) {
      const ext = foto.name.split(".").pop() || "jpg";
      const path = `${crypto.randomUUID()}.${ext}`;

      const { error: uploadError } = await supabaseAdmin.storage
        .from("surpresas-namorados")
        .upload(path, foto, {
          contentType: foto.type,
          upsert: false,
        });

      if (uploadError) {
        return NextResponse.json(
          { error: "Erro ao enviar uma das fotos." },
          { status: 500 }
        );
      }

      const { data } = supabaseAdmin.storage
        .from("surpresas-namorados")
        .getPublicUrl(path);

      uploadedUrls.push(data.publicUrl);
    }

    const tokenPublico = gerarToken();

    const { data: surpresa, error } = await supabaseAdmin
      .from("surpresas_namorados")
      .insert({
        nome_comprador: nomeComprador,
        nome_amor: nomeAmor,
        dia_conheceram: dia,
        mes_conheceram: mes,
        presente,
        email,
        foto_1_url: uploadedUrls[0] || null,
        foto_2_url: uploadedUrls[1] || null,
        foto_3_url: uploadedUrls[2] || null,
        token_publico: tokenPublico,
        status: "checkout",
      })
      .select("id")
      .single();

    if (error) {
      return NextResponse.json(
        { error: "Erro ao criar surpresa." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      id: surpresa.id,
      redirectUrl: `/namorados/oferta/${surpresa.id}`,
    });
  } catch (error) {
    console.error("Erro criar surpresa namorados:", error);

    return NextResponse.json(
      { error: "Erro interno ao criar surpresa." },
      { status: 500 }
    );
  }
}