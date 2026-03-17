'use client'

import Link from 'next/link'
import { Activity, Building2, LayoutGrid, Satellite } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

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
      'BCA-certified monitoring and predictive maintenance for lifts and escalators. From real-time status to AI-driven fault prediction \u2014 proven on 10,000+ assets.',
    audience: 'For lift companies, Town Councils & transport authorities',
    icon: <Activity className="w-6 h-6 text-cyan-500" />,
    href: '/solutions/vertical-transport',
    featured: true,
  },
  {
    title: 'Smart Building Management',
    description:
      'Unified, brand-agnostic monitoring and control for all your building systems. One dashboard for HVAC, energy, fire, lighting \u2014 regardless of BMS vendor.',
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
      'Satellite-based AI monitoring for coastlines, forests, reservoirs, and large-scale infrastructure \u2014 the same platform, at planetary scale.',
    audience: 'For government agencies & large-scale asset operators',
    icon: <Satellite className="w-6 h-6 text-cyan-500" />,
    href: '/solutions/infrastructure-environmental',
  },
]

function SolutionCardItem({
  card,
  index,
  isInView,
}: {
  card: SolutionCard
  index: number
  isInView: boolean
}): React.ReactElement {
  return (
    <div
      className={`group bg-navy-800 border rounded-xl p-8 transition-all duration-300 hover:scale-[1.02] ${
        card.featured
          ? 'border-cyan-500/30 shadow-[inset_4px_0_0_0_rgba(0,180,216,0.5)] glow-cyan'
          : 'border-navy-700 hover:border-cyan-500/50'
      } ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
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
  const { ref, isInView } = useInView({ threshold: 0.1 })

  const featuredCard = solutions[0]
  const otherCards = solutions.slice(1)

  return (
    <section className="bg-navy-800 py-16 md:py-24">
      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Featured card — full width */}
        <div className="mb-8">
          <SolutionCardItem card={featuredCard} index={0} isInView={isInView} />
        </div>

        {/* 3-card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {otherCards.map((card, i) => (
            <SolutionCardItem
              key={card.title}
              card={card}
              index={i + 1}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
