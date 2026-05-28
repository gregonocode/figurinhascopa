"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Pedido = {
  id: string;
  nome: string | null;
  profissao: string | null;
  peso: string | null;
  time: string | null;
  status: string;
  erro: string | null;
  imagem_original_url: string | null;
  imagem_final_url: string | null;
  created_at: string;
};

type GerarResponse = {
  ok?: boolean;
  pedido?: Pedido;
  creditos_restantes?: number;
  error?: string;
  details?: string;
};

type PedidoResponse = {
  ok?: boolean;
  pedido?: Pedido;
  error?: string;
  details?: string;
};

type Props = {
  userEmail: string;
  creditosIniciais: number;
  pedidosIniciais: Pedido[];
};

const statusLabel: Record<string, string> = {
  pago: "Na fila",
  gerando: "Gerando",
  enviado: "Pronta",
  concluido: "Concluída",
  erro: "Erro",
};

export default function GeradorFigurinhaClient({
  userEmail,
  creditosIniciais,
  pedidosIniciais,
}: Props) {
  const [creditos, setCreditos] = useState(creditosIniciais);
  const [pedidos, setPedidos] = useState<Pedido[]>(pedidosIniciais);

  const [foto, setFoto] = useState<File | null>(null);
  const [previewLocal, setPreviewLocal] = useState<string | null>(null);

  const [nome, setNome] = useState("");
  const [profissao, setProfissao] = useState("");
  const [time, setTime] = useState("");

  const [pedidoAtivoId, setPedidoAtivoId] = useState<string | null>(null);
  const [gerando, setGerando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const pedidoAtivo = useMemo(() => {
    if (!pedidoAtivoId) return null;
    return pedidos.find((pedido) => pedido.id === pedidoAtivoId) || null;
  }, [pedidoAtivoId, pedidos]);

  const podeGerar = creditos > 0 && foto && nome.trim() && profissao.trim() && time.trim();

  function atualizarPedidoNaLista(pedidoAtualizado: Pedido) {
    setPedidos((pedidosAtuais) => {
      const existe = pedidosAtuais.some((pedido) => pedido.id === pedidoAtualizado.id);

      if (!existe) {
        return [pedidoAtualizado, ...pedidosAtuais];
      }

      return pedidosAtuais.map((pedido) =>
        pedido.id === pedidoAtualizado.id ? pedidoAtualizado : pedido
      );
    });
  }

  function handleFotoChange(file: File | null) {
    setFoto(file);
    setErro(null);

    if (previewLocal) {
      URL.revokeObjectURL(previewLocal);
    }

    if (!file) {
      setPreviewLocal(null);
      return;
    }

    setPreviewLocal(URL.createObjectURL(file));
  }

  async function gerarFigurinha() {
    if (!podeGerar || !foto) {
      setErro("Preencha todos os campos e envie uma foto.");
      return;
    }

    setGerando(true);
    setErro(null);

    try {
      const formData = new FormData();
      formData.append("foto", foto);
      formData.append("nome", nome.trim());
      formData.append("profissao", profissao.trim());
      formData.append("time", time.trim());

      const response = await fetch("/api/figurinhas/gerar", {
        method: "POST",
        body: formData,
      });

      const json = (await response.json()) as GerarResponse;

      if (!response.ok || !json.ok || !json.pedido) {
        throw new Error(json.error || json.details || "Erro ao gerar figurinha.");
      }

      setCreditos(Number(json.creditos_restantes ?? creditos - 1));
      setPedidoAtivoId(json.pedido.id);
      atualizarPedidoNaLista(json.pedido);

      setNome("");
      setProfissao("");
      setTime("");
      setFoto(null);

      if (previewLocal) {
        URL.revokeObjectURL(previewLocal);
        setPreviewLocal(null);
      }

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      setErro(error instanceof Error ? error.message : "Erro desconhecido.");
    } finally {
      setGerando(false);
    }
  }

  useEffect(() => {
    if (!pedidoAtivoId) return;

    const pedido = pedidos.find((item) => item.id === pedidoAtivoId);

    if (pedido?.status === "enviado" || pedido?.status === "concluido" || pedido?.status === "erro") {
      return;
    }

    const interval = window.setInterval(async () => {
      try {
        const response = await fetch(`/api/figurinhas/pedidos/${pedidoAtivoId}`, {
          cache: "no-store",
        });

        const json = (await response.json()) as PedidoResponse;

        if (response.ok && json.pedido) {
          atualizarPedidoNaLista(json.pedido);
        }
      } catch {
        // evita quebrar a tela se uma consulta falhar
      }
    }, 3500);

    return () => window.clearInterval(interval);
  }, [pedidoAtivoId, pedidos]);

  return (
    <>
      <section className="mt-6 grid gap-5 md:grid-cols-3">
        <div className="rounded-[28px] bg-[#181818] p-5 text-white shadow-sm md:col-span-2">
          <p className="text-sm font-black uppercase text-green-400">
            Seus créditos
          </p>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-5xl font-black tracking-tight">{creditos}</p>
              <p className="mt-2 text-sm text-white/70">
                Cada crédito gera 1 figurinha personalizada.
              </p>
            </div>

            <a
              href="/comprar-creditos"
              className="inline-flex rounded-2xl bg-green-500 px-5 py-3 text-sm font-black text-white transition hover:bg-green-600"
            >
              Comprar mais créditos
            </a>
          </div>
        </div>

        <div className="rounded-[28px] bg-white p-5 shadow-sm ring-1 ring-black/5">
          <p className="text-sm font-black uppercase text-green-700">
            Conta
          </p>
          <p className="mt-3 break-all text-sm font-bold text-neutral-700">
            {userEmail}
          </p>
          <p className="mt-3 text-sm leading-6 text-neutral-500">
            Gere suas figurinhas e baixe direto pela dashboard quando ficarem prontas.
          </p>
        </div>
      </section>

      <section className="mt-6 grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="rounded-[28px] bg-white p-5 shadow-sm ring-1 ring-black/5 sm:p-7">
          <div className="mb-6">
            <p className="text-sm font-bold text-green-700">Nova figurinha</p>
            <h2 className="mt-1 text-2xl font-black tracking-tight">
              Dados para gerar
            </h2>
            <p className="mt-2 text-sm text-neutral-500">
              Preencha os dados, envie uma foto do rosto e aguarde a geração.
            </p>
          </div>

          <div className="grid gap-4">
            <div>
              <label className="mb-2 block text-sm font-bold">Foto do rosto</label>

              <label className="flex min-h-44 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-3xl border-2 border-dashed border-neutral-300 bg-neutral-50 p-4 text-center transition hover:border-green-500 hover:bg-green-50">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(event) => handleFotoChange(event.target.files?.[0] || null)}
                />

                {previewLocal ? (
                  <img
                    src={previewLocal}
                    alt="Preview da foto enviada"
                    className="h-44 w-full rounded-2xl object-cover"
                  />
                ) : (
                  <>
                    <span className="rounded-full bg-white px-4 py-2 text-sm font-black shadow-sm">
                      Selecionar imagem
                    </span>
                    <span className="mt-3 text-xs text-neutral-500">
                      PNG, JPG ou WEBP até 8MB
                    </span>
                  </>
                )}
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <label className="mb-2 block text-sm font-bold">Nome</label>
                <input
                  value={nome}
                  onChange={(event) => setNome(event.target.value)}
                  placeholder="Ex: Tiago"
                  className="w-full rounded-2xl border border-neutral-200 px-4 py-3 text-sm outline-none focus:border-green-600"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  Profissão/posição
                </label>
                <input
                  value={profissao}
                  onChange={(event) => setProfissao(event.target.value)}
                  placeholder="Ex: Atacante"
                  className="w-full rounded-2xl border border-neutral-200 px-4 py-3 text-sm outline-none focus:border-green-600"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  Time/seleção
                </label>
                <input
                  value={time}
                  onChange={(event) => setTime(event.target.value)}
                  placeholder="Ex: Brasil"
                  className="w-full rounded-2xl border border-neutral-200 px-4 py-3 text-sm outline-none focus:border-green-600"
                />
              </div>
            </div>

            {erro ? (
              <div className="rounded-2xl bg-red-50 p-4 text-sm font-bold text-red-700">
                {erro}
              </div>
            ) : null}

            {creditos <= 0 ? (
              <div className="rounded-2xl bg-yellow-50 p-4 text-sm font-bold text-yellow-800">
                Você não possui créditos disponíveis.
              </div>
            ) : null}

            <button
              type="button"
              disabled={!podeGerar || gerando}
              onClick={gerarFigurinha}
              className="mt-2 rounded-2xl bg-green-600 px-5 py-4 text-sm font-black text-white shadow-lg shadow-green-900/20 transition hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-neutral-300 disabled:shadow-none"
            >
              {gerando ? "Enviando para geração..." : "Gerar figurinha"}
            </button>
          </div>
        </div>

        <aside className="rounded-[28px] bg-white p-5 shadow-sm ring-1 ring-black/5 sm:p-7">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-bold text-green-700">Prévia</p>
              <h2 className="mt-1 text-xl font-black tracking-tight">
                Resultado
              </h2>
            </div>

            {pedidoAtivo ? (
              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-black text-green-700">
                {statusLabel[pedidoAtivo.status] || pedidoAtivo.status}
              </span>
            ) : null}
          </div>

          <div className="mt-5 rounded-3xl bg-neutral-100 p-4">
            <div className="mx-auto flex aspect-[2/3] max-w-[300px] items-center justify-center overflow-hidden rounded-3xl bg-white shadow-sm">
              {pedidoAtivo?.imagem_final_url ? (
                <img
                  src={pedidoAtivo.imagem_final_url}
                  alt="Figurinha final gerada"
                  className="h-full w-full object-contain"
                />
              ) : previewLocal ? (
                <div className="flex h-full w-full flex-col justify-end bg-gradient-to-br from-green-600 via-yellow-300 to-blue-600 p-4">
                  <div className="rounded-2xl bg-white/95 p-4 text-center backdrop-blur">
                    <p className="text-xl font-black uppercase">
                      {nome || "Sua figurinha"}
                    </p>
                    <p className="mt-1 text-xs font-bold text-neutral-600">
                      {profissao || "Profissão"} • {time || "Time"}
                    </p>
                  </div>
                </div>
              ) : pedidoAtivo ? (
                <div className="px-6 text-center">
                  <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-green-600 border-t-transparent" />
                  <p className="mt-4 text-sm font-black">
                    Sua figurinha está sendo gerada...
                  </p>
                  <p className="mt-2 text-xs text-neutral-500">
                    Isso pode levar alguns segundos.
                  </p>
                </div>
              ) : (
                <div className="px-6 text-center">
                  <p className="text-xl font-black uppercase">Sua figurinha</p>
                  <p className="mt-2 text-xs font-bold text-neutral-500">
                    Preencha os dados para montar a prévia.
                  </p>
                </div>
              )}
            </div>
          </div>

          {pedidoAtivo?.erro ? (
            <div className="mt-5 rounded-2xl bg-red-50 p-4 text-sm font-bold text-red-700">
              {pedidoAtivo.erro}
            </div>
          ) : null}

          {pedidoAtivo?.imagem_final_url ? (
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <a
                href={pedidoAtivo.imagem_final_url}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-[#181818] px-5 py-3 text-center text-sm font-black text-white transition hover:bg-black"
              >
                Abrir
              </a>

              <a
                href={pedidoAtivo.imagem_final_url}
                download
                className="rounded-2xl bg-green-600 px-5 py-3 text-center text-sm font-black text-white transition hover:bg-green-700"
              >
                Baixar
              </a>
            </div>
          ) : (
            <div className="mt-5 rounded-2xl bg-green-50 p-4 text-sm leading-6 text-neutral-700">
              A figurinha será exibida aqui assim que o worker terminar a geração.
            </div>
          )}
        </aside>
      </section>

      <section className="mt-6 rounded-[28px] bg-white p-5 shadow-sm ring-1 ring-black/5 sm:p-7">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold text-green-700">Histórico</p>
            <h2 className="mt-1 text-2xl font-black tracking-tight">
              Últimas figurinhas
            </h2>
          </div>
        </div>

        {pedidos.length === 0 ? (
          <div className="mt-5 rounded-2xl bg-neutral-50 p-5 text-sm font-bold text-neutral-500">
            Nenhuma figurinha gerada ainda.
          </div>
        ) : (
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pedidos.map((pedido) => (
              <article
                key={pedido.id}
                className="overflow-hidden rounded-3xl border border-neutral-100 bg-neutral-50"
              >
                <button
                  type="button"
                  onClick={() => setPedidoAtivoId(pedido.id)}
                  className="block w-full text-left"
                >
                  <div className="aspect-[2/3] bg-white">
                    {pedido.imagem_final_url ? (
                      <img
                        src={pedido.imagem_final_url}
                        alt={`Figurinha de ${pedido.nome || "jogador"}`}
                        className="h-full w-full object-contain"
                      />
                    ) : pedido.imagem_original_url ? (
                      <img
                        src={pedido.imagem_original_url}
                        alt={`Foto original de ${pedido.nome || "jogador"}`}
                        className="h-full w-full object-cover opacity-70"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-sm font-bold text-neutral-400">
                        Sem imagem
                      </div>
                    )}
                  </div>

                  <div className="p-4">
                    <p className="truncate text-sm font-black">
                      {pedido.nome || "Sem nome"}
                    </p>
                    <p className="mt-1 truncate text-xs font-bold text-neutral-500">
                      {pedido.profissao || pedido.peso || "Sem profissão"} •{" "}
                      {pedido.time || "Sem time"}
                    </p>

                    <span className="mt-3 inline-flex rounded-full bg-white px-3 py-1 text-xs font-black text-neutral-700">
                      {statusLabel[pedido.status] || pedido.status}
                    </span>
                  </div>
                </button>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}