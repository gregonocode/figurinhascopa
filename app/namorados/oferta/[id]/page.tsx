import { createClient } from "@supabase/supabase-js";
import { Gift, Heart, Sparkles } from "lucide-react";

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
        <p>Surpresa não encontrada.</p>
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
    <main className="min-h-screen bg-gradient-to-br from-red-50 via-white to-rose-100 px-4 py-8">
      <section className="mx-auto flex min-h-[calc(100vh-64px)] max-w-lg flex-col justify-center">
        <div className="rounded-[2.2rem] border border-red-100 bg-white p-7 text-center shadow-2xl shadow-red-100">
          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-red-600 text-white shadow-xl shadow-red-200">
            <Sparkles className="h-9 w-9" />
          </div>

          <p className="text-sm font-black uppercase tracking-[0.25em] text-red-600">
            Está pronta
          </p>

          <h1 className="mt-4 text-3xl font-black tracking-tight text-zinc-950">
            {surpresa.nome_comprador}, sua página surpresa foi criada
          </h1>

          <p className="mt-4 text-sm leading-6 text-zinc-600">
            Agora falta só liberar o QR Code especial. Depois do pagamento, ele
            será enviado para o seu e-mail e você poderá entregar para{" "}
            <strong>{surpresa.nome_amor}</strong> raspar, brincar e descobrir o
            presente.
          </p>

          <div className="my-7 rounded-3xl bg-red-50 p-5">
            <div className="flex items-center justify-center gap-2 text-red-600">
              <Heart className="h-5 w-5 fill-red-600" />
              <span className="text-sm font-black">O que está incluso?</span>
            </div>

            <div className="mt-4 space-y-2 text-sm font-medium text-zinc-700">
              <p>Fotos raspáveis do casal</p>
              <p>Mensagem personalizada de Dia dos Namorados</p>
              <p>Roleta animada para revelar o presente</p>
              <p>QR Code enviado por e-mail após o pagamento</p>
            </div>
          </div>

          <a
            href={checkoutUrl}
            className="flex w-full items-center justify-center rounded-2xl bg-red-600 px-5 py-4 text-sm font-black text-white shadow-lg shadow-red-200 transition hover:bg-red-700"
          >
            <Gift className="mr-2 h-5 w-5" />
            Receber meu QR Code
          </a>

          <p className="mt-4 text-xs leading-5 text-zinc-500">
            Após o pagamento aprovado, o QR Code será enviado automaticamente
            para o e-mail informado.
          </p>
        </div>
      </section>
    </main>
  );
}
