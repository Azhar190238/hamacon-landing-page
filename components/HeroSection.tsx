"use client";

import Image from "next/image";
import Link from "next/link";
import ContactForm from "./common/ContactForm";
import { ShimmerButton } from "./magicui/shimmer-button";

export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white">
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

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Melbourne’s <span className="text-yellow-400">5-Star Rated</span>{" "}
            Concrete Slab Experts
          </h1>

          <p className="text-lg text-gray-200 max-w-xl">
            At Boparai Concreting, we pride ourselves in offering Site Cuts,
            Site Cleans & Concrete Slabs. From Small Builds to Commercial
            Projects, we have the Skills & Gear to Handle Any Job.
          </p>

          <p className="text-lg font-medium">
            Call us today to get a FREE quote!
          </p>

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
        {/* <div className="bg-white text-gray-900 rounded-xl shadow-lg p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">
            Get a FREE Quote 🚀
          </h3>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Number"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Describe Your Project
              </label>
              <textarea
                rows={4}
                placeholder="Type here..."
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              GET A FREE QUOTE NOW
            </button>
          </form>
        </div> */}
        <ContactForm />
      </div>
    </section>
  );
}
