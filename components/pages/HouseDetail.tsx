"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { houses } from "@/lib/data"
import type { House } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ShieldCheck, Camera, Zap, Lock, Bell, Wrench, Cpu, FileText } from "lucide-react"
import SecurityVisualizer from "@/components/SecurityVisualizer"
import ChapterNavigation from "@/components/ChapterNavigation"
import CameraTable from "@/components/CameraTable"
import Link from "next/link"
import { DotPlacementComponent as CasaLote03Bad } from "@/components/floorplans/Lote03/CasaArmandoBad"
import { DotPlacementComponent as CasaLote03Good } from "@/components/floorplans/Lote03/CasaArmandoGood"
import { DotPlacementComponent as CasaLote04Bad } from "@/components/floorplans/Lote04/CasaMedioBad"
import { DotPlacementComponent as CasaLote04Good } from "@/components/floorplans/Lote04/CasaMedioGood"
import { DotPlacementComponent as CasaLote06Bad } from "@/components/floorplans/Lote06/CasaNidoBad"
import { DotPlacementComponent as CasaLote06Good } from "@/components/floorplans/Lote06/CasaNidoGood"
import { ExpandableEquipmentCard } from "@/components/ui/expandable-equipment-card"
import { securityEquipmentData } from "@/components/SecurityEquipmentData"
import SecurityMapComparison from "@/components/SecurityMapComparison"
import SecurityMapComparisonMedio from "@/components/SecurityMapComparisonMedio"
import SecurityBenefitsGlowingGrid from "@/components/SecurityBenefitsGlowingGrid"
import { SecurityCameraInstallationSteps } from "@/components/SecurityCameraInstallationSteps"
import { GlowingThemeToggle } from "@/components/GlowingThemeToggle"
import { ChapterProvider, useChapter } from "@/lib/ChapterContext"
import SecurityMapComparisonNido from "@/components/SecurityMapComparisonNido"
import { Badge } from "@/components/ui/badge"
import SecurityNavbar from "@/components/SecurityNavbar"
import SecurityVideoChapter from "@/components/SecurityVideoChapter"

