"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  useEffect(() => {
    gsap.from(".about-text", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: ".about-text",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".about-image", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: ".about-image",
        start: "top 60%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row bg-secondary text-foreground min-h-screen">
      <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center about-text">
        <h2 className="text-sm uppercase tracking-wider mb-4">About</h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          A visionary music producer redefining electronic sound with precision.
        </h1>
        <p className="text-lg leading-relaxed">
          Kasteo masterfully blends electronic innovation with analog artistry.
          From pulsating beats to ethereal melodies, their music showcases the
          limitless potential of synthesis, brought to life with the warmth and
          character of vintage instruments.
        </p>
      </div>
      <div className="md:w-1/2 relative about-image">
        <Image
          src="/logo.PNG"
          alt="Designer in deep concentration"
          width={1000}
          height={1000}
          className="w-full object-cover"
        />
      </div>
    </div>
  );
}
