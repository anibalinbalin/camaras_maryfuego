"use client"

import { FeatureSteps } from "@/components/ui/feature-steps"
import { useEffect, useState } from "react"

interface SecurityCameraInstallationStepsNightProps {
  houseId?: string
}

interface FeatureItem {
  step: string
  title: string
  content: string
  image: string
}

export function SecurityCameraInstallationStepsNight({ houseId }: SecurityCameraInstallationStepsNightProps) {
  const [mounted, setMounted] = useState(false)
  const [installationFeatures, setInstallationFeatures] = useState<FeatureItem[]>([])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    // Determine which house directory to use based on the houseId
    const houseDirectory = houseId === "house2" ? "medio" : houseId === "house3" ? "nido" : "armando"
    const imagePath = `/images/houses/${houseDirectory}/night`

    // Define filenames array based on house directory
    let filenames = []

    if (houseId === "house2") {
      // Medio house image filenames
      filenames = [
        "IMG_9783_night",
        "IMG_9784_night",
        "IMG_9785_night",
        "IMG_9786_night",
        "IMG_9787_night",
        "IMG_9788_night",
        "IMG_9789_night",
        "IMG_9790_night",
        "IMG_9791_night",
        "IMG_9792_night",
      ]
    } else if (houseId === "house3") {
      // Nido house image filenames
      filenames = [
        "IMG_9793_night",
        "IMG_9794_night",
        "IMG_9795_night",
        "IMG_9796_night",
        "IMG_9797_night",
        "IMG_9798_night",
        "IMG_9799_night",
        "IMG_9800_night",
        "IMG_9801_night",
        "IMG_9802_night",
      ]
    } else {
      // Armando house image filenames (default)
      filenames = [
        "IMG_9772_night",
        "IMG_9775_night",
        "IMG_9776_night",
        "IMG_9777_night",
        "IMG_9778_night",
        "IMG_9779_night",
        "IMG_9781_night",
        "IMG_9782_night",
        "IMG_9789_night",
        "IMG_9788_night",
      ]
    }

    // Generate installation features using the filenames array
    setInstallationFeatures([
      {
        step: "Step 1",
        title: "Initial Night Assessment",
        content: "Our security experts conduct a thorough property assessment at night to identify optimal camera placement for 24/7 surveillance.",
        image: `${imagePath}/${filenames[0]}.jpg`,
      },
      {
        step: "Step 2",
        title: "Strategic Placement for Night Coverage",
        content: "Cameras are positioned to maximize coverage in low-light conditions with minimal infrared reflection issues.",
        image: `${imagePath}/${filenames[1]}.jpg`,
      },
      {
        step: "Step 3",
        title: "Night-Optimized Equipment",
        content: "UniFi security cameras with advanced IR capabilities ensure clear footage even in complete darkness.",
        image: `${imagePath}/${filenames[2]}.jpg`,
      },
      {
        step: "Step 4",
        title: "Professional Night Installation",
        content: "Our technicians install and test cameras during both day and night to ensure 24/7 performance.",
        image: `${imagePath}/${filenames[3]}.jpg`,
      },
      {
        step: "Step 5",
        title: "Low-Light Performance Verification",
        content: "Each camera is tested in darkness to ensure proper IR illumination and image clarity at night.",
        image: `${imagePath}/${filenames[4]}.jpg`,
      },
      {
        step: "Step 6",
        title: "Secure Night Mounting",
        content: "Cameras are mounted with anti-tamper hardware that remains secure and visible in all lighting conditions.",
        image: `${imagePath}/${filenames[5]}.jpg`,
      },
      {
        step: "Step 7",
        title: "Perimeter Night Coverage",
        content: "Special attention to property boundaries ensures complete surveillance during nighttime hours.",
        image: `${imagePath}/${filenames[6]}.jpg`,
      },
      {
        step: "Step 8",
        title: "Night Mode Configuration",
        content: "System settings are optimized for automatic day/night transitions with appropriate sensitivity levels.",
        image: `${imagePath}/${filenames[7]}.jpg`,
      },
      {
        step: "Step 9",
        title: "IR Illumination Adjustment",
        content: "Infrared illuminators are precisely adjusted to provide optimal coverage without hotspots or dark areas.",
        image: `${imagePath}/${filenames[8]}.jpg`,
      },
      {
        step: "Step 10",
        title: "Night Vision Testing",
        content: "Comprehensive testing in darkness ensures all cameras provide clear footage with proper contrast and detail.",
        image: `${imagePath}/${filenames[9]}.jpg`,
      },
    ])
  }, [mounted, houseId])

  if (!mounted) {
    return <div>Loading...</div>
  }

  return (
    <FeatureSteps
      features={installationFeatures}
      title="Seguridad 24/7: Capacidades de Visión Nocturna"
      className="p-0"
    />
  )
}
