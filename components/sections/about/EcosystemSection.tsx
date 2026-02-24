'use client'

import Image from 'next/image'
import { useInView } from '@/hooks/useInView'

interface Partner {
  name: string
  logo: string
  scale?: string
}

interface PartnerCategory {
  label: string
  partners: Partner[]
}

const categories: PartnerCategory[] = [
  {
    label: 'Government & Agencies',
    partners: [
      { name: 'HDB', logo: '/images/logos/HDB.png' },
      { name: 'BCA', logo: '/images/logos/bca.png', scale: 'scale-[1.5]' },
      { name: 'MND', logo: '/images/logos/MND.png', scale: 'scale-[3.0]' },
      { name: 'JTC', logo: '/images/logos/JTC.png', scale: 'scale-[2.0]' },
      { name: 'NParks', logo: '/images/logos/NPARKS.png', scale: 'scale-[1.2]' },
      { name: 'NRF', logo: '/images/logos/NRF.png' },
    ],
  },
  {
    label: 'Commercial & Industry',
    partners: [
      { name: 'Chevalier', logo: '/images/logos/chevalier.jpeg' },
      { name: 'Midea', logo: '/images/logos/midea.png', scale: 'scale-[1.8]' },
      { name: 'Mandai Wildlife Group', logo: '/images/logos/Mandai.jpeg', scale: 'scale-[1.2]' },
      { name: 'EM Services', logo: '/images/logos/EMSERVICES.png', scale: 'scale-[1.8]' },
      { name: 'CPG FM', logo: '/images/logos/CPGFM.png' },
      { name: 'Tridium', logo: '/images/logos/tridium.png' },
    ],
  },
  {
    label: 'Research & Development',
    partners: [
      { name: 'A*STAR', logo: '/images/logos/ASTAR.png' },
      { name: 'TCOMS', logo: '/images/logos/TCOMS.jpeg' },
    ],
  },
]

interface EcosystemSectionProps {
  variant?: 'dark' | 'darker'
}

export function EcosystemSection({ variant = 'darker' }: EcosystemSectionProps): React.ReactElement {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section className={`${variant === 'dark' ? 'bg-navy-800' : 'bg-navy-900'} py-16 md:py-24`}>
      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Part of the Ecosystem</h2>
          <p className="text-lg text-cyan-400 max-w-2xl mx-auto">
            We work with Singapore&apos;s leading organizations across government, industry, and research.
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((category, catIdx) => (
            <div
              key={category.label}
              className={`transition-all duration-500 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${catIdx * 120}ms` }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 mb-5 text-center">
                {category.label}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {category.partners.map((partner) => (
                  <div
                    key={partner.name}
                    className="bg-white rounded-lg px-5 py-4 flex items-center justify-center hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 w-36 h-20"
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={120}
                      height={60}
                      className={`object-contain max-h-10 w-auto ${partner.scale ?? ''}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
