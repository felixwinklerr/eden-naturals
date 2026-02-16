import { Hero } from '@/components/homepage/Hero'
import { ProofLayer } from '@/components/homepage/ProofLayer'
import { ProductSelector } from '@/components/homepage/ProductSelector'
import { AuthorityLayer } from '@/components/homepage/AuthorityLayer'
import { ComparisonSection } from '@/components/homepage/ComparisonSection'
import { SocialProof } from '@/components/homepage/SocialProof'
import { FAQ } from '@/components/homepage/FAQ'
import { RiskReversal } from '@/components/homepage/RiskReversal'
import { FinalCTA } from '@/components/homepage/FinalCTA'
import { shopifyFetch } from '@/lib/shopify/fetch'
import { PRODUCT_BY_HANDLE } from '@/lib/shopify/queries'

const PRODUCT_HANDLES = ['vegan-pea-rice-blend', 'wpc-80', 'reisprotein', 'erbsenprotein']

export default async function HomePage() {
  const productResults = await Promise.all(
    PRODUCT_HANDLES.map((handle) =>
      shopifyFetch({ query: PRODUCT_BY_HANDLE, variables: { handle } }).catch(() => ({ product: null }))
    )
  )
  const productImages = productResults.map((res) => {
    const p = res?.product
    if (!p?.images?.edges?.[0]?.node) return { handle: p?.handle ?? '', imageUrl: undefined, imageAlt: p?.title }
    const node = p.images.edges[0].node
    return { handle: p.handle, imageUrl: node.url, imageAlt: node.altText ?? p.title }
  })

  return (
    <>
      <Hero />
      <ProofLayer />
      <ProductSelector productImages={productImages} />
      <AuthorityLayer />
      <ComparisonSection />
      <SocialProof />
      <FAQ />
      <RiskReversal />
      <FinalCTA />
    </>
  )
}
