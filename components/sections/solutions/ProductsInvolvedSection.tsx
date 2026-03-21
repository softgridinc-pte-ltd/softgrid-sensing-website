interface ProductInvolved {
  product: string
  series: string
  role: string
  optional?: boolean
}

interface ProductsInvolvedSectionProps {
  overline?: string
  headline?: string
  subtitle?: string
  products: ProductInvolved[]
}

function getSeriesBadgeClasses(series: string): string {
  if (series.includes('Fusion')) return 'bg-cyan-50 text-cyan-700 border-cyan-200'
  if (series.includes('Orches')) return 'bg-orange-50 text-orange-700 border-orange-200'
  if (series.includes('Cortex')) return 'bg-purple-50 text-purple-700 border-purple-200'
  if (series.includes('Sense')) return 'bg-slate-50 text-slate-600 border-slate-200'
  return 'bg-slate-50 text-slate-600 border-slate-200'
}

export function ProductsInvolvedSection({
  overline = 'Products Involved',
  headline,
  subtitle,
  products,
}: ProductsInvolvedSectionProps): React.ReactElement {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1100px] mx-auto px-4 md:px-16">
        <div data-animate className="text-center mb-10">
          <span className="block text-xs font-bold uppercase tracking-[2px] text-slate-500 mb-3">{overline}</span>
          {headline && <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight">{headline}</h2>}
          {subtitle && <p className="text-[15px] text-slate-600 mt-3 max-w-2xl mx-auto leading-[1.7]">{subtitle}</p>}
        </div>

        <div data-animate className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="text-slate-500 text-xs font-bold uppercase tracking-[2px] py-3.5 px-5">Product</th>
                <th className="text-slate-500 text-xs font-bold uppercase tracking-[2px] py-3.5 px-5">Series</th>
                <th className="text-slate-500 text-xs font-bold uppercase tracking-[2px] py-3.5 px-5">Role</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.product} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="text-navy-900 text-[15px] font-semibold py-4 px-5">{p.product}</td>
                  <td className="py-4 px-5">
                    <span className={`inline-block text-xs font-semibold border rounded-full px-3 py-1 ${getSeriesBadgeClasses(p.series)}`}>
                      {p.series}
                    </span>
                  </td>
                  <td className="text-slate-700 text-[15px] py-4 px-5">
                    {p.role}
                    {p.optional && (
                      <span className="ml-2 text-xs font-semibold uppercase tracking-wider text-slate-400 bg-slate-100 border border-slate-200 rounded-full px-2 py-0.5">
                        Optional
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
