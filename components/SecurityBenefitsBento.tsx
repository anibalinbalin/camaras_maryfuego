"use client"

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { ShieldCheck, Maximize2, Cpu, Eye, Zap, Cloud } from "lucide-react"
import Image from "next/image"

export default function SecurityBenefitsBento() {
  // Custom header component that displays hardware images
  const ImageHeader = ({ src, alt }: { src: string; alt: string }) => (
    <div className="flex flex-1 w-full h-40 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 overflow-hidden relative">
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={160}
          height={160}
          className="object-contain transition-all duration-500 group-hover/bento:scale-110"
        />
      </div>
    </div>
  )

  // Feature list component for consistent styling
  const FeatureList = ({ features }: { features: string[] }) => (
    <ul className="space-y-1.5 mt-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-2">
          <div className="rounded-full bg-primary/10 p-1 mt-0.5 shrink-0">
            <ShieldCheck className="h-3 w-3 text-primary" />
          </div>
          <span className="text-sm text-muted-foreground">{feature}</span>
        </li>
      ))}
    </ul>
  )

  const items = [
    {
      title: "Advanced Coverage",
      description: (
        <>
          <p className="text-sm text-muted-foreground">
            Strategic camera placement with wide field of view ensures complete surveillance with minimal blind spots.
          </p>
          <FeatureList
            features={[
              "Up to 134.1° diagonal field of view",
              "350° pan and 100° tilt range on PTZ cameras",
              "IP66/IP65 weatherproof for outdoor reliability",
            ]}
          />
        </>
      ),
      header: <ImageHeader src="/images/hardware/alpha/UVC-G5-PTZ_alpha.png" alt="PTZ Camera" />,
      icon: <Eye className="h-5 w-5 text-primary" />,
      className: "md:row-span-2", // Make this card taller
    },
    {
      title: "4K Resolution",
      description: (
        <>
          <p className="text-sm text-muted-foreground">
            Crystal clear footage with ultra-high definition cameras provides detailed evidence when you need it most.
          </p>
          <FeatureList
            features={[
              "8MP (4K) resolution at critical entry points",
              "Night vision up to 40m (131ft)",
              "Identify faces and license plates with clarity",
            ]}
          />
        </>
      ),
      header: <ImageHeader src="/images/hardware/alpha/UVC-AI-Pro_alpha.png" alt="AI Pro Camera" />,
      icon: <Maximize2 className="h-5 w-5 text-primary" />,
      className: "md:row-span-2", // Make this card taller
    },
    {
      title: "Smart Integration",
      description: (
        <>
          <p className="text-sm text-muted-foreground">
            Seamlessly integrate with your existing smart home setup for comprehensive security management.
          </p>
          <FeatureList
            features={[
              "AI-powered detection with minimal false alarms",
              "Mobile app for remote monitoring anytime",
              "Centralized management of all security devices",
            ]}
          />
        </>
      ),
      header: <ImageHeader src="/images/hardware/alpha/UCG-Ultra_alpha.png" alt="UCG Ultra" />,
      icon: <Cpu className="h-5 w-5 text-primary" />,
      className: "md:row-span-2", // Make this card taller
    },
    {
      title: "Reliable Storage",
      description: (
        <>
          <p className="text-sm text-muted-foreground">
            Secure, redundant storage ensures your footage is always available when you need it.
          </p>
          <FeatureList
            features={[
              "24TB raw storage with RAID redundancy",
              "Support for up to 18 4K cameras",
              "30+ days of continuous recording",
            ]}
          />
        </>
      ),
      header: <ImageHeader src="/images/hardware/alpha/UniFi UNVR_alpha.png" alt="UniFi UNVR" />,
      icon: <Cloud className="h-5 w-5 text-primary" />,
      className: "md:col-span-3 md:row-span-1", // Make this card wider but shorter
    },
    {
      title: "AI-Powered Security",
      description: (
        <>
          <p className="text-sm text-muted-foreground">
            Advanced artificial intelligence features enhance your security with smart detection and alerts.
          </p>
          <FeatureList
            features={[
              "Face and license plate recognition",
              "Smart detection of people, vehicles, and animals",
              "Automatic person tracking with PTZ cameras",
            ]}
          />
        </>
      ),
      header: <ImageHeader src="/images/hardware/alpha/UP-AI-Port_alpha.png" alt="UP AI Port" />,
      icon: <Cpu className="h-5 w-5 text-primary" />,
      className: "md:col-span-2 md:row-span-1", // Make this card wider but shorter
    },
    {
      title: "Robust Network",
      description: (
        <>
          <p className="text-sm text-muted-foreground">
            Reliable network infrastructure ensures your security system operates flawlessly 24/7.
          </p>
          <FeatureList
            features={[
              "Gigabit Ethernet with PoE+ for all cameras",
              "Centralized management of up to 30+ devices",
              "Scalable infrastructure for future expansion",
            ]}
          />
        </>
      ),
      header: <ImageHeader src="/images/hardware/alpha/USW Lite 16 PoE_alpha.png" alt="USW Lite 16 PoE" />,
      icon: <Zap className="h-5 w-5 text-primary" />,
      className: "md:col-span-1 md:row-span-1", // Standard size
    },
  ]

  return (
    <div className="px-4 md:px-0">
      <BentoGrid className="max-w-6xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={item.className}
          />
        ))}
      </BentoGrid>
    </div>
  )
}
