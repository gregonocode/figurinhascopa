"use client";

import { useEffect, useRef, useState } from "react";

type ScratchCardProps = {
  children: React.ReactNode;
  coverText?: string;
};

export function ScratchCard({
  children,
  coverText = "Raspe para revelar",
}: ScratchCardProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.scale(dpr, dpr);

    const gradient = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    gradient.addColorStop(0, "#ef4444");
    gradient.addColorStop(1, "#be123c");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, rect.width, rect.height);

    ctx.fillStyle = "white";
    ctx.font = "700 18px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(coverText, rect.width / 2, rect.height / 2);
  }, [coverText]);

  function getPosition(e: React.PointerEvent<HTMLCanvasElement>) {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };

    const rect = canvas.getBoundingClientRect();

    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  }

  function scratch(e: React.PointerEvent<HTMLCanvasElement>) {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const { x, y } = getPosition(e);

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 24, 0, Math.PI * 2);
    ctx.fill();
  }

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-[1.7rem] border border-red-100 bg-white shadow-lg shadow-red-100"
    >
      <div className="relative z-0">{children}</div>

      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10 touch-none cursor-pointer"
        onPointerDown={(e) => {
          setIsDrawing(true);
          scratch(e);
        }}
        onPointerMove={scratch}
        onPointerUp={() => setIsDrawing(false)}
        onPointerLeave={() => setIsDrawing(false)}
      />
    </div>
  );
}