import Link from 'next/link'
import { getOpenSourceList } from '@/lib/content'
import { buildMetadata } from "@/lib/seo";

export const revalidate = 60;

export const metadata = buildMetadata({
  title: "Open Source",
  description: "Proyek open source yang saya bangun atau kontribusikan.",
  urlPath: "/opensources",
});

export default function OpensourcesPage() {
  const list = getOpenSourceList()
  return (
    <main className="mx-auto max-w-2xl px-4 py-6 md:py-16 min-h-screen space-y-6">
      <h1 className="text-2xl font-semibold">Proyek Open Source</h1>
      <ul className="space-y-3">
        {list.map((item) => (
          <li
            key={item.slug}
            className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">{item.title}</h2>
                {item.summary && (
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {item.summary}
                  </p>
                )}
              </div>
              <Link
                href={`https://github.com/${item.slug}`}
                aria-label={`Buka ${item.title}`}
                className="text-sm text-blue-600 hover:underline"
              >
                Repositori
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}