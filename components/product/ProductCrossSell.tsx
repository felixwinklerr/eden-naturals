'use client'

import Link from 'next/link'
import Image from 'next/image'
import { productData } from '@/lib/products/product-data'
import { useTranslations } from '@/contexts/LocaleContext'

interface CrossSellProductFromShopify {
  handle: string
  title: string
  images?: { edges: Array<{ node: { url: string; altText?: string | null } }> }
}

interface ProductCrossSellProps {
  currentHandle: string
  crossSellProducts?: CrossSellProductFromShopify[]
}

export function ProductCrossSell({ currentHandle, crossSellProducts }: ProductCrossSellProps) {
  const t = useTranslations()
  const otherProducts = Object.values(productData).filter((p) => p.handle !== currentHandle).slice(0, 3)

  // Prefer Shopify data with images when available; match by handle
  const crossSellWithData = crossSellProducts?.length
    ? crossSellProducts.map((shopifyProduct) => {
        const data = productData[shopifyProduct.handle] ?? {
          title: shopifyProduct.title,
          handle: shopifyProduct.handle,
          info: [''],
          isVegan: false,
        }
        const imageNode = shopifyProduct.images?.edges?.[0]?.node
        return {
          ...data,
          title: data.title,
          handle: data.handle,
          imageUrl: imageNode?.url,
          imageAlt: imageNode?.altText ?? data.title,
        }
      })
    : otherProducts.map((p) => ({ ...p, imageUrl: undefined as string | undefined, imageAlt: p.title }))

  if (crossSellWithData.length === 0) return null

  return (
    <div className="mb-8 md:mb-12">
      <h3 className="text-xl md:text-2xl font-bold text-text mb-4 md:mb-6 text-center">
        {t('product.customersAlsoBuy')}
      </h3>
      <div className="grid sm:grid-cols-3 gap-3 md:gap-4">
        {crossSellWithData.map((product) => (
          <Link
            key={product.handle}
            href={`/products/${product.handle}`}
            className="bg-white rounded-xl border border-gray-100 p-4 md:p-5 hover:border-accent hover:shadow-md transition-all group"
          >
            <div className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center mb-3 group-hover:bg-gray-100 transition-colors overflow-hidden relative">
              {product.imageUrl ? (
                <Image
                  src={product.imageUrl}
                  alt={product.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              ) : (
                <span className="text-3xl md:text-4xl">🥤</span>
              )}
            </div>
            <h4 className="font-semibold text-text text-sm md:text-base mb-1 group-hover:text-accent transition-colors">
              {product.title}
            </h4>
            <p className="text-text-light text-xs md:text-sm mb-2 line-clamp-2">{product.info[0]}</p>
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {product.isVegan && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-green-50 text-green-700">Vegan</span>
                )}
              </div>
              <span className="text-accent text-xs md:text-sm font-semibold group-hover:underline">
                {t('product.viewProduct')}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
