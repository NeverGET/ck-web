"use client";

import React from "react";

// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// import Swiper styles
import "swiper/css";

// import SVGs
import AzureSVG from "@/svgs/libraries/azure.svg";
import CCStudioSVG from "@/svgs/libraries/ccstudio.svg";
import ChartJSSVG from "@/svgs/libraries/chartjs.svg";
import FramerSVG from "@/svgs/libraries/framer.svg";
import GCloudSVG from "@/svgs/libraries/gcloud.svg";
import LottieFilesSVG from "@/svgs/libraries/lottie-files.svg";
import MetaSVG from "@/svgs/libraries/meta.svg";
import MongoDBSVG from "@/svgs/libraries/mongodb.svg";
import NextAuth from "@/svgs/libraries/next-auth.svg";
import NextSVG from "@/svgs/libraries/next.svg";
import OpenAISVG from "@/svgs/libraries/openai.svg";
import ReactSVG from "@/svgs/libraries/react.svg";
import ShopifySVG from "@/svgs/libraries/shopify.svg";
import STMElectronicsSVG from "@/svgs/libraries/stm-electronics.svg";
import STM32CubeSVG from "@/svgs/libraries/stm32cube.svg";
import SwiperSVG from "@/svgs/libraries/swiper.svg";
import TailwindCSS from "@/svgs/libraries/tailwindcss.svg";
import TIElectronicsSVG from "@/svgs/libraries/ti-electronics.svg";
import TwilioSVG from "@/svgs/libraries/twilio.svg";
import ZohoSVG from "@/svgs/libraries/zoho.svg";

const libraries = [
  {
    title: "Azure",
    image: AzureSVG,
    isTitle: false,
    isShadow: false,
  },
  {
    title: "CCStudio",
    image: CCStudioSVG,
    isTitle: false,
    isShadow: false,
  },
  {
    title: "Chart.js",
    image: ChartJSSVG,
    isTitle: false,
    isShadow: false,
  },
  {
    title: "Framer",
    image: FramerSVG,
    isTitle: true,
    isShadow: true,
  },
  {
    title: "GCloud",
    image: GCloudSVG,
    isTitle: true,
    isShadow: false,
  },
  {
    title: "LottieFiles",
    image: LottieFilesSVG,
    isTitle: true,
    isShadow: false,
  },
  {
    title: "Meta",
    image: MetaSVG,
    isTitle: true,
    isShadow: true,
  },
  {
    title: "MongoDB",
    image: MongoDBSVG,
    isTitle: true,
    isShadow: true,
  },
  {
    title: "NextAuth.js",
    image: NextAuth,
    isTitle: false,
    isShadow: false,
  },
  {
    title: "Next.js",
    image: NextSVG,
    isTitle: true,
    isShadow: true,
  },
  {
    title: "OpenAI",
    image: OpenAISVG,
    isTitle: true,
    isShadow: true,
  },
  {
    title: "React.js",
    image: ReactSVG,
    isTitle: false,
    isShadow: false,
  },
  {
    title: "Shopify",
    image: ShopifySVG,
    isTitle: true,
    isShadow: true,
  },
  {
    title: "STMElectronics",
    image: STMElectronicsSVG,
    isTitle: true,
    isShadow: true,
  },
  {
    title: "STM32Cube",
    image: STM32CubeSVG,
    isTitle: false,
    isShadow: false,
  },
  {
    title: "Swiper.js",
    image: SwiperSVG,
    isTitle: false,
    isShadow: false,
  },
  {
    title: "TailwindCSS",
    image: TailwindCSS,
    isTitle: true,
    isShadow: true,
  },
  {
    title: "TIElectronics",
    image: TIElectronicsSVG,
    isTitle: true,
    isShadow: true,
  },
  {
    title: "Twilio",
    image: TwilioSVG,
    isTitle: true,
    isShadow: false,
  },
  {
    title: "Zoho",
    image: ZohoSVG,
    isTitle: true,
    isShadow: false,
  },
];

export default function LibrariesSection() {
  return (
    <div className="w-full px-20 relative h-32 -mt-16">
      
      <Swiper
        className="bg-light-grey dark:bg-dark-grey h-32 rounded-2xl"
        spaceBetween={0}
        slidesPerView={"auto"}
        slidesPerGroup={4}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        noSwiping={true}
        allowTouchMove={false}
        navigation={false}
        loop={true}
        modules={[Autoplay]}
      >
        {libraries.map((library, index) => {
          return (
            <SwiperSlide key={index} style={{
              width: "15rem",
            }}>
              <div className="flex items-center justify-center h-32 w-60 py-6 px-4">
                <div className="w-full h-full flex flex-row items-center justify-center bg-dark-white dark:bg-light-black gap-4 rounded-xl">
                  <library.image className={`${library.isTitle?"w-full px-4":"h-10 w-10"} ${library.isShadow?"dark:drop-shadow-svg-dark":""}`} />
                  {library.isTitle ? null : (
                    <span className="font-semibold text-lg select-none">
                      {library.title}
                    </span>
                  )}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
