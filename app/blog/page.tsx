import { buildMetadata } from "@/lib/seo";

export const revalidate = 60;

export const metadata = buildMetadata({
  title: "Blog",
  description: "Tulisan dan catatan teknis dari Muhammad Ilyas.",
  urlPath: "/blog",
});

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-6 md:py-16 min-h-screen space-y-6">
      <h1 className="text-2xl font-semibold">Blog</h1>
      <ul className="space-y-4"></ul>
    </main>
  );
}
