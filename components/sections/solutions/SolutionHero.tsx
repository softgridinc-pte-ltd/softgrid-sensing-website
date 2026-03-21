import { Button } from '@/components/ui/Button'

interface SolutionHeroProps {
  overline: string
  headline: string
  subheadline: string
}

export function SolutionHero({ overline, headline, subheadline }: SolutionHeroProps): React.ReactElement {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full blur-[160px]"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,180,216,0.1) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center" data-animate>
        <div className="flex items-center gap-3.5 justify-center mb-8">
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-cyan-400" />
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-[3px]">{overline}</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
          {headline}
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
          {subheadline}
        </p>
        <Button href="/contact" variant="primary" className="min-w-[160px]">
          Contact Us
        </Button>
      </div>
    </section>
  )
}
