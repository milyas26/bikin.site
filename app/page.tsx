import Image from "next/image";
import WorkTimeline from "@/components/WorkTimeline";
import MyToolbox from "@/components/MyToolbox";
import GetInTouch from "@/components/GetInTouch";
import DownloadCV from "@/components/DownloadCV";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Senior Frontend Engineer",
  description: "Portofolio, blog, dan karya open source dari Muhammad Ilyas.",
  urlPath: "/",
  image: "/img/card-name.jpg",
});

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-6 md:py-16 min-h-screen space-y-10">
      <section className="space-y-10">
        <div className="space-y-6">
          <div className="me">
            <h1 className="text-2xl font-semibold">Muhammad Ilyas</h1>
            <p className="text-zinc-600 dark:text-zinc-300">
              Senior Frontend Engineer
            </p>
          </div>
          <div className="group relative mx-auto h-80 max-w-md md:h-96 md:max-w-lg">
            <div className="absolute left-0 top-2 w-2/3 rounded-lg border border-zinc-200 bg-white p-2 shadow-sm shadow-black/10 -rotate-3 z-10 hover:z-20 focus-within:z-20 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="relative overflow-hidden rounded-md ring-1 ring-inset ring-zinc-200 transition-transform duration-300 ease-out dark:ring-zinc-800">
                <Image
                  src="/img/profile.jpeg"
                  alt="Muhammad Ilyas"
                  width={400}
                  height={400}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
            <div className="absolute right-0 top-10 w-3/4 rounded-lg border border-zinc-200 bg-white p-2 shadow-sm shadow-black/10 rotate-2 z-0 hover:z-20 focus-within:z-20 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="relative overflow-hidden rounded-md ring-1 ring-inset ring-zinc-200 transition-transform duration-300 ease-out dark:ring-zinc-800">
                <Image
                  src="/img/beach.jpg"
                  alt="Muhammad Ilyas"
                  width={400}
                  height={400}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4 text-zinc-600 dark:text-zinc-300 text-sm md:text-base pt-2 md:pt-10">
          <p>
            I’m a developer who loves building fast, clean, and easy-to-use web
            experiences. Most of my work happens in the frontend with React
            ecosystem, particularly Next.js and Vite, but I also jump into
            backend work with Node.js and PostgreSQL when the project needs it.
            I care a lot about good structure, clear code, and performance that
            actually feels smooth to users.
          </p>
          <p>
            I write about the things I learn along the way, small improvements,
            practical lessons, and ideas that help me build better apps. Welcome
            to my little corner of the internet.
          </p>
        </div>
      </section>
      <section className="space-y-2">
        <h2 className="text-lg font-semibold">MY VALUES</h2>
        <ul>
          <li className="flex items-start gap-3 rounded-md p-1 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900/60">
            <span className="px-2 py-1 text-sm md:text-base text-zinc-600 dark:text-zinc-300 bg-zinc-200/50 dark:bg-yellow-300/20 rounded-sm box-decoration-clone">
              Keep things simple and practical
            </span>
          </li>
          <li className="flex items-start gap-3 rounded-md p-1 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900/60">
            <span className="px-2 py-1 text-sm md:text-base text-zinc-600 dark:text-zinc-300 bg-zinc-200/50 dark:bg-yellow-300/20 rounded-sm box-decoration-clone">
              Write code that future-me won’t hate
            </span>
          </li>
          <li className="flex items-start gap-3 rounded-md p-1 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900/60">
            <span className="px-2 py-1 text-sm md:text-base text-zinc-600 dark:text-zinc-300 bg-zinc-200/50 dark:bg-yellow-300/20 rounded-sm box-decoration-clone">
              Prioritize performance and user experience
            </span>
          </li>
          <li className="flex items-start gap-3 rounded-md p-1 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900/60">
            <span className="px-2 py-1 text-sm md:text-base text-zinc-600 dark:text-zinc-300 bg-zinc-200/50 dark:bg-yellow-300/20 rounded-sm box-decoration-clone">
              Build with intention, not just habit
            </span>
          </li>
        </ul>
      </section>
      <MyToolbox />

      <WorkTimeline />

      <GetInTouch />

      <DownloadCV />
    </main>
  );
}
