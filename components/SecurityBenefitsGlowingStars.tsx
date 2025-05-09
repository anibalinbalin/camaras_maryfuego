"use client"

import { GlowingStarsBackgroundCard, GlowingStarsDescription, GlowingStarsTitle } from "@/components/ui/glowing-stars"
import { Camera, Shield, Zap, Lock, Smartphone } from "lucide-react"

export default function SecurityBenefitsGlowingStars() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      <GlowingStarsBackgroundCard>
        <div className="flex flex-col">
          <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
            <Camera className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          </div>
          <GlowingStarsTitle>Cámaras 4K Ultra HD</GlowingStarsTitle>
          <GlowingStarsDescription>
            Imágenes nítidas con resolución 4K y capacidades de visión nocturna para monitoreo 24/7.
          </GlowingStarsDescription>
        </div>
      </GlowingStarsBackgroundCard>

      <GlowingStarsBackgroundCard>
        <div className="flex flex-col">
          <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
            <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          </div>
          <GlowingStarsTitle>Detección AI Avanzada</GlowingStarsTitle>
          <GlowingStarsDescription>
            Algoritmos inteligentes que distinguen entre personas, vehículos y animales para reducir falsas alarmas.
          </GlowingStarsDescription>
        </div>
      </GlowingStarsBackgroundCard>

      <GlowingStarsBackgroundCard>
        <div className="flex flex-col">
          <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
            <Zap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          </div>
          <GlowingStarsTitle>Alertas Instantáneas</GlowingStarsTitle>
          <GlowingStarsDescription>
            Reciba notificaciones en tiempo real en sus dispositivos cuando se detecte actividad sospechosa.
          </GlowingStarsDescription>
        </div>
      </GlowingStarsBackgroundCard>

      <GlowingStarsBackgroundCard>
        <div className="flex flex-col">
          <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
            <Lock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          </div>
          <GlowingStarsTitle>Almacenamiento Seguro</GlowingStarsTitle>
          <GlowingStarsDescription>
            Todas las grabaciones se cifran y almacenan de forma segura con retención de 30 días y fácil acceso.
          </GlowingStarsDescription>
        </div>
      </GlowingStarsBackgroundCard>

      <GlowingStarsBackgroundCard>
        <div className="flex flex-col">
          <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
            <Smartphone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          </div>
          <GlowingStarsTitle>Integración Móvil</GlowingStarsTitle>
          <GlowingStarsDescription>
            Controle todo su sistema de seguridad desde cualquier lugar usando nuestra aplicación móvil intuitiva.
          </GlowingStarsDescription>
        </div>
      </GlowingStarsBackgroundCard>
    </div>
  )
}
