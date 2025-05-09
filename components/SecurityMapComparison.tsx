"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { GripVertical } from "lucide-react"
import { DotPlacementComponent as CasaArmandoBad } from "@/components/floorplans/Armando/CasaArmandoBad"
import { DotPlacementComponent as CasaArmandoGood } from "@/components/floorplans/Armando/CasaArmandoGood"
import { DotPlacementComponent as CasaNidoBad } from "@/components/floorplans/Nido/CasaNidoBad"
import { DotPlacementComponent as CasaNidoGood } from "@/components/floorplans/Nido/CasaNidoGood"
import { cn } from "@/lib/utils"

interface SecurityMapComparisonProps {
  title?: string
  initialPosition?: number
  showLabels?: boolean
  type?: "armando" | "nido"
}

const SecurityMapComparison = ({
  title = "Security Coverage Comparison",
  initialPosition = 50,
  showLabels = true,
  type = "armando",
}: SecurityMapComparisonProps) => {
  const [sliderPosition, setSliderPosition] = useState<number>(initialPosition)
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault()
    setIsDragging(true)
    updateSliderPosition(e)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const updateSliderPosition = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    let clientX = 0

    if ("touches" in e && e.touches.length > 0) {
      clientX = e.touches[0].clientX
    } else if ("clientX" in e) {
      clientX = e.clientX
    }

    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (isDragging) {
      updateSliderPosition(e)
    }
  }

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const rect = containerRef.current?.getBoundingClientRect()
        if (!rect) return

        const x = e.clientX - rect.left
        const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
        setSliderPosition(percentage)
      }
    }

    const handleGlobalMouseUp = () => {
      setIsDragging(false)
    }

    const handleGlobalTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches.length > 0) {
        const rect = containerRef.current?.getBoundingClientRect()
        if (!rect) return

        const x = e.touches[0].clientX - rect.left
        const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
        setSliderPosition(percentage)
      }
    }

    document.addEventListener("mousemove", handleGlobalMouseMove)
    document.addEventListener("mouseup", handleGlobalMouseUp)
    document.addEventListener("touchmove", handleGlobalTouchMove, { passive: false })
    document.addEventListener("touchend", handleGlobalMouseUp)

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove)
      document.removeEventListener("mouseup", handleGlobalMouseUp)
      document.removeEventListener("touchmove", handleGlobalTouchMove)
      document.removeEventListener("touchend", handleGlobalMouseUp)
    }
  }, [isDragging])

  const BadCoverageComponent = type === "armando" ? CasaArmandoBad : CasaNidoBad
  const GoodCoverageComponent = type === "armando" ? CasaArmandoGood : CasaNidoGood

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        {title && (
          <div>
            <h3 className="font-medium">{title}</h3>
          </div>
        )}
        <div className="p-4">
          <div
            ref={containerRef}
            className="relative select-none rounded-lg overflow-hidden"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
            onTouchMove={handleMouseMove}
            style={{ touchAction: "none" }}
          >
            {/* Current Coverage (Bad) */}
            <div
              className="absolute inset-0 z-10 transition-opacity duration-200"
              style={{
                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
              }}
            >
              <BadCoverageComponent className="w-full" />
              {showLabels && (
                <div className="absolute top-2 left-2 z-30 bg-black/60 text-white text-xs px-2 py-1 rounded">
                  Cobertura Actual
                </div>
              )}
            </div>

            {/* Proposed Coverage (Good) */}
            <div className="relative z-0">
              <GoodCoverageComponent className="w-full" />
              {showLabels && (
                <div className="absolute top-2 right-2 z-30 bg-black/60 text-white text-xs px-2 py-1 rounded">
                  Cobertura Propuesta
                </div>
              )}
            </div>

            {/* Slider Control */}
            <div
              className={cn("absolute top-0 bottom-0 w-0.5 bg-primary z-20", isDragging ? "opacity-100" : "opacity-80")}
              style={{ left: `${sliderPosition}%` }}
            >
              <button
                type="button"
                className={cn(
                  "absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-12 bg-white rounded-full shadow-md flex items-center justify-center cursor-ew-resize border border-primary/20 transition-all duration-200",
                  isDragging ? "scale-110" : "scale-100 hover:scale-105",
                )}
                aria-label="Drag to compare camera coverage"
              >
                <GripVertical className="h-4 w-4 text-primary" />
              </button>
            </div>
          </div>

          <div className="mt-4 flex justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <span className="text-xs">Cobertura Actual</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-xs">Cobertura Propuesta</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default SecurityMapComparison
