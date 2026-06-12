"use client";

import { useState } from "react";
import { Heart, Gift, Camera, CalendarDays, Loader2 } from "lucide-react";

export default function NamoradosPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [nomeComprador, setNomeComprador] = useState("");
  const [nomeAmor, setNomeAmor] = useState("");
  const [dia, setDia] = useState("");
  const [mes, setMes] = useState("");
  const [presente, setPresente] = useState("");
  const [email, setEmail] = useState("");

  const [fotos, setFotos] = useState<File[]>([]);

  const stepOneValid = nomeComprador.trim() !== "" && nomeAmor.trim() !== "";
  const stepTwoValid = dia.trim() !== "" && mes.trim() !== "";
  const stepThreeValid = fotos.length > 0;
  const stepFourValid =
    presente.trim() !== "" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const canFinish = stepOneValid && stepTwoValid && stepThreeValid && stepFourValid;

  function handleFotos(files: FileList | null) {
    if (!files) return;

    const selecionadas = Array.from(files).slice(0, 3);
    setFotos(selecionadas);
  }

  async function finalizar() {
    if (!canFinish) return;

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("nomeComprador", nomeComprador);
      formData.append("nomeAmor", nomeAmor);
      formData.append("dia", dia);
      formData.append("mes", mes);
      formData.append("presente", presente);
      formData.append("email", email);

      fotos.forEach((foto, index) => {
        formData.append(`foto${index + 1}`, foto);
      });

      const res = await fetch("/api/namorados/criar-surpresa", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Erro ao criar surpresa.");
        return;
      }

      const currentParams = new URLSearchParams(window.location.search);
      const redirectUrl = currentParams.size
        ? `${data.redirectUrl}?${currentParams.toString()}`
        : data.redirectUrl;

      window.location.href = redirectUrl;
    } catch (error) {
      console.error(error);
      alert("Erro ao criar surpresa.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-red-100 px-4 py-8">
      <section className="mx-auto flex min-h-[calc(100vh-64px)] max-w-xl flex-col justify-center">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white shadow-lg shadow-red-200">
            <Heart className="h-8 w-8 fill-white" />
          </div>

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
            Dia dos Namorados
          </p>

          <h1 className="mt-3 text-3xl font-black tracking-tight text-zinc-950">
            Crie uma surpresa para o seu amor
          </h1>
        </div>

        <div className="rounded-[2rem] border border-red-100 bg-white p-6 shadow-xl shadow-red-100/70">
          <div className="mb-6 h-2 rounded-full bg-zinc-100">
            <div
              className="h-2 rounded-full bg-red-600 transition-all"
              style={{ width: `${(step / 5) * 100}%` }}
            />
          </div>

          {step === 1 && (
            <div className="space-y-5">
              <StepHeader
                icon={<Heart />}
                title="Primeiro, quem é o casal?"
                subtitle="Vamos personalizar tudo com os nomes."
              />

              <Input
                label="Seu nome"
                value={nomeComprador}
                onChange={setNomeComprador}
                placeholder="Ex: Tiago"
              />

              <Input
                label="Nome do seu amor"
                value={nomeAmor}
                onChange={setNomeAmor}
                placeholder="Ex: Maria"
              />

              <Button disabled={!stepOneValid} onClick={() => setStep(2)}>
                Continuar
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <StepHeader
                icon={<CalendarDays />}
                title="Quando vocês se conheceram?"
                subtitle="Essa data vai aparecer na surpresa."
              />

              <div className="grid grid-cols-2 gap-3">
                <Input
                  label="Dia"
                  value={dia}
                  onChange={setDia}
                  placeholder="12"
                  type="number"
                />

                <Input
                  label="Mês"
                  value={mes}
                  onChange={setMes}
                  placeholder="06"
                  type="number"
                />
              </div>

              <Navigation
                disableNext={!stepTwoValid}
                onBack={() => setStep(1)}
                onNext={() => setStep(3)}
              />
            </div>
          )}

          {step === 3 && (
            <div className="space-y-5">
              <StepHeader
                icon={<Camera />}
                title="Envie até 3 fotos especiais"
                subtitle="Elas vão ficar escondidas para a pessoa raspar e revelar."
              />

              <label className="flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-red-200 bg-red-50/60 px-6 py-10 text-center">
                <Camera className="mb-3 h-8 w-8 text-red-600" />
                <span className="text-sm font-bold text-zinc-900">
                  Clique para escolher as fotos
                </span>
                <span className="mt-1 text-xs text-zinc-500">
                  JPG, PNG ou WEBP. Máximo 3 imagens.
                </span>

                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={(e) => handleFotos(e.target.files)}
                />
              </label>

              {fotos.length > 0 && (
                <p className="text-center text-sm font-medium text-red-600">
                  {fotos.length} foto(s) selecionada(s)
                </p>
              )}

              <Navigation
                disableNext={!stepThreeValid}
                onBack={() => setStep(2)}
                onNext={() => setStep(4)}
              />
            </div>
          )}

          {step === 4 && (
            <div className="space-y-5">
              <StepHeader
                icon={<Gift />}
                title="Qual presente será revelado?"
                subtitle="Esse é o segredo principal da página."
              />

              <Input
                label="Presente"
                value={presente}
                onChange={setPresente}
                placeholder="Ex: Caixa de chocolate, tênis, cinema..."
              />

              <Input
                label="E-mail que vai receber o QR Code"
                value={email}
                onChange={setEmail}
                placeholder="seuemail@gmail.com"
                type="email"
              />

              <Navigation
                disableNext={!stepFourValid}
                onBack={() => setStep(3)}
                onNext={() => setStep(5)}
              />
            </div>
          )}

          {step === 5 && (
            <div className="space-y-5 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white">
                <Gift className="h-8 w-8" />
              </div>

              <div>
                <h2 className="text-2xl font-black text-zinc-950">
                  {nomeComprador}, sua página surpresa está sendo criada
                </h2>

                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Estamos preparando uma experiência interativa para{" "}
                  <strong>{nomeAmor}</strong>, com fotos raspáveis, mensagem
                  especial e revelação do presente.
                </p>
              </div>

              <button
                onClick={finalizar}
                disabled={loading || !canFinish}
                className="shine-button flex w-full items-center justify-center rounded-2xl bg-red-600 px-5 py-4 text-sm font-black text-white shadow-lg shadow-red-200 transition hover:bg-red-700 disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Criando surpresa...
                  </>
                ) : (
                  "Criar minha surpresa"
                )}
              </button>

              <button
                onClick={() => setStep(4)}
                className="text-sm font-semibold text-zinc-500"
              >
                Voltar
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

function StepHeader({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600">
        {icon}
      </div>

      <h2 className="text-2xl font-black text-zinc-950">{title}</h2>
      <p className="mt-2 text-sm text-zinc-500">{subtitle}</p>
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-zinc-800">
        {label}
      </span>

      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-4 text-sm outline-none transition focus:border-red-500 focus:ring-4 focus:ring-red-100"
      />
    </label>
  );
}

function Button({
  children,
  disabled,
  onClick,
}: {
  children: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="w-full rounded-2xl bg-red-600 px-5 py-4 text-sm font-black text-white shadow-lg shadow-red-200 transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {children}
    </button>
  );
}

function Navigation({
  disableNext,
  onBack,
  onNext,
}: {
  disableNext?: boolean;
  onBack: () => void;
  onNext: () => void;
}) {
  return (
    <div className="flex gap-3">
      <button
        onClick={onBack}
        className="w-full rounded-2xl border border-zinc-200 px-5 py-4 text-sm font-bold text-zinc-700"
      >
        Voltar
      </button>

      <button
        disabled={disableNext}
        onClick={onNext}
        className="w-full rounded-2xl bg-red-600 px-5 py-4 text-sm font-black text-white disabled:cursor-not-allowed disabled:opacity-50"
      >
        Continuar
      </button>
    </div>
  );
}
