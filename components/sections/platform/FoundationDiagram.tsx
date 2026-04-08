import { Radio, BrainCircuit, Workflow, Database, Sparkles } from 'lucide-react'

const solutions = ['Vertical Transport', 'Building Mgmt', 'Facility Ops', 'Infrastructure & Env']

const products = [
  { name: 'Sense', role: 'Edge Devices' },
  { name: 'Fusion', role: 'Monitoring' },
  { name: 'Orches', role: 'Operation' },
  { name: 'Cortex', role: 'AI' },
]

const engines: { name: string; icon: React.ReactNode }[] = [
  { name: 'Connect', icon: <Radio className="h-6 w-6" /> },
  { name: 'Intelligence', icon: <BrainCircuit className="h-6 w-6" /> },
  { name: 'Workflow', icon: <Workflow className="h-6 w-6" /> },
  { name: 'Data', icon: <Database className="h-6 w-6" /> },
]

function Connectors(): React.ReactElement {
  return (
    <div className="flex justify-around px-6">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="h-3 w-px bg-gradient-to-b from-primary-400/60 to-primary-400/10" />
      ))}
    </div>
  )
}

export function FoundationDiagram(): React.ReactElement {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-cyan-500/15 opacity-70 blur-2xl" />
      <div className="relative space-y-4 rounded-2xl border border-primary-500/20 bg-navy-800/40 p-6 md:p-8 backdrop-blur">
        {/* Layer 1: Solutions */}
        <div className="rounded-xl border border-slate-600/40 bg-slate-700/20 px-5 py-4">
          <div className="mb-3 text-[10px] font-bold uppercase tracking-[2px] text-slate-400">Solutions for Industries</div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
            {solutions.map((s) => (
              <div
                key={s}
                className="flex items-center justify-center rounded-lg border border-slate-500/40 bg-navy-900/40 px-3 py-2 text-center text-xs font-semibold text-slate-200"
              >
                {s}
              </div>
            ))}
            <div className="flex items-center justify-center rounded-lg border border-dashed border-slate-500/40 bg-navy-900/20 px-3 py-2 text-center text-xs font-semibold text-slate-400">
              + More
            </div>
          </div>
        </div>
        <Connectors />
        {/* Layer 2: Products */}
        <div className="rounded-xl border border-primary-400/40 bg-primary-500/10 px-5 py-4">
          <div className="mb-3 text-[10px] font-bold uppercase tracking-[2px] text-primary-300">Product Suites</div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
            {products.map((p) => (
              <div
                key={p.name}
                className="flex flex-col items-center justify-center rounded-lg border border-primary-400/40 bg-navy-900/50 px-3 py-2 text-center"
              >
                <span className="text-sm font-bold text-white">{p.name}</span>
                {p.name !== p.role && (
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-primary-300">{p.role}</span>
                )}
              </div>
            ))}
            <div className="flex items-center justify-center rounded-lg border border-dashed border-primary-400/40 bg-navy-900/30 px-3 py-2 text-center text-xs font-semibold text-primary-300/70">
              + More
            </div>
          </div>
        </div>
        <Connectors />
        {/* Layer 3: AFOS Platform */}
        <div className="relative rounded-xl border border-primary-400/60 bg-gradient-to-br from-primary-500/25 to-primary-700/30 p-5 shadow-[0_0_60px_-10px_rgba(31,153,197,0.55)]">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-[2px] text-primary-200">AFOS Platform</span>
            <span className="inline-flex items-center gap-1 rounded-full border border-primary-300/40 bg-primary-500/20 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[2px] text-primary-100">
              <Sparkles className="h-2.5 w-2.5" />
              AI-Driven
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {engines.map((e) => (
              <div key={e.name} className="flex items-center gap-2 rounded-lg border border-primary-400/30 bg-navy-900/60 px-3 py-2">
                <span className="text-primary-300">{e.icon}</span>
                <span className="text-xs font-semibold text-white">{e.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
