"use client";

import { useEffect, useRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SpotlightProps extends HTMLAttributes<HTMLDivElement> {
  fill?: string;
  size?: number;
  glow?: boolean;
  opacity?: number;
  blur?: number;
}

export function Spotlight({
  className,
  fill = "white",
  size = 500,
  glow = true,
  opacity = 0.7,
  blur = 100,
  ...props
}: SpotlightProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { current: div } = divRef;
      if (!div) return;
      
      const { clientX, clientY } = e;
      const rect = div.getBoundingClientRect();
      
      // Calculate mouse position relative to the div
      mouseX.current = clientX - rect.left;
      mouseY.current = clientY - rect.top;
      
      // Update the gradient position with more intense gradient and slower falloff
      div.style.background = `radial-gradient(
        circle at ${mouseX.current}px ${mouseY.current}px, 
        ${fill} 0%, 
        rgba(255, 255, 255, 0.15) 50%,
        rgba(255, 255, 255, 0) 80%
      )`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [fill]);

  return (
    <div
      ref={divRef}
      className={cn(
        "pointer-events-none absolute h-full w-full max-w-full rounded-full",
        glow && "after:absolute after:inset-0", 
        className
      )}
      {...props}
      style={{
        background: `radial-gradient(
          circle at 50% 50%,
          ${fill} 0%,
          rgba(255, 255, 255, 0.15) 50%,
          rgba(255, 255, 255, 0) 80%
        )`,
        width: `${size * 2}px`,
        height: `${size * 2}px`,
        opacity: opacity,
        filter: glow ? `blur(${blur}px)` : 'none',
        mixBlendMode: 'screen',
      }}
    />
  );
} 