interface KeyNumber {
  value: string
  suffix?: string
  label: string
  hasCyan?: boolean
}

interface KeyNumbersProps {
  items: KeyNumber[]
}

export function KeyNumbers({ items }: KeyNumbersProps): React.ReactElement {
  return (
    <section className="bg-navy-800 py-12 md:py-16">
      <div
        className="mx-auto grid max-w-6xl grid-cols-2 lg:grid-cols-4 gap-y-10 px-6 md:px-12"
        data-animate
      >
        {items.map((item, i) => (
          <div
            key={item.label}
            className={`relative px-6 text-center ${
              i < items.length - 1 ? 'lg:after:absolute lg:after:right-0 lg:after:top-1/2 lg:after:h-16 lg:after:w-px lg:after:-translate-y-1/2 lg:after:bg-gradient-to-b lg:after:from-transparent lg:after:via-primary-500/30 lg:after:to-transparent' : ''
            }`}
          >
            <div className="mb-3 text-5xl md:text-6xl font-light leading-none text-white">
              {item.value}
              {item.suffix && (
                <span className={item.hasCyan === false ? 'text-white' : 'text-primary-500'}>
                  {item.suffix}
                </span>
              )}
            </div>
            <div className="text-xs md:text-sm font-semibold uppercase tracking-[2px] text-slate-400">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
