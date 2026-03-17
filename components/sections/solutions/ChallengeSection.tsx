'use client'

import { useInView } from '@/hooks/useInView'

interface Challenge {
  title: string
  description: string
}

interface ChallengeSectionProps {
  title?: string
  subtitle?: string
  challenges: Challenge[]
}

export function ChallengeSection({
  title = 'The Challenge',
  subtitle,
  challenges,
}: ChallengeSectionProps): React.ReactElement {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section className="bg-navy-800 py-16 md:py-24">
      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-[3px] text-slate-500">{title}</span>
          {subtitle && <p className="text-lg text-slate-400 mt-3 max-w-2xl mx-auto">{subtitle}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {challenges.map((challenge, i) => (
            <div
              key={challenge.title}
              className={`bg-navy-900 border border-navy-700 rounded-xl p-6 transition-all duration-300 hover:border-red-900/30 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-red-500/60 mt-2 flex-shrink-0" />
                <h3 className="text-white font-semibold">{challenge.title}</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed ml-5">{challenge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
