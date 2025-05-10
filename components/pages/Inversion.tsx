"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ShieldCheck, DollarSign } from "lucide-react"
import { ExpandableEquipmentCard } from "@/components/ui/expandable-equipment-card"
import { securityEquipmentData, totalInvestment } from "@/components/SecurityEquipmentData"
import SecurityNavbar from "@/components/SecurityNavbar"

export default function Inversion() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative z-50">
        <SecurityNavbar />
      </div>
      
      <div className="container px-4 py-8 mx-auto">
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-2xl font-bold">Presupuesto</h2>
          <p className="text-muted-foreground">
            Equipos a instalar.
          </p>

          <div className="grid grid-cols-1 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">
                  Lista de equipos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ExpandableEquipmentCard items={securityEquipmentData} />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  Inversión total
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold text-primary">
                  {totalInvestment.note}
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Incluye los equipos, mano de obra, y honorarios.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 