import Link from 'next/link'
import { getServerTranslations } from '@/lib/i18n/server'

export default async function WarumEdenPage() {
  const { t } = await getServerTranslations()

  return (
    <div className="section-padding">
      <div className="container-custom max-w-4xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6 md:mb-8 text-center">
          {t('pages.whyEden.title')}
        </h1>

        <div className="bg-gradient-to-br from-accent-light to-accent text-white rounded-2xl p-6 md:p-8 lg:p-12 mb-8 md:mb-12 text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
            {t('pages.whyEden.heroTitle')}
          </h2>
          <p className="text-base md:text-lg opacity-90">{t('pages.whyEden.heroSub')}</p>
        </div>

        <section className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-text mb-4 md:mb-6">
            {t('pages.whyEden.problemTitle')}
          </h2>
          <div className="space-y-4 text-text-light">
            <p>
              {t('pages.whyEden.problemP1')}
              <strong className="text-text"> {t('pages.whyEden.problemP1Bold')}</strong>
            </p>
            <p>{t('pages.whyEden.problemP2')}</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>{t('pages.whyEden.problemL1')}</li>
              <li>{t('pages.whyEden.problemL2')}</li>
              <li>{t('pages.whyEden.problemL3')}</li>
              <li>{t('pages.whyEden.problemL4')}</li>
              <li>{t('pages.whyEden.problemL5')}</li>
              <li>{t('pages.whyEden.problemL6')}</li>
            </ul>
            <p>
              <strong className="text-text">{t('pages.whyEden.problemP3')}</strong>{' '}
              {t('pages.whyEden.problemP3b')}
            </p>
          </div>
        </section>

        <section className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-text mb-4 md:mb-6">
            {t('pages.whyEden.solutionTitle')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <h3 className="text-xl font-semibold text-text mb-4">{t('pages.whyEden.solutionH1')}</h3>
              <p className="text-text-light mb-3 md:mb-4 text-sm md:text-base leading-relaxed">
                {t('pages.whyEden.solutionP1')}
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-sm md:text-base">
                  <span className="text-accent mt-1 flex-shrink-0">✓</span>
                  <span className="text-text">{t('pages.whyEden.solutionB1')}</span>
                </div>
                <div className="flex items-start gap-2 text-sm md:text-base">
                  <span className="text-accent mt-1 flex-shrink-0">✓</span>
                  <span className="text-text">{t('pages.whyEden.solutionB2')}</span>
                </div>
                <div className="flex items-start gap-2 text-sm md:text-base">
                  <span className="text-accent mt-1 flex-shrink-0">✓</span>
                  <span className="text-text">{t('pages.whyEden.solutionB3')}</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-text mb-4">{t('pages.whyEden.solutionH2')}</h3>
              <p className="text-text-light mb-3 md:mb-4 text-sm md:text-base">
                {t('pages.whyEden.solutionP2')}
              </p>
              <ul className="space-y-1.5 md:space-y-2 text-text-light text-sm md:text-base">
                <li>• <strong className="text-text">{t('pages.whyEden.solutionL1')}</strong></li>
                <li>• <strong className="text-text">{t('pages.whyEden.solutionL2')}</strong></li>
                <li>• <strong className="text-text">{t('pages.whyEden.solutionL3')}</strong></li>
                <li>• <strong className="text-text">{t('pages.whyEden.solutionL4')}</strong></li>
                <li>• <strong className="text-text">{t('pages.whyEden.solutionL5')}</strong></li>
              </ul>
              <div className="mt-4 md:mt-6 bg-accent-light bg-opacity-10 rounded-lg p-4 md:p-6">
                <h4 className="font-semibold text-text mb-2 md:mb-3 text-sm md:text-base">
                  {t('pages.whyEden.solutionH3')}
                </h4>
                <div className="space-y-2 md:space-y-3 text-text-light text-xs md:text-sm leading-relaxed">
                  <p>{t('pages.whyEden.solutionC1')}</p>
                  <p>{t('pages.whyEden.solutionC2')}</p>
                  <p>{t('pages.whyEden.solutionC3')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8 md:mb-12 bg-gray-50 rounded-xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-text mb-4 md:mb-6 text-center">
            {t('pages.whyEden.diffTitle')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl mb-2 md:mb-3">🥛</div>
              <h3 className="font-semibold text-text mb-1 md:mb-2 text-sm md:text-base">{t('pages.whyEden.diff1')}</h3>
              <p className="text-text-light text-xs md:text-sm">{t('pages.whyEden.diff1p')}</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl mb-2 md:mb-3">⚙️</div>
              <h3 className="font-semibold text-text mb-1 md:mb-2 text-sm md:text-base">{t('pages.whyEden.diff2')}</h3>
              <p className="text-text-light text-xs md:text-sm">{t('pages.whyEden.diff2p')}</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl mb-2 md:mb-3">📦</div>
              <h3 className="font-semibold text-text mb-1 md:mb-2 text-sm md:text-base">{t('pages.whyEden.diff3')}</h3>
              <p className="text-text-light text-xs md:text-sm">{t('pages.whyEden.diff3p')}</p>
            </div>
          </div>
        </section>

        <div className="text-center bg-accent text-white rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('pages.whyEden.ctaTitle')}</h2>
          <p className="mb-6 opacity-90">{t('pages.whyEden.ctaSub')}</p>
          <Link href="/products" className="btn-primary bg-white text-accent hover:bg-gray-100 inline-block w-full sm:w-auto">
            {t('pages.whyEden.ctaButton')}
          </Link>
        </div>
      </div>
    </div>
  )
}
