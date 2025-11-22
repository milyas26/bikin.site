import { getPortfolioList } from '@/lib/content'

export const revalidate = 60

export default function PortfoliosPage() {
  const list = getPortfolioList()
  return (
    <main className="mx-auto max-w-3xl p-4 md:py-16">
      <h1 className="mb-6 text-3xl font-bold">Portofolio</h1>
      <ul className="grid gap-4 sm:grid-cols-2">
        {list.map(item => (
          <li key={item.slug} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            {item.summary && <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.summary}</p>}
          </li>
        ))}
      </ul>
    </main>
  )
}