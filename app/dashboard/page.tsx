import { redirect } from "next/navigation";

import { createClient } from "@/app/lib/supabase/server";
import { supabaseAdmin } from "@/app/lib/supabase/admin";
import GeradorFigurinhaClient from "./GeradorFigurinhaClient";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user?.email) {
    redirect("/login");
  }

  const { data: usuario } = await supabaseAdmin
    .from("usuarios")
    .select("id, nome, email, creditos")
    .eq("email", user.email.toLowerCase())
    .maybeSingle();

  const { data: pedidos } = await supabaseAdmin
    .from("pedidos_figurinhas")
    .select(
      `
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
    `
    )
    .eq("email", user.email.toLowerCase())
    .eq("origem", "dashboard")
    .order("created_at", { ascending: false })
    .limit(8);

  return (
    <main className="min-h-screen bg-[#f7f7f7] px-4 py-4 text-[#181818] sm:px-6 lg:py-6">
      <div className="mx-auto w-full max-w-7xl">
        <header className="mb-4 rounded-3xl bg-white px-5 py-4 shadow-sm ring-1 ring-black/5 sm:px-6">
          <div>
            <p className="text-sm font-black uppercase text-green-700">
              Dashboard
            </p>
            <h1 className="mt-1 text-3xl font-black tracking-tight">
              Gerador de figurinhas
            </h1>
          </div>
        </header>

        <GeradorFigurinhaClient
          userEmail={user.email}
          creditosIniciais={Number(usuario?.creditos || 0)}
          pedidosIniciais={pedidos || []}
        />
      </div>
    </main>
  );
}
