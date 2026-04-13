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
    <section className="relative overflow-hidden bg-white py-14 md:py-20">
      <div className="absolute inset-0 dot-pattern opacity-40" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div data-animate className="mb-12 md:mb-16 max-w-3xl">
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">The Outcomes</div>
          <h2 className="mb-4 text-3xl md:text-4xl font-bold tracking-tight text-navy-900 leading-tight">
            Measurable Impact.
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-slate-600 max-w-2xl">
            What changes when facilities run on AFOS — drawn from live deployments across Singapore&rsquo;s public housing, commercial real estate, and environmental monitoring programs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8" data-animate-stagger>
          {outcomes.map((o) => (
            <div
              key={o.label}
              data-animate="scale"
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg"
            >
              <div className="relative">
                <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary-100 text-primary-600 ring-1 ring-primary-200">
                  {o.icon}
                </div>

                <div className="mb-3 flex items-baseline gap-1">
                  <span className="text-5xl md:text-6xl font-bold tracking-tight text-navy-900 tabular-nums font-heading">
                    {o.value}
                  </span>
                  <span className="text-3xl md:text-4xl font-bold text-primary-600">{o.unit}</span>
                </div>

                <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-primary-600">{o.label}</div>

                <p className="text-sm leading-relaxed text-slate-700">{o.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Qualitative outcomes — four dimensions */}
        <div className="mt-24" data-animate>
          <div className="mb-12 max-w-3xl">
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">Across Every Dimension</div>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-navy-900">
              Outcomes that compound across the operation.
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {columns.map((col, i) => (
              <div
                key={col.title}
                className={`relative ${i > 0 ? 'lg:border-l lg:border-slate-200 lg:pl-10' : ''}`}
              >
                <h4 className="mb-8 text-sm font-bold uppercase tracking-[2px] text-primary-600">
                  {col.title}
                </h4>
                <ul className="space-y-5">
                  {col.items.map((item) => (
                    <li key={item} className="flex gap-3 text-[15px] font-medium leading-[1.7] text-slate-600">
                      <span className="mt-[10px] inline-block h-[1.5px] w-3 flex-shrink-0 bg-primary-500" aria-hidden />
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
