import Image from "next/image";
import Link from "next/link";
import { Clock3, Search } from "lucide-react";
import { receitas } from "@/data/receitas";

export default function ReceitasPage() {
  return (
    <main className="min-h-screen bg-[#fff8f1] text-[#271711]">
      <section className="mx-auto max-w-xl px-4 pb-10 pt-6">
        <header className="sticky top-0 z-20 -mx-4 border-b border-[#f1dfcf] bg-[#fff8f1]/95 px-4 pb-4 pt-3 backdrop-blur">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase text-[#e0522f]">
                Petiscos faceis
              </p>
              <h1 className="mt-1 text-2xl font-black text-[#271711]">
                Receitas
              </h1>
            </div>

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#2d7a52] text-white shadow-lg shadow-green-900/10">
              <Search className="h-5 w-5" />
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-[#f1dfcf] bg-white px-4 py-3 shadow-sm">
            <p className="text-sm font-bold text-[#271711]">
              {receitas.length} ideias para escolher
            </p>
            <p className="mt-1 text-xs leading-5 text-[#7b6256]">
              Toque em uma receita para ver os detalhes e abrir o preparo
              completo.
            </p>
          </div>
        </header>

        <div className="mt-5 grid gap-4">
          {receitas.map((receita) => (
            <Link
              key={receita.slug}
              href={`/receitas/${receita.slug}`}
              className="group overflow-hidden rounded-[1.5rem] border border-[#f1dfcf] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-950/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#f3e4d8]">
                <Image
                  src={receita.image}
                  alt={receita.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 576px"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-black text-[#e0522f] shadow-sm">
                  #{receita.id}
                </span>
              </div>

              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-lg font-black leading-6 text-[#271711]">
                    {receita.title}
                  </h2>

                  <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-[#edf7f0] px-2.5 py-1 text-xs font-black text-[#2d7a52]">
                    <Clock3 className="h-3.5 w-3.5" />
                    {receita.time}
                  </span>
                </div>

                <p className="mt-2 text-sm leading-6 text-[#7b6256]">
                  {receita.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
