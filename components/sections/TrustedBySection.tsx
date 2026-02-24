'use client'

import Image from 'next/image'
import { useInView } from '@/hooks/useInView'

interface Partner {
  name: string
  logo: string
  scale?: string
}

const partners: Partner[] = [
  { name: 'HDB', logo: '/images/logos/HDB.png' },
  { name: 'BCA', logo: '/images/logos/bca.png', scale: 'scale-[1.5]' },
  { name: 'MND', logo: '/images/logos/MND.png', scale: 'scale-[2.0]' },
  { name: 'Chevalier', logo: '/images/logos/chevalier.jpeg' },
  { name: 'NParks', logo: '/images/logos/NPARKS.png', scale: 'scale-[1.2]' },
  { name: 'Midea', logo: '/images/logos/midea.png', scale: 'scale-[1.8]' },
  { name: 'A*STAR', logo: '/images/logos/ASTAR.png' },
  { name: 'Mandai Wildlife Group', logo: '/images/logos/Mandai.jpeg', scale: 'scale-[1.2]' },
  { name: 'JTC', logo: '/images/logos/JTC.png', scale: 'scale-[2.0]' },
  { name: 'EM Services', logo: '/images/logos/EMSERVICES.png', scale: 'scale-[1.8]' },
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
          className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-5xl mx-auto transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-white rounded-lg px-4 py-5 flex items-center justify-center hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 aspect-[3/2]"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={60}
                className={`object-contain max-h-10 md:max-h-12 w-auto ${partner.scale ?? ''}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
