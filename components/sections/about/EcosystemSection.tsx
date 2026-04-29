'use client'

import Image from 'next/image'
import type { CSSProperties } from 'react'

interface Partner {
  name: string
  logo: string
  scale?: string
}

interface PartnerCategory {
  label: string
  partners: Partner[]
}

const MARQUEE_THRESHOLD = 6
const SECONDS_PER_LOGO = 4

const categories: PartnerCategory[] = [
  {
    label: 'Government & Agencies',
    partners: [
      { name: 'HDB', logo: '/images/logos/HDB.png', scale: 'scale-[1.1]' },
      { name: 'BCA', logo: '/images/logos/bca.png', scale: 'scale-[1.3]' },
      { name: 'MND', logo: '/images/logos/MND.png', scale: 'scale-[3.0]' },
      { name: 'JTC', logo: '/images/logos/JTC.png', scale: 'scale-[2.0]' },
      { name: 'NParks', logo: '/images/logos/NPARKS.png', scale: 'scale-[1.2]' },
      { name: 'NRF', logo: '/images/logos/NRF.png' },
    ],
  },
  {
    label: 'Commercial & Industry',
    partners: [
      { name: 'Changi Airport Group', logo: '/images/logos/CAG.png', scale: 'scale-[1.5]' },
      { name: 'Chevalier', logo: '/images/logos/chevalier.jpeg' },
      { name: 'Midea', logo: '/images/logos/midea.png', scale: 'scale-[1.8]' },
      { name: 'Mandai Wildlife Group', logo: '/images/logos/Mandai.jpeg', scale: 'scale-[1.2]' },
      { name: 'EM Services', logo: '/images/logos/EMSERVICES.png', scale: 'scale-[1.8]' },
      { name: 'CPG FM', logo: '/images/logos/CPGFM.png', scale: 'scale-[1.2]' },
      { name: 'Guthrie Engineering', logo: '/images/logos/guthrie.png', scale: 'scale-[1.6]' },
      { name: 'Huawei', logo: '/images/logos/Huawei.png' },
      { name: 'NEC', logo: '/images/logos/NEC.png', scale: 'scale-[0.7]' },
      { name: 'Planet Labs', logo: '/images/logos/planet.png', scale: 'scale-[0.9]' },
      { name: 'Tridium', logo: '/images/logos/tridium.png', scale: 'scale-[1.2]' },
    ],
  },
  {
    label: 'Research & Development',
    partners: [
      { name: 'A*STAR', logo: '/images/logos/ASTAR.png' },
      { name: 'TCOMS', logo: '/images/logos/TCOMS.jpeg', scale: 'scale-[1.6]' },
    ],
  },
]

interface EcosystemSectionProps {
  variant?: 'dark' | 'darker' | 'light'
}

interface PartnerCardProps {
  partner: Partner
  cardClass: string
  ariaHidden?: boolean
}

function PartnerCard({ partner, cardClass, ariaHidden }: PartnerCardProps): React.ReactElement {
  return (
    <div className={cardClass} aria-hidden={ariaHidden || undefined}>
      <Image
        src={partner.logo}
        alt={ariaHidden ? '' : partner.name}
        width={140}
        height={70}
        className={`object-contain max-h-12 md:max-h-14 w-auto ${partner.scale ?? ''}`}
      />
    </div>
  )
}

interface RowProps {
  partners: Partner[]
  cardClass: string
}

function StaticRow({ partners, cardClass }: RowProps): React.ReactElement {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5 md:gap-6">
      {partners.map((p) => (
        <PartnerCard key={p.name} partner={p} cardClass={cardClass} />
      ))}
    </div>
  )
}

function MarqueeRow({ partners, cardClass }: RowProps): React.ReactElement {
  const duration = Math.max(30, partners.length * SECONDS_PER_LOGO)
  const trackStyle = { '--marquee-duration': `${duration}s` } as CSSProperties

  return (
    <div className="logo-marquee-mask overflow-hidden">
      <div
        className="logo-marquee-track flex items-center gap-5 md:gap-6"
        style={trackStyle}
      >
        {partners.map((p) => (
          <PartnerCard key={`a-${p.name}`} partner={p} cardClass={cardClass} />
        ))}
        {partners.map((p) => (
          <div key={`b-${p.name}`} className="logo-marquee-clone">
            <PartnerCard partner={p} cardClass={cardClass} ariaHidden />
          </div>
        ))}
      </div>
    </div>
  )
}

export function EcosystemSection({ variant = 'darker' }: EcosystemSectionProps): React.ReactElement {
  const isLight = variant === 'light'

  const bgClass = isLight ? 'bg-white' : variant === 'dark' ? 'bg-navy-800' : 'bg-navy-900'
  const headingColor = isLight ? 'text-navy-900' : 'text-white'
  const subtitleColor = isLight ? 'text-navy-600' : 'text-primary-400'
  const labelColor = isLight ? 'text-primary-600' : 'text-primary-400'
  const cardClass = isLight
    ? 'bg-white border border-slate-200 rounded-lg px-6 py-5 flex items-center justify-center shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 w-40 h-24 md:w-44 md:h-26 shrink-0'
    : 'bg-white border border-gray-200/10 rounded-lg px-6 py-5 flex items-center justify-center shadow-md shadow-black/10 hover:shadow-xl hover:shadow-primary-500/10 hover:scale-105 transition-all duration-300 w-40 h-24 md:w-44 md:h-26 shrink-0'

  return (
    <section className={`${bgClass} py-16 md:py-24`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div data-animate className="text-center mb-12 md:mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold ${headingColor} mb-4`}>Part of the Ecosystem</h2>
          <p className={`text-lg ${subtitleColor} max-w-2xl mx-auto`}>
            We work with Singapore&apos;s leading organizations across government, industry, and research.
          </p>
        </div>

        <div data-animate-stagger className="space-y-12">
          {categories.map((category) => {
            const useMarquee = category.partners.length > MARQUEE_THRESHOLD

            return (
              <div key={category.label} data-animate>
                <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${labelColor} mb-5 text-center`}>
                  {category.label}
                </p>
                {useMarquee ? (
                  <MarqueeRow partners={category.partners} cardClass={cardClass} />
                ) : (
                  <StaticRow partners={category.partners} cardClass={cardClass} />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
