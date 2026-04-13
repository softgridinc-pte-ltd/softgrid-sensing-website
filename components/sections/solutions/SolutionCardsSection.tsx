'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Activity, Building2, LayoutGrid, Satellite, ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'

import type { ReactNode } from 'react'

interface SolutionCard {
  icon: ReactNode
  kicker: string
  title: string
  description: string
  href: string
  image: string[]
}

const solutions: SolutionCard[] = [
  {
    icon: <Activity className="h-4 w-4" />,
    kicker: 'For lift companies & town councils',
    title: 'Smart Vertical Transport',
    description:
      'BCA-certified monitoring and predictive maintenance for lifts and escalators. From real-time status to AI-driven fault prediction — proven on 10,000+ assets.',
    href: '/solutions/vertical-transport',
    image: ['/images/background/bg8.webp', '/images/background/bg9.webp', '/images/background/bg4.webp'],
  },
  {
    icon: <Building2 className="h-4 w-4" />,
    kicker: 'For building owners & FMs',
    title: 'Smart Building Management',
    description:
      'Unified, brand-agnostic monitoring and control for all your building systems. One dashboard for HVAC, energy, fire, and lighting — regardless of BMS vendor.',
    href: '/solutions/building-management',
    image: ['/images/background/bg17.webp', '/images/background/bg18.webp', '/images/background/bg19.webp'],
  },
  {
    icon: <LayoutGrid className="h-4 w-4" />,
    kicker: 'For managing agents',
    title: 'Smart Facility Operations',
    description:
      'Transform your operations from paper-based and reactive to digital and predictive. AI-powered work orders, asset management, and knowledge at your fingertips.',
    href: '/solutions/facility-operations',
    image: ['/images/background/bg20.webp', '/images/background/bg21.webp', '/images/background/bg22.webp'],
  },
  {
    icon: <Satellite className="h-4 w-4" />,
    kicker: 'For agencies & infrastructure',
    title: 'Infrastructure & Environmental Monitoring',
    description:
      'Satellite-based AI monitoring for coastlines, forests, reservoirs, and large-scale infrastructure — the same platform, at planetary scale.',
    href: '/solutions/infrastructure-environmental',
    image: ['/images/background/bg23.webp', '/images/background/bg24.webp', '/images/background/bg25.webp'],
  },
]

function CardImageCarousel({ images, alt }: { images: string[]; alt: string }): React.ReactElement {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    if (images.length < 2) return
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 4000)
    return () => clearInterval(id)
  }, [images.length])
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className={`object-cover transition-all duration-1000 ease-out group-hover:scale-105 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  )
}

export function SolutionCardsSection(): React.ReactElement {
  return (
    <section className="bg-white pb-20 md:pb-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="space-y-16 md:space-y-24" data-animate-stagger>
          {solutions.map((s, i) => {
            const imageRight = i % 2 === 0
            return (
              <Link
                key={s.title}
                href={s.href}
                aria-label={`Learn more about ${s.title}`}
                data-animate
                className={`group grid items-center gap-8 lg:gap-16 lg:grid-cols-2 ${
                  imageRight ? '' : 'lg:[&>div:first-child]:order-2'
                }`}
              >
                {/* Text */}
                <div>
                  <div className="mb-4 flex items-center gap-2 text-primary-600">
                    {s.icon}
                    <span className="text-xs font-bold uppercase tracking-[2px]">{s.kicker}</span>
                  </div>
                  <h3 className="mb-5 text-3xl md:text-4xl font-bold leading-tight tracking-tight text-navy-900 transition-colors group-hover:text-primary-700">
                    {s.title}
                  </h3>
                  <p className="mb-7 text-base md:text-[17px] leading-[1.8] text-slate-600">
                    {s.description}
                  </p>
                  <div aria-hidden="true" className="inline-flex items-center gap-2 text-base font-semibold text-primary-600">
                    Learn more
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Image */}
                <CardImageCarousel images={s.image} alt={s.title} />
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
