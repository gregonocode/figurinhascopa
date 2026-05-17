"use client";

import {
  CheckCircleIcon,
  PrinterIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";
import StickerCarousel from "./StickerCarousel";

export default function StickerPrintSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8f8f8] px-4 py-24 sm:px-6 md:py-32 lg:px-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-20 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-[#16a34a]/10 blur-[110px]" />
        <div className="absolute bottom-[-120px] right-[-80px] h-[320px] w-[320px] rounded-full bg-[#FFD700]/20 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-5 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#16a34a]/20 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#15803d] shadow-sm">
              <SparklesIcon className="h-3.5 w-3.5" />
              Figurinhas prontas para imprimir
            </span>
          </div>

          <h2 className="text-[clamp(1.9rem,4.5vw,3.4rem)] font-black leading-tight tracking-tight text-zinc-950">
            Todas as figurinhas da Copa em{" "}
            <span className="text-[#16a34a]">alta definição</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-relaxed text-zinc-600 sm:text-lg">
            Você recebe mais de +980 figurinhas no tamanho original, prontas para
            imprimir com qualidade, incluindo todas as 48 seleções da Copa.
          </p>
        </div>

        <div className="mb-14">
          <StickerCarousel />
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#16a34a]/10">
              <CheckCircleIcon className="h-6 w-6 text-[#16a34a]" />
            </div>

            <h3 className="mb-2 text-base font-black text-zinc-950">
              Alta definição
            </h3>

            <p className="text-sm leading-relaxed text-zinc-600">
              Arquivos preparados para uma impressão mais nítida e com melhor
              acabamento.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-6 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFD700]/25">
              <PrinterIcon className="h-6 w-6 text-[#ca8a04]" />
            </div>

            <h3 className="mb-2 text-base font-black text-zinc-950">
              Tamanho original
            </h3>

            <p className="text-sm leading-relaxed text-zinc-600">
              Figurinhas no formato ideal para imprimir, recortar e usar no seu
              álbum.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-6 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#16a34a]/10">
              <SparklesIcon className="h-6 w-6 text-[#16a34a]" />
            </div>

            <h3 className="mb-2 text-base font-black text-zinc-950">
              48 seleções
            </h3>

            <p className="text-sm leading-relaxed text-zinc-600">
              Material completo com figurinhas das seleções participantes da
              Copa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
