export interface NewsPhoto {
  src: string
  alt: string
  caption: string
  width: number
  height: number
}

export interface NewsQuote {
  text: string
  name: string
  title: string
  organization: string
  isPartner?: boolean
}

export interface ParagraphBlock {
  type: 'paragraph'
  text: string
}

export interface QuoteBlock {
  type: 'quote'
  quote: NewsQuote
}

export type NewsBlock = ParagraphBlock | QuoteBlock

export interface NewsFact {
  label: string
  value: string
}

export interface NewsPartner {
  name: string
  logo: string
  logoAlt: string
  url: string
  parentName?: string
}

export interface Boilerplate {
  heading: string
  paragraphs: string[]
  link?: { label: string; href: string }
}

export interface ExternalLink {
  label: string
  href: string
}

export interface MediaContact {
  organization: string
  email: string
}

export interface NewsArticle {
  slug: string
  category: string
  title: string
  standfirst: string
  excerpt: string
  datePublished: string
  dateLabel: string
  dateline: string
  seoTitle: string
  seoDescription: string
  keywords: string[]
  heroImage: NewsPhoto
  ogImage: string
  partner: NewsPartner
  facts: NewsFact[]
  body: NewsBlock[]
  gallery: NewsPhoto[]
  boilerplates: Boilerplate[]
  mediaContacts: MediaContact[]
  externalLinks: ExternalLink[]
}

const EM_MOU_IMAGES = '/images/news/2026-09-em-engineering-mou'

