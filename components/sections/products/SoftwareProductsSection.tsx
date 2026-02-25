'use client'

import { Monitor, ShieldCheck, LayoutGrid, Building2, Box } from 'lucide-react'
import { useInView } from '@/hooks/useInView'
import { ProductCard } from '@/components/sections/products/ProductCard'

const softwareProducts = [
  {
    icon: <Monitor className="w-5 h-5 text-cyan-500" />,
    badge: 'Public Sector',
    title: 'LTMS',
    subtitle: 'Lift Telemonitoring System',
    description:
      'Monitoring platform for public sector lift operations. Real-time status, alert management, and analytics.',
    proofPoint: 'Deployed on 10,000+ HDB lifts',
    href: '/products/software',
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-cyan-500" />,
    badge: 'Private Sector',
    title: 'RM&D System',
    subtitle: 'Remote Monitoring & Diagnostics',
    description:
      'BCA-certified compliance solution for private sector lift monitoring. Predictive maintenance and automated reporting.',
    proofPoint: 'BCA Sandbox Certified',
    href: '/products/software',
  },
  {
    icon: <LayoutGrid className="w-5 h-5 text-cyan-500" />,
    badge: 'Facility Management',
    title: 'IRIS',
    subtitle: 'Integrated Resource & Information System',
    description:
      'CMMS platform for facility management — work orders, asset tracking, and mobile workforce management.',
    href: '/products/software',
  },
  {
    icon: <Building2 className="w-5 h-5 text-cyan-500" />,
    badge: 'Building Management',
    title: 'Cloud BMS',
    subtitle: 'Cloud Building Management System',
    description:
      'Unified monitoring and control for building systems. Integrates with Tridium Niagara, Midea, and standard protocols.',
    href: '/products/software',
  },
  {
    icon: <Box className="w-5 h-5 text-cyan-500" />,
    badge: 'Visualization',
    title: 'Digital Twin Platform',
    subtitle: 'Web-Based Digital Twin',
    description:
      'Real-time 3D visualization and FEA powered by Unreal Engine. 300,000+ data updates per second, streamed to any browser.',
    href: '/products/software',
  },
]

export function SoftwareProductsSection(): React.ReactElement {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section className="bg-navy-800 py-16 md:py-24">
      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-10">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-[0.2em]">
            Software
          </span>
          <div className="flex-1 h-px bg-navy-700" />
        </div>

        {/* 3+2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {softwareProducts.map((product, i) => (
            <ProductCard
              key={product.title}
              icon={product.icon}
              badge={product.badge}
              title={product.title}
              subtitle={product.subtitle}
              description={product.description}
              proofPoint={product.proofPoint}
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
