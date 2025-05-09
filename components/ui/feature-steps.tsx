"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface Feature {
  step: string
  title?: string
  content: string
  image: string
}

interface FeatureStepsProps {
  features: Feature[]
  className?: string
  title?: string
  imageHeight?: string
}

export function FeatureSteps({
  features,
  className,
  title = "How to get Started",
  imageHeight = "h-[400px]",
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0)

  const handleFeatureClick = (index: number) => {
    setCurrentFeature(index)
  }

  return (
    <div className={cn("p-4 md:p-8", className)}>
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center relative">{title}</h2>

        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8">
          {/* Image Column - 66% width (2/3) */}
          <div className="order-1 md:order-1 md:col-span-2 relative h-[250px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg bg-muted/20">
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 rounded-lg overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <Image
                        src={feature.image || "/placeholder.svg"}
                        alt={feature.title || feature.step}
                        className="w-full h-full object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, 66vw"
                        priority={index === 0}
                      />
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>

          {/* Text Column - 33% width (1/3) */}
          <div className="order-2 md:order-2 md:col-span-1 space-y-4 bg-muted/10 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Posicionamiento</h3>
            <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className={cn(
                    "flex items-center gap-4 p-3 rounded-lg cursor-pointer transition-colors",
                    index === currentFeature ? "bg-primary/10 border border-primary/20" : "hover:bg-muted/50",
                  )}
                  onClick={() => handleFeatureClick(index)}
                >
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center border-2 flex-shrink-0",
                      index === currentFeature
                        ? "bg-primary border-primary text-primary-foreground"
                        : "bg-muted/50 border-muted-foreground/30 text-muted-foreground",
                    )}
                  >
                    <span className="text-sm font-semibold">{index + 1}</span>
                  </div>

                  <div className="flex-1">
                    <h4
                      className={cn(
                        "text-base font-medium",
                        index === currentFeature ? "text-primary" : "text-foreground",
                      )}
                    >
                      {feature.title || feature.step}
                    </h4>
                    {index === currentFeature && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="text-sm text-muted-foreground mt-2"
                      >
                        {feature.content}
                      </motion.p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
