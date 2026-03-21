import Link from 'next/link'
import { Activity, Building2, LayoutGrid, Satellite } from 'lucide-react'

interface SolutionCard {
  title: string
  description: string
  audience: string
  icon: React.ReactNode
  href: string
  accentColor: string
}

const solutions: SolutionCard[] = [
  {
    title: 'Smart Vertical Transport',
    description:
      'BCA-certified monitoring and predictive maintenance for lifts and escalators. From real-time status to AI-driven fault prediction — proven on 10,000+ assets.',
    audience: 'For lift companies, Town Councils & transport authorities',
    icon: <Activity className="w-6 h-6 text-cyan-600" />,
    href: '/solutions/vertical-transport',
    accentColor: 'bg-cyan-500',
  },
  {
    title: 'Smart Building Management',
    description:
      'Unified, brand-agnostic monitoring and control for all your building systems. One dashboard for HVAC, energy, fire, lighting — regardless of BMS vendor.',
    audience: 'For building owners & facility managers',
    icon: <Building2 className="w-6 h-6 text-cyan-600" />,
    href: '/solutions/building-management',
    accentColor: 'bg-teal-500',
  },
  {
    title: 'Smart Facility Operations',
    description:
      'Transform your operations from paper-based and reactive to digital and predictive. AI-powered work orders, asset management, and knowledge at your fingertips.',
    audience: 'For managing agents & property management companies',
    icon: <LayoutGrid className="w-6 h-6 text-cyan-600" />,
    href: '/solutions/facility-operations',
    accentColor: 'bg-amber-500',
  },
  {
    title: 'Infrastructure & Environmental',
    description:
      'Satellite-based AI monitoring for coastlines, forests, reservoirs, and large-scale infrastructure — the same platform, at planetary scale.',
    audience: 'For government agencies & large-scale asset operators',
    icon: <Satellite className="w-6 h-6 text-cyan-600" />,
    href: '/solutions/infrastructure-environmental',
    accentColor: 'bg-emerald-500',
  },
]

export function SolutionCardsSection(): React.ReactElement {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div data-animate-stagger className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((card) => (
            <div key={card.title} data-animate className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              {/* Top accent bar */}
              <div className={`h-1 ${card.accentColor}`} />
              <div className="p-8">
                <div className="w-12 h-12 bg-cyan-50 border border-cyan-100 rounded-lg flex items-center justify-center mb-5">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">{card.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-4">{card.description}</p>
                <p className="text-sm text-slate-500 italic mb-6">{card.audience}</p>
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-1 text-cyan-600 hover:text-cyan-700 font-medium transition-colors duration-200"
                >
                  Learn More <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
