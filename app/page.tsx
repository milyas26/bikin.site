import Image from "next/image";
import WorkTimeline from "@/components/WorkTimeline";
import MyToolbox from "@/components/MyToolbox";
import GetInTouch from "@/components/GetInTouch";
import DownloadCV from "@/components/DownloadCV";
import { buildMetadata } from "@/lib/seo";
import { getYearsOfExperience } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Senior Fullstack Engineer",
  description: "Portofolio, blog, dan karya open source dari Muhammad Ilyas.",
  urlPath: "/",
  image: "/img/fullstack.jpg",
});

const values = [
  "Keep things simple and practical",
  "Write code that future-me won't hate",
  "Prioritize performance and user experience",
  "Build with intention, not just habit",
];

export default function Home() {
  const years = getYearsOfExperience(new Date(2020, 0));
  return (
    <main className="mx-auto max-w-2xl px-4 py-10 md:py-20 min-h-screen">

      {/* Hero */}
      <section className="mb-16 md:mb-24">
        <div className="mb-10">
          <p className="font-mono-code text-xs tracking-widest uppercase text-accent mb-3">
            Senior Fullstack Engineer
          </p>
          <h1 className="font-display text-5xl md:text-4xl font-black leading-[0.95] tracking-tight text-foreground mb-6">
            Muhammad<br />Ilyas
          </h1>
          <div className="w-12 h-0.5 bg-accent mb-6" />
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-sm">
            {years}+ years building fast, clean web experiences.
            React ecosystem, Next.js, Node.js, PostgreSQL.
            Care about structure, clarity, performance.
          </p>
        </div>

        {/* Photo collage */}
        <div className="group relative mx-auto h-72 max-w-md md:h-88">
          <div className="absolute left-0 top-0 w-[58%] rounded border border-border bg-card p-1.5 shadow-md -rotate-2 z-10 hover:z-20 transition-transform hover:rotate-0 duration-300">
            <div className="relative overflow-hidden rounded-sm ring-1 ring-inset ring-border">
              <Image
                src="/img/profile.jpeg"
                alt="Muhammad Ilyas"
                width={400}
                height={400}
                className="h-auto w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
          <div className="absolute right-0 top-8 w-[65%] rounded border border-border bg-card p-1.5 shadow-md rotate-1 z-0 hover:z-20 transition-transform hover:rotate-0 duration-300">
            <div className="relative overflow-hidden rounded-sm ring-1 ring-inset ring-border">
              <Image
                src="/img/beach.jpg"
                alt="Muhammad Ilyas"
                width={400}
                height={400}
                className="h-auto w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mb-16 md:mb-20 border-t border-border pt-10">
        <p className="font-mono-code text-xs tracking-widest uppercase text-muted-foreground mb-6">
          About
        </p>
        <div className="space-y-4 text-foreground text-sm md:text-base leading-relaxed">
          <p>
            I'm a <strong className="font-semibold text-foreground">Fullstack Engineer</strong> with{" "}
            <strong className="font-semibold text-foreground">{years}+ years of experience</strong>{" "}
            and <strong className="font-semibold text-foreground">strong frontend expertise</strong>,
            building fast, clean, and easy-to-use web experiences. My core strength is
            the React ecosystem — Next.js and Vite — while also working on the backend
            with Node.js and PostgreSQL.
          </p>
          <p className="text-muted-foreground">
            I write about the things I learn along the way: small improvements,
            practical lessons, and ideas that help me build better apps.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="mb-16 md:mb-20 border-t border-border pt-10">
        <p className="font-mono-code text-xs tracking-widest uppercase text-muted-foreground mb-6">
          Values
        </p>
        <ol className="space-y-0 divide-y divide-border">
          {values.map((v, i) => (
            <li
              key={v}
              className="flex items-baseline gap-5 py-4 group hover:text-accent transition-colors duration-150"
            >
              <span className="font-mono-code text-xs text-muted-foreground w-5 shrink-0 group-hover:text-accent transition-colors">
                0{i + 1}
              </span>
              <span className="font-display text-lg md:text-xl font-medium leading-snug">
                {v}
              </span>
            </li>
          ))}
        </ol>
      </section>

      <MyToolbox />
      <WorkTimeline />
      <GetInTouch />
      <DownloadCV />
    </main>
  );
}
