import { getPortfolioList } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const revalidate = 60;

export const metadata = buildMetadata({
  title: "Portofolio",
  description: "Daftar proyek dan karya yang pernah saya buat.",
  urlPath: "/portfolios",
});

export default function PortfoliosPage() {
  const list = getPortfolioList();
  return (
    <main className="mx-auto max-w-2xl px-4 py-6 md:py-16 min-h-screen space-y-6">
      <h1 className="text-2xl font-semibold">Portofolio</h1>
      <ul className="grid gap-4 sm:grid-cols-2">
        {list.map((item) => (
          <li
            key={item.slug}
            className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800"
          >
            <h2 className="text-lg font-semibold">{item.title}</h2>
            {item.summary && (
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {item.summary}
              </p>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
