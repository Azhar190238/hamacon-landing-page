"use client";

import Image from "next/image";
import Link from "next/link";
import ContactForm from "./common/ContactForm";
import { ShimmerButton } from "./magicui/shimmer-button";
import AnimatedContent from "./ui/animatedContent";
import SplitText from "./ui/splitText";
import BlurText from "./ui/blurText";

export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white overflow-x-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/bghero.jpg" // replace with your image
          alt="Concrete Slab"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-28 flex flex-col lg:flex-row gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6 w-full lg:w-3/5">
          <Image
            src="/logo2.png"
            alt="Boparai Concreting Logo"
            width={260}
            height={70}
            className="object-contain"
            priority
          />

          <SplitText
            text={"Melbourne’s 5-Star Rated Concrete Slab Experts"}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight"
            delay={20}
            heighlightsword={[2, 4, 7]}
            heighlightclass={"text-[#FFA100]"}
          />
          <BlurText
            text={
              "At Boparai Concreting, we pride ourselves in offering Site Cuts, Site Cleans & Concrete Slabs. From Small Builds to Commercial Projects, we have the Skills & Gear to Handle Any Job."
            }
            className="!text-center flex max-w-xl justify-center  mt-8"
            delay={200}
          />
          <AnimatedContent
            direction="vertical"
            distance={100}
            reverse={true}
          >
            <p className="text-lg font-medium">
              Call us today to get a FREE quote!
            </p>
          </AnimatedContent>

          {/* Phone Button */}
          <div className=" animate-bounce-slow">
            <a href="tel:+61498994149" className="">
              <ShimmerButton background="#FFA100" className="shadow-2xl">
                <span>☎️</span>
                <span className="whitespace-pre-wrap text-center  font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  +61 498 994 149
                </span>
              </ShimmerButton>
            </a>
          </div>
          <AnimatedContent direction="horizontal" distance={100} reverse={true}>
            {/* Reviews (avatars + text) */}
            <div className="flex items-center gap-3 pt-3">
              <div className="flex -space-x-2">
                <Image
                  src="/hero/avatar1.jpg"
                  alt="Customer"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <Image
                  src="/hero/avatar2.jpg"
                  alt="Customer"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <Image
                  src="/hero/avatar3.jpeg"
                  alt="Customer"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              </div>
              <span className="text-sm text-gray-200">
                100% Satisfaction • 100% Success
              </span>
            </div>
          </AnimatedContent>
        </div>
        <div className="w-full lg:w-2/5">
          <AnimatedContent direction="horizontal" distance={100} reverse={false}>
          <ContactForm />
        </AnimatedContent>
        </div>
      </div>
    </section>
  );
}
