"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

// Add a prop to allow for smaller size when used inline
export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch by only rendering after component is mounted
  useEffect(() => {
    setMounted(true)
    console.log("ThemeToggle mounted, current theme:", theme)
  }, [theme])

  // Direct toggle function for the icon button
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    console.log(`Toggling theme from ${theme} to ${newTheme}`)
    setTheme(newTheme)
  }

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className={`${compact ? "h-7 w-7" : "h-9 w-9"} rounded-full opacity-70`}>
        <span className="sr-only">Loading theme</span>
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className={`${compact ? "h-7 w-7" : "h-9 w-9"} rounded-full`}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      {theme === "dark" ? (
        <Sun
          className={`${compact ? "h-4 w-4" : "h-5 w-5"} transition-transform duration-200 ease-in-out hover:rotate-45`}
        />
      ) : (
        <Moon
          className={`${compact ? "h-4 w-4" : "h-5 w-5"} transition-transform duration-200 ease-in-out hover:scale-110`}
        />
      )}
      <span className="sr-only">{theme === "dark" ? "Light" : "Dark"} mode</span>
    </Button>
  )
}
