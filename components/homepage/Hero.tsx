'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from '@/contexts/LocaleContext'

export function Hero() {
  const t = useTranslations()

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-white to-gray-50">
      <div className="container-custom py-12 md:py-16 lg:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-4 md:mb-5 leading-[1.1] text-balance">
              {t('home.hero.headline')}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-text-light mb-5 md:mb-6 leading-relaxed max-w-lg mx-auto md:mx-0">
              {t('home.hero.subline')}
              <br className="hidden sm:inline" />
              <span className="font-medium text-text"> {t('home.hero.sublineBold')}</span>
            </p>
            <div className="space-y-2.5 mb-6 md:mb-8 max-w-md mx-auto md:mx-0">
              <div className="flex items-center gap-3 text-sm md:text-base">
                <span className="w-6 h-6 bg-accent bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-accent text-xs font-bold">✓</span>
                </span>
                <span className="text-text">{t('home.hero.benefit1')}</span>
              </div>
              <div className="flex items-center gap-3 text-sm md:text-base">
                <span className="w-6 h-6 bg-accent bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-accent text-xs font-bold">✓</span>
                </span>
                <span className="text-text">{t('home.hero.benefit2')}</span>
              </div>
              <div className="flex items-center gap-3 text-sm md:text-base">
                <span className="w-6 h-6 bg-accent bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-accent text-xs font-bold">✓</span>
                </span>
                <span className="text-text">{t('home.hero.benefit3')}</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-5 md:mb-6">
              <Link href="/products" className="btn-primary text-base md:text-lg px-8 py-3.5 md:py-4 w-full sm:w-auto">
                {t('home.hero.cta')}
              </Link>
              <span className="text-text-light text-sm">{t('home.hero.priceNote')}</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 justify-center md:justify-start text-xs md:text-sm text-text-muted">
              <span>{t('home.hero.madeInLux')}</span>
              <span>•</span>
              <span>{t('home.hero.natural')}</span>
              <span>•</span>
              <span>{t('home.hero.guarantee')}</span>
            </div>
          </div>
          <div className="relative order-first md:order-last">
            <div className="aspect-square relative rounded-2xl shadow-2xl overflow-hidden bg-gray-100">
              <Image
                src="/hero.webp"
                alt={t('home.hero.productImage')}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 bg-white rounded-xl shadow-lg px-4 py-2.5 md:px-5 md:py-3">
              <p className="text-xs md:text-sm text-text-light">{t('common.only')}</p>
              <p className="text-lg md:text-xl font-bold text-accent">{t('common.twoIngredients')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
