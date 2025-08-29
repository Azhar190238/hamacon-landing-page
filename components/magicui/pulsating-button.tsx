"use client";
import React from "react";
import { cn } from "../lib/utils";

interface PulsatingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pulseColor?: string;
  duration?: string;
}

export const PulsatingButton = React.forwardRef<
  HTMLButtonElement,
  PulsatingButtonProps
>(
  (
    {
      className,
      children,
      pulseColor = "#ffa100", // default red
      duration = "1.5s",
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative flex cursor-pointer items-center justify-center rounded-xl bg-[#000] px-6 py-3 text-center text-[#fff] font-bold overflow-hidden",
          className,
        )}
        style={
          {
            "--pulse-color": pulseColor,
            "--duration": duration,
          } as React.CSSProperties
        }
        {...props}
      >
        <span className="relative z-10">{children}</span>
        {/* Pulse Effect */}
        <span className="absolute inset-0 rounded-lg bg-[var(--pulse-color)] animate-pulse-glow" />
      </button>
    );
  },
);

PulsatingButton.displayName = "PulsatingButton";
