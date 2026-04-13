export interface SearchEntry {
  title: string
  href: string
  category: 'Platform' | 'Product' | 'Solution' | 'Case Study' | 'Company' | 'Contact'
  description: string
  keywords: string[]
}

export const searchIndex: SearchEntry[] = [
  // Core pages
  {
    title: 'Home',
    href: '/',
    category: 'Company',
    description: 'AI-Powered Facility Operating System for buildings, infrastructure, and environments.',
    keywords: ['softgrid', 'sensing', 'AFOS', 'facility', 'operating system', 'IoT', 'AI', 'Singapore'],
  },
  {
    title: 'AFOS Platform',
    href: '/platform',
    category: 'Platform',
    description: 'A unified AI and IoT operating system for facility operations. Four engines: Connect, Intelligence, Workflow, and Data.',
    keywords: ['AFOS', 'platform', 'connect', 'intelligence', 'workflow', 'data engine', 'IoT', 'AI', 'digital twin', 'edge computing'],
  },
  {
    title: 'About Us',
    href: '/about',
    category: 'Company',
    description: 'Singapore-based AI-driven facility platform company. 8 years of experience, 10,000+ assets monitored.',
    keywords: ['about', 'company', 'team', 'history', 'NRF', 'A*STAR', 'Singapore', 'research', 'story'],
  },
  {
    title: 'Contact Us',
    href: '/contact',
    category: 'Contact',
    description: 'Get in touch for lift monitoring, facility management, or digital twin solutions.',
    keywords: ['contact', 'email', 'phone', 'demo', 'enquiry', 'address', 'Singapore'],
  },

  // Products
  {
    title: 'Products Overview',
    href: '/products',
    category: 'Product',
    description: 'AFOS product portfolio: Sense, Fusion, Orches, and Cortex — four product series powered by the AFOS platform.',
    keywords: ['products', 'AFOS', 'Sense', 'Fusion', 'Orches', 'Cortex', 'portfolio', 'hardware', 'software'],
  },
  {
    title: 'AFOS Sense - Edge Devices',
    href: '/products/sense',
    category: 'Product',
    description: 'Industrial-grade IoT devices for non-intrusive installation, edge intelligence, and resilient operation.',
    keywords: ['Sense', 'edge', 'IoT', 'sensor', 'hardware', 'LMD', 'LBB', 'EMD', 'device', 'vibration', 'accelerometer', 'non-intrusive'],
  },
  {
    title: 'AFOS Fusion - Monitoring & Diagnostics',
    href: '/products/fusion',
    category: 'Product',
    description: 'Real-time monitoring, intelligent alerting, and predictive diagnostics across lifts, escalators, and building systems.',
    keywords: ['Fusion', 'monitoring', 'diagnostics', 'LTMS', 'RSA', 'dashboard', 'alert', 'real-time', 'fault detection', 'remote'],
  },
  {
    title: 'AFOS Orches - Operations & Maintenance',
    href: '/products/orches',
    category: 'Product',
    description: 'Work order management, mobile field service, asset tracking, and AI-powered service desk.',
    keywords: ['Orches', 'IRIS', 'CMMS', 'work order', 'maintenance', 'field service', 'asset', 'Athena', 'service desk', 'operations'],
  },
  {
    title: 'AFOS Cortex - Data & Intelligence',
    href: '/products/cortex',
    category: 'Product',
    description: 'AI knowledge base, digital twin visualization, and predictive analytics for operational data.',
    keywords: ['Cortex', 'AI', 'analytics', 'digital twin', 'predictive', 'knowledge base', 'data', 'intelligence', 'machine learning'],
  },

  // Solutions
  {
    title: 'Solutions Overview',
    href: '/solutions',
    category: 'Solution',
    description: 'Facility solutions for lift operators, building owners, and managing agents. BCA certified, AI-powered.',
    keywords: ['solutions', 'facility', 'BCA', 'certified', 'managing agent', 'building owner', 'lift operator'],
  },
  {
    title: 'Smart Vertical Transport',
    href: '/solutions/vertical-transport',
    category: 'Solution',
    description: 'BCA-certified lift and escalator remote monitoring, AI-driven fault prediction, and automated compliance.',
    keywords: ['lift', 'elevator', 'escalator', 'vertical transport', 'BCA', 'RM&D', 'compliance', 'fault prediction', 'remote monitoring'],
  },
  {
    title: 'Smart Building Management',
    href: '/solutions/building-management',
    category: 'Solution',
    description: 'Brand-agnostic building monitoring, energy optimization, and automated operations.',
    keywords: ['building', 'BMS', 'energy', 'HVAC', 'optimization', 'dashboard', 'automation', 'smart building'],
  },
  {
    title: 'Smart Facility Operations',
    href: '/solutions/facility-operations',
    category: 'Solution',
    description: 'AI-driven work orders, asset management, knowledge base, and voice AI service desk.',
    keywords: ['facility', 'operations', 'CMMS', 'work order', 'asset management', 'managing agent', 'Athena', 'AI service desk'],
  },
  {
    title: 'Infrastructure & Environmental',
    href: '/solutions/infrastructure-environmental',
    category: 'Solution',
    description: 'Satellite-based AI monitoring for coastlines, forests, reservoirs, and large-scale infrastructure.',
    keywords: ['infrastructure', 'environmental', 'satellite', 'forest', 'coastline', 'reservoir', 'remote sensing', 'geospatial'],
  },

  // Case Studies
  {
    title: 'Case Studies Overview',
    href: '/case-studies',
    category: 'Case Study',
    description: 'How HDB, Chevalier, CPG FM, and NParks trust Softgrid for monitoring and maintenance at scale.',
    keywords: ['case study', 'success', 'deployment', 'results', 'proof', 'customer'],
  },
  {
    title: 'HDB Smart Lift Intelligence',
    href: '/case-studies/hdb',
    category: 'Case Study',
    description: '10,000+ lifts monitored with AFOS at national scale across Singapore public housing.',
    keywords: ['HDB', 'public housing', 'lift', '10000', 'national', 'Singapore', 'LMD', 'LTMS', 'Cities of Tomorrow'],
  },
  {
    title: 'Chevalier RM&D',
    href: '/case-studies/chevalier',
    category: 'Case Study',
    description: 'First independent RM&D solution to achieve BCA Sandbox certification — 200+ lifts.',
    keywords: ['Chevalier', 'RM&D', 'BCA', 'sandbox', 'certification', 'lift', 'diagnostics', 'Hong Kong'],
  },
  {
    title: 'CPG FM - AI Facility Management',
    href: '/case-studies/cpg-fm',
    category: 'Case Study',
    description: 'Digitizing facility operations with IRIS CMMS and Athena AI knowledge base.',
    keywords: ['CPG', 'facility management', 'IRIS', 'CMMS', 'Athena', 'AI', 'work order', 'digital'],
  },
  {
    title: 'NParks Forest Monitoring',
    href: '/case-studies/nparks',
    category: 'Case Study',
    description: 'AI-powered satellite image analysis for national-scale environmental monitoring.',
    keywords: ['NParks', 'forest', 'satellite', 'environmental', 'ecology', 'vegetation', 'remote sensing', 'Singapore'],
  },
]
