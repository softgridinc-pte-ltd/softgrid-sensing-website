'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { IBM_Plex_Mono } from 'next/font/google'

import styles from './PatrolensFinder.module.css'

import type { CSSProperties, KeyboardEvent } from 'react'

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

/** Seconds shown on the REC timecode when the animation starts (00:14:32). */
const TIMECODE_START_S = 872

interface Detection {
  label: string
  left: string
  top: string
  width: string
  height: string
  confirm?: boolean
  below?: boolean
  right?: boolean
}

interface Scene {
  id: string
  tab: string
  src: string
  alt: string
  hud: string
  detections: Detection[]
}

const scenes: Scene[] = [
  {
    id: 'lift',
    tab: 'Lifts',
    src: '/images/products/patrolens/scene-lift.svg',
    alt: 'Illustration: inside a lift car, with debris in the door sill, a damaged button panel and a ceiling light out.',
    hud: 'LIFT B, MONTHLY CHECK',
    detections: [
      { label: 'Debris in door sill', left: '35%', top: '84.3%', width: '14%', height: '6.3%', confirm: true },
      { label: 'Damaged button panel', left: '80%', top: '39.7%', width: '9.25%', height: '32.3%', right: true, below: true },
      { label: 'Light not working', left: '49.5%', top: '7.3%', width: '19.5%', height: '12%', below: true },
    ],
  },
  {
    id: 'estate',
    tab: 'Estates',
    src: '/images/products/patrolens/scene-estate.svg',
    alt: 'Illustration: a housing-block corridor, with boxes blocking the corridor, water seepage on the ceiling and a light out.',
    hud: 'BLK 214, LEVEL 7',
    detections: [
      { label: 'Corridor obstruction', left: '66.25%', top: '55%', width: '13.75%', height: '23.3%', confirm: true },
      { label: 'Water seepage', left: '63.1%', top: '13%', width: '13.1%', height: '7.7%', below: true },
      { label: 'Light not working', left: '49%', top: '18%', width: '9.75%', height: '5.3%', right: true },
    ],
  },
  {
    id: 'power',
    tab: 'Power',
    src: '/images/products/patrolens/scene-power.svg',
    alt: 'Illustration: a substation yard, with an oil leak under a transformer, a gate left open and vegetation on the fence.',
    hud: 'SUBSTATION 12, PATROL',
    detections: [
      { label: 'Oil leak', left: '33.75%', top: '74%', width: '22.5%', height: '9%', confirm: true },
      { label: 'Gate left open', left: '66.25%', top: '31.7%', width: '10%', height: '28.7%' },
      { label: 'Vegetation on fence', left: '1%', top: '28.7%', width: '21%', height: '28.5%' },
    ],
  },
]

function formatTimecode(totalSeconds: number): string {
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0')
  const seconds = String(totalSeconds % 60).padStart(2, '0')
  return `00:${minutes}:${seconds}`
}

function useTimecode(): string {
  const [seconds, setSeconds] = useState(TIMECODE_START_S)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const timer = window.setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => window.clearInterval(timer)
  }, [])

  return formatTimecode(seconds)
}

function DetectionBox({ detection, index }: { detection: Detection; index: number }): React.ReactElement {
  const className = [
    styles.box,
    detection.confirm ? styles.confirm : '',
    detection.below ? styles.below : '',
    detection.right ? styles.right : '',
  ].join(' ')
  const style = {
    left: detection.left,
    top: detection.top,
    width: detection.width,
    height: detection.height,
    '--i': index,
  } as CSSProperties

  return (
    <div className={className} style={style} aria-hidden>
      <span className={styles.tag}>
        <span>{detection.label}</span>
        <span className={styles.sts}>
          <span className={`${styles.st} ${styles.pending}`}>Pending review</span>
          {detection.confirm && <span className={`${styles.st} ${styles.confirmed}`}>Confirmed</span>}
        </span>
      </span>
    </div>
  )
}

export function PatrolensFinder(): React.ReactElement {
  const [active, setActive] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const timecode = useTimecode()

  const select = useCallback((index: number, focus = false): void => {
    const next = (index + scenes.length) % scenes.length
    setActive(next)
    if (focus) tabRefs.current[next]?.focus()
  }, [])

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>): void => {
    if (event.key === 'ArrowRight') select(active + 1, true)
    if (event.key === 'ArrowLeft') select(active - 1, true)
  }

  return (
    <figure className={`${styles.finder} ${plexMono.variable}`}>
      <div className={styles.tabs} role="tablist" aria-label="Patrolens AI patrol inspection">
        {scenes.map((scene, i) => (
          <button
            key={scene.id}
            ref={(el) => {
              tabRefs.current[i] = el
            }}
            type="button"
            role="tab"
            id={`patrolens-tab-${scene.id}`}
            aria-controls={`patrolens-scene-${scene.id}`}
            aria-selected={i === active}
            tabIndex={i === active ? 0 : -1}
            className={styles.tab}
            onClick={() => select(i)}
            onKeyDown={handleKeyDown}
          >
            {scene.tab}
            <span className={styles.prog} aria-hidden onAnimationEnd={() => i === active && select(i + 1)} />
          </button>
        ))}
      </div>

      <div className={styles.frame}>
        {scenes.map((scene, i) => (
          <div
            key={scene.id}
            id={`patrolens-scene-${scene.id}`}
            role="tabpanel"
            aria-labelledby={`patrolens-tab-${scene.id}`}
            className={`${styles.pane} ${i === active ? styles.active : ''}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- static SVG illustration, no optimisation needed */}
            <img src={scene.src} alt={scene.alt} className={styles.art} width={800} height={600} />
            {scene.detections.map((d, j) => (
              <DetectionBox key={d.label} detection={d} index={j} />
            ))}
            <div className={`${styles.hud} ${styles.tr}`} aria-hidden>
              {scene.hud}
            </div>
          </div>
        ))}
        <div className={styles.scan} aria-hidden />
        <div className={`${styles.hud} ${styles.tl}`} aria-hidden>
          <span className={styles.dot} />
          REC <span>{timecode}</span>
        </div>
        <div className={`${styles.hud} ${styles.bl}`} aria-hidden>
          1.3521&deg; N, 103.8198&deg; E
        </div>
        <div className={`${styles.hud} ${styles.br}`} aria-hidden>
          COVERAGE 62%
          <span className={styles.bar}>
            <span />
          </span>
        </div>
      </div>

      {['c1', 'c2', 'c3', 'c4'].map((c) => (
        <span key={c} className={`${styles.corner} ${styles[c]}`} aria-hidden />
      ))}
      <figcaption className={styles.caption}>Illustrative scenes.</figcaption>
    </figure>
  )
}
