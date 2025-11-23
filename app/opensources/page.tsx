import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
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
      <h1 className="text-2xl font-semibold">Open Sources</h1>
      <ul className="space-y-3">
        {list.map((item) => (
          <li
            key={item.slug}
            className="rounded-lg p-4 transition-colors duration-200 ease-in-out bg-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                {item.summary && (
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {item.summary}
                  </p>
                )}
                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs rounded-full bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href={item.link || "#"}
                aria-label={`Buka ${item.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                Repositori
                <ExternalLink size={14} aria-hidden />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}