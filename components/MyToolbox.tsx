import {
  Atom,
  Braces,
  FileCode,
  Flame,
  Wind,
  PanelsTopLeft,
  Layers,
  Shapes,
  Server,
  Cog,
  Rocket,
  Link,
  Database,
  Leaf,
  Hexagon,
  Triangle,
  Github,
  GitBranch,
  Share2,
  Box,
} from "lucide-react";

export default function MyToolbox() {
  return (
    <section className="space-y-4 md:pt-10">
      <h2 className="text-lg font-semibold">MY TOOLBOX</h2>
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-zinc-600 dark:text-zinc-300">Frontend</h3>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "React", icon: Atom },
              { label: "Next.js", icon: Braces },
              { label: "TypeScript", icon: FileCode },
              { label: "Vite", icon: Flame },
              { label: "Tailwind CSS", icon: Wind },
              { label: "shadcn/ui", icon: PanelsTopLeft },
              { label: "TanStack", icon: Layers },
              { label: "Atomic Design", icon: Shapes },
            ].map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-md border border-zinc-200 bg-white px-2 py-1 text-sm text-zinc-700 shadow-sm hover:bg-zinc-50 transition-colors dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-900/60"
              >
                <Icon className="h-4 w-4" />
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-zinc-600 dark:text-zinc-300">Backend</h3>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Node.js", icon: Server },
              { label: "Go", icon: Cog },
              { label: "Fastify", icon: Rocket },
              { label: "NestJS", icon: Braces },
              { label: "Laravel", icon: Braces },
              { label: "WebSocket", icon: Link },
              { label: "Clean Architecture", icon: Layers },
            ].map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-md border border-zinc-200 bg-white px-2 py-1 text-sm text-zinc-700 shadow-sm hover:bg-zinc-50 transition-colors dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-900/60"
              >
                <Icon className="h-4 w-4" />
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-zinc-600 dark:text-zinc-300">Databases</h3>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "PostgreSQL", icon: Database },
              { label: "MySQL", icon: Database },
              { label: "MongoDB", icon: Leaf },
              { label: "Prisma ORM", icon: Hexagon },
              { label: "Firebase (Firestore / Auth)", icon: Flame },
            ].map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-md border border-zinc-200 bg-white px-2 py-1 text-sm text-zinc-700 shadow-sm hover:bg-zinc-50 transition-colors dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-900/60"
              >
                <Icon className="h-4 w-4" />
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-zinc-600 dark:text-zinc-300">Infrastructure &amp; Tools</h3>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Docker", icon: Box },
              { label: "Vercel", icon: Triangle },
              { label: "GitHub", icon: Github },
              { label: "CI/CD workflows", icon: GitBranch },
              { label: "API design & system integration", icon: Share2 },
            ].map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-md border border-zinc-200 bg-white px-2 py-1 text-sm text-zinc-700 shadow-sm hover:bg-zinc-50 transition-colors dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-900/60"
              >
                <Icon className="h-4 w-4" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}