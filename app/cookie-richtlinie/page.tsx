import { getServerTranslations } from '@/lib/i18n/server'

export default async function CookieRichtliniePage() {
  const { t } = await getServerTranslations()

  return (
    <div className="section-padding">
      <div className="container-custom max-w-3xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6 md:mb-8 text-center">
          {t('pages.cookie.title')}
        </h1>

        <div className="prose prose-lg text-text-light space-y-6">
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-text mb-3 md:mb-4">{t('pages.cookie.h1')}</h2>
            <p>{t('pages.cookie.p1')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text mb-4">{t('pages.cookie.h2')}</h2>
            <p>{t('pages.cookie.p2')}</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong className="text-text">{t('pages.cookie.necessary')}</strong></li>
              <li><strong className="text-text">{t('pages.cookie.analytical')}</strong></li>
              <li><strong className="text-text">{t('pages.cookie.marketing')}</strong></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text mb-4">{t('pages.cookie.h3')}</h2>
            <p>{t('pages.cookie.p3')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text mb-4">{t('pages.cookie.h4')}</h2>
            <p>{t('pages.cookie.p4')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text mb-4">{t('pages.cookie.h5')}</h2>
            <p>{t('pages.cookie.p5')}</p>
            <p>
              <strong className="text-text">E-Mail:</strong>{' '}
              <a href="mailto:info@eden.lu" className="text-accent hover:underline">info@eden.lu</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
