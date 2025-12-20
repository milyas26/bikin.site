import { buildMetadata } from "@/lib/seo";
import { allOpenSources } from "contentlayer/generated";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { stackIcon } from "@/lib/utils";
import { CalendarDays } from "lucide-react";

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
              <Card className="overflow-hidden transition-colors hover:bg-muted/50 space-y-2">
                <div className="p-4 space-y-1">
                  <div className="flex items-center justify-between gap-4">
                    <p className="group-hover:underline font-semibold">
                      {post.title}
                    </p>
                    <Badge variant="secondary" className="rounded-xs px-1">
                      <div className="flex items-center">
                        <CalendarDays className="inline-block mr-2 h-4 w-4" />
                        {new Date(post.date).toLocaleDateString("id-ID", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                    </Badge>
                  </div>
                  {post.thumbnail && (
                    <div className="relative aspect-video h-32 md:h-40 overflow-hidden bg-muted flex">
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
                            className="gap-1 font-normal"
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
