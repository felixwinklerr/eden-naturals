import Link from 'next/link'
import { getServerTranslations } from '@/lib/i18n/server'

export default async function CleanProteinLandingPage() {
  const { t } = await getServerTranslations()

  const tableRows: { featureKey: string; standard: string; eden: string }[] = [
    { featureKey: 'rowIngredients', standard: '15-23', eden: '2' },
    { featureKey: 'rowENumbers', standard: '3-6', eden: '0' },
    { featureKey: 'rowAromas', standard: t('pages.landingClean.yes'), eden: t('pages.landingClean.no') },
    { featureKey: 'rowLecithin', standard: t('pages.landingClean.yes'), eden: t('pages.landingClean.no') },
    { featureKey: 'rowSweeteners', standard: '1-3', eden: '0' },
    { featureKey: 'dissolvesNoShaker', standard: t('pages.landingClean.no'), eden: t('pages.landingClean.yes') },
  ]

  return (
    <>
      <section className="min-h-[75vh] md:min-h-[80vh] flex items-center bg-gradient-to-br from-primary to-gray-50 py-8 md:py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-text mb-3 md:mb-4 text-balance">
                {t('pages.landingClean.heroTitle')}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-text-light mb-4 md:mb-6 leading-relaxed">
                {t('pages.landingClean.heroSub')}
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2 text-text">
                  <span className="text-accent">✓</span>
                  <span>{t('pages.landingClean.bullet1')}</span>
                </div>
                <div className="flex items-center gap-2 text-text">
                  <span className="text-accent">✓</span>
                  <span>{t('pages.landingClean.bullet2')}</span>
                </div>
                <div className="flex items-center gap-2 text-text">
                  <span className="text-accent">✓</span>
                  <span>{t('pages.landingClean.bullet3')}</span>
                </div>
              </div>
              <Link
                href="/products"
                className="btn-primary inline-block text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto"
              >
                {t('pages.landingClean.cta')}
              </Link>
            </div>
            <div className="relative order-first md:order-last">
              <div className="bg-white rounded-xl md:rounded-2xl shadow-2xl p-4 md:p-6 lg:p-8">
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="text-center">
                    <h3 className="font-semibold text-text mb-2 md:mb-3 text-xs md:text-sm">{t('pages.landingClean.standardProtein')}</h3>
                    <div className="bg-red-50 rounded-lg p-2 md:p-3 lg:p-4 mb-2">
                      <div className="text-xl md:text-2xl mb-1 md:mb-2">📋</div>
                      <p className="text-xs text-text-light">{t('pages.landingClean.ingredients15')}</p>
                    </div>
                    <ul className="text-xs text-text-light text-left space-y-1">
                      <li>• {t('pages.landingClean.rowENumbers')}</li>
                      <li>• {t('pages.landingClean.rowAromas')}</li>
                      <li>• {t('pages.landingClean.rowLecithin')}</li>
                      <li>• {t('pages.landingClean.rowSweeteners')}</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-accent mb-2 md:mb-3 text-xs md:text-sm">{t('pages.landingClean.edenProtein')}</h3>
                    <div className="bg-green-50 rounded-lg p-2 md:p-3 lg:p-4 mb-2">
                      <div className="text-xl md:text-2xl mb-1 md:mb-2">✓</div>
                      <p className="text-xs text-accent font-semibold">{t('pages.landingClean.twoIngredients')}</p>
                    </div>
                    <ul className="text-xs text-text-light text-left space-y-1">
                      <li>• Protein</li>
                      <li>• Veredelung</li>
                      <li className="text-green-600">• {t('pages.landingClean.thatsIt')}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text mb-6 md:mb-8 text-center">
            {t('pages.landingClean.comparisonTitle')}
          </h2>
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
              <div className="md:hidden text-xs text-text-light text-center mb-2">
                {t('pages.landingClean.scrollHint')}
              </div>
              <table className="w-full min-w-[600px] md:min-w-0">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 py-3 md:px-6 md:py-4 text-left text-xs md:text-sm font-semibold text-text">
                      {t('pages.landingClean.feature')}
                    </th>
                    <th className="px-3 py-3 md:px-6 md:py-4 text-center text-xs md:text-sm font-semibold text-text">
                      {t('pages.landingClean.standardProtein')}
                    </th>
                    <th className="px-3 py-3 md:px-6 md:py-4 text-center text-xs md:text-sm font-semibold text-accent bg-accent-light bg-opacity-10">
                      {t('pages.landingClean.edenProtein')}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {tableRows.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-3 py-3 md:px-6 md:py-4 text-xs md:text-sm font-medium text-text">
                        {t(`pages.landingClean.${row.featureKey}`)}
                      </td>
                      <td className="px-3 py-3 md:px-6 md:py-4 text-xs md:text-sm text-center text-text-light">
                        {row.standard}
                      </td>
                      <td className="px-3 py-3 md:px-6 md:py-4 text-xs md:text-sm text-center font-semibold text-accent">
                        {row.eden}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text mb-6 md:mb-8 text-center">
            {t('pages.landingClean.productsTitle')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { name: 'WPC 80', href: '/products/wpc-80', icon: '🥛' },
              { nameKey: 'veganPeaRice', namePrefix: 'landingClean', href: '/products/vegan-pea-rice-blend', icon: '🌱' },
              { nameKey: 'rice', namePrefix: 'landingVegan', href: '/products/reisprotein', icon: '🌾' },
              { nameKey: 'pea', namePrefix: 'landingVegan', href: '/products/erbsenprotein', icon: '🫘' },
            ].map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="bg-white rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-4xl md:text-5xl mb-3 md:mb-4">{product.icon}</div>
                <h3 className="font-semibold text-text mb-2 text-sm md:text-base">
                  {'nameKey' in product ? t(`pages.${product.namePrefix}.${product.nameKey}`) : product.name}
                </h3>
                <p className="text-accent text-xs md:text-sm font-semibold">{t('pages.landingClean.learnMore')}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-accent text-white">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            {t('pages.landingClean.ctaTitle')}
          </h2>
          <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-6 lg:mb-8 opacity-90">
            {t('pages.landingClean.ctaSub')}
          </p>
          <Link
            href="/products"
            className="btn-primary bg-white text-accent hover:bg-gray-100 inline-block text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto"
          >
            {t('pages.landingClean.ctaButton')}
          </Link>
        </div>
      </section>
    </>
  )
}
