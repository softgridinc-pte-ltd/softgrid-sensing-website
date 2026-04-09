import { TrendingDown, Target, Gauge } from 'lucide-react'

interface Outcome {
  icon: React.ReactNode
  value: string
  unit: string
  label: string
  description: string
}

interface OutcomeColumn {
  title: string
  items: string[]
}

const columns: OutcomeColumn[] = [
  {
    title: 'Assets',
    items: [
      'Increase asset productivity and economic output',
      'Increase service reliability across the portfolio',
      'Reduce cost of planned and unplanned downtime',
      'Extend the economic life of assets and equipment',
    ],
  },
  {
    title: 'Costs',
    items: [
      'Reduce external maintenance vendor spend',
      'Increase workforce productivity',
      'Lower total cost of ownership across the lifecycle',
    ],
  },
  {
    title: 'Risks',
    items: [
      'Proven and fully compliant with BCA standards',
      'Reduce safety and security exposure',
      'Optimize risk-based asset investment decisions',
    ],
  },
  {
    title: 'Workforce',
    items: [
      'Boost operations and reliability engineering productivity',
      'Augment maintenance supervisors with AI-driven insight',
      'Cut the cost of routine inspections and QA',
    ],
  },
]

const outcomes: Outcome[] = [
  {
    icon: <TrendingDown className="h-6 w-6" strokeWidth={1.6} />,
    value: '50',
    unit: '%+',
    label: 'Cost Reduction',
    description:
      'Predictive maintenance and automated workflows replace reactive repairs and manual coordination — cutting operating spend across the asset lifecycle.',
  },
  {
    icon: <Target className="h-6 w-6" strokeWidth={1.6} />,
    value: '85',
    unit: '%+',
    label: 'Fault Prediction Accuracy',
    description:
      'Domain-tuned models trained on years of real-world operational data catch failures before they cascade into downtime.',
  },
  {
    icon: <Gauge className="h-6 w-6" strokeWidth={1.6} />,
    value: '20',
    unit: '%',
    label: 'Operational Efficiency Gain',
    description:
      'Cross-domain workflows, AI dispatching, and unified data eliminate the hand-offs that quietly drain field and back-office productivity.',
  },
]

export function PlatformOutcomesSection(): React.ReactElement {
  return (
    <section className="relative overflow-hidden bg-navy-900 pt-8 md:pt-12 pb-20 md:pb-28">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px]"
        style={{ background: 'radial-gradient(ellipse at center, rgba(31,153,197,0.10) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <div data-animate className="mb-16 max-w-3xl">
          <div className="mb-4 text-xs font-bold uppercase tracking-[3px] text-primary-400">The Outcomes</div>
          <h2 className="mb-6 text-3xl md:text-4xl font-bold tracking-tight text-white">
            Measurable Impact.
          </h2>
          <p className="text-lg leading-[1.8] text-slate-300">
            What changes when facilities run on AFOS — drawn from live deployments across Singapore&rsquo;s public housing, commercial real estate, and environmental monitoring programs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8" data-animate>
          {outcomes.map((o) => (
            <div
              key={o.label}
              className="group relative overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-800/40 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary-400/50 hover:bg-slate-800/60"
            >
              {/* Top accent bar */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-400/70 to-transparent opacity-60" />
              {/* Soft glow on hover */}
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: 'radial-gradient(circle, rgba(31,153,197,0.35) 0%, transparent 70%)' }}
              />

              <div className="relative">
                <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary-500/10 text-primary-300 ring-1 ring-primary-500/30">
                  {o.icon}
                </div>

                <div className="mb-3 flex items-baseline gap-1">
                  <span className="text-6xl md:text-7xl font-extrabold tracking-tight text-white tabular-nums">
                    {o.value}
                  </span>
                  <span className="text-3xl md:text-4xl font-bold text-primary-400">{o.unit}</span>
                </div>

                <div className="mb-4 text-sm font-bold uppercase tracking-[2px] text-primary-300">{o.label}</div>

                <p className="text-sm leading-relaxed text-slate-400">{o.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Qualitative outcomes — four dimensions */}
        <div className="mt-24" data-animate>
          <div className="mb-12 max-w-3xl">
            <div className="mb-4 text-xs font-bold uppercase tracking-[3px] text-primary-400">Across Every Dimension</div>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Outcomes that compound across the operation.
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {columns.map((col, i) => (
              <div
                key={col.title}
                className={`relative ${i > 0 ? 'lg:border-l lg:border-white/10 lg:pl-10' : ''}`}
              >
                <h4 className="mb-8 text-sm font-bold uppercase tracking-[2px] text-primary-400">
                  {col.title}
                </h4>
                <ul className="space-y-5">
                  {col.items.map((item) => (
                    <li key={item} className="flex gap-3 text-[15px] leading-[1.7] text-slate-300">
                      <span className="mt-[10px] inline-block h-px w-3 flex-shrink-0 bg-primary-500" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
