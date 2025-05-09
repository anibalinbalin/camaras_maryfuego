"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { House } from "@/lib/types"
import { ShieldCheck } from "lucide-react"
import Image from "next/image"

interface EstimateCardProps {
  house: House
}

const EstimateCard = ({ house }: EstimateCardProps) => {
  // Calculate the estimate based on the new equipment list
  const calculateEstimate = () => {
    // Equipment prices (estimated market prices in USD)
    const equipmentPrices = {
      "UCG-Ultra": 1999,
      "UniFi UNVR": 399,
      "HDD 6tb": 199,
      "UVC-AI-Turret": 399,
      "UVC-AI-Pro": 799,
      "UVC-G5-PTZ": 1899,
      "G5 PTZ Corner Mount": 79,
      "U-PoE++": 99,
      "UP-AI-Port": 149,
      "UACC-AI-Port-RM": 199,
    }

    // Equipment quantities
    const equipmentQuantities = {
      "UCG-Ultra": 1,
      "UniFi UNVR": 1,
      "HDD 6tb": 4,
      "USW Lite 16 PoE": 2, // Already owned
      "UVC-AI-Turret": 1,
      "UVC-AI-Pro": 2,
      "UVC-G5-PTZ": 8,
      "G5 PTZ Corner Mount": 7,
      "U-PoE++": 8,
      "UP-AI-Port": 8,
      "UACC-AI-Port-RM": 2,
    }

    // Calculate equipment costs
    let equipmentCost = 0
    for (const [item, quantity] of Object.entries(equipmentQuantities)) {
      // Skip items already owned
      if (item === "USW Lite 16 PoE") continue

      // @ts-ignore
      equipmentCost += equipmentPrices[item] * quantity
    }

    // Installation costs - base fee plus per-camera fee
    const totalCameras =
      equipmentQuantities["UVC-AI-Turret"] + equipmentQuantities["UVC-AI-Pro"] + equipmentQuantities["UVC-G5-PTZ"]
    const installationBaseFee = 1500
    const perCameraFee = 250
    const installationCost = installationBaseFee + perCameraFee * totalCameras

    // Network configuration fee
    const networkConfigFee = 750

    // Total cost
    const totalCost = equipmentCost + installationCost + networkConfigFee

    return {
      equipmentCost,
      installationCost,
      networkConfigFee,
      totalCost,
    }
  }

  const estimate = calculateEstimate()

  // Map of equipment names to their image paths
  const equipmentImages = {
    "UCG-Ultra": "/images/hardware/alpha/UCG-Ultra_alpha.png",
    "UniFi UNVR": "/images/hardware/alpha/UniFi UNVR_alpha.png",
    "UVC-AI-Turret": "/images/hardware/alpha/UVC-AI-Turret (Door)_alpha.png",
    "UVC-AI-Pro": "/images/hardware/alpha/UVC-AI-Pro_alpha.png",
    "UVC-G5-PTZ": "/images/hardware/alpha/UVC-G5-PTZ_alpha.png",
    "G5 PTZ Corner Mount": "/images/hardware/alpha/G5 PTZ Corner Mount_alpha.png",
    "U-PoE++": "/images/hardware/alpha/U-PoE++_alpha.png",
    "UP-AI-Port": "/images/hardware/alpha/UP-AI-Port_alpha.png",
    "UACC-AI-Port-RM": "/images/hardware/alpha/UACC-AI-Port-RM_alpha.png",
    "USW Lite 16 PoE": "/images/hardware/alpha/USW Lite 16 PoE_alpha.png",
  }

  return (
    <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-primary" />
          Presupuesto del Sistema de Seguridad
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Equipo:</span>
            <span className="font-medium">${estimate.equipmentCost.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Instalación:</span>
            <span className="font-medium">${estimate.installationCost.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Configuración de Red:</span>
            <span className="font-medium">${estimate.networkConfigFee.toLocaleString()}</span>
          </div>
          <div className="border-t border-primary/20 pt-2 mt-2 flex justify-between">
            <span className="font-semibold">Presupuesto Total:</span>
            <span className="font-bold">${estimate.totalCost.toLocaleString()}</span>
          </div>
        </div>
        <div className="text-xs text-muted-foreground italic">
          *Presupuesto válido por 30 días. El costo final puede variar según los requisitos de instalación.
        </div>
        <div className="mt-4 space-y-2">
          <h4 className="text-sm font-semibold">Lista de Equipos:</h4>
          <ul className="text-xs space-y-3">
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 relative shrink-0">
                  <Image
                    src={equipmentImages["UCG-Ultra"] || "/placeholder.svg"}
                    alt="UCG-Ultra"
                    fill
                    className="object-contain"
                  />
                </div>
                <span>1 × UCG-Ultra</span>
              </div>
              <span>$1,999</span>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 relative shrink-0">
                  <Image
                    src={equipmentImages["UniFi UNVR"] || "/placeholder.svg"}
                    alt="UniFi UNVR"
                    fill
                    className="object-contain"
                  />
                </div>
                <span>1 × UniFi UNVR</span>
              </div>
              <span>$399</span>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 relative shrink-0 flex items-center justify-center">
                  <span className="text-xs">HDD</span>
                </div>
                <span>4 × HDD 6TB</span>
              </div>
              <span>$796</span>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 relative shrink-0">
                  <Image
                    src={equipmentImages["USW Lite 16 PoE"] || "/placeholder.svg"}
                    alt="USW Lite 16 PoE"
                    fill
                    className="object-contain"
                  />
                </div>
                <span>2 × USW Lite 16 PoE</span>
              </div>
              <span className="text-xs text-muted-foreground mt-1">Ya en propiedad</span>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 relative shrink-0">
                  <Image
                    src={equipmentImages["UVC-AI-Turret"] || "/placeholder.svg"}
                    alt="UVC-AI-Turret"
                    fill
                    className="object-contain"
                  />
                </div>
                <span>1 × UVC-AI-Turret (Door)</span>
              </div>
              <span>$399</span>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 relative shrink-0">
                  <Image
                    src={equipmentImages["UVC-AI-Pro"] || "/placeholder.svg"}
                    alt="UVC-AI-Pro"
                    fill
                    className="object-contain"
                  />
                </div>
                <span>2 × UVC-AI-Pro (Street & Back Access)</span>
              </div>
              <span>$1,598</span>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 relative shrink-0">
                  <Image
                    src={equipmentImages["UVC-G5-PTZ"] || "/placeholder.svg"}
                    alt="UVC-G5-PTZ"
                    fill
                    className="object-contain"
                  />
                </div>
                <span>8 × UVC-G5-PTZ (Perimeter)</span>
              </div>
              <span>$15,192</span>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 relative shrink-0">
                  <Image
                    src={equipmentImages["G5 PTZ Corner Mount"] || "/placeholder.svg"}
                    alt="G5 PTZ Corner Mount"
                    fill
                    className="object-contain"
                  />
                </div>
                <span>7 × G5 PTZ Corner Mount</span>
              </div>
              <span>$553</span>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 relative shrink-0">
                  <Image
                    src={equipmentImages["U-PoE++"] || "/placeholder.svg"}
                    alt="U-PoE++"
                    fill
                    className="object-contain"
                  />
                </div>
                <span>8 × U-PoE++</span>
              </div>
              <span>$792</span>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 relative shrink-0">
                  <Image
                    src={equipmentImages["UP-AI-Port"] || "/placeholder.svg"}
                    alt="UP-AI-Port"
                    fill
                    className="object-contain"
                  />
                </div>
                <span>8 × UP-AI-Port</span>
              </div>
              <span>$1,192</span>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 relative shrink-0">
                  <Image
                    src={equipmentImages["UACC-AI-Port-RM"] || "/placeholder.svg"}
                    alt="UACC-AI-Port-RM"
                    fill
                    className="object-contain"
                  />
                </div>
                <span>2 × UACC-AI-Port-RM</span>
              </div>
              <span>$398</span>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

export default EstimateCard
