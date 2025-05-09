"use client"

import Link from "next/link"
import { GlowingStarsBackgroundCard, GlowingStarsDescription, GlowingStarsTitle } from "@/components/ui/glowing-stars"

export default function HeroCard() {
  return (
    <div className="flex py-20 items-center justify-center antialiased">
      <GlowingStarsBackgroundCard className="max-w-md">
        <GlowingStarsTitle>Seguridad Ubiquiti.</GlowingStarsTitle>
        <div className="flex justify-between items-end">
          <GlowingStarsDescription>Propuesta de seguridad con cámaras por AI, reduncia, y 4k.</GlowingStarsDescription>
          <Link href="#security-plans">
            <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4 text-white stroke-2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </div>
          </Link>
        </div>
      </GlowingStarsBackgroundCard>
    </div>
  )
}
