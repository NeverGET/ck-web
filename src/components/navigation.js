"use client";

import Link from "next/link";
import React from "react";
import GitHubSVG from "@/svgs/github.svg";
import LinkedInSVG from "@/svgs/linkedin-2.svg";
import PersonSVG from "@/svgs/employee-man-alt.svg";
import { usePathname } from "next/navigation";

export default function Navigation({ children }) {
  const path = usePathname();
  return (
    <main className="h-[calc(100dvh)] flex flex-col max-h-[calc(100dvh)] w-full">
      <div className="flex flex-row fixed w-full bg-light-white-transparent dark:bg-dark-black-transparent backdrop-blur-2xl justify-between px-14 py-2 *:py-1 z-80">
        <div className="flex">
          <Link
            className="no-underline hover:no-underline text-light-black dark:text-dark-white hover:text-primary-500 p-2 font-bold"
            href={"/"}
          >
            <PersonSVG />
            CK
          </Link>
        </div>
        <div className="flex flex-row gap-6">
          <Link
            className="no-underline hover:no-underline p-2 flex flex-col group"
            href={"/"}
          >
            {path === "/" ? (
              <span className="relative font-semibold text-primary-500">
                Home
              </span>
            ) : (
              <>
                <span className="relative group-hover:opacity-0 transition-opacity text-light-black dark:text-dark-white">
                  Home
                </span>
                <span className="relative -top-8 -mb-8 font-semibold opacity-0 group-hover:opacity-100 transition-opacity text-primary-500">
                  Home
                </span>
              </>
            )}
          </Link>
          <Link
            className="no-underline hover:no-underline p-2 flex-col group"
            href={"/"}
          >
            {path === "/projects" ? (
              <span className="relative font-semibold text-primary-500">
                Projects
              </span>
            ) : (
              <>
                <span className="relative group-hover:opacity-0 transition-opacity text-light-black dark:text-dark-white">
                  Projects
                </span>
                <span className="relative -top-8 -mb-8 font-semibold opacity-0 group-hover:opacity-100 transition-opacity text-primary-500">
                  Projects
                </span>
              </>
            )}
          </Link>
          <Link
            className="no-underline hover:no-underline p-2 flex-col group"
            href={"/"}
          >
            {path === "/about" ? (
              <span className="relative font-semibold text-primary-500">
                About
              </span>
            ) : (
              <>
                <span className="relative group-hover:opacity-0 transition-opacity text-light-black dark:text-dark-white">
                  About
                </span>
                <span className="relative -top-8 -mb-8 font-semibold opacity-0 group-hover:opacity-100 transition-opacity text-primary-500">
                  About
                </span>
              </>
            )}
          </Link>
          <Link
            className="no-underline hover:no-underline p-2 flex-col group"
            href={"/"}
          >
            {path === "/contact" ? (
              <span className="relative font-semibold text-primary-500">
                Contact
              </span>
            ) : (
              <>
                <span className="relative group-hover:opacity-0 transition-opacity text-light-black dark:text-dark-white">
                  Contact
                </span>
                <span className="relative -top-8 -mb-8 font-semibold opacity-0 group-hover:opacity-100 transition-opacity text-primary-500">
                  Contact
                </span>
              </>
            )}
          </Link>
        </div>
        <div className="flex flex-row gap-4">
          <a
            className="no-underline hover:no-underline group p-2"
            href={"/"}
          >
            <GitHubSVG className="fill-light-black dark:fill-dark-white group-hover:fill-primary-500"/>
          </a>
          <a
            className="no-underline hover:no-underline group p-2"
            href={"/"}
          >
            <LinkedInSVG  className="fill-light-black dark:fill-dark-white group-hover:fill-primary-500"/>
          </a>
        </div>
      </div>
      <div className="pt-16 w-full">{children}</div>
    </main>
  );
}
