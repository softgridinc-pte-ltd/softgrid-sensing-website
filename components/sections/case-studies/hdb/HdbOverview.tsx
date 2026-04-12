import Image from 'next/image'

const keyNumbers = [
  { value: '10,000', suffix: '+', label: 'Lifts Monitored' },
  { value: '4,000', suffix: '+', label: 'HDB Blocks' },
  { value: 'NRF CoT', label: 'National Research Awardee' },
  { value: 'Co-Owned', label: 'IP with HDB' },
]

export function HdbOverview(): React.ReactElement {
  return (
    <section className="bg-white pt-14 md:pt-20 pb-14 md:pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 md:gap-16 items-start">
          {/* Left — Project intro */}
          <div data-animate>
            {/* Overline with logo */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-shrink-0 w-20 h-20 rounded-xl border border-slate-200 bg-white p-3 shadow-sm flex items-center justify-center">
                <Image
                  src="/images/logos/HDB-icon.png"
                  alt="HDB"
                  width={64}
                  height={64}
                  className="h-full w-auto object-contain"
                />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">
                Public Sector / Vertical Transport
              </p>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-navy-900 leading-tight tracking-tight mb-6">
              HDB Smart Lift Intelligence
            </h1>

            <p className="text-base md:text-[17px] text-slate-600 leading-[1.8]">
              Singapore has one of the world&apos;s highest-density vertical living environments. HDB alone operates 26,000+ lifts serving millions of residents daily. For decades, lift maintenance has been reactive — breakdowns trigger dispatches, inspections run on fixed schedules, and aging monitoring hardware runs on closed, 1-to-1 architectures that can&apos;t scale, can&apos;t update, and can&apos;t defend against modern cyber threats.
            </p>

          </div>

          {/* Right — Key numbers grid */}
          <div data-animate className="grid grid-cols-2 gap-4 lg:mt-24">
            {keyNumbers.map((item) => (
              <div
                key={item.label}
                className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-5 text-center flex flex-col items-center justify-center h-28"
              >
                <div className="text-2xl md:text-3xl font-bold text-navy-900 mb-1 font-heading">
                  {item.value}
                  {item.suffix && (
                    <span className="text-primary-600">{item.suffix}</span>
                  )}
                </div>
                <div className="text-xs font-semibold uppercase tracking-[1.5px] text-slate-500">
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
