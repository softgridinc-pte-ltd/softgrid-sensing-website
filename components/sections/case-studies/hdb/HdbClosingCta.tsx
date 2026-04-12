import { Button } from '@/components/ui/Button'

export function HdbClosingCta(): React.ReactElement {
  return (
    <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-primary-900 py-20 md:py-28 relative overflow-hidden">
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(31,153,197,0.08) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 text-center" data-animate-stagger>
        <h2
          data-animate
          className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight tracking-tight"
        >
          HDB was the first national deployment. It won&apos;t be the last.
        </h2>

        <div data-animate className="space-y-5 text-lg text-slate-400 leading-relaxed mb-10">
          <p>
            The AFOS platform is now extending beyond lifts — into energy, HVAC, security, and integrated facility operations — across commercial, industrial, and public-sector portfolios in Singapore and the region.
          </p>
          <p>
            If you&apos;re responsible for a facility portfolio, a building operations team, or an investment thesis in urban infrastructure AI — we should talk.
          </p>
        </div>

        <div data-animate>
          <Button href="/contact" variant="primary" className="min-w-[200px]">
            Talk to our team &rarr;
          </Button>
        </div>
      </div>
    </section>
  )
}
