'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

interface CarouselImage {
  src: string
  alt: string
  label: string
}

interface BrowserFrameCarouselProps {
  images: CarouselImage[]
  url?: string
  interval?: number
  variant?: 'browser' | 'mobile'
  large?: boolean
}

export function BrowserFrameCarousel({
  images,
  url,
  interval = 4000,
  variant = 'browser',
  large = false,
}: BrowserFrameCarouselProps): React.ReactElement {
  const [active, setActive] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)
  const count = images.length

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent): void => setReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const goTo = useCallback((i: number) => setActive(i), [])

  useEffect(() => {
    if (count < 2) return
    const id = setInterval(() => setActive((i) => (i + 1) % count), interval)
    return () => clearInterval(id)
  }, [count, interval])

  const isMobile = variant === 'mobile'
  const stageHeight = isMobile ? 620 : large ? 520 : 420
  const itemWidth = isMobile ? '38%' : large ? '90%' : '75%'
  const imgWidth = isMobile ? 440 : 1920
  const imgHeight = isMobile ? 956 : 1080

  return (
    <div className={`flex flex-col items-center gap-4 ${!isMobile ? 'pt-10' : ''}`}>
      {/* 3D carousel stage */}
      <div
        className="relative w-full"
        style={{ perspective: 1000, height: stageHeight }}
      >
        {images.map((img, i) => {
          const offset = ((i - active) % count + count) % count
          const pos = offset > count / 2 ? offset - count : offset

          const isActive = pos === 0
          const absPos = Math.abs(pos)

          let translateX: number
          let translateY: number
          let translateZ: number
          let scale: number
          let opacity: number
          let zIndex: number

          if (isMobile) {
            // Tilted ring: front-bottom → right-mid → back-top → left-mid
            // Use angle on ring to compute position
            const angle = (offset / count) * 2 * Math.PI
            // X: sin puts front=0, right=1, back=0, left=-1
            translateX = Math.sin(angle) * 90
            // Y: cos puts front=1(bottom), right=0, back=-1(top), left=0
            // Invert so front is bottom (positive Y = down in CSS)
            translateY = Math.cos(angle) * 90
            // Z depth: front closest, back furthest
            translateZ = Math.cos(angle) * 100 - 100
            // Front is largest
            scale = 0.65 + 0.35 * ((Math.cos(angle) + 1) / 2)
            opacity = isActive ? 1 : 0.6 + 0.2 * ((Math.cos(angle) + 1) / 2)
            zIndex = Math.round(10 + Math.cos(angle) * 10)
          } else {
            translateX = pos * (large ? 25 : 35)
            translateY = large ? (isActive ? 40 : -20 * absPos) : 0
            translateZ = isActive ? 0 : -120 * absPos
            scale = isActive ? 1 : Math.max(0.55, large ? 0.6 - absPos * 0.08 : 0.75 - absPos * 0.1)
            opacity = absPos > 1 ? 0.4 : isActive ? 1 : 0.7
            zIndex = count - absPos
          }

          return (
            <div
              key={img.src}
              role="button"
              tabIndex={0}
              aria-label={`View ${img.label}`}
              className="absolute left-1/2 top-1/2 cursor-pointer"
              style={{
                width: itemWidth,
                transform: `translate(-50%, calc(-50% + ${translateY}px)) translateX(${translateX}%) translateZ(${translateZ}px) scale(${scale})`,
                opacity,
                zIndex,
                transition: reducedMotion ? 'none' : 'all 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)',
                filter: isActive ? 'none' : `brightness(${0.7 + 0.15 * ((Math.cos((offset / count) * 2 * Math.PI) + 1) / 2)})`,
              }}
              onClick={() => goTo(i)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  goTo(i)
                }
              }}
            >
              {/* Mobile phone bezel */}
              {isMobile ? (
                <div
                  className="overflow-hidden rounded-[2rem] bg-slate-800 p-1.5"
                  style={{
                    boxShadow: isActive
                      ? '0 25px 50px -12px rgba(0,0,0,0.35), 0 12px 28px -8px rgba(0,0,0,0.20)'
                      : '0 10px 20px -8px rgba(0,0,0,0.18)',
                  }}
                >
                  <div className="overflow-hidden rounded-[1.6rem] bg-white">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={imgWidth}
                      height={imgHeight}
                      className="w-full object-cover"
                    />
                  </div>
                </div>
              ) : (
                <div
                  className="overflow-hidden rounded-lg ring-1 ring-slate-900/10"
                  style={{
                    boxShadow: isActive
                      ? '0 25px 50px -12px rgba(0,0,0,0.30), 0 12px 28px -8px rgba(0,0,0,0.18)'
                      : '0 10px 20px -8px rgba(0,0,0,0.15)',
                  }}
                >
                  {/* Browser chrome */}
                  <div className="flex items-center gap-2 bg-slate-200 px-3 py-1.5">
                    <div className="flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                      <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                      <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                    </div>
                    <div className="ml-2 flex-1 rounded bg-white/70 px-2.5 py-px">
                      <span className="text-[10px] font-medium text-slate-500">
                        {isActive ? (url ?? img.label) : img.label}
                      </span>
                    </div>
                  </div>
                  {/* Screenshot */}
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={imgWidth}
                    height={imgHeight}
                    className="w-full object-cover"
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Label + dots */}
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm font-semibold text-slate-700">
          {images[active].label}
        </span>
        <div className="flex items-center gap-1.5">
          {images.map((img, i) => (
            <button
              key={img.src}
              onClick={() => goTo(i)}
              aria-label={`View ${img.label}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active
                  ? 'w-5 bg-primary-500'
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
