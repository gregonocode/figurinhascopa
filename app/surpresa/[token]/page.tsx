import { createClient } from "@supabase/supabase-js";
import { Heart, CalendarHeart } from "lucide-react";
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

  if (!surpresa) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-red-50 px-4 text-center">
        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <h1 className="text-2xl font-black text-zinc-950">
            Surpresa não encontrada
          </h1>
          <p className="mt-2 text-sm text-zinc-500">
            O QR Code pode ainda não ter sido liberado ou o pagamento ainda não
            foi confirmado.
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
    <main className="min-h-screen bg-gradient-to-br from-red-50 via-white to-rose-100 px-4 py-8">
      <section className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white shadow-xl shadow-red-200">
            <Heart className="h-8 w-8 fill-white" />
          </div>

          <p className="text-sm font-black uppercase tracking-[0.25em] text-red-600">
            Uma surpresa especial
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight text-zinc-950">
            {surpresa.nome_amor}, essa página foi feita para você
          </h1>

          <p className="mt-4 text-sm leading-6 text-zinc-600">
            {surpresa.nome_comprador} preparou uma experiência especial de Dia
            dos Namorados, com lembranças, carinho e uma revelação no final.
          </p>
        </div>

        <div className="mb-6 rounded-[2rem] border border-red-100 bg-white p-6 text-center shadow-xl shadow-red-100">
          <CalendarHeart className="mx-auto mb-3 h-8 w-8 text-red-600" />

          <h2 className="text-xl font-black text-zinc-950">
            Tudo começou em {surpresa.dia_conheceram} de{" "}
            {meses[surpresa.mes_conheceram]}
          </h2>

          <p className="mt-3 text-sm leading-6 text-zinc-600">
            Tem datas que passam despercebidas. Mas algumas ficam guardadas de
            um jeito diferente, porque marcam o começo de algo que vale a pena
            lembrar com carinho.
          </p>
        </div>

        {fotos.length > 0 && (
          <div className="mb-6 grid gap-4">
            {fotos.map((foto, index) => (
              <ScratchCard
                key={foto}
                coverText={`Raspe a foto ${index + 1}`}
              >
                <img
                  src={foto}
                  alt={`Foto especial ${index + 1}`}
                  className="h-[420px] w-full object-cover"
                />
              </ScratchCard>
            ))}
          </div>
        )}

        <div className="mb-6 rounded-[2rem] border border-red-100 bg-white p-6 text-center shadow-xl shadow-red-100">
          <Heart className="mx-auto mb-3 h-8 w-8 fill-red-600 text-red-600" />

          <h2 className="text-2xl font-black text-zinc-950">
            Feliz Dia dos Namorados
          </h2>

          <p className="mt-4 text-sm leading-7 text-zinc-600">
            O amor também mora nos detalhes: numa lembrança, numa foto, numa
            risada, numa data especial e até numa brincadeira para revelar um
            presente. Essa página é um jeito diferente de dizer que você é
            importante e que esse momento merece ser lembrado.
          </p>
        </div>

        <GiftRoulette presente={surpresa.presente} />
      </section>
    </main>
  );
}