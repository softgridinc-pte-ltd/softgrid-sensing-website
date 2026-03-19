'use client'

import { Button } from '@/components/ui/Button'
import { useScrollRevealGroup } from '@/hooks/useScrollRevealGroup'

export function CTASection(): React.ReactElement {
  const { containerRef, getItemProps } = useScrollRevealGroup()

  return (
    <section className="bg-navy-900 py-16 md:py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/8 rounded-full blur-[120px]" />

      <div ref={containerRef} className="max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10">
        <h2
          className={`text-3xl md:text-4xl font-bold text-white mb-4 ${getItemProps(0).className}`}
          style={getItemProps(0).style}
        >
          Ready to Transform Your Operations?
        </h2>
        <p
          className={`text-lg text-slate-400 mb-10 leading-relaxed ${getItemProps(1).className}`}
          style={getItemProps(1).style}
        >
          Let&apos;s discuss how Softgrid can help you move from reactive to predictive.
        </p>
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${getItemProps(2).className}`}
          style={getItemProps(2).style}
        >
          <Button href="/contact" variant="primary" className="min-w-[160px]">
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
