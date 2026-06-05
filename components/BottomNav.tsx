"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, GitBranch, FileText, Briefcase } from "lucide-react";
import ThemeToggle from "./theme-toggle";

const items = [
  { href: "/", label: "Home", Icon: Home },
  { href: "/projects", label: "Projects", Icon: GitBranch },
  { href: "/blog", label: "Blog", Icon: FileText },
  { href: "/portfolios", label: "Work", Icon: Briefcase },
];

export default function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-5 left-0 right-0 z-50 mx-auto w-fit rounded-sm border border-border bg-card/95 px-3 py-2 shadow-lg backdrop-blur-sm">
      <div className="flex items-center gap-0.5">
        {items.map(({ href, label, Icon }) => {
          const active =
            pathname === href || (href !== "/" && pathname?.startsWith(href));
          return (
            <Link
              key={href}
              href={href}
              aria-label={label}
              className={`flex flex-col items-center gap-1 px-3 py-1.5 rounded-sm transition-colors duration-150 ${
                active
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              <Icon size={13} aria-hidden />
              <span className="font-mono-code text-[9px] leading-none tracking-wide">
                {label}
              </span>
            </Link>
          );
        })}
        <div className="ml-1 pl-1.5 border-l border-border self-stretch flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
