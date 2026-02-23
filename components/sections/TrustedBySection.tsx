'use client'

import { useInView } from '@/hooks/useInView'

const partners = [
  'HDB',
  'BCA',
  'NRF',
  'Chevalier',
  'Midea',
  'A*STAR',
  'SIMTech',
  'Mandai Wildlife Group',
  'JTC',
]

export function TrustedBySection(): React.ReactElement {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section className="bg-navy-800 py-16 md:py-20">
      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-12">
          Trusted by Industry Leaders
        </h2>

        <div
          className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-4xl mx-auto transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {partners.map((partner) => (
            <div
              key={partner}
              className="bg-navy-900/50 border border-navy-700/50 rounded-lg px-4 py-5 flex items-center justify-center hover:border-cyan-500/30 transition-colors duration-300"
            >
              <span className="text-slate-400 text-sm font-medium text-center leading-tight">
                {partner}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-400 text-xs mt-8">
          Partner logos shown as placeholders. Actual logos to be added.
        </p>
      </div>
    </section>
  )
}
