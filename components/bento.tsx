import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-full mx-auto md:auto-rows-[40rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          link={item.link}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "Orion",
    description: "Sit back and enjoy your ride to.......ORION",
    header: (
      <Image
        alt="single"
        src={"/hero-bg.png"}
        width={1000}
        height={1000}
        className="w-full object-cover h-full rounded-lg"
      />
    ),
    link: "https://www.youtube.com/watch?v=q-R-YfHlX5c",
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Centaurus",
    description: "What really happens inside a black hole?",
    header: (
      <Image
        alt="single"
        src={"/centaurus.png"}
        width={1000}
        height={1000}
        className="w-full object-cover h-full rounded-lg"
      />
    ),
    link: "https://www.youtube.com/watch?v=HUmtrpNgUsY",
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "What Now",
    description: "Discover the beauty of thoughtful and functional design.",
    header: (
      <Image
        alt="single"
        src={"/whatnow.png"}
        width={1000}
        height={1000}
        className="w-full object-cover h-full rounded-lg"
      />
    ),
    link: "https://www.youtube.com/watch?v=7idV2cA9Sf0",
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Roullete",
    description: "Always bet on black cause the odds are always in your favor.",
    header: (
      <Image
        alt="single"
        src={"/roullete.png"}
        width={1000}
        height={1000}
        className="w-full object-cover h-full rounded-lg"
      />
    ),
    link: "https://www.youtube.com/watch?v=R5Y7oQPK3AUs",
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Iron",
    description: "Always bet on black cause the odds are always in your favor.",
    header: (
      <Image
        alt="single"
        src={"/iron.png"}
        width={1000}
        height={1000}
        className="w-full object-cover h-full rounded-lg"
      />
    ),
    link: "https://www.youtube.com/watch?v=R5Y7oQPK3AUs",
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Imperium",
    description: "Always bet on black cause the odds are always in your favor.",
    header: (
      <Image
        alt="single"
        src={"/imperium.png"}
        width={1000}
        height={1000}
        className="w-full object-cover h-full rounded-lg"
      />
    ),
    link: "https://www.youtube.com/watch?v=R5Y7oQPK3AUs",
    className: "md:col-span-1",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
