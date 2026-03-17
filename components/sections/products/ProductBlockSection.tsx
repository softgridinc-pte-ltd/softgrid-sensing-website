'use client'

import { useInView } from '@/hooks/useInView'

interface ProductMeta {
  label: string
  value: string
}

interface ProductBlock {
  name: string
  fullName: string
  oneLiner: string
  description: string
  capabilities: string[]
  meta?: ProductMeta[]
  badge?: string
}

interface ProductBlockSectionProps {
  products: ProductBlock[]
}

export function ProductBlockSection({ products }: ProductBlockSectionProps): React.ReactElement {
  const { ref, isInView } = useInView({ threshold: 0.05 })

  return (
    <div ref={ref} className="space-y-8">
      {products.map((product, i) => (
        <section
          key={product.name}
          className={`${i % 2 === 0 ? 'bg-navy-900' : 'bg-navy-800'} py-12 md:py-16 transition-all duration-500 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: `${i * 100}ms` }}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-3xl">
              {/* Product name badge */}
              <span className="text-xs font-bold uppercase tracking-[3px] text-cyan-400">{product.name}</span>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-3 mb-2">{product.fullName}</h2>

              {/* One-liner */}
              <p className="text-slate-400 italic mb-4">{product.oneLiner}</p>

              {/* Badge */}
              {product.badge && (
                <span className="inline-block text-xs text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-3 py-1 mb-4">
                  {product.badge}
                </span>
              )}

              {/* Description */}
              <p className="text-slate-300 leading-relaxed mb-6">{product.description}</p>

              {/* Capabilities */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-[2px] text-slate-500 mb-3">Key Capabilities</h4>
                <ul className="space-y-2">
                  {product.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-2 text-sm text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/60 mt-1.5 flex-shrink-0" />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Meta */}
              {product.meta && product.meta.length > 0 && (
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {product.meta.map((m) => (
                    <div key={m.label} className="text-sm">
                      <span className="text-slate-500">{m.label}: </span>
                      <span className="text-slate-300">{m.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
