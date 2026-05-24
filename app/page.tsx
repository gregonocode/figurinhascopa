import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7f7f7] px-4">
      <section className="max-w-lg rounded-[28px] bg-white p-8 text-center shadow-sm ring-1 ring-black/5">
        <p className="mb-2 text-sm font-bold text-green-700">
          Figurinhas da Copa
        </p>

        <h1 className="text-4xl font-black tracking-tight text-[#181818]">
          Crie sua figurinha personalizada
        </h1>

        <p className="mt-4 text-sm leading-6 text-neutral-600">
          Envie sua foto, escolha os dados da figurinha e receba tudo pronto no
          seu e-mail apos o pagamento.
        </p>

        <Link
          href="/quiz"
          className="mt-7 inline-flex w-full items-center justify-center rounded-2xl bg-green-600 px-5 py-4 text-sm font-black text-white"
        >
          Comecar agora
        </Link>
      </section>
    </main>
  );
}
