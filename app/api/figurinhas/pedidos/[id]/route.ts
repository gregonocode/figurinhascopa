import { NextResponse, type NextRequest } from "next/server";

import { supabaseAdmin } from "@/app/lib/supabase/admin";
import { createClient } from "@/app/lib/supabase/server";

export const runtime = "nodejs";

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

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user?.email) {
      return NextResponse.json({ error: "Nao autenticado." }, { status: 401 });
    }

    const { id } = await params;

    const { data: pedido, error } = await supabaseAdmin
      .from("pedidos_figurinhas")
      .select(pedidoSelect)
      .eq("id", id)
      .eq("email", user.email.toLowerCase())
      .eq("origem", "dashboard")
      .maybeSingle();

    if (error) {
      console.error("Erro ao buscar pedido:", error);

      return NextResponse.json(
        { error: "Erro ao buscar pedido." },
        { status: 500 },
      );
    }

    if (!pedido) {
      return NextResponse.json(
        { error: "Pedido nao encontrado." },
        { status: 404 },
      );
    }

    return NextResponse.json({
      ok: true,
      pedido,
    });
  } catch (error) {
    console.error("Erro inesperado buscar pedido:", error);

    return NextResponse.json(
      { error: "Erro inesperado ao buscar pedido." },
      { status: 500 },
    );
  }
}
