'use client'

import Link from 'next/link'

import type { SearchEntry } from '@/data/searchIndex'

interface SearchResultsProps {
  results: SearchEntry[]
  activeIndex: number
  visible: boolean
  onSelect: (href: string) => void
  id: string
  inline?: boolean
}

const categoryColors: Record<SearchEntry['category'], string> = {
  Platform: 'text-primary-400',
  Product: 'text-primary-300',
  Solution: 'text-amber-400',
  'Case Study': 'text-emerald-400',
  Company: 'text-slate-400',
  Contact: 'text-slate-400',
}

export function SearchResults({ results, activeIndex, visible, onSelect, id, inline }: SearchResultsProps): React.ReactElement {
  const showEmpty = visible && results.length === 0
  const showResults = visible && results.length > 0

  if (!showEmpty && !showResults) {
    return <div className="hidden" />
  }

  return (
    <div
      id={id}
      role="listbox"
      className={`bg-navy-800 border border-navy-700 rounded-xl shadow-xl shadow-navy-950/50 overflow-hidden transition-all duration-150 ease-out z-50 ${
        inline ? 'max-h-64 overflow-y-auto' : 'absolute top-full left-0 right-0 mt-2'
      } ${
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-1 pointer-events-none'
      }`}
    >
      {showEmpty && (
        <div className="px-4 py-6 text-center text-sm text-slate-500">
          No results found
        </div>
      )}
      {showResults && (
        <div className="py-1">
          {results.map((entry, index) => {
            const isActive = index === activeIndex
            const resultId = `${id}-option-${index}`
            return (
              <Link
                key={entry.href}
                id={resultId}
                href={entry.href}
                role="option"
                aria-selected={isActive}
                onClick={(e) => {
                  e.preventDefault()
                  onSelect(entry.href)
                }}
                className={`flex items-start gap-3 px-4 py-3 border-l-2 transition-all duration-150 ${
                  isActive
                    ? 'border-primary-500 bg-primary-500/8'
                    : 'border-transparent hover:border-primary-500 hover:bg-primary-500/8'
                }`}
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-slate-200">
                      {entry.title}
                    </span>
                    <span className={`text-[10px] font-medium uppercase tracking-wider ${categoryColors[entry.category]}`}>
                      {entry.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                    {entry.description}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
