import { Button } from '@/components/ui/Button'
import { PlatformFlow } from '@/components/sections/hero/PlatformFlow'
import { NetworkMesh } from '@/components/sections/hero/NetworkMesh'

export function HeroSection(): React.ReactElement {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Layer 0: Grid pattern background */}
      <div className="absolute inset-0 grid-pattern-masked opacity-100" />

      {/* Layer 1–2: Visualizations — desktop only */}
      <div className="hidden md:block">
        <NetworkMesh />
        <PlatformFlow />
      </div>

      {/* Layer 3: Top-edge light source — thin cyan horizon line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent 10%, rgba(0,180,216,0.25) 50%, transparent 90%)' }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[2px] blur-[4px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,180,216,0.4), transparent)' }}
      />

      {/* Layer 5: Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-navy-900" />

      {/* Layer 6: Primary radial glow — top-center light source */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[900px] rounded-full blur-[180px] hero-glow"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,180,216,0.18) 0%, rgba(0,180,216,0.06) 40%, transparent 70%)' }}
      />

      {/* Layer 7: Focused glow behind headline area */}
      <div
        className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full blur-[100px]"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,180,216,0.14) 0%, transparent 70%)' }}
      />

      {/* Layer 8: Soft wide ambient glow — adds depth to mid-section */}
      <div
        className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[1000px] h-[200px] rounded-full blur-[120px] opacity-60"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,180,216,0.08) 0%, transparent 70%)' }}
      />

      {/* Layer 10: Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center -mt-12">
        {/* Tagline */}
        <div className="flex items-center gap-3.5 justify-center mb-8">
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-cyan-400" />
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-[3px]">
            AI-Driven Facility Operating System
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-6 max-w-5xl mx-auto">
          Smarter Buildings. Predictive Maintenance.{' '}
          <span className="text-gradient">One Platform.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Softgrid AFOS connects your assets, predicts equipment failures, and automates facility operations &mdash; from sensor to insight, in one platform.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/solutions" variant="primary" className="min-w-[160px]">
            Explore Solutions
          </Button>
          <Button href="/contact" variant="secondary" className="min-w-[160px]">
            Book a Demo
          </Button>
        </div>

      </div>

      {/* Scroll indicator — fixed to bottom of hero */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-cyan-400">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-cyan-400 to-transparent" />
      </div>
    </section>
  )
}
