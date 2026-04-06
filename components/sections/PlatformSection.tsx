'use client'

import { Button } from '@/components/ui/Button'
import { AfosArchitectureSvg } from '@/components/sections/platform/AfosArchitectureSvg'

export function PlatformSection(): React.ReactElement {
  return (
    <section id="platform" className="bg-gradient-to-b from-slate-50 via-white to-slate-100 py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section header */}
        <div data-animate className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            One Platform. Modular Products. Tailored Solutions.
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            AFOS is an AI-driven Facility Operating System &mdash; a modular platform that replaces fragmented tools and manual processes with one unified system for facility operations.
          </p>
        </div>

        {/* Architecture diagram (hand-crafted SVG) */}
        <div data-animate className="mx-auto max-w-5xl">
          <AfosArchitectureSvg />
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
