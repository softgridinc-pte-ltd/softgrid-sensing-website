import { Globe, Layers, RefreshCw } from 'lucide-react'

interface Differentiator {
  icon: React.ReactNode
  title: string
  description: string
}

const differentiators: Differentiator[] = [
  {
    icon: <Globe className="w-6 h-6 text-primary-600" />,
    title: 'Brand-Agnostic, Source-Agnostic',
    description:
      'AFOS sits above your existing BMS \u2014 Siemens, Tridium, Honeywell, Midea. It ingests data from any source, any protocol, any vendor. No lock-in.',
  },
  {
    icon: <Layers className="w-6 h-6 text-primary-600" />,
    title: 'Full-Stack Self-Built',
    description:
      'From edge hardware to cloud AI to mobile apps \u2014 every layer is designed and built by Softgrid. No third-party stitching. One team, one codebase, one architecture.',
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-primary-600" />,
    title: 'Closed-Loop by Design',
    description:
      'Detection \u2192 Prediction \u2192 Action \u2192 Learning. Every insight feeds back into the system. The platform doesn\u2019t just monitor \u2014 it gets smarter over time.',
  },
]

export function PlatformPhilosophySection(): React.ReactElement {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section label */}
        <div data-animate className="flex items-center gap-4 mb-10">
          <span className="text-primary-600 text-sm font-semibold uppercase tracking-[0.2em]">
            What Makes AFOS a Platform
          </span>
          <div className="flex-1 h-px bg-slate-200" />
        </div>

        {/* Philosophy text */}
        <div data-animate className="max-w-3xl mb-12">
          <p className="text-lg text-slate-600 leading-relaxed">
            Most facility management tools are collections of disconnected products marketed as a &ldquo;platform.&rdquo;
            AFOS is different. It&apos;s a unified core that every Softgrid product runs on &mdash; shared data layer,
            shared intelligence, shared workflows. When you add a product, it doesn&apos;t just coexist &mdash; it
            connects to everything else from day one.
          </p>
        </div>

        {/* Differentiator cards */}
        <div data-animate-stagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {differentiators.map((item) => (
            <div
              key={item.title}
              data-animate
              className="bg-slate-50 border border-slate-200 rounded-xl p-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary-50 border border-primary-100 rounded-lg flex items-center justify-center mb-5">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
