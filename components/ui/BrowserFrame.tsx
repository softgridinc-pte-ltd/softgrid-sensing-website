'use client'

import { useState } from 'react'
import Image from 'next/image'

interface BrowserFrameProps {
  src: string
  alt: string
  url?: string
  reverse?: boolean
}

export function BrowserFrame({ src, alt, url, reverse = false }: BrowserFrameProps): React.ReactElement {
  const [hovered, setHovered] = useState(false)

  const rotateY = reverse ? 6 : -6
  const transform = hovered
    ? 'perspective(800px) rotateY(0deg) rotateX(0deg) scale(1.02)'
    : `perspective(800px) rotateY(${rotateY}deg) rotateX(3deg)`

  return (
    <div
      className="overflow-hidden rounded-lg ring-1 ring-slate-900/10"
      style={{
        transform,
        transition: 'transform 0.5s ease',
        boxShadow: hovered
          ? '0 25px 60px -12px rgba(0,0,0,0.30), 0 12px 28px -8px rgba(0,0,0,0.18)'
          : '0 20px 40px -12px rgba(0,0,0,0.25), 0 8px 20px -8px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 bg-slate-200 px-3 py-1.5">
        <div className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        </div>
        {url && (
          <div className="ml-2 flex-1 rounded bg-white/70 px-2.5 py-px">
            <span className="text-[10px] font-medium text-slate-500">{url}</span>
          </div>
        )}
      </div>
      {/* Screenshot */}
      <Image
        src={src}
        alt={alt}
        width={1920}
        height={1080}
        className="w-full object-cover"
      />
    </div>
  )
}
