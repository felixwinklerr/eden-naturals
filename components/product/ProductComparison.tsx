'use client'

import { useTranslations } from '@/contexts/LocaleContext'

export function ProductComparison() {
  const t = useTranslations()

  const rows = [
    { featureKey: 'home.comparison.ingredients', standard: '15-23', eden: '2', highlight: true },
    { featureKey: 'home.comparison.eNumbers', standard: '3-6', eden: '0', highlight: true },
    { featureKey: 'product.sweeteners', standard: '1-3', eden: '0', highlight: false },
    { featureKey: 'home.comparison.lecithin', standard: 'home.comparison.yes', eden: 'home.comparison.no', highlight: false },
    { featureKey: 'product.aromas', standard: 'home.comparison.yes', eden: 'home.comparison.no', highlight: false },
    { featureKey: 'home.comparison.shakerRequired', standard: 'home.comparison.yes', eden: 'home.comparison.no', highlight: true },
    { featureKey: 'home.comparison.steps', standard: '8-10', eden: '3', highlight: false },
    { featureKey: 'home.comparison.pricePerKg', standard: '€18-28', eden: '€72', highlight: false },
  ]

  return (
    <div className="mb-8 md:mb-12">
      <h3 className="text-xl md:text-2xl font-bold text-text mb-4 md:mb-6 text-center">
        {t('product.comparisonTitle')}
      </h3>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm md:text-base">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-4 py-3 text-left font-semibold text-text text-xs md:text-sm"></th>
                <th className="px-4 py-3 text-center font-semibold text-text-light text-xs md:text-sm">{t('home.comparison.standard')}</th>
                <th className="px-4 py-3 text-center font-bold text-accent text-xs md:text-sm bg-accent bg-opacity-5">{t('home.comparison.eden')}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-50 ${row.highlight ? 'bg-accent bg-opacity-[0.02]' : ''}`}
                >
                  <td className="px-4 py-2.5 font-medium text-text text-xs md:text-sm">{t(row.featureKey)}</td>
                  <td className="px-4 py-2.5 text-center text-text-light text-xs md:text-sm">{row.standard.startsWith('home.') ? t(row.standard) : row.standard}</td>
                  <td className="px-4 py-2.5 text-center font-semibold text-accent text-xs md:text-sm bg-accent bg-opacity-5">
                    {row.eden.startsWith('home.') ? t(row.eden) : row.eden}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="text-center text-text-light mt-3 md:mt-4 text-sm md:text-base">
        {t('product.comparisonSub')}
      </p>
    </div>
  )
}
