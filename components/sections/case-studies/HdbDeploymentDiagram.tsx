import type { ReactElement } from 'react'

const stages = [
  { label: 'IoT Sensor', sub: 'LMD6000' },
  { label: 'Edge', sub: 'On-device AI' },
  { label: 'Cloud', sub: 'LTMS Platform' },
  { label: 'Dashboard', sub: 'Multi-tenant' },
]

export function HdbDeploymentDiagram(): ReactElement {
  const W = 880
  const H = 220
  const colW = (W - 80) / 4
  const startX = 40

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="h-auto w-full"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="HDB deployment data flow diagram"
    >
      <defs>
        <linearGradient id="hdbBoxGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0f2547" />
          <stop offset="100%" stopColor="#081830" />
        </linearGradient>
      </defs>

      {stages.map((stage, i) => {
        const x = startX + i * colW
        const cx = x + colW / 2
        return (
          <g key={stage.label}>
            <rect
              x={x + 12}
              y={70}
              width={colW - 24}
              height={90}
              rx={12}
              fill="url(#hdbBoxGrad)"
              stroke="#22d3ee"
              strokeOpacity="0.4"
              strokeWidth="1.75"
            />
            <circle cx={cx} cy={104} r="14" fill="#22d3ee" fillOpacity="0.15" stroke="#22d3ee" strokeOpacity="0.6" strokeWidth="1.5" />
            <circle cx={cx} cy={104} r="5" fill="#22d3ee" />
            <text x={cx} y={134} fill="#ffffff" fontSize="14" fontWeight="700" textAnchor="middle">
              {stage.label}
            </text>
            <text x={cx} y={150} fill="#94a3b8" fontSize="11" textAnchor="middle">
              {stage.sub}
            </text>
            {/* Connector arrow to next stage */}
            {i < stages.length - 1 && (
              <line
                x1={x + colW - 12}
                y1={115}
                x2={x + colW + 12}
                y2={115}
                stroke="#22d3ee"
                strokeOpacity="0.6"
                strokeWidth="2"
                strokeDasharray="4 4"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="16"
                  dur="1.2s"
                  begin={`${i * 0.15}s`}
                  repeatCount="indefinite"
                />
              </line>
            )}
          </g>
        )
      })}

      <text x={W / 2} y={32} fill="#22d3ee" fontSize="11" fontWeight="700" letterSpacing="3" textAnchor="middle">
        DATA FLOW
      </text>
      <text x={W / 2} y={196} fill="#94a3b8" fontSize="12" textAnchor="middle">
        From sensor to decision  ·  4G/LTE  ·  Multi-organization tenancy
      </text>
    </svg>
  )
}
