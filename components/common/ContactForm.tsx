"use client";

import Image from "next/image";
import React, { useState } from "react";
import Swal from "sweetalert2"; // SweetAlert2 for nice popups

const ContactForm = ({ review = false }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    project: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mdklajjd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          "Full Name": formData.fullName,
          Phone: formData.phone,
          Email: formData.email,
          "Project Description": formData.project,
        }),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Thank you!",
          text: "Your message has been sent successfully!",
          timer: 3000,
          timerProgressBar: true,
          showConfirmButton: false,
        });
        // Reset the form
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          project: "",
        });
      } else {
        throw new Error("Form submission failed.");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Something went wrong. Please try again.",
      });
      console.error(error);
    }
  };

  return (
    <div className="bg-white text-gray-900 rounded-xl shadow-lg p-6 sm:p-8">
      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mx-auto text-center font-bold mb-4">
        Get a FREE Quote 🚀
      </h3>
      <hr />

      <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
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
              name="phone"
              value={formData.phone}
              onChange={handleChange}
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
              name="email"
              value={formData.email}
              onChange={handleChange}
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
            name="project"
            value={formData.project}
            onChange={handleChange}
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

      {/* Customer Review Section */}
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
          <span className="font-bold text-[#000]">
            100% Satisfaction • 100% Success
          </span>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
