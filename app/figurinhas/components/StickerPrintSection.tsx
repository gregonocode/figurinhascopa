import Image, { type StaticImageData } from "next/image";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

import sticker1 from "../../../public/icons/figurinhas/figurinha-1.png";
import sticker2 from "../../../public/icons/figurinhas/figurinha-2.png";
import sticker3 from "../../../public/icons/figurinhas/figurinha-3.png";
import sticker4 from "../../../public/icons/figurinhas/figurinha-4.png";
import sticker5 from "../../../public/icons/figurinhas/figurinha-5.png";
import sticker6 from "../../../public/icons/figurinhas/figurinha-6.png";
import sticker7 from "../../../public/icons/figurinhas/figurinha-7.png";
import sticker8 from "../../../public/icons/figurinhas/figurinha-8.png";
import sticker9 from "../../../public/icons/figurinhas/figurinha-9.png";
import sticker10 from "../../../public/icons/figurinhas/figurinha-10.png";
import sticker11 from "../../../public/icons/figurinhas/figurinha-11.png";

type Sticker = {
  src: StaticImageData;
  alt: string;
};

const stickers: Sticker[] = [
  { src: sticker1, alt: "Figurinha da Copa pronta para imprimir 1" },
  { src: sticker2, alt: "Figurinha da Copa pronta para imprimir 2" },
  { src: sticker3, alt: "Figurinha da Copa pronta para imprimir 3" },
  { src: sticker4, alt: "Figurinha da Copa pronta para imprimir 4" },
  { src: sticker5, alt: "Figurinha da Copa pronta para imprimir 5" },
  { src: sticker6, alt: "Figurinha da Copa pronta para imprimir 6" },
  { src: sticker7, alt: "Figurinha da Copa pronta para imprimir 7" },
  { src: sticker8, alt: "Figurinha da Copa pronta para imprimir 8" },
  { src: sticker9, alt: "Figurinha da Copa pronta para imprimir 9" },
  { src: sticker10, alt: "Figurinha da Copa pronta para imprimir 10" },
  { src: sticker11, alt: "Figurinha da Copa pronta para imprimir 11" },
];

const loopStickers = [...stickers, ...stickers];

export default function StickerPrintSection() {
  return (
    <section className="relative overflow-hidden bg-[#101510] px-4 py-20 text-white sm:px-6 md:py-28 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.28),transparent_32%),radial-gradient(circle_at_85%_30%,rgba(250,204,21,0.18),transparent_28%)]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#bbf7d0]">
              <CheckCircleIcon className="h-4 w-4" />
              Previa das figurinhas
            </span>

            <h2 className="mt-6 text-[clamp(2rem,5vw,4rem)] font-black leading-none tracking-tight">
              Arquivos prontos para imprimir, recortar e colar.
            </h2>

            <p className="mt-5 max-w-xl text-base font-semibold leading-relaxed text-white/72 sm:text-lg">
              As imagens ficam no caminho correto do projeto e entram como
              assets locais do Next. Voce pode trocar ou acrescentar novas
              figurinhas nessa mesma pasta quando precisar.
            </p>

            <a
              href="#oferta"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#16a34a] px-8 py-4 text-base font-black text-white shadow-[0_18px_45px_rgba(22,163,74,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#15803d]"
            >
              Ver pacote completo
              <ArrowDownIcon className="h-5 w-5" />
            </a>
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#101510] to-transparent" />
            <div className="absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#101510] to-transparent" />

            <div className="overflow-hidden py-6">
              <div className="flex w-max animate-[sticker-marquee_34s_linear_infinite] gap-5 hover:[animation-play-state:paused]">
                {loopStickers.map((sticker, index) => (
                  <div
                    key={`${sticker.alt}-${index}`}
                    className="shine-card w-[150px] shrink-0 overflow-hidden rounded-2xl border border-white/12 bg-white/10 p-2 shadow-2xl shadow-black/25 sm:w-[176px]"
                  >
                    <Image
                      src={sticker.src}
                      alt={sticker.alt}
                      className="h-auto w-full rounded-xl"
                      sizes="(max-width: 640px) 150px, 176px"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              {["Tamanho real", "Alta nitidez", "Uso ilimitado"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/8 px-3 py-4 text-xs font-black uppercase tracking-wide text-white/80"
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes sticker-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50% - 10px));
          }
        }
      `}</style>
    </section>
  );
}
