import Link from 'next/link'

import type { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'white'
type ColorScheme = 'dark' | 'light'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: ButtonVariant
  colorScheme?: ColorScheme
  className?: string
  onClick?: () => void
}

function getVariantStyles(variant: ButtonVariant, colorScheme: ColorScheme): string {
  const shared = 'font-semibold transition-all duration-200'

  switch (variant) {
    case 'primary':
      return `${shared} bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg hover:shadow-[0_0_32px_rgba(0,180,216,0.4)] hover:scale-[1.02]`
    case 'secondary':
      return colorScheme === 'light'
        ? `${shared} border-[1.5px] border-slate-300 text-navy-900 px-6 py-3 rounded-lg hover:border-slate-400`
        : `${shared} border-[1.5px] border-white/20 text-white px-6 py-3 rounded-lg hover:border-white/40`
    case 'ghost':
      return colorScheme === 'light'
        ? `${shared} text-cyan-600 hover:text-cyan-700`
        : `${shared} text-cyan-400 hover:text-cyan-300`
    case 'white':
      return `${shared} bg-white text-navy-900 px-6 py-3 rounded-lg hover:shadow-lg hover:scale-[1.02]`
  }
}

export function Button({
  children,
  href,
  variant = 'primary',
  colorScheme = 'dark',
  className = '',
  onClick,
}: ButtonProps): React.ReactElement {
  const styles = `${getVariantStyles(variant, colorScheme)} ${className}`.trim()

  if (href) {
    return (
      <Link href={href} className={`inline-block ${styles}`}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" className={styles} onClick={onClick}>
      {children}
    </button>
  )
}
