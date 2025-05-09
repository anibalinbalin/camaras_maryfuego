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
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </NavbarButton>
              <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
            </div>
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.map((item) => (
              <a
                key={item.link}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative flex items-center gap-2 w-full py-3 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                {item.icon}
                <span className="block">{item.name}</span>
              </a>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  )
}
