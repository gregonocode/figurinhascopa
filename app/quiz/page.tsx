"use client";

import { useMemo, useState } from "react";

import PersonalizadaCarousel from "../components/PersonalizadaCarousel";
import "../components/css/shine.css";

type Plano = "individual" | "familia";

type Step =
  | "inicio"
  | "plano"
  | "upload"
  | "dados"
  | "preview"
  | "familia"
  | "carregando";

export default function QuizPage() {
  const [plano, setPlano] = useState<Plano | null>(null);
  const [step, setStep] = useState<Step>("inicio");

  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [time, setTime] = useState("");
  const [peso, setPeso] = useState("");
  const [imagemUrl, setImagemUrl] = useState("");

  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [erro, setErro] = useState("");

  const progresso = useMemo(() => {
    if (step === "inicio") {
      return 0;
    }

    const steps: Step[] =
      plano === "familia"
        ? ["plano", "familia"]
        : ["plano", "upload", "dados", "preview"];

    const index = Math.max(steps.indexOf(step), 0);

    return Math.round(((index + 1) / steps.length) * 100);
  }, [plano, step]);

  function escolherPlano(tipo: Plano) {
    setErro("");
    setPlano(tipo);

    if (tipo === "individual") {
      setStep("upload");
      return;
    }

    setStep("familia");
  }

  function abrirCheckoutFamilia() {
    setErro("");

    const checkoutUrl = process.env.NEXT_PUBLIC_CHECKOUT_FAMILIA_URL;

    if (!checkoutUrl) {
      setErro("URL do checkout familia nao configurada.");
      return;
    }

    window.location.href = checkoutUrl;
  }

  async function handleUpload(file: File) {
    setErro("");
    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/quiz/upload-imagem", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao enviar imagem.");
      }

      setImagemUrl(data.url);
    } catch (error) {
      setErro(
        error instanceof Error
          ? error.message
          : "Erro inesperado ao enviar imagem.",
      );
    } finally {
      setUploading(false);
    }
  }

  async function criarPedidoERedirecionar() {
    setErro("");
    setSaving(true);

    try {
      if (!plano) {
        throw new Error("Escolha um plano.");
      }

      if (!email.trim()) {
        throw new Error("Digite seu e-mail.");
      }

      if (plano === "individual") {
        if (!nome.trim()) {
          throw new Error("Digite o nome da figurinha.");
        }

        if (!imagemUrl) {
          throw new Error("Envie uma imagem antes de continuar.");
        }
      }

      const response = await fetch("/api/quiz/criar-pedido", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tipo: plano,
          email,
          nome,
          time,
          peso,
          imagem_original_url: imagemUrl,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao criar pedido.");
      }

      window.location.href = data.checkoutUrl;
    } catch (error) {
      setErro(
        error instanceof Error
          ? error.message
          : "Erro inesperado ao continuar.",
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#fffceb] px-4 py-6 text-[#181818]">
      <div className="mx-auto flex min-h-[calc(100vh-48px)] w-full max-w-xl flex-col justify-center">
        {step === "inicio" ? (
          <section className="flex min-h-[calc(100vh-48px)] flex-col justify-center text-center">
            <div className="-mx-4 mb-8 sm:-mx-20">
              <PersonalizadaCarousel />
            </div>

            <div className="mx-auto w-full max-w-md">
              <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                Crie suas proprias Figurinhas da copa
              </h1>

              <p className="mt-4 text-base font-medium leading-7 text-neutral-700">
                Para você fazer surpresa pra quem você ama!
              </p>

              <button
                onClick={() => setStep("plano")}
                className="shine-card mt-8 w-full overflow-hidden rounded-2xl bg-green-600 px-5 py-4 text-sm font-black text-white shadow-lg shadow-green-900/20 transition hover:bg-green-700"
              >
                <span className="relative z-10">INICIAR</span>
              </button>
            </div>
          </section>
        ) : (
          <>
            <div className="mb-5">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm font-semibold text-green-700">
              Figurinhas da Copa
            </span>
            <span className="text-xs font-medium text-neutral-500">
              {progresso}%
            </span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-neutral-200">
            <div
              className="h-full rounded-full bg-green-600 transition-all"
              style={{ width: `${progresso}%` }}
            />
          </div>
            </div>

            <section className="rounded-[28px] bg-white p-5 shadow-sm ring-1 ring-black/5 sm:p-7">
          {step === "plano" && (
            <div>
              <p className="mb-2 text-sm font-semibold text-green-700">
                Comece aqui
              </p>

              <h1 className="text-3xl font-black tracking-tight">
                Escolha como quer criar sua figurinha
              </h1>

              <p className="mt-3 text-sm leading-6 text-neutral-600">
                Voce pode criar uma figurinha individual e receber direto no
                e-mail, ou escolher o pacote familia. Clique uma opção abaixo 👇
              </p>

              <div className="mt-7 grid gap-3">
                <button
                  onClick={() => escolherPlano("individual")}
                  className="rounded-2xl border-2 border-green-600 bg-green-50 p-5 text-left transition hover:bg-green-100"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h2 className="text-lg font-black">Apenas 1 pessoa</h2>
                      <p className="mt-1 text-sm text-neutral-600">
                        Envie uma foto e receba sua figurinha pronta no e-mail.
                      </p>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => escolherPlano("familia")}
                  className="shine-card overflow-hidden rounded-2xl border-2 border-green-700 bg-green-600 p-6 text-left text-white shadow-lg shadow-green-900/20 transition hover:border-green-800 hover:bg-green-700"
                >
                  <div className="relative z-10 flex items-center justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-black">
                        Pacote familia +5 pessoas
                      </h2>
                      <p className="mt-1 text-sm text-white/85">
                        Pra fazer figurinha para mais de +5 pessoas
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          )}

          {step === "upload" && (
            <div>
              <button
                onClick={() => setStep("plano")}
                className="mb-5 text-sm font-semibold text-neutral-500"
              >
                Voltar
              </button>

              <h1 className="text-2xl font-black">Envie a foto</h1>

              <p className="mt-2 text-sm leading-6 text-neutral-600">
                Escolha uma foto de rosto boa, de preferencia com boa
                iluminacao.
              </p>

              <label className="mt-6 flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-neutral-300 bg-neutral-50 p-8 text-center transition hover:border-green-500 hover:bg-green-50">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(event) => {
                    const file = event.target.files?.[0];

                    if (file) {
                      handleUpload(file);
                    }
                  }}
                />

                {imagemUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={imagemUrl}
                    alt="Foto enviada"
                    className="h-52 w-full rounded-2xl object-cover"
                  />
                ) : (
                  <>
                    <div className="mb-3 rounded-full bg-white px-4 py-2 text-sm font-bold shadow-sm">
                      Selecionar imagem
                    </div>
                    <p className="text-xs text-neutral-500">
                      PNG, JPG ou WEBP ate 8MB
                    </p>
                  </>
                )}
              </label>

              {uploading && (
                <p className="mt-3 text-sm font-medium text-green-700">
                  Enviando imagem...
                </p>
              )}

              <button
                onClick={() => setStep("dados")}
                disabled={!imagemUrl || uploading}
                className="mt-6 w-full rounded-2xl bg-[#181818] px-5 py-4 text-sm font-black text-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                Continuar
              </button>
            </div>
          )}

          {step === "dados" && (
            <div>
              <button
                onClick={() => setStep("upload")}
                className="mb-5 text-sm font-semibold text-neutral-500"
              >
                Voltar
              </button>

              <h1 className="text-2xl font-black">Dados da figurinha</h1>

              <p className="mt-2 text-sm leading-6 text-neutral-600">
                Essas informacoes vao aparecer no estilo da figurinha.
              </p>

              <div className="mt-6 grid gap-4">
                <div>
                  <label className="mb-2 block text-sm font-bold">Nome</label>
                  <input
                    value={nome}
                    onChange={(event) => setNome(event.target.value)}
                    placeholder="Ex: Joao"
                    className="w-full rounded-2xl border border-neutral-200 px-4 py-3 outline-none focus:border-green-600"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold">
                    Time ou selecao
                  </label>
                  <input
                    value={time}
                    onChange={(event) => setTime(event.target.value)}
                    placeholder="Ex: Brasil"
                    className="w-full rounded-2xl border border-neutral-200 px-4 py-3 outline-none focus:border-green-600"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold">Peso</label>
                  <input
                    value={peso}
                    onChange={(event) => setPeso(event.target.value)}
                    placeholder="Ex: 32kg"
                    className="w-full rounded-2xl border border-neutral-200 px-4 py-3 outline-none focus:border-green-600"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold">
                    Seu e-mail
                  </label>
                  <input
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="voce@email.com"
                    type="email"
                    className="w-full rounded-2xl border border-neutral-200 px-4 py-3 outline-none focus:border-green-600"
                  />
                  <p className="mt-2 text-xs text-neutral-500">
                    E nesse e-mail que voce vai receber a figurinha pronta.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setStep("preview")}
                className="mt-6 w-full rounded-2xl bg-[#181818] px-5 py-4 text-sm font-black text-white"
              >
                Ver previa
              </button>
            </div>
          )}

          {step === "preview" && (
            <div>
              <button
                onClick={() => setStep("dados")}
                className="mb-5 text-sm font-semibold text-neutral-500"
              >
                Voltar
              </button>

              <h1 className="text-2xl font-black">
                Sua figurinha esta quase pronta
              </h1>

              <p className="mt-2 text-sm leading-6 text-neutral-600">
                Apos o pagamento, vamos gerar a versao final em alta qualidade e
                enviar direto no seu e-mail.
              </p>

              <div className="mt-6 overflow-hidden rounded-3xl bg-neutral-100 p-4">
                <div className="relative mx-auto aspect-[3/4] max-w-[260px] overflow-hidden rounded-3xl bg-white shadow-sm">
                  {imagemUrl && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={imagemUrl}
                      alt="Previa borrada"
                      className="h-full w-full scale-110 object-cover blur-md"
                    />
                  )}

                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4">
                    <div className="w-full rounded-2xl bg-white/90 p-3 text-center backdrop-blur">
                      <p className="text-lg font-black uppercase">
                        {nome || "Seu nome"}
                      </p>
                      <p className="text-xs font-bold text-neutral-600">
                        {time || "Sua selecao"} • {peso || "Peso"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={criarPedidoERedirecionar}
                disabled={saving}
                className="mt-6 w-full rounded-2xl bg-green-600 px-5 py-4 text-sm font-black text-white disabled:cursor-not-allowed disabled:opacity-50"
              >
                {saving ? "Preparando checkout..." : "Finalizar"}
              </button>

              <p className="mt-3 text-center text-xs text-neutral-500">
                Voce recebe a figurinha no e-mail apos a confirmacao do
                pagamento.
              </p>
            </div>
          )}

          {step === "familia" && (
            <div>
              <button
                onClick={() => setStep("plano")}
                className="mb-5 text-sm font-semibold text-neutral-500"
              >
                Voltar
              </button>

              <p className="mb-2 text-sm font-semibold text-green-700">
                Melhor custo-beneficio
              </p>

              <h1 className="text-3xl font-black tracking-tight">
                Gere ate 5 figurinhas para sua familia
              </h1>

              <p className="mt-3 text-sm leading-6 text-neutral-600">
                Voce envia as imagens das 5 pessoas e a gente gera as
                figurinhas da Copa para todo mundo entrar na brincadeira.
              </p>

              <div className="-mx-5 mt-5 sm:-mx-7">
                <PersonalizadaCarousel compact />
              </div>

              <div className="mt-5 rounded-2xl bg-green-50 p-4 text-sm leading-6 text-neutral-700">
                O pacote e ideal para familia, amigos ou grupo: separe ate 5
                fotos, escolha o pacote e siga para finalizar.
              </div>

              <button
                onClick={abrirCheckoutFamilia}
                className="shine-card mt-6 w-full overflow-hidden rounded-2xl bg-green-600 px-5 py-4 text-sm font-black text-white shadow-lg shadow-green-900/20 transition hover:bg-green-700"
              >
                <span className="relative z-10">Comprar pacote familia</span>
              </button>
            </div>
          )}

          {erro && (
            <div className="mt-5 rounded-2xl bg-red-50 p-4 text-sm font-medium text-red-700">
              {erro}
            </div>
          )}
            </section>
          </>
        )}
      </div>
    </main>
  );
}
