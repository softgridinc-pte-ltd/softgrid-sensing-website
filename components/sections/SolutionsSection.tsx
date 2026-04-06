'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Activity, Building2, LayoutGrid, Satellite, ArrowRight } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'

import type { ReactNode } from 'react'

interface Solution {
  icon: ReactNode
  kicker: string
  title: string
  description: string
  href: string
  image: string
}

const solutions: Solution[] = [
  {
    icon: <Activity className="w-4 h-4" />,
    kicker: 'Vertical Transport',
    title: 'Smart Vertical Transport',
    description:
      'BCA-certified monitoring and predictive maintenance for lifts and escalators. Proven on 10,000+ assets.',
    href: '/solutions/vertical-transport',
    image: '/images/background/bg16.jpg',
  },
  {
    icon: <Building2 className="w-4 h-4" />,
    kicker: 'Building Management',
    title: 'Smart Building Management',
    description:
      'Unified, brand-agnostic monitoring and control for all your building systems \u2014 regardless of BMS vendor.',
    href: '/solutions/building-management',
    image: '/images/background/bg6.jpg',
  },
  {
    icon: <LayoutGrid className="w-4 h-4" />,
    kicker: 'Facility Operations',
    title: 'Smart Facility Operations',
    description:
      'AI-powered work orders, asset management, and knowledge base for managing agents and property companies.',
    href: '/solutions/facility-operations',
    image: '/images/background/bg11.jpg',
  },
  {
    icon: <Satellite className="w-4 h-4" />,
    kicker: 'Infrastructure',
    title: 'Infrastructure & Environmental',
    description:
      'Satellite-based AI monitoring for coastlines, forests, reservoirs, and large-scale infrastructure.',
    href: '/solutions/infrastructure-environmental',
    image: '/images/background/bg12.jpg',
  },
]

export function SolutionsSection(): React.ReactElement {
  return (
    <section id="solutions" className="bg-slate-50 py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern" />
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div data-animate>
          <SectionHeader
            title="Solutions for Every Domain"
            subtitle="Deep expertise across vertical transport, facilities, and infrastructure."
            colorScheme="light"
          />
        </div>

        <div data-animate-stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {solutions.map((solution) => (
            <Link
              key={solution.title}
              href={solution.href}
              data-animate="scale"
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl"
            >
              {/* Image area */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-200">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Bottom legibility gradient */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/40 to-transparent" />
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-7 md:p-9">
                {/* Kicker */}
                <div className="mb-4 flex items-center gap-2 text-primary-600">
                  {solution.icon}
                  <span className="text-sm font-semibold uppercase tracking-wider">
                    {solution.kicker}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mb-4 text-2xl font-semibold leading-snug text-navy-900 transition-colors group-hover:text-primary-700">
                  {solution.title}
                </h3>

                {/* Description */}
                <p className="flex-1 text-base leading-relaxed text-slate-600">
                  {solution.description}
                </p>

                {/* Learn more link */}
                <div className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-primary-600">
                  Learn more
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
