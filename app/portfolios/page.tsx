import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { getAllPortfolios } from "@/data/json/portfolios";

export const metadata = buildMetadata({
  title: "Portofolios",
  description: "Daftar proyek dan karya yang pernah saya buat.",
  urlPath: "/portfolios",
});

type Portfolio = {
  id: number;
  name: string;
  slug: string;
  thumbnail: string;
  role?: string;
  description: string;
};

export default function PortfoliosPage() {
  const portfolios = getAllPortfolios() as Portfolio[];
  return (
    <main className="mx-auto max-w-2xl px-4 py-10 md:py-20 min-h-screen">
      <div className="mb-10">
        <p className="font-mono-code text-xs tracking-widest uppercase text-accent mb-3">
          Work
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-black leading-tight tracking-tight text-foreground">
          Portfolios
        </h1>
        <p className="text-sm text-muted-foreground mt-2">
          Projects and works I've shipped.
        </p>
      </div>
      <ul className="grid gap-px sm:grid-cols-2 border border-border rounded-sm overflow-hidden">
        {portfolios.map((item, i) => (
          <li key={item.slug} className="bg-card">
            <Link
              href={`/portfolios/${item.slug}`}
              className="block group p-4 hover:bg-secondary transition-colors duration-150 h-full"
            >
              <div className="space-y-3">
                <div className="relative aspect-4/3 w-full overflow-hidden rounded-sm border border-border bg-muted">
                  <Image
                    src={item.thumbnail}
                    alt={item.name}
                    fill
                    className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    priority={false}
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-display text-sm font-semibold leading-snug group-hover:text-accent transition-colors line-clamp-2">
                      {item.name}
                    </p>
                    <ArrowUpRight
                      size={14}
                      className="shrink-0 text-muted-foreground group-hover:text-accent transition-colors mt-0.5"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
