"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { useEffect, useState } from "react"
import { ReactNode } from "react"

type ThemeProviderProps = {
  children: ReactNode
  [key: string]: any
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false)

  // Add debugging to track theme initialization
  useEffect(() => {
    setMounted(true)
    
    // Check if localStorage is available (client-side)
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem(props.storageKey || "theme")
      console.log("ThemeProvider initialized, stored theme:", storedTheme)

      // Verify the theme class is applied to the document
      const isDark = document.documentElement.classList.contains("dark")
      console.log("Dark class applied to HTML:", isDark)
    }
  }, [props.storageKey])

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
