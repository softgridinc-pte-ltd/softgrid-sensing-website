'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

interface ProductImageCarouselProps {
  images: { src: string; label: string }[]
  alt: string
  interval?: number
}

export function ProductImageCarousel({
  images,
  alt,
  interval = 3500,
}: ProductImageCarouselProps): React.ReactElement {
  const [active, setActive] = useState(0)

  const goTo = useCallback((i: number) => setActive(i), [])

  useEffect(() => {
    if (images.length < 2) return
    const id = setInterval(() => setActive((i) => (i + 1) % images.length), interval)
    return () => clearInterval(id)
  }, [images.length, interval])

  return (
    <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-lg">
      {images.map((img, i) => (
        <Image
          key={img.src}
          src={img.src}
          alt={`${alt} — ${img.label}`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className={`object-cover transition-all duration-1000 ease-out ${
            i === active ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />

      {/* Active label */}
      <span className="absolute bottom-4 left-4 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy-900 shadow backdrop-blur transition-opacity duration-500">
        {images[active].label}
      </span>

      {/* Dot indicators */}
      <div className="absolute bottom-4 right-4 flex items-center gap-1.5">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => goTo(i)}
            aria-label={`View ${img.label}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === active
                ? 'w-5 bg-white'
                : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
