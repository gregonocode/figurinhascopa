"use client";

import { useActionState } from "react";

import { login, type LoginState } from "./actions";

const initialState: LoginState = {};

export default function LoginPage() {
  const [state, action, pending] = useActionState(login, initialState);

  return (
    <main className="min-h-screen bg-[#fffceb] px-4 py-8 text-[#181818]">
      <section className="mx-auto flex min-h-[calc(100vh-64px)] w-full max-w-md flex-col justify-center">
        <div className="mb-8 text-center">
          <p className="text-sm font-black uppercase text-green-700">
            Area restrita
          </p>
          <h1 className="mt-2 text-4xl font-black tracking-tight">
            Entrar no painel
          </h1>
          <p className="mt-3 text-sm leading-6 text-neutral-600">
            Acesse a dashboard para gerar e acompanhar as figurinhas da Copa.
          </p>
        </div>

        <form
          action={action}
          className="rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-black/5"
        >
          <div className="grid gap-4">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-bold">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="voce@email.com"
                className="w-full rounded-2xl border border-neutral-200 px-4 py-3 text-sm outline-none transition focus:border-green-600"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-bold"
              >
                Senha
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Digite sua senha"
                className="w-full rounded-2xl border border-neutral-200 px-4 py-3 text-sm outline-none transition focus:border-green-600"
              />
            </div>
          </div>

          {state.error && (
            <div className="mt-5 rounded-2xl bg-red-50 p-4 text-sm font-medium text-red-700">
              {state.error}
            </div>
          )}

          <button
            type="submit"
            disabled={pending}
            className="shine-card mt-6 w-full overflow-hidden rounded-2xl bg-green-600 px-5 py-4 text-sm font-black text-white shadow-lg shadow-green-900/20 transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <span className="relative z-10">
              {pending ? "Entrando..." : "Entrar"}
            </span>
          </button>
        </form>
      </section>
    </main>
  );
}
