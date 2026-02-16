import Link from 'next/link'
import { shopifyFetch } from '@/lib/shopify/fetch'
import { PRODUCTS_BY_COLLECTION } from '@/lib/shopify/queries'
import { getServerTranslations } from '@/lib/i18n/server'

export default async function VeganProteinLandingPage() {
  const { t } = await getServerTranslations()

  let veganProducts: any[] = []
  try {
    const result = await shopifyFetch({
      query: PRODUCTS_BY_COLLECTION,
      variables: { handle: 'vegan', first: 10 },
    })
    veganProducts = result?.collection?.products?.edges || []
  } catch (error) {
    console.log('Vegan collection not found, using fallback')
  }

  return (
    <>
      <section className="min-h-[75vh] md:min-h-[80vh] flex items-center bg-gradient-to-br from-accent-light to-accent text-white py-8 md:py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-4 text-balance">
                {t('pages.landingVegan.heroTitle')}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-4 md:mb-6 opacity-90 leading-relaxed">
                {t('pages.landingVegan.heroSub')}
              </p>
              <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                <div className="flex items-center gap-2 text-sm md:text-base">
                  <span>✓</span>
                  <span>{t('pages.landingVegan.bullet1')}</span>
                </div>
                <div className="flex items-center gap-2 text-sm md:text-base">
                  <span>✓</span>
                  <span>{t('pages.landingVegan.bullet2')}</span>
                </div>
                <div className="flex items-center gap-2 text-sm md:text-base">
                  <span>✓</span>
                  <span>{t('pages.landingVegan.bullet3')}</span>
                </div>
              </div>
              <Link
                href="/products/vegan-pea-rice-blend"
                className="btn-primary bg-white text-accent hover:bg-gray-100 inline-block text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto"
              >
                {t('pages.landingVegan.cta')}
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square bg-white bg-opacity-20 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🌱</div>
                  <p className="text-lg">{t('pages.landingVegan.visualLabel')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text mb-4 md:mb-6 text-center">
            {t('pages.landingVegan.problemTitle')}
          </h2>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            <div className="bg-red-50 rounded-xl p-4 md:p-6">
              <h3 className="font-semibold text-text mb-2 md:mb-3 text-sm md:text-base">{t('pages.landingVegan.problemLabel')}</h3>
              <ul className="space-y-1.5 md:space-y-2 text-text-light text-sm md:text-base">
                <li>• {t('pages.landingVegan.problem1')}</li>
                <li>• {t('pages.landingVegan.problem2')}</li>
                <li>• {t('pages.landingVegan.problem3')}</li>
                <li>• {t('pages.landingVegan.problem4')}</li>
                <li>• {t('pages.landingVegan.problem5')}</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-xl p-4 md:p-6">
              <h3 className="font-semibold text-text mb-2 md:mb-3 text-sm md:text-base">{t('pages.landingVegan.solutionLabel')}</h3>
              <ul className="space-y-1.5 md:space-y-2 text-text-light text-sm md:text-base">
                <li>• {t('pages.landingVegan.solution1')}</li>
                <li>• {t('pages.landingVegan.solution2')}</li>
                <li>• {t('pages.landingVegan.solution3')}</li>
                <li>• {t('pages.landingVegan.solution4')}</li>
                <li>• {t('pages.landingVegan.solution5')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text mb-6 md:mb-8 text-center">
            {t('pages.landingVegan.productsTitle')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            <Link
              href="/products/vegan-pea-rice-blend"
              className="bg-white rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow border-2 border-accent"
            >
              <div className="bg-accent-light bg-opacity-20 rounded-lg p-3 md:p-4 mb-3 md:mb-4 text-center">
                <span className="text-3xl md:text-4xl">🌱</span>
              </div>
              <div className="bg-accent text-white text-xs font-semibold px-2 md:px-3 py-1 rounded-full inline-block mb-2 md:mb-3">
                {t('pages.landingVegan.flagship')}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-text mb-2">{t('pages.landingVegan.peaRice')}</h3>
              <p className="text-text-light text-xs md:text-sm mb-3 md:mb-4">
                {t('pages.landingVegan.peaRiceDesc')}
              </p>
              <div className="text-accent font-semibold text-sm md:text-base">{t('pages.landingVegan.tryNow')}</div>
            </Link>

            <Link
              href="/products/reisprotein"
              className="bg-white rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="bg-gray-100 rounded-lg p-3 md:p-4 mb-3 md:mb-4 text-center">
                <span className="text-3xl md:text-4xl">🌾</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-text mb-2">{t('pages.landingVegan.rice')}</h3>
              <p className="text-text-light text-xs md:text-sm mb-3 md:mb-4">
                {t('pages.landingVegan.riceDesc')}
              </p>
              <div className="text-accent font-semibold text-sm md:text-base">{t('pages.landingVegan.learnMore')}</div>
            </Link>

            <Link
              href="/products/erbsenprotein"
              className="bg-white rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow sm:col-span-2 md:col-span-1"
            >
              <div className="bg-gray-100 rounded-lg p-3 md:p-4 mb-3 md:mb-4 text-center">
                <span className="text-3xl md:text-4xl">🫘</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-text mb-2">{t('pages.landingVegan.pea')}</h3>
              <p className="text-text-light text-xs md:text-sm mb-3 md:mb-4">
                {t('pages.landingVegan.peaDesc')}
              </p>
              <div className="text-accent font-semibold text-sm md:text-base">{t('pages.landingVegan.learnMore')}</div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-accent text-white">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            {t('pages.landingVegan.ctaTitle')}
          </h2>
          <p className="text-base md:text-lg mb-6 md:mb-8 opacity-90">
            {t('pages.landingVegan.ctaSub')}
          </p>
          <Link
            href="/products/vegan-pea-rice-blend"
            className="btn-primary bg-white text-accent hover:bg-gray-100 inline-block text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto"
          >
            {t('pages.landingVegan.ctaButton')}
          </Link>
        </div>
      </section>
    </>
  )
}
