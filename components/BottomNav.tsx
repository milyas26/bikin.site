"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, GitBranch, FileText, Briefcase } from "lucide-react";
import ThemeToggle from "./theme-toggle";

const items = [
  { href: "/", label: "Home", Icon: Home },
  { href: "/projects", label: "Projects", Icon: GitBranch },
  { href: "/blog", label: "Blog", Icon: FileText },
  { href: "/portfolios", label: "Portfolios", Icon: Briefcase },
  // { href: "/bookmarks", label: "Bookmarks", Icon: Bookmark },
];

export default function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-4 left-0 right-0 z-50 mx-auto w-fit max-w-lg rounded-xl border border-zinc-200 bg-white/90 p-2 shadow-lg backdrop-blur dark:border-zinc-800 dark:bg-black/70">
      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-1 items-center justify-around gap-2">
          {items.map(({ href, label, Icon }) => {
            const active =
              pathname === href || (href !== "/" && pathname?.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                aria-label={label}
                className={`flex h-10 w-10 items-center justify-center rounded-md transition ${
                  active
                    ? "bg-zinc-100 text-zinc-900 ring-2 ring-zinc-300 dark:bg-zinc-900 dark:text-zinc-100 dark:ring-zinc-700"
                    : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900"
                }`}
              >
                <Icon size={18} aria-hidden />
              </Link>
            );
          })}
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
}
