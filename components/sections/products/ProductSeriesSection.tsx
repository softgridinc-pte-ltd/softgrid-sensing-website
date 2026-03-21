import Link from 'next/link'
import { Cpu, Radio, Wrench, Brain } from 'lucide-react'

interface ProductSeries {
  icon: React.ReactNode
  name: string
  subtitle: string
  description: string
  products: string
  href: string
}

const productSeries: ProductSeries[] = [
  {
    icon: <Cpu className="w-6 h-6 text-cyan-500" />,
    name: 'AFOS Sense',
    subtitle: 'Edge Devices',
    description:
      'Industrial-grade IoT devices designed for non-intrusive installation, edge intelligence, and resilient operation. Hardware-as-a-Service, not hardware-for-sale.',
    products: 'LMD · LBB · EMD',
    href: '/products/sense',
  },
  {
    icon: <Radio className="w-6 h-6 text-cyan-500" />,
    name: 'AFOS Fusion',
    subtitle: 'Monitoring & Diagnostics',
    description:
      'Real-time monitoring, alerting, and predictive diagnostics. From lift sensors to satellite imagery — see what\u2019s happening across all your assets, at any scale, before problems escalate.',
    products: 'LTMS · RM&D · Cloud BMS · Fusion RSA',
    href: '/products/fusion',
  },
  {
    icon: <Wrench className="w-6 h-6 text-cyan-500" />,
    name: 'AFOS Orches',
    subtitle: 'Operations & Maintenance',
    description:
      'Work order management, field service, asset tracking, and intelligent service desk. Manage the full lifecycle from detection to resolution.',
    products: 'IRIS · LiftProf · Nova',
    href: '/products/orches',
  },
  {
    icon: <Brain className="w-6 h-6 text-cyan-500" />,
    name: 'AFOS Cortex',
    subtitle: 'Data & Intelligence',
    description:
      'AI knowledge base, digital twin visualization, predictive analytics, and compliance reporting. Turn your operational data into decisions and foresight.',
    products: 'Athena · Digital Twin · AI Analytics · ESG Reporting',
    href: '/products/cortex',
  },
]

export function ProductSeriesSection(): React.ReactElement {
  return (
    <section className="bg-navy-900 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section label */}
        <div data-animate className="flex items-center gap-4 mb-4">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-[0.2em]">
            Product Series
          </span>
          <div className="flex-1 h-px bg-navy-700" />
        </div>

        <h2 data-animate className="text-3xl md:text-4xl font-bold text-white mb-4">
          Four Product Series. One Platform.
        </h2>
        <p data-animate className="text-lg text-slate-400 mb-12 max-w-2xl">
          Every product is powered by the AFOS platform — connected by design, not bolted together after the fact.
        </p>

        {/* 2x2 grid */}
        <div data-animate-stagger className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {productSeries.map((series, i) => (
            <div
              key={series.name}
              data-animate
              className="group bg-navy-800 border border-navy-700 rounded-xl p-8 hover:border-cyan-500/50 hover:scale-[1.01]"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  {series.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{series.name}</h3>
                  <p className="text-sm text-cyan-400">{series.subtitle}</p>
                </div>
              </div>

              <p className="text-slate-400 leading-relaxed mb-5">{series.description}</p>

              <div className="flex items-center gap-2 mb-6">
                <span className="text-xs text-slate-500 uppercase tracking-wider">Products:</span>
                <span className="text-sm text-slate-300">{series.products}</span>
              </div>

              <Link
                href={series.href}
                className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200"
              >
                Explore Series
                <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
