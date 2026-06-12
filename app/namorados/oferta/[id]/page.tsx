import { createClient } from "@supabase/supabase-js";
import { CheckCircle2, Gift, Heart, ShieldCheck, Sparkles } from "lucide-react";
import { LoveCarousel } from "@/components/namorados/LoveCarousel";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const CHECKOUT_SEREJA_URL = "https://pay.sereja.com.br/checkout/u27GYaB3";

export default async function OfertaNamoradosPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { id } = await params;
  const queryParams = await searchParams;

  const { data: surpresa } = await supabaseAdmin
    .from("surpresas_namorados")
    .select("*")
    .eq("id", id)
    .single();

  if (!surpresa) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p>Surpresa nao encontrada.</p>
      </main>
    );
  }

  const checkoutParams = new URLSearchParams();
  checkoutParams.set("external_ref", surpresa.id);

  for (const [key, value] of Object.entries(queryParams)) {
    if (!value || key === "external_ref") continue;

    if (Array.isArray(value)) {
      value.forEach((item) => checkoutParams.append(key, item));
    } else {
      checkoutParams.set(key, value);
    }
  }

  const checkoutUrl = `${CHECKOUT_SEREJA_URL}?${checkoutParams.toString()}`;

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_#ffe4e6,_transparent_34%),linear-gradient(135deg,_#fff1f2,_#ffffff_46%,_#ffe4e6)] px-4 py-8">
      <section className="mx-auto flex min-h-[calc(100vh-64px)] max-w-xl items-center">
        <div className="w-full rounded-[2rem] border border-red-100 bg-white/85 p-6 shadow-2xl shadow-red-100 backdrop-blur md:p-8">
            <div className="mb-5 inline-flex items-center rounded-full bg-red-50 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-red-600">
              <Sparkles className="mr-2 h-4 w-4" />
              Esta pronta
            </div>

            <h1 className="text-3xl font-black tracking-tight text-zinc-950 sm:text-4xl">
              {surpresa.nome_comprador}, sua pagina surpresa foi criada
            </h1>

            <p className="mt-4 text-sm leading-6 text-zinc-600 sm:text-base sm:leading-7">
              Agora falta so liberar o QR Code especial. Depois do pagamento,
              ele sera enviado para o seu e-mail e voce podera entregar para{" "}
              <strong>{surpresa.nome_amor}</strong> raspar, brincar e descobrir
              o presente.
            </p>

            <div className="my-7 rounded-[1.5rem] bg-red-50 p-5">
              <div className="flex items-center gap-2 text-red-600">
                <Heart className="h-5 w-5 fill-red-600" />
                <span className="text-sm font-black">O que esta incluso?</span>
              </div>

              <div className="mt-4 grid gap-3 text-sm font-semibold text-zinc-700 sm:grid-cols-2">
                {[
                  "Fotos raspaveis do casal",
                  "Mensagem personalizada",
                  "Roleta animada do presente",
                  "QR Code enviado por e-mail",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7 border-t border-red-100 pt-5 text-center">
                <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-red-500">
                  Imagens de exemplo de como vai ficar
                </p>
                <LoveCarousel />
              </div>
            </div>

            <div className="mb-4 rounded-[1.5rem] border border-red-100 bg-white p-4 text-sm font-semibold leading-6 text-zinc-700 shadow-lg shadow-red-50">
              A ideia e que, assim que raspar para descobrir o presente, voce
              entregue esse presente para{" "}
              <strong className="text-red-600">{surpresa.nome_amor}</strong>.
            </div>

            <div className="mb-4 flex items-end justify-between gap-4 rounded-[1.5rem] border border-red-100 bg-white p-4 shadow-lg shadow-red-50">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-red-500">
                  RECEBA AGORA APENAS:
                </p>
                <p className="mt-1 text-3xl font-black text-zinc-950">
                  R$ 12,00
                </p>
              </div>

              <div className="flex items-center gap-2 text-right text-xs font-bold leading-5 text-zinc-500">
                <ShieldCheck className="h-5 w-5 shrink-0 text-red-600" />
                Pagamento seguro
              </div>
            </div>

            <a
              href={checkoutUrl}
              className="flex w-full items-center justify-center rounded-2xl bg-red-600 px-5 py-4 text-sm font-black text-white shadow-lg shadow-red-200 transition hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-xl"
            >
              <Gift className="mr-2 h-5 w-5" />
              Receber meu QR Code
            </a>

            <p className="mt-4 text-center text-xs leading-5 text-zinc-500">
              Apos o pagamento aprovado, o QR Code sera enviado automaticamente
              para o e-mail informado.
            </p>
        </div>
      </section>
    </main>
  );
}
