interface Milestone {
  year: string
  title: string
}

const milestones: Milestone[] = [
  { year: '2017', title: 'Founded in Singapore, started with lift remote monitoring' },
  { year: 'Q4 2017', title: 'LiftGuardian and LiftProf Go-Live' },
  { year: 'Q2 2018', title: 'Lift BlackBox (LBB) Mass Production' },
  { year: 'Q4 2019', title: 'NRF National Awardee \u2014 City of Tomorrow IoT Monitoring System for Urban Sustainability' },
  { year: 'Q3 2020', title: 'LMD 6000 Mass Production for HDB; began national-scale rollout' },
  { year: 'Q4 2021', title: 'BCA Sandbox certification for RM&D' },
  { year: 'Q1 2023', title: 'Rollout of AI-enhanced analytical engine for advanced preventive maintenance' },
  { year: 'Q4 2023', title: 'Achieved platform security protocol compliance; improved data processing capability' },
  { year: 'Q1 2024', title: 'SaaS-based device management system Go-Live' },
  { year: 'Q3 2024', title: 'Expanded to facility management and digital twin' },
  { year: 'Q4 2024', title: 'Softgrid Fusion LTMS successfully conducted trial with HDB' },
  { year: '2025', title: 'Reached 10,000+ lifts milestone' },
  { year: 'Q4 2025', title: 'Launched AI-driven Facility Operating System (AFOS): Unified platform for building management, remote sensing, predictive maintenance, real-time control, and digital twin visualization' },
]

export function JourneySection(): React.ReactElement {
  return (
    <section className="bg-navy-900 py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
        <div data-animate className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Journey</h2>
          <p className="text-lg text-primary-400 max-w-2xl mx-auto">
            From lift monitoring startup to full-stack facility operating system.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/60 via-primary-500/30 to-primary-500/10" />
          {/* Line glow */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-primary-400/40 via-primary-400/15 to-transparent blur-[2px]" />

          <div data-animate-stagger className="space-y-8 md:space-y-12">
            {milestones.map((milestone, i) => {
              const isLeft = i % 2 === 0

              return (
                <div
                  data-animate
                  key={`${milestone.year}-${milestone.title.slice(0, 20)}`}
                  className="relative"
                >
                  {/* Mobile layout */}
                  <div className="md:hidden flex items-start gap-4 pl-0">
                    {/* Dot */}
                    <div className="relative z-10 flex-shrink-0 w-8 h-8 bg-navy-900 border-2 border-primary-500/60 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(31,153,197,0.25)]">
                      <div className="w-2.5 h-2.5 bg-primary-400 rounded-full timeline-dot" />
                    </div>
                    <div className="pt-1">
                      <span className="text-primary-400 font-semibold text-sm">{milestone.year}</span>
                      <p className="text-slate-300 text-sm mt-0.5">{milestone.title}</p>
                    </div>
                  </div>

                  {/* Desktop layout */}
                  <div className="hidden md:grid grid-cols-2 gap-8 items-center">
                    {isLeft ? (
                      <>
                        <div className="text-right pr-8">
                          <span className="text-primary-400 font-semibold">{milestone.year}</span>
                          <p className="text-slate-300 mt-1">{milestone.title}</p>
                        </div>
                        <div className="pl-8" />
                      </>
                    ) : (
                      <>
                        <div className="pr-8" />
                        <div className="pl-8">
                          <span className="text-primary-400 font-semibold">{milestone.year}</span>
                          <p className="text-slate-300 mt-1">{milestone.title}</p>
                        </div>
                      </>
                    )}

                    {/* Center dot */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-navy-900 border-2 border-primary-500/60 rounded-full flex items-center justify-center shadow-[0_0_12px_rgba(31,153,197,0.3)]">
                      <div className="w-2 h-2 bg-primary-400 rounded-full timeline-dot" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
