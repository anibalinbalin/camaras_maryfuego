"use client";
import React from "react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";

type SpotlightProps = {
  gradientFirst?: string;
  gradientSecond?: string;
  gradientThird?: string;
  translateY?: number;
  width?: number;
  height?: number;
  smallWidth?: number;
  duration?: number;
  xOffset?: number;
};

export const Spotlight = ({
  translateY = -350,
  width = 680,
  height = 1500,
  smallWidth = 320,
  duration = 6,
  xOffset = 150,
}: SpotlightProps = {}) => {
  const { theme } = useTheme();
  const isLight = theme === "light";
  
  // Enhanced gradient values with higher opacity and more contrast
  const gradientFirst = isLight 
    ? "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 25%, .2) 0, hsla(210, 100%, 25%, .12) 50%, hsla(210, 100%, 25%, 0) 80%)"
    : "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, .15) 0, hsla(210, 100%, 55%, .08) 50%, hsla(210, 100%, 45%, 0) 80%)";
    
  const gradientSecond = isLight
    ? "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 25%, .16) 0, hsla(210, 100%, 25%, .08) 80%, transparent 100%)"
    : "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .12) 0, hsla(210, 100%, 55%, .06) 80%, transparent 100%)";
    
  const gradientThird = isLight
    ? "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 25%, .12) 0, hsla(210, 100%, 25%, .06) 80%, transparent 100%)"
    : "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .1) 0, hsla(210, 100%, 45%, .05) 80%, transparent 100%)";

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      <motion.div
        animate={{
          x: [0, xOffset, 0],
        }}
        transition={{
          duration,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-screen h-screen z-40 pointer-events-none"
      >
        <div
          style={{
            transform: `translateY(${translateY}px) rotate(-45deg)`,
            background: gradientFirst,
            width: `${width}px`,
            height: `${height}px`,
            filter: "blur(2px)",
          }}
          className="absolute top-0 left-0"
        />

        <div
          style={{
            transform: "rotate(-45deg) translate(5%, -50%)",
            background: gradientSecond,
            width: `${smallWidth}px`,
            height: `${height}px`,
            filter: "blur(1px)",
          }}
          className="absolute top-0 left-0 origin-top-left"
        />

        <div
          style={{
            transform: "rotate(-45deg) translate(-180%, -70%)",
            background: gradientThird,
            width: `${smallWidth}px`,
            height: `${height}px`,
            filter: "blur(1px)",
          }}
          className="absolute top-0 left-0 origin-top-left"
        />
      </motion.div>

      <motion.div
        animate={{
          x: [0, -xOffset, 0],
        }}
        transition={{
          duration,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-screen h-screen z-40 pointer-events-none"
      >
        <div
          style={{
            transform: `translateY(${translateY}px) rotate(45deg)`,
            background: gradientFirst,
            width: `${width}px`,
            height: `${height}px`,
            filter: "blur(2px)",
          }}
          className="absolute top-0 right-0"
        />

        <div
          style={{
            transform: "rotate(45deg) translate(-5%, -50%)",
            background: gradientSecond,
            width: `${smallWidth}px`,
            height: `${height}px`,
            filter: "blur(1px)",
          }}
          className="absolute top-0 right-0 origin-top-right"
        />

        <div
          style={{
            transform: "rotate(45deg) translate(180%, -70%)",
            background: gradientThird,
            width: `${smallWidth}px`,
            height: `${height}px`,
            filter: "blur(1px)",
          }}
          className="absolute top-0 right-0 origin-top-right"
        />
      </motion.div>
    </motion.div>
  );
}; 