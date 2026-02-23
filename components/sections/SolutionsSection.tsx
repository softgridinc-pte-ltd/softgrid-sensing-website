'use client'

import { ArrowUpDown, Building2, Box, Leaf } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { useInView } from '@/hooks/useInView'

import type { ReactNode } from 'react'

interface Solution {
  icon: ReactNode
  title: string
  description: string
  href: string
}

const solutions: Solution[] = [
  {
    icon: <ArrowUpDown className="w-6 h-6 text-cyan-500" />,
    title: 'Lift Monitoring & Compliance',
    description:
      'BCA-certified remote monitoring and predictive maintenance for lifts. From edge sensors to compliance reports.',
    href: '/solutions/lift-monitoring',
  },
  {
    icon: <Building2 className="w-6 h-6 text-cyan-500" />,
    title: 'Smart Facility Management',
    description:
      'Unified platform for building operations\u2014work orders, asset tracking, energy monitoring, and more.',
    href: '/solutions/facility-management',
  },
  {
    icon: <Box className="w-6 h-6 text-cyan-500" />,
    title: 'Digital Twin & Visualization',
    description:
      'Real-time simulation and structural health monitoring for high-value infrastructure assets.',
    href: '/solutions/digital-twin',
  },
  {
    icon: <Leaf className="w-6 h-6 text-cyan-500" />,
    title: 'Environmental Monitoring',
    description:
      'Remote sensing and AI analysis for land cover monitoring and environmental compliance.',
    href: '/solutions/environmental-monitoring',
  },
]

export function SolutionsSection(): React.ReactElement {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section className="bg-navy-900 py-16 md:py-24">
      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeader
          title="Solutions for Every Domain"
          subtitle="Deep expertise across vertical transport, facilities, and infrastructure."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, i) => (
            <div
              key={solution.title}
              className={`transition-all duration-500 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Card className="p-6 md:p-8 h-full flex flex-col">
                <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/20 rounded-lg flex items-center justify-center mb-5">
                  {solution.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {solution.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
                  {solution.description}
                </p>
                <Button href={solution.href} variant="ghost" className="text-sm self-start">
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
