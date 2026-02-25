import Link from 'next/link'

interface ProductCardProps {
  icon: React.ReactNode
  badge: string
  title: string
  subtitle?: string
  variants?: string
  description: string
  proofPoint?: string
  href: string
  index: number
  isInView: boolean
}

export function ProductCard({
  icon,
  badge,
  title,
  subtitle,
  variants,
  description,
  proofPoint,
  href,
  index,
  isInView,
}: ProductCardProps): React.ReactElement {
  return (
    <div
      className={`group bg-navy-800 border border-navy-700 rounded-xl p-6 transition-all duration-300 hover:border-cyan-500/50 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 bg-cyan-500/10 border border-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <span className="bg-cyan-500/10 text-cyan-400 text-xs rounded-full px-3 py-1 mt-0.5">
          {badge}
        </span>
      </div>

      <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>

      {subtitle && (
        <p className="text-sm text-slate-500 mb-1">{subtitle}</p>
      )}

      {variants && (
        <p className="text-sm text-slate-500 mb-3">{variants}</p>
      )}

      {!subtitle && !variants && <div className="mb-3" />}

      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>

      {proofPoint && (
        <p className="text-sm text-cyan-400 font-medium mt-2">{proofPoint}</p>
      )}

      <Link
        href={href}
        className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-sm font-medium mt-4 transition-colors duration-200"
      >
        Learn More
        <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
      </Link>
    </div>
  )
}
