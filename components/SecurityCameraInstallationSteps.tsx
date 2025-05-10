"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { FeatureSteps } from "@/components/ui/feature-steps"

interface FeatureItem {
  step: string
  title: string
  content: string
  image: string
}

// Add this to the component's props
export function SecurityCameraInstallationSteps({ houseId }: { houseId?: string }) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [installationFeatures, setInstallationFeatures] = useState<FeatureItem[]>([])

  // Prevent hydration mismatch by only rendering after component is mounted
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    // Determine which house directory to use based on the houseId
    const houseDirectory = houseId === "house2" ? "medio" : houseId === "house3" ? "nido" : "armando"

    // Set image paths based on current theme and house
    const imagePath =
      theme === "dark" ? `/images/houses/${houseDirectory}/night` : `/images/houses/${houseDirectory}/day`

    // Define filenames array based on house directory
    let filenames = []

    if (houseId === "house2") {
      // Medio house image filenames
      filenames = [
        "IMG_9783",
        "IMG_9784",
        "IMG_9785",
        "IMG_9786",
        "IMG_9787",
        "IMG_9788",
        "IMG_9789",
        "IMG_9790",
        "IMG_9791",
        "IMG_9792",
      ]
    } else if (houseId === "house3") {
      // Nido house image filenames
      filenames = [
        "IMG_9793",
        "IMG_9794",
        "IMG_9795",
        "IMG_9796",
        "IMG_9797",
        "IMG_9798",
        "IMG_9799",
        "IMG_9800",
        "IMG_9801",
        "IMG_9802",
      ]
    } else {
      // Armando house image filenames (default)
      filenames = [
        "IMG_9772",
        "IMG_9774",
        "IMG_9775",
        "IMG_9776",
        "IMG_9777",
        "IMG_9778",
        "IMG_9779",
        "IMG_9781",
        "IMG_9782",
        "IMG_9788",
      ]
    }

    // Generate installation features using the filenames array
    setInstallationFeatures([
      {
        step: "Step 1",
        title: houseId === "house2" 
          ? "Acceso principal" 
          : houseId === "house3" 
            ? "Entrada y perímetro derecho" 
            : "Entrada y esquina",
        content: houseId === "house2" 
          ? "Esquina entrada y lateral." 
          : houseId === "house3" 
            ? "Se remueven las dos camaras actuales. Se instala una cámara angular para cubrir el acceso principal y lateral." 
            : "Aquí cubrimos la entrada y el lateral.",
        image: `${imagePath}/${filenames[0]}${theme === "dark" ? "_night" : ""}.jpg`,
      },
      {
        step: "Step 2",
        title: houseId === "house2" 
          ? "Lateral este" 
          : houseId === "house3" 
            ? "Patio interno" 
            : "Lateral contra el nido",
        content: houseId === "house2" 
          ? "Visión completa del lateral este con lente gran angular." 
          : houseId === "house3" 
            ? "Zona interna de la casa." 
            : "Aquí cubrimos todo el lateral puesto el lente es gran angular.",
        image: `${imagePath}/${filenames[1]}${theme === "dark" ? "_night" : ""}.jpg`,
      },
      {
        step: "Step 3",
        title: houseId === "house2" 
          ? "Lateral contra el nido" 
          : houseId === "house3" 
            ? "Entrada" 
            : "Esquina contra la playa",
        content: houseId === "house2" 
          ? "Cubre toda la zona contra el nido." 
          : houseId === "house3" 
            ? "Toda la zona de la entrada." 
            : "Gran angular para toda el área frente al mar.",
        image: `${imagePath}/${filenames[2]}${theme === "dark" ? "_night" : ""}.jpg`,
      },
      {
        step: "Step 4",
        title: houseId === "house2" 
          ? "Removida" 
          : houseId === "house3" 
            ? "Esquina lateral contra el nido" 
            : "Lateral interno",
        content: houseId === "house2" 
          ? "Esta cámara es removida, el tendido se usará para la siguiente cámara." 
          : houseId === "house3" 
            ? "Entrada contra la ruta y lateral hacia el nido." 
            : "Deck.",
        image: `${imagePath}/${filenames[3]}${theme === "dark" ? "_night" : ""}.jpg`,
      },
      {
        step: "Step 5",
        title: houseId === "house2" 
          ? "Muro contra la playa" 
          : houseId === "house3" 
            ? "Lateral frente al nido" 
            : "Esquina frente al mar contra los postes",
        content: houseId === "house2" 
          ? "Cobertura para la esquina contra al mar." 
          : houseId === "house3" 
            ? "Cubre toda el area frente al nido." 
            : "Gran angular para complementar ambas esquinas.",
        image: `${imagePath}/${filenames[4]}${theme === "dark" ? "_night" : ""}.jpg`,
      },
      {
        step: "Step 6",
        title: houseId === "house2" 
          ? "Parillero" 
          : houseId === "house3" 
            ? "Muro contra la playa" 
            : "Esta cámara es removida.",
        content: houseId === "house2" 
          ? "En el parrillero contra la playa." 
          : houseId === "house3" 
            ? "Cámara retirada para cubrir toda la playa y el lateral." 
            : "El cable se utilizará para la siguiente cámara en el paso 7.",
        image: `${imagePath}/${filenames[5]}${theme === "dark" ? "_night" : ""}.jpg`,
      },
      {
        step: "Step 7",
        title: houseId === "house2" 
          ? "Esquina contra lateral playa" 
          : houseId === "house3" 
            ? "Esquina contra el medio." 
            : "Esquina contra la piscina.",
        content: houseId === "house2" 
          ? "Nueva ubicación para curbir la zona de piscina y acceso lateral." 
          : houseId === "house3" 
            ? "Se remueve también la cámara actual." 
            : "Abarca toda el área de la entrada. Asi mismo la cámara del piso superior es removida y remplazada.",
        image: `${imagePath}/${filenames[6]}${theme === "dark" ? "_night" : ""}.jpg`,
      },
      {
        step: "Step 8",
        title: houseId === "house2" 
          ? "Lateral subsuelo" 
          : houseId === "house3" 
            ? "Lateral" 
            : "Piso de arriba",
        content: houseId === "house2" 
          ? "Cubre toda la zona de abajo." 
          : houseId === "house3" 
            ? "Para cubrir la zona lateral contra el medio." 
            : "Esta cámara es para complementar y brindar redundancia a toda el área de la entrada. La cámara anterior es removida.",
        image: `${imagePath}/${filenames[7]}${theme === "dark" ? "_night" : ""}.jpg`,
      },
      {
        step: "Step 9",
        title: houseId === "house2" 
          ? "Planta alta - angular" 
          : houseId === "house3" 
            ? "Planta alta - complementaria" 
            : "Piso de arriba estudio",
        content: houseId === "house2" 
          ? "Desde arriba en diagonal con ángulo distinto para asegurar cobertura sin puntos ciegos." 
          : houseId === "house3" 
            ? "Cubre toda la zona de arriba." 
            : "Idem anterior pero con otro ángulo e inclinación.",
        image: `${imagePath}/${filenames[8]}${theme === "dark" ? "_night" : ""}.jpg`,
      },
      {
        step: "Step 10",
        title: houseId === "house2" 
          ? "Planta alta - angular" 
          : houseId === "house3" 
            ? "Segunda camara en planta alta" 
            : "Entrada principal",
        content: houseId === "house2" 
          ? "Desde arriba en diagonal contra la ruta." 
          : houseId === "house3" 
            ? "Para complementar la otra camara en diagonal." 
            : "Cámara de la entrada principal.",
        image: `${imagePath}/${filenames[9]}${theme === "dark" ? "_night" : ""}.jpg`,
      },
    ])
  }, [theme, mounted, houseId])

  if (!mounted) {
    return <div>Loading...</div>
  }

  return (
    <FeatureSteps
      features={installationFeatures}
      title=""
      className="p-0"
    />
  )
}
