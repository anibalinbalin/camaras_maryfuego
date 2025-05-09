"use client"

import { useState } from "react"
import { SecurityCameraInstallationSteps } from "@/components/SecurityCameraInstallationSteps"
import { SecurityCameraInstallationStepsNight } from "@/components/SecurityCameraInstallationStepsNight"
import { DayNightToggle } from "@/components/ui/day-night-toggle"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Wrench, Moon } from "lucide-react"

// Update the SecurityCameraInstallationToggle component to also accept and pass the houseId
export function SecurityCameraInstallationToggle({ houseId }: { houseId?: string }) {
  const [isNightMode, setIsNightMode] = useState(false)

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <Wrench className="h-5 w-5 text-primary" />
            {isNightMode ? (
              <div className="flex items-center gap-2">
                <Moon className="h-5 w-5 text-primary" />
                <span>Instalación con Visión Nocturna</span>
              </div>
            ) : (
              <span>Pasos de Instalación Profesional</span>
            )}
          </CardTitle>
          <DayNightToggle onToggle={setIsNightMode} defaultNight={isNightMode} />
        </div>
      </CardHeader>
      <CardContent>
        {isNightMode ? (
          <SecurityCameraInstallationStepsNight houseId={houseId} />
        ) : (
          <SecurityCameraInstallationSteps houseId={houseId} />
        )}
      </CardContent>
    </Card>
  )
}
