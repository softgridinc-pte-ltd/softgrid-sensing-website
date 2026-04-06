import type { ReactNode } from 'react'

interface DeployedItem {
  icon: ReactNode
  title: string
  description: string
}

interface DeployedItemsProps {
  items: DeployedItem[]
}

export function DeployedItems({ items }: DeployedItemsProps): React.ReactElement {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {items.map((item) => (
        <div
          key={item.title}
          className="flex flex-col items-start gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary-200 bg-primary-50 text-primary-600">
            {item.icon}
          </div>
          <div>
            <div className="mb-2 text-sm font-bold text-navy-900">{item.title}</div>
            <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
