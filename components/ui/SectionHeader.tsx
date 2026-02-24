interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  className = '',
}: SectionHeaderProps): React.ReactElement {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg text-cyan-400 ${
            centered ? 'max-w-2xl mx-auto' : ''
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
