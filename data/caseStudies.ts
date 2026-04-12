export interface Stat {
  value: string
  label: string
}

export interface CaseStudy {
  client: string
  industry: string
  headline: string
  summary: string
  stats: Stat[]
  products: string[]
  href: string
  accentColor: 'primary' | 'amber' | 'slate'
  heroStat: Stat
  image: string
  logo: string
  featured?: boolean
}

export const caseStudies: CaseStudy[] = [
  {
    client: 'Housing & Development Board (HDB)',
    industry: 'Public Housing',
    headline: 'Monitoring 10,000+ Lifts Across Singapore\u2019s Public Housing',
    summary:
      'Softgrid deployed its Lift Telemonitoring System across HDB estates, enabling 24/7 remote monitoring of over 10,000 lifts — replacing legacy phone-line systems with smart IoT acquisition.',
    stats: [
      { value: '10,000+', label: 'Lifts Monitored' },
      { value: '4,000+', label: 'HDB Blocks' },
      { value: '24/7', label: 'Remote Monitoring' },
    ],
    products: ['LMD 6000', 'LTMS'],
    href: '/case-studies/hdb',
    accentColor: 'primary',
    heroStat: { value: '10,000+', label: 'Lifts Monitored' },
    image: '/images/background/bg5.jpg',
    logo: '/images/logos/HDB.png',
    featured: true,
  },
  {
    client: 'Chevalier Group',
    industry: 'Lift Servicing',
    headline: 'Achieving BCA Compliance for Private Sector Lifts',
    summary:
      'Chevalier partnered with Softgrid to implement BCA-certified Remote Monitoring & Diagnostics, enabling condition-based maintenance and automated compliance reporting across their managed portfolio.',
    stats: [
      { value: 'BCA', label: 'Sandbox Certified' },
      { value: 'RM&D', label: 'Compliant' },
      { value: 'Predictive', label: 'Maintenance Enabled' },
    ],
    products: ['LMD Series', 'RM&D System'],
    href: '/case-studies/chevalier',
    accentColor: 'primary',
    heroStat: { value: 'BCA', label: 'Sandbox Certified' },
    image: '/images/case/case1.jpg',
    logo: '/images/logos/chevalier.jpeg',
  },
  {
    client: 'CPG FM',
    industry: 'Facility Operations',
    headline: 'AI-Powered Facility Management for Singapore\u2019s Properties',
    summary:
      'CPG FM deployed IRIS CMMS and Athena AI knowledge base to digitize facility operations — replacing paper work orders with a full digital lifecycle and AI-powered decision support.',
    stats: [
      { value: 'IRIS', label: 'CMMS Deployed' },
      { value: 'Athena', label: 'AI Knowledge Base' },
      { value: 'Digital', label: 'Work Order Lifecycle' },
    ],
    products: ['IRIS', 'Athena'],
    href: '/case-studies/cpg-fm',
    accentColor: 'amber',
    heroStat: { value: 'IRIS + Athena', label: 'AI-Powered Operations' },
    image: '/images/case/case2.jpg',
    logo: '/images/logos/CPGFM.png',
  },
  {
    client: 'National Parks Board (NParks)',
    industry: 'Environmental Monitoring',
    headline: 'Monthly Forest Cover Monitoring Across Singapore',
    summary:
      'Automated satellite-based monitoring of 26 ecological areas — AI-powered image classification at 4.76m resolution, fully automated with zero manual processing.',
    stats: [
      { value: '26', label: 'Ecological Areas' },
      { value: '4.76m', label: 'Resolution' },
      { value: 'Monthly', label: 'Monitoring Cycle' },
    ],
    products: ['Fusion RSA'],
    href: '/case-studies/nparks',
    accentColor: 'slate',
    heroStat: { value: '26', label: 'Ecological Areas Tracked' },
    image: '/images/case/case3.jpg',
    logo: '/images/logos/NPARKS.png',
  },
]

export const featuredStudy = caseStudies.find((s) => s.featured)!
export const secondaryStudies = caseStudies.filter((s) => !s.featured)
