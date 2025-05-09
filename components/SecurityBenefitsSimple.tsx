"use client"

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { ShieldCheck, Eye, Maximize2, Cpu } from "lucide-react"
import Image from "next/image"

export default function SecurityBenefitsSimple() {
  // Feature item component for consistent styling
  const FeatureItem = ({ text }: { text: string }) => (
    <div className="flex items-start gap-2 mb-2">
      <div className="rounded-full bg-primary/10 p-1 mt-0.5 shrink-0">
        <ShieldCheck className="h-3 w-3 text-primary" />
      </div>
      <span className="text-sm text-muted-foreground">{text}</span>
    </div>
  )

  const benefits = [
    {
      title: "Advanced Coverage",
      icon: <Eye className="h-5 w-5 text-primary" />,
      image: "/images/hardware/alpha/UVC-G5-PTZ_alpha.png",
      imageAlt: "UVC-G5-PTZ Camera",
      description:
        "Strategic camera placement with wide field of view ensures complete surveillance with minimal blind spots.",
      features: [
        "Up to 134.1° diagonal field of view for maximum coverage",
        "350° pan and 100° tilt range on PTZ cameras for dynamic monitoring",
        "IP66/IP65 weatherproof rating ensures reliability in all conditions",
      ],
    },
    {
      title: "4K Resolution",
      icon: <Maximize2 className="h-5 w-5 text-primary" />,
      image: "/images/hardware/alpha/UVC-AI-Pro_alpha.png",
      imageAlt: "UVC-AI-Pro Camera",
      description:
        "Crystal clear footage with ultra-high definition cameras provides detailed evidence when you need it most.",
      features: [
        "8MP (4K) resolution at critical entry points for crystal clear footage",
        "Night vision up to 40m (131ft) for 24/7 monitoring capability",
        "Identify faces and license plates with exceptional clarity",
      ],
    },
    {
      title: "Smart Integration",
      icon: <Cpu className="h-5 w-5 text-primary" />,
      image: "/images/hardware/alpha/UCG-Ultra_alpha.png",
      imageAlt: "UCG-Ultra Gateway",
      description: "Seamlessly integrate with your existing smart home setup for comprehensive security management.",
      features: [
        "AI-powered detection minimizes false alarms for reliable alerts",
        "Mobile app provides remote monitoring from anywhere, anytime",
        "Centralized management of all security devices through one interface",
      ],
    },
  ]

  return (
    <div className="px-4 md:px-0">
      <BentoGrid className="max-w-6xl mx-auto">
        {benefits.map((benefit, index) => (
          <BentoGridItem
            key={index}
            className="md:col-span-1 md:row-span-1"
            header={
              <div className="relative h-52 overflow-hidden rounded-lg bg-gradient-to-br from-primary/5 to-primary/10">
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="relative w-full h-full max-h-40">
                    <Image
                      src={benefit.image || "/placeholder.svg"}
                      alt={benefit.imageAlt}
                      fill
                      className="object-contain transition-all duration-500 group-hover/bento:scale-110"
                    />
                  </div>
                </div>
              </div>
            }
            title={
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
              </div>
            }
            description={
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
                <div className="space-y-2 pt-2">
                  {benefit.features.map((feature, i) => (
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
