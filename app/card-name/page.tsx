import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 bg-zinc-50">
      <div className="w-full max-w-xs md:max-w-md rounded-xl border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-900 shadow-sm p-6 md:p-8 text-center">
        <div className="flex flex-row items-start gap-3 md:gap-4 mb-10">
          <Image
            src="/img/profile.jpeg"
            alt="Muhammad Ilyas"
            width={80}
            height={80}
            className="rounded-full object-cover"
            priority
          />
          <div className="text-left">
            <h1 className="text-xl font-bold">MUHAMMAD ILYAS</h1>
            <p className="text-zinc-600 dark:text-zinc-300 text-lg font-medium mb-1">
              Senior Frontend Engineer
            </p>
            <div className="flex items-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-terminal-icon lucide-terminal"
              >
                <path d="M12 19h8" />
                <path d="m4 17 6-6-6-6" />
              </svg>
              <div className="flex items-center gap-1 flex-wrap">
                {[
                  "Nextjs",
                  "Vite",
                  "Tanstack",
                  "Typescript",
                  "Tailwind",
                  "Shadcn",
                ].map((item) => (
                  <Badge
                    key={item}
                    variant="secondary"
                    className="text-xs font-normal px-1 rounded-sm"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 text-zinc-600 dark:text-zinc-300">
          <p className="text-sm">More details</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-chevron-down-icon lucide-chevron-down"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default page;
