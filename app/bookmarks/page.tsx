import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Bookmarks",
  description: "Kumpulan tautan, referensi, dan bacaan favorit.",
  urlPath: "/bookmarks",
});

export default function OpensourcesPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-6 md:py-16 min-h-screen space-y-6">
      <h1 className="text-2xl font-semibold">Bookmarks</h1>
    </main>
  );
}
