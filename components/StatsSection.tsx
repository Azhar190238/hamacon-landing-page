"use client";

import Image from "next/image";
import { FaClock, FaDollarSign, FaFileAlt } from "react-icons/fa";
import { ShimmerButton } from "./magicui/shimmer-button";
import Link from "next/link";
import { PulsatingButton } from "./magicui/pulsating-button";

const StatsSection = () => {
  const stats = [
    {
      value: "20",
      label: "Over 20 Years In Business",
      icon: null,
    },
    {
      value: null,
      label: "Fixed Price Promise",
      icon: <FaDollarSign className="text-yellow-500 text-4xl" />,
    },
    {
      value: null,
      label: "Custom Free Quotations",
      icon: <FaFileAlt className="text-yellow-500 text-4xl" />,
    },
    {
      value: null,
      label: "Timely Completion",
      icon: <FaClock className="text-yellow-500 text-4xl" />,
    },
  ];

  return (
    <section
      className="relative w-full py-16 text-center"
      style={{
        backgroundImage: "url('/bghero.jpg')", // replace with your background image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Yellow Overlay */}
      <div className="absolute inset-0 bg-[#FFA100]/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Top Heading */}
        <div className="mb-12">
          <h1 className="text-lg md:text-xl font-extrabold bg-[#000] text-[#fff] mb-4 max-w-[510px] mx-auto px-2 py-1">
            Building Strong Foundations, One Slab at a Time
          </h1>
          <p className="text-xl md:text-3xl lg:text-5xl font-bold uppercase text-[#000]">
            We specialise in delivering lasting foundations & transforming
            spaces
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition"
            >
              {item.value ? (
                <h2 className="text-5xl font-extrabold text-yellow-500 mb-2">
                  {item.value}
                </h2>
              ) : (
                <div className="mb-2">{item.icon}</div>
              )}
              <p className="text-lg md:text-xl lg:text-2xl font-bold text-[#000]">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4">
            <div className=" animate-bounce-slow">
              <a href="tel:+61498994149" className="">
                <ShimmerButton background="#FFF" className="shadow-2xl">
                  <span>☎️</span>
                  <span className="whitespace-pre-wrap text-center  font-medium leading-none tracking-tight text-[#000] dark:from-white dark:to-slate-900/10 lg:text-lg">
                    +61 498 994 149
                  </span>
                </ShimmerButton>
              </a>
            </div>
            <div className="animate-bounce-slow">
              <Link href="/#quote" className="text-white animate-accordion-up">
                <PulsatingButton>Get a FREE Quote 🚀111</PulsatingButton>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 pt-6">
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
            <span className="font-bold text-[#fff]">
              100% Satisfaction • 100% Success
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
