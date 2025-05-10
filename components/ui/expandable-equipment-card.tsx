"use client"

import type React from "react"
import { useEffect, useId, useState } from "react" // Removed useRef
import { AnimatePresence, motion } from "framer-motion"
// Removed useOutsideClick import
import { X, ShieldCheck, Cpu, Eye, Maximize2, Cloud, Server, RotateCw, Plug, LayoutGrid, Home } from "lucide-react"
import Image from "next/image"

export type EquipmentItem = {
  id: string
  title: string
  description: string
  price: number
  quantity: number
  src: string
  ctaText: string
  ctaLink?: string
  content: React.ReactNode | (() => React.ReactNode)
  house?: 'lote03' | 'lote04' | 'lote06' | 'all' // Optional property to specify which house the item belongs to
}

interface ExpandableEquipmentCardProps {
  items: EquipmentItem[]
}

export function ExpandableEquipmentCard({ items }: ExpandableEquipmentCardProps) {
  const [active, setActive] = useState<EquipmentItem | boolean | null>(null)
  // Removed ref
  const id = useId()
  const [filter, setFilter] = useState<string | null>(null)

  // Get the appropriate icon for each item
  const getItemIcon = (itemId: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      "ucg-ultra": <Cpu className="h-5 w-5 text-primary" />,
      "unifi-unvr": <Server className="h-5 w-5 text-primary" />,
      "hdd-6tb": <Server className="h-5 w-5 text-primary" />,
      "uvc-ai-turret": <Eye className="h-5 w-5 text-primary" />,
      "uvc-ai-pro": <Maximize2 className="h-5 w-5 text-primary" />,
      "uvc-g5-ptz": <Eye className="h-5 w-5 text-primary" />,
      "g5-ptz-corner-mount": <RotateCw className="h-5 w-5 text-primary" />,
      "u-poe-plus-plus": <Plug className="h-5 w-5 text-primary" />,
      "up-ai-port": <Cpu className="h-5 w-5 text-primary" />,
      "uacc-ai-port-rm": <Cloud className="h-5 w-5 text-primary" />,
      "usw-lite-16-poe": <LayoutGrid className="h-5 w-5 text-primary" />,
    }

    return iconMap[itemId] || <ShieldCheck className="h-5 w-5 text-primary" />
  }

  // Feature item component for consistent styling (same as in SecurityHardwareBento)
  const FeatureItem = ({ text }: { text: string }) => (
    <div className="flex items-start gap-2 mb-2">
      <div className="rounded-full bg-primary/10 p-1 mt-0.5 shrink-0">
        <ShieldCheck className="h-3 w-3 text-primary" />
      </div>
      <span className="text-sm text-muted-foreground">{text}</span>
    </div>
  )

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false)
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [active])

  const filteredItems = filter ? items.filter(item => !item.house || item.house === filter || item.house === 'all') : items

  return (
    <>
      {/* House filters */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <button
          type="button"
          onClick={() => setFilter(null)}
          onKeyDown={(e) => e.key === 'Enter' && setFilter(null)}
          className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1 sm:gap-1.5 transition-colors ${
            filter === null ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-primary/10'
          }`}
        >
          <Home className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          Todas las casas
        </button>
        <button
          type="button"
          onClick={() => setFilter('lote03')}
          onKeyDown={(e) => e.key === 'Enter' && setFilter('lote03')}
          className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${
            filter === 'lote03' ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-primary/10'
          }`}
        >
          Casa Lote 03
        </button>
        <button
          type="button"
          onClick={() => setFilter('lote04')}
          onKeyDown={(e) => e.key === 'Enter' && setFilter('lote04')}
          className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${
            filter === 'lote04' ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-primary/10'
          }`}
        >
          Casa Lote 04
        </button>
        <button
          type="button"
          onClick={() => setFilter('lote06')}
          onKeyDown={(e) => e.key === 'Enter' && setFilter('lote06')}
          className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${
            filter === 'lote06' ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-primary/10'
          }`}
        >
          Casa Lote 06
        </button>
      </div>

      {/* Single AnimatePresence wraps the conditional modal rendering */}
      <AnimatePresence>
        {active && typeof active === "object" && (
          // This is the main container: backdrop + centering
          <motion.div
            key="modal-backdrop" // Key for AnimatePresence
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm overflow-hidden"
            onClick={(e) => {
              // Close only if the backdrop itself (not content) is clicked
              if (e.target === e.currentTarget) {
                setActive(null)
              }
            }}
          >
            {/* The actual modal content card with fixed positioning */}
            <motion.div
              layoutId={`card-${active.id}-${id}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
              className="relative w-full max-w-2xl bg-card text-card-foreground rounded-xl shadow-2xl z-[101] flex flex-col border overflow-hidden max-h-[85vh] mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                className="absolute top-3 right-3 z-[102] bg-muted/50 hover:bg-muted text-muted-foreground rounded-full p-1.5 transition-colors"
                onClick={() => setActive(null)}
                onKeyDown={(e) => e.key === 'Enter' && setActive(null)}
                aria-label="Close details"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Header with Image */}
              <div className="relative h-56 md:h-64 overflow-hidden bg-gradient-to-br from-muted/50 to-muted/20 flex-shrink-0 border-b">
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="relative w-full h-full max-h-32 sm:max-h-40 md:max-h-48">
                    <Image
                      priority // Prioritize loading image for the modal
                      src={active.src || "/placeholder.svg"}
                      alt={active.title}
                      width={300} // Adjusted default size
                      height={200} // Adjusted default size
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
              </div>

              {/* Scrollable Content Section */}
              <div className="p-6 overflow-y-auto flex-grow">
                {/* Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    {getItemIcon(active.id)}
                  </div>
                  <motion.h3 layoutId={`title-${active.id}-${id}`} className="text-xl font-semibold leading-tight">
                    {active.title}
                  </motion.h3>
                </div>

                {/* Description */}
                <motion.p layoutId={`description-${active.id}-${id}`} className="text-sm text-muted-foreground mb-6">
                  {active.description}
                </motion.p>

                {/* Detailed content */}
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  {/* Wrap content for better typography if needed */}
                  {typeof active.content === "function" ? active.content() : active.content}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Table - ensure it's outside AnimatePresence */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-muted/50">
              <th className="p-3 text-left text-sm font-medium text-muted-foreground">Artículo</th>
              <th className="p-3 text-left text-sm font-medium text-muted-foreground">Descripción</th>
              {!filter && <th className="p-3 text-right text-sm font-medium text-muted-foreground">Cantidad</th>}
              {filter && <th className="p-3 text-right text-sm font-medium text-muted-foreground">Casa {filter === 'lote03' ? 'Lote 03' : filter === 'lote04' ? 'Lote 04' : 'Lote 06'}</th>}
              <th className="p-3 text-center text-sm font-medium text-muted-foreground">Detalles</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item) => (
              <tr
                key={`row-${item.id}-${id}`}
                onClick={() => setActive(item)}
                onKeyDown={(e) => e.key === 'Enter' && setActive(item)}
                tabIndex={0}
                className="border-b hover:bg-muted/30 cursor-pointer transition-colors group" // Added group for potential future use
              >
                <td className="p-3 align-middle">
                  <div className="flex items-center gap-3">
                    <div className="hidden md:flex h-10 w-10 rounded-md bg-muted/50 items-center justify-center overflow-hidden flex-shrink-0">
                      <img
                        src={item.src || "/placeholder.svg"}
                        alt={item.title}
                        className="h-8 w-8 object-contain"
                        loading="lazy" // Lazy load table images
                      />
                    </div>
                    <h3 className="font-medium text-foreground text-sm">{item.title}</h3>
                  </div>
                </td>
                <td className="p-3 text-sm text-muted-foreground align-middle">{item.description}</td>
                {!filter && <td className="p-3 text-right align-middle text-sm">{item.quantity}</td>}
                {filter && (
                  <td className="p-3 text-right align-middle text-sm">
                    {getItemQuantityForHouse(item, filter)}
                  </td>
                )}
                <td className="p-3 text-center align-middle">
                  <span className="inline-block px-3 py-1 text-xs rounded-full font-medium bg-muted group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    Detalles
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

// Helper function to determine quantities for specific houses
function getItemQuantityForHouse(item: EquipmentItem, house: string) {
  const itemHouseMapping: Record<string, Record<string, number>> = {
    "ucg-ultra": { lote03: 1, lote04: 1, lote06: 1 },
    "unifi-unvr": { lote03: 1, lote04: 1, lote06: 1 },
    "hdd-6tb": { lote03: 4, lote04: 4, lote06: 4 },
    "usw-lite-16-poe": { lote03: 0, lote04: 1, lote06: 1 },
    "uvc-g6-turret-w": { lote03: 2, lote04: 3, lote06: 4 },
    "uvc-g6-bullet-w": { lote03: 1, lote04: 1, lote06: 1 },
    "uvc-g6-ptz-b": { lote03: 6, lote04: 5, lote06: 6 },
    "g6-ptz-corner-mount": { lote03: 6, lote04: 5, lote06: 6 },
    "g5-ptz-corner-mount": { lote03: 0, lote04: 0, lote06: 0 },
    "u-poe-plus-plus": { lote03: 6, lote04: 5, lote06: 6 },
    "up-ai-port": { lote03: 6, lote04: 5, lote06: 8 },
    "uacc-ai-port-rm": { lote03: 1, lote04: 1, lote06: 1 },
    "rack-accessories": { lote03: 1, lote04: 1, lote06: 1 },
  }
  
  const mapping = itemHouseMapping[item.id]
  if (!mapping) return "-"
  return mapping[house] || 0
}

// Calculate total items for a specific house
function calculateTotalForHouse(items: EquipmentItem[], house: string) {
  return items.reduce((sum, item) => {
    const quantity = getItemQuantityForHouse(item, house)
    return sum + (typeof quantity === 'number' ? quantity : 0)
  }, 0)
}
