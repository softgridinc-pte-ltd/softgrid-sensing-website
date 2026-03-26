const impacts = [
  { value: '10,000+', label: 'Lifts Monitored' },
  { value: '26', label: 'Ecological Areas' },
  { value: '4', label: 'Industries Served' },
  { value: '24/7', label: 'Remote Operations' },
]

export function ImpactStrip(): React.ReactElement {
  return (
    <section className="bg-navy-800 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div
          className="border border-navy-700 rounded-xl p-8 md:p-12"
          data-animate="scale"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {impacts.map((item, i) => (
              <div
                key={item.label}
                className={`text-center ${
                  i < impacts.length - 1 ? 'lg:border-r lg:border-navy-600' : ''
                }`}
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {item.value}
                </div>
                <div className="text-sm text-slate-500 uppercase tracking-wider">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
