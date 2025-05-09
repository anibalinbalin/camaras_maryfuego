"use client"

import { Cpu, Eye, Maximize2, Server, RotateCw, Plug, LayoutGrid } from "lucide-react"
import { GlowingBentoGrid, GlowingBentoGridItem } from "@/components/ui/glowing-bento-grid"

export default function SecurityHardwareGlowing() {
  const hardwareItems = [
    {
      title: "UVC-G5-PTZ Camera",
      icon: <Eye className="h-4 w-4 text-black dark:text-neutral-400" />,
      image: "/images/hardware/alpha/UVC-G5-PTZ_alpha.png",
      imageAlt: "UVC-G5-PTZ Camera",
      description: "Advanced PTZ camera with 2K resolution and 360° coverage",
      features: ["2K resolution for clear footage", "350° pan and 100° tilt range", "20m night vision capability"],
      area: "md:[grid-area:1/1/2/5]",
    },
    {
      title: "UVC-AI-Pro Camera",
      icon: <Maximize2 className="h-4 w-4 text-black dark:text-neutral-400" />,
      image: "/images/hardware/alpha/UVC-AI-Pro_alpha.png",
      imageAlt: "UVC-AI-Pro Camera",
      description: "4K AI-powered camera with advanced recognition features",
      features: [
        "8MP (4K) resolution for crystal clear footage",
        "Face and license plate recognition",
        "IP65 weatherproof for outdoor use",
      ],
      area: "md:[grid-area:1/5/2/9]",
    },
    {
      title: "UVC-AI-Turret Camera",
      icon: <Eye className="h-4 w-4 text-black dark:text-neutral-400" />,
      image: "/images/hardware/alpha/UVC-AI-Turret (Door)_alpha.png",
      imageAlt: "UVC-AI-Turret Camera",
      description: "Compact 4K turret camera with AI capabilities",
      features: [
        "8MP (4K) resolution for detailed monitoring",
        "134.1° diagonal field of view",
        "40m night vision range",
      ],
      area: "md:[grid-area:1/9/2/13]",
    },
    {
      title: "UCG-Ultra Gateway",
      icon: <Cpu className="h-4 w-4 text-black dark:text-neutral-400" />,
      image: "/images/hardware/alpha/UCG-Ultra_alpha.png",
      imageAlt: "UCG-Ultra Gateway",
      description: "Powerful gateway for managing your entire UniFi ecosystem",
      features: ["Manages 30+ UniFi devices", "1 Gbps IPS routing capability", "Multi-WAN load balancing"],
      area: "md:[grid-area:2/1/3/7]",
    },
    {
      title: "UniFi UNVR",
      icon: <Server className="h-4 w-4 text-black dark:text-neutral-400" />,
      image: "/images/hardware/alpha/UniFi UNVR_alpha.png",
      imageAlt: "UniFi UNVR",
      description: "Network video recorder with expandable storage",
      features: [
        "Supports up to 4 hard drives",
        "Records up to 18 4K cameras",
        "RAID configuration for data redundancy",
      ],
      area: "md:[grid-area:2/7/3/13]",
    },
    {
      title: "G5 PTZ Corner Mount",
      icon: <RotateCw className="h-4 w-4 text-black dark:text-neutral-400" />,
      image: "/images/hardware/alpha/G5 PTZ Corner Mount_alpha.png",
      imageAlt: "G5 PTZ Corner Mount",
      description: "Specialized mount for optimal PTZ camera positioning",
      features: [
        "Designed for corner installation",
        "Maximizes camera coverage area",
        "Durable weather-resistant construction",
      ],
      area: "md:[grid-area:3/1/4/4]",
    },
    {
      title: "U-PoE++ Adapter",
      icon: <Plug className="h-4 w-4 text-black dark:text-neutral-400" />,
      image: "/images/hardware/alpha/U-PoE++_alpha.png",
      imageAlt: "U-PoE++ Adapter",
      description: "High-power PoE adapter for demanding devices",
      features: ["60W power output", "Powers high-performance cameras", "Compatible with all UniFi devices"],
      area: "md:[grid-area:3/4/4/7]",
    },
    {
      title: "USW Lite 16 PoE Switch",
      icon: <LayoutGrid className="h-4 w-4 text-black dark:text-neutral-400" />,
      image: "/images/hardware/alpha/USW Lite 16 PoE_alpha.png",
      imageAlt: "USW Lite 16 PoE Switch",
      description: "16-port PoE switch for powering multiple devices",
      features: ["16 Gigabit Ethernet ports", "PoE+ on all ports", "Centralized management via UniFi controller"],
      area: "md:[grid-area:3/7/4/10]",
    },
    {
      title: "UP-AI-Port",
      icon: <Cpu className="h-4 w-4 text-black dark:text-neutral-400" />,
      image: "/images/hardware/alpha/UP-AI-Port_alpha.png",
      imageAlt: "UP-AI-Port",
      description: "AI processing module for enhanced camera capabilities",
      features: [
        "Adds AI features to any camera",
        "Face and license plate recognition",
        "Smart detection of people, vehicles, and animals",
      ],
      area: "md:[grid-area:3/10/4/13]",
    },
  ]

  return (
    <div className="px-4 md:px-0">
      <GlowingBentoGrid className="max-w-6xl mx-auto">
        {hardwareItems.map((item, index) => (
          <GlowingBentoGridItem
            key={index}
            area={item.area}
            icon={item.icon}
            title={item.title}
            description={item.description}
            image={item.image}
            imageAlt={item.imageAlt}
            features={item.features}
          />
        ))}
      </GlowingBentoGrid>
    </div>
  )
}
