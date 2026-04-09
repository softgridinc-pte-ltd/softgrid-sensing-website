import { Radio, BrainCircuit, Workflow, Database, Sparkles } from 'lucide-react'
import { AfosArchitectureSvg } from '@/components/sections/platform/AfosArchitectureSvg'

interface Engine {
  icon: React.ReactNode
  name: string
  subtitle: string
  bullets: string[]
}

const engines: Engine[] = [
  {
    icon: <Radio className="h-6 w-6" />,
    name: 'Connect',
    subtitle: 'Multi-protocol ingestion',
    bullets: ['MQTT, BACnet, Modbus, OPC-UA', 'AWS & Azure IoT Hub bridges', 'Device management & rules'],
  },
  {
    icon: <BrainCircuit className="h-6 w-6" />,
    name: 'Intelligence',
    subtitle: 'Predictive & cognitive AI',
    bullets: ['Predictive models >83% accuracy', 'Anomaly detection at scale', 'Athena RAG knowledge base'],
  },
  {
    icon: <Workflow className="h-6 w-6" />,
    name: 'Workflow',
    subtitle: 'Detection to resolution',
    bullets: ['Auto work order generation', 'GPS-based dispatch', 'Auto-severity & service reports'],
  },
  {
    icon: <Database className="h-6 w-6" />,
    name: 'Data',
    subtitle: 'Unified data layer',
    bullets: ['Cross-module storage', 'Custom dashboards', 'BCA / Green Mark / ESG reports'],
  },
]

const ladder = [
  {
    label: 'Legacy',
    title: 'Basic',
    height: 'min-h-44',
    bg: 'bg-slate-800/50 border-slate-700/60',
    text: 'text-slate-400',
    bullets: ['Simple tasks', 'Siloed stand-alone tech', 'Manual processes', 'Error-prone'],
  },
  {
    label: 'Tech Initiator',
    title: 'Proactive Automation',
    height: 'min-h-60',
    bg: 'bg-primary-500/10 border-primary-400/30',
    text: 'text-slate-200',
    bullets: ['Cross-domain workflows', 'Multiple technologies', 'Semi-automation', 'Some integration'],
  },
  {
    label: 'New AI Adoption',
    title: 'AFOS',
    height: 'min-h-[28rem]',
    bg: 'bg-gradient-to-b from-primary-500/30 to-primary-700/40 border-primary-400/60 shadow-[0_0_60px_-10px_rgba(31,153,197,0.55)]',
    text: 'text-white',
    bullets: [
      'Business-aligned workflows',
      'Exponential technologies',
      'Cross-functional tasks',
      'Data-driven AI / agentic decisions',
      'Hybrid workforce',
      'Significant efficiency gain',
    ],
    highlight: true,
  },
]

