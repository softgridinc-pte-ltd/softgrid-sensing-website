const edgeCapabilities = [
  {
    title: '2-way Communication',
    description:
      'Live telemetry between every lift, the Tele-monitoring System, and HDB Smart Hub.',
  },
  {
    title: '1-to-10 Multi-lift Connectivity',
    description:
      'One LMD now supports up to 10 lifts, replacing the legacy 1-to-1 architecture. A 10x reduction in hardware footprint.',
  },
  {
    title: 'OTA Firmware Updates',
    description:
      'Every device in the field, upgradable remotely. No truck rolls. No downtime.',
  },
  {
    title: 'Open & Secure Comms',
    description:
      'Non-proprietary interface with end-to-end encryption and authentication. Built for a decade of cybersecurity evolution.',
  },
]

const intelligenceCapabilities = [
  {
    title: 'Multi-modal Sensing',
    description:
      'Vibration patterns, acoustic signatures, operational data — captured continuously.',
  },
  {
    title: 'Early Fault Signature Detection',
    description:
      'AI models trained to recognize the whisper of failure weeks before the breakdown.',
  },
  {
    title: 'Proactive Maintenance Orchestration',
    description:
      'Alerts routed to the right technician with the right diagnosis, not just a fault code.',
  },
  {
    title: 'Real-time Operational Dashboard',
    description: 'Every lift, every state, one pane of glass.',
  },
]

export function HdbSolution(): React.ReactElement {
  return (
    <section className="bg-slate-50 py-14 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div data-animate className="mb-12 md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600 mb-4">
            What We Built
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4 leading-tight tracking-tight">
            The Solution
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
            An integrated hardware + AI system, deployed as two tightly coupled layers.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12" data-animate-stagger>
          {/* Left — Edge Layer */}
          <div
            data-animate
            className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm"
          >
            <h3 className="text-xl font-bold text-navy-900 mb-2">
              Enhanced LMD (The Edge Layer)
            </h3>
            <p className="text-sm italic text-slate-500 mb-8">
              Rebuilding the nervous system of 10,000+ lifts.
            </p>
            <ul className="space-y-5">
              {edgeCapabilities.map((item) => (
                <li key={item.title} className="relative pl-5 text-base text-slate-700 leading-relaxed">
                  <span className="absolute left-0 top-[10px] inline-block h-2 w-2 rounded-full bg-primary-500" />
                  <strong className="font-semibold text-navy-900">{item.title}</strong>
                  {' — '}
                  {item.description}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Intelligence Layer */}
          <div
            data-animate
            className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm"
          >
            <h3 className="text-xl font-bold text-navy-900 mb-2">
              Remote Monitoring &amp; Predictive Diagnosis (The Intelligence Layer)
            </h3>
            <p className="text-sm italic text-slate-500 mb-8">
              Turning vibration, sound, and motion into foresight.
            </p>
            <ul className="space-y-5">
              {intelligenceCapabilities.map((item) => (
                <li key={item.title} className="relative pl-5 text-base text-slate-700 leading-relaxed">
                  <span className="absolute left-0 top-[10px] inline-block h-2 w-2 rounded-full bg-primary-500" />
                  <strong className="font-semibold text-navy-900">{item.title}</strong>
                  {' — '}
                  {item.description}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}
