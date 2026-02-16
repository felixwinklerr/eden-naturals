'use client'

import Link from 'next/link'
import { useTranslations } from '@/contexts/LocaleContext'

export function FinalCTA() {
  const t = useTranslations()

  const productLabels = [
    { labelKey: 'home.productSelector.wpcTitle', emoji: '🥤' },
    { labelKey: 'home.productSelector.veganBlend', emoji: '🌱' },
    { labelKey: 'home.productSelector.riceTitle', emoji: '🍚' },
    { labelKey: 'home.productSelector.peaTitle', emoji: '🫛' },
  ]

  return (
    <section className="section-padding bg-text text-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="grid grid-cols-2 gap-3 md:gap-4 order-2 md:order-1">
            {productLabels.map((product, i) => (
              <div
                key={i}
                className="aspect-square bg-white bg-opacity-5 rounded-xl flex flex-col items-center justify-center hover:bg-opacity-10 transition-colors"
              >
                <span className="text-3xl md:text-4xl mb-1.5">{product.emoji}</span>
                <span className="text-xs md:text-sm opacity-70">{t(product.labelKey)}</span>
              </div>
            ))}
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
