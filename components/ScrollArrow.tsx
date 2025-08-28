"use client";

import React from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

const ScrollToTopButton: React.FC = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scroll
    });
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-yellow-500 text-white shadow-lg hover:bg-yellow-600 transition-transform transform-gpu hover:scale-110"
      aria-label="Scroll to top"
    >
      <MdKeyboardArrowUp className="w-6 h-6" />
    </button>
  );
};

export default ScrollToTopButton;
