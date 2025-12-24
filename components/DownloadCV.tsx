import { Download } from "lucide-react";

export default function DownloadCV() {
  return (
    <section className="space-y-4 md:pt-10">
      <h2 className="text-lg font-semibold">RESUME</h2>
      <p className="text-zinc-600 dark:text-zinc-300 text-sm md:text-base">
        Grab a copy of my resume to view my full experience and skills.
      </p>
      <div>
        <a
          href="/files/muhammad-ilyas-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-900/60"
        >
          <Download size={18} />
          <span>Download CV</span>
        </a>
      </div>
    </section>
  );
}
