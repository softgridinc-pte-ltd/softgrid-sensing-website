import { HeroSection } from '@/components/sections/HeroSection'
import { ShiftSection } from '@/components/sections/ShiftSection'
import { PlatformSection } from '@/components/sections/PlatformSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { SolutionsSection } from '@/components/sections/SolutionsSection'
import { TrustedBySection } from '@/components/sections/TrustedBySection'
import { CTASection } from '@/components/sections/CTASection'

export default function HomePage(): React.ReactElement {
  return (
    <>
      <HeroSection />
      <ShiftSection />
      <PlatformSection />
      <StatsSection />
      <SolutionsSection />
      <TrustedBySection />
      <CTASection />
    </>
  )
}
