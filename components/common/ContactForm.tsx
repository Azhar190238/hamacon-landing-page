"use client";

import Image from "next/image";
import React from "react";

const ContactForm = ({ review = false }) => {
  return (
    <div className="bg-white text-gray-900 rounded-xl shadow-lg p-6 sm:p-8">
      <h3 className="text-xl sm:text-2xl font-bold mb-4">
        Get a FREE Quote 🚀
      </h3>

      <form className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            required
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Phone + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="Number"
              required
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
              required
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-400"
            />
          </div>
        </div>

        {/* Project Description */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Describe Your Project
          </label>
          <textarea
            rows={4}
            placeholder="Type here..."
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
        >
          GET A FREE QUOTE NOW
        </button>
      </form>
      {review === true && (
        <div className="flex items-center gap-3 pt-6 pb-3">
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
          <span className=" font-bold text-[#000]">
            100% Satisfaction • 100% Success
          </span>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
