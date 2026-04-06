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

export function OutcomesSection(): React.ReactElement {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-24 md:py-32">
      {/* Background accents */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div
        className="pointer-events-none absolute -left-40 top-1/2 h-[500px] w-[700px] -translate-y-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(31,153,197,0.10) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 max-w-3xl" data-animate>
          <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[3px] text-primary-400">
            <span className="inline-block h-px w-10 bg-gradient-to-r from-transparent to-primary-400" />
            Outcomes
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-white">
            Achieve the outcomes
            <br />
            that you desire
          </h2>
        </div>

        {/* 4-column outcome grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12"
          data-animate-stagger
        >
          {columns.map((col, i) => (
            <div
              key={col.title}
              data-animate
              className={`relative ${i > 0 ? 'lg:pl-10 lg:border-l lg:border-white/10' : ''}`}
            >
              <h3 className="mb-8 text-lg font-bold uppercase tracking-[2px] text-primary-400">
                {col.title}
              </h3>
              <ul className="space-y-5">
                {col.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[15px] leading-[1.7] text-slate-300"
                  >
                    <span className="mt-[10px] inline-block h-px w-3 flex-shrink-0 bg-primary-500" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
