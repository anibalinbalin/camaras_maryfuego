// Central configuration for house image mappings
// This provides a single source of truth for image filenames across different houses

type ImageStep = {
  step: string
  title: {
    light: string
    dark: string
  }
  content: {
    light: string
    dark: string
  }
  filename: string
}

type HouseImageConfig = {
  [houseId: string]: {
    steps: ImageStep[]
  }
}

export const houseImageConfig: HouseImageConfig = {
  house1: {
    steps: [
      {
        step: "Step 1",
        title: {
          light: "Site Assessment",
          dark: "In1itial Night Assessment",
        },
        content: {
          light:
            "Our security experts conduct a thorough assessment of your property to identify optimal camera placement locations.",
          dark: "Our security experts conduct a thorough property assessment at night to identify optimal camera placement for 24/7 surveillance.",
        },
        filename: "IMG_9772",
      },
      {
        step: "Step 2",
        title: {
          light: "Camera Placement Planning",
          dark: "Strategic Placement for Night Coverage",
        },
        content: {
          light:
            "Strategic camera locations are determined to maximize coverage and eliminate blind spots around your property.",
          dark: "Cameras are positioned to maximize coverage in low-light conditions with minimal infrared reflection issues.",
        },
        filename: "IMG_9774",
      },
      {
        step: "Step 3",
        title: {
          light: "Equipment Preparation",
          dark: "Night-Optimized Equipment",
        },
        content: {
          light: "High-quality UniFi security cameras and necessary mounting hardware are prepared for installation.",
          dark: "UniFi security cameras with advanced IR capabilities ensure clear footage even in complete darkness.",
        },
        filename: "IMG_9775",
      },
      {
        step: "Step 4",
        title: {
          light: "Professional Installation",
          dark: "Professional Night Installation",
        },
        content: {
          light: "Our certified technicians carefully install each camera according to the strategic placement plan.",
          dark: "Our technicians install and test cameras during both day and night to ensure 24/7 performance.",
        },
        filename: "IMG_9776",
      },
      {
        step: "Step 5",
        title: {
          light: "Wiring and Connection",
          dark: "Low-Light Performance Verification",
        },
        content: {
          light: "Cameras are properly wired and connected to ensure reliable power and data transmission.",
          dark: "Each camera is tested in darkness to ensure proper IR illumination and image clarity at night.",
        },
        filename: "IMG_9777",
      },
      {
        step: "Step 6",
        title: {
          light: "Secure Mounting",
          dark: "Secure Night Mounting",
        },
        content: {
          light:
            "Each camera is securely mounted with weather-resistant hardware to withstand environmental conditions.",
          dark: "Cameras are mounted with anti-tamper hardware that remains secure and visible in all lighting conditions.",
        },
        filename: "IMG_9778",
      },
      {
        step: "Step 7",
        title: {
          light: "Corner and Perimeter Coverage",
          dark: "Perimeter Night Coverage",
        },
        content: {
          light: "Special attention is given to corners and perimeter areas to ensure comprehensive security coverage.",
          dark: "Special attention to property boundaries ensures complete surveillance during nighttime hours.",
        },
        filename: "IMG_9779",
      },
      {
        step: "Step 8",
        title: {
          light: "System Configuration",
          dark: "Night Mode Configuration",
        },
        content: {
          light: "The entire security system is configured and optimized for your specific property requirements.",
          dark: "System settings are optimized for automatic day/night transitions with appropriate sensitivity levels.",
        },
        filename: "IMG_9781",
      },
      {
        step: "Step 9",
        title: {
          light: "Network Integration",
          dark: "IR Illumination Adjustment",
        },
        content: {
          light: "Cameras are integrated with your home network and connected to the central monitoring system.",
          dark: "Infrared illuminators are precisely adjusted to provide optimal coverage without hotspots or dark areas.",
        },
        filename: "IMG_9782",
      },
      {
        step: "Step 10",
        title: {
          light: "Final Testing",
          dark: "Night Vision Testing",
        },
        content: {
          light:
            "Comprehensive testing ensures all cameras are functioning properly with optimal coverage and recording quality.",
          dark: "Comprehensive testing in darkness ensures all cameras provide clear footage with proper contrast and detail.",
        },
        filename: "IMG_9788",
      },
    ],
  },
  house2: {
    steps: [
      {
        step: "Step 1",
        title: {
          light: "Site Assessment",
          dark: "Initi1al Night Assessment",
        },
        content: {
          light:
            "Our security experts conduct a thorough assessment of your property to identify optimal camera placement locations.",
          dark: "Our security experts conduct a thorough property assessment at night to identify optimal camera placement for 24/7 surveillance.",
        },
        filename: "IMG_9783",
      },
      {
        step: "Step 2",
        title: {
          light: "Camera Placement Planning",
          dark: "Strategic Placement for Night Coverage",
        },
        content: {
          light:
            "Strategic camera locations are determined to maximize coverage and eliminate blind spots around your property.",
          dark: "Cameras are positioned to maximize coverage in low-light conditions with minimal infrared reflection issues.",
        },
        filename: "IMG_9784",
      },
      {
        step: "Step 3",
        title: {
          light: "Equipment Preparation",
          dark: "Night-Optimized Equipment",
        },
        content: {
          light: "High-quality UniFi security cameras and necessary mounting hardware are prepared for installation.",
          dark: "UniFi security cameras with advanced IR capabilities ensure clear footage even in complete darkness.",
        },
        filename: "IMG_9785",
      },
      {
        step: "Step 4",
        title: {
          light: "Professional Installation",
          dark: "Professional Night Installation",
        },
        content: {
          light: "Our certified technicians carefully install each camera according to the strategic placement plan.",
          dark: "Our technicians install and test cameras during both day and night to ensure 24/7 performance.",
        },
        filename: "IMG_9786",
      },
      {
        step: "Step 5",
        title: {
          light: "Wiring and Connection",
          dark: "Low-Light Performance Verification",
        },
        content: {
          light: "Cameras are properly wired and connected to ensure reliable power and data transmission.",
          dark: "Each camera is tested in darkness to ensure proper IR illumination and image clarity at night.",
        },
        filename: "IMG_9787",
      },
      {
        step: "Step 6",
        title: {
          light: "Secure Mounting",
          dark: "Secure Night Mounting",
        },
        content: {
          light:
            "Each camera is securely mounted with weather-resistant hardware to withstand environmental conditions.",
          dark: "Cameras are mounted with anti-tamper hardware that remains secure and visible in all lighting conditions.",
        },
        filename: "IMG_9788",
      },
      {
        step: "Step 7",
        title: {
          light: "Corner and Perimeter Coverage",
          dark: "Perimeter Night Coverage",
        },
        content: {
          light: "Special attention is given to corners and perimeter areas to ensure comprehensive security coverage.",
          dark: "Special attention to property boundaries ensures complete surveillance during nighttime hours.",
        },
        filename: "IMG_9789",
      },
      {
        step: "Step 8",
        title: {
          light: "System Configuration",
          dark: "Night Mode Configuration",
        },
        content: {
          light: "The entire security system is configured and optimized for your specific property requirements.",
          dark: "System settings are optimized for automatic day/night transitions with appropriate sensitivity levels.",
        },
        filename: "IMG_9790",
      },
      {
        step: "Step 9",
        title: {
          light: "Network Integration",
          dark: "IR Illumination Adjustment",
        },
        content: {
          light: "Cameras are integrated with your home network and connected to the central monitoring system.",
          dark: "Infrared illuminators are precisely adjusted to provide optimal coverage without hotspots or dark areas.",
        },
        filename: "IMG_9791",
      },
      {
        step: "Step 10",
        title: {
          light: "Final Testing",
          dark: "Night Vision Testing",
        },
        content: {
          light:
            "Comprehensive testing ensures all cameras are functioning properly with optimal coverage and recording quality.",
          dark: "Comprehensive testing in darkness ensures all cameras provide clear footage with proper contrast and detail.",
        },
        filename: "IMG_9792",
      },
    ],
  },
  house3: {
    steps: [
      // Similar structure for house3 (nido)
      // This would be populated with the correct filenames for the nido house
      {
        step: "Step 1",
        title: {
          light: "Site Assessment",
          dark: "In1itial Night Assessment",
        },
        content: {
          light:
            "Our security experts conduct a thorough assessment of your property to identify optimal camera placement locations.",
          dark: "Our security experts conduct a thorough property assessment at night to identify optimal camera placement for 24/7 surveillance.",
        },
        filename: "IMG_9801", // Example filename, would need to be updated with actual nido filenames
      },
      // ... remaining steps
    ],
  },
}

