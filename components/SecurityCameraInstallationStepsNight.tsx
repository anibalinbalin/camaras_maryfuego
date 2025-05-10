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

    // Function to get image path based on house and lighting type
    const getImagePath = (houseId: string, index: number): string => {
      // Step data contains different information for different houses
      const themeDirectory = "night";
      const suffix = "_night";
      
      const houseDirectory = houseId === "house2" ? "lote04" : houseId === "house3" ? "lote06" : "lote03";
      
      // These filenames need to be updated with the actual filenames for each house
      // Lote04 house image filenames
      const lote04Filenames = [
        "IMG_9783", "IMG_9784", "IMG_9785", "IMG_9786", "IMG_9787",
        "IMG_9788", "IMG_9789", "IMG_9790", "IMG_9791", "IMG_9792"
      ];
      
      // Lote06 house image filenames
      const lote06Filenames = [
        "IMG_9801", "IMG_9802", "IMG_9803", "IMG_9804", "IMG_9805",
        "IMG_9806", "IMG_9807", "IMG_9808", "IMG_9809", "IMG_9810"
      ];
      
      // Lote03 house image filenames (default)
      const lote03Filenames = [
        "IMG_9772", "IMG_9774", "IMG_9775", "IMG_9776", "IMG_9777",
        "IMG_9778", "IMG_9779", "IMG_9781", "IMG_9782", "IMG_9788"
      ];
      
      // Get the appropriate filename based on house
      let filename: string;
      if (houseId === "house2") {
        filename = lote04Filenames[index] || lote04Filenames[0];
      } else if (houseId === "house3") {
        filename = lote06Filenames[index] || lote06Filenames[0];
      } else {
        filename = lote03Filenames[index] || lote03Filenames[0];
      }
      
      return `/images/houses/${houseDirectory}/${themeDirectory}/${filename}${suffix}.jpg`;
    };

    // Generate installation features using the filenames array
    setInstallationFeatures([
      {
        step: "Step 1",
        title: "Initial Night Assessment",
        content: "Our security experts conduct a thorough property assessment at night to identify optimal camera placement for 24/7 surveillance.",
        image: getImagePath(houseId as string, 0),
      },
      {
        step: "Step 2",
        title: "Strategic Placement for Night Coverage",
        content: "Cameras are positioned to maximize coverage in low-light conditions with minimal infrared reflection issues.",
        image: getImagePath(houseId as string, 1),
      },
      {
        step: "Step 3",
        title: "Night-Optimized Equipment",
        content: "UniFi security cameras with advanced IR capabilities ensure clear footage even in complete darkness.",
        image: getImagePath(houseId as string, 2),
      },
      {
        step: "Step 4",
        title: "Professional Night Installation",
        content: "Our technicians install and test cameras during both day and night to ensure 24/7 performance.",
        image: getImagePath(houseId as string, 3),
      },
      {
        step: "Step 5",
        title: "Low-Light Performance Verification",
        content: "Each camera is tested in darkness to ensure proper IR illumination and image clarity at night.",
        image: getImagePath(houseId as string, 4),
      },
      {
        step: "Step 6",
        title: "Secure Night Mounting",
        content: "Cameras are mounted with anti-tamper hardware that remains secure and visible in all lighting conditions.",
        image: getImagePath(houseId as string, 5),
      },
      {
        step: "Step 7",
        title: "Perimeter Night Coverage",
        content: "Special attention to property boundaries ensures complete surveillance during nighttime hours.",
        image: getImagePath(houseId as string, 6),
      },
      {
        step: "Step 8",
        title: "Night Mode Configuration",
        content: "System settings are optimized for automatic day/night transitions with appropriate sensitivity levels.",
        image: getImagePath(houseId as string, 7),
      },
      {
        step: "Step 9",
        title: "IR Illumination Adjustment",
        content: "Infrared illuminators are precisely adjusted to provide optimal coverage without hotspots or dark areas.",
        image: getImagePath(houseId as string, 8),
      },
      {
        step: "Step 10",
        title: "Night Vision Testing",
        content: "Comprehensive testing in darkness ensures all cameras provide clear footage with proper contrast and detail.",
        image: getImagePath(houseId as string, 9),
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
