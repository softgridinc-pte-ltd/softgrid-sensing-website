'use client'

import { Button } from '@/components/ui/Button'
import { AfosArchitectureSvg } from '@/components/sections/platform/AfosArchitectureSvg'

export function PlatformSection(): React.ReactElement {
  return (
    <section id="platform" className="relative overflow-hidden py-16 md:py-24 bg-[#020617]">
      {/* Dot pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(#1e3a5f 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      {/* Cyan aurora glow behind diagram */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section header */}
        <div data-animate className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            One Platform. Modular Products. Tailored Solutions.
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            AFOS is an AI-driven Facility Operating System &mdash; a modular platform that replaces fragmented tools and manual processes with one unified system for facility operations.
          </p>
        </div>

        {/* Architecture diagram — gradient-bordered glowing card */}
        <div data-animate className="relative mx-auto max-w-6xl">
          {/* Outer glow halo */}
          <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-cyan-500/35 opacity-80 blur-2xl" />
          {/* Gradient border (using padding trick) */}
          <div className="relative rounded-2xl bg-gradient-to-br from-cyan-400/80 via-cyan-500/30 to-blue-500/60 p-[1.5px] shadow-[0_0_160px_-15px_rgba(34,211,238,0.7)]">
            {/* Inner card */}
            <div className="rounded-[14px] bg-[#0a1628] p-6 md:p-10 ring-1 ring-inset ring-white/5">
              <AfosArchitectureSvg />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div data-animate className="text-center mt-12">
          <Button href="/platform" variant="ghost">
            Explore the Platform &rarr;
          </Button>
        </div>
      </div>
    </section>
  )
}
