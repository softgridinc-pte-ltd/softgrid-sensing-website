interface CortexIconProps {
  className?: string
  size?: number | string
  color?: string
}

/**
 * Cortex product icon — multi-node graph.
 * Used site-wide wherever the Cortex product is shown.
 */
export function CortexIcon({
  className,
  size = 24,
  color = 'currentColor',
}: CortexIconProps): React.ReactElement {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="13" cy="13" r="2.8" fill={color} />
      <circle cx="4" cy="5" r="1.9" fill={color} />
      <circle cx="22" cy="5" r="1.9" fill={color} />
      <circle cx="4" cy="21" r="1.9" fill={color} />
      <circle cx="22" cy="21" r="1.9" fill={color} />
      <circle cx="13" cy="2.5" r="1.4" fill={color} />
      <circle cx="13" cy="23.5" r="1.4" fill={color} />
      <line x1="10.4" y1="11" x2="5.9" y2="6.9" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="15.6" y1="11" x2="20.1" y2="6.9" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="10.4" y1="15" x2="5.9" y2="19.1" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="15.6" y1="15" x2="20.1" y2="19.1" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="13" y1="10" x2="13" y2="3.8" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="13" y1="16" x2="13" y2="22.2" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
