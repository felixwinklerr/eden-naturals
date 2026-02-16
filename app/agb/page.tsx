import { getServerTranslations } from '@/lib/i18n/server'

export default async function AGBPage() {
  const { t } = await getServerTranslations()

  return (
    <div className="section-padding">
      <div className="container-custom max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-text mb-6 md:mb-8">{t('pages.agb.title')}</h1>
        <div className="prose prose-lg text-text-light space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-text mb-4">{t('pages.agb.h1')}</h2>
            <p>{t('pages.agb.p1')}</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-text mb-4">{t('pages.agb.h2')}</h2>
            <p>{t('pages.agb.p2')}</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-text mb-4">{t('pages.agb.h3')}</h2>
            <p>{t('pages.agb.p3')}</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-text mb-4">{t('pages.agb.h4')}</h2>
            <p>{t('pages.agb.p4')}</p>
          </section>
        </div>
      </div>
    </div>
  )
}
