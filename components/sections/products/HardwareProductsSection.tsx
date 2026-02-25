'use client'

import { Cpu, HardDrive } from 'lucide-react'
import { useInView } from '@/hooks/useInView'
import { ProductCard } from '@/components/sections/products/ProductCard'

const hardwareProducts = [
  {
    icon: <Cpu className="w-5 h-5 text-cyan-500" />,
    badge: 'Lift Monitoring Device',
    title: 'LMD Series',
    variants: 'LMD6000 · LMDC',
    description:
      'Non-intrusive IoT sensors for elevator monitoring. Edge processing, 4G connectivity, resilient operation even during network outages.',
    href: '/products/hardware',
  },
  {
    icon: <HardDrive className="w-5 h-5 text-cyan-500" />,
    badge: 'Lift Event Recorder',
    title: 'Lift BlackBox (LBB)',
    description:
      'Records elevator events for incident analysis, compliance documentation, and dispute resolution. Like a flight recorder for lifts.',
    href: '/products/hardware',
  },
]

export function HardwareProductsSection(): React.ReactElement {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section className="bg-navy-900 py-16 md:py-24">
      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-10">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-[0.2em]">
            Hardware
          </span>
          <div className="flex-1 h-px bg-navy-700" />
        </div>

        {/* 2-card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hardwareProducts.map((product, i) => (
            <ProductCard
              key={product.title}
              icon={product.icon}
              badge={product.badge}
              title={product.title}
              variants={product.variants}
              description={product.description}
              href={product.href}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
