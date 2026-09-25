import Image from 'next/image'

import type { NewsPartner } from '@/data/news'

interface CoBrandLockupProps {
  partner: NewsPartner
}

const chip =
  'flex h-11 flex-shrink-0 items-center rounded-lg bg-white px-3.5 shadow-lg shadow-navy-950/30 sm:h-14 sm:rounded-xl sm:px-5'

export function CoBrandLockup({ partner }: CoBrandLockupProps): React.ReactElement {
  return (
    <div className="flex items-center gap-2 sm:gap-3" aria-label={`Softgrid and ${partner.name}`}>
      <div className={`${chip} gap-2`}>
        <Image src="/logo.svg" alt="" width={32} height={32} className="h-6 w-auto sm:h-8" />
        <span className="font-heading text-xs font-bold tracking-[1.5px] text-navy-900 sm:text-sm sm:tracking-[2px]">
          SOFTGRID
        </span>
      </div>

      <span aria-hidden="true" className="px-1 font-heading text-2xl font-light leading-none text-primary-300 sm:px-2 sm:text-3xl">
        &times;
      </span>

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
