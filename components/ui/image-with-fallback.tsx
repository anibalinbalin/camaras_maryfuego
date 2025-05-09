"use client"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"

type ImageWithFallbackProps = ImageProps & {
  fallbackSrc?: string
}

export function ImageWithFallback({
  src,
  fallbackSrc = "/outdoor-security-camera.png",
  alt,
  ...rest
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <Image
      {...rest}
      src={imgSrc || "/placeholder.svg"}
      alt={alt}
      onError={() => {
        setImgSrc(fallbackSrc)
      }}
    />
  )
}
