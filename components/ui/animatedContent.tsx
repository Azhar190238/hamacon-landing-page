"use client";
import { useRef, useEffect, useState, ReactNode } from "react";
import { useSpring, animated, SpringConfig } from "@react-spring/web";

interface AnimatedContentProps {
  children: ReactNode;
  distance?: number;
  direction?: "vertical" | "horizontal";
  reverse?: boolean;
  config?: SpringConfig;
  initialOpacity?: number;
  animateOpacity?: boolean;
  scale?: number;
  threshold?: number;
}

const AnimatedContent: React.FC<AnimatedContentProps> = ({
  children,
  distance = 100,
  direction = "vertical",
  reverse = false,
  config = { tension: 50, friction: 25 },
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  const directions: Record<"vertical" | "horizontal", "X" | "Y"> = {
    vertical: "Y",
    horizontal: "X",
  };

  const springProps = useSpring({
    to: {
      transform: inView
        ? `translate${directions[direction]}(0px) scale(1)`
        : `translate${directions[direction]}(${
            reverse ? `-${distance}px` : `${distance}px`
          }) scale(${scale})`,
      opacity: inView ? 1 : animateOpacity ? initialOpacity : 1,
    },
    config,
  });

  return (
    <animated.div ref={ref} style={springProps}>
      {children}
    </animated.div>
  );
};

export default AnimatedContent;
