import { useState } from 'react'
import fallback from 'assets/svg/fallback-image.svg'

export function ImageWithFallback ({ image, alt, fallbackColor, fallbackSrc = fallback }) {
  const [imageError, setImageError] = useState(false)
  return (
    <img
      src={imageError ? image : fallbackSrc}
      alt={alt}
      onError={() => setImageError(true)}
    />
  )
}
