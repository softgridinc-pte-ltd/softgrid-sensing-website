'use client'

import { ShieldCheck } from 'lucide-react'
import { StatBlock } from '@/components/ui/StatBlock'

const stats = [
  { value: '10,000+', label: 'Lifts Monitored' },
  { value: '>85%', label: 'Prediction Accuracy' },
  { value: '8+', label: 'Years in Singapore' },
  { value: 'NRF', label: 'Grant Awarded' },
  { value: '4,000+', label: 'HDB Blocks' },
]

export function StatsSection(): React.ReactElement {
  return (
    <section
      className="bg-navy-800 py-12 md:py-16 relative overflow-hidden border-t border-b"
      style={{
        borderColor: 'rgba(0, 180, 216, 0.08)',
      }}
    >
      {/* Subtle center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        {/* Number stats row */}
        <div data-animate-stagger className="flex flex-col sm:flex-row items-stretch justify-center divide-y sm:divide-y-0 sm:divide-x divide-navy-700/50">
          {stats.map((stat) => (
            <div
              key={stat.label}
              data-animate
              className="flex-1 px-6 md:px-10 py-6 sm:py-4"
            >
              <StatBlock
                value={stat.value}
                label={stat.label}
              />
            </div>
          ))}
        </div>

        {/* BCA Certified badge */}
        <div
          data-animate
          className="flex justify-center mt-10"
        >
          <div className="inline-flex items-center gap-2.5 border border-cyan-500/20 bg-cyan-500/5 rounded-full px-5 py-2.5">
            <ShieldCheck className="w-4.5 h-4.5 text-cyan-400" strokeWidth={2} />
            <span className="text-sm font-semibold text-cyan-300 uppercase tracking-wider">
              BCA Certified
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