const emEngineeringMou: NewsArticle = {
  slug: 'softgrid-em-engineering-mou',
  category: 'Press Release',
  title:
    'SoftGrid and EM Engineering Partner to Transform Singapore’s Estate Management with Deep-Tech Predictive AI',
  standfirst:
    'Strategic alliance bridges deep-tech AI expertise with trusted estate operations to explore technologies and solutions that may support more proactive, responsive and resilient estate management.',
  excerpt:
    'Softgrid and EM Engineering sign a Memorandum of Understanding to explore how vendor-agnostic predictive AI can support more proactive, responsive and resilient estate operations in Singapore.',
  datePublished: '2026-09-22T09:00:00+08:00',
  dateLabel: '22 September 2026',
  dateline: 'SINGAPORE, 22 September 2026',
  seoTitle: 'Softgrid & EM Engineering Sign MoU — Predictive AI for Estate Management',
  seoDescription:
    'Softgrid and EM Engineering, a subsidiary of EM Services, sign an MoU to explore AI predictive intelligence, edge IoT and video analytics for Singapore estate and facilities management.',
  keywords: [
    'EM Engineering',
    'EM Services',
    'MoU',
    'partnership',
    'estate management',
    'Town Council',
    'predictive AI',
    'lift monitoring',
    'press release',
  ],
  heroImage: {
    src: `${EM_MOU_IMAGES}/handshake.webp`,
    alt: 'Representatives of EM Engineering and Softgrid shaking hands with the signed Memorandum of Understanding',
    caption: 'Exchange of the signed Memorandum of Understanding',
    width: 675,
    height: 504,
  },
  ogImage: `${EM_MOU_IMAGES}/og.png`,
  partner: {
    name: 'EM Engineering',
    logo: '/images/logos/EMSERVICES-wordmark.png',
    logoAlt: 'EM Services',
    url: 'https://www.emengineering.com.sg',
    parentName: 'EM Services',
  },
  facts: [
    { label: 'Agreement', value: 'Memorandum of Understanding' },
    { label: 'Signed', value: '22 September 2026' },
    { label: 'Venue', value: 'EM Services HQ, Singapore' },
    { label: 'Partner', value: 'EM Engineering (EM Services)' },
  ],
  body: [
    {
      type: 'paragraph',
      text: 'Softgrid, a deep-tech artificial intelligence (AI) company specializing in mission-critical infrastructure, and EM Engineering today announced a strategic partnership to explore opportunities to apply technology across mutually agreed estate and facilities management projects.',
    },
    {
      type: 'paragraph',
      text: 'Softgrid brings existing deployment experience across lift monitoring and Town Council estate operations, including Housing & Development Board estates in the western cluster of Singapore. Building on this experience, the collaboration will allow both parties to explore how Softgrid’s vendor-agnostic AI platform can complement EM Engineering’s engineering, systems integration and project delivery capabilities across future project opportunities.',
    },
    {
      type: 'paragraph',
      text: 'The collaboration provides a platform for both parties to explore opportunities where technologies such as AI predictive intelligence, edge IoT, video analytics and integrated monitoring may support greater operational visibility and more responsive estate and facilities operations.',
    },
    {
      type: 'quote',
      quote: {
        text: 'Reliability, safety and operational excellence are at the heart of our engineering services. Our collaboration with SoftGrid brings together our operational and engineering expertise with its digital capabilities. Through this collaboration, we will explore how SoftGrid’s AI platform can support stronger operational visibility, diagnostics and maintenance planning, enabling more informed decision-making and continuous improvement. This reflects our ongoing focus on strengthening the way we support safe, resilient and responsive operations for the communities we serve.',
        name: 'Teo Say Hong',
        title: 'Managing Director',
        organization: 'EM Engineering',
        isPartner: true,
      },
    },
    {
      type: 'paragraph',
      text: 'Softgrid’s platform leverages multi-relational data engines to process real-time sensor streams and telemetry, delivering predictive diagnostics that can support the identification of component wear and anomalies.',
    },
    {
      type: 'quote',
      quote: {
        text: 'Our AI grew up in Singapore’s critical lift infrastructure — one of the highest-density, most demanding operating environments anywhere. Moving beyond basic error codes into multi-relational data engines drastically sharpened our AI model accuracy under real pressure. Partnering with EM Engineering lets us scale those lessons into a comprehensive blueprint, uniting edge IoT, advanced video analytics, and automated maintenance to give estate the agility they need for the future.',
        name: 'Long Fei',
        title: 'Chief Executive Officer',
        organization: 'Softgrid',
      },
    },
    {
      type: 'paragraph',
      text: 'Softgrid’s broader technology capabilities also include Voice AI Service Desks, Autonomous Operations and Cloud-Native Building Management Systems. These capabilities may be considered where relevant to future mutually agreed projects.',
    },
    {
      type: 'quote',
      quote: {
        text: 'At its core, this collaboration is about the people living in these communities. By anchoring SoftGrid’s data intelligence directly into EM Engineering’s deep service heritage, we are closing the gap between advanced technology and daily estate care. The result is infrastructure that isn’t just passively monitored, but actively responsive to residents’ everyday peace of mind.',
        name: 'Richard Chia',
        title: 'Managing Director',
        organization: 'Softgrid',
      },
    },
    {
      type: 'paragraph',
      text: 'Through the partnership, Softgrid and EM Engineering aim to accelerate the development of innovative technologies and collaborative opportunities that may contribute to smarter and more efficient estate management solutions in Singapore.',
    },
  ],
  gallery: [
    {
      src: `${EM_MOU_IMAGES}/group.webp`,
      alt: 'Guests and teams from both organisations standing together at the signing venue',
      caption: 'Guests and teams at the ceremonial signing',
      width: 1931,
      height: 503,
    },
    {
      src: `${EM_MOU_IMAGES}/signing.webp`,
      alt: 'Two signatories signing the Memorandum of Understanding in front of the ceremonial backdrop',
      caption: 'Signing of the Memorandum of Understanding',
      width: 674,
      height: 504,
    },
    {
      src: `${EM_MOU_IMAGES}/handshake.webp`,
      alt: 'Signatories shaking hands and holding the signed Memorandum of Understanding',
      caption: 'Exchange of the signed agreement',
      width: 675,
      height: 504,
    },
    {
      src: `${EM_MOU_IMAGES}/backdrop-group.webp`,
      alt: 'Attendees gathered in front of the Memorandum of Understanding backdrop',
      caption: 'Attendees at the ceremonial signing',
      width: 674,
      height: 503,
    },
    {
      src: `${EM_MOU_IMAGES}/arrival.webp`,
      alt: 'Guests in conversation in the office corridor before the ceremony',
      caption: 'Introductions ahead of the ceremony',
      width: 674,
      height: 504,
    },
    {
      src: `${EM_MOU_IMAGES}/celebration.webp`,
      alt: 'Two guests smiling at the reception after the signing',
      caption: 'Reception following the signing',
      width: 675,
      height: 503,
    },
    {
      src: `${EM_MOU_IMAGES}/em-universe.webp`,
      alt: 'A presenter standing beside a large EM Services digital display',
      caption: 'A presentation at EM Services headquarters',
      width: 674,
      height: 503,
    },
  ],
  boilerplates: [
    {
      heading: 'About Softgrid',
      paragraphs: [
        'Founded in 2017, Softgrid is a Singapore-based deep tech company transforming facility, estate, vertical transportation, and critical infrastructure operations. Powered by its AI-Driven Facility Operating System (AFOS), the vendor-agnostic platform integrates edge IoT, digital twins, advanced video analytics, and proven predictive AI to unify physical assets, robotics, workforces, and real-time workflows. With over 100,000 monitored assets across the public and private sectors, Softgrid delivers the operational resilience, cost efficiency, uptime, and sustainability required for next-generation smart cities.',
      ],
      link: { label: 'Explore the AFOS platform', href: '/platform' },
    },
    {
      heading: 'About EM Engineering',
      paragraphs: [
        'EM Engineering, a subsidiary of EM Services, provides specialist engineering and technical services for townships and other built environments. As part of EM Services’ broader estate and facilities management capabilities, EM Engineering brings specialist expertise in engineering consultancy and project management, lift services, mechanical and electrical services, playground and fitness equipment, tradesmen services, and operations command and control.',
        'Backed by experienced technical teams and on-ground expertise, EM Engineering supports the safe and reliable operation of essential systems and assets, while continuing to strengthen its capabilities through technology and strategic partnerships.',
      ],
      link: { label: 'www.emengineering.com.sg', href: 'https://www.emengineering.com.sg' },
    },
  ],
  mediaContacts: [
    { organization: 'Softgrid', email: 'info@softgridsensing.com' },
    { organization: 'EM Services', email: 'media@emservices.com.sg' },
  ],
  externalLinks: [
    {
      label: 'EM Services announcement on LinkedIn',
      href: 'https://www.linkedin.com/posts/em-services-pte-ltd_emservices-emengineering-insideemservices-activity-7508027769662976000-tkWp',
    },
  ],
}

export const newsArticles: NewsArticle[] = [emEngineeringMou]

export function getAllArticles(): NewsArticle[] {
  return [...newsArticles].sort((a, b) => b.datePublished.localeCompare(a.datePublished))
}

export function getArticle(slug: string): NewsArticle | undefined {
  return newsArticles.find((article) => article.slug === slug)
}

export function getArticlePath(article: NewsArticle): string {
  return `/news/${article.slug}`
}
