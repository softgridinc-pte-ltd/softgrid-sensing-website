import Image from 'next/image'
import Link from 'next/link'
import { Cpu, MonitorDot, Workflow, ArrowRight } from 'lucide-react'
import { CortexIcon } from '@/components/icons/CortexIcon'

import { Button } from '@/components/ui/Button'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products | Softgrid Sensing',
  description:
    "Explore Softgrid's AFOS product portfolio: Sense, Fusion, Orches, and Cortex — four product series powered by the AFOS platform.",
}

interface SeriesProduct {
  name: string
  tbd?: boolean
}

interface Series {
  id: string
  name: string
  subtitle: string
  short: string
  description: string
  products: SeriesProduct[]
  href: string
  image: string
  icon: React.ReactNode
}

const series: Series[] = [
  {
    id: 'sense',
    name: 'AFOS Sense',
    subtitle: 'Edge Devices',
    short: 'Industrial IoT hardware engineered in-house.',
    description:
      'Non-intrusive sensors that install without modifying controllers or voiding warranties. Edge processing keeps assets monitored even during connectivity outages, and 4G/LTE secure tunnels stream data back the moment the link is restored. Hardware-as-a-Service — not hardware-for-sale.',
    products: [{ name: 'LMD' }, { name: 'LBB' }, { name: 'EMD' }],
    href: '/products/sense',
    image: '/images/background/bg7.jpg',
    icon: <Cpu className="h-7 w-7" strokeWidth={1.6} aria-hidden />,
  },
  {
    id: 'fusion',
    name: 'AFOS Fusion',
    subtitle: 'Monitoring & Diagnostics',
    short: 'Real-time visibility from a single sensor to a satellite.',
    description:
      "From lift vibration profiles to satellite-based land cover analysis, Fusion turns raw signals into operational intelligence. Brand-agnostic by design — it talks to whatever's already deployed in your buildings, your fleet, or your geography. See problems early; resolve them before they escalate.",
    products: [
      { name: 'LTMS' },
      { name: 'RM&D' },
      { name: 'Cloud BMS' },
      { name: 'Fusion RSA' },
      { name: 'Escalator Monitoring [TBD]', tbd: true },
    ],
    href: '/products/fusion',
    image: '/images/background/bg15.jpg',
    icon: <MonitorDot className="h-7 w-7" strokeWidth={1.6} />,
  },
  {
    id: 'orches',
    name: 'AFOS Orches',
    subtitle: 'Operations & Maintenance',
    short: 'Where alerts become work, and work becomes resolution.',
    description:
      'The workflow engine that closes the loop. Work orders, field service, asset records, and an AI voice service desk — all stitched into a single lifecycle from detection to dispatch to verified resolution. Built for managing agents who run real estate at scale.',
    products: [{ name: 'IRIS' }, { name: 'LiftProf' }, { name: 'Nova' }],
    href: '/products/orches',
    image: '/images/background/bg13.jpg',
    icon: <Workflow className="h-7 w-7" strokeWidth={1.6} />,
  },
  {
    id: 'cortex',
    name: 'AFOS Cortex',
    subtitle: 'Data & Intelligence',
    short: 'Operational data, turned into decisions and foresight.',
    description:
      'A queryable knowledge base, a 3D digital twin, predictive analytics, and automated compliance reporting. Cortex is where the platform stops describing what happened and starts telling you what to do next — grounded in your own operational history, your own equipment, your own SOPs.',
    products: [
      { name: 'Athena' },
      { name: 'Digital Twin' },
      { name: 'AI Analytics [TBD]', tbd: true },
      { name: 'ESG Reporting [TBD]', tbd: true },
    ],
    href: '/products/cortex',
    image: '/images/background/bg6.jpg',
    icon: <CortexIcon size={28} strokeWidth={1.6} />,
  },
]

const integrationTags = [
  'MQTT',
  'CoAP',
  'OPC-UA',
  'BACnet',
  'Modbus',
  'REST API',
  'Tridium Niagara',
  'Midea iBuilding',
]

