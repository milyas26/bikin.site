import { allOpenSources } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { ComponentProps } from "react";

export const generateStaticParams = async () => {
  return allOpenSources.map((post) => ({
    slug: post.slug,
  }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const post = allOpenSources.find((post) => post.slug === slug);
  if (!post) return;
  return buildMetadata({
    title: post.title,
    description: post.description,
    urlPath: `/opensources/${post.slug}`,
  });
};

export default async function OpenSourcePost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = allOpenSources.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  const components = {
    h1: (props: ComponentProps<"h1">) => (
      <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />
    ),
    h2: (props: ComponentProps<"h2">) => (
      <h2 className="text-2xl font-semibold mt-8 mb-4" {...props} />
    ),
    h3: (props: ComponentProps<"h3">) => (
      <h3 className="text-xl font-semibold mt-6 mb-3" {...props} />
    ),
    h4: (props: ComponentProps<"h4">) => (
      <h4 className="text-lg font-semibold mt-6 mb-3" {...props} />
    ),
    p: (props: ComponentProps<"p">) => (
      <p className="leading-7 not-first:mt-6" {...props} />
    ),
    ul: (props: ComponentProps<"ul">) => (
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />
    ),
    ol: (props: ComponentProps<"ol">) => (
      <ol className="my-6 ml-6 list-decimal [&>li]:mt-2" {...props} />
    ),
    li: (props: ComponentProps<"li">) => <li className="mt-2" {...props} />,
    blockquote: (props: ComponentProps<"blockquote">) => (
      <blockquote
        className="mt-6 border-l-2 border-slate-300 pl-6 italic text-muted-foreground"
        {...props}
      />
    ),
    img: (props: ComponentProps<"img">) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        className="rounded-md border my-4 w-full"
        alt={props.alt || ""}
        {...props}
      />
    ),
    hr: (props: ComponentProps<"hr">) => (
      <hr className="my-4 md:my-8" {...props} />
    ),
    table: (props: ComponentProps<"table">) => (
      <div className="my-6 w-full overflow-y-auto">
        <table className="w-full" {...props} />
      </div>
    ),
    tr: (props: ComponentProps<"tr">) => (
      <tr className="m-0 border-t p-0 even:bg-muted" {...props} />
    ),
    th: (props: ComponentProps<"th">) => (
      <th
        className="border px-4 py-2 text-left font-bold [[align=center]]:text-center [[align=right]]:text-right"
        {...props}
      />
    ),
    td: (props: ComponentProps<"td">) => (
      <td
        className="border px-4 py-2 text-left [[align=center]]:text-center [[align=right]]:text-right"
        {...props}
      />
    ),
    pre: (props: ComponentProps<"pre">) => (
      <pre
        className="mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4 px-4 text-white"
        {...props}
      />
    ),
    code: (props: ComponentProps<"code">) => (
      <code
        className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
        {...props}
      />
    ),
  };

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
        {post.thumbnail && (
          <img
            src={post.thumbnail}
            alt={post.title}
            className="mt-6 rounded-lg border w-full"
          />
        )}
      </header>
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <MDXRemote source={post.body.raw} components={components} />
      </div>
    </article>
  );
}
