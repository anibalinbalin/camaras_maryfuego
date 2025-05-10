"use client"
import { useState, useEffect } from "react"
import HouseCard from "@/components/HouseCard"
import { houses } from "@/lib/data"
import { Cctv } from "lucide-react"
import SpotlightNewDemo from "@/components/ui/spotlight-new-demo"
import { useTheme } from "next-themes"

const Index = () => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  // Add mounted state to prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Default to no theme-specific styles during SSR
  const isLight = mounted ? theme === "light" : false
  
  // Simple skeleton for SSR if needed
  if (!mounted) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="flex-1">
          <SpotlightNewDemo />
          <div id="security-plans" className="container px-4 md:px-6 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Will be filled in after hydration */}
            </div>
          </div>
        </div>
        <footer className="border-t py-6 md:py-0">
          {/* Footer content will appear after hydration */}
        </footer>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Background that adapts to theme */}
      <div className={`flex-1 ${isLight ? 'bg-white' : 'bg-black/[0.96]'} antialiased ${isLight ? 'bg-grid-gray/[0.05]' : 'bg-grid-white/[0.02]'}`}>
        {/* Spotlight section with integrated navbar */}
        <SpotlightNewDemo />
        
        {/* Houses grid */}
        <div id="security-plans" className="container px-4 md:px-6 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {houses.map((house) => (
              <HouseCard key={house.id} house={house} />
            ))}
          </div>
        </div>
      </div>

      <footer className={`border-t py-6 md:py-0 ${isLight ? 'bg-gray-50' : 'bg-black'}`}>
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4 md:h-16">
          <p className="text-sm text-muted-foreground font-sans">
            © 2025 Estela.
          </p>
          <div className="flex items-center gap-1">
            <Cctv className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs text-muted-foreground font-sans">Mar y Fuego.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
