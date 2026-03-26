'use client'

interface MeshNode {
  readonly x: number
  readonly y: number
}

interface MeshEdge {
  readonly from: number
  readonly to: number
  readonly animated?: boolean
}

/* Nodes form an asymmetric network topology across the hero background.
   Two loose rows with irregular spacing — feels like infrastructure, not decoration. */
const NODES: readonly MeshNode[] = [
  /* Upper row — slightly irregular horizontal spacing */
  { x: 80, y: 100 },    // 0
  { x: 240, y: 65 },    // 1
  { x: 400, y: 155 },   // 2
  { x: 530, y: 85 },    // 3
  { x: 690, y: 170 },   // 4
  { x: 820, y: 95 },    // 5
  { x: 960, y: 150 },   // 6
  { x: 1100, y: 75 },   // 7
  { x: 1240, y: 135 },  // 8
  { x: 1370, y: 95 },   // 9
  /* Lower row — offset from upper to create cross-connections */
  { x: 150, y: 260 },   // 10
  { x: 440, y: 290 },   // 11
  { x: 710, y: 250 },   // 12
  { x: 1000, y: 275 },  // 13
  { x: 1300, y: 245 },  // 14
] as const

/* Edges connect nearby nodes. Animated edges show data flow via dashed-stroke animation. */
const EDGES: readonly MeshEdge[] = [
  /* Upper row spine */
  { from: 0, to: 1 },
  { from: 1, to: 2, animated: true },
  { from: 2, to: 3 },
  { from: 3, to: 4, animated: true },
  { from: 4, to: 5 },
  { from: 5, to: 6, animated: true },
  { from: 6, to: 7 },
  { from: 7, to: 8, animated: true },
  { from: 8, to: 9 },
  /* Lower row spine */
  { from: 10, to: 11 },
  { from: 11, to: 12, animated: true },
  { from: 12, to: 13 },
  { from: 13, to: 14, animated: true },
  /* Cross-connections between rows */
  { from: 0, to: 10 },
  { from: 2, to: 11, animated: true },
  { from: 4, to: 12 },
  { from: 6, to: 13, animated: true },
  { from: 8, to: 14 },
] as const

const NODE_DOT_RADIUS = 1.5
const NODE_GLOW_RADIUS_MIN = 2.5
const NODE_GLOW_RADIUS_MAX = 4.5

export function NetworkMesh(): React.ReactElement {
  return (
    <div className="absolute inset-0 z-[1] overflow-hidden" aria-hidden="true">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 500"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Static edge lines — structural layer */}
        {EDGES.map((edge, i) => {
          const from = NODES[edge.from]
          const to = NODES[edge.to]
          return (
            <line
              key={`edge-base-${i}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="#1b263b"
              strokeWidth="0.7"
              opacity="0.5"
              strokeDasharray="4 8"
            />
          )
        })}

        {/* Animated edge overlays — data flow */}
        {EDGES.filter(e => e.animated).map((edge, i) => {
          const from = NODES[edge.from]
          const to = NODES[edge.to]
          return (
            <line
              key={`edge-flow-${i}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="#1F99C5"
              strokeWidth="0.5"
              opacity="0.12"
              strokeDasharray="4 8"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="12"
                to="0"
                dur={`${1 + i * 0.15}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.06;0.18;0.06"
                dur={`${2 + i * 0.3}s`}
                repeatCount="indefinite"
              />
            </line>
          )
        })}

        {/* Node dots */}
        {NODES.map((node, i) => (
          <g key={`mesh-node-${i}`}>
            {/* Solid dot */}
            <circle
              cx={node.x}
              cy={node.y}
              r={NODE_DOT_RADIUS}
              fill="#415a77"
              opacity="0.6"
            />
            {/* Pulsing glow on every third node */}
            {i % 3 === 0 && (
              <circle
                cx={node.x}
                cy={node.y}
                r={NODE_GLOW_RADIUS_MIN}
                fill="#1F99C5"
                opacity="0.08"
              >
                <animate
                  attributeName="opacity"
                  values="0.04;0.14;0.04"
                  dur={`${2.5 + i * 0.3}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="r"
                  values={`${NODE_GLOW_RADIUS_MIN};${NODE_GLOW_RADIUS_MAX};${NODE_GLOW_RADIUS_MIN}`}
                  dur={`${2.5 + i * 0.3}s`}
                  repeatCount="indefinite"
                />
              </circle>
            )}
          </g>
        ))}
      </svg>
    </div>
  )
}
