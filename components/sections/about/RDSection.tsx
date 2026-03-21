import { Code2, Handshake, Award } from 'lucide-react'
import { Card } from '@/components/ui/Card'

import type { ReactNode } from 'react'

interface Pillar {
  icon: ReactNode
  title: string
  description: string
}

const pillars: Pillar[] = [
  {
    icon: <Code2 className="w-6 h-6 text-cyan-500" />,
    title: 'In-House Development',
    description:
      'Our hardware and software are designed and built by our team in Singapore. Full control from sensor to cloud.',
  },
  {
    icon: <Handshake className="w-6 h-6 text-cyan-500" />,
    title: 'Research Partnerships',
    description:
      'We collaborate with A*STAR and SIMTech on AI development, bringing research-grade technology to production systems.',
  },
  {
    icon: <Award className="w-6 h-6 text-cyan-500" />,
    title: 'Government Backing',
    description:
      'Awarded NRF Cities of Tomorrow programme grant—recognition of our innovation and potential.',
  },
]

const stats = [
  { value: '85%+', label: 'AI Accuracy' },
  { value: 'NRF', label: 'Grant Awarded' },
  { value: 'BCA', label: 'RM&D Certified' },
]

export function RDSection(): React.ReactElement {
  return (
    <section className="bg-navy-800 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div data-animate className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">R&D at Our Core</h2>
          <p className="text-lg text-cyan-400 max-w-2xl mx-auto">
            We&apos;re a technology company, not a systems integrator.
          </p>
        </div>

        {/* Three pillars */}
        <div data-animate-stagger className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {pillars.map((pillar) => (
            <div key={pillar.title} data-animate>
              <Card className="p-8 h-full">
                <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/20 rounded-lg flex items-center justify-center mb-5">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{pillar.title}</h3>
                <p className="text-slate-300 leading-relaxed">{pillar.description}</p>
              </Card>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div
          data-animate
          className="flex flex-col sm:flex-row items-stretch justify-center divide-y sm:divide-y-0 sm:divide-x divide-navy-700/50 bg-navy-900/50 border border-navy-700 rounded-xl"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex-1 px-8 py-6 text-center">
              <p className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1">{stat.value}</p>
              <p className="text-slate-400 text-sm uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
