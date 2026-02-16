import { Hero } from '@/components/homepage/Hero'
import { ProofLayer } from '@/components/homepage/ProofLayer'
import { ProductSelector } from '@/components/homepage/ProductSelector'
import { AuthorityLayer } from '@/components/homepage/AuthorityLayer'
import { ComparisonSection } from '@/components/homepage/ComparisonSection'
import { SocialProof } from '@/components/homepage/SocialProof'
import { FAQ } from '@/components/homepage/FAQ'
import { RiskReversal } from '@/components/homepage/RiskReversal'
import { FinalCTA } from '@/components/homepage/FinalCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofLayer />
      <ProductSelector />
      <AuthorityLayer />
      <ComparisonSection />
      <SocialProof />
      <FAQ />
      <RiskReversal />
      <FinalCTA />
    </>
  )
}
