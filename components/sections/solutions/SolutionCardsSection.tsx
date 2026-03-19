'use client'

import Link from 'next/link'
import { Activity, Building2, LayoutGrid, Satellite } from 'lucide-react'
import { useScrollRevealGroup } from '@/hooks/useScrollRevealGroup'

interface SolutionCard {
  title: string
  description: string
  audience: string
  icon: React.ReactNode
  href: string
  featured?: boolean
}

const solutions: SolutionCard[] = [
  {
    title: 'Smart Vertical Transport',
    description:
      'BCA-certified monitoring and predictive maintenance for lifts and escalators. From real-time status to AI-driven fault prediction — proven on 10,000+ assets.',
    audience: 'For lift companies, Town Councils & transport authorities',
    icon: <Activity className="w-6 h-6 text-cyan-500" />,
    href: '/solutions/vertical-transport',
    featured: true,
  },
  {
    title: 'Smart Building Management',
    description:
      'Unified, brand-agnostic monitoring and control for all your building systems. One dashboard for HVAC, energy, fire, lighting — regardless of BMS vendor.',
    audience: 'For building owners & facility managers',
    icon: <Building2 className="w-6 h-6 text-cyan-500" />,
    href: '/solutions/building-management',
  },
  {
    title: 'Smart Facility Operations',
    description:
      'Transform your operations from paper-based and reactive to digital and predictive. AI-powered work orders, asset management, and knowledge at your fingertips.',
    audience: 'For managing agents & property management companies',
    icon: <LayoutGrid className="w-6 h-6 text-cyan-500" />,
    href: '/solutions/facility-operations',
  },
  {
    title: 'Infrastructure & Environmental',
    description:
      'Satellite-based AI monitoring for coastlines, forests, reservoirs, and large-scale infrastructure — the same platform, at planetary scale.',
    audience: 'For government agencies & large-scale asset operators',
    icon: <Satellite className="w-6 h-6 text-cyan-500" />,
    href: '/solutions/infrastructure-environmental',
  },
]

function SolutionCardItem({ card }: { card: SolutionCard }): React.ReactElement {
  return (
    <div
      className={`group bg-navy-800 border rounded-xl p-8 hover:scale-[1.02] ${
        card.featured
          ? 'border-cyan-500/30 shadow-[inset_4px_0_0_0_rgba(0,180,216,0.5)] glow-cyan'
          : 'border-navy-700 hover:border-cyan-500/50'
      }`}
    >
      <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/20 rounded-lg flex items-center justify-center mb-5">
        {card.icon}
      </div>

      <h3 className="text-xl font-semibold text-white mb-3">{card.title}</h3>

      <p className="text-slate-400 leading-relaxed mb-4">{card.description}</p>

      <p className="text-sm text-cyan-400 italic mb-6">{card.audience}</p>

      <Link
        href={card.href}
        className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200"
      >
        Learn More
        <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
      </Link>
    </div>
  )
}

export function SolutionCardsSection(): React.ReactElement {
  const { containerRef, getItemProps } = useScrollRevealGroup()

  const featuredCard = solutions[0]
  const otherCards = solutions.slice(1)

  return (
    <section className="bg-navy-800 py-16 md:py-24">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Featured card — full width */}
        <div className={`mb-8 ${getItemProps(0).className}`} style={getItemProps(0).style}>
          <SolutionCardItem card={featuredCard} />
        </div>

        {/* 3-card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {otherCards.map((card, i) => (
            <div key={card.title} className={getItemProps(i + 1).className} style={getItemProps(i + 1).style}>
              <SolutionCardItem card={card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
