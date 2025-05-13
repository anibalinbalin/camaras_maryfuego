"use client"

import type React from "react"
import { Camera, Shield, Zap, Lock, Smartphone, Wifi, Server, Eye, BellRing, Network } from "lucide-react"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import Image from "next/image"

export default function SecurityBenefitsGlowingGrid() {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Equipos a instalar:</h3>
      <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-6 lg:gap-4 xl:max-h-[120rem] xl:grid-rows-4">
        {/* Original 5 cards */}
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={<Camera className="h-4 w-4 text-primary" />}
          title="UniFi G5 Bullet – AI-Enhanced 4K Surveillance"
          description="Graba en 4K, detección de movimiento por IA y visión nocturna infrarroja."
          imageSrc="/images/hardware/alpha/UVC-AI-Pro_alpha.png"
        />

        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:1/5/2/9]"
          icon={<Shield className="h-4 w-4 text-primary" />}
          title="UniFi Smart Sensor – Multi-Environment Monitoring"
          description="Para detectar de forma inalámbrica movimiento, cambios de temperatura, humedad, luz y eventos de apertura/cierre con un sensor que se integra con UniFi Protect."
          imageSrc="/images/hardware/alpha/UP-AI-Port_alpha.png"
        />

        <GridItem
          area="md:[grid-area:2/1/3/13] xl:[grid-area:1/9/2/13]"
          icon={<Zap className="h-4 w-4 text-primary" />}
          title="UniFi Cloud Key Gen2 Plus – Smart Video Hub"
          description="Para administrar todas las cámaras y sensores desde un solo gateway, con almacenamiento local, acceso remoto y notificaciones de eventos."
          imageSrc="/images/hardware/alpha/UCG-Ultra_alpha.png"
        />

        <GridItem
          area="md:[grid-area:3/1/4/7] xl:[grid-area:2/1/3/7]"
          icon={<Lock className="h-4 w-4 text-primary" />}
          title="UniFi NVR Pro – Enterprise-Scale Video Storage"
          description="Para almacenar, administrar y acceder a las grabaciones de las cámaras, con RAID e integración con UniFi Protect para administración remota."
          imageSrc="/images/hardware/alpha/UniFi UNVR_alpha.png"
        />

        <GridItem
          area="md:[grid-area:3/7/4/13] xl:[grid-area:2/7/3/13]"
          icon={<Smartphone className="h-4 w-4 text-primary" />}
          title="UniFi G5 PTZ – Precision Pan-Tilt-Zoom Surveillance"
          description="Para cubrir las zonas mas amplias como esquinas o zonas abiertas. La óptica es motorizada, también 4K, zoom de 22x y seguimiento por IA."
          imageSrc="/images/hardware/alpha/UVC-G5-PTZ_alpha.png"
        />

        {/* New cards */}
        <GridItem
          area="md:[grid-area:4/1/5/7] xl:[grid-area:3/1/4/5]"
          icon={<Eye className="h-4 w-4 text-primary" />}
          title="G5 PTZ – Full-Range Control, Elevated"
          description="Estas cámaras son panorámicas y con zoom de 22x óptico, seguimiento de objetos por IA."
          imageSrc="/images/hardware/alpha/G5 PTZ Corner Mount_alpha.png"
        />

        <GridItem
          area="md:[grid-area:4/7/5/13] xl:[grid-area:3/5/4/9]"
          icon={<BellRing className="h-4 w-4 text-primary" />}
          title="G5 Dome – Discreet, High-Definition Coverage"
          description="Con visión nocturna infrarroja. AI, en un domo resistente a manipulaciones."
          imageSrc="/images/hardware/alpha/UVC-AI-Turret (Door)_alpha.png"
        />

        <GridItem
          area="md:[grid-area:5/1/6/13] xl:[grid-area:3/9/4/13]"
          icon={<Network className="h-4 w-4 text-primary" />}
          title="UniFi PoE Injector – Simplified Power Delivery"
          description="Para darle tanto energía como datos a los equipos a través de un solo cable Ethernet."
          imageSrc="/images/hardware/alpha/U-PoE++_alpha.png"
        />

        <GridItem
          area="md:[grid-area:6/1/7/7] xl:[grid-area:4/1/5/7]"
          icon={<Server className="h-4 w-4 text-primary" />}
          title="UniFi Protect Rack – Modular Scalability in a 1U Form"
          description="Para centralizar todo el ecosistema UniFi Protect en el rack."
          imageSrc="/images/hardware/alpha/UACC-AI-Port-RM_alpha.png"
        />

        <GridItem
          area="md:[grid-area:6/7/7/13] xl:[grid-area:4/7/5/13]"
          icon={<Wifi className="h-4 w-4 text-primary" />}
          title="UniFi Switch Lite 16 PoE – Compact Power & Control"
          description="Para darle corriente y administrar los dispositivos UniFi e integración con UniFi Network."
          imageSrc="/images/hardware/alpha/USW Lite 16 PoE_alpha.png"
        />
      </ul>
    </div>
  )
}

interface GridItemProps {
  area: string
  icon: React.ReactNode
  title: string
  description: React.ReactNode
  imageSrc: string
}

const GridItem = ({ area, icon, title, description, imageSrc }: GridItemProps) => {
  return (
    <li className={`min-h-[28rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
        <div className="border-0.75 relative flex h-full flex-col overflow-hidden rounded-xl dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          {/* Image as a block element - much larger now */}
          <div className="relative w-full h-[200px] md:h-[300px] lg:h-[350px] overflow-hidden">
            <div className="relative w-full h-full">
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={title}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-card to-transparent"></div>
            </div>
          </div>

          {/* Content section */}
          <div className="p-6 flex-1 flex flex-col">
            <div className="w-fit rounded-lg border border-primary/20 bg-primary/10 p-2 mb-3">{icon}</div>

            <div className="space-y-3">
              <h3 className="font-sans text-lg/[1.25rem] font-semibold text-balance md:text-xl/[1.5rem]">{title}</h3>
              <p className="font-sans text-sm/[1.125rem] text-muted-foreground">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}
