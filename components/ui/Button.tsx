import Link from 'next/link'

import type { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: ButtonVariant
  className?: string
  onClick?: () => void
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:scale-[1.02]',
  secondary:
    'border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200',
  ghost:
    'text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-200',
}

export function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
}: ButtonProps): React.ReactElement {
  const styles = `${variantStyles[variant]} ${className}`.trim()

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
