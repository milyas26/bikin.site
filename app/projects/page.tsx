import { buildMetadata } from "@/lib/seo";
import { allProjects } from "contentlayer/generated";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { formatDate, stackIcon } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Open Source",
  description: "Proyek-proyek open source yang saya buat.",
  urlPath: "/projects",
});

export default function ProjectPage() {
  const posts = allProjects.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main className="mx-auto max-w-2xl px-4 py-10 md:py-20 min-h-screen">
      <div className="mb-10">
        <p className="font-mono-code text-xs tracking-widest uppercase text-accent mb-3">
          Open Source
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-black leading-tight tracking-tight text-foreground">
          Projects
        </h1>
      </div>
      <ul className="divide-y divide-border">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/projects/${post.slug}`} className="block group py-6">
              <div className="space-y-3">
                <div>
                  <p className="font-display text-base md:text-lg font-semibold leading-snug group-hover:text-accent transition-colors">
                    {post.title}
                  </p>
                  <p className="font-mono-code text-xs text-muted-foreground mt-1">
                    {formatDate(post.date, "en-US")}
                  </p>
                </div>
                {post.thumbnail && (
                  <div className="relative aspect-video overflow-hidden rounded-sm border border-border bg-muted">
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                )}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {post.description}
                </p>
                {post.techStack && (
                  <div className="flex flex-wrap gap-1.5">
                    {post.techStack.map((tech) => {
                      const Icon = stackIcon(tech);
                      return (
                        <span
                          key={tech}
                          className="inline-flex items-center gap-1.5 rounded-sm border border-border bg-card px-2 py-1 font-mono-code text-xs text-muted-foreground"
                        >
                          <Icon className="h-3 w-3 shrink-0" />
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
