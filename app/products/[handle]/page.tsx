import { notFound } from 'next/navigation'
import { shopifyFetch } from '@/lib/shopify/fetch'
import { PRODUCT_BY_HANDLE } from '@/lib/shopify/queries'
import { ProductDetail } from '@/components/product/ProductDetail'
import { getCrossSellHandles } from '@/lib/products/product-data'

interface PageProps {
  params: Promise<{
    handle: string
  }>
}

export default async function ProductPage({ params }: PageProps) {
  const { handle } = await params
  const [{ product }, ...crossSellResults] = await Promise.all([
    shopifyFetch({ query: PRODUCT_BY_HANDLE, variables: { handle } }),
    ...getCrossSellHandles(handle).map((h) =>
      shopifyFetch({ query: PRODUCT_BY_HANDLE, variables: { handle: h } })
    ),
  ])

  if (!product) {
    notFound()
  }

  const crossSellProducts = crossSellResults
    .map((r) => r.product)
    .filter(Boolean) as Array<{ handle: string; title: string; images?: { edges: Array<{ node: { url: string; altText?: string | null } }> } }>

  return <ProductDetail product={product} crossSellProducts={crossSellProducts} />
}
