interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
  colorScheme?: 'dark' | 'light'
  className?: string
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  colorScheme = 'dark',
  className = '',
}: SectionHeaderProps): React.ReactElement {
  const titleColor = colorScheme === 'light' ? 'text-navy-900' : 'text-white'
  const subtitleColor = colorScheme === 'light' ? 'text-navy-600' : 'text-cyan-400'

  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className={`text-3xl md:text-4xl font-bold ${titleColor} mb-4 leading-tight`}>
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg ${subtitleColor} ${
            centered ? 'max-w-2xl mx-auto' : ''
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
