'use client'

import { Button } from '@/components/ui/Button'
import { FoundationDiagram } from '@/components/sections/platform/FoundationDiagram'

const pillars = [
  {
    title: 'One Foundation',
    body: 'A single AI + IoT operating system underpins every product, every workflow, every deployment.',
  },
  {
    title: 'Modular Products',
    body: 'Sense, Fusion, Orches, and Cortex compose freely — pick what fits, add more as you scale.',
  },
  {
    title: 'Tailored Solutions',
    body: 'The same base flexes across vertical transport, building management, facility ops, and infrastructure.',
  },
]

export function PlatformSection(): React.ReactElement {
  return (
    <section id="platform" className="relative overflow-hidden py-20 md:py-28 bg-navy-800">
      {/* Dot pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(#1e3a5f 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      {/* Cyan aurora glow behind diagram */}
      <div className="pointer-events-none absolute right-0 top-1/2 h-[600px] w-[800px] -translate-y-1/2 translate-x-1/4 rounded-full bg-cyan-500/12 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
          {/* Left: copy */}
          <div data-animate>
            <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[3px] text-primary-400">
              <span className="inline-block h-px w-10 bg-gradient-to-r from-transparent to-primary-400" />
              The Platform
            </div>
            <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-white">
              One Platform.
              <br />
              Modular Products.
              <br />
              Tailored Solutions.
            </h2>
            <p className="mb-10 text-lg leading-[1.75] text-slate-300">
              AFOS is an AI-driven Facility Operating System — one base that runs underneath every Softgrid product, composed freely into the solution each customer, industry, and site actually needs.
            </p>

            <ul className="mb-10 space-y-5">
              {pillars.map((p) => (
                <li key={p.title} className="flex gap-4">
                  <span className="mt-2 inline-block h-px w-6 flex-shrink-0 bg-primary-400" aria-hidden />
                  <div>
                    <div className="mb-1 text-sm font-bold uppercase tracking-[1.5px] text-white">
                      {p.title}
                    </div>
                    <div className="text-[15px] leading-[1.7] text-slate-400">{p.body}</div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex justify-center">
              <Button href="/platform" variant="ghost" className="!text-white hover:!text-cyan-300">
                Explore the Platform &rarr;
              </Button>
            </div>
          </div>

          {/* Right: foundation diagram in glowing card */}
          <div data-animate className="relative">
            {/* Outer glow halo */}
            <div className="pointer-events-none absolute -inset-2 rounded-3xl bg-cyan-500/20 opacity-70 blur-xl" />
            {/* Gradient border */}
            <div className="relative rounded-2xl bg-gradient-to-br from-cyan-400/80 via-cyan-500/30 to-cyan-600/60 p-[1.5px] shadow-[0_0_80px_-20px_rgba(34,211,238,0.5)]">
              <div className="rounded-[14px] bg-gradient-to-b from-[#143d6b] to-[#0c2950] p-5 md:p-7 ring-1 ring-inset ring-white/5">
                <FoundationDiagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
