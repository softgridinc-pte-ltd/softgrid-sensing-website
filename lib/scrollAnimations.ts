export type ScrollAnimation = 'fade-up' | 'fade-left' | 'fade-right' | 'scale-up' | 'fade-in'

interface AnimationPreset {
  readonly hidden: string
  readonly visible: string
}

export const ANIMATION_PRESETS: Record<ScrollAnimation, AnimationPreset> = {
  'fade-up': {
    hidden: 'opacity-0 translate-y-[60px]',
    visible: 'opacity-100 translate-y-0',
  },
  'fade-left': {
    hidden: 'opacity-0 -translate-x-[40px]',
    visible: 'opacity-100 translate-x-0',
  },
  'fade-right': {
    hidden: 'opacity-0 translate-x-[40px]',
    visible: 'opacity-100 translate-x-0',
  },
  'scale-up': {
    hidden: 'opacity-0 scale-95',
    visible: 'opacity-100 scale-100',
  },
  'fade-in': {
    hidden: 'opacity-0',
    visible: 'opacity-100',
  },
}

const TRANSITION_BASE = 'transition-all duration-[600ms] ease-out'

export function getHiddenClass(animation: ScrollAnimation): string {
  return `${ANIMATION_PRESETS[animation].hidden} ${TRANSITION_BASE}`
}

export function getVisibleClass(animation: ScrollAnimation): string {
  return `${ANIMATION_PRESETS[animation].visible} ${TRANSITION_BASE}`
}
