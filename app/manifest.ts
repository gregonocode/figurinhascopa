import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Petiscos Faceis",
    short_name: "Petiscos",
    description: "Receitas faceis de petiscos para salvar e preparar.",
    start_url: "/receitas",
    scope: "/",
    display: "standalone",
    background_color: "#fff8f1",
    theme_color: "#e0522f",
    icons: [
      {
        src: "/icons/petiscos-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/petiscos-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icons/petiscos-maskable-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/petiscos-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
