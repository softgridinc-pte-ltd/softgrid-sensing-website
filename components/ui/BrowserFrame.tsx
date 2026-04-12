import Image from 'next/image'

interface BrowserFrameProps {
  src: string
  alt: string
  url?: string
}

export function BrowserFrame({ src, alt, url }: BrowserFrameProps): React.ReactElement {
  return (
    <div className="overflow-hidden rounded-lg shadow-xl ring-1 ring-slate-900/10">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 bg-slate-200 px-3 py-1.5">
        <div className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        </div>
        {url && (
          <div className="ml-2 flex-1 rounded bg-white/70 px-2.5 py-px">
            <span className="text-[10px] font-medium text-slate-500">{url}</span>
          </div>
        )}
      </div>
      {/* Screenshot */}
      <Image
        src={src}
        alt={alt}
        width={1920}
        height={1080}
        className="w-full object-cover"
      />
    </div>
  )
}
