import Link from 'next/link'
import { ExternalLink } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export const revalidate = 60;

export const metadata = buildMetadata({
  title: "Open Source",
  description: "Proyek open source yang saya bangun atau kontribusikan.",
  urlPath: "/opensources",
});

export default function OpensourcesPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-6 md:py-16 min-h-screen space-y-6">
      <h1 className="text-2xl font-semibold">Open Sources</h1>
      <ul className="space-y-3"></ul>
    </main>
  );
}