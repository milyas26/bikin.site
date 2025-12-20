import { mdxComponents } from "@/components/mdx-components";
import { Badge } from "@/components/ui/badge";
import { stackIcon } from "@/lib/utils";
import { allProjects } from "contentlayer/generated";
import { CalendarDays } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";

export const generateStaticParams = async () => {
  return allProjects.map((post) => ({
    slug: post.slug,
  }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const post = allProjects.find((post) => post.slug === slug);
  if (!post) return;
  return buildMetadata({
    title: post.title,
    description: post.description,
    urlPath: `/projects/${post.slug}`,
    image: post.thumbnail,
  });
};

export default async function ProjectPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = allProjects.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-2xl px-4 py-6 md:py-16 min-h-screen">
      <header className="mb-8">
        <h1 className="text-2xl font-bold mb-1">{post.title}</h1>
        <Badge variant="secondary">
          <div className="flex items-center">
            <CalendarDays className="inline-block mr-2 h-4 w-4" />
            {new Date(post.date).toLocaleDateString("id-ID", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        </Badge>
        {post.thumbnail && (
          <Image
            src={post.thumbnail}
            alt={post.title}
            width={1200}
            height={600}
            className="mt-6 rounded-lg border w-full"
          />
        )}
        {post.techStack && (
          <div className="flex flex-wrap gap-2 pt-4">
            {post.techStack.map((tech) => {
              const Icon = stackIcon(tech);
              return (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="gap-1 font-normal px-1"
                >
                  <Icon className="h-4 w-4" />
                  {tech}
                </Badge>
              );
            })}
          </div>
        )}
      </header>
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <MDXRemote source={post.body.raw} components={mdxComponents} />
      </div>
    </article>
  );
}
