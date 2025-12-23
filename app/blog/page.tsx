import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { buildMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";
import { allBlogs } from "contentlayer/generated";
import { CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
    <main className="mx-auto max-w-2xl px-4 py-6 md:py-16 min-h-screen space-y-6">
      <h1 className="text-2xl font-semibold">Blogs</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="block group">
              <Card className="overflow-hidden transition-colors hover:bg-muted/50 space-y-2">
                <div className="grid grid-cols-3">
                  {post.thumbnail && (
                    <div className="relative h-full md:h-48 overflow-hidden bg-muted flex rounded-l-md col-span-1">
                      <Image
                        src={post.thumbnail}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-4 space-y-1 col-span-2">
                    <p className="group-hover:underline font-semibold line-clamp-2">
                      {post.title}
                    </p>
                    <Badge variant="secondary" className="rounded-xs px-1">
                      <div className="flex items-center text-xs font-normal">
                        <CalendarDays className="inline-block mr-1 h-3 w-3" />
                        {formatDate(post.date, "en-US")}
                      </div>
                    </Badge>
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {post.description}
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
