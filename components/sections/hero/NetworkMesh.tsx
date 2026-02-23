'use client'

interface Particle {
  cx: number
  cy: number
  r: number
  opacity: number
  delay: number
  duration: number
}

interface Connection {
  x1: number
  y1: number
  x2: number
  y2: number
  pulseDelay: number
  pulseDuration: number
}

const PARTICLES: readonly Particle[] = [
  // Left region
  { cx: 80, cy: 120, r: 1.5, opacity: 0.3, delay: 0, duration: 22 },
  { cx: 150, cy: 380, r: 2, opacity: 0.4, delay: 5, duration: 28 },
  { cx: 200, cy: 600, r: 1.5, opacity: 0.25, delay: 12, duration: 24 },
  { cx: 100, cy: 750, r: 2.5, opacity: 0.35, delay: 8, duration: 20 },
  { cx: 280, cy: 200, r: 2, opacity: 0.3, delay: 3, duration: 26 },
  { cx: 320, cy: 500, r: 1.5, opacity: 0.4, delay: 15, duration: 30 },
  // Center-left
  { cx: 420, cy: 150, r: 2, opacity: 0.35, delay: 7, duration: 25 },
  { cx: 480, cy: 350, r: 2.5, opacity: 0.3, delay: 2, duration: 22 },
  { cx: 520, cy: 580, r: 1.5, opacity: 0.4, delay: 10, duration: 28 },
  { cx: 450, cy: 720, r: 2, opacity: 0.25, delay: 18, duration: 24 },
  // Center
  { cx: 620, cy: 100, r: 2, opacity: 0.3, delay: 4, duration: 26 },
  { cx: 680, cy: 280, r: 2.5, opacity: 0.35, delay: 11, duration: 20 },
  { cx: 720, cy: 450, r: 2, opacity: 0.4, delay: 6, duration: 30 },
  { cx: 760, cy: 650, r: 1.5, opacity: 0.3, delay: 14, duration: 22 },
  { cx: 700, cy: 800, r: 2, opacity: 0.25, delay: 1, duration: 28 },
  // Center-right
  { cx: 880, cy: 180, r: 1.5, opacity: 0.35, delay: 9, duration: 24 },
  { cx: 940, cy: 400, r: 2, opacity: 0.3, delay: 16, duration: 26 },
  { cx: 960, cy: 580, r: 2.5, opacity: 0.4, delay: 3, duration: 20 },
  { cx: 900, cy: 750, r: 2, opacity: 0.25, delay: 13, duration: 30 },
  // Right region
  { cx: 1080, cy: 130, r: 2, opacity: 0.3, delay: 7, duration: 22 },
  { cx: 1140, cy: 320, r: 1.5, opacity: 0.4, delay: 0, duration: 28 },
  { cx: 1200, cy: 520, r: 2, opacity: 0.35, delay: 11, duration: 24 },
  { cx: 1100, cy: 680, r: 2.5, opacity: 0.25, delay: 5, duration: 26 },
  { cx: 1280, cy: 200, r: 2, opacity: 0.3, delay: 17, duration: 20 },
  { cx: 1320, cy: 450, r: 1.5, opacity: 0.4, delay: 8, duration: 30 },
  { cx: 1360, cy: 700, r: 2, opacity: 0.35, delay: 2, duration: 22 },
  // Extra scattered
  { cx: 50, cy: 500, r: 1.5, opacity: 0.25, delay: 19, duration: 26 },
  { cx: 380, cy: 80, r: 2, opacity: 0.3, delay: 14, duration: 24 },
  { cx: 820, cy: 50, r: 1.5, opacity: 0.35, delay: 6, duration: 28 },
  { cx: 1400, cy: 350, r: 2, opacity: 0.25, delay: 10, duration: 20 },
] as const

const CONNECTIONS: readonly Connection[] = [
  // Left cluster
  { x1: 80, y1: 120, x2: 280, y2: 200, pulseDelay: 0, pulseDuration: 5 },
  { x1: 280, y1: 200, x2: 150, y2: 380, pulseDelay: 1.2, pulseDuration: 4 },
  { x1: 150, y1: 380, x2: 320, y2: 500, pulseDelay: 2.5, pulseDuration: 6 },
  { x1: 200, y1: 600, x2: 320, y2: 500, pulseDelay: 0.8, pulseDuration: 5 },
  // Center-left cluster
  { x1: 420, y1: 150, x2: 480, y2: 350, pulseDelay: 1.8, pulseDuration: 4 },
  { x1: 480, y1: 350, x2: 520, y2: 580, pulseDelay: 3, pulseDuration: 6 },
  { x1: 280, y1: 200, x2: 420, y2: 150, pulseDelay: 0.5, pulseDuration: 5 },
  // Center cluster
  { x1: 620, y1: 100, x2: 680, y2: 280, pulseDelay: 2, pulseDuration: 4 },
  { x1: 680, y1: 280, x2: 720, y2: 450, pulseDelay: 0.3, pulseDuration: 5 },
  { x1: 720, y1: 450, x2: 760, y2: 650, pulseDelay: 1.5, pulseDuration: 6 },
  { x1: 480, y1: 350, x2: 680, y2: 280, pulseDelay: 3.5, pulseDuration: 4 },
  // Center-right cluster
  { x1: 880, y1: 180, x2: 940, y2: 400, pulseDelay: 1, pulseDuration: 5 },
  { x1: 940, y1: 400, x2: 960, y2: 580, pulseDelay: 2.2, pulseDuration: 4 },
  { x1: 720, y1: 450, x2: 940, y2: 400, pulseDelay: 0.7, pulseDuration: 6 },
  // Right cluster
  { x1: 1080, y1: 130, x2: 1140, y2: 320, pulseDelay: 1.8, pulseDuration: 5 },
  { x1: 1140, y1: 320, x2: 1200, y2: 520, pulseDelay: 3.2, pulseDuration: 4 },
  { x1: 1200, y1: 520, x2: 1100, y2: 680, pulseDelay: 0.4, pulseDuration: 6 },
  { x1: 880, y1: 180, x2: 1080, y2: 130, pulseDelay: 2.8, pulseDuration: 5 },
  // Cross connections
  { x1: 1280, y1: 200, x2: 1320, y2: 450, pulseDelay: 1.5, pulseDuration: 4 },
  { x1: 1320, y1: 450, x2: 1360, y2: 700, pulseDelay: 0.2, pulseDuration: 6 },
] as const

export function NetworkMesh(): React.ReactElement {
  return (
    <div className="absolute inset-0 z-[1] overflow-hidden" aria-hidden="true">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Connection lines */}
        {CONNECTIONS.map((conn, i) => (
          <line
            key={`conn-${i}`}
            x1={conn.x1}
            y1={conn.y1}
            x2={conn.x2}
            y2={conn.y2}
            stroke="#00b4d8"
            strokeWidth="0.5"
            className="hero-connection"
            style={{
              '--pulse-delay': `${conn.pulseDelay}s`,
              '--pulse-duration': `${conn.pulseDuration}s`,
            } as React.CSSProperties}
          />
        ))}

        {/* Floating particles */}
        {PARTICLES.map((p, i) => (
          <circle
            key={`particle-${i}`}
            cx={p.cx}
            cy={p.cy}
            r={p.r}
            fill="#00b4d8"
            className="hero-particle"
            style={{
              '--particle-opacity': p.opacity,
              '--delay': `${p.delay}s`,
              '--duration': `${p.duration}s`,
            } as React.CSSProperties}
          />
        ))}
      </svg>
    </div>
  )
}
