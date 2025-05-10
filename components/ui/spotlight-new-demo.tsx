"use client";
import React, { useState, useEffect } from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { GlowingStarsBackgroundCard, GlowingStarsDescription, GlowingStarsTitle } from "@/components/ui/glowing-stars";
import Link from "next/link";
import SecurityNavbar from "@/components/SecurityNavbar";
import { useTheme } from "next-themes";

export default function SpotlightNewDemo() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  // Add mounted state to prevent hydration mismatch
  const [mounted, setMounted] = useState(false);

  // Only show the UI when mounted on client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Render a simple placeholder during SSR and initial mount
  if (!mounted) {
    return (
      <div className="w-full h-screen flex flex-col relative overflow-hidden">
        <div className="relative z-50">
          <SecurityNavbar />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="p-4 max-w-7xl mx-auto w-full flex items-center justify-center">
            {/* Placeholder while loading */}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full h-screen flex flex-col relative overflow-hidden ${isLight ? 'bg-white/90' : 'bg-black/[0.96]'}`}>
      {/* Spotlight effect spans entire component */}
      <div className="absolute inset-0 z-0">
        <Spotlight />
      </div>
      
      {/* Navbar positioned at top with proper z-index */}
      <div className="relative z-50">
        <SecurityNavbar />
      </div>
      
      {/* Main content centered in spotlight area */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="p-4 max-w-7xl mx-auto w-full flex items-center justify-center">
          <GlowingStarsBackgroundCard className={`max-w-md ${isLight ? 'bg-gray-100/70 shadow-md' : ''}`}>
            <GlowingStarsTitle className={isLight ? 'text-gray-900' : ''}>Seguridad: Mar y Fuego</GlowingStarsTitle>
            <div className="flex justify-between items-end">
              <GlowingStarsDescription className={isLight ? 'text-gray-700' : ''}>
                Propuesta de seguridad con cámaras por AI, reduncia, y 4k.
              </GlowingStarsDescription>
              <Link href="#security-plans" aria-label="Ver planes de seguridad">
                <div className={`h-8 w-8 rounded-full flex items-center justify-center ${isLight ? 'bg-blue-100 hover:bg-blue-200' : 'bg-[hsla(0,0%,100%,.1)] hover:bg-[hsla(0,0%,100%,.15)]'} transition-colors`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={`h-4 w-4 stroke-2 ${isLight ? 'text-blue-600' : 'text-white'}`}
                  >
                    <title>Ver planes de seguridad</title>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </div>
              </Link>
            </div>
          </GlowingStarsBackgroundCard>
        </div>
      </div>
    </div>
  );
} 