'use client'

import { Activity, Building2, LayoutGrid, Satellite } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { useScrollRevealGroup } from '@/hooks/useScrollRevealGroup'

import type { ReactNode } from 'react'

interface Solution {
  icon: ReactNode
  title: string
  description: string
  href: string
}

const solutions: Solution[] = [
  {
    icon: <Activity className="w-6 h-6 text-cyan-500" />,
    title: 'Smart Vertical Transport',
    description:
      'BCA-certified monitoring and predictive maintenance for lifts and escalators. Proven on 10,000+ assets.',
    href: '/solutions/vertical-transport',
  },
  {
    icon: <Building2 className="w-6 h-6 text-cyan-500" />,
    title: 'Smart Building Management',
    description:
      'Unified, brand-agnostic monitoring and control for all your building systems \u2014 regardless of BMS vendor.',
    href: '/solutions/building-management',
  },
  {
    icon: <LayoutGrid className="w-6 h-6 text-cyan-500" />,
    title: 'Smart Facility Operations',
    description:
      'AI-powered work orders, asset management, and knowledge base for managing agents and property companies.',
    href: '/solutions/facility-operations',
  },
  {
    icon: <Satellite className="w-6 h-6 text-cyan-500" />,
    title: 'Infrastructure & Environmental',
    description:
      'Satellite-based AI monitoring for coastlines, forests, reservoirs, and large-scale infrastructure.',
    href: '/solutions/infrastructure-environmental',
  },
]

export function SolutionsSection(): React.ReactElement {
  const { containerRef, getItemProps } = useScrollRevealGroup()

  return (
    <section className="bg-navy-900 py-16 md:py-24">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeader
          title="Solutions for Every Domain"
          subtitle="Deep expertise across vertical transport, facilities, and infrastructure."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {solutions.map((solution, i) => (
            <div
              key={solution.title}
              className={`h-full ${getItemProps(i).className}`}
              style={getItemProps(i).style}
            >
              <Card className="p-6 md:p-8 h-full flex flex-col">
                <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/20 rounded-lg flex items-center justify-center mb-5">
                  {solution.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {solution.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">
                  {solution.description}
                </p>
                <Button href={solution.href} variant="ghost" className="text-sm self-start mt-5">
                  Learn More &rarr;
                </Button>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
