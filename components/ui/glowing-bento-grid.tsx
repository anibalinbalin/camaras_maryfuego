"use client"

import { cn } from "@/lib/utils"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import type React from "react"

export interface GlowingBentoGridProps {
  className?: string
  children?: React.ReactNode
}

export const GlowingBentoGrid = ({ className, children }: GlowingBentoGridProps) => {
  return (
    <ul
      className={cn(
        "grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2",
        className,
      )}
    >
      {children}
    </ul>
  )
}

export interface GlowingBentoGridItemProps {
  area?: string
  icon?: React.ReactNode
  title?: string
  description?: React.ReactNode
  image?: string
  imageAlt?: string
  features?: string[]
  className?: string
  header?: React.ReactNode
}

export const GlowingBentoGridItem = ({
  area = "",
  icon,
  title,
  description,
  image,
  imageAlt,
  features,
  className,
  header,
}: GlowingBentoGridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area} ${className}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          {header && <div className="mb-4">{header}</div>}
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            {icon && <div className="w-fit rounded-lg border border-gray-600 p-2">{icon}</div>}
            {image && (
              <div className="relative h-40 w-full overflow-hidden rounded-lg">
                <img
                  src={image || "/placeholder.svg"}
                  alt={imageAlt || "Feature image"}
                  className="h-full w-full object-contain transition-all duration-500"
                />
              </div>
            )}
            <div className="space-y-3">
              {title && (
                <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                  {title}
                </h3>
              )}
              {description && (
                <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                  {description}
                </h2>
              )}
              {features && features.length > 0 && (
                <div className="space-y-2 pt-2">
                  {features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 mb-2">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5 shrink-0">
                        <svg className="h-3 w-3 text-primary" viewBox="0 0 24 24">
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M20 6L9 17l-5-5"
                          ></path>
                        </svg>
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}
