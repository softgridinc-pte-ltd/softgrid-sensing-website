import { StatBlock } from '@/components/ui/StatBlock'

const stats = [
  { value: '10,000+', label: 'Assets Monitored', isNumeric: true },
  { value: '85%+', label: 'Prediction Accuracy', isNumeric: true },
  { value: '8', label: 'Years in Singapore', isNumeric: true },
  { value: 'BCA', label: 'Certified', isNumeric: false },
]

export function StatsSection(): React.ReactElement {
  return (
    <section className="bg-navy-800 py-16 md:py-20 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px]" />

      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <StatBlock
              key={stat.label}
              value={stat.value}
              label={stat.label}
              isNumeric={stat.isNumeric}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
