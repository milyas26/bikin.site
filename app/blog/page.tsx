import { Badge } from "@/components/ui/badge";
import { buildMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";
import { allBlogs } from "contentlayer/generated";
import Link from "next/link";
import Image from "next/image";

export const metadata = buildMetadata({
  title: "Blogs",
  description: "Tulisan dan catatan teknis dari Muhammad Ilyas.",
  urlPath: "/blog",
});

export default function BlogPage() {
  const posts = allBlogs.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main className="mx-auto max-w-2xl px-4 py-10 md:py-20 min-h-screen">
      <div className="mb-10">
        <p className="font-mono-code text-xs tracking-widest uppercase text-accent mb-3">
          Writing
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-black leading-tight tracking-tight text-foreground">
          Blog
        </h1>
      </div>
      <ul className="divide-y divide-border">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="block group py-6">
              <div className="flex items-start gap-5">
                {post.thumbnail && (
                  <div className="relative w-20 h-20 shrink-0 overflow-hidden rounded-sm border border-border bg-muted">
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                )}
                <div className="flex-1 space-y-1.5 min-w-0">
                  <p className="font-display text-base md:text-lg font-semibold leading-snug group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </p>
                  <p className="font-mono-code text-xs text-muted-foreground">
                    {formatDate(post.date, "en-US")}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {post.description}
                  </p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
