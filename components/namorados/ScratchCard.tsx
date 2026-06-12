"use client";

import { useEffect, useRef, useState } from "react";

type ScratchCardProps = {
  children: React.ReactNode;
  coverText?: string;
  revealThreshold?: number;
  onReveal?: () => void;
};

export function ScratchCard({
  children,
  coverText = "Raspe para revelar",
  revealThreshold = 0.5,
  onReveal,
}: ScratchCardProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const hasRevealedRef = useRef(false);
  const progressFrameRef = useRef<number | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

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

    hasRevealedRef.current = false;
    setIsRevealed(false);
  }, [coverText]);

  useEffect(() => {
    return () => {
      if (progressFrameRef.current) {
        cancelAnimationFrame(progressFrameRef.current);
      }
    };
  }, []);

  function getPosition(e: React.PointerEvent<HTMLCanvasElement>) {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };

    const rect = canvas.getBoundingClientRect();

    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  }

  function scratch(e: React.PointerEvent<HTMLCanvasElement>, force = false) {
    if ((!force && !isDrawing) || isRevealed) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const { x, y } = getPosition(e);

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 24, 0, Math.PI * 2);
    ctx.fill();

    scheduleRevealCheck();
  }

  function scheduleRevealCheck() {
    if (!onReveal || hasRevealedRef.current || progressFrameRef.current) {
      return;
    }

    progressFrameRef.current = requestAnimationFrame(() => {
      progressFrameRef.current = null;
      checkRevealProgress();
    });
  }

  function checkRevealProgress() {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d", { willReadFrequently: true });
    if (!canvas || !ctx || hasRevealedRef.current) return;

    const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let transparentPixels = 0;
    const totalPixels = canvas.width * canvas.height;

    for (let i = 3; i < data.length; i += 4) {
      if (data[i] === 0) {
        transparentPixels += 1;
      }
    }

    if (transparentPixels / totalPixels >= revealThreshold) {
      hasRevealedRef.current = true;
      setIsDrawing(false);
      setIsRevealed(true);
      onReveal?.();
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-[1.7rem] border border-red-100 bg-white shadow-lg shadow-red-100"
    >
      <div className="relative z-0">{children}</div>

      <canvas
        ref={canvasRef}
        className={`absolute inset-0 z-10 touch-none cursor-pointer transition-opacity duration-700 ${
          isRevealed ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
        onPointerDown={(e) => {
          e.currentTarget.setPointerCapture(e.pointerId);
          setIsDrawing(true);
          scratch(e, true);
        }}
        onPointerMove={scratch}
        onPointerUp={() => setIsDrawing(false)}
        onPointerLeave={() => setIsDrawing(false)}
      />
    </div>
  );
}
