'use client'

import type { ReactElement } from 'react'

interface Product {
  name: string
  body: string[]
  tags: string
}

const industries = ['Vertical Transport', 'Buildings', 'Facilities', 'Infrastructure', 'Environmental']

const products: Product[] = [
  {
    name: 'Sensing',
    body: ['Edge device management with', 'IoT sensors and non-intrusive', 'edge intelligence.'],
    tags: 'LMD  ·  LBB  ·  EMD',
  },
  {
    name: 'Fusion',
    body: ['Real-time monitoring and', 'predictive diagnostics across', 'all connected assets.'],
    tags: 'LTMS  ·  RM&D  ·  Cloud RMS',
  },
  {
    name: 'Orches',
    body: ['Field services, work orders', 'and asset tracking across', 'the operation.'],
    tags: 'IRIS  ·  LiftProf  ·  Nova',
  },
  {
    name: 'Cortex',
    body: ['Digital twin, predictive', 'analytics and AI knowledge', 'synthesis.'],
    tags: 'Athena  ·  Digital Twin',
  },
]

const engines = ['Data Engine', 'Workflow Engine', 'Connect Engine', 'Intelligence Engine']

const W = 880
const PAD = 24
const CARD_W = 196
const CARD_GAP = 16
const COL_X = [PAD, PAD + (CARD_W + CARD_GAP), PAD + 2 * (CARD_W + CARD_GAP), PAD + 3 * (CARD_W + CARD_GAP)]

