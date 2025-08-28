"use client";

import React from "react";
import Image from "next/image";
import { CiCircleCheck } from "react-icons/ci";
const CommonHeader = ({ heading, description, image="/bghero.jpg" }) => {
  return (
    <div className="relative h-[290px] w-full flex items-center justify-center font-opensans">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl px-6 lg:px-8 text-center text-white">
      <h2 className="text-3xl md:text-5xl text-[#fff]   font-bold mb-4 drop-shadow-lg tracking-tight">
          {heading}
        </h2>
        <div className="text-lg  max-w-3xl  drop-shadow-md flex items-center justify-center space-x-1">
         <p>Home  </p> <CiCircleCheck className="text-[#000] bg-[#FFA202] rounded-full" /> <p> {description} </p>
        </div>
      </div>
    </div>
  );
};


export default CommonHeader;
