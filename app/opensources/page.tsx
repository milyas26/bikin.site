import { buildMetadata } from "@/lib/seo";
import { allOpenSources } from "contentlayer/generated";
import Link from "next/link";

export const revalidate = 60;

export const metadata = buildMetadata({
  title: "Open Source",
  description: "Proyek-proyek open source yang saya buat.",
  urlPath: "/opensources",
});

export default function OpenSourcePage() {
  const posts = allOpenSources.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main className="mx-auto max-w-2xl px-4 py-6 md:py-16 min-h-screen space-y-6">
      <h1 className="text-2xl font-semibold">Open Sources</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/opensources/${post.slug}`} className="block group">
              <h2 className="text-lg font-medium group-hover:underline">
                {post.title}
              </h2>
              <div className="text-sm text-muted-foreground mt-1">
                {new Date(post.date).toLocaleDateString("id-ID", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <p className="text-muted-foreground mt-2">{post.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
