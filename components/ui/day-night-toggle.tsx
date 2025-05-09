"use client"

import { useState } from "react"
import { Sun, Moon } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface DayNightToggleProps {
  onToggle: (isNight: boolean) => void
  defaultNight?: boolean
  className?: string
}

export function DayNightToggle({ onToggle, defaultNight = false, className }: DayNightToggleProps) {
  const [isNight, setIsNight] = useState(defaultNight)

  const handleToggle = () => {
    const newValue = !isNight
    setIsNight(newValue)
    onToggle(newValue)
  }

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className="text-sm font-medium">Día</span>
      <button
        onClick={handleToggle}
        className={cn("relative h-6 w-12 rounded-full transition-colors", isNight ? "bg-indigo-900" : "bg-blue-400")}
        aria-label={isNight ? "Cambiar a vista diurna" : "Cambiar a vista nocturna"}
      >
        <motion.div
          className="absolute top-0.5 left-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-white"
          animate={{ x: isNight ? 24 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          {isNight ? <Moon className="h-3 w-3 text-indigo-900" /> : <Sun className="h-3 w-3 text-amber-500" />}
        </motion.div>
      </button>
      <span className="text-sm font-medium">Noche</span>
    </div>
  )
}