export function AfosArchitectureSvg(): ReactElement {
  return (
    <svg
      viewBox={`0 0 ${W} 612`}
      className="h-auto w-full"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="AFOS platform architecture diagram"
    >
      <defs>
        <linearGradient id="cardGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0f2547" />
          <stop offset="100%" stopColor="#081830" />
        </linearGradient>
        <linearGradient id="aiGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0e7490" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#0891b2" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#155e75" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="platGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0c2444" />
          <stop offset="100%" stopColor="#050f1f" />
        </linearGradient>
        <linearGradient id="industryGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a1a33" />
          <stop offset="100%" stopColor="#06122a" />
        </linearGradient>
        <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* ───── Layer 1: Industries strip ───── */}
      <g>
        <rect x="0" y="0" width={W} height="68" rx="12" fill="url(#industryGrad)" stroke="#1e3a5f" />
        <text x={PAD} y="28" fill="#22d3ee" fontSize="10" fontWeight="700" letterSpacing="2.5">
          INDUSTRIES
        </text>
        <text x={PAD} y="48" fill="#cbd5e1" fontSize="11">
          Where AFOS operates
        </text>
        {industries.map((label, i) => {
          const chipW = 122
          const gap = 10
          const total = industries.length * chipW + (industries.length - 1) * gap
          const startX = W - PAD - total
          const x = startX + i * (chipW + gap)
          return (
            <g key={label}>
              <rect x={x} y="20" width={chipW} height="28" rx="14" fill="#0c2444" stroke="#234b7a" />
              <text x={x + chipW / 2} y="38" fill="#cbd5e1" fontSize="11" textAnchor="middle">
                {label}
              </text>
            </g>
          )
        })}
      </g>

      <line x1={W / 2} y1="68" x2={W / 2} y2="84" stroke="#1e3a5f" strokeWidth="1" strokeDasharray="2 3" />

      {/* ───── Layer 2: AI banner ───── */}
      <g>
        <rect x="0" y="84" width={W} height="60" rx="12" fill="url(#aiGrad)" stroke="#155e75" />
        <rect x={PAD} y="100" width="34" height="22" rx="4" fill="#22d3ee" />
        <text x={PAD + 17} y="116" fill="#022c33" fontSize="11" fontWeight="800" textAnchor="middle" letterSpacing="1">
          AI
        </text>
        <text x={PAD + 50} y="110" fill="#e0f7fb" fontSize="12" fontWeight="600">
          Ready-to-use AI engine interface
        </text>
        <text x={PAD + 50} y="128" fill="#a5e8f3" fontSize="11">
          Faster data synthesis, decision support and workflow automation across every product.
        </text>
      </g>

      <line x1={W / 2} y1="144" x2={W / 2} y2="160" stroke="#1e3a5f" strokeWidth="1" strokeDasharray="2 3" />

      {/* ───── Layer 3: Core Products container (full-width frame) ───── */}
      <rect x="0" y="160" width={W} height="200" rx="12" fill="url(#platGrad)" stroke="#1e3a5f" />
      <text x={PAD} y="184" fill="#22d3ee" fontSize="10" fontWeight="700" letterSpacing="2.5">
        CORE PRODUCTS
      </text>
      <text x={W - PAD} y="184" fill="#cbd5e1" fontSize="11" textAnchor="end">
        Modular. Built on the platform.
      </text>

      {/* Product cards */}
      {products.map((p, i) => {
        const x = COL_X[i]
        const y = 200
        const h = 152
        return (
          <g key={p.name} filter="url(#cardShadow)">
            <rect x={x} y={y} width={CARD_W} height={h} rx="10" fill="url(#cardGrad)" stroke="#22d3ee" strokeOpacity="0.35" />
            <text x={x + 16} y={y + 32} fill="#ffffff" fontSize="17" fontWeight="700">
              {p.name}
            </text>
            <line x1={x + 16} y1={y + 40} x2={x + 40} y2={y + 40} stroke="#22d3ee" strokeWidth="2" />
            {p.body.map((line, idx) => (
              <text key={idx} x={x + 16} y={y + 64 + idx * 16} fill="#cbd5e1" fontSize="11">
                {line}
              </text>
            ))}
            <line x1={x + 16} y1={y + h - 28} x2={x + CARD_W - 16} y2={y + h - 28} stroke="#1e3a5f" />
            <text x={x + 16} y={y + h - 12} fill="#cbd5e1" fontSize="9.5" letterSpacing="0.5">
              {p.tags}
            </text>
          </g>
        )
      })}

      {COL_X.map((x) => (
        <line
          key={x}
          x1={x + CARD_W / 2}
          y1="360"
          x2={x + CARD_W / 2}
          y2="372"
          stroke="#22d3ee"
          strokeOpacity="0.5"
          strokeWidth="1.5"
          strokeDasharray="2 3"
        />
      ))}

      {/* ───── Layer 4: Core Platform ───── */}
      <g>
        <rect x="0" y="372" width={W} height="156" rx="12" fill="url(#platGrad)" stroke="#22d3ee" strokeOpacity="0.25" />
        <text x={PAD} y="396" fill="#22d3ee" fontSize="10" fontWeight="700" letterSpacing="2.5">
          CORE PLATFORM
        </text>
        <text x={W - PAD} y="396" fill="#cbd5e1" fontSize="11" textAnchor="end">
          Cross-cutting engines. One closed loop.
        </text>

        {engines.map((e, i) => {
          const x = COL_X[i]
          const y = 412
          const h = 56
          return (
            <g key={e}>
              <rect x={x} y={y} width={CARD_W} height={h} rx="8" fill="#0a1a33" stroke="#22d3ee" strokeOpacity="0.35" />
              <circle cx={x + 18} cy={y + h / 2} r="4" fill="#22d3ee" />
              <circle cx={x + 18} cy={y + h / 2} r="7" fill="none" stroke="#22d3ee" strokeOpacity="0.4" />
              <text x={x + 34} y={y + h / 2 + 5} fill="#e2e8f0" fontSize="13" fontWeight="600">
                {e}
              </text>
            </g>
          )
        })}

        <rect x={PAD} y="488" width={W - 2 * PAD} height="28" rx="6" fill="#06122a" stroke="#1e3a5f" />
        <text x={W / 2} y="506" fill="#cbd5e1" fontSize="11" textAnchor="middle" letterSpacing="0.5">
          INFRASTRUCTURE  ·  HYBRID CLOUD  ·  ON-PREMISE
        </text>
      </g>

      <line x1="0" y1="552" x2={W} y2="552" stroke="#1e3a5f" strokeDasharray="4 4" />
      <text x={W / 2} y="578" fill="#475569" fontSize="11" textAnchor="middle" letterSpacing="2">
        ONE PLATFORM  ·  MODULAR PRODUCTS  ·  TAILORED SOLUTIONS
      </text>
    </svg>
  )
}
