'use client'

import Link from 'next/link'
import { useTranslations } from '@/contexts/LocaleContext'

export function RiskReversal() {
  const t = useTranslations()

  return (
    <section className="section-padding bg-accent text-white overflow-hidden">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white bg-opacity-15 rounded-full px-5 py-2 mb-5 md:mb-6">
            <span className="text-lg">🛡️</span>
            <span className="text-xs md:text-sm font-semibold tracking-wide uppercase">
              {t('home.riskReversal.badge')}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
            {t('home.riskReversal.title')}
          </h2>
          <p className="text-lg md:text-xl font-medium opacity-90 mb-3">
            {t('home.riskReversal.sub')}
          </p>
          <p className="text-sm md:text-base mb-6 md:mb-8 opacity-85 leading-relaxed max-w-xl mx-auto">
            {t('home.riskReversal.copy')}
            <strong className="opacity-100"> {t('home.riskReversal.copyBold')}</strong>
          </p>
          <div className="grid grid-cols-3 gap-3 md:gap-6 mb-6 md:mb-8 max-w-lg mx-auto">
            <div>
              <div className="text-2xl md:text-3xl mb-1">📦</div>
              <p className="text-xs md:text-sm font-medium">{t('home.riskReversal.freeReturn')}</p>
            </div>
            <div>
              <div className="text-2xl md:text-3xl mb-1">💶</div>
              <p className="text-xs md:text-sm font-medium">{t('home.riskReversal.moneyBack')}</p>
            </div>
            <div>
              <div className="text-2xl md:text-3xl mb-1">🤝</div>
              <p className="text-xs md:text-sm font-medium">{t('home.riskReversal.noQuestions')}</p>
            </div>
          </div>
          <Link
            href="/products"
            className="inline-block bg-white text-accent font-bold px-8 py-3.5 md:py-4 rounded-lg hover:bg-gray-100 transition-colors text-base md:text-lg w-full sm:w-auto"
          >
            {t('home.riskReversal.cta')}
          </Link>
        </div>
      </div>
    </section>
  )
}
