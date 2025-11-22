import Link from 'next/link'
import { getBlogList } from '@/lib/content'
import { buildMetadata } from "@/lib/seo";

export const revalidate = 60

export const metadata = buildMetadata({
  title: "Blog",
  description: "Tulisan dan catatan teknis dari Muhammad Ilyas.",
  urlPath: "/blog",
});

export default function BlogPage() {
  const posts = getBlogList()
  return (
    <main className="mx-auto max-w-2xl px-4 py-6 md:py-16 min-h-screen space-y-6">
      <h1 className="text-2xl font-semibold">Blog</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li
            key={post.slug}
            className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800"
          >
            <Link
              href={`/blog/${post.slug}`}
              aria-label={`Buka ${post.title}`}
              className="block"
            >
              <h2 className="text-xl font-semibold">{post.title}</h2>
              {post.summary && (
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {post.summary}
                </p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}