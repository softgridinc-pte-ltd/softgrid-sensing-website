import { Button } from '@/components/ui/Button'

interface SolutionHeroProps {
  overline: string
  headline: string
  subheadline: string
}

export function SolutionHero({ overline, headline, subheadline }: SolutionHeroProps): React.ReactElement {
  return (
    <section
      className="relative pt-36 pb-20 md:pt-44 md:pb-24 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0A1628 0%, #162544 100%)' }}
    >
      {/* Grid texture */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(0,180,216,0.08) 0%, transparent 50%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-16 text-center" data-animate>
        {/* Overline with gradient line */}
        <div className="flex items-center gap-3 justify-center mb-5">
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-cyan-400" />
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-[3px]">{overline}</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 max-w-4xl mx-auto leading-[1.1] tracking-tight">
          {headline}
        </h1>

        <p className="text-lg text-slate-400 max-w-[620px] mx-auto leading-[1.7] mb-9">
          {subheadline}
        </p>

        <Button href="/contact" variant="primary" className="px-9 py-4 rounded-md">
          Contact Us
        </Button>
      </div>
    </section>
  )
}
