'use client'

import { ScrollRevealItem } from '@/components/ui/ScrollRevealItem'

interface ProductInvolved {
  product: string
  series: string
  role: string
}

interface ProductsInvolvedSectionProps {
  products: ProductInvolved[]
}

export function ProductsInvolvedSection({ products }: ProductsInvolvedSectionProps): React.ReactElement {
  return (
    <section className="bg-navy-800 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-[3px] text-slate-500">Products Involved</span>
        </div>

        <div className="overflow-x-auto">
          <ScrollRevealItem>
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-navy-700">
                  <th className="text-slate-400 text-xs font-semibold uppercase tracking-wider py-3 pr-4">Product</th>
                  <th className="text-slate-400 text-xs font-semibold uppercase tracking-wider py-3 pr-4">Series</th>
                  <th className="text-slate-400 text-xs font-semibold uppercase tracking-wider py-3">Role</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p.product} className="border-b border-navy-700/50">
                    <td className="text-white text-sm font-medium py-3 pr-4">{p.product}</td>
                    <td className="py-3 pr-4">
                      <span className="text-xs text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-2.5 py-0.5">
                        {p.series}
                      </span>
                    </td>
                    <td className="text-slate-400 text-sm py-3">{p.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ScrollRevealItem>
        </div>
      </div>
    </section>
  )
}
