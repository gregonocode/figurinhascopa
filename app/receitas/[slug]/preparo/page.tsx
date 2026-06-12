import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
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
      title: "Preparo nao encontrado",
    };
  }

  return {
    title: `Preparo: ${receita.title}`,
    description: receita.description,
  };
}

export default async function ReceitaPreparoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const receita = getReceitaBySlug(slug);

  if (!receita) {
    notFound();
  }

  return (
    <main className="flex h-screen flex-col bg-[#fff8f1] text-[#271711]">
      <header className="z-10 border-b border-[#f1dfcf] bg-[#fff8f1]/95 px-3 py-3 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-xl items-center gap-3">
          <Link
            href={`/receitas/${receita.slug}`}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#271711] shadow-sm"
            aria-label="Voltar para a receita"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-black text-[#271711]">
              {receita.title}
            </p>
            <p className="text-xs font-bold text-[#7b6256]">
              Preparo dentro do app
            </p>
          </div>

          <a
            href={receita.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e0522f] text-white shadow-sm"
            aria-label="Abrir no navegador"
          >
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </header>

      <iframe
        title={`Preparo de ${receita.title}`}
        src={`/api/receitas/webview/${receita.slug}`}
        className="min-h-0 flex-1 border-0 bg-white"
      />
    </main>
  );
}
