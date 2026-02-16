'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from '@/contexts/LocaleContext'

export type ProductImageInfo = { handle: string; imageUrl?: string; imageAlt?: string }

interface ProductSelectorProps {
  productImages?: ProductImageInfo[]
}

export function ProductSelector({ productImages = [] }: ProductSelectorProps) {
  const t = useTranslations()

  const getImage = (href: string) => productImages.find((img) => img.handle === href.replace(/^\/products\//, ''))

  const products = [
    {
      id: 'vegan-pea-rice',
      titleKey: 'home.productSelector.peaRiceTitle',
      tagKey: 'home.productSelector.flagshipVegan',
      subtitleKey: 'home.productSelector.peaRiceSub',
      whoKey: 'home.productSelector.peaRiceWho',
      benefitKeys: ['home.productSelector.benefitNoSandy', 'home.productSelector.benefitPeaRice', 'home.productSelector.proteinPer100'],
      href: '/products/vegan-pea-rice-blend',
      ctaKey: 'home.productSelector.ctaVegan',
      featured: true,
    },
    {
      id: 'wpc-80',
      titleKey: 'home.productSelector.wpcTitle',
      tagKey: 'home.productSelector.premiumWhey',
      subtitleKey: 'home.productSelector.wpcSub',
      whoKey: 'home.productSelector.wpcWho',
      benefitKeys: ['home.productSelector.benefitStableEnergy', 'home.productSelector.benefitNoBrainFog', 'home.productSelector.proteinPer100'],
      href: '/products/wpc-80',
      ctaKey: 'home.productSelector.ctaWhey',
      featured: true,
    },
    {
      id: 'reisprotein',
      titleKey: 'home.productSelector.riceTitle',
      subtitleKey: 'home.productSelector.riceSub',
      whoKey: 'home.productSelector.riceWho',
      benefitKeys: ['home.productSelector.benefitHypo', 'home.productSelector.proteinPer100High'],
      href: '/products/reisprotein',
      ctaKey: 'home.productSelector.ctaRice',
      featured: false,
    },
    {
      id: 'erbsenprotein',
      titleKey: 'home.productSelector.peaTitle',
      subtitleKey: 'home.productSelector.peaSub',
      whoKey: 'home.productSelector.peaWho',
      benefitKeys: ['home.productSelector.benefitPlant', 'home.productSelector.proteinPer100High'],
      href: '/products/erbsenprotein',
      ctaKey: 'home.productSelector.ctaPea',
      featured: false,
    },
  ]

  const featuredProducts = products.filter((p) => p.featured)
  const secondaryProducts = products.filter((p) => !p.featured)

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text mb-2 md:mb-3">
            {t('home.productSelector.title')}
          </h2>
          <p className="text-text-light text-sm md:text-base max-w-xl mx-auto">
            {t('home.productSelector.subtitle')}
          </p>
        </div>
        <div className="mb-6 md:mb-8 bg-accent bg-opacity-5 border border-accent border-opacity-20 rounded-xl p-4 md:p-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-text text-sm md:text-base">{t('home.productSelector.caseinComing')}</h3>
            <p className="text-text-light text-xs md:text-sm">{t('home.productSelector.caseinDesc')}</p>
          </div>
          <button className="btn-secondary text-xs md:text-sm px-4 py-2 flex-shrink-0">
            {t('home.productSelector.notify')}
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              href={product.href}
              className="bg-white rounded-xl p-5 md:p-6 shadow-sm hover:shadow-lg border border-gray-100 hover:border-accent transition-all group"
            >
              <div className="aspect-[3/2] bg-gray-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gray-100 transition-colors overflow-hidden relative">
                {getImage(product.href)?.imageUrl ? (
                  <Image
                    src={getImage(product.href)!.imageUrl!}
                    alt={getImage(product.href)!.imageAlt ?? t(product.titleKey)}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <span className="text-4xl md:text-5xl">🥤</span>
                )}
              </div>
              {'tagKey' in product && product.tagKey && (
                <span className="inline-block bg-accent text-white text-[10px] md:text-xs font-bold px-2.5 py-1 rounded-full mb-2 uppercase tracking-wide">
                  {t(product.tagKey)}
                </span>
              )}
              <h3 className="text-lg md:text-xl font-bold text-text mb-1">{t(product.titleKey)}</h3>
              <p className="text-text-light text-xs md:text-sm mb-3">{t(product.subtitleKey)}</p>
              <p className="text-text-muted text-[10px] md:text-xs mb-3">{t(product.whoKey)}</p>
              <div className="space-y-1.5 mb-4">
                {product.benefitKeys.map((key, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-accent flex-shrink-0 text-sm">✓</span>
                    <span className="text-text text-xs md:text-sm">{t(key)}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-accent font-bold text-sm md:text-base group-hover:underline">
                  {t(product.ctaKey)} →
                </span>
                <span className="text-text-muted text-xs">{t('home.productSelector.fromPrice')}</span>
              </div>
            </Link>
          ))}
        </div>
        {secondaryProducts.length > 0 && (
          <div className="grid md:grid-cols-2 gap-3 md:gap-4">
            {secondaryProducts.map((product) => (
              <Link
                key={product.id}
                href={product.href}
                className="bg-white rounded-lg p-4 border border-gray-100 hover:border-accent transition-all group flex items-center gap-4"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gray-100 transition-colors overflow-hidden relative">
                  {getImage(product.href)?.imageUrl ? (
                    <Image
                      src={getImage(product.href)!.imageUrl!}
                      alt={getImage(product.href)!.imageAlt ?? t(product.titleKey)}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  ) : (
                    <span className="text-2xl">🥤</span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-text text-sm md:text-base">{t(product.titleKey)}</h3>
                  <p className="text-text-light text-xs">{t(product.subtitleKey)}</p>
                </div>
                <span className="text-accent font-semibold text-xs md:text-sm flex-shrink-0 group-hover:underline">
                  {t(product.ctaKey)} →
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
