"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  "/love/love-01.png",
  "/love/love-02.png",
  "/love/love-03.png",
  "/love/love-04.png",
  "/love/love-05.png",
];

export function LoveCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 2800);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-[270px]">
      <div className="absolute -inset-3 rounded-[2rem] bg-red-200/45 blur-xl" />
      <div className="relative overflow-hidden rounded-[1.7rem] border border-white/70 bg-white shadow-2xl shadow-red-100">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={slide} className="relative aspect-[354/534] min-w-full">
              <Image
                src={slide}
                alt={`Preview da surpresa romântica ${index + 1}`}
                fill
                priority={index === 0}
                sizes="(max-width: 640px) 270px, 270px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide}
            type="button"
            aria-label={`Mostrar preview ${index + 1}`}
            onClick={() => setActiveSlide(index)}
            className={`h-2 rounded-full transition-all ${
              activeSlide === index ? "w-7 bg-red-600" : "w-2 bg-red-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
