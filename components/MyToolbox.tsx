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
  Network,
  Bot,
  Cpu,
  Brain,
  GitGraph,
  Monitor,
} from "lucide-react";

const categories = [
  {
    label: "Frontend",
    items: [
      { label: "React", icon: Atom },
      { label: "Next.js", icon: Braces },
      { label: "TypeScript", icon: FileCode },
      { label: "Vite", icon: Flame },
      { label: "Tailwind CSS", icon: Wind },
      { label: "shadcn/ui", icon: PanelsTopLeft },
      { label: "TanStack", icon: Layers },
      { label: "Atomic Design", icon: Shapes },
    ],
  },
  {
    label: "Backend",
    items: [
      { label: "Node.js", icon: Server },
      { label: "Go", icon: Cog },
      { label: "Fastify", icon: Rocket },
      { label: "NestJS", icon: Braces },
      { label: "Laravel", icon: Braces },
      { label: "WebSocket", icon: Link },
      { label: "Clean Architecture", icon: Layers },
    ],
  },
  {
    label: "Databases",
    items: [
      { label: "PostgreSQL", icon: Database },
      { label: "MySQL", icon: Database },
      { label: "MongoDB", icon: Leaf },
      { label: "Prisma ORM", icon: Hexagon },
      { label: "Firebase", icon: Flame },
    ],
  },
  {
    label: "Infrastructure",
    items: [
      { label: "Docker", icon: Box },
      { label: "Vercel", icon: Triangle },
      { label: "GitHub", icon: Github },
      { label: "CI/CD", icon: GitBranch },
      { label: "API Design", icon: Share2 },
    ],
  },
  {
    label: "AI",
    items: [
      { label: "9router", icon: Network },
      { label: "Opencode", icon: Bot },
      { label: "DeepSeek V4", icon: Cpu },
      { label: "Claude Opus", icon: Brain },
      { label: "Graphify", icon: GitGraph },
    ],
  },
  {
    label: "Workstation",
    items: [
      { label: "MacBook Pro M4 Pro — 24GB · 12c CPU · 16c GPU", icon: Monitor },
    ],
  },
];

export default function MyToolbox() {
  return (
    <section className="mb-16 md:mb-20 border-t border-border pt-10">
      <p className="font-mono-code text-xs tracking-widest uppercase text-muted-foreground mb-6">
        Toolbox
      </p>
      <div className="space-y-5">
        {categories.map((cat) => (
          <div key={cat.label} className="flex flex-col sm:flex-row sm:gap-8 gap-2">
            <span className="font-mono-code text-xs text-muted-foreground sm:w-28 shrink-0 pt-0.5">
              {cat.label}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {cat.items.map(({ label, icon: Icon }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-sm border border-border bg-card px-2 py-1 font-mono-code text-xs text-foreground hover:border-accent hover:text-accent transition-colors duration-150"
                >
                  <Icon className="h-3 w-3 shrink-0" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
