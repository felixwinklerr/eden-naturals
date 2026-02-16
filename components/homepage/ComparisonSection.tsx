'use client'

import Link from 'next/link'
import { useTranslations } from '@/contexts/LocaleContext'

export function ComparisonSection() {
  const t = useTranslations()

  const comparisonData = [
    { featureKey: 'home.comparison.ingredients', standard: '15-23', eden: '2', highlight: true },
    { featureKey: 'home.comparison.eNumbers', standard: '3-6', eden: '0', highlight: true },
    { featureKey: 'home.comparison.aromasSweeteners', standard: '1-3', eden: '0', highlight: false },
    { featureKey: 'home.comparison.lecithin', standard: 'home.comparison.yes', eden: 'home.comparison.no', highlight: false },
    { featureKey: 'home.comparison.shakerRequired', standard: 'home.comparison.yes', eden: 'home.comparison.no', highlight: true },
    { featureKey: 'home.comparison.bloating', standard: 'home.comparison.often', eden: 'home.comparison.rare', highlight: false },
    { featureKey: 'home.comparison.stomach', standard: 'home.comparison.restless', eden: 'home.comparison.calm', highlight: false },
    { featureKey: 'home.comparison.energyStability', standard: 'home.comparison.unstable', eden: 'home.comparison.stable', highlight: false },
    { featureKey: 'home.comparison.steps', standard: '8-10', eden: '3', highlight: true },
    { featureKey: 'home.comparison.pricePerKg', standard: '€18-28', eden: '€72', highlight: false },
  ]

  return (
    <section id="comparison" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text mb-2">
            {t('home.comparison.title')}
          </h2>
          <p className="text-text-light text-sm md:text-base">
            {t('home.comparison.subtitle')}
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-100">
              <div className="px-4 py-3 md:px-6 md:py-4">
                <span className="text-xs md:text-sm font-semibold text-text">{t('home.comparison.feature')}</span>
              </div>
              <div className="px-3 py-3 md:px-6 md:py-4 text-center border-x border-gray-100">
                <span className="text-xs md:text-sm font-semibold text-text-light">{t('home.comparison.standard')}</span>
              </div>
              <div className="px-3 py-3 md:px-6 md:py-4 text-center bg-accent bg-opacity-5">
                <span className="text-xs md:text-sm font-bold text-accent">{t('home.comparison.eden')}</span>
              </div>
            </div>
            {comparisonData.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 border-b border-gray-50 last:border-b-0 ${
                  row.highlight ? 'bg-accent bg-opacity-[0.02]' : ''
                }`}
              >
                <div className="px-4 py-2.5 md:px-6 md:py-3 flex items-center">
                  <span className="text-xs md:text-sm font-medium text-text">{t(row.featureKey)}</span>
                </div>
                <div className="px-3 py-2.5 md:px-6 md:py-3 text-center border-x border-gray-50 flex items-center justify-center">
                  <span className="text-xs md:text-sm text-text-muted">
                    {row.standard.startsWith('home.') ? t(row.standard) : row.standard}
                  </span>
                </div>
                <div className="px-3 py-2.5 md:px-6 md:py-3 text-center bg-accent bg-opacity-5 flex items-center justify-center">
                  <span className="text-xs md:text-sm font-semibold text-accent">
                    {row.eden.startsWith('home.') ? t(row.eden) : row.eden}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-white rounded-xl border border-gray-100 p-4 md:p-5">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <div className="flex-1 text-center sm:text-left">
                <p className="text-text font-semibold text-sm md:text-base">{t('home.comparison.priceWhy')}</p>
                <p className="text-text-light text-xs md:text-sm mt-1">{t('home.comparison.priceWhyDesc')}</p>
              </div>
              <Link href="/products" className="text-accent font-semibold text-sm hover:underline flex-shrink-0">
                {t('common.viewComparison')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
