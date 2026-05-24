import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/app/lib/supabase/admin";

export const runtime = "nodejs";

const BUCKET_NAME = "figurinhas";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const file = formData.get("file");

    if (!file || !(file instanceof File)) {
      return NextResponse.json(
        { error: "Nenhuma imagem enviada." },
        { status: 400 },
      );
    }

    if (!file.type.startsWith("image/")) {
      return NextResponse.json(
        { error: "O arquivo precisa ser uma imagem." },
        { status: 400 },
      );
    }

    const maxSizeInMb = 5;
    const maxSizeInBytes = maxSizeInMb * 1024 * 1024;

    if (file.size > maxSizeInBytes) {
      return NextResponse.json(
        { error: `A imagem deve ter no maximo ${maxSizeInMb}MB.` },
        { status: 400 },
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const extension = file.name.split(".").pop() || "jpg";
    const fileName = `${crypto.randomUUID()}.${extension}`;
    const filePath = `originais/${fileName}`;

    const { error: uploadError } = await supabaseAdmin.storage
      .from(BUCKET_NAME)
      .upload(filePath, buffer, {
        contentType: file.type,
        upsert: false,
      });

    if (uploadError) {
      console.error("Erro upload-imagem:", uploadError);

      return NextResponse.json(
        { error: "Erro ao enviar imagem." },
        { status: 500 },
      );
    }

    const { data } = supabaseAdmin.storage
      .from(BUCKET_NAME)
      .getPublicUrl(filePath);

    return NextResponse.json({
      path: filePath,
      url: data.publicUrl,
    });
  } catch (error) {
    console.error("Erro inesperado upload-imagem:", error);

    return NextResponse.json(
      { error: "Erro inesperado ao enviar imagem." },
      { status: 500 },
    );
  }
}
