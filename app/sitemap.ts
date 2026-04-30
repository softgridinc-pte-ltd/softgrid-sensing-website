import type { MetadataRoute } from 'next'

const BASE = 'https://softgridsensing.com'

interface RouteEntry {
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
}

const routes: RouteEntry[] = [
  { path: '', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/platform', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/products', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/products/sense', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/products/fusion', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/products/orches', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/products/cortex', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/solutions', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/solutions/vertical-transport', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/solutions/building-management', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/solutions/facility-operations', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/solutions/infrastructure-environmental', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/case-studies', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/case-studies/hdb', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/case-studies/chevalier', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/case-studies/cpg-fm', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/case-studies/nparks', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/why-softgrid', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.7 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
