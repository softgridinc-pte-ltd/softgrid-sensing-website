import { HeroSection } from '@/components/sections/HeroSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { ShiftSection } from '@/components/sections/ShiftSection'
import { PlatformSection } from '@/components/sections/PlatformSection'
import { SolutionsSection } from '@/components/sections/SolutionsSection'
import { EcosystemSection } from '@/components/sections/about/EcosystemSection'
import { CTASection } from '@/components/sections/CTASection'

export default function HomePage(): React.ReactElement {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ShiftSection />
      <PlatformSection />
      <SolutionsSection />
      <EcosystemSection variant="dark" />
      <CTASection />
    </>
  )
}
