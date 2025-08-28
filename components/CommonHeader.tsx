"use client";

import React from "react";
import Image from "next/image";
import { CiCircleCheck } from "react-icons/ci";
const CommonHeader = ({ heading, description }) => {
  return (
    <div className="relative h-[400px] w-full flex items-center justify-center font-opensans">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bghero.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl px-6 lg:px-8 text-center text-white">
        <h2 className="text-4xl md:text-5xl text-[#103dee] lg:text-6xl font-anton font-bold mb-4 drop-shadow-lg">
          {heading}
        </h2>
        <div className="text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md flex items-center">
         <p>Home  </p> <CiCircleCheck /> <p> {description} </p>
        </div>
      </div>
    </div>
  );
};

export default CommonHeader;
