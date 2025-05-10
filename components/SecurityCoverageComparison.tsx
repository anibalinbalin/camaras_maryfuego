"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ShieldCheck, GripVertical } from "lucide-react"
import { DotPlacementComponent } from "@/components/floorplans/Armando/CasaArmandoBad"
import { DotPlacementComponent as CasaArmandoGood } from "@/components/floorplans/Armando/CasaArmandoGood"

const SecurityCoverageComparison: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50)
  const [isDragging, setIsDragging] = useState<boolean>(false)

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true)
    handleMouseMove(e)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return

    const rect = e.currentTarget.getBoundingClientRect()
    let x = 0

    if ("touches" in e && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left
    } else if ("clientX" in e) {
      x = e.clientX - rect.left
    }

    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="p-4 border-b bg-muted/50">
          <h3 className="font-medium flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-primary" />
            Coverage Comparison
          </h3>
        </div>
        <div className="p-4">
          <div
            className="relative select-none"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleMouseMove}
            onTouchEnd={handleMouseUp}
          >
            {/* Current Coverage (Bad) */}
            <div
              className="absolute inset-0 z-10"
              style={{
                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
              }}
            >
              <DotPlacementComponent className="w-full" />
            </div>

            {/* Proposed Coverage (Good) */}
            <div className="relative z-0">
              <CasaArmandoGood className="w-full" />
            </div>

            {/* Slider Control */}
            <div className="absolute top-0 bottom-0 w-0.5 bg-primary z-20" style={{ left: `${sliderPosition}%` }}>
              <button
                type="button"
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-12 bg-background dark:bg-zinc-800 rounded-full shadow-md flex flex-col items-center justify-center gap-1 cursor-ew-resize border border-primary/20"
                onMouseDown={handleMouseDown}
                onTouchStart={handleMouseDown}
                aria-label="Drag to compare camera coverage"
              >
                {/* Three dots for better visibility in both light and dark modes */}
                <div className="flex flex-col gap-1">
                  <div className="flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-primary/80 dark:bg-primary" />
                    <div className="w-1 h-1 rounded-full bg-primary/80 dark:bg-primary" />
                  </div>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-primary/80 dark:bg-primary" />
                    <div className="w-1 h-1 rounded-full bg-primary/80 dark:bg-primary" />
                  </div>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-primary/80 dark:bg-primary" />
                    <div className="w-1 h-1 rounded-full bg-primary/80 dark:bg-primary" />
                  </div>
                </div>
              </button>
            </div>

            {/* Labels */}
            <div className="absolute top-2 left-2 z-30 bg-black/60 text-white text-xs px-2 py-1 rounded">
              Cobertura Actual
            </div>
            <div className="absolute top-2 right-2 z-30 bg-black/60 text-white text-xs px-2 py-1 rounded">
              Cobertura Propuesta
            </div>
          </div>

          <div className="mt-4 flex justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <span className="text-xs">Cobertura Actual</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-xs">Cobertura Propuesta</span>
            </div>
          </div>

          <div className="mt-2 text-center text-xs text-muted-foreground">
            Arrastre el deslizador para comparar la cobertura de las cámaras
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default SecurityCoverageComparison
