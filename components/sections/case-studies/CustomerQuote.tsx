import Image from 'next/image'

interface CustomerQuoteProps {
  quote: string
  attribution?: string
  logo?: string
  logoAlt?: string
}

export function CustomerQuote({
  quote,
  attribution,
  logo,
  logoAlt,
}: CustomerQuoteProps): React.ReactElement {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-24 md:py-32">
      {/* Cyan radial glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(31,153,197,0.14) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-3xl px-6 md:px-12 text-center" data-animate>
        <div
          className="absolute -left-4 -top-12 select-none font-serif text-[140px] leading-none text-primary-400/40"
          aria-hidden
        >
          &ldquo;
        </div>
        <p className="relative text-xl md:text-2xl font-medium italic leading-[1.7] text-slate-200">
          {quote}
        </p>
        {(attribution || logo) && (
          <div className="mt-10 flex items-center justify-center gap-5">
            {logo && (
              <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-white/15 bg-white/95 p-2">
                <Image src={logo} alt={logoAlt ?? ''} width={48} height={48} className="h-full w-auto object-contain" />
              </div>
            )}
            {attribution && (
              <div className="text-left text-sm uppercase tracking-wider text-slate-400">
                {attribution}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
