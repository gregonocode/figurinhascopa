import { getReceitaBySlug } from "@/data/receitas";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const receita = getReceitaBySlug(slug);

  if (!receita) {
    return new Response("Receita nao encontrada.", { status: 404 });
  }

  const response = await fetch(receita.sourceUrl, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
    },
    next: {
      revalidate: 3600,
    },
  });

  if (!response.ok) {
    return new Response("Nao foi possivel carregar a receita.", {
      status: 502,
    });
  }

  const originalHtml = await response.text();
  const html = originalHtml.replace(
    /<head>/i,
    `<head>
      <base href="${receita.sourceUrl}">
      <style>
        html, body { min-height: 100%; }
        body { margin: 0; }
      </style>`,
  );

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=600, stale-while-revalidate=3600",
    },
  });
}
