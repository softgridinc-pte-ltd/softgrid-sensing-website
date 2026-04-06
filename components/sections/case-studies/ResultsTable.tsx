interface ResultRow {
  metric: string
  detail: string
}

interface ResultsTableProps {
  rows: ResultRow[]
}

export function ResultsTable({ rows }: ResultsTableProps): React.ReactElement {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6 md:px-12" data-animate>
        <h2 className="mb-10 text-3xl md:text-4xl font-bold leading-tight tracking-tight text-navy-900">
          The Results
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {rows.map((row) => (
            <div
              key={row.metric}
              className="group relative overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-primary-500" />
              <div className="mb-3 text-sm font-bold uppercase tracking-wider text-primary-600">
                {row.metric}
              </div>
              <p className="text-base leading-relaxed text-slate-700">{row.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
