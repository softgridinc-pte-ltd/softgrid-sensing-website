interface NarrativeItem {
  title: string
  body: string
}

const items: NarrativeItem[] = [
  {
    title: 'Built on one platform',
    body: 'Every Softgrid solution runs on the same four engines — Connect, Intelligence, Workflow, and Data. The lift you monitored last year and the satellite feed you onboard next quarter share the same data backbone, the same dashboards, and the same operations playbook.',
  },
  {
    title: 'Field-proven, not theoretical',
    body: 'AFOS powers more than 10,000 lifts across HDB estates in Singapore, hundreds of commercial lifts under BCA Sandbox certification, the digital backbone of CPG FM facility operations, and monthly forest cover monitoring across 26 ecological areas for NParks.',
  },
  {
    title: 'Open and integrated',
    body: 'No rip-and-replace. We connect to existing BMS systems through BACnet, Modbus, OPC-UA and REST APIs. We integrate with lift controllers without voiding warranties. We process satellite imagery from PlanetScope. The platform meets your existing infrastructure where it lives.',
  },
  {
    title: 'Outcome-driven',
    body: 'Predictive maintenance that catches faults before they escalate. Work orders that close themselves once a sensor confirms resolution. AI knowledge bases that retain decades of institutional expertise. Compliance reports that generate automatically. Every product is judged by the operational metric it moves.',
  },
]

export function SolutionsNarrative(): React.ReactElement {
  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 md:px-12">
        <div className="mb-12 max-w-3xl" data-animate>
          <div className="mb-4 text-xs font-bold uppercase tracking-[3px] text-primary-600">
            What an AFOS Solution Actually Is
          </div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight text-navy-900">
            Four ideas that shape every deployment
          </h2>
        </div>

        <div className="space-y-10" data-animate-stagger>
          {items.map((item) => (
            <div key={item.title} data-animate className="grid gap-2 md:grid-cols-[200px_1fr] md:gap-10">
              <h3 className="text-lg font-bold text-navy-900">{item.title}</h3>
              <p className="text-base md:text-[17px] leading-[1.8] text-slate-600">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
