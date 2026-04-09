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
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage: 'radial-gradient(#264163 1.1px, transparent 1.1px)',
          backgroundSize: '24px 24px',
        }}
      />
      {/* Cyan aurora glow behind diagram */}
      <div className="pointer-events-none absolute right-0 top-1/2 h-[600px] w-[800px] -translate-y-1/2 translate-x-1/4 rounded-full bg-cyan-500/12 blur-3xl" />

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-20">
          {/* Left: copy */}
          <div data-animate>
            <div className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[3px] text-primary-300">
              <span className="inline-block h-px w-10 bg-gradient-to-r from-transparent to-primary-300" />
              The AFOS Platform
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

            <ul className="relative space-y-7 pl-9">
              {/* Vertical axis line — centered on x = 12px from ul left edge */}
              <span
                aria-hidden
                className="pointer-events-none absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/70 via-cyan-500/40 to-cyan-600/20"
              />
              {pillars.map((p) => (
                <li key={p.title} className="relative">
                  {/* Dot anchor — 10px square, centered on the axis line */}
                  <span
                    aria-hidden
                    className="absolute top-[8px] left-[-29px] inline-block h-[10px] w-[10px] rounded-full bg-cyan-400 shadow-[0_0_0_3px_rgba(34,211,238,0.45),0_0_0_6px_#111D35,0_0_16px_rgba(34,211,238,0.5)]"
                  />
                  <div className="mb-1 text-sm font-bold uppercase tracking-[1.5px] text-white">
                    {p.title}
                  </div>
                  <div className="text-[15px] leading-[1.7] text-slate-400">{p.body}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: foundation diagram */}
          <div data-animate className="relative">
            <FoundationDiagram />
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <Button href="/platform" variant="ghost" className="!text-white hover:!text-cyan-300">
            Explore the Platform &rarr;
          </Button>
        </div>
      </div>
    </section>
  )
}
