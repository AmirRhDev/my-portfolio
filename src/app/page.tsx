"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import VerticalScrollSlider from "@/components/VerticalScrollSlider/VerticalScrollSlider";
import { LampContainer } from "@/components/ui/Lamp";
import { motion } from "framer-motion";
import Example from "@/components/HorizontalScrollSlider/HorizontalScrollSlider";
import HorizontalScrollCarousel from "@/components/HorizontalScrollSlider/HorizontalScrollSlider";

export default function SpotlightNewDemo() {

  return (
    <div>
      {/* <div className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-zinc-900 antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Amir Rahimnezhad <br /> Front-End Developer
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Passionate about building outstanding websites using the latest web technologies.
          </p>
        </div>
      </div> */}

      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          <div className="flex flex-col gap-3">
            <h1>Amir Rahimnezhad</h1>
            <h2>Front-End Developer</h2>
            <span className="text-base tracking-normal">Passionate about building outstanding websites using the latest web technologies</span>
          </div>
          <div className="flex items-center gap-3 justify-center tracking-normal">
            <button className="translate-y-12 bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <div className="relative flex gap-2 items-center z-10 rounded-full bg-zinc-950 py-1.5 px-4 ring-1 ring-white/10 text-sm">
                <span>
                  Get Resume
                </span>
                <svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path strokeLinecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
            </button>
          </div>
        </motion.h1>
      </LampContainer>

      <div className="mx-auto max-w-6xl px-4">
        <VerticalScrollSlider />
      </div>

      <HorizontalScrollCarousel />

      <div className="h-[500px] text-2xl flex justify-center items-center">to be continue...</div>
    </div>
  );
}
