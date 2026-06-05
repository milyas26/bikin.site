import { Download } from "lucide-react";

export default function DownloadCV() {
  return (
    <section className="mb-16 md:mb-20 border-t border-border pt-10">
      <p className="font-mono-code text-xs tracking-widest uppercase text-muted-foreground mb-6">
        Resume
      </p>
      <div className="flex items-start justify-between gap-4">
        <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
          Full experience, skills, and contact details in one document.
        </p>
        <a
          href="/files/muhammad-ilyas-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-sm border border-border bg-card px-4 py-2.5 font-mono-code text-xs text-foreground hover:border-accent hover:text-accent transition-colors duration-150 shrink-0"
        >
          <Download size={13} />
          Download CV
        </a>
      </div>
    </section>
  );
}
