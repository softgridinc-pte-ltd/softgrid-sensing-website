'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X, Expand } from 'lucide-react'

import type { NewsPhoto } from '@/data/news'

interface PhotoGalleryProps {
  photos: NewsPhoto[]
}

interface TileProps {
  photo: NewsPhoto
  onOpen: () => void
  className?: string
  sizes: string
}

function GalleryTile({ photo, onOpen, className = '', sizes }: TileProps): React.ReactElement {
  return (
    <button
      type="button"
      onClick={onOpen}
      data-animate
      aria-label={`View photo: ${photo.caption}`}
      className={`group relative block overflow-hidden rounded-xl border border-white/10 bg-navy-800 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 ${className}`}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
        <span className="text-sm font-medium text-white/90">{photo.caption}</span>
        <Expand className="h-4 w-4 flex-shrink-0 text-white/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
    </button>
  )
}

interface LightboxProps {
  photos: NewsPhoto[]
  index: number
  onClose: () => void
  onNavigate: (index: number) => void
}

function Lightbox({ photos, index, onClose, onNavigate }: LightboxProps): React.ReactElement {
  const closeRef = useRef<HTMLButtonElement>(null)
  const photo = photos[index]
  const prev = useCallback(() => onNavigate((index - 1 + photos.length) % photos.length), [index, photos.length, onNavigate])
  const next = useCallback(() => onNavigate((index + 1) % photos.length), [index, photos.length, onNavigate])

  useEffect(() => {
    closeRef.current?.focus()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose, prev, next])

  const navButton =
    'flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-white/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400'

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      className="fixed inset-0 z-[80] flex flex-col bg-navy-950/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="flex items-center justify-between px-4 py-4 md:px-8">
        <span className="text-sm tabular-nums text-slate-400">
          {index + 1} / {photos.length}
        </span>
        <button ref={closeRef} type="button" onClick={onClose} aria-label="Close photo viewer" className={navButton}>
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="flex flex-1 items-center justify-center gap-4 px-4 pb-6 md:px-8" onClick={(e) => e.stopPropagation()}>
        <button type="button" onClick={prev} aria-label="Previous photo" className={`${navButton} hidden md:flex`}>
          <ChevronLeft className="h-5 w-5" />
        </button>
        <figure className="flex max-h-full w-full max-w-5xl flex-col items-center">
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="max-h-[72vh] w-auto rounded-lg object-contain"
          />
          <figcaption className="mt-4 text-center text-sm text-slate-300">{photo.caption}</figcaption>
          <div className="mt-5 flex gap-3 md:hidden">
            <button type="button" onClick={prev} aria-label="Previous photo" className={navButton}>
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button type="button" onClick={next} aria-label="Next photo" className={navButton}>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </figure>
        <button type="button" onClick={next} aria-label="Next photo" className={`${navButton} hidden md:flex`}>
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}

export function PhotoGallery({ photos }: PhotoGalleryProps): React.ReactElement {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const close = useCallback(() => setOpenIndex(null), [])
  const [feature, ...rest] = photos

  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 md:py-28">
      <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6 md:px-12">
        <div data-animate className="mb-10 flex flex-wrap items-end justify-between gap-4 md:mb-12">
          <div>
            <div className="mb-4 flex items-center gap-3.5">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary-300" />
              <span className="text-sm font-bold uppercase tracking-[3px] text-primary-300">Gallery</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">From the Signing</h2>
          </div>
          <p className="text-sm text-slate-400">EM Services headquarters, Singapore</p>
        </div>

        <div data-animate-stagger className="space-y-4 md:space-y-5">
          {feature && (
            <GalleryTile
              photo={feature}
              onOpen={() => setOpenIndex(0)}
              className="aspect-[2.4/1] w-full md:aspect-[1931/503]"
              sizes="(min-width: 1152px) 1100px, 100vw"
            />
          )}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
            {rest.map((photo, i) => (
              <GalleryTile
                key={photo.src}
                photo={photo}
                onOpen={() => setOpenIndex(i + 1)}
                className="aspect-[4/3]"
                sizes="(min-width: 768px) 360px, 50vw"
              />
            ))}
          </div>
        </div>
      </div>

      {openIndex !== null && (
        <Lightbox photos={photos} index={openIndex} onClose={close} onNavigate={setOpenIndex} />
      )}
    </section>
  )
}
