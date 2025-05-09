import type React from "react"
import { cn } from "@/lib/utils"

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return <div className={cn("mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3", className)}>{children}</div>
}

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode
  icon?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-sm flex flex-col space-y-4 rounded-xl border border-neutral-200 bg-white p-6 transition duration-200 hover:shadow-lg dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className,
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {title && <div className="mb-3">{title}</div>}
        <div className="font-sans text-neutral-600 dark:text-neutral-300">{description}</div>
      </div>
      {icon && <div className="mt-auto">{icon}</div>}
    </div>
  )
}
