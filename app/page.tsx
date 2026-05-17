"use client";

import type { MouseEvent, ReactNode } from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  XMarkIcon,
  CheckCircleIcon,
  BookOpenIcon,
  StarIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/solid";
import {
  TrophyIcon,
  SparklesIcon,
  PrinterIcon,
  BanknotesIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/outline";
import StickerPrintSection from "./components/StickerPrintSection";
import figurinhasImage from "../public/figurinhas.webp";
import albumPrintImage from "../public/figurinhas/albumimprimir.webp";
import cocaColaStickersImage from "../public/figurinhas/figurinhas-coca-cola.png";
import neymarImage from "../public/neymar.jpg";
import neymarLegendImage from "../public/neymar-legend.png";
import messiLegendImage from "../public/messi-legend.png";

const CHECKOUT_URL = "https://pay.sereja.com.br/checkout/A2MAagDq";

function getCheckoutUrl() {
  if (typeof window === "undefined") return CHECKOUT_URL;

  const currentParams = new URLSearchParams(window.location.search);
  const checkout = new URL(CHECKOUT_URL);

  currentParams.forEach((value, param) => {
    if (value) checkout.searchParams.set(param, value);
  });

  return checkout.toString();
}

// ─── DADOS ───────────────────────────────────────────────────────────────────
const stats = [
  { value: "870+", label: "Figurinhas por álbum" },
  { value: "R$700", label: "Custo médio completo" },
  { value: "0%", label: "Necessário com nossa estratégia" },
];

const painPoints = [
  "Gastar fortunas em pacotinhos repetidos",
  "Pagar preços absurdos no mercado avulso",
  "Ficar com o álbum incompleto no fim",
  "Ver seu dinheiro ir embora figurinha a figurinha",
];

const benefits = [
  {
    icon: PrinterIcon,
    title: "Tamanho Original",
    desc: "Todas as figurinhas no tamanho original, para você imprimir e usar na sua coleção sem perder a experiência de colar as figurinhas no álbum físico.",
  },
  {
    icon: BanknotesIcon,
    title: "Imprimir e vender",
    desc: "pronto para imprimir usar vender dar de presente etc",
  },
  {
    icon: RectangleStackIcon,
    title: "Álbum completo de verdade",
    desc: "Todas as paginas pra imprimir do tamanho real + Album da coca-cola",
  },
];

// ─── COMPONENTES AUXILIARES ───────────────────────────────────────────────────
type FloatingBadgeProps = {
  children: ReactNode;
  className?: string;
};

type StatCardProps = {
  value: string;
  label: string;
};

type SectionHeaderProps = {
  badge: ReactNode;
  title: ReactNode;
  description?: string;
  variant?: "green" | "red" | "yellow";
};

function FloatingBadge({ children, className = "" }: FloatingBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] ${className}`}
    >
      {children}
    </span>
  );
}

function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="flex min-w-[160px] flex-col items-center gap-1 rounded-3xl border border-zinc-200 bg-white px-6 py-5 shadow-sm">
      <span className="text-3xl font-black text-[#16a34a]">{value}</span>
      <span className="text-center text-xs font-semibold leading-tight text-zinc-500">
        {label}
      </span>
    </div>
  );
}

function SectionHeader({
  badge,
  title,
  description,
  variant = "green",
}: SectionHeaderProps) {
  const colors = {
    green: "bg-[#16a34a]/10 text-[#15803d] border-[#16a34a]/20",
    red: "bg-[#ef4444]/10 text-[#dc2626] border-[#ef4444]/20",
    yellow: "bg-[#FFD700]/20 text-[#a16207] border-[#FFD700]/40",
  };

  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <div className="mb-5 flex justify-center">
        <FloatingBadge className={`border ${colors[variant]}`}>
          {badge}
        </FloatingBadge>
      </div>

      <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black leading-tight tracking-tight text-zinc-950">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

// ─── HERO SECTION ─────────────────────────────────────────────────────────────
function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f8f8f8] px-4 py-24 sm:px-6 lg:px-8">
      {/* Fundo clean com brilho suave */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-24 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#16a34a]/10 blur-[110px]" />
        <div className="absolute bottom-10 right-[-120px] h-[320px] w-[320px] rounded-full bg-[#FFD700]/20 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center">
        {/* BADGE TOPO */}
        <div
          className={`mb-8 transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <FloatingBadge className="border border-[#16a34a]/20 bg-white text-[#15803d] shadow-sm">
            <TrophyIcon className="h-3.5 w-3.5" />
            Copa  · Álbum Completo
          </FloatingBadge>
        </div>

        {/* HEADLINE PRINCIPAL */}
        <div
          className={`max-w-5xl transition-all delay-100 duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <h1 className="font-black leading-[0.98] tracking-tight text-zinc-950">
            <span className="mb-5 block text-[clamp(1rem,3vw,1.25rem)] font-black uppercase tracking-[0.22em] text-zinc-500">
              A verdade que ninguém te conta
            </span>

            <span className="block text-[clamp(2.5rem,8vw,6.2rem)]">
              Em média, preencher um
            </span>

            <span className="block text-[clamp(2.5rem,8vw,6.2rem)]">
              álbum completo da{" "}
              <span className="relative inline-block text-[#16a34a]">
                Copa
              </span>
            </span>

            <span className="mt-2 block text-[clamp(2.2rem,7vw,5.5rem)]">
              custa de{" "}
              <span className="text-[#ef4444]">R$5000,00 a +R$7000,00</span>
            </span>
          </h1>
        </div>

        <div
          className={`mt-10 transition-all delay-150 duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <Image
            src={figurinhasImage}
            alt="Figurinhas do álbum da Copa"
            className="h-auto w-full max-w-4xl"
            priority
          />
        </div>

        {/* SUBTÍTULO */}
        <div
          className={`mt-8 max-w-3xl transition-all delay-200 duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <p className="text-[clamp(1.05rem,2.5vw,1.45rem)] font-medium leading-relaxed text-zinc-600">
            Você{" "}
            <span className="font-black text-[#15803d]">
              não precisa desembolsar esse dinheiro
            </span>{" "}
            para ter o álbum completo. basta você baixar e imprimir as figurinhas  em casa ainda hoje.
          </p>

          <a
            href="#oferta"
            className="group relative mt-5 inline-flex overflow-hidden rounded-2xl bg-[#16a34a] px-10 py-4 text-lg font-black tracking-wide text-white shadow-[0_18px_45px_rgba(22,163,74,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#15803d] hover:shadow-[0_24px_60px_rgba(22,163,74,0.35)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              <BookOpenIcon className="h-5 w-5" />
              Quero completar Hoje
            </span>
          </a>

        </div>
  </div>
          

    </section>
  );
}

// ─── DOR SECTION ──────────────────────────────────────────────────────────────
function PainSection() {
  return (
    <section className="relative bg-white px-4 py-24 sm:px-6 md:py-32 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          variant="red"
          badge={
            <>
              <XMarkIcon className="h-3.5 w-3.5" />
              A dura realidade
            </>
          }
          title="Você vai mesmo gastar sem ver o álbum completo?"
          description="Quem já tentou completar um álbum da Copa sabe como os custos aparecem aos poucos e pesam no bolso no final."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {painPoints.map((point) => (
            <div
              key={point}
              className="flex items-start gap-4 rounded-3xl border border-red-100 bg-[#fff7f7] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-md"
            >
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ef4444]/10">
                <XMarkIcon className="h-4 w-4 text-[#ef4444]" />
              </span>

              <span className="text-base font-bold leading-snug text-zinc-800">
                {point}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-3xl border border-[#FFD700]/50 bg-[#fff8d6] p-6 shadow-sm sm:p-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#FFD700]/35">
              <SparklesIcon className="h-5 w-5 text-[#ca8a04]" />
            </span>

            <div>
              <h3 className="mb-2 text-lg font-black text-zinc-950">
                Uma forma mais inteligente de completar
              </h3>

              <p className="text-base font-semibold leading-relaxed text-zinc-700">
                Você pode deixar o álbum quase completo e finalizar só com as
                seleções e jogadores que realmente quer ter na coleção.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SOLUÇÃO SECTION ──────────────────────────────────────────────────────────
function SolutionSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8f8f8] px-4 py-24 sm:px-6 md:py-32 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#16a34a]/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeader
          variant="green"
          badge={
            <>
              <CheckCircleIcon className="h-3.5 w-3.5" />
              Imprima o album completo hoje
            </>
          }
          title={
            <>
              Todas as páginas do álbum{" "}
              <span className="text-[#16a34a]">prontas para imprimir</span>
            </>
          }
          description="Você recebe o álbum completo em arquivo, pronto para imprimir, usar na sua coleção ou até vender. Enquanto um álbum físico costuma sair entre R$25 e R$70, aqui você tem o material digital para imprimir quando quiser."
        />

        <div className="mx-auto mb-16 w-full max-w-6xl">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem]">
            <Image
              src={albumPrintImage}
              alt="Páginas do álbum da Copa prontas para imprimir"
              fill
              sizes="(max-width: 768px) 100vw, 1152px"
              className="scale-[1.08] object-cover object-center"
            />
          </div>
        </div>

        {/* BENEFÍCIOS */}
        <div className="grid gap-6 sm:grid-cols-3">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#16a34a]/30 hover:shadow-md"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#16a34a]/10 transition-colors duration-300 group-hover:bg-[#16a34a]/15">
                <Icon className="h-6 w-6 text-[#16a34a]" />
              </div>

              <h3 className="mb-3 text-lg font-black text-zinc-950">
                {title}
              </h3>

              <p className="text-sm leading-relaxed text-zinc-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PREVIEW SECTION ──────────────────────────────────────────────────────────
function PreviewSection() {
  const bonusCards = [
    {
      id: "neymar-bonus",
      label: "Receba Gratis - Exclusiva",
      image: neymarImage,
      alt: "Figurinha extra do Neymar",
    },
    {
      id: "neymar-legend-bonus",
      label: "Receba Gratis - Neymar Legend",
      image: neymarLegendImage,
      alt: "Figurinha lendária do Neymar",
    },
    {
      id: "messi-legend-bonus",
      label: "Receba Gratis - Messi Legend",
      image: messiLegendImage,
      alt: "Figurinha lendária do Messi",
    },
  ];

  return (
    <section className="relative bg-white px-4 py-24 sm:px-6 md:py-32 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          variant="yellow"
          badge={
            <>
              <StarIcon className="h-3.5 w-3.5" />
              Bonus exclusivo
            </>
          }
          title={
            <>
              Comprando nos proximos 10 Minutos{" "}
              <span className="text-[#ca8a04]">Você recebe gratis</span>
            </>
          }
          description="Algumas figurinhas extra do Neymar, Neymar Lendario e do Messi"
        />

        <div className="grid gap-6 sm:grid-cols-3">
          {bonusCards.map(({ id, label, image, alt }) => (
            <div key={id} className="group">
              <div className="shine-card mb-4 aspect-[3/4] overflow-hidden rounded-3xl border border-[#FFD700]/40 bg-[#f8f8f8] shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#FFD700]/70 group-hover:shadow-xl group-hover:shadow-[#FFD700]/20">
                <Image
                  src={image}
                  alt={alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>

              <p className="text-center text-sm font-black text-zinc-800">
                {label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#oferta"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#16a34a] px-8 py-4 text-base font-black uppercase tracking-wide text-white shadow-[0_18px_45px_rgba(22,163,74,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#15803d] hover:shadow-[0_24px_60px_rgba(22,163,74,0.35)]"
          >
            <BookOpenIcon className="h-5 w-5" />
            Quero essas tambem
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── ROOT ─────────────────────────────────────────────────────────────────────
function PrintManualSection() {
  const manualItems = [
    "Passo a passo simples para imprimir no tamanho certo",
    "Indicação do melhor papel para alta qualidade",
    "Configurações recomendadas para não perder nitidez",
  ];

  return (
    <section className="relative bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#16a34a]/20 bg-[#f8fff9] p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#16a34a]/10">
            <BookOpenIcon className="h-6 w-6 text-[#16a34a]" />
          </span>

          <div className="flex-1">
            <h2 className="text-2xl font-black leading-tight text-zinc-950 sm:text-3xl">
              Manual de impressão incluso
            </h2>

            <p className="mt-3 text-base font-semibold leading-relaxed text-zinc-600">
              Você também recebe um guia simples para imprimir corretamente,
              escolher o papel ideal e deixar as figurinhas com acabamento de
              alta qualidade.
            </p>

            <div className="mt-5 grid gap-3">
              {manualItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#16a34a]" />
                  <span className="text-sm font-bold leading-snug text-zinc-700 sm:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CocaColaStickersSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8f8f8] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-8 rounded-[2rem] border border-red-100 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <FloatingBadge className="mb-5 border border-red-100 bg-red-50 text-[#dc2626]">
            Bônus Coca-Cola
          </FloatingBadge>

          <h2 className="text-3xl font-black leading-tight text-zinc-950 sm:text-4xl">
            Você também recebe todas as figurinhas da Coca-Cola
          </h2>

          <p className="mt-4 text-base font-semibold leading-relaxed text-zinc-600 sm:text-lg">
            Além das figurinhas da Copa, o pacote inclui a coleção da
            Coca-Cola para imprimir, completar e deixar seu material ainda mais
            exclusivo.
          </p>

          <div className="mt-5 flex items-start gap-3">
            <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#16a34a]" />
            <span className="text-sm font-bold leading-snug text-zinc-700 sm:text-base">
              Arquivos prontos para imprimir quantas vezes quiser.
            </span>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-[#f8f8f8] shadow-sm">
          <Image
            src={cocaColaStickersImage}
            alt="Figurinhas da Coca-Cola para imprimir"
            className="h-auto w-full"
            sizes="(max-width: 1024px) 100vw, 560px"
          />
        </div>
      </div>
    </section>
  );
}

function OfferSection() {
  const weekday = new Intl.DateTimeFormat("pt-BR", { weekday: "long" }).format(
    new Date()
  );
  const offerItems = [
    "Todas as figurinhas da Copa +980",
    "Álbum para imprimir quantos quiser",
    "Álbum da Coca-Cola de figurinhas",
    "Bônus especial de figurinhas Neymar e Messi Legend",
  ];

  function handleCheckoutClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    window.location.href = getCheckoutUrl();
  }


  return (
    <section
      id="oferta"
      className="relative overflow-hidden bg-[#f8f8f8] px-4 py-24 sm:px-6 md:py-32 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-16 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#16a34a]/12 blur-[115px]" />
        <div className="absolute bottom-0 right-[-140px] h-[360px] w-[360px] rounded-full bg-[#FFD700]/25 blur-[110px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl rounded-[2rem] border border-[#16a34a]/20 bg-white p-6 text-center shadow-[0_24px_80px_rgba(22,163,74,0.16)] sm:p-10">
        <FloatingBadge className="mb-6 border border-[#FFD700]/50 bg-[#fff8d6] text-[#a16207]">
          Pacote completo
        </FloatingBadge>

        <div className="space-y-2">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-zinc-500">
            Oferta especial
          </p>

          <p className="text-base font-extrabold text-zinc-800 sm:text-lg">
            Apenas hoje <span suppressHydrationWarning>{weekday}</span> de{" "}
            <span className="text-zinc-400 line-through">R$67</span> por
            apenas:
          </p>
        </div>

        <div className="my-5 flex items-end justify-center gap-2 text-[#16a34a]">
          <span className="mb-3 text-3xl font-black">R$</span>
          <span className="text-[clamp(5rem,18vw,9rem)] font-black leading-none tracking-normal">
            17
          </span>
        </div>

        <div className="mx-auto mt-8 grid max-w-2xl gap-3 text-left">
          {offerItems.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-[#f8f8f8] p-4"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#16a34a]">
                <CheckCircleIcon className="h-4 w-4 text-white" />
              </span>
              <span className="text-sm font-extrabold leading-snug text-zinc-800 sm:text-base">
                {item}
              </span>
            </div>
          ))}
        </div>

        <a
          href={CHECKOUT_URL}
          onClick={handleCheckoutClick}
          className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#16a34a] px-8 py-4 text-lg font-black text-white shadow-[0_18px_45px_rgba(22,163,74,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#15803d] hover:shadow-[0_24px_60px_rgba(22,163,74,0.38)] sm:w-auto"
        >
          <BookOpenIcon className="h-5 w-5" />
          Receber agora
        </a>
      </div>
    </section>
  );
}

export default function LandingPage() {
  return (
    <main className="font-sans antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700;800;900&display=swap');

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: 'DM Sans', sans-serif;
          background: #f8f8f8;
          color: #09090b;
        }

        h1, h2, h3 {
          font-family: 'DM Sans', sans-serif;
        }

        h1 {
          font-family: 'Bebas Neue', 'DM Sans', sans-serif;
          letter-spacing: 0.02em;
        }
      `}</style>

      <HeroSection />
      <PainSection />
      <StickerPrintSection />
      <SolutionSection />
      <PrintManualSection />
      <PreviewSection />
      <CocaColaStickersSection />
      <OfferSection />
    </main>
  );
}
