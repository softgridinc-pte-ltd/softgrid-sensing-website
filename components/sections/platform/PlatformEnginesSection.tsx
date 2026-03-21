import { Radio, BrainCircuit, Workflow, Database, ChevronRight } from 'lucide-react'

interface Engine {
  icon: React.ReactNode
  name: string
  subtitle: string
  description: string
  capabilities: string[]
}

const engines: Engine[] = [
  {
    icon: <Radio className="w-6 h-6 text-cyan-500" />,
    name: 'Connect',
    subtitle: 'Powered by Fusion Core',
    description: 'Multi-protocol ingestion and device management for any data source.',
    capabilities: [
      'MQTT, CoAP, OPC-UA, HTTP',
      'BACnet, Modbus',
      'AWS IoT Core & Azure IoT Hub',
      'Device management & auth',
      'Rule engine',
      'RESTful APIs',
      'Multi-tenancy',
    ],
  },
  {
    icon: <BrainCircuit className="w-6 h-6 text-cyan-500" />,
    name: 'Intelligence',
    subtitle: 'Powered by Fusion AI',
    description: 'Predictive and cognitive AI that turns sensor data into actionable insights.',
    capabilities: [
      'Predictive AI: >83% accuracy',
      'Anomaly detection (unsupervised)',
      'Multi-class fault prediction',
      '<25% customization for new assets',
      'A*STAR & SIMTech collaboration',
      'Athena RAG knowledge base',
      'Natural language Q&A',
    ],
  },
  {
    icon: <Workflow className="w-6 h-6 text-cyan-500" />,
    name: 'Workflow',
    subtitle: 'Detection to Resolution',
    description: 'Automated lifecycle from fault detection to verified resolution.',
    capabilities: [
      'Detection \u2192 Classification',
      'Auto work order generation',
      'GPS-based technician dispatch',
      '50+ configurable fault types',
      'Auto-severity calculation',
      'Auto-generated service reports',
      'Data feedback to Intelligence',
    ],
  },
  {
    icon: <Database className="w-6 h-6 text-cyan-500" />,
    name: 'Data',
    subtitle: 'Unified Data Layer',
    description: 'Cross-module storage, dashboards, analytics, and compliance reporting.',
    capabilities: [
      'Unified cross-module storage',
      'Custom dashboards per org type',
      'Analytics & historical trends',
      'BCA compliance reporting',
      'Green Mark documentation',
      'ESG data collection',
      'Continuous feedback loop',
    ],
  },
]

export function PlatformEnginesSection(): React.ReactElement {
  return (
    <section className="bg-navy-900 py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      {/* Radial glow behind header */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[160px]"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,180,216,0.08) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section header */}
        <div data-animate className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How AFOS Works
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Four engines working in a closed loop &mdash; data flows in, intelligence extracts insights,
            workflows execute, and outcomes feed back to make the system smarter.
          </p>
        </div>

        {/* Compact flow bar — Desktop */}
        <div data-animate className="hidden md:flex items-center justify-center gap-2 mb-6">
          {engines.map((engine, i) => (
            <div key={engine.name} className="contents">
              <div className="flex items-center gap-2.5 bg-navy-800/80 border border-navy-700/50 rounded-full px-4 py-2">
                <div className="w-8 h-8 bg-cyan-500/10 border border-cyan-500/20 rounded-md flex items-center justify-center flex-shrink-0">
                  {engine.icon}
                </div>
                <span className="text-white text-sm font-medium">{engine.name}</span>
              </div>
              {i < engines.length - 1 && (
                <ChevronRight className="w-4 h-4 text-cyan-500/50 flex-shrink-0" />
              )}
            </div>
          ))}
        </div>

        {/* Closed-loop badge */}
        <div data-animate className="flex justify-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5">
            <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse-slow" />
            <span className="text-cyan-400 text-sm font-medium">Closed-loop: outcomes feed back into Intelligence</span>
          </div>
        </div>

        {/* Engine detail cards — 2×2 grid */}
        <div data-animate-stagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {engines.map((engine) => (
            <div
              data-animate
              key={engine.name}
              className="bg-navy-800 border border-navy-700 rounded-xl p-6 md:p-8 hover:border-cyan-500/30 transition-all duration-300"
            >
              {/* Engine header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 bg-cyan-500/10 border border-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  {engine.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{engine.name} Engine</h3>
                  <p className="text-sm text-cyan-400">{engine.subtitle}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-400 mb-5 leading-relaxed">{engine.description}</p>

              {/* Capability tags */}
              <div className="flex flex-wrap gap-2">
                {engine.capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="border border-navy-600 text-slate-300 text-xs rounded-full px-3 py-1"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
