'use client'

import { useTranslations } from '@/contexts/LocaleContext'

export function IntroPromo() {
  const t = useTranslations()

  return (
    <section className="bg-accent text-white">
      <div className="container-custom py-3 md:py-3.5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-3">
          <div className="text-center md:text-left">
            <p className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
              {t('home.promo.badge')}
            </p>
            <p className="text-sm md:text-base lg:text-lg font-semibold">
              {t('home.promo.title')}
            </p>
          </div>
          <div className="text-[11px] md:text-sm text-white/90 space-y-0.5 md:space-y-0 md:flex md:flex-col md:items-end text-center md:text-right">
            <span className="font-medium">{t('home.promo.wpc')}</span>
            <span className="font-medium">{t('home.promo.blend')}</span>
            <span className="font-medium">{t('home.promo.peaRice')}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

