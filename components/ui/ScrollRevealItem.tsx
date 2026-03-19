'use client'

import { useInView } from '@/hooks/useInView'

interface ScrollRevealItemProps {
  children: React.ReactNode
  className?: string
}

const HIDDEN = 'opacity-0 translate-y-[60px] transition-all duration-[600ms] ease-out'
const VISIBLE = 'opacity-100 translate-y-0 transition-all duration-[600ms] ease-out'

export function ScrollRevealItem({ children, className = '' }: ScrollRevealItemProps): React.ReactElement {
  const { ref, isInView } = useInView({ threshold: 0.15, rootMargin: '0px 0px -40px 0px' })

  return (
    <div ref={ref} className={`${isInView ? VISIBLE : HIDDEN} ${className}`}>
      {children}
    </div>
  )
}
