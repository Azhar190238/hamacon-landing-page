"use client";

import Image from "next/image";
import Link from "next/link";
import ContactForm from "./common/ContactForm";

export default function LeadingPractical() {
  return (
    <section id="contact" className="relative bg-gray-900 text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/others/building.jpeg" // replace with your image
          alt="Concrete Slab"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 flex flex-col lg:flex-row  gap-6 xl:gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6 w-full lg:w-[60%]">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold max-w-[500px] leading-tight">
            The leading practical and aesthetic concreting provider in
            Melbourne.
          </h1>

          <p className="text-lg text-gray-200 max-w-xl">
            Get your Concrete Slabs, Driveways and Decorative Concreting done by
            Sydney’s top-rated experts. At Boparai Concreting, we take pride in
            delivering both beautiful and practical concreting services.
          </p>
          <p className="text-lg text-gray-200 max-w-xl">
            No matter the size of your project, our skilled team will get it
            done on time, every time.
          </p>

          <p className="text-lg font-medium">
           Call us now for a free consultation and start building strong foundations today!
          </p>

          {/* Phone Button */}
          <Link
            href="tel:+61498994149"
            className="inline-flex text-xl md:text-3xl lg:text-5xl items-center gap-2  text-[#fff] font-bold px-6 py-4 rounded-lg shadow-md hover:text-yellow-500 transition"
          >
            ☎️ +61 498 994 149
          </Link>

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
        </div>

        {/* Right Form */}
        <div>
          <ContactForm review={true}/>
        </div>
      </div>
    </section>
  );
}
