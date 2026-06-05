import { Github, Mail, Linkedin } from "lucide-react";

const links = [
  {
    href: "mailto:muhammadilyassaya@gmail.com",
    label: "muhammadilyassaya@gmail.com",
    display: "Email",
    Icon: Mail,
    external: false,
  },
  {
    href: "https://linkedin.com/in/muhilyas",
    label: "linkedin.com/in/muhilyas",
    display: "LinkedIn",
    Icon: Linkedin,
    external: true,
  },
  {
    href: "https://github.com/milyas26",
    label: "github.com/milyas26",
    display: "GitHub",
    Icon: Github,
    external: true,
  },
];

export default function GetInTouch() {
  return (
    <section className="mb-16 md:mb-20 border-t border-border pt-10">
      <p className="font-mono-code text-xs tracking-widest uppercase text-muted-foreground mb-6">
        Get in touch
      </p>
      <p className="text-sm text-muted-foreground mb-6 leading-relaxed max-w-sm">
        Open to interesting projects, collaborations, and conversations.
        Find me here:
      </p>
      <ul className="space-y-0 divide-y divide-border">
        {links.map(({ href, label, display, Icon, external }) => (
          <li key={href}>
            <a
              href={href}
              aria-label={display}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex items-center justify-between py-4 group hover:text-accent transition-colors duration-150"
            >
              <div className="flex items-center gap-3">
                <Icon size={15} className="text-muted-foreground group-hover:text-accent transition-colors shrink-0" />
                <span className="font-display text-base md:text-lg font-medium">
                  {display}
                </span>
              </div>
              <span className="font-mono-code text-xs text-muted-foreground group-hover:text-accent transition-colors hidden sm:inline">
                {label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
