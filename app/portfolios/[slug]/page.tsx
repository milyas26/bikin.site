import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { getAllPortfolios, getPortfolioBySlug } from "@/data/json/portfolios";
import { Card, CardContent } from "@/components/ui/card";
import { stackIcon } from "@/lib/utils";

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

  return (
    <main className="mx-auto max-w-2xl px-4 py-10 md:py-20 min-h-screen space-y-6">
      <div>
        <Link
          href="/portfolios"
          className="inline-flex items-center gap-1.5 font-mono-code text-xs text-muted-foreground hover:text-accent transition-colors duration-150"
        >
          <ArrowLeft size={12} />
          Portfolios
        </Link>
      </div>
      <div className="space-y-0">
        <h1 className="font-display text-3xl md:text-4xl font-black leading-tight tracking-tight">{item.name}</h1>
        <p className="text-sm text-muted-foreground mt-1">{item.role}</p>
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
          className="inline-flex items-center gap-2 rounded-sm border border-border bg-card px-3 py-2 font-mono-code text-xs text-foreground hover:border-accent hover:text-accent transition-colors duration-150"
        >
          <span>{item.link.type}</span>
          <ExternalLink size={16} />
        </Link>
      )}
      <section className="space-y-3">
        <h2 className="font-mono-code text-xs tracking-widest uppercase text-muted-foreground">Description</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
      </section>
      {Array.isArray(item.stacks) && item.stacks.length > 0 && (
        <section className="space-y-3">
        <h2 className="font-mono-code text-xs tracking-widest uppercase text-muted-foreground">Stacks</h2>
          <div className="flex flex-wrap gap-2">
            {item.stacks.map((s) => {
              const Icon = stackIcon(s.stack);
              return (
                <span
                  key={s.id ?? s.stack}
                  className="inline-flex items-center gap-1.5 rounded-sm border border-border bg-card px-2 py-1 font-mono-code text-xs text-foreground hover:border-accent hover:text-accent transition-colors duration-150"
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
        <h2 className="font-mono-code text-xs tracking-widest uppercase text-muted-foreground">Work done</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
            {item.pekerjaan.map((p) => (
              <li
                key={p.id ?? p.text}
                className="marker:text-muted-foreground"
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
