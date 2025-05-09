"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface AutoplayVideoProps {
  src: string
  title?: string
  loop?: boolean
  muted?: boolean
  className?: string
}

const AutoplayVideo = ({
  src,
  title,
  loop = true,
  muted = true,
  className = "",
}: AutoplayVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("loadeddata", () => {
        setIsLoaded(true)
      })
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("loadeddata", () => {
          setIsLoaded(true)
        })
      }
    }
  }, [])

  return (
    <Card className={`overflow-hidden ${className}`}>
      <CardContent className="p-0">
        {title && (
          <div className="p-4 border-b bg-muted/50">
            <h3 className="font-medium">{title}</h3>
          </div>
        )}
        <div className={`relative ${!isLoaded ? "bg-muted animate-pulse" : ""}`}>
          <video 
            ref={videoRef}
            autoPlay
            playsInline
            loop={loop}
            muted={muted}
            className="w-full h-auto"
          >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </CardContent>
    </Card>
  )
}

export default AutoplayVideo 