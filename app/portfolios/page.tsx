import { buildMetadata } from "@/lib/seo";

export const revalidate = 60;

export const metadata = buildMetadata({
  title: "Portofolio",
  description: "Daftar proyek dan karya yang pernah saya buat.",
  urlPath: "/portfolios",
});

export default function PortfoliosPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-6 md:py-16 min-h-screen space-y-6">
      <h1 className="text-2xl font-semibold">Portofolio</h1>
      <ul className="grid gap-4 sm:grid-cols-2"></ul>
    </main>
  );
}
