import type { ComponentProps } from "react";

export const mdxComponents = {
  h1: (props: ComponentProps<"h1">) => (
    <h1 className="text-xl md:text-2xl font-bold mt-8 mb-4" {...props} />
  ),
  h2: (props: ComponentProps<"h2">) => (
    <h2 className="text-lg md:text-xl font-semibold mt-8 mb-4" {...props} />
  ),
  h3: (props: ComponentProps<"h3">) => (
    <h3 className="text-md md:text-lg font-semibold mt-6 mb-3" {...props} />
  ),
  h4: (props: ComponentProps<"h4">) => (
    <h4 className="text-base md:text-md font-semibold mt-6 mb-3" {...props} />
  ),
  p: (props: ComponentProps<"p">) => (
    <p className="text-sm md:text-base leading-7 not-first:mt-6" {...props} />
  ),
  ul: (props: ComponentProps<"ul">) => (
    <ul className="my-4 list-disc [&>li]:mt-2" {...props} />
  ),
  ol: (props: ComponentProps<"ol">) => (
    <ol className="my-4 list-decimal [&>li]:mt-2" {...props} />
  ),
  li: (props: ComponentProps<"li">) => (
    <li className="mt-2 text-sm md:text-base" {...props} />
  ),
  blockquote: (props: ComponentProps<"blockquote">) => (
    <blockquote
      className="mt-6 border-l-2 border-slate-300 pl-6 italic text-muted-foreground"
      {...props}
    />
  ),
  img: (props: ComponentProps<"img">) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="rounded-md border my-4 w-full"
      alt={props.alt || ""}
      {...props}
    />
  ),
  hr: (props: ComponentProps<"hr">) => (
    <hr className="my-4 md:my-8" {...props} />
  ),
  table: (props: ComponentProps<"table">) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full" {...props} />
    </div>
  ),
  tr: (props: ComponentProps<"tr">) => (
    <tr className="m-0 border-t p-0 even:bg-muted" {...props} />
  ),
  th: (props: ComponentProps<"th">) => (
    <th
      className="border px-4 py-2 text-left font-bold [[align=center]]:text-center [[align=right]]:text-right"
      {...props}
    />
  ),
  td: (props: ComponentProps<"td">) => (
    <td
      className="border px-4 py-2 text-left [[align=center]]:text-center [[align=right]]:text-right"
      {...props}
    />
  ),
  pre: (props: ComponentProps<"pre">) => (
    <pre
      className="mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4 px-4 text-white w-fit mx-auto"
      {...props}
    />
  ),
  code: (props: ComponentProps<"code">) => (
    <code
      className="relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
      {...props}
    />
  ),
};
