"use client"

import type { House as HouseType } from "@/lib/types"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ShieldCheck, HomeIcon as House, Cctv } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useTheme } from "next-themes"

interface HouseCardProps {
  house: HouseType
}

const HouseCard = ({ house }: HouseCardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const { theme } = useTheme()
  const isLight = theme === "light"

  return (
    <Card
      className="house-card w-full overflow-hidden mt-4 mb-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden flex justify-center pt-4">
        <div className="w-3/4 h-full relative">
          <img
            src={house.image || "/placeholder.svg"}
            alt={house.name}
            className={`w-full h-full object-cover transition-all ease-in-out duration-300 ${
              isHovered ? "filter-none" : "grayscale"
            }`}
          />
        </div>
      </div>

      <CardHeader className="pb-2">
        <h3 className="text-lg font-semibold">{house.name}</h3>
        {house.address && <div className="text-sm text-muted-foreground">{house.address}</div>}
      </CardHeader>

      <CardContent className="space-y-4 pb-2">
        <div className="flex items-start">
          <div>
            <div className="flex items-center gap-2">
              <Cctv className="h-5 w-5 text-camera-old" />
              <span className="text-sm">Cámaras Actuales: {house.currentCameras.length}</span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <Cctv className="h-5 w-5 text-camera-new" />
              <span className="text-sm">Cámaras Nuevas: {house.newCameras.length}</span>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pb-4">
        <Button 
          asChild 
          variant="secondary"
          className="w-full text-sm"
        >
          <Link href={`/house/${house.id}`}>Ver Plan de Seguridad</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default HouseCard
