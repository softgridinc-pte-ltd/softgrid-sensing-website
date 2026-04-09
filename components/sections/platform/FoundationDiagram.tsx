'use client'

import { useEffect, useRef, useState } from 'react'

const PC = ['#00C9A7', '#4FA3E0', '#F0A500', '#A78BFA']
// Derived from app/solutions/*/page.tsx productsInvolved
// Product index: 0=Sense, 1=Fusion, 2=Orches, 3=Cortex
const SOL_MAP: number[][] = [
  [0, 1, 2, 3], // Vertical Transport: LMD/LBB/EMD + LTMS/RM&D + LiftProf + Athena
  [1, 2, 3],    // Building Mgmt: Cloud BMS + IRIS + Athena/Digital Twin
  [1, 2, 3],    // Facility Ops: IRIS/Nova/LiftProf + Athena (+ Fusion optional)
  [1, 3],       // Infra & Env: Fusion RSA + Athena/Digital Twin
]

const SOLUTIONS = ['Vertical Transport', 'Building Mgmt', 'Facility Ops', 'Infra & Env']

const PSUB = ['#5BE8C8', '#8FC8F0', '#FFC04D', '#C9B6FF']

const PRODUCTS: { name: string; sub: string; color: string; icon: React.ReactNode }[] = [
  {
    name: 'Sense',
    sub: 'EDGE DEVICES',
    color: PC[0],
    icon: (
      <svg width="32" height="32" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="2.8" fill="#00C9A7" />
        <circle cx="13" cy="13" r="6.2" stroke="#00C9A7" strokeWidth="1.4" fill="none" opacity="0.58" />
        <circle cx="13" cy="13" r="10.4" stroke="#00C9A7" strokeWidth="0.85" fill="none" opacity="0.21" />
        <line x1="13" y1="2.2" x2="13" y2="5.4" stroke="#00C9A7" strokeWidth="1.3" strokeLinecap="round" opacity="0.42" />
        <line x1="23.8" y1="13" x2="20.6" y2="13" stroke="#00C9A7" strokeWidth="1.3" strokeLinecap="round" opacity="0.42" />
        <line x1="2.2" y1="13" x2="5.4" y2="13" stroke="#00C9A7" strokeWidth="1.3" strokeLinecap="round" opacity="0.42" />
        <line x1="13" y1="23.8" x2="13" y2="20.6" stroke="#00C9A7" strokeWidth="1.3" strokeLinecap="round" opacity="0.42" />
      </svg>
    ),
  },
  {
    name: 'Fusion',
    sub: 'MONITORING',
    color: PC[1],
    icon: (
      <svg width="32" height="32" viewBox="0 0 26 26" fill="none">
        <rect x="2" y="3.2" width="22" height="4.4" rx="1.5" stroke="#4FA3E0" strokeWidth="1.2" fill="rgba(79,163,224,0.1)" opacity="0.48" />
        <rect x="4" y="10" width="18" height="4.4" rx="1.5" stroke="#4FA3E0" strokeWidth="1.4" fill="rgba(79,163,224,0.17)" opacity="0.7" />
        <rect x="7" y="16.8" width="12" height="4.4" rx="1.5" stroke="#4FA3E0" strokeWidth="1.6" fill="rgba(79,163,224,0.3)" />
        <path d="M2 7.6L4 10" stroke="#4FA3E0" strokeWidth="0.85" opacity="0.28" strokeLinecap="round" fill="none" />
        <path d="M24 7.6L22 10" stroke="#4FA3E0" strokeWidth="0.85" opacity="0.28" strokeLinecap="round" fill="none" />
        <path d="M4 14.4L7 16.8" stroke="#4FA3E0" strokeWidth="0.85" opacity="0.28" strokeLinecap="round" fill="none" />
        <path d="M22 14.4L19 16.8" stroke="#4FA3E0" strokeWidth="0.85" opacity="0.28" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    name: 'Orches',
    sub: 'OPERATION',
    color: PC[2],
    icon: (
      <svg width="32" height="32" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="4.5" r="2.7" fill="#F0A500" opacity="0.9" />
        <circle cx="4.5" cy="19.5" r="2.7" fill="#F0A500" opacity="0.7" />
        <circle cx="21.5" cy="19.5" r="2.7" fill="#F0A500" opacity="0.7" />
        <circle cx="13" cy="14" r="2.1" fill="#F0A500" opacity="0.48" />
        <line x1="13" y1="7.2" x2="13" y2="11.9" stroke="#F0A500" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="11.3" y1="15.3" x2="7" y2="17.2" stroke="#F0A500" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="14.7" y1="15.3" x2="19" y2="17.2" stroke="#F0A500" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Cortex',
    sub: 'AI',
    color: PC[3],
    icon: (
      <svg width="32" height="32" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="3" fill="#A78BFA" />
        <circle cx="4" cy="5" r="1.85" fill="#A78BFA" opacity="0.5" />
        <circle cx="22" cy="5" r="1.85" fill="#A78BFA" opacity="0.5" />
        <circle cx="4" cy="21" r="1.85" fill="#A78BFA" opacity="0.5" />
        <circle cx="22" cy="21" r="1.85" fill="#A78BFA" opacity="0.5" />
        <circle cx="13" cy="2.5" r="1.3" fill="#A78BFA" opacity="0.3" />
        <circle cx="13" cy="23.5" r="1.3" fill="#A78BFA" opacity="0.3" />
        <line x1="10.4" y1="11" x2="5.9" y2="6.9" stroke="#A78BFA" strokeWidth="0.9" opacity="0.48" strokeLinecap="round" />
        <line x1="15.6" y1="11" x2="20.1" y2="6.9" stroke="#A78BFA" strokeWidth="0.9" opacity="0.48" strokeLinecap="round" />
        <line x1="10.4" y1="15" x2="5.9" y2="19.1" stroke="#A78BFA" strokeWidth="0.9" opacity="0.48" strokeLinecap="round" />
        <line x1="15.6" y1="15" x2="20.1" y2="19.1" stroke="#A78BFA" strokeWidth="0.9" opacity="0.48" strokeLinecap="round" />
        <line x1="13" y1="10" x2="13" y2="3.8" stroke="#A78BFA" strokeWidth="0.85" opacity="0.28" strokeLinecap="round" />
        <line x1="13" y1="16" x2="13" y2="22.2" stroke="#A78BFA" strokeWidth="0.85" opacity="0.28" strokeLinecap="round" />
      </svg>
    ),
  },
]

const ENGINES = ['Connect', 'Intelligence', 'Workflow', 'Data']

interface PathInfo {
  d: string
  color: string
  pi: number
  si: number
}

interface DashInfo {
  x: number
  y1: number
  y2: number
  color: string
}

export function FoundationDiagram(): React.ReactElement {
  const wrapRef = useRef<HTMLDivElement>(null)
  const solRefs = useRef<(HTMLDivElement | null)[]>([])
  const prodRefs = useRef<(HTMLDivElement | null)[]>([])
  const platRef = useRef<HTMLDivElement>(null)
  const [hov, setHov] = useState<{ kind: 'sol' | 'prod'; idx: number } | null>(null)
  const [size, setSize] = useState({ w: 0, h: 0 })
  const [paths, setPaths] = useState<PathInfo[]>([])
  const [dashes, setDashes] = useState<DashInfo[]>([])

  useEffect(() => {
    function compute() {
      const aw = wrapRef.current
      const pb = platRef.current
      if (!aw || !pb) return
      const cr = aw.getBoundingClientRect()
      setSize({ w: cr.width, h: cr.height })
      const ptop = pb.getBoundingClientRect().top - cr.top
      const pos = (el: HTMLElement) => {
        const r = el.getBoundingClientRect()
        return { x: r.left + r.width / 2 - cr.left, yt: r.top - cr.top, yb: r.bottom - cr.top }
      }
      const newDashes: DashInfo[] = []
      const newPaths: PathInfo[] = []
      prodRefs.current.forEach((card, pi) => {
        if (!card) return
        const p = pos(card)
        newDashes.push({ x: p.x, y1: p.yb, y2: ptop, color: PC[pi] })
      })
      solRefs.current.forEach((chip, si) => {
        if (!chip) return
        const sp = pos(chip)
        SOL_MAP[si].forEach((pi) => {
          const card = prodRefs.current[pi]
          if (!card) return
          const pp = pos(card)
          const my = (pp.yt + sp.yb) / 2
          newPaths.push({
            d: `M${pp.x},${pp.yt} C${pp.x},${my} ${sp.x},${my} ${sp.x},${sp.yb}`,
            color: PC[pi],
            pi,
            si,
          })
        })
      })
      setDashes(newDashes)
      setPaths(newPaths)
    }
    compute()
    const ro = new ResizeObserver(compute)
    if (wrapRef.current) ro.observe(wrapRef.current)
    window.addEventListener('resize', compute)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', compute)
    }
  }, [])

  return (
    <div id="afos">
      <div className="arch-wrap" ref={wrapRef}>
        <svg id="lsvg" width={size.w} height={size.h}>
          <defs>
            {PC.map((c, i) => (
              <filter key={i} id={`fd-g${i}`} x="-60%" y="-100%" width="220%" height="300%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            ))}
          </defs>
          {dashes.map((d, i) => (
            <line
              key={`d${i}`}
              x1={d.x}
              y1={d.y1}
              x2={d.x}
              y2={d.y2}
              stroke={d.color}
              strokeWidth={1}
              strokeOpacity={0.09}
              strokeDasharray="2 3.5"
            />
          ))}
          {paths.map((p, i) => {
            const active =
              hov !== null &&
              ((hov.kind === 'sol' && hov.idx === p.si) ||
                (hov.kind === 'prod' && hov.idx === p.pi))
            const op = hov === null ? 0.4 : active ? 0.88 : 0.045
            const sw = active ? 2 : 1.5
            return (
              <path
                key={`p${i}`}
                d={p.d}
                fill="none"
                stroke={p.color}
                strokeWidth={sw}
                strokeOpacity={op}
                filter={active ? `url(#fd-g${p.pi})` : undefined}
                style={{ transition: 'stroke-opacity .22s, stroke-width .22s' }}
              />
            )
          })}
        </svg>

        <div className="arch-lbl">AFOS ARCHITECTURE</div>

        <div className="lay-sol">
          <div className="lay-box">
            <div className="sec-lbl">SOLUTIONS FOR INDUSTRIES</div>
            <div className="sols">
              {SOLUTIONS.map((s, i) => {
                const act =
                  (hov?.kind === 'sol' && hov.idx === i) ||
                  (hov?.kind === 'prod' && SOL_MAP[i].includes(hov.idx))
                return (
                  <div
                    key={s}
                    ref={(el) => {
                      solRefs.current[i] = el
                    }}
                    className={`sol ${act ? 'act' : ''}`}
                    onMouseEnter={() => setHov({ kind: 'sol', idx: i })}
                    onMouseLeave={() => setHov(null)}
                  >
                    {s}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="gap" />

        <div className="lay-prod">
          <div className="lay-box">
            <div className="sec-lbl">PRODUCT SUITES</div>
            <div className="prods">
              {PRODUCTS.map((p, pi) => {
                const conn =
                  (hov?.kind === 'sol' && SOL_MAP[hov.idx].includes(pi)) ||
                  (hov?.kind === 'prod' && hov.idx === pi)
                const c = p.color
                const boxShadow = conn
                  ? `0 0 22px ${c}4a, inset 0 0 28px ${c}0c`
                  : `0 0 16px ${c}1a`
                return (
                  <div
                    key={p.name}
                    ref={(el) => {
                      prodRefs.current[pi] = el
                    }}
                    className="prod"
                    onMouseEnter={() => setHov({ kind: 'prod', idx: pi })}
                    onMouseLeave={() => setHov(null)}
                    style={{
                      border: `1px solid ${c}61`,
                      boxShadow,
                      transition: 'box-shadow .22s, border-color .22s',
                      cursor: 'default',
                    }}
                  >
                    {p.icon}
                    <div>
                      <div className="pname" style={{ color: conn ? '#f0f6ff' : '#c8d8f0' }}>
                        {p.name}
                      </div>
                      <div className="psub" style={{ color: PSUB[pi] }}>
                        {p.sub}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="gap-sm" />

        <div className="lay-plat">
          <div className="lay-box" ref={platRef}>
            <div className="flow" />
            <div className="plat-hdr">
              <div className="sec-lbl" style={{ marginBottom: 0 }}>
                AFOS PLATFORM
              </div>
              <div className="plat-found">AI-NATIVE FOUNDATION</div>
            </div>
            <div className="pmods">
              {ENGINES.map((e) => (
                <div key={e} className="pmod">
                  {e}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        #afos {
          font-family: 'DM Sans', 'Inter', -apple-system, sans-serif;
          padding: 4px 0 8px;
        }
        .arch-wrap {
          position: relative;
          background: rgba(8, 16, 42, 0.97);
          border: 1.5px solid rgba(56, 96, 180, 0.45);
          border-radius: 16px;
          padding: 32px 30px 30px;
          box-shadow: 0 0 0 1px rgba(40, 75, 160, 0.12), inset 0 1px 0 rgba(120, 160, 255, 0.07);
        }
        .arch-lbl {
          font-size: 10px;
          letter-spacing: 0.22em;
          color: rgba(180, 200, 235, 0.85);
          font-weight: 600;
          margin-bottom: 22px;
        }
        .lay-sol {
          width: 100%;
        }
        .lay-prod {
          width: 100%;
        }
        .lay-plat {
          width: 100%;
        }
        .lay-box {
          border-radius: 12px;
          padding: 18px 20px;
        }
        .lay-sol :global(.lay-box) {
          border: 1px solid rgba(50, 90, 180, 0.2);
          background: rgba(12, 24, 56, 0.36);
        }
        .lay-prod :global(.lay-box) {
          border: 1px solid rgba(50, 90, 180, 0.26);
          background: rgba(10, 20, 50, 0.48);
        }
        .lay-plat :global(.lay-box) {
          position: relative;
          border: 1.5px solid rgba(70, 120, 220, 0.5);
          background: rgba(7, 14, 40, 0.96);
          overflow: hidden;
          box-shadow: 0 0 0 1px rgba(50, 90, 200, 0.07), 0 10px 30px rgba(15, 50, 160, 0.14),
            inset 0 1px 0 rgba(100, 150, 255, 0.1);
        }
        .sec-lbl {
          font-size: 9px;
          letter-spacing: 0.18em;
          color: rgba(180, 200, 235, 0.85);
          font-weight: 700;
          margin-bottom: 13px;
        }
        .gap {
          height: 54px;
        }
        .gap-sm {
          height: 34px;
        }
        .sols {
          display: flex;
          gap: 9px;
          flex-wrap: wrap;
        }
        .sol {
          flex: 1 1 0;
          min-width: 0;
          padding: 9px 12px;
          background: rgba(14, 28, 65, 0.72);
          border: 1px solid rgba(50, 90, 180, 0.25);
          border-radius: 8px;
          font-size: 12.5px;
          font-weight: 500;
          color: #dbe6f5;
          text-align: center;
          cursor: default;
          transition: all 0.2s ease;
          user-select: none;
          white-space: nowrap;
        }
        .sol:hover,
        .sol.act {
          background: rgba(46, 98, 200, 0.17);
          border-color: rgba(80, 140, 255, 0.48);
          color: #dbeafe;
        }
        .prods {
          display: flex;
          gap: 12px;
        }
        .prod {
          flex: 1;
          padding: 18px 12px;
          background: rgba(7, 15, 42, 0.88);
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
        .pname {
          font-size: 14.5px;
          font-weight: 600;
          color: #c8d8f0;
          text-align: center;
          line-height: 1.2;
          transition: color 0.2s;
        }
        .psub {
          font-size: 9.5px;
          letter-spacing: 0.12em;
          text-align: center;
          margin-top: 3px;
        }
        .plat-hdr {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 14px;
        }
        .plat-found {
          font-size: 9px;
          letter-spacing: 0.15em;
          color: rgba(140, 185, 255, 0.9);
          font-weight: 600;
        }
        .pmods {
          display: flex;
          gap: 10px;
        }
        .pmod {
          flex: 1;
          padding: 12px 8px;
          background: rgba(14, 28, 68, 0.7);
          border: 1px solid rgba(50, 90, 170, 0.24);
          border-radius: 8px;
          text-align: center;
          font-size: 12.5px;
          font-weight: 500;
          color: #dbe6f5;
        }
        .flow {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 120px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(65, 145, 255, 0.06) 30%,
            rgba(65, 145, 255, 0.12) 50%,
            rgba(65, 145, 255, 0.06) 70%,
            transparent 100%
          );
          animation: flowAnim 4s linear infinite;
          pointer-events: none;
        }
        @keyframes flowAnim {
          0% {
            left: -130px;
            opacity: 0;
          }
          8% {
            opacity: 1;
          }
          92% {
            opacity: 1;
          }
          100% {
            left: 110%;
            opacity: 0;
          }
        }
        #lsvg {
          position: absolute;
          top: 0;
          left: 0;
          pointer-events: none;
          overflow: visible;
        }
      `}</style>
    </div>
  )
}
