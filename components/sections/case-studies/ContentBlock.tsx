import Image from 'next/image'
import type { ReactNode } from 'react'

interface ContentBlockProps {
  title: string
  children: ReactNode
  background?: 'white' | 'slate'
  image?: string
  imagePosition?: 'left' | 'right'
}

export function ContentBlock({
  title,
  children,
  background = 'white',
  image,
  imagePosition = 'right',
}: ContentBlockProps): React.ReactElement {
  const bgClass = background === 'slate' ? 'bg-slate-50' : 'bg-white'

  return (
    <section className={`${bgClass} py-20 md:py-28`}>
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        {image ? (
          <div
            className={`grid items-start gap-10 md:gap-16 lg:grid-cols-[1.2fr_1fr] ${
              imagePosition === 'left' ? 'lg:[&>div:first-child]:order-2' : ''
            }`}
            data-animate
          >
            <div>
              <h2 className="mb-8 text-3xl md:text-4xl font-bold leading-tight tracking-tight text-navy-900">
                {title}
              </h2>
              <div className="prose-content space-y-5 text-base md:text-[17px] leading-[1.8] text-slate-600">
                {children}
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={image}
                alt={title}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        ) : (
          <div className="max-w-3xl" data-animate>
            <h2 className="mb-8 text-3xl md:text-4xl font-bold leading-tight tracking-tight text-navy-900">
              {title}
            </h2>
            <div className="prose-content space-y-5 text-base md:text-[17px] leading-[1.8] text-slate-600">
              {children}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
