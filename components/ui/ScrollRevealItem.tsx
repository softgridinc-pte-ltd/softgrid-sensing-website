'use client'

import { useInView } from '@/hooks/useInView'
import { getHiddenClass, getVisibleClass } from '@/lib/scrollAnimations'

import type { ScrollAnimation } from '@/lib/scrollAnimations'

interface ScrollRevealItemProps {
  children: React.ReactNode
  animation?: ScrollAnimation
  className?: string
}

export function ScrollRevealItem({
  children,
  animation = 'fade-up',
  className = '',
}: ScrollRevealItemProps): React.ReactElement {
  const { ref, isInView } = useInView({ threshold: 0.15, rootMargin: '0px 0px -40px 0px' })

  return (
    <div ref={ref} className={`${isInView ? getVisibleClass(animation) : getHiddenClass(animation)} ${className}`}>
      {children}
    </div>
  )
}
