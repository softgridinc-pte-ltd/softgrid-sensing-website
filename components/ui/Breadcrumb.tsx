import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps): React.ReactElement {
  return (
    <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 md:px-8 pt-4 pb-2">
      <ol className="flex items-center gap-1.5 text-sm text-slate-300">
        <li>
          <Link href="/" className="hover:text-primary-400 transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              {isLast || !item.href ? (
                <span className="text-slate-300">{item.label}</span>
              ) : (
                <Link href={item.href} className="hover:text-primary-400 transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
