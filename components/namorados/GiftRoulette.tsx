"use client";

import { useState } from "react";
import { Gift, Sparkles } from "lucide-react";
import { ScratchCard } from "./ScratchCard";

export function GiftRoulette({ presente }: { presente: string }) {
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  function start() {
    setStarted(true);

    setTimeout(() => {
      setFinished(true);
    }, 3000);
  }

  return (
    <div className="rounded-[2rem] border border-red-100 bg-white p-5 shadow-xl shadow-red-100">
      <div className="text-center">
        <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white">
          <Gift className="h-7 w-7" />
        </div>

        <h2 className="text-2xl font-black text-zinc-950">
          Chegou a hora de descobrir o presente
        </h2>

        <p className="mt-2 text-sm leading-6 text-zinc-500">
          Primeiro a surpresa vai girar. Depois, raspe para revelar.
        </p>
      </div>

      {!started && (
        <button
          onClick={start}
          className="mt-6 flex w-full items-center justify-center rounded-2xl bg-red-600 px-5 py-4 text-sm font-black text-white shadow-lg shadow-red-200"
        >
          <Sparkles className="mr-2 h-5 w-5" />
          Girar surpresa
        </button>
      )}

      {started && !finished && (
        <div className="mt-6 flex h-52 items-center justify-center">
          <div className="animate-spin rounded-full bg-red-600 p-8 text-white shadow-2xl shadow-red-200">
            <Gift className="h-16 w-16" />
          </div>
        </div>
      )}

      {finished && (
        <div className="mt-6">
          <ScratchCard coverText="Raspe para descobrir o presente">
            <div className="flex min-h-52 flex-col items-center justify-center bg-gradient-to-br from-red-50 to-rose-100 p-8 text-center">
              <Gift className="mb-4 h-12 w-12 text-red-600" />

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Seu presente é
              </p>

              <h3 className="mt-3 text-3xl font-black text-zinc-950">
                {presente}
              </h3>
            </div>
          </ScratchCard>
        </div>
      )}
    </div>
  );
}