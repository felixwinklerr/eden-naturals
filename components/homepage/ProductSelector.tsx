'use client'

import { useState } from 'react'
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

export function ProductSelector({ productImages = [] }: ProductSelectorProps) {
  const t = useTranslations()
  const [activeTab, setActiveTab] = useState<'vegan' | 'whey'>('vegan')

  const getImage = (href: string) => productImages.find((img) => img.handle === href.replace(/^\/products\//, ''))

  const getPrice = (href: string): string => {
    const info = getImage(href)
    if (info?.priceAmount) {
      return `Ab ${formatPrice(info.priceAmount, info.priceCurrency ?? 'EUR')}`
    }
    return t('home.productSelector.fromPrice')
  }

  const veganProducts = [
    {
      id: 'vegan-pea-rice',
      titleKey: 'home.productSelector.peaRiceTitle',
      tagKey: 'home.productSelector.flagshipVegan',
      subtitleKey: 'home.productSelector.peaRiceSub',
      whoKey: 'home.productSelector.peaRiceWho',
      benefitKeys: [
        'home.productSelector.benefitNoSandy',
        'home.productSelector.benefitNoShaker',
        'home.productSelector.benefitPeaRice',
        'home.productSelector.proteinPer100',
      ],
      stepsBadgeKey: 'home.productSelector.steps3',
      href: '/products/vegan-pea-rice-blend',
      ctaKey: 'home.productSelector.ctaVegan',
      featured: true,
    },
    {
      id: 'reisprotein',
      titleKey: 'home.productSelector.riceTitle',
      subtitleKey: 'home.productSelector.riceSub',
      whoKey: 'home.productSelector.riceWho',
      benefitKeys: [
        'home.productSelector.benefitHypo',
        'home.productSelector.benefitNoShaker',
        'home.productSelector.proteinPer100High',
      ],
      stepsBadgeKey: 'home.productSelector.steps2',
      href: '/products/reisprotein',
      ctaKey: 'home.productSelector.ctaRice',
      featured: false,
    },
    {
      id: 'erbsenprotein',
      titleKey: 'home.productSelector.peaTitle',
      subtitleKey: 'home.productSelector.peaSub',
      whoKey: 'home.productSelector.peaWho',
      benefitKeys: [
        'home.productSelector.benefitPlant',
        'home.productSelector.benefitNoShaker',
        'home.productSelector.proteinPer100High',
      ],
      stepsBadgeKey: 'home.productSelector.steps2',
      href: '/products/erbsenprotein',
      ctaKey: 'home.productSelector.ctaPea',
      featured: false,
    },
  ]

  const wheyProducts = [
    {
      id: 'wpc-80',
      titleKey: 'home.productSelector.wpcTitle',
      tagKey: 'home.productSelector.premiumWhey',
      subtitleKey: 'home.productSelector.wpcSub',
      whoKey: 'home.productSelector.wpcWho',
      benefitKeys: [
        'home.productSelector.benefitStableEnergy',
        'home.productSelector.benefitNoBrainFog',
        'home.productSelector.benefitMadeInLux',
        'home.productSelector.proteinPer100',
      ],
      stepsBadgeKey: 'home.productSelector.steps2',
      href: '/products/wpc-80',
      ctaKey: 'home.productSelector.ctaWhey',
      featured: true,
    },
  ]

  const activeProducts = activeTab === 'vegan' ? veganProducts : wheyProducts
  const featuredProducts = activeProducts.filter((p) => p.featured)
  const secondaryProducts = activeProducts.filter((p) => !p.featured)
  const isSingleFeatured = featuredProducts.length === 1 && secondaryProducts.length === 0

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">

        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text mb-2 md:mb-3">
            {t('home.productSelector.title')}
          </h2>
          <p className="text-text-light text-sm md:text-base max-w-xl mx-auto">
            {t('home.productSelector.subtitle')}
          </p>
        </div>

        {/* Tabs + inline description */}
        <div className="max-w-lg mx-auto mb-8">
          <div className="flex rounded-xl bg-white border border-gray-200 p-1 shadow-sm mb-3">
            <button
              onClick={() => setActiveTab('vegan')}
              className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === 'vegan'
                  ? 'bg-accent text-white shadow-sm'
                  : 'text-text-light hover:text-text'
              }`}
            >
              🌿 {t('home.productSelector.tabVegan')}
            </button>
            <button
              onClick={() => setActiveTab('whey')}
              className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === 'whey'
                  ? 'bg-accent text-white shadow-sm'
                  : 'text-text-light hover:text-text'
              }`}
            >
              🥛 {t('home.productSelector.tabWhey')}
            </button>
          </div>
          {/* Subtle inline description */}
          <p className="text-center text-text-muted text-xs md:text-sm leading-relaxed">
            {activeTab === 'vegan'
              ? t('home.productSelector.veganDesc')
              : t('home.productSelector.wheyDesc')}
          </p>
        </div>

        {/* Products layout */}
        <div className="mb-8 md:mb-10">
          {secondaryProducts.length > 0 ? (
            /* Vegan tab: featured (left, 60%) + secondary stacked (right, 40%) */
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">

              {/* Featured card */}
              {featuredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={product.href}
                  className="md:flex-[3] bg-white rounded-xl p-5 md:p-6 shadow-sm hover:shadow-lg border border-gray-100 hover:border-accent transition-all group flex flex-col"
                >
                  <div className="aspect-[3/2] bg-gray-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gray-100 transition-colors overflow-hidden relative">
                    {getImage(product.href)?.imageUrl ? (
                      <Image
                        src={getImage(product.href)!.imageUrl!}
                        alt={getImage(product.href)!.imageAlt ?? t(product.titleKey)}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 60vw"
                      />
                    ) : (
                      <span className="text-4xl md:text-5xl">🥤</span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 mb-2.5">
                    {'tagKey' in product && product.tagKey && (
                      <span className="inline-block bg-accent text-white text-[10px] md:text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                        {t(product.tagKey)}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1 bg-gray-100 text-text-muted text-[10px] md:text-xs font-medium px-2 py-1 rounded-full">
                      <span className="text-accent">⚙️</span> {t(product.stepsBadgeKey)}
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-text mb-1">{t(product.titleKey)}</h3>
                  <p className="text-text-light text-xs md:text-sm mb-1">{t(product.subtitleKey)}</p>
                  <p className="text-text-muted text-[10px] md:text-xs mb-4">{t(product.whoKey)}</p>

                  <div className="space-y-1.5 mb-5 flex-1">
                    {product.benefitKeys.map((key, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="text-accent flex-shrink-0 text-sm">✓</span>
                        <span className="text-text text-xs md:text-sm">{t(key)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-accent font-bold text-sm md:text-base group-hover:underline">
                      {t(product.ctaKey)} →
                    </span>
                    <span className="text-text-muted text-xs">{getPrice(product.href)}</span>
                  </div>
                </Link>
              ))}

              {/* Secondary cards – stacked right column */}
              <div className="md:flex-[2] flex flex-col gap-3">
                {secondaryProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={product.href}
                    className="bg-white rounded-xl p-4 md:p-5 border border-gray-100 hover:border-accent hover:shadow-md transition-all group flex-1 flex flex-col"
                  >
                    <div className="aspect-[16/9] bg-gray-50 rounded-lg flex items-center justify-center mb-3 group-hover:bg-gray-100 transition-colors overflow-hidden relative">
                      {getImage(product.href)?.imageUrl ? (
                        <Image
                          src={getImage(product.href)!.imageUrl!}
                          alt={getImage(product.href)!.imageAlt ?? t(product.titleKey)}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 40vw"
                        />
                      ) : (
                        <span className="text-3xl">🥤</span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 mb-2">
                      <span className="inline-flex items-center gap-1 bg-gray-100 text-text-muted text-[10px] font-medium px-2 py-0.5 rounded-full">
                        <span className="text-accent">⚙️</span> {t(product.stepsBadgeKey)}
                      </span>
                    </div>

                    <h3 className="font-bold text-text text-sm md:text-base mb-0.5 leading-tight">{t(product.titleKey)}</h3>
                    <p className="text-text-light text-xs mb-3 flex-1">{t(product.subtitleKey)}</p>

                    <div className="flex items-center justify-between pt-2.5 border-t border-gray-100">
                      <span className="text-accent font-semibold text-xs md:text-sm group-hover:underline">
                        {t(product.ctaKey)} →
                      </span>
                      <span className="text-text-muted text-[10px]">{getPrice(product.href)}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            /* Single product (Whey tab): centered, wider */
            <div className="max-w-2xl mx-auto">
              {featuredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={product.href}
                  className="bg-white rounded-xl p-5 md:p-8 shadow-sm hover:shadow-lg border border-gray-100 hover:border-accent transition-all group flex flex-col md:flex-row gap-6"
                >
                  <div className="md:w-64 md:flex-shrink-0 aspect-square md:aspect-auto bg-gray-50 rounded-lg flex items-center justify-center group-hover:bg-gray-100 transition-colors overflow-hidden relative">
                    {getImage(product.href)?.imageUrl ? (
                      <Image
                        src={getImage(product.href)!.imageUrl!}
                        alt={getImage(product.href)!.imageAlt ?? t(product.titleKey)}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 256px"
                      />
                    ) : (
                      <span className="text-5xl">🥤</span>
                    )}
                  </div>

                  <div className="flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-2.5">
                      {'tagKey' in product && product.tagKey && (
                        <span className="inline-block bg-accent text-white text-[10px] md:text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                          {t(product.tagKey)}
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1 bg-gray-100 text-text-muted text-[10px] md:text-xs font-medium px-2 py-1 rounded-full">
                        <span className="text-accent">⚙️</span> {t(product.stepsBadgeKey)}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-text mb-1">{t(product.titleKey)}</h3>
                    <p className="text-text-light text-sm mb-1">{t(product.subtitleKey)}</p>
                    <p className="text-text-muted text-xs mb-4">{t(product.whoKey)}</p>

                    <div className="space-y-2 mb-5 flex-1">
                      {product.benefitKeys.map((key, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="text-accent flex-shrink-0 text-sm">✓</span>
                          <span className="text-text text-sm">{t(key)}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <span className="text-accent font-bold text-base group-hover:underline">
                        {t(product.ctaKey)} →
                      </span>
                      <span className="text-text-muted text-sm">{getPrice(product.href)}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Casein teaser – am Ende, nicht als Flow-Unterbrecher */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-text text-sm md:text-base">{t('home.productSelector.caseinComing')}</h3>
            <p className="text-text-muted text-xs md:text-sm mt-0.5">{t('home.productSelector.caseinDesc')}</p>
          </div>
          <button className="btn-secondary text-xs md:text-sm px-5 py-2.5 flex-shrink-0 whitespace-nowrap">
            {t('home.productSelector.notify')}
          </button>
        </div>

      </div>
    </section>
  )
}
