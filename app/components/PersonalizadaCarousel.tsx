"use client";

import Image from "next/image";

const stickers = [
  {
    src: "/personalizada/figu01.png",
    alt: "Figurinha personalizada da Copa 1",
  },
  {
    src: "/personalizada/figu02.png",
    alt: "Figurinha personalizada da Copa 2",
  },
  {
    src: "/personalizada/figu03.png",
    alt: "Figurinha personalizada da Copa 3",
  },
  {
    src: "/personalizada/figu04.png",
    alt: "Figurinha personalizada da Copa 4",
  },
  {
    src: "/personalizada/figu05.png",
    alt: "Figurinha personalizada da Copa 5",
  },
];

type PersonalizadaCarouselProps = {
  compact?: boolean;
};

export default function PersonalizadaCarousel({
  compact = false,
}: PersonalizadaCarouselProps) {
  const duplicatedStickers = [...stickers, ...stickers];
  const fadeClass = compact ? "from-white" : "from-[#fffceb]";
  const cardClass = compact
    ? "h-[145px] w-[104px] rounded-lg p-1.5 sm:h-[180px] sm:w-[128px]"
    : "h-[210px] w-[150px] rounded-xl p-2 sm:h-[280px] sm:w-[200px]";
  const imageClass = compact ? "rounded-md" : "rounded-lg";
  const sizes = compact
    ? "(max-width: 640px) 104px, 128px"
    : "(max-width: 640px) 150px, 200px";

  return (
    <div
      className={`relative w-full overflow-hidden ${compact ? "py-3" : "py-5"}`}
    >
      <div
        className={`pointer-events-none absolute left-0 top-0 z-10 h-full w-14 bg-gradient-to-r ${fadeClass} to-transparent sm:w-24`}
      />
      <div
        className={`pointer-events-none absolute right-0 top-0 z-10 h-full w-14 bg-gradient-to-l ${fadeClass} to-transparent sm:w-24`}
      />

      <div
        className={`flex w-max animate-personalizada-scroll ${compact ? "gap-3" : "gap-4 sm:gap-5"}`}
      >
        {duplicatedStickers.map((sticker, index) => (
          <div
            key={`${sticker.src}-${index}`}
            className={`relative shrink-0 overflow-hidden bg-white shadow-lg shadow-yellow-900/10 ring-1 ring-yellow-900/10 ${cardClass}`}
          >
            <div
              className={`relative h-full w-full overflow-hidden bg-yellow-50 ${imageClass}`}
            >
              <Image
                src={sticker.src}
                alt={sticker.alt}
                fill
                sizes={sizes}
                className="object-cover"
                priority={index < 5}
              />
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes personalizada-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .animate-personalizada-scroll {
          animation: personalizada-scroll 28s linear infinite;
        }
      `}</style>
    </div>
  );
}
