"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import VerticalScrollSlider from "@/components/VerticalScrollSlider/VerticalScrollSlider";

export default function SpotlightNewDemo() {

  return (
    <div>
      <div className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Amir Rahimnezhad <br /> Front-End Developer
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Passionate about building outstanding websites using the latest web technologies.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 bg-white">
        <VerticalScrollSlider />
      </div>
    </div>
  );
}
