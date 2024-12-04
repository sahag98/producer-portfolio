import AboutSection from "@/components/about";
import { BentoGridSecondDemo } from "@/components/bento";
import ContactFooter from "@/components/footer";
import Hero from "@/components/hero";
import IntroSection from "@/components/intro";
import { Button } from "@/components/ui/button";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen space-y-16 relative">
      <Hero />
      <IntroSection />
      <BentoGridSecondDemo />
      <VelocityScroll
        text="Artist Musician Producer"
        default_velocity={2}
        className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-foreground drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
      />
      <AboutSection />
      <ContactFooter />
    </main>
  );
}
