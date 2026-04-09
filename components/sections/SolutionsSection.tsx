import { Activity, Building2, LayoutGrid, Satellite } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ImageCard } from '@/components/ui/ImageCard'

import type { ReactNode } from 'react'

interface Solution {
  icon: ReactNode
  kicker: string
  title: string
  description: string
  href: string
  image: string | string[]
}

const solutions: Solution[] = [
  {
    icon: <Activity className="h-4 w-4" />,
    kicker: 'Vertical Transport',
    title: 'Smart Vertical Transport',
    description:
      'BCA-certified monitoring and predictive maintenance for lifts and escalators. Proven on 10,000+ assets.',
    href: '/solutions/vertical-transport',
    image: ['/images/background/bg8.png', '/images/background/bg9.png', '/images/background/bg4.jpg'],
  },
  {
    icon: <Building2 className="h-4 w-4" />,
    kicker: 'Building Management',
    title: 'Smart Building Management',
    description:
      'Unified, brand-agnostic monitoring and control for all your building systems \u2014 regardless of BMS vendor.',
    href: '/solutions/building-management',
    image: ['/images/background/bg17.jpg', '/images/background/bg18.jpg', '/images/background/bg19.jpg'],
  },
  {
    icon: <LayoutGrid className="h-4 w-4" />,
    kicker: 'Facility Operations',
    title: 'Smart Facility Operations',
    description:
      'AI-powered work orders, asset management, and knowledge base for managing agents and property companies.',
    href: '/solutions/facility-operations',
    image: ['/images/background/bg20.jpg', '/images/background/bg21.jpg', '/images/background/bg22.jpg'],
  },
  {
    icon: <Satellite className="h-4 w-4" />,
    kicker: 'Infrastructure',
    title: 'Infrastructure & Environmental',
    description:
      'Satellite-based AI monitoring for coastlines, forests, reservoirs, and large-scale infrastructure.',
    href: '/solutions/infrastructure-environmental',
    image: ['/images/background/bg23.jpg', '/images/background/bg24.jpg', '/images/background/bg25.jpg'],
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
