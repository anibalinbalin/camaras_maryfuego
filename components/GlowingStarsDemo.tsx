"use client"
import { GlowingStarsBackgroundCard, GlowingStarsDescription, GlowingStarsTitle } from "@/components/ui/glowing-stars"
import { MoveRight } from "lucide-react"

export default function GlowingStarsBackgroundCardPreview() {
  return (
    <div className="flex py-12 items-center justify-center antialiased">
      <GlowingStarsBackgroundCard>
        <div className="flex flex-col">
          <GlowingStarsTitle>Seguridad Ubiquiti</GlowingStarsTitle>
          <div className="flex items-center justify-between">
            <GlowingStarsDescription>
              Propuesta de seguridad con cámaras por AI, redundancia, y 4k.
            </GlowingStarsDescription>
            <div className="h-12 w-12 rounded-full bg-gray-100 border border-gray-200 dark:bg-[#333] dark:border-gray-700 flex items-center justify-center ml-4 shrink-0 transition-all hover:bg-gray-200 dark:hover:bg-[#444] cursor-pointer">
              <MoveRight className="h-5 w-5 text-blue-600 dark:text-white" />
            </div>
          </div>
        </div>
      </GlowingStarsBackgroundCard>
    </div>
  )
}
