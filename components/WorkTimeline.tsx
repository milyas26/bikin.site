const items = [
  {
    title: "Fullstack Engineer",
    company: "Jubelio",
    startDate: "Jan 2026",
    endDate: undefined,
    description:
      "Developing fullstack features and microservices for the Jubelio omnichannel ecosystem, building multitenant solutions with React, Next.js, Node.js, and PostgreSQL. Contributing to fullstack initiatives and optimizing system-wide performance.",
  },
  {
    title: "Frontend Engineer",
    company: "Jubelio",
    startDate: "Des 2021",
    endDate: "Jan 2026",
    description:
      "Built and improved core frontend features, focusing on performance, code quality, and scalable architecture across a large product ecosystem.",
  },
  {
    title: "Senior Fullstack Engineer",
    company: "Wacaku",
    startDate: "Agu 2023",
    endDate: "Mei 2025",
    description:
      "Leading development of a creative writing platform by building scalable features using Next.js, Node.js, and Golang. Delivering strong product improvements, enhancing content creation workflows, and AI-powered writing tools.",
  },
  {
    title: "Frontend Engineer",
    company: "Qoin Digital Indonesia",
    startDate: "Jul 2021",
    endDate: "Des 2021",
    description:
      "Delivered responsive, high-quality interfaces by turning design concepts into functional UI, developing reusable components, and integrating them with backend APIs.",
  },
  {
    title: "Frontend Engineer",
    company: "Dvoretsky",
    startDate: "Jan 2021",
    endDate: "Jul 2021",
    description:
      "Developed full website solutions using Laravel, MySQL, and Next.js, including building REST APIs and translating Figma designs into interactive web applications.",
  },
];

export default function WorkTimeline() {
  return (
    <section className="mb-16 md:mb-20 border-t border-border pt-10">
      <p className="font-mono-code text-xs tracking-widest uppercase text-muted-foreground mb-6">
        Work Experience
      </p>
      <ol className="space-y-0 divide-y divide-border">
        {items.map((item, i) => (
          <li key={item.title + item.company} className="py-6 group">
            <div className="flex flex-col md:flex-row md:items-start md:gap-8">
              <div className="shrink-0 mb-2 md:mb-0 md:w-32">
                <span className="font-mono-code text-xs text-muted-foreground">
                  {item.startDate} — {item.endDate ?? "Present"}
                </span>
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="font-display text-base md:text-lg font-semibold text-foreground leading-tight">
                    {item.title}
                  </span>
                  <span className="font-mono-code text-xs text-accent">
                    @ {item.company}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
