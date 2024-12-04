import { cn } from "@/lib/utils";
import { IconPlayerPlay } from "@tabler/icons-react";
import Link from "next/link";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] px-2 md:px-0 grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  link,
  className,
  title,
  description,
  header,
}: {
  link: string;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-secondary border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {/* <div className="relative"> */}
      <div className="min-h-[6rem] relative">
        {header}
        <Link
          href={link}
          target="_blank"
          className="absolute cursor-pointer inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover/bento:opacity-100 transition-opacity duration-300"
        >
          <IconPlayerPlay className="h-12 w-12 text-white" />
        </Link>
      </div>
      {/* </div> */}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="text-xl font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-normal text-neutral-600 text-lg dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
