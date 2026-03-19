'use client'

import { Building2, Landmark, Wrench, TreePine, Building, HardHat } from 'lucide-react'
import { useScrollRevealGroup } from '@/hooks/useScrollRevealGroup'

const industries = [
  { icon: <Building2 className="w-8 h-8 text-cyan-500" />, label: 'Public Housing' },
  { icon: <Landmark className="w-8 h-8 text-cyan-500" />, label: 'Commercial Buildings' },
  { icon: <Wrench className="w-8 h-8 text-cyan-500" />, label: 'Lift Companies' },
  { icon: <TreePine className="w-8 h-8 text-cyan-500" />, label: 'Tourism & Attractions' },
  { icon: <Building className="w-8 h-8 text-cyan-500" />, label: 'Government Agencies' },
  { icon: <HardHat className="w-8 h-8 text-cyan-500" />, label: 'Infrastructure' },
]

export function IndustriesSection(): React.ReactElement {
  const { containerRef, getItemProps } = useScrollRevealGroup()

  return (
    <section className="bg-navy-900 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 md:mb-16">
          Industries We Serve
        </h2>

        <div ref={containerRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {industries.map((item, i) => (
            <div
              key={item.label}
              className={`flex flex-col items-center text-center ${getItemProps(i).className}`}
              style={getItemProps(i).style}
            >
              <div className="mb-3">{item.icon}</div>
              <span className="text-sm text-slate-400">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
