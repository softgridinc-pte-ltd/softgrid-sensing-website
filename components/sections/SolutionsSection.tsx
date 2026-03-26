'use client'

import { Activity, Building2, LayoutGrid, Satellite } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'

import type { ReactNode } from 'react'

interface Solution {
  icon: ReactNode
  title: string
  description: string
  href: string
}

const solutions: Solution[] = [
  {
    icon: <Activity className="w-6 h-6 text-primary-600" />,
    title: 'Smart Vertical Transport',
    description:
      'BCA-certified monitoring and predictive maintenance for lifts and escalators. Proven on 10,000+ assets.',
    href: '/solutions/vertical-transport',
  },
  {
    icon: <Building2 className="w-6 h-6 text-primary-600" />,
    title: 'Smart Building Management',
    description:
      'Unified, brand-agnostic monitoring and control for all your building systems \u2014 regardless of BMS vendor.',
    href: '/solutions/building-management',
  },
  {
    icon: <LayoutGrid className="w-6 h-6 text-primary-600" />,
    title: 'Smart Facility Operations',
    description:
      'AI-powered work orders, asset management, and knowledge base for managing agents and property companies.',
    href: '/solutions/facility-operations',
  },
  {
    icon: <Satellite className="w-6 h-6 text-primary-600" />,
    title: 'Infrastructure & Environmental',
    description:
      'Satellite-based AI monitoring for coastlines, forests, reservoirs, and large-scale infrastructure.',
    href: '/solutions/infrastructure-environmental',
  },
]

export function SolutionsSection(): React.ReactElement {
  return (
    <section className="bg-slate-50 py-16 md:py-24 relative overflow-hidden">
      {/* Subtle dot pattern */}
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
            <div
              key={solution.title}
              data-animate="scale"
              className="h-full"
            >
              <Card colorScheme="light" className="p-6 md:p-8 h-full flex flex-col">
                <div className="w-12 h-12 bg-primary-50 border border-primary-100 rounded-lg flex items-center justify-center mb-5">
                  {solution.icon}
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-3">
                  {solution.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-1">
                  {solution.description}
                </p>
                <Button href={solution.href} variant="ghost" colorScheme="light" className="text-sm self-start mt-5">
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
