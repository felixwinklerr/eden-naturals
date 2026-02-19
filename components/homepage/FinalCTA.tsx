'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from '@/contexts/LocaleContext'

interface ProductImage {
  handle: string
  imageUrl?: string
  imageAlt?: string | null
}

interface FinalCTAProps {
  productImages?: ProductImage[]
}

export function FinalCTA({ productImages = [] }: FinalCTAProps) {
  const t = useTranslations()

  const productCards = [
    { handle: 'wpc-80', labelKey: 'home.productSelector.wpcTitle', emoji: '🥤' },
    { handle: 'vegan-pea-rice-blend', labelKey: 'home.productSelector.veganBlend', emoji: '🌱' },
    { handle: 'reisprotein', labelKey: 'home.productSelector.riceTitle', emoji: '🍚' },
    { handle: 'erbsenprotein', labelKey: 'home.productSelector.peaTitle', emoji: '🫛' },
  ]

  return (
    <section className="section-padding bg-text text-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="grid grid-cols-2 gap-3 md:gap-4 order-2 md:order-1">
            {productCards.map((product) => {
              const img = productImages.find((p) => p.handle === product.handle)
              return (
                <Link
                  key={product.handle}
                  href={`/products/${product.handle}`}
                  className="aspect-square bg-white bg-opacity-5 rounded-xl overflow-hidden flex flex-col items-center justify-center hover:bg-opacity-10 transition-colors relative group"
                >
                  {img?.imageUrl ? (
                    <>
                      <Image
                        src={img.imageUrl}
                        alt={img.imageAlt || t(product.labelKey)}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 45vw, 22vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <span className="absolute bottom-2 left-0 right-0 text-center text-xs md:text-sm text-white font-medium px-2">
                        {t(product.labelKey)}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="text-3xl md:text-4xl mb-1.5">{product.emoji}</span>
                      <span className="text-xs md:text-sm opacity-70">{t(product.labelKey)}</span>
                    </>
                  )}
                </Link>
              )
            })}
          </div>
          <div className="text-center md:text-left order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-5 leading-tight">
              {t('home.finalCta.title')}
              <br />
              <span className="text-accent">{t('home.finalCta.titleAccent')}</span>
            </h2>
            <div className="space-y-3 mb-6 md:mb-8">
              {['bullet1', 'bullet2', 'bullet3', 'bullet4'].map((key) => (
                <div key={key} className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-6 h-6 bg-accent bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-accent text-xs font-bold">✓</span>
                  </span>
                  <span className="text-sm md:text-base">{t(`home.finalCta.${key}`)}</span>
                </div>
              ))}
            </div>
            <Link
              href="/products"
              className="inline-block bg-accent text-white font-bold px-8 py-3.5 md:py-4 rounded-lg hover:bg-opacity-90 transition-colors text-base md:text-lg w-full sm:w-auto mb-4 md:mb-5"
            >
              {t('home.finalCta.cta')}
            </Link>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-1 text-xs md:text-sm opacity-60">
              <span>{t('home.finalCta.securePayment')}</span>
              <span>•</span>
              <span>{t('home.finalCta.madeInLux')}</span>
              <span>•</span>
              <span>{t('home.finalCta.fastShipping')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
