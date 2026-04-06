import Image from 'next/image'
import { Button } from '@/components/ui/Button'

export function SolutionsHero(): React.ReactElement {
  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      {/* Background image */}
      <Image
        src="/images/background/bg14.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 object-cover opacity-35"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950/90 via-navy-900/85 to-navy-800/80" />
      {/* Radial cyan glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 70% 50%, rgba(31,153,197,0.10) 0%, transparent 55%)',
        }}
      />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div className="max-w-3xl" data-animate>
          <div className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[3px] text-primary-400">
            <span className="inline-block h-px w-10 bg-gradient-to-r from-transparent to-primary-400" />
            Solutions
          </div>
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-white">
            Solutions Built for How You Operate
          </h1>
          <p className="mb-10 max-w-2xl text-lg md:text-xl leading-relaxed text-slate-300">
            Whether you manage lifts, buildings, or entire facility portfolios — we have a proven solution that fits your needs, built on one unified platform.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" variant="primary" colorScheme="dark">
              Talk to Us
            </Button>
            <Button href="/platform" variant="secondary" colorScheme="dark">
              Explore the Platform
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
