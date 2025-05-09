"use client"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Home, Building, Building2, Warehouse, Sun, Moon, Calculator } from "lucide-react"
import { ShieldCheck } from "lucide-react"
import { useTheme } from "next-themes"
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar"

export default function SecurityNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Determine if this is a house detail page
  const isHouseDetailPage = pathname?.startsWith('/house/')

  const navItems = [
    {
      name: "Casa Lote 03",
      link: "/house/house1",
      icon: <Building className="h-4 w-4" />,
    },
    {
      name: "Casa Lote 04",
      link: "/house/house2",
      icon: <Building2 className="h-4 w-4" />,
    },
    {
      name: "Casa Lote 06",
      link: "/house/house3",
      icon: <Warehouse className="h-4 w-4" />,
    },
    {
      name: "Inversión",
      link: "/inversion",
      icon: <Calculator className="h-4 w-4" />,
    },
  ]

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!mounted) return null

  return (
    <div className="w-full py-4">
      <Navbar behavior={isHouseDetailPage ? "scroll-away" : "fixed-shrink"}>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton
              as="button"
              variant="secondary"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <div className="flex items-center gap-2">
              <NavbarButton
                as="button"
                variant="secondary"
                onClick={toggleTheme}
                aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
                className="h-9 w-9 p-0 flex items-center justify-center"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </NavbarButton>
              <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
            </div>
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            <div className="w-full mb-2 pb-2 border-b border-border/40">
              <h3 className="text-xs font-medium uppercase text-muted-foreground mb-3">Casas</h3>
              <div className="flex flex-col w-full space-y-1">
                {navItems.slice(0, 3).map((item) => (
                  <a
                    key={item.link}
                    href={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="relative flex items-center gap-3 w-full py-2.5 px-3 rounded-lg text-foreground transition-colors hover:bg-foreground/5 active:bg-foreground/10"
                  >
                    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10">
                      {item.icon}
                    </div>
                    <span className="font-medium">{item.name}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="w-full">
              <h3 className="text-xs font-medium uppercase text-muted-foreground mb-3">Información</h3>
              <a
                key={navItems[3].link}
                href={navItems[3].link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative flex items-center gap-3 w-full py-2.5 px-3 rounded-lg text-foreground transition-colors hover:bg-foreground/5 active:bg-foreground/10"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10">
                  {navItems[3].icon}
                </div>
                <span className="font-medium">{navItems[3].name}</span>
              </a>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  )
}
