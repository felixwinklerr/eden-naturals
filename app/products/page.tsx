import { shopifyFetch } from '@/lib/shopify/fetch'
import { ALL_PRODUCTS } from '@/lib/shopify/queries'
import Link from 'next/link'
import Image from 'next/image'
import { formatPrice } from '@/lib/utils'
import { getServerTranslations } from '@/lib/i18n/server'
import { getProductTitleKey } from '@/lib/i18n/product-titles'

export const dynamic = 'force-dynamic'

export default async function ProductsPage() {
  const { t } = await getServerTranslations()
  const { products } = await shopifyFetch({
    query: ALL_PRODUCTS,
    variables: { first: 20 },
  })

  return (
    <div className="section-padding">
      <div className="container-custom">
        <h1 className="text-3xl md:text-4xl font-bold text-text mb-6 md:mb-8">{t('pages.products.title')}</h1>

        {products?.edges?.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-text-light mb-4">{t('pages.products.noProducts')}</p>
            <p className="text-sm text-text-light">
              {t('pages.products.noProductsHint')}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {products?.edges?.map(({ node: product }: any) => {
              const image = product.images?.edges?.[0]?.node
              const price = product.priceRange?.minVariantPrice
              const titleKey = getProductTitleKey(product.handle ?? '')
              const displayTitle = t(`productTitles.${titleKey}`) !== `productTitles.${titleKey}` ? t(`productTitles.${titleKey}`) : product.title

              return (
                <Link
                  key={product.id}
                  href={`/products/${product.handle}`}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  {image ? (
                    <div className="aspect-square relative bg-gray-100">
                      <Image
                        src={image.url}
                        alt={image.altText || displayTitle}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      />
                    </div>
                  ) : (
                    <div className="aspect-square bg-gray-100 flex items-center justify-center">
                      <span className="text-4xl md:text-5xl">🥤</span>
                    </div>
                  )}
                  <div className="p-3 md:p-4">
                    <h2 className="font-semibold text-text mb-1 md:mb-2 text-sm md:text-base">{displayTitle}</h2>
                    <p className="text-accent font-bold text-base md:text-lg">
                      {formatPrice(price?.amount || '0', price?.currencyCode || 'EUR')}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
