"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"

// Specialized theme toggle with glowing effect for the Professional Installation Steps section
export function GlowingThemeToggle({ compact = false }: { compact?: boolean }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch by only rendering after component is mounted
  useEffect(() => {
    setMounted(true)
  }, [])

  // Direct toggle function for the icon button
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
  }

  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-full opacity-70 flex items-center justify-center">
        <span className="sr-only">Loading theme</span>
      </div>
    )
  }

  return (
    <HoverBorderGradient
      onClick={toggleTheme}
      containerClassName="h-9 w-9 rounded-full"
      className={`flex items-center justify-center p-0 m-0 w-full h-full ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      duration={1.5}
    >
      {theme === "dark" ? (
        <Sun
          className="h-4 w-4 transition-transform duration-200 ease-in-out hover:rotate-45 text-white"
        />
      ) : (
        <Moon
          className="h-4 w-4 transition-transform duration-200 ease-in-out hover:scale-110 text-gray-800"
        />
      )}
      <span className="sr-only">{theme === "dark" ? "Light" : "Dark"} mode</span>
    </HoverBorderGradient>
  )
}
