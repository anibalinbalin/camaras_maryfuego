"use client"

import { Eye, Maximize2, Cpu } from "lucide-react"
import { GlowingBentoGrid, GlowingBentoGridItem } from "@/components/ui/glowing-bento-grid"

export default function SecurityBenefitsGlowing() {
  const benefits = [
    {
      title: "Advanced Coverage",
      icon: <Eye className="h-4 w-4 text-black dark:text-neutral-400" />,
      image: "/images/hardware/alpha/UVC-G5-PTZ_alpha.png",
      imageAlt: "UVC-G5-PTZ Camera",
      description:
        "Strategic camera placement with wide field of view ensures complete surveillance with minimal blind spots.",
      features: [
        "Up to 134.1° diagonal field of view for maximum coverage",
        "350° pan and 100° tilt range on PTZ cameras for dynamic monitoring",
        "IP66/IP65 weatherproof rating ensures reliability in all conditions",
      ],
      area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    },
    {
      title: "4K Resolution",
      icon: <Maximize2 className="h-4 w-4 text-black dark:text-neutral-400" />,
      image: "/images/hardware/alpha/UVC-AI-Pro_alpha.png",
      imageAlt: "UVC-AI-Pro Camera",
      description:
        "Crystal clear footage with ultra-high definition cameras provides detailed evidence when you need it most.",
      features: [
        "8MP (4K) resolution at critical entry points for crystal clear footage",
        "Night vision up to 40m (131ft) for 24/7 monitoring capability",
        "Identify faces and license plates with exceptional clarity",
      ],
      area: "md:[grid-area:1/7/2/13] xl:[grid-area:1/5/2/9]",
    },
    {
      title: "Smart Integration",
      icon: <Cpu className="h-4 w-4 text-black dark:text-neutral-400" />,
      image: "/images/hardware/alpha/UCG-Ultra_alpha.png",
      imageAlt: "UCG-Ultra Gateway",
      description: "Seamlessly integrate with your existing smart home setup for comprehensive security management.",
      features: [
        "AI-powered detection minimizes false alarms for reliable alerts",
        "Mobile app provides remote monitoring from anywhere, anytime",
        "Centralized management of all security devices through one interface",
      ],
      area: "md:[grid-area:2/1/3/13] xl:[grid-area:1/9/2/13]",
    },
    {
      title: "Reliable Storage",
      icon: <Eye className="h-4 w-4 text-black dark:text-neutral-400" />,
      image: "/images/hardware/alpha/UniFi UNVR_alpha.png",
      imageAlt: "UniFi UNVR",
      description: "Secure, redundant storage ensures your footage is always available when you need it.",
      features: [
        "24TB raw storage with RAID redundancy",
        "Support for up to 18 4K cameras",
        "30+ days of continuous recording",
      ],
      area: "md:[grid-area:3/1/4/7] xl:[grid-area:2/1/3/7]",
    },
    {
      title: "AI-Powered Security",
      icon: <Cpu className="h-4 w-4 text-black dark:text-neutral-400" />,
      image: "/images/hardware/alpha/UP-AI-Port_alpha.png",
      imageAlt: "UP-AI-Port",
      description: "Advanced artificial intelligence features enhance your security with smart detection and alerts.",
      features: [
        "Face and license plate recognition",
        "Smart detection of people, vehicles, and animals",
        "Automatic person tracking with PTZ cameras",
      ],
      area: "md:[grid-area:3/7/4/13] xl:[grid-area:2/7/3/13]",
    },
  ]

  return (
    <div className="px-4 md:px-0">
      <GlowingBentoGrid className="max-w-6xl mx-auto">
        {benefits.map((benefit, index) => (
          <GlowingBentoGridItem
            key={index}
            area={benefit.area}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
            image={benefit.image}
            imageAlt={benefit.imageAlt}
            features={benefit.features}
          />
        ))}
      </GlowingBentoGrid>
    </div>
  )
}
