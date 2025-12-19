import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  Atom,
  Box,
  Server,
  Database,
  Layers,
  Leaf,
  Flame,
  Link as LinkIcon,
  Braces,
  Hexagon,
} from "lucide-react";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { getAllPortfolios, getPortfolioBySlug } from "@/data/json/portfolios";
import { Card, CardContent } from "@/components/ui/card";

export const revalidate = 60;

type Stack = { id?: number; stack: string };
type Pekerjaan = { id?: number; text: string };
type Portfolio = {
  id: number;
  name: string;
  slug: string;
  thumbnail: string;
  role?: string;
  description: string;
  link?: { type: string; url: string };
  stacks?: Stack[];
  pekerjaan?: Pekerjaan[];
};

export async function generateStaticParams() {
  const items = getAllPortfolios() as Array<{ slug: string }>;
  return items.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getPortfolioBySlug(slug);
  if (!item) {
    return buildMetadata({
      title: "Portofolio",
      description: "Detail portofolio tidak ditemukan.",
      urlPath: `/portfolios/${slug}`,
    });
  }
  return buildMetadata({
    title: item.name,
    description: item.description,
    urlPath: `/portfolios/${item.slug}`,
    image: item.thumbnail,
  });
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!slug) {
    notFound();
  }
  const item = getPortfolioBySlug(slug) as Portfolio | undefined;
  if (!item) {
    notFound();
  }
  const stackIcon = (label: string) => {
    const key = label.toLowerCase();
    if (key.includes("react")) return Atom;
    if (key.includes("next")) return Braces;
    if (key.includes("bootstrap")) return Box;
    if (key.includes("express")) return Server;
    if (key.includes("mysql")) return Database;
    if (key.includes("redux")) return Layers;
    if (key.includes("mongo")) return Leaf;
    if (key.includes("sass")) return Flame;
    if (key.includes("signal")) return LinkIcon;
    if (key.includes("laravel")) return Hexagon;
    if (key.includes("jquery")) return Braces;
    if (key.includes("firebase")) return Flame;
    return Box;
  };
  return (
    <main className="mx-auto max-w-2xl px-4 py-6 md:py-16 min-h-screen space-y-6">
      <div className="space-y-0">
        <h1 className="text-2xl font-semibold">{item.name}</h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-300">{item.role}</p>
      </div>
      <Card className="overflow-hidden border-none shadow-none!">
        <CardContent>
          <div className="relative aspect-4/3 w-full">
            <Image
              src={item.thumbnail}
              alt={item.name}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-contain"
              priority={false}
            />
          </div>
        </CardContent>
      </Card>
      {item.link?.url && (
        <Link
          href={item.link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-700 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-900/60"
        >
          <span>{item.link.type}</span>
          <ExternalLink size={16} />
        </Link>
      )}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Description</h2>
        <p className="text-zinc-600 dark:text-zinc-300">{item.description}</p>
      </section>
      {Array.isArray(item.stacks) && item.stacks.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Stacks</h2>
          <div className="flex flex-wrap gap-2">
            {item.stacks.map((s) => {
              const Icon = stackIcon(s.stack);
              return (
                <span
                  key={s.id ?? s.stack}
                  className="inline-flex items-center gap-2 rounded-md border border-zinc-200 bg-white px-2 py-1 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
                >
                  <Icon className="h-4 w-4" />
                  {s.stack}
                </span>
              );
            })}
          </div>
        </section>
      )}
      {Array.isArray(item.pekerjaan) && item.pekerjaan.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Jobs</h2>
          <ul className="list-disc pl-6 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            {item.pekerjaan.map((p) => (
              <li
                key={p.id ?? p.text}
                className="marker:text-zinc-400 dark:marker:text-zinc-500"
              >
                {p.text}
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
