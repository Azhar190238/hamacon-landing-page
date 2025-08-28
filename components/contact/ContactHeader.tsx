"use client";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";

const ContactHeader = () => {
  const smoothScrollTo = (targetId, duration = 1000) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const start = window.scrollY || window.pageYOffset;
    const end = target.getBoundingClientRect().top + start;
    const distance = end - start;
    let startTime = null;

    const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    function animation(currentTime) {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutQuad(progress);

      window.scrollTo(0, start + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  };

  const handleScrollDownClick = (e) => {
    e.preventDefault();
    smoothScrollTo("footer", 2000);
  };
  return (
    <section id="contact" className="relative h-[450px] w-full overflow-hidden flex items-center justify-center font-opensans">
      <div className="absolute inset-0 z-0">
        <Image
          src="/contact/contact.jpg"
          alt="Contact ABCON"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
      </div>
      <div className="relative z-10 w-full max-w-7xl px-6 lg:px-8">
        <div className="mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-anton uppercase">
            ABCON <span className="text-blue-400">CONSULTING</span> <br />
            <span className="text-blue-400">GET IN TOUCH</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or need expert advice? Our design, civil, and
            structural specialists are here to help.
          </p>
          <div className="flex justify-center">
            <Link
              href="tel:(02)96757731"
              className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <FaPhoneAlt className="text-xl" />
              Call Us Now
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#footer"
        onClick={handleScrollDownClick}
        className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
      >
        <div className="animate-bounce flex flex-col items-center">
          <div className="w-8 h-12 border-2 border-blue-400 rounded-full flex justify-center items-start pt-2">
            <div className="w-1 h-3 bg-blue-400 rounded-full animate-pulse" />
          </div>
          <span className="text-white text-sm mt-2">Scroll</span>
        </div>
      </a>
    </section>
  );
};

export default ContactHeader;
