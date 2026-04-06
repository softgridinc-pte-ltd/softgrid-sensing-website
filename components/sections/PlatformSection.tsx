'use client'

import { Button } from '@/components/ui/Button'
import { AfosArchitectureSvg } from '@/components/sections/platform/AfosArchitectureSvg'

export function PlatformSection(): React.ReactElement {
  return (
    <section id="platform" className="relative overflow-hidden py-16 md:py-24 bg-navy-800">
      {/* Dot pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(#1e3a5f 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      {/* Cyan aurora glow behind diagram */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/12 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section header */}
        <div data-animate className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            One Platform. Modular Products. Tailored Solutions.
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            AFOS is an AI-driven Facility Operating System &mdash; a modular platform that replaces fragmented tools and manual processes with one unified system for facility operations.
          </p>
        </div>

        {/* Architecture diagram — gradient-bordered glowing card */}
        <div data-animate className="relative mx-auto max-w-6xl">
          {/* Outer glow halo */}
          <div className="pointer-events-none absolute -inset-2 rounded-3xl bg-cyan-500/20 opacity-70 blur-xl" />
          {/* Gradient border (using padding trick) */}
          <div className="relative rounded-2xl bg-gradient-to-br from-cyan-400/80 via-cyan-500/30 to-cyan-600/60 p-[1.5px] shadow-[0_0_80px_-20px_rgba(34,211,238,0.5)]">
            {/* Inner card */}
            <div className="rounded-[14px] bg-gradient-to-b from-[#143d6b] to-[#0c2950] p-6 md:p-10 ring-1 ring-inset ring-white/5">
              <AfosArchitectureSvg />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div data-animate className="text-center mt-12">
          <Button href="/platform" variant="ghost" className="!text-white hover:!text-cyan-300">
            Explore the Platform &rarr;
          </Button>
        </div>
      </div>
    </section>
  )
}
