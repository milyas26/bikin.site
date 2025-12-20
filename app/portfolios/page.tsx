import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { getAllPortfolios } from "@/data/json/portfolios";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

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
    <main className="mx-auto max-w-2xl px-4 py-6 md:py-16 min-h-screen space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Portofolios</h1>
        <p className="text-zinc-500">
          List of projects and works that I have done.
        </p>
      </div>
      <ul className="grid gap-4 sm:grid-cols-2">
        {portfolios.map((item) => (
          <li key={item.slug}>
            <Card className="overflow-hidden">
              <CardContent className="px-4">
                <div className="relative aspect-4/3 w-full">
                  <Image
                    src={item.thumbnail}
                    alt={item.name}
                    fill
                    className="object-contain"
                    priority={false}
                  />
                </div>
              </CardContent>
              <CardHeader>
                <CardTitle className="line-clamp-2">{item.name}</CardTitle>
                <CardDescription className="line-clamp-3">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link
                  href={`/portfolios/${item.slug}`}
                  className="inline-flex items-center gap-2 rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-700 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-900/60"
                >
                  <span>Read more</span>
                  <ArrowRight size={16} />
                </Link>
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </main>
  );
}
