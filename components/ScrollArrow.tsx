// @ts-nocheck
"use client";
import React, { useState, useEffect } from "react";

const ScrollArrow = ({ targetIds = [], positions = [], label = "Scroll", duration = 1500, style = {} }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.pageYOffset;
      let closestIndex = 0;
      let minDistance = Infinity;

      const posArray = targetIds.length
        ? targetIds.map(id => {
            const el = document.getElementById(id);
            return el ? el.offsetTop : Infinity;
          })
        : positions;

      posArray.forEach((pos, index) => {
        const dist = Math.abs(pos - scrollY);
        if (dist < minDistance) {
          minDistance = dist;
          closestIndex = index;
        }
      });

      setCurrentIndex(closestIndex);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, [targetIds, positions]);

  function handleScrollClick(e) {
    e.preventDefault();
    const length = targetIds.length || positions.length;
    if (length === 0) return;

    const nextIndex = (currentIndex + 1) % length;
    let targetPosition;

    if (targetIds.length) {
      const targetEl = document.getElementById(targetIds[nextIndex]);
      targetPosition = targetEl ? targetEl.offsetTop : window.pageYOffset;
    } else {
      targetPosition = positions[nextIndex];
    }

    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percent = Math.min(progress / duration, 1);

      window.scrollTo(0, startPosition + distance * percent);

      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    }

    window.requestAnimationFrame(step);
  }

  const defaultStyle = {
    position: "absolute",
    bottom: "1rem",
    left: "50%",
    transform: "translateX(-50%)",
    cursor: "pointer",
    zIndex: 10,
  };

  return (
    <a href="#" onClick={handleScrollClick} style={{ ...defaultStyle, ...style }}>
      <div className="animate-bounce flex flex-col items-center">
        <div className="w-8 h-12 border-2 border-blue-400 rounded-full flex justify-center items-start pt-2">
          <div className="w-1 h-3 bg-blue-400 rounded-full animate-pulse" />
        </div>
        {label && <span className="text-white text-sm mt-2">{label}</span>}
      </div>
    </a>
  );
};

export default ScrollArrow;
