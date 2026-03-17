'use client'

interface FlowNode {
  cx: number
  cy: number
  label: string
}

const NODES: readonly FlowNode[] = [
  { cx: 280, cy: 700, label: 'Sense' },
  { cx: 540, cy: 660, label: 'Predict' },
  { cx: 900, cy: 660, label: 'Act' },
  { cx: 1160, cy: 700, label: 'Learn' },
] as const

const PATHS = [
  'M280,700 C370,680 450,665 540,660',
  'M540,660 C660,655 780,655 900,660',
  'M900,660 C990,665 1070,680 1160,700',
] as const

const NODE_RADIUS = 26
const GLOW_RADIUS = 38

export function PlatformFlow(): React.ReactElement {
  return (
    <div className="absolute inset-0 z-[2] overflow-hidden" aria-hidden="true">
      {/* Fade mask — top portion transparent so text stays clean */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent"
        style={{ maskImage: 'linear-gradient(to bottom, transparent 40%, black 65%)' }}
      >
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Glow filter for nodes */}
            <filter id="node-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Glow filter for paths */}
            <filter id="path-glow" x="-20%" y="-50%" width="140%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Connection paths — base stroke */}
          {PATHS.map((d, i) => (
            <path
              key={`path-base-${i}`}
              d={d}
              fill="none"
              stroke="#1b263b"
              strokeWidth="2"
              opacity="0.6"
            />
          ))}

          {/* Connection paths — animated glow stroke */}
          {PATHS.map((d, i) => (
            <path
              key={`path-glow-${i}`}
              d={d}
              fill="none"
              stroke="#00b4d8"
              strokeWidth="1.5"
              opacity="0.3"
              filter="url(#path-glow)"
              strokeDasharray="8 16"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="24"
                to="0"
                dur={`${2 + i * 0.4}s`}
                repeatCount="indefinite"
              />
            </path>
          ))}

          {/* Data packets traveling along paths */}
          {PATHS.map((d, i) => (
            <g key={`packet-group-${i}`}>
              <circle r="3" fill="#00b4d8" opacity="0.7" filter="url(#node-glow)">
                <animateMotion
                  dur={`${3 + i * 0.5}s`}
                  repeatCount="indefinite"
                  path={d}
                />
              </circle>
              <circle r="2" fill="#90e0ef" opacity="0.5">
                <animateMotion
                  dur={`${3 + i * 0.5}s`}
                  repeatCount="indefinite"
                  path={d}
                  begin={`${1.5 + i * 0.3}s`}
                />
              </circle>
            </g>
          ))}

          {/* Nodes */}
          {NODES.map((node, i) => (
            <g key={`node-${i}`} className="hero-node" style={{ animationDelay: `${i * 0.8}s` }}>
              {/* Outer glow ring */}
              <circle
                cx={node.cx}
                cy={node.cy}
                r={GLOW_RADIUS}
                fill="none"
                stroke="#00b4d8"
                strokeWidth="0.5"
                opacity="0.15"
              />
              {/* Node body */}
              <circle
                cx={node.cx}
                cy={node.cy}
                r={NODE_RADIUS}
                fill="#0d1b2a"
                stroke="#1b263b"
                strokeWidth="1.5"
              />
              {/* Inner accent ring */}
              <circle
                cx={node.cx}
                cy={node.cy}
                r={NODE_RADIUS}
                fill="none"
                stroke="#00b4d8"
                strokeWidth="0.8"
                opacity="0.4"
              />

              {/* Node icons (abstract geometric shapes) */}
              {i === 0 && (
                /* Sense — radio/signal waves */
                <g opacity="0.6">
                  <circle cx={node.cx} cy={node.cy} r="3" fill="#00b4d8" opacity="0.4" />
                  <path d={`M${node.cx - 7},${node.cy - 7} A10,10 0 0,1 ${node.cx + 7},${node.cy - 7}`} fill="none" stroke="#00b4d8" strokeWidth="0.8" />
                  <path d={`M${node.cx - 11},${node.cy - 11} A16,16 0 0,1 ${node.cx + 11},${node.cy - 11}`} fill="none" stroke="#00b4d8" strokeWidth="0.8" opacity="0.5" />
                </g>
              )}
              {i === 1 && (
                /* Predict — brain/neural network */
                <g opacity="0.6">
                  <circle cx={node.cx - 6} cy={node.cy - 5} r="2.5" fill="#00b4d8" opacity="0.2" stroke="#00b4d8" strokeWidth="0.8" />
                  <circle cx={node.cx + 6} cy={node.cy - 5} r="2.5" fill="#00b4d8" opacity="0.2" stroke="#00b4d8" strokeWidth="0.8" />
                  <circle cx={node.cx} cy={node.cy + 6} r="2.5" fill="#00b4d8" opacity="0.2" stroke="#00b4d8" strokeWidth="0.8" />
                  <circle cx={node.cx} cy={node.cy - 1} r="3" fill="#00b4d8" opacity="0.35" />
                  <line x1={node.cx - 4} y1={node.cy - 4} x2={node.cx - 1} y2={node.cy - 1} stroke="#00b4d8" strokeWidth="0.8" />
                  <line x1={node.cx + 4} y1={node.cy - 4} x2={node.cx + 1} y2={node.cy - 1} stroke="#00b4d8" strokeWidth="0.8" />
                  <line x1={node.cx} y1={node.cy + 2} x2={node.cx} y2={node.cy + 4} stroke="#00b4d8" strokeWidth="0.8" />
                </g>
              )}
              {i === 2 && (
                /* Act — lightning bolt / zap */
                <g opacity="0.6">
                  <polygon
                    points={`${node.cx - 2},${node.cy - 10} ${node.cx + 6},${node.cy - 10} ${node.cx + 1},${node.cy - 1} ${node.cx + 5},${node.cy - 1} ${node.cx - 3},${node.cy + 10} ${node.cx},${node.cy + 1} ${node.cx - 4},${node.cy + 1}`}
                    fill="#00b4d8"
                    opacity="0.25"
                    stroke="#00b4d8"
                    strokeWidth="0.8"
                  />
                </g>
              )}
              {i === 3 && (
                /* Learn — circular arrows / feedback loop */
                <g opacity="0.6">
                  <path d={`M${node.cx + 8},${node.cy - 3} A9,9 0 1,0 ${node.cx + 3},${node.cy + 8}`} fill="none" stroke="#00b4d8" strokeWidth="1" />
                  <polygon points={`${node.cx + 3},${node.cy + 5} ${node.cx + 6},${node.cy + 9} ${node.cx},${node.cy + 9}`} fill="#00b4d8" opacity="0.5" />
                  <path d={`M${node.cx - 8},${node.cy + 3} A9,9 0 1,0 ${node.cx - 3},${node.cy - 8}`} fill="none" stroke="#00b4d8" strokeWidth="1" />
                  <polygon points={`${node.cx - 3},${node.cy - 5} ${node.cx - 6},${node.cy - 9} ${node.cx},${node.cy - 9}`} fill="#00b4d8" opacity="0.5" />
                </g>
              )}

              {/* Label */}
              <text
                x={node.cx}
                y={node.cy + 46}
                textAnchor="middle"
                fill="#778da9"
                fontSize="11"
                fontFamily="var(--font-body), sans-serif"
                letterSpacing="0.05em"
              >
                {node.label}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  )
}
