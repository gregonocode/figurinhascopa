import Link from "next/link";
import { ArrowRight, Store, Users } from "lucide-react";

export default function PetiscosPage() {
  return (
    <main className="min-h-screen bg-[#F1F8F3] px-4 py-6 text-zinc-900">
      <section className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-md flex-col justify-center">
        <div className="mb-8 text-center">
          <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-semibold text-green-700 shadow-sm">
            Petiscos da Copa
          </span>

          <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight">
            Para que você quer fazer petiscos?
          </h1>

          <p className="mt-3 text-sm leading-6 text-zinc-600">
            Escolha uma opção para continuar.
          </p>
        </div>

        <div className="space-y-3">
          <Link
            href="/petiscos/vender"
            className="group flex w-full items-center justify-between rounded-2xl border border-green-100 bg-white p-5 text-left shadow-sm transition hover:border-green-300 hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-700">
                <Store className="h-5 w-5" />
              </div>

              <div>
                <h2 className="text-base font-bold text-zinc-900">
                  Vender combos
                </h2>
                <p className="mt-1 text-sm text-zinc-500">
                  Quero fazer pra vender na copa.
                </p>
              </div>
            </div>

            <ArrowRight className="h-5 w-5 text-zinc-300 transition group-hover:translate-x-1 group-hover:text-green-700" />
          </Link>

          <Link
            href="/petiscos/familia"
            className="group flex w-full items-center justify-between rounded-2xl border border-green-100 bg-white p-5 text-left shadow-sm transition hover:border-green-300 hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-700">
                <Users className="h-5 w-5" />
              </div>

              <div>
                <h2 className="text-base font-bold text-zinc-900">
                  Família e amigos
                </h2>
                <p className="mt-1 text-sm text-zinc-500">
                  Quero fazer em dias de jogo para minha família e amigos.
                </p>
              </div>
            </div>

            <ArrowRight className="h-5 w-5 text-zinc-300 transition group-hover:translate-x-1 group-hover:text-green-700" />
          </Link>
        </div>

        <p className="mt-6 text-center text-xs text-zinc-400">
          Responda para acessar a página ideal para você.
        </p>
      </section>
    </main>
  );
}