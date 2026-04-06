"use client"

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'

interface HeroCta {
  label: string
  href: string
  variant: 'primary' | 'secondary'
}

interface HeroSlide {
  image: string
  headline: string
  description: string
  ctas: HeroCta[]
}

const slides: HeroSlide[] = [
  {
    image: '/images/background/bg2.jpg',
    headline: 'AI-Powered Facility Intelligence',
    description:
      'Transform building operations with predictive analytics and real-time monitoring across your entire facility portfolio.',
    ctas: [
      { label: 'Explore Platform', href: '/platform/afos', variant: 'primary' },
      { label: 'Book a Demo', href: '/contact', variant: 'secondary' },
    ],
  },
  {
    image: '/images/background/bg5.jpg',
    headline: 'Predictive Maintenance, Zero Downtime',
    description:
      'Detect equipment failures before they happen. Reduce maintenance costs and extend asset lifespans with AI-driven insights.',
    ctas: [
      { label: 'Learn More', href: '/solutions', variant: 'primary' },
      { label: 'Case Studies', href: '/case-studies', variant: 'secondary' },
    ],
  },
  {
    image: '/images/background/bg10.jpg',
    headline: 'From Sensor to Insight, One Platform',
    description:
      'Connect thousands of IoT sensors, aggregate data streams, and turn raw signals into actionable facility intelligence.',
    ctas: [
      { label: 'See Solutions', href: '/solutions', variant: 'primary' },
    ],
  },
  {
    image: '/images/background/bg14.jpg',
    headline: 'Smarter Buildings Start Here',
    description:
      'Join leading facility operators across Asia who trust Softgrid to optimize energy, comfort, and operational efficiency.',
    ctas: [
      { label: 'Get Started', href: '/contact', variant: 'primary' },
      { label: 'About Us', href: '/about', variant: 'secondary' },
    ],
  },
]

const AUTOPLAY_INTERVAL = 6000
const PROGRESS_TICK = 50

export function HeroSection(): React.ReactElement {
  const [current, setCurrent] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [progress, setProgress] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const clearTimers = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    if (progressRef.current) clearInterval(progressRef.current)
  }, [])

  const goTo = useCallback(
    (index: number) => {
      clearTimers()
      setCurrent(index)
      setProgress(0)
    },
    [clearTimers],
  )

  const next = useCallback(() => {
    goTo((current + 1) % slides.length)
  }, [current, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length)
  }, [current, goTo])

  useEffect(() => {
    if (!playing) {
      clearTimers()
      return
    }

    const steps = AUTOPLAY_INTERVAL / PROGRESS_TICK

    progressRef.current = setInterval(() => {
      setProgress((p) => Math.min(p + 100 / steps, 100))
    }, PROGRESS_TICK)

    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length)
      setProgress(0)
    }, AUTOPLAY_INTERVAL)

    return clearTimers
  }, [playing, current, clearTimers])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-navy-950">
      {/* Background slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === current ? 'opacity-100 z-[1]' : 'opacity-0 z-0'
          }`}
          aria-hidden={i !== current}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            className={`object-cover ${i === current ? 'hero-slide-zoom' : ''}`}
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Gradient overlays for text readability */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-navy-950/90 via-navy-900/60 to-navy-900/15" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-navy-950/80 via-transparent to-navy-950/30" />

      {/* Content */}
      <div className="relative z-[3] h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-2xl">
            {/* Overline */}
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-primary-400" />
              <span className="text-primary-400 text-xs font-bold uppercase tracking-[3px]">
                AI-Driven Facility Operating System
              </span>
            </div>

            {/* Headline */}
            <div className="relative mb-6" style={{ minHeight: '7rem' }}>
              {slides.map((slide, i) => (
                <h1
                  key={i}
                  className={`text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white leading-[1.1] tracking-[-2px] transition-all duration-700 ${
                    i === current
                      ? 'relative opacity-100 translate-y-0'
                      : 'absolute top-0 left-0 opacity-0 translate-y-4 pointer-events-none'
                  }`}
                >
                  {slide.headline}
                </h1>
              ))}
            </div>

            {/* Description */}
            <div className="relative mb-8" style={{ minHeight: '3.5rem' }}>
              {slides.map((slide, i) => (
                <p
                  key={i}
                  className={`text-base md:text-lg text-slate-300 leading-relaxed max-w-xl transition-all duration-700 delay-100 ${
                    i === current
                      ? 'relative opacity-100 translate-y-0'
                      : 'absolute top-0 left-0 opacity-0 translate-y-4 pointer-events-none'
                  }`}
                >
                  {slide.description}
                </p>
              ))}
            </div>

            {/* CTAs */}
            <div className="relative" style={{ minHeight: '3rem' }}>
              {slides.map((slide, i) => (
                <div
                  key={i}
                  className={`flex flex-wrap gap-4 transition-all duration-700 delay-200 ${
                    i === current
                      ? 'relative opacity-100 translate-y-0'
                      : 'absolute top-0 left-0 opacity-0 translate-y-4 pointer-events-none'
                  }`}
                >
                  {slide.ctas.map((cta) => (
                    <Button
                      key={cta.label}
                      href={cta.href}
                      variant={cta.variant}
                      colorScheme="dark"
                    >
                      {cta.label}
                    </Button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="absolute bottom-0 left-0 right-0 z-[4] pb-8">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between">
          {/* Prev */}
          <button
            type="button"
            onClick={prev}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
            aria-label="Previous slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Center: play/pause + progress dots */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
              aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}
            >
              {playing ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="6,3 20,12 6,21" />
                </svg>
              )}
            </button>

            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  className="relative rounded-full overflow-hidden transition-all duration-300"
                  style={{
                    width: i === current ? 40 : 10,
                    height: 4,
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === current ? 'true' : undefined}
                >
                  <div className="absolute inset-0 bg-white/30 rounded-full" />
                  {i === current && (
                    <div
                      className="absolute inset-y-0 left-0 bg-white rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={next}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
            aria-label="Next slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
