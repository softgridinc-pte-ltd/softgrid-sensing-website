import Image from 'next/image'

interface CaseStudyHeroProps {
  overline: string
  headline: string
  subheadline: string
  image: string
  logo?: string
  logoAlt?: string
}

export function CaseStudyHero({
  overline,
  headline,
  subheadline,
  image,
  logo,
  logoAlt,
}: CaseStudyHeroProps): React.ReactElement {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background image */}
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 object-cover opacity-30"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950/90 via-navy-900/85 to-navy-800/85" />
      {/* Radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 70% 50%, rgba(31,153,197,0.10) 0%, transparent 55%)',
        }}
      />
      {/* Grid texture */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-start gap-8 max-w-3xl" data-animate>
          {logo && (
            <div className="hidden md:flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/95 p-3 shadow-lg">
              <Image src={logo} alt={logoAlt ?? ''} width={64} height={64} className="h-full w-auto object-contain" />
            </div>
          )}
          <div>
            <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[3px] text-primary-400">
              <span className="inline-block h-px w-8 bg-gradient-to-r from-transparent to-primary-400" />
              {overline}
            </div>
            <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
              {headline}
            </h1>
            <p className="max-w-2xl text-base md:text-lg leading-relaxed text-slate-300">
              {subheadline}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
