import Image from 'next/image'

interface PhoneFrameProps {
  src: string
  alt: string
}

export function PhoneFrame({ src, alt }: PhoneFrameProps): React.ReactElement {
  return (
    <div
      className="relative mx-auto w-[220px] rounded-[2rem] bg-slate-800 p-2 shadow-xl ring-1 ring-slate-700/50"
    >
      {/* Notch */}
      <div className="absolute left-1/2 top-2 z-10 h-4 w-20 -translate-x-1/2 rounded-b-xl bg-slate-800" />
      {/* Screen */}
      <div className="overflow-hidden rounded-[1.5rem] bg-white">
        <Image
          src={src}
          alt={alt}
          width={440}
          height={956}
          className="w-full object-cover"
        />
      </div>
      {/* Home indicator */}
      <div className="mx-auto mt-1.5 h-1 w-16 rounded-full bg-slate-600" />
    </div>
  )
}
