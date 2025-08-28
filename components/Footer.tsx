"use client";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import ScrollToTopButton from "./ScrollArrow";
export default function Footer() {
  return (
    <footer className="bg-[#022133] text-white py-12 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Contact Info */}
        <div className="mx-auto">
          <h3 className="font-semibold text-lg mb-3">Contact Info</h3>
          <div className="w-16  border-b-3 border-white border-dotted mb-4"></div>
          <ul className="space-y-3 text-gray-200">
            <li>
              📞 <Link href="tel:+61498994149">+61 498 994 149</Link>
            </li>
            <li>
              📧{" "}
              <Link href="mailto:info@boparaiconcreting.com.au">
                Info@boparaiconcreting.com.au
              </Link>
            </li>
            <li>
              <div className="flex items-center space-x-2">
                {" "}
                <CiLocationOn /> <span>Melbourne, Australia </span>{" "}
              </div>{" "}
            </li>
          </ul>
        </div>

        {/* Company */}
        <div className="mx-auto">
          <h3 className="font-semibold text-lg mb-3">Company</h3>
          <div className="w-16  border-b-3 border-white border-dotted mb-4"></div>
          <ul className="space-y-3 text-gray-200">
            <li>
              <Link href="/">
                <div className="flex items-center space-x-2">
                  {" "}
                  <MdArrowForwardIos /> <span>Home</span>{" "}
                </div>
              </Link>
            </li>
            <li>
              <Link href="/#faqs">
                <div className="flex items-center space-x-2">
                  {" "}
                  <MdArrowForwardIos /> <span>FAQs</span>{" "}
                </div>
              </Link>
            </li>
            <li>
              <Link href="/#reviews">
                <div className="flex items-center space-x-2">
                  {" "}
                  <MdArrowForwardIos /> <span>Customer Reviews</span>{" "}
                </div>
              </Link>
            </li>
            <li>
              <Link href="/#contact">
                <div className="flex items-center space-x-2">
                  {" "}
                  <MdArrowForwardIos /> <span>Contact Us</span>{" "}
                </div>{" "}
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="mx-auto">
          <h3 className="font-semibold text-lg mb-3">Our Services</h3>
          <div className="w-16  border-b-3 border-white border-dotted mb-4"></div>
          <ul className="space-y-3 text-gray-200">
            <li>
              <Link href="/services/boparai-basements">
                <div className="flex items-center space-x-2">
                  {" "}
                  <MdArrowForwardIos /> <span>Boparai Basements</span>{" "}
                </div>
              </Link>
            </li>
            <li>
              <Link href="/services/boparai-excavation">
                <div className="flex items-center space-x-2">
                  {" "}
                  <MdArrowForwardIos /> <span>Boparai Excavation</span>{" "}
                </div>{" "}
              </Link>
            </li>
            <li>
              <Link href="/services/boparai-pilling">
                <div className="flex items-center space-x-2">
                  {" "}
                  <MdArrowForwardIos /> <span>Boparai Piling</span>{" "}
                </div>
              </Link>
            </li>
          </ul>
        </div>

        {/* Stay Connected */}
        <div className="mx-auto">
          <h3 className="font-semibold text-lg mb-3">Stay Connected</h3>
          <div className="w-16  border-b-3 border-white border-dotted mb-4"></div>

          {/* Social Icons */}
          <div className="flex space-x-4 mb-4">
            <Link href="https://facebook.com" target="_blank">
              <div className="w-10 h-10 flex items-center justify-center bg-white text-[#F9651E] rounded-full hover:bg-gray-200 transition">
                <FaFacebookF />
              </div>
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <div className="w-10 h-10 flex items-center justify-center bg-white text-[#F9651E] rounded-full hover:bg-gray-200 transition">
                <FaInstagram />
              </div>
            </Link>
          </div>

          {/* Newsletter */}
          <form className="space-y-2">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none border bg-white border-white"
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
      <div className="mt-8 pt-6 text-center text-[#fff] ">
        Copyright © {new Date().getFullYear()} Boparai Concreting | All Rights
        Reserved.
      </div>
      <div className="absolute bottom-4 right-4">
        <ScrollToTopButton/>
      </div>
    </footer>
  );
}
