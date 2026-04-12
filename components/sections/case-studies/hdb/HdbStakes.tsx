export function HdbStakes(): React.ReactElement {
  return (
    <section className="bg-navy-900 py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1.5fr] gap-10 md:gap-16 items-start">
          {/* Left — Header */}
          <div data-animate>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-400 mb-4">
              Why This Mattered
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
              The Stakes
            </h2>
          </div>

          {/* Right — Narrative */}
          <div data-animate className="space-y-8">
            <p className="text-base md:text-[17px] text-slate-300 leading-[1.8]">
              Singapore has one of the world&apos;s highest-density vertical living environments. HDB alone operates tens of thousands of lifts serving millions of residents daily. For decades, lift maintenance has been reactive — breakdowns trigger dispatches, inspections run on fixed schedules, and aging monitoring hardware runs on closed, 1-to-1 architectures that can&apos;t scale, can&apos;t update, and can&apos;t defend against modern cyber threats.
            </p>

            {/* Pull quote */}
            <div className="border-l-2 border-primary-500 pl-6 md:pl-8">
              <p className="text-lg md:text-xl text-white font-medium leading-relaxed">
                Transforming Singapore&apos;s built environment demands smart technologies and integrated systems that reimagine how we manage urban infrastructure. Lift intelligence is where that transformation begins.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
