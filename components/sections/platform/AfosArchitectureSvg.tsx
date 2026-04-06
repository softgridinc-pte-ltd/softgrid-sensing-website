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

// ── Layout constants ─────────────────────────────────────────
const W = 1080
const PAD = 40
const CARD_GAP = 24
const CARD_W = (W - PAD * 2 - CARD_GAP * 3) / 4 // 226
const COL_X = [0, 1, 2, 3].map((i) => PAD + i * (CARD_W + CARD_GAP))

// Y rhythm — generous breathing room between layers
const Y_INDUSTRIES = 0
const H_INDUSTRIES = 84
const Y_AI = Y_INDUSTRIES + H_INDUSTRIES + 28 // 112
const H_AI = 76
const Y_PRODUCTS = Y_AI + H_AI + 32 // 220
const H_PRODUCTS = 252
const Y_CARDS = Y_PRODUCTS + 48 // 268
const H_CARDS = 184
const Y_PLATFORM = Y_PRODUCTS + H_PRODUCTS + 32 // 504
const H_PLATFORM = 200
const Y_ENGINES = Y_PLATFORM + 52 // 556
const H_ENGINES = 68
const Y_INFRA = Y_PLATFORM + H_PLATFORM - 44 // 660
const H_INFRA = 32
const Y_CAPTION_LINE = Y_PLATFORM + H_PLATFORM + 32 // 736
const Y_CAPTION = Y_CAPTION_LINE + 28
const VB_H = Y_CAPTION + 24

