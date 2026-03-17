'use client'

import { useInView } from '@/hooks/useInView'

interface Benefit {
  title: string
  description: string
}

interface BenefitsSectionProps {
  benefits: Benefit[]
}

export function BenefitsSection({ benefits }: BenefitsSectionProps): React.ReactElement {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section className="bg-navy-900 py-16 md:py-24">
      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-[3px] text-cyan-400">Key Benefits</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <div
              key={benefit.title}
              className={`bg-navy-800 border border-navy-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
