"use client"

import { useState, useEffect } from "react"
import type { Camera } from "@/lib/types"
import { Card } from "@/components/ui/card"

interface SecurityVisualizerProps {
  floorPlan: string
  cameras: Camera[]
  showCoverage: boolean
  showOverlap?: boolean
}

const SecurityVisualizer = ({ floorPlan, cameras, showCoverage, showOverlap = false }: SecurityVisualizerProps) => {
  const [showAreas, setShowAreas] = useState(false)

  useEffect(() => {
    if (showCoverage) {
      const timer = setTimeout(() => {
        setShowAreas(true)
      }, 500)

      return () => clearTimeout(timer)
    } else {
      setShowAreas(false)
    }
  }, [showCoverage])

  return (
    <Card className="relative overflow-hidden w-full h-auto aspect-[4/3] sm:aspect-video md:h-[500px] lg:h-[600px] flex justify-center items-center">
      <div className="relative w-full sm:w-3/4 h-auto" style={{ maxHeight: "90%" }}>
        <img src={floorPlan || "/placeholder.svg"} alt="Floor Plan" className="w-full h-auto object-contain" />

        {cameras.map((camera) => (
          <div
            key={camera.id + (camera.isNew ? "-new" : "-old")}
            className="absolute"
            style={{ left: `${camera.position.x}%`, top: `${camera.position.y}%` }}
          >
            <div className={`camera-dot ${camera.isNew ? "new animate-pulse-green" : "old animate-pulse-orange"}`} />

            {showCoverage && (
              <div
                className={`coverage-area ${camera.isNew ? "new" : "old"} ${showAreas ? "show" : ""}`}
                style={{
                  width: `${camera.coverage * 2}px`,
                  height: `${camera.coverage * 2}px`,
                  left: `-${camera.coverage - 6}px`,
                  top: `-${camera.coverage - 6}px`,
                  opacity: showOverlap ? (camera.isNew ? 0.6 : 0.4) : 0.25, // Adjust opacity for overlap view
                  zIndex: camera.isNew ? 20 : 10, // Layer new cameras on top of old ones
                }}
              />
            )}
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 right-4 flex gap-3 bg-background/80 backdrop-blur-md p-3 rounded-md">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-camera-old"></div>
          <span className="text-xs">Existentes</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-camera-new"></div>
          <span className="text-xs">Nuevas</span>
        </div>
      </div>
    </Card>
  )
}

export default SecurityVisualizer
