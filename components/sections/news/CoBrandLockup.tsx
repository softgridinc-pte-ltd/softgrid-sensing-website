import Image from 'next/image'
import { X } from 'lucide-react'

import type { NewsPartner } from '@/data/news'

interface CoBrandLockupProps {
  partner: NewsPartner
}

const chip =
  'flex h-11 flex-shrink-0 items-center rounded-lg bg-white px-3.5 shadow-lg shadow-navy-950/30 sm:h-14 sm:rounded-xl sm:px-5'
const connector = 'h-px w-2 sm:w-4 from-transparent to-primary-400/70'

export function CoBrandLockup({ partner }: CoBrandLockupProps): React.ReactElement {
  return (
    <div className="flex items-center gap-2 sm:gap-3" aria-label={`Softgrid and ${partner.name}`}>
      <div className={`${chip} gap-2`}>
        <Image src="/logo.svg" alt="" width={32} height={32} className="h-6 w-auto sm:h-8" />
        <span className="font-heading text-xs font-bold tracking-[1.5px] text-navy-900 sm:text-sm sm:tracking-[2px]">
          SOFTGRID
        </span>
      </div>

      <div className="flex items-center gap-1.5" aria-hidden="true">
        <span className={`${connector} bg-gradient-to-r`} />
        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-primary-400/40 text-primary-300">
          <X className="h-3 w-3" strokeWidth={2.5} />
        </span>
        <span className={`${connector} bg-gradient-to-l`} />
      </div>

      <div className={chip}>
        <Image
          src={partner.logo}
          alt={partner.logoAlt}
          width={264}
          height={44}
          className="h-4 w-auto object-contain sm:h-6"
        />
      </div>
    </div>
  )
}
