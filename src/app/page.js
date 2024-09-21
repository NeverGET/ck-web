"use client";

import Button from "@/components/button";
import Image from "next/image";
import ConteinersSVG from "@/svgs/cubes.svg";
import AnimatedCounter from "@/components/counter";
import { easeIn, easeInOut } from "framer-motion";
import HomeHeader from "@/components/home_header";
import LibrariesSection from "@/components/libraries_section";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HomeHeader />
      <LibrariesSection />
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          <ConteinersSVG />
          Learn
        </a>
        <a
          className=""
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            className="fill-secondary-500"
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
