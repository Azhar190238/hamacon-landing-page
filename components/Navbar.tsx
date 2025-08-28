"use client";

import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Drawer } from "antd";
import { usePathname } from "next/navigation";
import { ShimmerButton } from "./magicui/shimmer-button";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="bg-white text-[#000000] !font-semibold border-b border-gray-100 relative z-20  font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={160}
              height={48}
              className="object-contain transition-transform duration-300 hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center !font-bold space-x-1">
            <Link
              href="/"
              className={`px-4 py-3 font-bold rounded-lg ${
                isActive("/")
                  ? "bg-[#F9651E]/20 text-[#F9651E]"
                  : "hover:text-[#F9651E] hover:bg-gray-50"
              }`}
            >
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setOpenSubmenu("services")}
              onMouseLeave={() => setOpenSubmenu(null)}
            >
              <button
                className={`flex items-center px-4 py-3 font-bold rounded-lg ${
                  pathname.includes("/services")
                    ? "bg-[#F9651E]/20 text-[#F9651E]"
                    : "hover:text-[#F9651E] hover:bg-gray-50"
                }`}
                onClick={() => toggleSubmenu("services")} // still works for mobile click
              >
                Services
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${
                    openSubmenu === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openSubmenu === "services" && (
                <div className="absolute right-0  w-[200px] bg-black rounded-lg shadow-lg ring-1 ring-gray-200 p-2 grid grid-cols-1 gap-2">
                  <Link
                    href="/services/boparai-basements"
                    className="block px-4 py-1  hover:bg-blue-50 text-white hover:text-[#F9651E] rounded"
                  >
                    Boparai Basements
                  </Link>
                  <Link
                    href="/services/boparai-excavation"
                    className="block px-4 py-1  hover:bg-blue-50 text-white hover:text-[#F9651E] rounded"
                  >
                    Boparai Excavation
                  </Link>
                  <Link
                    href="/services/boparai-pilling"
                    className="block px-4 py-1  hover:bg-blue-50 text-white hover:text-[#F9651E] rounded"
                  >
                    Boparai Pilling
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/#faqs"
              className={`px-4 py-3 font-bold rounded-lg ${
                isActive("#faqs")
                  ? "bg-[#F9651E]/20 text-[#F9651E]"
                  : "hover:text-[#F9651E]"
              }`}
            >
              FAQs
            </Link>
            <Link
              href="/#reviews"
              className={`px-4 py-3 font-bold rounded-lg ${
                isActive("#reviews")
                  ? "bg-[#F9651E]/20 text-[#F9651E]"
                  : "hover:text-[#F9651E] hover:bg-gray-50"
              }`}
            >
              Customer Reviews
            </Link>
            <Link
              href="/#contact"
              className={`px-4 py-3 font-bold rounded-lg ${
                isActive("#contact")
                  ? "bg-[#F9651E]/20 text-[#F9651E]"
                  : "hover:text-[#F9651E] hover:bg-gray-50"
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Phone Button (Desktop Only) */}
          <div className="hidden lg:block animate-bounce-slow">
            <a
              href="tel:+61498994149"
              className=""
            >
              <ShimmerButton  background="#FFA100" className="shadow-2xl">
                <span>☎️</span>
                <span className="whitespace-pre-wrap text-center  font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  +61 498 994 149
                </span>
              </ShimmerButton>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Drawer for Mobile */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => {
          setIsMobileMenuOpen(false);
          setOpenSubmenu(null);
        }}
        open={isMobileMenuOpen}
        width={280}
        closeIcon={<X className="text-gray-700" />}
        styles={{ body: { padding: "1rem" } }}
      >
        <nav className="space-y-3">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-2 py-2 font-bold !text-[#000]  hover:!text-[#F9651E] hover:bg-blue-50 rounded"
          >
            Home
          </Link>
          <button
            onClick={() => toggleSubmenu("services")}
            className="w-full flex justify-between items-center px-2 py-2 font-bold !text-[#000] hover:!text-[#F9651E] hover:bg-blue-50 rounded"
          >
            Services
            <ChevronDown
              className={`h-5 w-5 transition-transform ${
                openSubmenu === "services" ? "rotate-180" : ""
              }`}
            />
          </button>
          {openSubmenu === "services" && (
            <div className="pl-4 space-y-1">
              <Link
                href="/services/boparai-basements"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-2 py-1 !font-semibold !text-[#000] hover:!text-[#F9651E]"
              >
                 Boparai Basements
              </Link>
              <Link
                href="/services/boparai-excavation"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-2 py-1 !font-semibold !text-[#000] hover:!text-[#F9651E]"
              >
                Boparai Excavation
              </Link>
              <Link
                href="/services/boparai-pilling"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-2 py-1 !font-semibold !text-[#000] hover:!text-[#F9651E]"
              >
                Boparai Pilling
              </Link>
            </div>
          )}

          <Link
            href="/#faqs"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-2 py-2 font-bold !text-[#000] hover:text-[#F9651E] hover:bg-blue-50 rounded"
          >
            FAQs
          </Link>
          <Link
            href="/#reviews"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-2 py-2 font-bold !text-[#000] hover:text-[#F9651E] hover:bg-blue-50 rounded"
          >
            Customer Reviews
          </Link>
          <Link
            href="/#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-2 py-2 font-bold !text-[#000] hover:text-[#F9651E] hover:bg-blue-50 rounded"
          >
            Contact Us
          </Link>

           <div className=" animate-bounce-slow">
            <a
              href="tel:+61498994149"
              className=""
            >
              <ShimmerButton  background="#FFA100" className="shadow-2xl">
                <span>☎️</span>
                <span className="whitespace-pre-wrap text-center  font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  +61 498 994 149
                </span>
              </ShimmerButton>
            </a>
          </div>
        </nav>
      </Drawer>
    </nav>
  );
};

export default Navbar;
