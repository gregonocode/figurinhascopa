import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, Clock3 } from "lucide-react";
import { getReceitaBySlug, receitas } from "@/data/receitas";

export function generateStaticParams() {
  return receitas.map((receita) => ({
    slug: receita.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const receita = getReceitaBySlug(slug);

  if (!receita) {
    return {
      title: "Receita nao encontrada",
    };
  }

  return {
    title: `${receita.title} | Receitas`,
    description: receita.description,
  };
}

export default async function ReceitaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const receita = getReceitaBySlug(slug);

  if (!receita) {
    notFound();
  }

  const currentIndex = receitas.findIndex((item) => item.slug === receita.slug);
  const previous = currentIndex > 0 ? receitas[currentIndex - 1] : null;
  const next =
    currentIndex < receitas.length - 1 ? receitas[currentIndex + 1] : null;

  return (
    <main className="min-h-screen bg-[#fff8f1] text-[#271711]">
      <article className="mx-auto max-w-xl pb-10">
        <div className="relative aspect-[4/3] overflow-hidden bg-[#f3e4d8]">
          <Image
            src={receita.image}
            alt={receita.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 576px"
            className="object-cover"
          />

          <div className="absolute inset-x-0 top-0 flex items-center justify-between bg-gradient-to-b from-black/55 to-transparent px-4 pb-12 pt-4">
            <Link
              href="/receitas"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-[#271711] shadow-sm"
              aria-label="Voltar para receitas"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>

            <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-black text-[#e0522f] shadow-sm">
              #{receita.id}
            </span>
          </div>
        </div>

        <section className="-mt-8 rounded-t-[2rem] bg-[#fff8f1] px-4 pt-6">
          <div className="rounded-[1.5rem] border border-[#f1dfcf] bg-white p-5 shadow-xl shadow-orange-950/10">
            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-[#edf7f0] px-3 py-1.5 text-xs font-black text-[#2d7a52]">
              <Clock3 className="h-4 w-4" />
              {receita.time}
            </div>

            <h1 className="text-3xl font-black leading-9 text-[#271711]">
              {receita.title}
            </h1>

            <p className="mt-4 text-base leading-7 text-[#6f574b]">
              {receita.description}
            </p>

            <Link
              href={`/receitas/${receita.slug}/preparo`}
              className="mt-6 flex w-full items-center justify-center rounded-2xl bg-[#e0522f] px-5 py-4 text-sm font-black text-white shadow-lg shadow-orange-900/15 transition hover:bg-[#c84425]"
            >
              Abrir preparo no app
              <BookOpen className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <nav className="mt-5 grid grid-cols-2 gap-3">
            {previous ? (
              <Link
                href={`/receitas/${previous.slug}`}
                className="rounded-2xl border border-[#f1dfcf] bg-white p-4 shadow-sm"
              >
                <span className="text-xs font-black uppercase text-[#9c7665]">
                  Anterior
                </span>
                <p className="mt-1 text-sm font-black leading-5 text-[#271711]">
                  {previous.title}
                </p>
              </Link>
            ) : (
              <div />
            )}

            {next ? (
              <Link
                href={`/receitas/${next.slug}`}
                className="rounded-2xl border border-[#f1dfcf] bg-white p-4 text-right shadow-sm"
              >
                <span className="text-xs font-black uppercase text-[#9c7665]">
                  Proxima
                </span>
                <p className="mt-1 text-sm font-black leading-5 text-[#271711]">
                  {next.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
          </nav>
        </section>
      </article>
    </main>
  );
}
