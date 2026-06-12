import { createClient } from "@supabase/supabase-js";
import { Heart, CalendarHeart, HeartCrack, Sparkles } from "lucide-react";
import { ScratchCard } from "@/components/namorados/ScratchCard";
import { GiftRoulette } from "@/components/namorados/GiftRoulette";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const meses = [
  "",
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];

export default async function SurpresaPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  const { data: surpresa } = await supabaseAdmin
    .from("surpresas_namorados")
    .select("*")
    .eq("token_publico", token)
    .eq("status", "pago")
    .single();

  // 1. ESTADO DE ERRO MELHORADO COM ANIMAÇÃO E ÍCONE
  if (!surpresa) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-rose-50 to-red-50 px-4 text-center">
        <div className="w-full max-w-md rounded-3xl border border-red-100 bg-white/80 p-8 shadow-2xl shadow-red-200/50 backdrop-blur-md transition-all">
          <HeartCrack className="mx-auto mb-4 h-12 w-12 animate-pulse text-red-400" />
          <h1 className="text-2xl font-black text-zinc-900">
            Surpresa não encontrada
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-zinc-500">
            O QR Code pode ainda não ter sido liberado ou o pagamento ainda não
            foi confirmado. Volte em instantes!
          </p>
        </div>
      </main>
    );
  }

  const fotos = [
    surpresa.foto_1_url,
    surpresa.foto_2_url,
    surpresa.foto_3_url,
  ].filter(Boolean);

  return (
    // 2. BACKGROUND MAIS ELEGANTE COM GRADIENTE RADIAL
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-100 via-rose-50 to-white px-4 py-12">
      <section className="mx-auto max-w-2xl">
        
        {/* CABEÇALHO */}
        <div className="mb-12 text-center">
          <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-tr from-red-600 to-rose-400 shadow-xl shadow-red-300/50 transition-transform duration-500 hover:scale-110">
            <Heart className="h-10 w-10 animate-pulse fill-white text-white" />
            <Sparkles className="absolute -right-2 -top-2 h-6 w-6 text-yellow-400" />
          </div>

          <p className="text-xs font-black uppercase tracking-[0.3em] text-red-500">
            Uma surpresa especial
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight text-zinc-900 sm:text-5xl">
            {surpresa.nome_amor}, essa página foi feita para você
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-zinc-600">
            <strong className="text-red-600">{surpresa.nome_comprador}</strong> preparou uma experiência especial de Dia
            dos Namorados, com lembranças, carinho e uma revelação no final.
          </p>
        </div>

        {/* CARD DA DATA (Efeito Hover e Glassmorphism) */}
        <div className="group mb-8 rounded-[2.5rem] border border-white/50 bg-white/60 p-8 text-center shadow-xl shadow-rose-100/50 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/80 hover:shadow-2xl hover:shadow-rose-200/60">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-rose-100 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
            <CalendarHeart className="h-7 w-7" />
          </div>

          <h2 className="text-2xl font-black text-zinc-900">
            Tudo começou em {surpresa.dia_conheceram} de{" "}
            <span className="capitalize">{meses[surpresa.mes_conheceram]}</span>
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-zinc-600">
            Tem datas que passam despercebidas. Mas algumas ficam guardadas de
            um jeito diferente, porque marcam o começo de algo que vale a pena
            lembrar com carinho.
          </p>
        </div>

        {/* ÁREA DAS FOTOS */}
        {fotos.length > 0 && (
          <div className="mb-12 grid gap-6 sm:grid-cols-2">
            {fotos.map((foto, index) => (
              <div 
                key={foto} 
                className={`overflow-hidden rounded-3xl shadow-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-red-200/50 ${index === 2 && fotos.length === 3 ? 'sm:col-span-2' : ''}`}
              >
                <ScratchCard
                  coverText={`Raspe a foto ${index + 1} ✨`}
                >
                  <img
                    src={foto}
                    alt={`Foto especial ${index + 1}`}
                    className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </ScratchCard>
              </div>
            ))}
          </div>
        )}

        {/* MENSAGEM FINAL */}
        <div className="group mb-12 rounded-[2.5rem] border border-red-100 bg-gradient-to-br from-white to-rose-50 p-8 text-center shadow-xl shadow-rose-100/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-rose-200/60">
          <Heart className="mx-auto mb-4 h-10 w-10 fill-red-500 text-red-500 transition-transform duration-300 group-hover:scale-125" />

          <h2 className="text-3xl font-black text-zinc-900">
            Feliz Dia dos Namorados
          </h2>

          <p className="mt-5 text-base leading-relaxed text-zinc-600">
            O amor também mora nos detalhes: numa lembrança, numa foto, numa
            risada, numa data especial e até numa brincadeira para revelar um
            presente. Essa página é um jeito diferente de dizer que você é
            importante e que esse momento merece ser lembrado.
          </p>
        </div>

        {/* ROLETA */}
        <div className="relative mt-8">
          <div className="absolute -inset-1 rounded-[3rem] bg-gradient-to-r from-red-400 via-rose-400 to-red-500 opacity-20 blur-lg transition-opacity duration-500 group-hover:opacity-40"></div>
          <div className="relative">
            <GiftRoulette presente={surpresa.presente} />
          </div>
        </div>

      </section>
    </main>
  );
}