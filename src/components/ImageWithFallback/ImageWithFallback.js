import { useState } from 'react'
import fallback from 'assets/svg/fallback-image.svg'

export function ImageWithFallback ({ image, alt, fallbackSrc = fallback, ...props }) {
  // eslint-disable-next-line prefer-const
  let [imageError, setImageError] = useState(false)
  return (
    <img
      src={!imageError ? image : fallbackSrc}
      alt={alt}
      onError={() => setImageError(true)}
      {...props}
    />
  )
}
