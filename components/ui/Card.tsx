import type { ReactNode } from 'react'

type ColorScheme = 'dark' | 'light'

interface CardProps {
  children: ReactNode
  colorScheme?: ColorScheme
  className?: string
  hover?: boolean
}

function getCardStyles(colorScheme: ColorScheme, hover: boolean): string {
  const base = 'rounded-2xl transition-all duration-300'

  if (colorScheme === 'light') {
    return `${base} bg-white border border-slate-200 ${
      hover ? 'hover:-translate-y-1 hover:shadow-lg hover:border-primary-200' : ''
    }`
  }

  return `${base} bg-navy-800 border border-navy-700 ${
    hover ? 'hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(31,153,197,0.12)] hover:border-primary-500/30' : ''
  }`
}

export function Card({
  children,
  colorScheme = 'dark',
  className = '',
  hover = true,
}: CardProps): React.ReactElement {
  return (
    <div className={`${getCardStyles(colorScheme, hover)} ${className}`}>
      {children}
    </div>
  )
}

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  colorScheme?: ColorScheme
  className?: string
}

export function FeatureCard({
  icon,
  title,
  description,
  colorScheme = 'dark',
  className = '',
}: FeatureCardProps): React.ReactElement {
  const isLight = colorScheme === 'light'
  const iconBg = isLight ? 'bg-primary-50 border-primary-100' : 'bg-primary-500/10 border-primary-500/20'
  const titleColor = isLight ? 'text-navy-900' : 'text-white'
  const descColor = isLight ? 'text-slate-600' : 'text-slate-400'

  return (
    <Card colorScheme={colorScheme} className={`p-8 ${className}`}>
      <div className={`w-12 h-12 ${iconBg} border rounded-lg flex items-center justify-center mb-5`}>
        {icon}
      </div>
      <h3 className={`text-xl font-semibold ${titleColor} mb-3`}>{title}</h3>
      <p className={`${descColor} leading-relaxed`}>{description}</p>
    </Card>
  )
}
