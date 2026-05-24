import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/app/lib/supabase/admin";

export const runtime = "nodejs";

type CriarPedidoBody = {
  tipo: "individual" | "familia";
  email: string;
  nome?: string;
  time?: string;
  peso?: string;
  imagem_original_url?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as CriarPedidoBody;

    const tipo = body.tipo;
    const email = body.email?.trim().toLowerCase();

    if (!tipo || !["individual", "familia"].includes(tipo)) {
      return NextResponse.json(
        { error: "Tipo de pedido invalido." },
        { status: 400 },
      );
    }

    if (!email) {
      return NextResponse.json(
        { error: "E-mail e obrigatorio." },
        { status: 400 },
      );
    }

    if (tipo === "individual") {
      if (!body.nome?.trim()) {
        return NextResponse.json(
          { error: "Nome e obrigatorio." },
          { status: 400 },
        );
      }

      if (!body.imagem_original_url) {
        return NextResponse.json(
          { error: "Imagem e obrigatoria para o plano individual." },
          { status: 400 },
        );
      }
    }

    const { data: pedido, error } = await supabaseAdmin
      .from("pedidos_figurinhas")
      .insert({
        tipo,
        email,
        nome: body.nome?.trim() || null,
        time: body.time?.trim() || null,
        peso: body.peso?.trim() || null,
        imagem_original_url: body.imagem_original_url || null,
        status: "pendente",
      })
      .select("id")
      .single();

    if (error) {
      console.error("Erro criar-pedido:", error);

      return NextResponse.json(
        { error: "Erro ao criar pedido." },
        { status: 500 },
      );
    }

    const checkoutBaseUrl =
      tipo === "individual"
        ? process.env.NEXT_PUBLIC_CHECKOUT_INDIVIDUAL_URL
        : process.env.NEXT_PUBLIC_CHECKOUT_FAMILIA_URL;

    if (!checkoutBaseUrl) {
      return NextResponse.json(
        { error: "URL do checkout nao configurada." },
        { status: 500 },
      );
    }

    const checkoutUrl = new URL(checkoutBaseUrl);

    checkoutUrl.searchParams.set("ref", pedido.id);
    checkoutUrl.searchParams.set("pedido_id", pedido.id);
    checkoutUrl.searchParams.set("email", email);

    return NextResponse.json({
      pedidoId: pedido.id,
      checkoutUrl: checkoutUrl.toString(),
    });
  } catch (error) {
    console.error("Erro inesperado criar-pedido:", error);

    return NextResponse.json(
      { error: "Erro inesperado ao criar pedido." },
      { status: 500 },
    );
  }
}
