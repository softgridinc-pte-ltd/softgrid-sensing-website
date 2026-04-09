'use client'

import { useEffect, useRef, useState } from 'react'
import { Cpu, MonitorDot, Workflow, ArrowUpDown, Building2, Wrench, Leaf } from 'lucide-react'
import { CortexIcon } from '@/components/icons/CortexIcon'

const PC = ['#00C9A7', '#4FA3E0', '#F0A500', '#A78BFA']
// Derived from app/solutions/*/page.tsx productsInvolved
// Product index: 0=Sense, 1=Fusion, 2=Orches, 3=Cortex
const SOL_MAP: number[][] = [
  [0, 1, 2, 3], // Vertical Transport: LMD/LBB/EMD + LTMS/RM&D + LiftProf + Athena
  [1, 2, 3],    // Building Mgmt: Cloud BMS + IRIS + Athena/Digital Twin
  [1, 2, 3],    // Facility Ops: IRIS/Nova/LiftProf + Athena (+ Fusion optional)
  [1, 3],       // Infra & Env: Fusion RSA + Athena/Digital Twin
]

type SolIcon = React.ComponentType<{ size?: number | string; className?: string; strokeWidth?: number | string }>

const SOLUTIONS: { name: string; Icon: SolIcon }[] = [
  { name: 'Vertical Transport', Icon: ArrowUpDown },
  { name: 'Building Mgmt', Icon: Building2 },
  { name: 'Facility Ops', Icon: Wrench },
  { name: 'Infra & Env', Icon: Leaf },
]

const PSUB = ['#5BE8C8', '#8FC8F0', '#FFC04D', '#C9B6FF']

const PRODUCTS: { name: string; sub: string; color: string; icon: React.ReactNode }[] = [
  {
    name: 'Sense',
    sub: 'EDGE DEVICES',
    color: PC[0],
    icon: <Cpu size={28} strokeWidth={1.6} color={PC[0]} />,
  },
  {
    name: 'Fusion',
    sub: 'MONITORING',
    color: PC[1],
    icon: <MonitorDot size={28} strokeWidth={1.6} color={PC[1]} />,
  },
  {
    name: 'Orches',
    sub: 'OPERATION',
    color: PC[2],
    icon: <Workflow size={28} strokeWidth={1.6} color={PC[2]} />,
  },
  {
    name: 'Cortex',
    sub: 'AI',
    color: PC[3],
    icon: <CortexIcon size={30} color={PC[3]} />,
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
          const pyt = pp.yt - 2
          const syb = sp.yb + 1
          const my = (pyt + syb) / 2
          newPaths.push({
            d: `M${pp.x},${pyt} C${pp.x},${my} ${sp.x},${my} ${sp.x},${syb}`,
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
              strokeWidth={2.5}
              strokeOpacity={0.85}
              strokeDasharray="4 5"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="18"
                dur="1.2s"
                begin={`${i * 0.15}s`}
                repeatCount="indefinite"
              />
            </line>
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
                const Icon = s.Icon
                return (
                  <div
                    key={s.name}
                    ref={(el) => {
                      solRefs.current[i] = el
                    }}
                    className={`sol ${act ? 'act' : ''}`}
                    onMouseEnter={() => setHov({ kind: 'sol', idx: i })}
                    onMouseLeave={() => setHov(null)}
                  >
                    <Icon size={22} strokeWidth={1.6} />
                    <span>{s.name}</span>
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
                      border: `2px solid ${c}90`,
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
        .lay-sol :global(.lay-box),
        .lay-prod :global(.lay-box) {
          border: 1px solid rgba(80, 130, 220, 0.22);
          background: rgba(22, 38, 78, 0.55);
          box-shadow: inset 0 1px 0 rgba(140, 180, 255, 0.05);
        }
        .lay-plat :global(.lay-box) {
          position: relative;
          border: 1.5px solid rgba(90, 145, 240, 0.42);
          background: rgba(24, 42, 88, 0.7);
          overflow: hidden;
          box-shadow: 0 0 0 1px rgba(50, 90, 200, 0.08), 0 10px 30px rgba(15, 50, 160, 0.18),
            inset 0 1px 0 rgba(140, 180, 255, 0.12);
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
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 10px 12px;
          background: rgba(38, 60, 115, 0.85);
          border: 2px solid rgba(120, 165, 240, 0.55);
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
          background: rgba(38, 60, 115, 0.85);
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
          background: rgba(12, 58, 85, 0.9);
          border: 2px solid rgba(120, 165, 240, 0.55);
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