// Create a wrapper component that uses the context
const HouseDetailContent = ({ id }: { id: string }) => {
  const router = useRouter()
  const [house, setHouse] = useState<House | undefined>(undefined)
  const [chapter, setChapter] = useState(1)
  const [showCoverage, setShowCoverage] = useState(false)
  const { setCurrentChapter } = useChapter()

  const totalChapters = 7 // Reduced from 8 to 7 as we removed the budget chapter

  useEffect(() => {
    const foundHouse = houses.find((h) => h.id === id)
    if (!foundHouse) {
      router.push("/")
      return
    }
    setHouse(foundHouse)
  }, [id, router])

  useEffect(() => {
    // Reset coverage display when chapter changes
    setShowCoverage(false)

    // Update the context with the current chapter
    setCurrentChapter(chapter)

    // For chapter 3, 4, 5, 6, and 7, show coverage after a delay
    if (chapter === 3 || chapter === 4 || chapter === 5 || chapter === 6 || chapter === 7) {
      const timer = setTimeout(() => {
        setShowCoverage(true)
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [chapter, setCurrentChapter])

  const handlePrevious = () => {
    if (chapter === 1) {
      router.push("/") // Navigate to home page if on chapter 1
    } else if (chapter > 1) {
      setChapter(chapter - 1)
    }
  }

  const handleNext = () => {
    if (chapter < totalChapters) {
      setChapter(chapter + 1)
    }
  }

  if (!house) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">Loading...</div>
      </div>
    )
  }

  const renderChapterContent = () => {
    switch (chapter) {
      case 1:
        return (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-bold">Estado actual de seguridad</h2>
            <p className="text-muted-foreground">
              Este es un resumen del sistema de seguridad actual en {house.name}. La casa tiene actualmente{" "}
              {house.currentCameras.length} cámara{house.currentCameras.length !== 1 ? "s" : ""} instalada
              {house.currentCameras.length !== 1 ? "s" : ""}.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                {house.id === "house1" ? (
                  <Card className="overflow-hidden flex justify-center items-center p-4">
                    <CasaLote03Bad className="w-full sm:w-3/4 md:w-[60%] mx-auto" />
                  </Card>
                ) : house.id === "house2" ? (
                  <Card className="overflow-hidden flex justify-center items-center p-4">
                    <CasaLote04Bad className="w-full sm:w-3/4 md:w-[60%] mx-auto" />
                  </Card>
                ) : house.id === "house3" ? (
                  <Card className="overflow-hidden flex justify-center items-center p-4">
                    <CasaLote06Bad className="w-full sm:w-3/4 md:w-[60%] mx-auto" />
                  </Card>
                ) : (
                  <SecurityVisualizer
                    floorPlan={house.floorPlan}
                    cameras={house.currentCameras}
                    showCoverage={showCoverage}
                  />
                )}
              </div>
              <div>
                <CameraTable cameras={house.currentCameras} title="Cámaras instaladas actualmente" />
              </div>
            </div>
          </div>
        )
      case 2:
        return (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-bold">Propuesta de instalación</h2>
            <p className="text-muted-foreground">
              Nuestra mejora de seguridad recomendada para {house.name} incluye un total de {house.newCameras.length}{" "}
              cámaras, con {house.newCameras.length - house.currentCameras.length} nuevas ubicaciones de cámaras para
              cubrir integralmente toda la zona.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                {house.id === "house1" ? (
                  <Card className="overflow-hidden flex justify-center items-center p-4">
                    <CasaLote03Good className="w-full sm:w-3/4 md:w-[60%] mx-auto" />
                  </Card>
                ) : house.id === "house2" ? (
                  <Card className="overflow-hidden flex justify-center items-center p-4">
                    <CasaLote04Good className="w-full sm:w-3/4 md:w-[60%] mx-auto" />
                  </Card>
                ) : house.id === "house3" ? (
                  <Card className="overflow-hidden flex justify-center items-center p-4">
                    <CasaLote06Good className="w-full sm:w-3/4 md:w-[60%] mx-auto" />
                  </Card>
                ) : (
                  <SecurityVisualizer
                    floorPlan={house.floorPlan}
                    cameras={house.newCameras}
                    showCoverage={showCoverage}
                  />
                )}
              </div>
              <div>
                <CameraTable cameras={house.newCameras} title="Propuesta" />
              </div>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-bold">Comparación de cobertura</h2>
            <p className="text-muted-foreground">
              Comparación actual en contraste con la propuesta. Se eliminan todos los puntos ciegos.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-0">
                  <div className="p-4 border-b bg-muted/50">
                    <h3 className="font-medium">Cobertura actual</h3>
                  </div>
                  <div className="p-4 flex justify-center">
                    {house.id === "house1" ? (
                      <img 
                        src="/images/houses/armando/coverage_comparison/house1_bad.png" 
                        alt="Cobertura actual" 
                        className="w-full sm:w-3/4 md:w-[60%] mx-auto"
                      />
                    ) : house.id === "house2" ? (
                      <img 
                        src="/images/houses/medio/coverage_comparision/house2_bad.png" 
                        alt="Cobertura actual" 
                        className="w-full sm:w-3/4 md:w-[60%] mx-auto"
                      />
                    ) : house.id === "house3" ? (
                      <img 
                        src="/images/houses/nido/coverage_comparision/house3_bad.png" 
                        alt="Cobertura actual" 
                        className="w-full sm:w-3/4 md:w-[60%] mx-auto"
                      />
                    ) : (
                      <SecurityVisualizer
                        floorPlan={house.floorPlan}
                        cameras={house.currentCameras}
                        showCoverage={showCoverage}
                      />
                    )}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-0">
                  <div className="p-4 border-b bg-muted/50">
                    <h3 className="font-medium">Cobertura propuesta</h3>
                  </div>
                  <div className="p-4 flex justify-center">
                    {house.id === "house1" ? (
                      <img 
                        src="/images/houses/armando/coverage_comparison/house1_good.png" 
                        alt="Cobertura propuesta" 
                        className="w-full sm:w-3/4 md:w-[60%] mx-auto"
                      />
                    ) : house.id === "house2" ? (
                      <img 
                        src="/images/houses/medio/coverage_comparision/house2_good.png" 
                        alt="Cobertura propuesta" 
                        className="w-full sm:w-3/4 md:w-[60%] mx-auto"
                      />
                    ) : house.id === "house3" ? (
                      <img 
                        src="/images/houses/nido/coverage_comparision/house3_good.png" 
                        alt="Cobertura propuesta" 
                        className="w-full sm:w-3/4 md:w-[60%] mx-auto"
                      />
                    ) : (
                      <SecurityVisualizer
                        floorPlan={house.floorPlan}
                        cameras={house.newCameras}
                        showCoverage={showCoverage}
                      />
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )
      case 4:
        return (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-bold">Comparaciones</h2>
            <p className="text-muted-foreground">
              Comparación de cobertura actual y propuesta.
            </p>
            {house.id === "house1" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <SecurityMapComparison title="" />
                </div>
                <div>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-4">Mejoras:</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                            <Camera className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-sm">Se mejora la cobertura en un 138%.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                            <Zap className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-sm">Eliminados 5 puntos ciegos principales.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                            <Lock className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-sm">Todo el  perimetro con cobertura.°</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                            <Bell className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-sm">Detección de movimiento con AI a todos los puntos de entrada.</span>
                        </li>
                      </ul>

                      <div className="mt-6 pt-6 border-t">
                        <h4 className="font-medium mb-3">Estrategia de ubicación de cámaras</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          La ubicación de las cámaras se pensó para la máxima cobertura con un mínimo de hardware.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex flex-col items-center p-3 bg-muted/30 rounded-lg">
                            <span className="font-medium">Antes</span>
                            <span className="text-2xl font-bold text-red-500 mt-1">42%</span>
                            <span className="text-xs text-muted-foreground">Cobertura</span>
                          </div>
                          <div className="flex flex-col items-center p-3 bg-muted/30 rounded-lg">
                            <span className="font-medium">Después</span>
                            <span className="text-2xl font-bold text-green-500 mt-1">100%</span>
                            <span className="text-xs text-muted-foreground">Cobertura</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ) : house.id === "house2" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <SecurityMapComparisonMedio title="Interactive Coverage Comparison" />
                </div>
                <div>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-4">Mejoras de Cobertura</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                            <Camera className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-sm">Área de cobertura aumentada en un 31%</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                            <Zap className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-sm">Eliminados 4 puntos ciegos principales</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                            <Lock className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-sm">Seguridad perimetral mejorada con cobertura de 360°</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                            <Bell className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-sm">Detección de movimiento añadida a todos los puntos de entrada</span>
                        </li>
                      </ul>

                      <div className="mt-6 pt-6 border-t">
                        <h4 className="font-medium mb-3">Estrategia de Ubicación de Cámaras</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          Nuestra ubicación estratégica de cámaras garantiza la máxima cobertura con un mínimo de
                          hardware. El nuevo sistema proporciona:
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex flex-col items-center p-3 bg-muted/30 rounded-lg">
                            <span className="font-medium">Antes</span>
                            <span className="text-2xl font-bold text-red-500 mt-1">76%</span>
                            <span className="text-xs text-muted-foreground">Cobertura</span>
                          </div>
                          <div className="flex flex-col items-center p-3 bg-muted/30 rounded-lg">
                            <span className="font-medium">Después</span>
                            <span className="text-2xl font-bold text-green-500 mt-1">100%</span>
                            <span className="text-xs text-muted-foreground">Cobertura</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ) : house.id === "house3" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <SecurityMapComparisonNido title="Comparación de coberturas" />
                </div>
                <div>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-4">Mejoras de Cobertura</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                            <Camera className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-sm">Área de cobertura aumentada en un 58%</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                            <Zap className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-sm">Eliminados 7 puntos ciegos principales</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                            <Lock className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-sm">Seguridad perimetral mejorada con cobertura de 360°</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                            <Bell className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-sm">Detección de movimiento añadida a todos los puntos de entrada</span>
                        </li>
                      </ul>

                      <div className="mt-6 pt-6 border-t">
                        <h4 className="font-medium mb-3">Estrategia de Ubicación de Cámaras</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          Nuestra ubicación estratégica de cámaras garantiza la máxima cobertura con un mínimo de
                          hardware. El nuevo sistema proporciona:
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex flex-col items-center p-3 bg-muted/30 rounded-lg">
                            <span className="font-medium">Antes</span>
                            <span className="text-2xl font-bold text-red-500 mt-1">63%</span>
                            <span className="text-xs text-muted-foreground">Cobertura</span>
                          </div>
                          <div className="flex flex-col items-center p-3 bg-muted/30 rounded-lg">
                            <span className="font-medium">Después</span>
                            <span className="text-2xl font-bold text-green-500 mt-1">100%</span>
                            <span className="text-xs text-muted-foreground">Cobertura</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="p-4 border-b bg-muted/50">
                      <h3 className="font-medium flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4 text-primary" />
                        Coverage Comparison
                      </h3>
                    </div>
                    <div className="p-4">
                      <div className="relative">
                        <SecurityVisualizer
                          floorPlan={house.floorPlan}
                          cameras={[
                            ...house.currentCameras,
                            ...house.newCameras.filter(
                              (newCam) => !house.currentCameras.some((currentCam) => currentCam.id === newCam.id),
                            ),
                          ]}
                          showCoverage={true}
                          showOverlap={true}
                        />
                        <div className="mt-4 flex justify-center gap-6">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-camera-old" />
                            <span className="text-xs">Current Coverage</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-camera-new" />
                            <span className="text-xs">Proposed Coverage</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-4">Coverage Improvements</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                            <Camera className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-sm">Increased coverage area by 75%</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                            <Zap className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-sm">Eliminated 4 major blind spots</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                            <Lock className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-sm">Enhanced perimeter security with 360° coverage</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/10 p-1.5 mt-0.5">
                            <Bell className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-sm">Added motion detection to all entry points</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </div>
        )
      case 5:
        return (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-bold">Beneficios del sistema</h2>
            <p className="text-muted-foreground">
            El equipamiento es integramente Ubiquiti. Con esto disponemos de una mayor fidelidad y longevidad de los equipos. No sólo las cámaras sino el sistema de grabación, emisión del wifi, switches, routers, y almacenmiento.
            Así mismo, se aprovecha todo lo ya instalado que reune estas condiciones.   
            </p>

            <Card className="mb-8">

              <CardContent>

                <SecurityBenefitsGlowingGrid />
              </CardContent>
            </Card>


          </div>
        )
      case 6:
        return (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-bold">Proceso de Instalación</h2>
            <p className="text-muted-foreground">
              La instalación, configuración y puesta a punto se estima en el correr de 72 horas.
            </p>

            <Card className="overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex justify-end">
                  <GlowingThemeToggle />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <SecurityCameraInstallationSteps houseId={house.id} />
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Notas:
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1.5 mt-0.5">
                        <FileText className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Propuesta: Integral</h4>
                        <p className="text-sm text-muted-foreground">
                          La propuesta consiste en no solo remplazar el sistema actual sino en modificar desde la misma base como la seguridad de cada casa se desarrolla.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1.5 mt-0.5">
                        <Wrench className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Reutilización de Recursos</h4>
                        <p className="text-sm text-muted-foreground">
                          Se reutilizara gran parte del cableado estructurado. En algunas zonas se cableará para abastecer de datos la nueva cámara instalada.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1.5 mt-0.5">
                        <Cpu className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Cámaras con IA</h4>
                        <p className="text-sm text-muted-foreground">
                          Todas las camaras son AI con deteccion de matriculas, rostros, eventos.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1.5 mt-0.5">
                        <Wrench className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Organización de Cableado</h4>
                        <p className="text-sm text-muted-foreground">
                          Todo el cableado culmina en un rack, debidamente distinguido, cada cable identificado.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1.5 mt-0.5">
                        <Zap className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Universalización</h4>
                        <p className="text-sm text-muted-foreground">
                          Las tres casas contemplan la universalizacion de los equipos, esto es: las tres casas siempre estan con las últimas revisiones de software.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1.5 mt-0.5">
                        <ShieldCheck className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Redundancia</h4>
                        <p className="text-sm text-muted-foreground">
                          El proyecto de las casas contempla la redundancia: hay cámaras instaladas en el piso de arriba cuyo objetivo es complementar los datos de las cámaras de los pisos de abajo.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1.5 mt-0.5">
                        <Bell className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Respaldo de Energía</h4>
                        <p className="text-sm text-muted-foreground">
                          Todo el sistema de grabación cuenta con una UPS. Si hubiera un corte de energia las cámaras seguirán grabando.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1.5 mt-0.5">
                        <Camera className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Ubicación Estratégica</h4>
                        <p className="text-sm text-muted-foreground">
                          Las cámaras seleccionas son especificamente elegidas para los puntos estrategicos.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1.5 mt-0.5">
                        <Camera className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Posicionamiento Diagonal</h4>
                        <p className="text-sm text-muted-foreground">
                          En las tres casas se instalan camaras en el piso de arriba de forma que esten en diagnoal.
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Wrench className="h-5 w-5 text-primary" />
                    Cronograma de Instalación
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
                      <div>
                        <h4 className="font-medium">Cableado e instalacion en el rack</h4>
                        <p className="text-sm text-muted-foreground">Se cableará lo que haga falta y se instalarán los equipos en el rack.</p>
                      </div>
                      <Badge variant="outline" className="text-sm font-medium mt-1 sm:mt-0 self-start sm:self-center">Día 1</Badge>
                    </div>
                    <div className="w-full h-1 bg-muted rounded-full">
                      <div className="h-1 bg-primary rounded-full" style={{ width: "20%" }} />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
                      <div>
                        <h4 className="font-medium">Instalación de cámaras</h4>
                        <p className="text-sm text-muted-foreground">Configuración de las mismas.</p>
                      </div>
                      <Badge variant="outline" className="text-sm font-medium mt-1 sm:mt-0 self-start sm:self-center">Día 2</Badge>
                    </div>
                    <div className="w-full h-1 bg-muted rounded-full">
                      <div className="h-1 bg-primary rounded-full" style={{ width: "40%" }} />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
                      <div>
                        <h4 className="font-medium">Configuración de cámaras</h4>
                        <p className="text-sm text-muted-foreground">Puesta a punto.</p>
                      </div>
                      <Badge variant="outline" className="text-sm font-medium mt-1 sm:mt-0 self-start sm:self-center">Días 3-4</Badge>
                    </div>
                    <div className="w-full h-1 bg-muted rounded-full">
                      <div className="h-1 bg-primary rounded-full" style={{ width: "70%" }} />
                    </div>

                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )
      case 7:
        return <SecurityVideoChapter />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Add SecurityNavbar at the top */}
      <div className="relative z-50">
        <SecurityNavbar />
      </div>
      
      <div className="container px-4 py-8 mx-auto">
        <div className="mt-4">{renderChapterContent()}</div>

        <div className="mt-12">
          <ChapterNavigation
            currentChapter={chapter}
            totalChapters={totalChapters}
            onPrevious={handlePrevious}
            onNext={handleNext}
          />
        </div>
      </div>
    </div>
  )
}

// Main component that wraps the content with the context provider
const HouseDetail = ({ id }: { id: string }) => {
  return (
    <ChapterProvider>
      <HouseDetailContent id={id} />
    </ChapterProvider>
  )
}

export default HouseDetail
