import { Briefcase } from "lucide-react";

const items = [
  {
    title: "Frontend Engineer — Jubelio",
    description:
      "Built and improved core frontend features, focusing on performance, code quality, and scalable architecture across a large product ecosystem.",
  },
  {
    title: "Senior Fullstack Engineer — Wacaku",
    description:
      "Leading development of a creative writing platform by building scalable features using Next.js, Node.js, and Golang. Delivering strong product improvements, enhancing content creation workflows, and AI-powered writing tools.",
      
  },
  {
    title: "Frontend Engineer — Qoin Digital Indonesia",
    description:
      "Delivered responsive, high-quality interfaces by turning design concepts into functional UI, developing reusable components, and integrating them with backend APIs. Strengthened product reliability through coordination with Backend and QA teams and improved performance across multiple projects.",
  },
  {
    title: "Frontend Engineer — Dvoretsky",
    description:
      "Developed full website solutions using Laravel, MySQL, and Next.js, including building REST APIs and translating Figma designs into interactive web applications. Ensured smooth system integration and improved delivery quality through close collaboration with cross-functional teams.",
  },
];

export default function WorkTimeline() {
  return (
    <section className="space-y-2 pt-2 md:pt-10">
      <h2 className="text-lg font-semibold">WORK EXPERIENCE</h2>
      <div className="relative">
        <div className="absolute left-2 top-0 h-full border-l border-zinc-200 dark:border-zinc-800" />
        <ul className="space-y-6 pl-8">
          {items.map((item) => (
            <li key={item.title} className="relative">
              <span className="absolute -left-9 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
                <Briefcase size={14} />
              </span>
              <div className="space-y-1">
                <p className="font-medium text-zinc-800 dark:text-zinc-100">
                  {item.title}
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
