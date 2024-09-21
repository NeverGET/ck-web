import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NextSVG from '@/svgs/angle-circle-right.svg'
import AISVG from '@/svgs/sparkles.svg'

export default function HomeHeader() {
  return (
    <header className='px-16 w-full flex flex-row justify-between h-[764px]'>
        <div className='flex flex-col gap-4 pt-20 z-10'>
            <span className='text-6xl text-light-black-transparent dark:text-dark-white-transparent'>{"I'm"}</span>
            <span className='text-8xl font-bold text-light-black dark:text-dark-white'>{"Cemal Kurt"}</span>
            <div className='h-2 w-60 bg-primary-500'/>
            <span className='flex whitespace-pre-wrap max-w-80 text-light-black-transparent dark:text-dark-white-transparent'>{"I am an Embedded and Full Stack Engineer with expertise in AI, leading innovative projects in web, mobile, and embedded systems, specializing in machine learning, motor control, and custom PCB design."}</span>
        </div>
        <div className='flex absolute h-[700px] w-[calc(100vw-8rem)] justify-center items-center'>
            <div className='w-[600px] h-[600px] rounded-[300px] bg-light-white dark:bg-dark-black'/>
        </div>
        <div className='flex absolute h-[700px] w-[calc(100vw-8rem)] justify-center items-center'>
        <Image src="/pardus.png" alt="Hero" width={700} height={500} objectPosition="center" className='z-10 object-contain scale-x-[-1]'/>
        </div>
        <div className='flex flex-col pt-20 items-start gap-4 z-10'>
            <span className='text-light-black-transparent dark:text-dark-white-transparent flex flex-row gap-2 items-center'>
                {"AI Services"}
                <AISVG className="w-4 h-4 fill-light-black-transparent dark:fill-dark-white-transparent"/>
                </span>
            <span className='whitespace-pre-wrap max-w-80 font-semibold text-light-black dark:text-dark-white'>{"Using LLMs we can build several projects like ChatBots, Autmated Systems, Human Services..."}</span>
            <Link href={"/"} className='group flex'>
            <span>{"Learn More"}</span>
            <NextSVG className="group-hover:fill-primary-600 relative group-hover:translate-x-2 transition-transform"/>
            </Link>
        </div>
    </header>
  )
}
