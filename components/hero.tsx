import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaApple, FaSpotify, FaYoutube } from "react-icons/fa";
import HyperText from "./ui/hyper-text";

const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute z-10 inset-0 h-screen flex flex-col items-center justify-center">
        <p className="text-background uppercase text-2xl">New Single</p>
        <HyperText
          className="font-bold md:text-9xl text-7xl text-background"
          text="ORION"
        />
      </div>
      <div className="absolute inset-0 w-full h-screen bg-black/50" />
      <Image
        src={"/hero-bg.png"}
        alt="latest album cover"
        width={3000}
        height={3000}
        className="w-full h-screen object-cover"
      />
      <div className="absolute items-center rounded-md z-10 justify-between p-2 md:w-1/4 md:mx-0 mx-8 flex bg-background bottom-10 md:right-10">
        <div className="font-bold space-y-1">
          <h2>ORION</h2>
          <span className="italic font-light text-sm pb-4">Available on:</span>
          <div className="flex items-center gap-4">
            <Link
              target="_blank"
              href={
                "https://open.spotify.com/artist/3K2JBrrtua09FRKEROwdbu?si=zlmro6kXR5mNfmUCJwtkgg&nd=1&dlsi=a809a6d0cf4d48c2"
              }
            >
              <FaSpotify size={30} />
            </Link>
            <Link
              target="_blank"
              href={"https://music.apple.com/us/artist/kasteo/1779402467"}
            >
              <FaApple size={30} />
            </Link>
            <Link target="_blank" href={"https://www.youtube.com/@kasteo332"}>
              <FaYoutube size={30} />
            </Link>
          </div>
          <video
            preload="auto"
            autoPlay
            playsInline
            loop
            muted
            id="current-video"
            className="size-12 md:flex hidden w-full"
          >
            <source src={"/music.webm#t=0.001"} type="video/webm" />
          </video>
        </div>
        <Image
          src={"/hero-bg.png"}
          alt="latest album cover"
          width={3000}
          height={3000}
          className="aspect-square w-32 rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
