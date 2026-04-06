import Link from 'next/link'
import { ArrowRight, Cpu, Activity, Wrench, Brain } from 'lucide-react'

import type { ReactNode } from 'react'

interface Capability {
  icon: ReactNode
  title: string
  description: string
  href: string
}

const capabilities: Capability[] = [
  {
    icon: <Cpu className="h-5 w-5" />,
    title: 'Sense',
    description: 'Edge devices and IoT sensors that capture signal at the asset.',
    href: '/products/sense',
  },
  {
    icon: <Activity className="h-5 w-5" />,
    title: 'Fusion',
    description: 'Real-time monitoring and predictive diagnostics across every connected asset.',
    href: '/products/fusion',
  },
  {
    icon: <Wrench className="h-5 w-5" />,
    title: 'Orches',
    description: 'Work orders, field service, and asset tracking — the operational lifecycle.',
    href: '/products/orches',
  },
  {
    icon: <Brain className="h-5 w-5" />,
    title: 'Cortex',
    description: 'AI knowledge, digital twin, predictive analytics, and reporting.',
    href: '/products/cortex',
  },
]

export function CapabilitiesGrid(): React.ReactElement {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="mb-14 max-w-2xl" data-animate>
          <div className="mb-4 text-xs font-bold uppercase tracking-[3px] text-primary-600">
            One Platform Powering Every Solution
          </div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight text-navy-900">
            The capabilities behind the deployments
          </h2>
        </div>

        <div className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4" data-animate-stagger>
          {capabilities.map((cap) => (
            <Link
              key={cap.title}
              href={cap.href}
              data-animate
              className="group flex flex-col border-t-2 border-slate-200 pt-6 transition-colors hover:border-primary-500"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-100">
                {cap.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold leading-snug text-navy-900 transition-colors group-hover:text-primary-700">
                {cap.title}
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-slate-600">{cap.description}</p>
              <div className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary-600">
                Explore
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
