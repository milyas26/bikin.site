import { allOpenSources } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { MDXRemote } from "next-mdx-remote/rsc";

export const generateStaticParams = async () => {
  return allOpenSources.map((post) => ({
    slug: post.slug,
  }));
};

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = allOpenSources.find((post) => post.slug === slug);
  if (!post) return;
  return buildMetadata({
    title: post.title,
    description: post.description,
    urlPath: `/opensources/${post.slug}`,
  });
};

export default async function OpenSourcePost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = allOpenSources.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-2xl px-4 py-6 md:py-16 min-h-screen">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <div className="text-sm text-muted-foreground">
          {new Date(post.date).toLocaleDateString("id-ID", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </header>
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <MDXRemote source={post.body.raw} />
      </div>
    </article>
  );
}