export function PlatformEnginesSection(): React.ReactElement {
  return (
    <section className="relative overflow-hidden bg-navy-900 pt-20 md:pt-28 pb-8 md:pb-12">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full blur-[160px]"
        style={{ background: 'radial-gradient(ellipse at center, rgba(31,153,197,0.08) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        {/* Section super-header */}
        <div data-animate className="mb-16 text-center">
          <div className="mb-4 text-xs font-bold uppercase tracking-[3px] text-primary-400">How AFOS Works</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            One Foundation. Infinite Compositions.
          </h2>
        </div>

        {/* === Sub-block 1: AFOS as foundation === */}
        <div className="mb-28" data-animate>
          <div className="mb-12 max-w-3xl">
            <div className="mb-4 text-xs font-bold uppercase tracking-[3px] text-primary-400">The Foundation</div>
            <h3 className="mb-6 text-3xl md:text-4xl font-bold leading-[1.15] tracking-tight text-white">
              One Base. Every Product. Every Solution.
            </h3>
            <p className="text-lg leading-[1.8] text-slate-300">
              AFOS is the operating system that runs underneath everything Softgrid builds. Hardware, monitoring, workflows, and AI all sit on the same foundation — composed freely to fit each customer, each industry, each site.
            </p>
          </div>

          {/* Detailed architecture diagram — gradient-bordered glowing card */}
          <div className="relative mx-auto max-w-6xl">
            <div className="pointer-events-none absolute -inset-2 rounded-3xl bg-cyan-500/20 opacity-70 blur-xl" />
            <div className="relative rounded-2xl bg-gradient-to-br from-cyan-400/80 via-cyan-500/30 to-cyan-600/60 p-[1.5px] shadow-[0_0_80px_-20px_rgba(34,211,238,0.5)]">
              <div className="rounded-[14px] bg-gradient-to-b from-[#143d6b] to-[#0c2950] p-6 md:p-10 ring-1 ring-inset ring-white/5">
                <AfosArchitectureSvg />
              </div>
            </div>
          </div>
        </div>

        {/* === Sub-block 2: Capability engines === */}
        <div className="mb-28" data-animate>
          <div className="mb-12 max-w-3xl">
            <div className="mb-4 text-xs font-bold uppercase tracking-[3px] text-primary-400">The Engines</div>
            <h3 className="mb-6 text-3xl md:text-4xl font-bold tracking-tight text-white">
              Built from Capability Engines.
            </h3>
            <p className="text-lg leading-[1.8] text-slate-300">
              The base is composed of four general-purpose engines. Mix and match them to fit any workflow — they&rsquo;re the building blocks every product reuses.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {engines.map((engine) => (
              <div key={engine.name} className="border-l border-primary-500/30 pl-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-500/10 text-primary-400 ring-1 ring-primary-500/30">
                  {engine.icon}
                </div>
                <div className="mb-1 text-xl font-bold text-white">{engine.name}</div>
                <div className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-400">{engine.subtitle}</div>
                <ul className="space-y-2 text-sm leading-relaxed text-slate-400">
                  {engine.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 inline-block h-px w-3 flex-shrink-0 bg-primary-500" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* === Sub-block 3: Maturity ladder === */}
        <div data-animate>
          <div className="mb-12 max-w-3xl">
            <div className="mb-4 text-xs font-bold uppercase tracking-[3px] text-primary-400">The Trajectory</div>
            <h3 className="mb-6 text-3xl md:text-4xl font-bold tracking-tight text-white">
              From Manual, to Automated, to AI-Driven.
            </h3>
            <p className="text-lg leading-[1.8] text-slate-300">
              Facility operations have moved through three eras. AFOS is the new one — where AI doesn&rsquo;t just inform decisions, it makes them.
            </p>
          </div>

          <div className="relative pl-16 pb-20">
            {/* Y-axis (vertical line + arrow + label) */}
            <div className="hidden md:block pointer-events-none absolute left-10 top-0 bottom-12">
              <div className="absolute inset-y-0 left-0 w-px bg-slate-600" />
              {/* Up arrow head */}
              <div className="absolute -top-1 -left-[3px] h-0 w-0 border-x-[4px] border-x-transparent border-b-[6px] border-b-slate-600" />
            </div>
            {/* Y label, vertical writing-mode, aligned to container left edge (matches text above) */}
            <div className="hidden md:flex pointer-events-none absolute left-0 top-0 bottom-12 items-center">
              <div className="[writing-mode:vertical-rl] rotate-180 whitespace-nowrap text-[11px] font-bold uppercase tracking-[3px] text-slate-400">
                Business Value
              </div>
            </div>

            <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-3 lg:gap-10">
              {ladder.map((stage) => (
                <div
                  key={stage.title}
                  className={`group relative rounded-2xl border ${stage.bg} ${stage.height} flex flex-col p-7 transition-transform duration-300 hover:-translate-y-1`}
                >
                  {stage.highlight && (
                    <div className="mt-6 mb-3 -translate-y-2 inline-flex w-fit items-center gap-1.5 rounded-full border border-primary-300/40 bg-primary-500/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[2px] text-primary-200">
                      <Sparkles className="h-3 w-3" />
                      AI-Driven
                    </div>
                  )}
                  <div className={`${stage.highlight ? 'text-2xl md:text-3xl font-extrabold' : 'text-xl md:text-2xl font-semibold'} italic ${stage.text} mb-2`}>{stage.title}</div>
                  <div className="mb-5 text-[11px] font-bold uppercase tracking-[2px] text-slate-300">{stage.label}</div>
                  <ul className={`flex-1 flex flex-col justify-center space-y-2.5 py-4 text-sm leading-relaxed ${stage.text}`}>
                    {stage.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* X-axis (horizontal line + arrow + label) */}
            <div className="hidden md:block pointer-events-none absolute left-10 right-0 bottom-12">
              <div className="relative h-px bg-slate-600">
                {/* Right arrow head */}
                <div className="absolute -right-[1px] -top-[3px] h-0 w-0 border-y-[4px] border-y-transparent border-l-[6px] border-l-slate-600" />
              </div>
            </div>
            <div className="absolute left-1/2 bottom-2 -translate-x-1/2 text-[11px] font-bold uppercase tracking-[3px] text-slate-400">
              Client Journey
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