export default function ProductsPage(): React.ReactElement {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900 py-28 md:py-40">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 70% 50%, rgba(31,153,197,0.10) 0%, transparent 55%)',
          }}
        />
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
          <div className="max-w-3xl" data-animate>
            <div className="mb-6 flex items-center gap-3.5">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-primary-300" />
              <span className="text-primary-300 text-sm font-bold uppercase tracking-[3px]">
                AFOS Product Portfolio
              </span>
            </div>
            <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-white">
              The Full Stack of AFOS Products —{' '}
              <span className="bg-gradient-to-r from-primary-300 to-primary-500 bg-clip-text text-transparent">
                Edge to Intelligence.
              </span>
            </h1>
            <p className="mb-10 max-w-2xl text-lg md:text-xl leading-relaxed text-slate-300">
              From edge devices to AI knowledge bases — every AFOS product is designed, developed, and deployed by our team. No reselling. No stitching together third-party tools.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" colorScheme="dark">
                Talk to Us
              </Button>
              <Button href="/platform" variant="secondary" colorScheme="dark">
                Explore the Platform
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products grid (4 columns, one per series) */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="mb-14 text-center" data-animate>
            <h2 className="mb-4 text-3xl md:text-4xl font-bold tracking-tight text-navy-900">The Complete AFOS Catalogue</h2>
            <p className="text-lg text-slate-600">
              Edge to intelligence — the full stack, built and supported in-house.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" data-animate-stagger>
            {series.map((s) => (
              <div
                key={s.id}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                data-animate
              >
                <div className="border-b border-slate-200 p-6">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                    {s.icon}
                  </div>
                  <div className="mb-1 text-lg font-bold text-navy-900">{s.name}</div>
                  <div className="text-sm leading-relaxed text-slate-500">{s.short}</div>
                </div>
                <ul className="flex-1 divide-y divide-slate-100">
                  {s.products.map((p) => {
                    const slug = p.name
                      .toLowerCase()
                      .replace(/\[tbd\]/g, '')
                      .trim()
                      .replace(/[^a-z0-9]+/g, '-')
                      .replace(/^-|-$/g, '')
                    const href = `${s.href}#${slug}`
                    const label = p.name.replace(/\s*\[TBD\]\s*/g, '').trim()
                    return (
                      <li key={p.name}>
                        {p.tbd ? (
                          <div className="flex items-center justify-between px-6 py-4 text-sm font-medium text-slate-400">
                            <span>{label}</span>
                            <span className="text-[10px] font-bold uppercase tracking-wider">Soon</span>
                          </div>
                        ) : (
                          <Link
                            href={href}
                            className="group flex items-center justify-between px-6 py-4 text-sm font-medium text-navy-800 transition hover:bg-primary-50 hover:text-primary-700"
                          >
                            <span>{label}</span>
                            <ArrowRight className="h-4 w-4 text-slate-400 transition group-hover:translate-x-1 group-hover:text-primary-600" />
                          </Link>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Per-Series Detail Blocks */}
      {series.map((s, idx) => {
        const reverse = idx % 2 === 1
        const bg = idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'
        return (
          <section key={s.id} id={s.id} className={`${bg} py-20 md:py-28 scroll-mt-24`}>
            <div className="mx-auto max-w-7xl px-6 md:px-12">
              <div className={`grid items-center gap-12 lg:gap-20 lg:grid-cols-[5fr_7fr] ${reverse ? 'lg:[&>div:first-child]:order-2' : ''}`} data-animate>
                <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200">
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/40 via-transparent to-transparent" />
                  <div className="absolute left-6 top-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/95 text-primary-600 shadow-md backdrop-blur">
                    {s.icon}
                  </div>
                </div>

                <div>
                  <div className="mb-4 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[3px] text-primary-600">
                    <span className="inline-block h-px w-10 bg-primary-500" />
                    {s.subtitle}
                  </div>
                  <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-navy-900">
                    {s.name}
                  </h2>
                  <p className="mb-8 text-lg leading-[1.8] text-slate-600">{s.description}</p>

                  <div className="mb-8 flex flex-wrap gap-2">
                    {s.products.map((p) => (
                      <span
                        key={p.name}
                        className={`inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold ${
                          p.tbd
                            ? 'border-dashed border-slate-300 text-slate-400'
                            : 'border-slate-200 bg-white text-slate-700'
                        }`}
                      >
                        {p.name}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={s.href}
                    className="group inline-flex items-center gap-2 text-base font-semibold text-primary-600 hover:text-primary-700"
                  >
                    Explore {s.name}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* Integration Strip */}
      <section className="relative overflow-hidden bg-navy-900 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[600px] rounded-full bg-cyan-500/8 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20" data-animate>
            <div>
              <div className="mb-4 text-xs font-bold uppercase tracking-[3px] text-primary-400">
                Built to Integrate
              </div>
              <h2 className="mb-6 text-3xl md:text-4xl font-bold tracking-tight text-white">
                Open by Default. Plays Nice with Your Stack.
              </h2>
              <p className="text-lg leading-relaxed text-slate-300">
                Our products work together as one system — and connect to your existing infrastructure through industry-standard protocols and cloud-to-cloud integrations. No rip-and-replace.
              </p>
            </div>
            <div className="flex flex-wrap content-start gap-3">
              {integrationTags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-primary-500/30 bg-primary-500/5 px-5 py-2 text-sm font-semibold text-primary-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative overflow-hidden bg-primary-600 py-24">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.15) 0%, transparent 50%)',
          }}
        />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center" data-animate>
          <h2 className="mb-4 text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Want to See Our Products in Action?
          </h2>
          <p className="mb-10 text-lg text-white/80">
            Schedule a walkthrough with our solutions team.
          </p>
          <Button href="/contact" variant="white">
            Request a Demo
          </Button>
        </div>
      </section>
    </>
  )
}
