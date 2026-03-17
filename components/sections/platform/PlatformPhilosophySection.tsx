'use client'

import { Globe, Layers, RefreshCw } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

interface Differentiator {
  icon: React.ReactNode
  title: string
  description: string
}

const differentiators: Differentiator[] = [
  {
    icon: <Globe className="w-6 h-6 text-cyan-500" />,
    title: 'Brand-Agnostic, Source-Agnostic',
    description:
      'AFOS sits above your existing BMS \u2014 Siemens, Tridium, Honeywell, Midea. It ingests data from any source, any protocol, any vendor. No lock-in.',
  },
  {
    icon: <Layers className="w-6 h-6 text-cyan-500" />,
    title: 'Full-Stack Self-Built',
    description:
      'From edge hardware to cloud AI to mobile apps \u2014 every layer is designed and built by Softgrid. No third-party stitching. One team, one codebase, one architecture.',
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-cyan-500" />,
    title: 'Closed-Loop by Design',
    description:
      'Detection \u2192 Prediction \u2192 Action \u2192 Learning. Every insight feeds back into the system. The platform doesn\u2019t just monitor \u2014 it gets smarter over time.',
  },
]

export function PlatformPhilosophySection(): React.ReactElement {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section className="bg-navy-800 py-16 md:py-24">
      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-10">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-[0.2em]">
            What Makes AFOS a Platform
          </span>
          <div className="flex-1 h-px bg-navy-700" />
        </div>

        {/* Philosophy text */}
        <div className="max-w-3xl mb-12">
          <p className="text-lg text-slate-300 leading-relaxed">
            Most facility management tools are collections of disconnected products marketed as a &ldquo;platform.&rdquo;
            AFOS is different. It&apos;s a unified core that every Softgrid product runs on &mdash; shared data layer,
            shared intelligence, shared workflows. When you add a product, it doesn&apos;t just coexist &mdash; it
            connects to everything else from day one.
          </p>
        </div>

        {/* Differentiator cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {differentiators.map((item, i) => (
            <div
              key={item.title}
              className={`bg-navy-900 border border-navy-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/20 rounded-lg flex items-center justify-center mb-5">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
