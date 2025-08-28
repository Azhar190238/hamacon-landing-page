"use client";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#022133] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Contact Info</h3>
          <div className="w-12 h-[2px] bg-white mb-4"></div>
          <ul className="space-y-3 text-gray-200">
            <li>📞 <Link href="tel:+61498994149">+61 498 994 149</Link></li>
            <li>📧 <Link href="mailto:info@boparaiconcreting.com.au">Info@boparaiconcreting.com.au</Link></li>
            <li>📍 Melbourne, Australia</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Company</h3>
          <div className="w-12 h-[2px] bg-white mb-4"></div>
          <ul className="space-y-3 text-gray-200">
            <li><Link href="/">› Home</Link></li>
            <li><Link href="/faqs">› FAQs</Link></li>
            <li><Link href="/reviews">› Customer Reviews</Link></li>
            <li><Link href="/contact">› Contact Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Our Services</h3>
          <div className="w-12 h-[2px] bg-white mb-4"></div>
          <ul className="space-y-3 text-gray-200">
            <li><Link href="/services/basements">› Boparai Basements</Link></li>
            <li><Link href="/services/excavation">› Boparai Excavation</Link></li>
            <li><Link href="/services/piling">› Boparai Piling</Link></li>
          </ul>
        </div>

        {/* Stay Connected */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Stay Connected</h3>
          <div className="w-12 h-[2px] bg-white mb-4"></div>

          {/* Social Icons */}
          <div className="flex space-x-4 mb-4">
            <Link href="https://facebook.com" target="_blank">
              <div className="w-10 h-10 flex items-center justify-center bg-white text-blue-600 rounded-full hover:bg-gray-200 transition">
                <FaFacebookF />
              </div>
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <div className="w-10 h-10 flex items-center justify-center bg-white text-pink-600 rounded-full hover:bg-gray-200 transition">
                <FaInstagram />
              </div>
            </Link>
          </div>

          {/* Newsletter */}
          <form className="space-y-2">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-white text-red-600 font-semibold py-2 rounded-md hover:bg-gray-100 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        Copyright © {new Date().getFullYear()} Boparai Concreting | All Rights Reserved.
      </div>
    </footer>
  );
}
