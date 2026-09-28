import { notFound } from 'next/navigation'

import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { JsonLd } from '@/components/seo/JsonLd'
import { NewsHero } from '@/components/sections/news/NewsHero'
import { KeyFacts } from '@/components/sections/news/KeyFacts'
import { ArticleBody } from '@/components/sections/news/ArticleBody'
import { PhotoGallery } from '@/components/sections/news/PhotoGallery'
import { Boilerplates } from '@/components/sections/news/Boilerplates'
import { CTASection } from '@/components/sections/CTASection'
import { getAllArticles, getArticle, getArticlePath } from '@/data/news'

import type { Metadata } from 'next'
import type { NewsArticle } from '@/data/news'

const SITE_URL = 'https://softgridsensing.com'
const ORG_ID = `${SITE_URL}/#organization`

interface ArticlePageProps {
  params: { slug: string }
}

export function generateStaticParams(): { slug: string }[] {
  return getAllArticles().map((article) => ({ slug: article.slug }))
}

export function generateMetadata({ params }: ArticlePageProps): Metadata {
  const article = getArticle(params.slug)
  if (!article) return {}

  const path = getArticlePath(article)
  const image = { url: article.ogImage, width: 1200, height: 630, alt: article.seoTitle }

  return {
    title: article.seoTitle,
    description: article.seoDescription,
    alternates: { canonical: path },
    openGraph: {
      title: article.seoTitle,
      description: article.seoDescription,
      type: 'article',
      url: path,
      publishedTime: article.datePublished,
      locale: 'en_SG',
      siteName: 'Softgrid Sensing',
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.seoTitle,
      description: article.seoDescription,
      images: [article.ogImage],
    },
  }
}

function buildArticleSchema(article: NewsArticle): Record<string, unknown> {
  const url = `${SITE_URL}${getArticlePath(article)}`
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.seoDescription,
    datePublished: article.datePublished,
    dateModified: article.datePublished,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
    image: [`${SITE_URL}${article.ogImage}`, `${SITE_URL}${article.heroImage.src}`],
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    inLanguage: 'en-SG',
    articleSection: article.category,
    keywords: article.keywords.join(', '),
    mentions: [
      {
        '@type': 'Organization',
        name: article.partner.name,
        url: article.partner.url,
        ...(article.partner.parentName
          ? { parentOrganization: { '@type': 'Organization', name: article.partner.parentName } }
          : {}),
      },
    ],
  }
}

function buildBreadcrumbSchema(article: NewsArticle): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Newsroom', item: `${SITE_URL}/news` },
      { '@type': 'ListItem', position: 3, name: article.seoTitle, item: `${SITE_URL}${getArticlePath(article)}` },
    ],
  }
}

export default function NewsArticlePage({ params }: ArticlePageProps): React.ReactElement {
  const article = getArticle(params.slug)
  if (!article) notFound()

  const url = `${SITE_URL}${getArticlePath(article)}`

  return (
    <>
      <JsonLd data={buildArticleSchema(article)} />
      <JsonLd data={buildBreadcrumbSchema(article)} />

      <Breadcrumb items={[{ label: 'Newsroom', href: '/news' }, { label: `Softgrid × ${article.partner.name}` }]} />

      <NewsHero article={article} />
      <KeyFacts facts={article.facts} />
      <PhotoGallery photos={article.gallery} />
      <ArticleBody article={article} url={url} />
      <Boilerplates items={article.boilerplates} />
      <CTASection
        variant="gradient"
        headline="Explore What AFOS Can Do for Your Estate"
        description="See how intelligent lift monitoring, surveillance integration and predictive maintenance come together on one vendor-agnostic platform."
        primaryLabel="Talk to Our Team"
        primaryHref="/contact"
        secondaryLabel="Lift Monitoring Solutions"
        secondaryHref="/solutions/vertical-transport"
      />
    </>
  )
}
