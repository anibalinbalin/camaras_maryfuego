import type { ReactNode } from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { Toaster as SonnerToaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { ThemeProvider } from "@/components/theme-provider"

// Configuración correcta de las fuentes Geist
const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans", // Nombre único para evitar conflictos
  weight: ["400", "500", "600", "700"], // Especificar los pesos necesarios
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono", // Nombre único para evitar conflictos
  weight: ["400", "500", "600", "700"], // Especificar los pesos necesarios
})

export const metadata: Metadata = {
  title: "Visualizador de Seguridad Ubiquiti",
  description: "Visualiza tu sistema de seguridad para el hogar",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
          storageKey="unifi-theme-preference"
        >
          <TooltipProvider>
            <div>
              <Toaster />
              <SonnerToaster />
              {children}
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
