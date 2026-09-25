import { ArrowUpRight } from 'lucide-react'

import { ShareLinks } from './ShareLinks'

import type { NewsArticle } from '@/data/news'

interface ArticleSidebarProps {
  article: NewsArticle
  url: string
}

function SidebarBlock({ title, children }: { title: string; children: React.ReactNode }): React.ReactElement {
  return (
    <div className="border-t border-slate-200 pt-5">
      <h2 className="mb-4 text-[11px] font-bold uppercase tracking-[2.5px] text-slate-500">{title}</h2>
      {children}
    </div>
  )
}

export function ArticleSidebar({ article, url }: ArticleSidebarProps): React.ReactElement {
  return (
    <aside className="space-y-8 lg:sticky lg:top-28">
      <SidebarBlock title="Share">
        <ShareLinks url={url} title={article.title} />
      </SidebarBlock>

      <SidebarBlock title="Media enquiries">
        <ul className="space-y-3 text-sm">
          {article.mediaContacts.map((contact) => (
            <li key={contact.email}>
              <div className="font-semibold text-navy-900">{contact.organization}</div>
              <a
                href={`mailto:${contact.email}`}
                className="break-all text-primary-600 transition-colors hover:text-primary-700"
              >
                {contact.email}
              </a>
            </li>
          ))}
        </ul>
      </SidebarBlock>

      {article.externalLinks.length > 0 && (
        <SidebarBlock title="Also announced">
          <ul className="space-y-3 text-sm">
            {article.externalLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-start gap-1.5 font-medium text-navy-900 transition-colors hover:text-primary-600"
                >
                  {link.label}
                  <ArrowUpRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary-600" />
                </a>
              </li>
            ))}
          </ul>
        </SidebarBlock>
      )}
    </aside>
  )
}
