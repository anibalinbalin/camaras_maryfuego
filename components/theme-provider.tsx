"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes/dist/types"
import { useEffect } from "react"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Add debugging to track theme initialization
  useEffect(() => {
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
