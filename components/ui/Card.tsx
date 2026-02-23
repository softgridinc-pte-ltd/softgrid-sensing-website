import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({
  children,
  className = '',
  hover = true,
}: CardProps): React.ReactElement {
  return (
    <div
      className={`bg-navy-800 border border-navy-700 rounded-xl p-6 ${
        hover ? 'hover:border-cyan-500/50 transition-colors duration-300' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  className?: string
}

export function FeatureCard({
  icon,
  title,
  description,
  className = '',
}: FeatureCardProps): React.ReactElement {
  return (
    <Card className={`p-8 ${className}`}>
      <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/20 rounded-lg flex items-center justify-center mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-slate-100 leading-relaxed">{description}</p>
    </Card>
  )
}
