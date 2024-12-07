import { Background } from '@/components/ui/background'
import { Hero } from '@/components/sections/hero'
import { Features } from '@/components/sections/features'
import { Pricing } from '@/components/sections/pricing'

export default function Home() {
  return (
    <Background>
      <Hero />
      <Features />
      <Pricing />
    </Background>
  )
}