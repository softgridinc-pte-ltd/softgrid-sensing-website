import { Activity, Building2, LayoutGrid, Satellite } from 'lucide-react'
import { ImageCard } from '@/components/ui/ImageCard'

import type { ReactNode } from 'react'

interface SolutionCard {
  icon: ReactNode
  kicker: string
  title: string
  description: string
  href: string
  image: string
}

const solutions: SolutionCard[] = [
  {
    icon: <Activity className="h-4 w-4" />,
    kicker: 'For lift companies & town councils',
    title: 'Smart Vertical Transport',
    description:
      'BCA-certified monitoring and predictive maintenance for lifts and escalators. From real-time status to AI-driven fault prediction — proven on 10,000+ assets.',
    href: '/solutions/vertical-transport',
    image: '/images/background/bg3.jpg',
  },
  {
    icon: <Building2 className="h-4 w-4" />,
    kicker: 'For building owners & FMs',
    title: 'Smart Building Management',
    description:
      'Unified, brand-agnostic monitoring and control for all your building systems. One dashboard for HVAC, energy, fire, and lighting — regardless of BMS vendor.',
    href: '/solutions/building-management',
    image: '/images/background/bg15.jpg',
  },
  {
    icon: <LayoutGrid className="h-4 w-4" />,
    kicker: 'For managing agents',
    title: 'Smart Facility Operations',
    description:
      'Transform your operations from paper-based and reactive to digital and predictive. AI-powered work orders, asset management, and knowledge at your fingertips.',
    href: '/solutions/facility-operations',
    image: '/images/background/bg7.jpg',
  },
  {
    icon: <Satellite className="h-4 w-4" />,
    kicker: 'For agencies & infrastructure',
    title: 'Infrastructure & Environmental Monitoring',
    description:
      'Satellite-based AI monitoring for coastlines, forests, reservoirs, and large-scale infrastructure — the same platform, at planetary scale.',
    href: '/solutions/infrastructure-environmental',
    image: '/images/background/bg2.jpg',
  },
]

export function SolutionCardsSection(): React.ReactElement {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div
          data-animate-stagger
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
        >
          {solutions.map((s) => (
            <div key={s.title} data-animate="scale" className="h-full">
              <ImageCard
                image={s.image}
                kicker={s.kicker}
                title={s.title}
                description={s.description}
                href={s.href}
                icon={s.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
