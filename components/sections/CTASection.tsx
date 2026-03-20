'use client'

import { Button } from '@/components/ui/Button'

export function CTASection(): React.ReactElement {
  return (
    <section className="bg-cyan-500 py-20 md:py-28 relative overflow-hidden">
      {/* Radial gradient overlay for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(0,0,0,0.1) 0%, transparent 50%)',
        }}
      />

      <div data-animate-stagger className="max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10">
        <h2
          data-animate
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Ready to Transform Your Operations?
        </h2>
        <p
          data-animate
          className="text-lg text-white/80 mb-10 leading-relaxed"
        >
          Let&apos;s discuss how Softgrid can help you move from reactive to predictive.
        </p>
        <div
          data-animate
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="/contact" variant="white" className="min-w-[160px]">
            Contact Us
          </Button>
          <Button href="/contact" variant="secondary" className="min-w-[160px]">
            Book a Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
