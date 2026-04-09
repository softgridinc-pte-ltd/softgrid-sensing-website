'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'

import type { ReactNode } from 'react'

interface ImageCardProps {
  image: string | string[]
  kicker: string
  title: string
  description: string
  href: string
  icon?: ReactNode
  ctaLabel?: string
  footerStat?: { value: string; label: string }
}

export function ImageCard({
  image,
  kicker,
  title,
  description,
  href,
  icon,
  ctaLabel = 'Learn more',
  footerStat,
}: ImageCardProps): React.ReactElement {
  const images = Array.isArray(image) ? image : [image]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (images.length < 2) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, 4000)
    return () => clearInterval(id)
  }, [images.length])

  return (
    <Link
      href={href}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl"
    >
      {/* Image area */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-200">
        {images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={title}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
            className={`object-cover transition-all duration-1000 ease-out group-hover:scale-105 ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/40 to-transparent" />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-7 md:p-9">
        {/* Kicker */}
        <div className="mb-4 flex items-center gap-2 text-primary-600">
          {icon}
          <span className="text-sm font-semibold uppercase tracking-wider">{kicker}</span>
        </div>

        {/* Title */}
        <h3 className="mb-4 text-2xl font-semibold leading-snug text-navy-900 transition-colors group-hover:text-primary-700">
          {title}
        </h3>

        {/* Description */}
        <p className="flex-1 text-base leading-relaxed text-slate-600">{description}</p>

        {/* Optional footer stat */}
        {footerStat && (
          <div className="mt-6 border-t border-slate-100 pt-5">
            <div className="text-3xl font-bold text-primary-600">{footerStat.value}</div>
            <div className="mt-1 text-xs uppercase tracking-wider text-slate-500">{footerStat.label}</div>
          </div>
        )}

        {/* CTA */}
        <div
          className={`${footerStat ? 'mt-5' : 'mt-6'} inline-flex items-center gap-2 text-base font-semibold text-primary-600`}
        >
          {ctaLabel}
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}
