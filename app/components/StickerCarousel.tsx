"use client";

import Image from "next/image";

const stickers = [
  {
    src: "/figurinhas/figurinha-1.png",
    alt: "Figurinha da Copa 1",
  },
  {
    src: "/figurinhas/figurinha-2.png",
    alt: "Figurinha da Copa 2",
  },
  {
    src: "/figurinhas/figurinha-3.png",
    alt: "Figurinha da Copa 3",
  },
  {
    src: "/figurinhas/figurinha-4.png",
    alt: "Figurinha da Copa 4",
  },
  {
    src: "/figurinhas/figurinha-5.png",
    alt: "Figurinha da Copa 5",
  },
  {
    src: "/figurinhas/figurinha-6.png",
    alt: "Figurinha da Copa 6",
  },
  {
    src: "/figurinhas/figurinha-7.png",
    alt: "Figurinha da Copa 7",
  },
  {
    src: "/figurinhas/figurinha-8.png",
    alt: "Figurinha da Copa 8",
  },
  {
    src: "/figurinhas/figurinha-9.png",
    alt: "Figurinha da Copa 9",
  },
  {
    src: "/figurinhas/figurinha-10.png",
    alt: "Figurinha da Copa 10",
  },
  {
    src: "/figurinhas/figurinha-11.png",
    alt: "Figurinha da Copa 11",
  },
];

export default function StickerCarousel() {
  const duplicatedStickers = [...stickers, ...stickers];

  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* fade esquerda */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#f8f8f8] to-transparent sm:w-28" />

      {/* fade direita */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#f8f8f8] to-transparent sm:w-28" />

      <div className="flex w-max animate-sticker-scroll gap-4 sm:gap-6">
        {duplicatedStickers.map((sticker, index) => (
          <div
            key={`${sticker.src}-${index}`}
            className="group relative h-[190px] w-[135px] shrink-0 overflow-hidden rounded-2xl border border-zinc-200 bg-white p-2 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:h-[250px] sm:w-[178px]"
          >
            <div className="relative h-full w-full overflow-hidden rounded-xl bg-zinc-100">
              <Image
                src={sticker.src}
                alt={sticker.alt}
                fill
                sizes="(max-width: 640px) 135px, 178px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority={index < 4}
              />
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes sticker-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .animate-sticker-scroll {
          animation: sticker-scroll 32s linear infinite;
        }

        .animate-sticker-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}