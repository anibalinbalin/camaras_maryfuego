"use client"

import type React from "react"

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { ShieldCheck, Cpu, Eye, Maximize2, Cloud, Server, RotateCw, Plug, LayoutGrid, Play } from "lucide-react"
import Image from "next/image"
import { useState, useRef } from "react"
import { X } from "lucide-react"

export default function SecurityHardwareBento() {
  // Feature item component for consistent styling
  const FeatureItem = ({ text }: { text: string }) => (
    <div className="flex items-start gap-2 mb-2">
      <div className="rounded-full bg-primary/10 p-1 mt-0.5 shrink-0">
        <ShieldCheck className="h-3 w-3 text-primary" />
      </div>
      <span className="text-sm text-muted-foreground">{text}</span>
    </div>
  )

  // State for video modal
  const [videoOpen, setVideoOpen] = useState(false)
  const [activeVideo, setActiveVideo] = useState("")
  const videoRef = useRef<HTMLVideoElement>(null)

  // Update the hardwareItems array to use the alpha-themed images
  const hardwareItems = [
    {
      title: "UVC-G5-PTZ Camera",
      icon: <Eye className="h-5 w-5 text-primary" />,
      image: "/images/hardware/alpha/UVC-G5-PTZ_alpha.png",
      imageAlt: "UVC-G5-PTZ Camera",
      description: "Advanced PTZ camera with 2K resolution and 360° coverage",
      features: ["2K resolution for clear footage", "350° pan and 100° tilt range", "20m night vision capability"],
      className: "md:col-span-1",
    },
    {
      title: "UVC-AI-Pro Camera",
      icon: <Maximize2 className="h-5 w-5 text-primary" />,
      image: "/images/hardware/alpha/UVC-AI-Pro_alpha.png",
      imageAlt: "UVC-AI-Pro Camera",
      description: "4K AI-powered camera with advanced recognition features",
      features: [
        "8MP (4K) resolution for crystal clear footage",
        "Face and license plate recognition",
        "IP65 weatherproof for outdoor use",
      ],
      className: "md:col-span-1",
    },
    {
      title: "UVC-AI-Turret Camera",
      icon: <Eye className="h-5 w-5 text-primary" />,
      image: "/images/hardware/alpha/UVC-AI-Turret (Door)_alpha.png",
      imageAlt: "UVC-AI-Turret Camera",
      description: "Compact 4K turret camera with AI capabilities",
      features: [
        "8MP (4K) resolution for detailed monitoring",
        "134.1° diagonal field of view",
        "40m night vision range",
      ],
      className: "md:col-span-1",
    },
    {
      title: "UCG-Ultra Gateway",
      icon: <Cpu className="h-5 w-5 text-primary" />,
      image: "/images/hardware/alpha/UCG-Ultra_alpha.png",
      imageAlt: "UCG-Ultra Gateway",
      description: "Powerful gateway for managing your entire UniFi ecosystem",
      features: ["Manages 30+ UniFi devices", "1 Gbps IPS routing capability", "Multi-WAN load balancing"],
      className: "md:col-span-2",
      video:
        "https://cdn.ecomm.ui.com/products/8d2d9e4b-89f3-49a1-9c17-5d774c0067b4/72dcd78e-d695-4575-b251-4338d956a422.mp4",
    },
    {
      title: "UniFi UNVR",
      icon: <Server className="h-5 w-5 text-primary" />,
      image: "/images/hardware/alpha/UniFi UNVR_alpha.png",
      imageAlt: "UniFi UNVR",
      description: "Network video recorder with expandable storage",
      features: [
        "Supports up to 4 hard drives",
        "Records up to 18 4K cameras",
        "RAID configuration for data redundancy",
      ],
      className: "md:col-span-1",
    },
    {
      title: "G5 PTZ Corner Mount",
      icon: <RotateCw className="h-5 w-5 text-primary" />,
      image: "/images/hardware/alpha/G5 PTZ Corner Mount_alpha.png",
      imageAlt: "G5 PTZ Corner Mount",
      description: "Specialized mount for optimal PTZ camera positioning",
      features: [
        "Designed for corner installation",
        "Maximizes camera coverage area",
        "Durable weather-resistant construction",
      ],
      className: "md:col-span-1",
    },
    {
      title: "U-PoE++ Adapter",
      icon: <Plug className="h-5 w-5 text-primary" />,
      image: "/images/hardware/alpha/U-PoE++_alpha.png",
      imageAlt: "U-PoE++ Adapter",
      description: "High-power PoE adapter for demanding devices",
      features: ["60W power output", "Powers high-performance cameras", "Compatible with all UniFi devices"],
      className: "md:col-span-1",
    },
    {
      title: "USW Lite 16 PoE Switch",
      icon: <LayoutGrid className="h-5 w-5 text-primary" />,
      image: "/images/hardware/alpha/USW Lite 16 PoE_alpha.png",
      imageAlt: "USW Lite 16 PoE Switch",
      description: "16-port PoE switch for powering multiple devices",
      features: ["16 Gigabit Ethernet ports", "PoE+ on all ports", "Centralized management via UniFi controller"],
      className: "md:col-span-1",
    },
    {
      title: "UP-AI-Port",
      icon: <Cpu className="h-5 w-5 text-primary" />,
      image: "/images/hardware/alpha/UP-AI-Port_alpha.png",
      imageAlt: "UP-AI-Port",
      description: "AI processing module for enhanced camera capabilities",
      features: [
        "Adds AI features to any camera",
        "Face and license plate recognition",
        "Smart detection of people, vehicles, and animals",
      ],
      className: "md:col-span-1",
    },
    {
      title: "UACC-AI-Port-RM",
      icon: <Cloud className="h-5 w-5 text-primary" />,
      image: "/images/hardware/alpha/UACC-AI-Port-RM_alpha.png",
      imageAlt: "UACC-AI-Port-RM",
      description: "Rack mount for organizing multiple AI Ports",
      features: ["Supports up to 6 AI Ports per unit", 'Standard 19" rack mount design', "Efficient cable management"],
      className: "md:col-span-1",
    },
  ] as Array<{
    title: string
    icon: React.ReactNode
    image: string
    imageAlt: string
    description: string
    features: string[]
    className: string
    video?: string
  }>

  return (
    <div className="px-4 md:px-0">
      {/* Video Modal */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => {
            setVideoOpen(false)
            if (videoRef.current) {
              videoRef.current.pause()
            }
          }}
        >
          <div className="relative w-full max-w-4xl mx-auto" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-10 right-0 text-white hover:text-primary transition-colors"
              onClick={() => {
                setVideoOpen(false)
                if (videoRef.current) {
                  videoRef.current.pause()
                }
              }}
            >
              <X className="h-6 w-6" />
            </button>
            <video ref={videoRef} src={activeVideo} className="w-full rounded-lg shadow-2xl" controls autoPlay />
          </div>
        </div>
      )}

      <BentoGrid className="max-w-6xl mx-auto">
        {hardwareItems.map((item, index) => (
          <BentoGridItem
            key={index}
            className={item.className}
            header={
              <div
                className="relative h-48 overflow-hidden rounded-lg bg-gradient-to-br from-primary/5 to-primary/10"
                onClick={() => {
                  if (item.video) {
                    setActiveVideo(item.video)
                    setVideoOpen(true)
                  }
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="relative w-full h-full max-h-36">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.imageAlt}
                      fill
                      className="object-contain transition-all duration-500 group-hover/bento:scale-110"
                    />

                    {/* Play button overlay for items with video */}
                    {item.video && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/bento:opacity-100 transition-opacity duration-300">
                        <div className="bg-black/40 rounded-full p-3 backdrop-blur-sm">
                          <Play className="h-8 w-8 text-white fill-white" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Subtle play indicator for items with video */}
                {item.video && (
                  <div className="absolute bottom-2 right-2 bg-black/30 rounded-full p-1.5 backdrop-blur-sm">
                    <Play className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>
            }
            title={
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
            }
            description={
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">{item.description}</p>
                <div className="space-y-2 pt-2">
                  {item.features.map((feature, i) => (
                    <FeatureItem key={i} text={feature} />
                  ))}
                </div>
              </div>
            }
          />
        ))}
      </BentoGrid>
    </div>
  )
}