export function AfosArchitectureSvg(): ReactElement {
  return (
    <svg
      viewBox={`0 0 ${W} ${VB_H}`}
      className="h-auto w-full"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="AFOS platform architecture diagram"
    >
      <defs>
        <linearGradient id="cardGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#155278" />
          <stop offset="100%" stopColor="#0e3f60" />
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
        {/* Core Platform — deeper navy + teal foundation */}
        <linearGradient id="platformLayerGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0c2a3e" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#04141e" stopOpacity="0.95" />
        </linearGradient>
        {/* Infrastructure — darker teal horizontal accent */}
        <linearGradient id="infraGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#082f49" />
          <stop offset="50%" stopColor="#0c4a6e" />
          <stop offset="100%" stopColor="#082f49" />
        </linearGradient>
        <linearGradient id="industryGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a1a33" />
          <stop offset="100%" stopColor="#06122a" />
        </linearGradient>
        <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000" floodOpacity="0.5" />
        </filter>
      </defs>

      {/* ───── Industries strip ───── */}
      <g>
        <rect x="0" y={Y_INDUSTRIES} width={W} height={H_INDUSTRIES} rx="14" fill="url(#industryGrad)" stroke="#22d3ee" strokeOpacity="0.25" strokeWidth="1.75" />
        <text x={PAD} y={Y_INDUSTRIES + 34} fill="#22d3ee" fontSize="11" fontWeight="700" letterSpacing="3">
          INDUSTRIES
        </text>
        <text x={PAD} y={Y_INDUSTRIES + 56} fill="#cbd5e1" fontSize="12">
          Where AFOS operates
        </text>
        {industries.map((label, i) => {
          const chipW = 148
          const gap = 14
          const total = industries.length * chipW + (industries.length - 1) * gap
          const startX = W - PAD - total
          const x = startX + i * (chipW + gap)
          const y = Y_INDUSTRIES + (H_INDUSTRIES - 34) / 2
          return (
            <g key={label}>
              <rect x={x} y={y} width={chipW} height="34" rx="17" fill="#0c2444" stroke="#22d3ee" strokeOpacity="0.3" strokeWidth="1.75" />
              <text x={x + chipW / 2} y={y + 22} fill="#e2e8f0" fontSize="12" textAnchor="middle">
                {label}
              </text>
            </g>
          )
        })}
      </g>

      {/* connector */}
      <line x1={W / 2} y1={Y_INDUSTRIES + H_INDUSTRIES} x2={W / 2} y2={Y_AI} stroke="#22d3ee" strokeOpacity="0.45" strokeWidth="1.5" strokeDasharray="3 4" />

      {/* ───── AI banner ───── */}
      <g>
        <rect x="0" y={Y_AI} width={W} height={H_AI} rx="14" fill="url(#aiGrad)" stroke="#22d3ee" strokeOpacity="0.4" strokeWidth="1.75" />
        <rect x={240} y={Y_AI + 22} width="42" height="28" rx="6" fill="#22d3ee" />
        <text x={261} y={Y_AI + 41} fill="#022c33" fontSize="13" fontWeight="800" textAnchor="middle" letterSpacing="1">
          AI
        </text>
        <text x={300} y={Y_AI + 32} fill="#ffffff" fontSize="14" fontWeight="700">
          Ready-to-use AI engine interface
        </text>
        <text x={300} y={Y_AI + 52} fill="#cffafe" fontSize="12">
          Faster data synthesis, decision support and workflow automation across every product.
        </text>
      </g>

      {/* connector */}
      <line x1={W / 2} y1={Y_AI + H_AI} x2={W / 2} y2={Y_PRODUCTS} stroke="#22d3ee" strokeOpacity="0.45" strokeWidth="1.5" strokeDasharray="3 4" />

      {/* ───── Core Products container ───── */}
      <rect x="0" y={Y_PRODUCTS} width={W} height={H_PRODUCTS} rx="14" fill="url(#platGrad)" stroke="#22d3ee" strokeOpacity="0.25" strokeWidth="1.75" />
      <text x={PAD} y={Y_PRODUCTS + 30} fill="#22d3ee" fontSize="11" fontWeight="700" letterSpacing="3">
        CORE PRODUCTS
      </text>
      <text x={W - PAD} y={Y_PRODUCTS + 30} fill="#cbd5e1" fontSize="12" textAnchor="end">
        Modular. Built on the platform.
      </text>

      {/* Product cards */}
      {products.map((p, i) => {
        const x = COL_X[i]
        const y = Y_CARDS
        const h = H_CARDS
        return (
          <g key={p.name} filter="url(#cardShadow)">
            <rect x={x} y={y} width={CARD_W} height={h} rx="12" fill="url(#cardGrad)" stroke="#22d3ee" strokeOpacity="0.4" strokeWidth="1.75" />
            <text x={x + 22} y={y + 38} fill="#ffffff" fontSize="20" fontWeight="700">
              {p.name}
            </text>
            <line x1={x + 22} y1={y + 48} x2={x + 50} y2={y + 48} stroke="#22d3ee" strokeWidth="2" />
            {p.body.map((line, idx) => (
              <text key={idx} x={x + 22} y={y + 78 + idx * 19} fill="#cbd5e1" fontSize="12.5">
                {line}
              </text>
            ))}
            <line x1={x + 22} y1={y + h - 36} x2={x + CARD_W - 22} y2={y + h - 36} stroke="#22d3ee" strokeOpacity="0.2" />
            <text x={x + 22} y={y + h - 16} fill="#cbd5e1" fontSize="11" letterSpacing="0.5">
              {p.tags}
            </text>
          </g>
        )
      })}

      {/* connectors — products → platform */}
      {COL_X.map((x) => (
        <line
          key={x}
          x1={x + CARD_W / 2}
          y1={Y_PRODUCTS + H_PRODUCTS}
          x2={x + CARD_W / 2}
          y2={Y_PLATFORM}
          stroke="#22d3ee"
          strokeOpacity="0.45"
          strokeWidth="1.5"
          strokeDasharray="3 4"
        />
      ))}

      {/* ───── Core Platform ───── */}
      <g>
        <rect x="0" y={Y_PLATFORM} width={W} height={H_PLATFORM} rx="14" fill="url(#platformLayerGrad)" stroke="#22d3ee" strokeOpacity="0.4" strokeWidth="1.75" />
        <text x={PAD} y={Y_PLATFORM + 32} fill="#22d3ee" fontSize="11" fontWeight="700" letterSpacing="3">
          CORE PLATFORM
        </text>
        <text x={W - PAD} y={Y_PLATFORM + 32} fill="#a5f3fc" fontSize="12" textAnchor="end">
          Cross-cutting engines. One closed loop.
        </text>

        {engines.map((e, i) => {
          const x = COL_X[i]
          const y = Y_ENGINES
          const h = H_ENGINES
          return (
            <g key={e}>
              <rect x={x} y={y} width={CARD_W} height={h} rx="10" fill="#0c3a55" fillOpacity="0.9" stroke="#22d3ee" strokeOpacity="0.5" strokeWidth="1.75" />
              <circle cx={x + 24} cy={y + h / 2} r="5" fill="#22d3ee" />
              <circle cx={x + 24} cy={y + h / 2} r="9" fill="none" stroke="#22d3ee" strokeOpacity="0.5" strokeWidth="1.75" />
              <text x={x + 44} y={y + h / 2 + 5} fill="#ffffff" fontSize="14" fontWeight="600">
                {e}
              </text>
            </g>
          )
        })}

        <rect x={PAD} y={Y_INFRA} width={W - 2 * PAD} height={H_INFRA} rx="8" fill="url(#infraGrad)" stroke="#22d3ee" strokeOpacity="0.5" strokeWidth="1.75" />
        <text x={W / 2} y={Y_INFRA + 21} fill="#ffffff" fontSize="12" fontWeight="600" textAnchor="middle" letterSpacing="1">
          INFRASTRUCTURE  ·  HYBRID CLOUD  ·  ON-PREMISE
        </text>
      </g>

      {/* ───── Caption ───── */}
      <line x1="0" y1={Y_CAPTION_LINE} x2={W} y2={Y_CAPTION_LINE} stroke="#22d3ee" strokeOpacity="0.2" strokeDasharray="5 5" />
      <text x={W / 2} y={Y_CAPTION} fill="#94a3b8" fontSize="12" textAnchor="middle" letterSpacing="3">
        ONE PLATFORM  ·  MODULAR PRODUCTS  ·  TAILORED SOLUTIONS
      </text>
    </svg>
  )
}
