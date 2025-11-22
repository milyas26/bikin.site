import { Github, Mail, Linkedin } from "lucide-react";

export default function GetInTouch() {
  return (
    <section className="space-y-4 md:pt-10">
      <h2 className="text-lg font-semibold">GET IN TOUCH</h2>
      <p className="text-zinc-800 dark:text-zinc-100 text-sm md:text-base">
        If you’d like to reach out, talk about projects, or just connect, feel
        free to contact me anytime. You can find me here:
      </p>
      <div className="flex items-center gap-3">
        <a
          href="mailto:muhammadilyassaya@gmail.com"
          aria-label="Email"
          target="_blank"
          className="flex h-14 w-14 items-center justify-center rounded-lg bg-white text-zinc-700 shadow-sm transition hover:bg-zinc-50 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-900/60"
        >
          <Mail size={22} aria-hidden />
          <span className="sr-only">muhammadilyassaya@gmail.com</span>
        </a>
        <a
          href="https://linkedin.com/in/muhilyas"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex h-14 w-14 items-center justify-center rounded-lg bg-white text-zinc-700 shadow-sm transition hover:bg-zinc-50 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-900/60"
        >
          <Linkedin size={22} aria-hidden />
          <span className="sr-only">linkedin.com/in/muhilyas</span>
        </a>
        <a
          href="https://github.com/milyas26"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="flex h-14 w-14 items-center justify-center rounded-lg bg-white text-zinc-700 shadow-sm transition hover:bg-zinc-50 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-900/60"
        >
          <Github size={22} aria-hidden />
          <span className="sr-only">github.com/milyas26</span>
        </a>
      </div>
    </section>
  );
}