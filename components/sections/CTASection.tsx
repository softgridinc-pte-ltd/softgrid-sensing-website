'use client'

import { Button } from '@/components/ui/Button'

type CTAVariant = 'brand' | 'dark' | 'gradient'

interface CTASectionProps {
  variant?: CTAVariant
  headline?: string
  description?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

function getVariantClasses(variant: CTAVariant): string {
  switch (variant) {
    case 'brand':
      return 'bg-primary-500'
    case 'dark':
      return 'bg-navy-800'
    case 'gradient':
      return 'bg-gradient-to-br from-navy-900 via-navy-800 to-primary-900'
  }
}

function getOverlayStyle(variant: CTAVariant): React.CSSProperties | undefined {
  if (variant === 'brand') {
    return {
      background:
        'radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(0,0,0,0.1) 0%, transparent 50%)',
    }
  }
  if (variant === 'dark' || variant === 'gradient') {
    return {
      background:
        'radial-gradient(ellipse at 50% 50%, rgba(31,153,197,0.08) 0%, transparent 60%)',
    }
  }
  return undefined
}

export function CTASection({
  variant = 'brand',
  headline = 'Ready to Transform Your Operations?',
  description = "Let's discuss how Softgrid can help you move from reactive to predictive.",
  primaryLabel = 'Contact Us',
  primaryHref = '/contact',
  secondaryLabel = 'Book a Demo',
  secondaryHref = '/contact',
}: CTASectionProps): React.ReactElement {
  const isBrand = variant === 'brand'
  const subtitleColor = isBrand ? 'text-white/80' : 'text-slate-400'

  return (
    <section className={`${getVariantClasses(variant)} py-20 md:py-28 relative overflow-hidden`}>
      {/* Overlay for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={getOverlayStyle(variant)}
      />

      <div data-animate-stagger className="max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10">
        <h2
          data-animate
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          {headline}
        </h2>
        <p
          data-animate
          className={`text-lg ${subtitleColor} mb-10 leading-relaxed`}
        >
          {description}
        </p>
        <div
          data-animate
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href={primaryHref} variant={isBrand ? 'white' : 'primary'} className="min-w-[160px]">
            {primaryLabel}
          </Button>
          <Button href={secondaryHref} variant="secondary" className="min-w-[160px]">
            {secondaryLabel}
          </Button>
        </div>
      </div>
    </section>
  )
}
