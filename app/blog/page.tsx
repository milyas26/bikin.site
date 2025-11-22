import Link from 'next/link'
import { getBlogList } from '@/lib/content'

export const revalidate = 60

export default function BlogPage() {
  const posts = getBlogList()
  return (
    <main className="mx-auto max-w-3xl p-4 md:py-16">
      <h1 className="mb-6 text-3xl font-bold">Blog</h1>
      <ul className="space-y-4">
        {posts.map(post => (
          <li key={post.slug} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
            <Link href={`/blog/${post.slug}`} aria-label={`Buka ${post.title}`} className="block">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              {post.summary && <p className="text-sm text-zinc-600 dark:text-zinc-400">{post.summary}</p>}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}