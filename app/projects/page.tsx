import { buildMetadata } from "@/lib/seo";
import { allProjects } from "contentlayer/generated";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDate, stackIcon } from "@/lib/utils";
import { CalendarDays } from "lucide-react";

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
    <main className="mx-auto max-w-2xl px-4 py-6 md:py-16 min-h-screen space-y-6">
      <h1 className="text-2xl font-semibold">Projects</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/projects/${post.slug}`} className="block group">
              <Card className="overflow-hidden transition-colors hover:bg-muted/50 space-y-2">
                <div className="p-4 space-y-1">
                  <p className="group-hover:underline font-semibold">
                    {post.title}
                  </p>
                  <Badge variant="secondary" className="rounded-xs px-1">
                    <div className="flex items-center text-xs font-normal">
                      <CalendarDays className="inline-block mr-1 h-3 w-3" />
                      {formatDate(post.date, "en-US")}
                    </div>
                  </Badge>
                  {post.thumbnail && (
                    <div className="relative aspect-video h-full md:h-48 overflow-hidden bg-muted flex rounded-md">
                      <Image
                        src={post.thumbnail}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                  )}
                  <p className="text-muted-foreground text-sm">
                    {post.description}
                  </p>
                  {post.techStack && (
                    <div className="flex flex-wrap gap-2">
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
                </div>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