// Helper function to get image path based on house ID, theme, and step index
export function getImagePath(houseId: string, isDarkTheme: boolean, stepIndex: number): string {
  const house = houseImageConfig[houseId] || houseImageConfig.house1 // Default to house1 if not found
  const step = house.steps[stepIndex] || house.steps[0] // Default to first step if not found

  const houseDirectory = houseId === "house2" ? "lote04" : houseId === "house3" ? "lote06" : "lote03"
  const themeDirectory = isDarkTheme ? "night" : "day"
  const suffix = isDarkTheme ? "_night" : ""

  return `/images/houses/${houseDirectory}/${themeDirectory}/${step.filename}${suffix}.jpg`
}

// Helper function to get step data based on house ID and step index
export function getStepData(houseId: string, isDarkTheme: boolean, stepIndex: number) {
  const house = houseImageConfig[houseId] || houseImageConfig.house1 // Default to house1 if not found
  const step = house.steps[stepIndex] || house.steps[0] // Default to first step if not found

  return {
    step: step.step,
    title: isDarkTheme ? step.title.dark : step.title.light,
    content: isDarkTheme ? step.content.dark : step.content.light,
    image: getImagePath(houseId, isDarkTheme, stepIndex),
  }
}

// Helper function to get all steps for a house
export function getAllSteps(houseId: string, isDarkTheme: boolean) {
  const house = houseImageConfig[houseId] || houseImageConfig.house1 // Default to house1 if not found

  return house.steps.map((step, index) => ({
    step: step.step,
    title: isDarkTheme ? step.title.dark : step.title.light,
    content: isDarkTheme ? step.content.dark : step.content.light,
    image: getImagePath(houseId, isDarkTheme, index),
  }))
}
