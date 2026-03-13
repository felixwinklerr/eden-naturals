'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from '@/contexts/LocaleContext'
import { formatPrice } from '@/lib/utils'

export type ProductImageInfo = {
  handle: string
  imageUrl?: string
  imageAlt?: string
  priceAmount?: string
  priceCurrency?: string
}

interface ProductSelectorProps {
  productImages?: ProductImageInfo[]
}

const VEGAN_BLEND_HREF = '/products/vegan-pea-rice-blend'
const WPC80_HREF = '/products/wpc-80'

export function ProductSelector({ productImages = [] }: ProductSelectorProps) {
  const t = useTranslations()

  const getImage = (href: string) =>
    productImages.find((img) => img.handle === href.replace(/^\/products\//, ''))

  const getPrice = (href: string): string => {
    const info = getImage(href)
    if (info?.priceAmount) {
      return formatPrice(info.priceAmount, info.priceCurrency ?? 'EUR')
    }
    return ''
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text mb-2 md:mb-3">
            {t('home.productSelector.title')}
          </h2>
          <p className="text-text-light text-sm md:text-base max-w-xl mx-auto">
            {t('home.productSelector.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto mb-8">
          <Link
            href={VEGAN_BLEND_HREF}
            className="bg-white rounded-xl p-5 md:p-6 shadow-sm hover:shadow-lg border border-gray-100 hover:border-accent transition-all group flex flex-col"
          >
            <div className="aspect-[4/3] bg-gray-50 rounded-lg flex items-center justify-center mb-4 overflow-hidden relative">
              {getImage(VEGAN_BLEND_HREF)?.imageUrl ? (
                <Image
                  src={getImage(VEGAN_BLEND_HREF)!.imageUrl!}
                  alt={getImage(VEGAN_BLEND_HREF)!.imageAlt ?? 'Vegan Blend'}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <span className="text-4xl md:text-5xl">🌱</span>
              )}
            </div>
            <span className="inline-flex items-center gap-1 bg-accent/10 text-accent text-[10px] md:text-xs font-semibold px-2.5 py-1 rounded-full w-fit mb-2">
              Vegan Blend
            </span>
            <p className="text-text-light text-sm md:text-base mb-4 flex-1 leading-relaxed">
              {t('home.productSelector.veganBlendShort')}
            </p>
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <span className="text-accent font-bold text-sm md:text-base group-hover:underline">
                {t('home.productSelector.ctaVegan')} →
              </span>
              {getPrice(VEGAN_BLEND_HREF) && (
                <span className="text-text-muted text-xs md:text-sm">{getPrice(VEGAN_BLEND_HREF)}</span>
              )}
            </div>
          </Link>

          <Link
            href={WPC80_HREF}
            className="bg-white rounded-xl p-5 md:p-6 shadow-sm hover:shadow-lg border border-gray-100 hover:border-accent transition-all group flex flex-col"
          >
            <div className="aspect-[4/3] bg-gray-50 rounded-lg flex items-center justify-center mb-4 overflow-hidden relative">
              {getImage(WPC80_HREF)?.imageUrl ? (
                <Image
                  src={getImage(WPC80_HREF)!.imageUrl!}
                  alt={getImage(WPC80_HREF)!.imageAlt ?? 'WPC 80'}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <span className="text-4xl md:text-5xl">🥛</span>
              )}
            </div>
            <span className="inline-flex items-center gap-1 bg-accent/10 text-accent text-[10px] md:text-xs font-semibold px-2.5 py-1 rounded-full w-fit mb-2">
              WPC 80
            </span>
            <p className="text-text-light text-sm md:text-base mb-4 flex-1 leading-relaxed">
              {t('home.productSelector.wpcShort')}
            </p>
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <span className="text-accent font-bold text-sm md:text-base group-hover:underline">
                {t('home.productSelector.ctaWhey')} →
              </span>
              {getPrice(WPC80_HREF) && (
                <span className="text-text-muted text-xs md:text-sm">{getPrice(WPC80_HREF)}</span>
              )}
            </div>
          </Link>
        </div>

        <div className="text-center">
          <Link
            href="/products"
            className="text-text-muted hover:text-accent text-sm font-medium transition-colors inline-flex items-center gap-1"
          >
            {t('home.productSelector.moreVariants')} →
          </Link>
        </div>

        <div className="mt-8 bg-white border border-gray-200 rounded-xl p-4 md:p-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-text text-sm md:text-base">{t('home.productSelector.caseinComing')}</h3>
            <p className="text-text-muted text-xs md:text-sm mt-0.5">{t('home.productSelector.caseinDesc')}</p>
          </div>
          <button type="button" className="btn-secondary text-xs md:text-sm px-5 py-2.5 flex-shrink-0 whitespace-nowrap">
            {t('home.productSelector.notify')}
          </button>
        </div>
      </div>
    </section>
  )
}
