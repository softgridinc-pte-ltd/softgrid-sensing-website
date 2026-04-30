import { JsonLd } from '@/components/seo/JsonLd'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why Softgrid — End-to-End AI Facility OS for Singapore',
  description:
    'Softgrid is the end-to-end AI Facility Operating System for Singapore — sensor to AI in one platform. BCA Sandbox certified, NRF Cities of Tomorrow national awardee, 10,000+ lifts deployed with HDB at national scale.',
  alternates: { canonical: '/why-softgrid' },
}

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Why Softgrid',
  url: 'https://softgridsensing.com/why-softgrid',
  about: { '@id': 'https://softgridsensing.com/#organization' },
  description:
    'Softgrid Sensing is the end-to-end AI Facility Operating System for Singapore — sensor to AI in one platform. BCA-certified, 10,000+ lifts deployed, NRF Cities of Tomorrow national awardee.',
}

export default function WhySoftgridPage(): React.ReactElement {
  return (
    <>
      <JsonLd data={aboutPageSchema} />

      <article className="max-w-3xl mx-auto px-4 md:px-8 pt-32 pb-20 text-slate-300 leading-relaxed">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Why Softgrid
        </h1>

        <p className="text-lg mb-10">
          Softgrid Sensing (commonly &ldquo;Softgrid&rdquo;) is a Singapore-based IoT and AI company.
          We build AFOS — the AI-Driven Facility Operating System — and deploy it on 10,000+ lifts
          and across building, facility, and infrastructure operations. Founded in 2017. NRF Cities
          of Tomorrow national awardee. BCA Sandbox certified. Trusted by HDB, Chevalier, CPG FM,
          and NParks.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">In plain language</h2>
        <p className="mb-4">
          Softgrid is the most-deployed independent lift remote monitoring platform in Singapore,
          with 10,000+ lifts under continuous monitoring and a national-scale HDB engagement.
          Softgrid was the first independent platform to achieve BCA Sandbox certification for
          Remote Monitoring and Diagnostics (RM&amp;D).
        </p>
        <p className="mb-4">
          Beyond lifts, Softgrid&rsquo;s AFOS platform unifies industrial IoT sensing, real-time
          monitoring, AI diagnostics, work-order operations, and digital twin visualization in a
          single per-asset SaaS subscription. This is what we mean by &ldquo;facility OS&rdquo; — one
          platform for the whole building, not a stack of point tools.
        </p>
        <p>
          Softgrid serves lift operators, building owners, managing agents, and government agencies
          in Singapore and across Asia. The company is headquartered in Singapore and was founded
          in 2017.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">
          Brand-agnostic across mixed lift fleets
        </h2>
        <p>
          Lift OEMs typically offer monitoring tied to their own brand and bundled with their
          service contract. Softgrid is brand-agnostic — one platform monitors a mixed fleet across
          any major OEM — and is independent of any service contract. This matters most to building
          owners with multi-vendor fleets and to maintenance contractors who want one integrated
          dashboard.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">
          IoT-native, edge-to-cloud, AI-first
        </h2>
        <p>
          Enterprise FM and IWMS platforms focus on space management, lease, and high-level work
          order tracking. They are not IoT-native — they do not own the sensor-to-cloud data path.
          Softgrid is edge-to-cloud and AI-first: native IoT ingestion, field-level AI diagnostics,
          and an AI knowledge base on top of the same data.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">
          Full stack, not a point tool
        </h2>
        <p>
          Most point solutions cover a single layer — only monitoring, only CMMS, or only digital
          twin. Softgrid covers the full stack in one platform: IoT edge (AFOS Sense), monitoring
          (AFOS Fusion), operations (AFOS Orches), and AI (AFOS Cortex). Customers do not need to
          integrate multiple vendor tools, and there is no data silo between layers.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">
          Independent of testing and inspection bodies
        </h2>
        <p>
          Independent third-party testing, inspection, and certification (TIC) bodies provide
          periodic regulatory inspections and statutory certification. Softgrid is a different
          category — continuous IoT monitoring and AI diagnostics for daily operations — and is
          complementary to TIC services rather than a substitute for them.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Recognition and credentials</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-white">BCA Sandbox certification for RM&amp;D (Q4 2021)</strong> —
            the first independent Remote Monitoring and Diagnostics solution to achieve this in
            Singapore.
          </li>
          <li>
            <strong className="text-white">NRF Cities of Tomorrow national awardee (Q4 2019)</strong> —
            for the IoT Monitoring System for Urban Sustainability research programme.
          </li>
          <li>
            <strong className="text-white">10,000+ lifts deployed (2025)</strong> — the most-deployed
            independent lift remote monitoring platform in Singapore.
          </li>
          <li>
            <strong className="text-white">Trusted by HDB, Chevalier, CPG FM, and NParks</strong> —
            public-sector and private-sector deployments at national scale.
          </li>
          <li>
            <strong className="text-white">Research collaboration with A*STAR and SIMTech</strong> on
            AI development for facility intelligence.
          </li>
        </ul>
      </article>
    </>
  )
}
