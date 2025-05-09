"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

export const GlowingStarsBackgroundCard = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  const [mouseEnter, setMouseEnter] = useState(false)
  const { theme } = useTheme()
  const isLight = theme === "light"

  return (
    <div
      onMouseEnter={() => {
        setMouseEnter(true)
      }}
      onMouseLeave={() => {
        setMouseEnter(false)
      }}
      className={cn(
        "p-8 max-w-md aspect-square h-full w-full rounded-2xl transition-colors duration-300 flex flex-col justify-between font-sans relative overflow-hidden",
        isLight 
          ? "bg-white/80 border border-gray-200 shadow-lg backdrop-blur-sm" 
          : "bg-[#222] border border-neutral-800",
        className,
      )}
    >
      <div className="flex-1 flex justify-center items-center relative z-10">
        <Illustration mouseEnter={mouseEnter} />
      </div>
      <div className="mt-auto relative z-10">{children}</div>
    </div>
  )
}

export const GlowingStarsDescription = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  const { theme } = useTheme()
  const isLight = theme === "light"

  return (
    <p className={cn("text-base max-w-[20rem] font-normal leading-tight", 
      isLight ? "text-gray-700" : "text-gray-300", 
      className)}
    >
      {children}
    </p>
  )
}

export const GlowingStarsTitle = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  const { theme } = useTheme()
  const isLight = theme === "light"

  return (
    <h2 className={cn("text-3xl mb-2 font-medium tracking-tight", 
      isLight ? "text-gray-900" : "text-white", 
      className)}
    >
      {children}
    </h2>
  )
}

export const Illustration = ({ mouseEnter }: { mouseEnter: boolean }) => {
  const stars = 108
  const columns = 18
  const { theme } = useTheme()
  const isLight = theme === "light"

  const [glowingStars, setGlowingStars] = useState<number[]>([])

  const highlightedStars = useRef<number[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      highlightedStars.current = Array.from({ length: 5 }, () => Math.floor(Math.random() * stars))
      setGlowingStars([...highlightedStars.current])
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="h-full w-full"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: "1px",
      }}
    >
      {[...Array(stars)].map((_, starIdx) => {
        const isGlowing = glowingStars.includes(starIdx)
        const delay = (starIdx % 10) * 0.1
        const staticDelay = starIdx * 0.01
        const uniqueId = `star-${starIdx}-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`
        return (
          <div key={uniqueId} className="relative flex items-center justify-center">
            <LEDStar isGlowing={mouseEnter ? true : isGlowing} delay={mouseEnter ? staticDelay : delay} isLight={isLight} />
            {mouseEnter && <LEDGlow delay={staticDelay} isLight={isLight} />}
            <AnimatePresence mode="wait">{isGlowing && <LEDGlow delay={delay} isLight={isLight} />}</AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

const LEDStar = ({ isGlowing, delay, isLight }: { isGlowing: boolean; delay: number; isLight: boolean }) => {
  return (
    <motion.div
      key={delay}
      initial={{
        scale: 1,
        opacity: 0.3,
      }}
      animate={{
        scale: isGlowing ? 1 : 1,
        opacity: isGlowing ? 1 : 0.3,
        backgroundColor: isGlowing 
          ? isLight ? "#0055cc" : "#0066ff" 
          : isLight ? "#a0a0a0" : "#d1d5db",
      }}
      transition={{
        duration: 0.15,
        ease: "easeInOut",
        delay: delay,
      }}
      className={cn(
        "h-[2px] w-[2px] rounded-full relative z-20",
        isLight ? "bg-[#a0a0a0]" : "dark:bg-[#666]",
        isGlowing ? isLight ? "ring-1 ring-blue-600/40" : "ring-1 ring-blue-400/30" : "",
      )}
    />
  )
}

const LEDGlow = ({ delay, isLight }: { delay: number; isLight: boolean }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.15,
        ease: "easeInOut",
        delay: delay,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.1,
        },
      }}
      className={cn(
        "absolute left-1/2 -translate-x-1/2 z-10 h-[2.5px] w-[2.5px] rounded-full blur-[0.5px]",
        isLight 
          ? "bg-blue-700 shadow-[0_0_1px_1px_rgba(29,78,216,0.4)]" 
          : "bg-blue-600 dark:bg-blue-500 shadow-[0_0_1px_1px_rgba(37,99,235,0.3)]"
      )}
    />
  )
}
