import { getServerTranslations } from '@/lib/i18n/server'

export default async function DatenschutzPage() {
  const { t } = await getServerTranslations()

  return (
    <div className="section-padding">
      <div className="container-custom max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-text mb-6 md:mb-8">{t('pages.datenschutz.title')}</h1>
        <div className="prose prose-lg text-text-light space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-text mb-4">{t('pages.datenschutz.h1')}</h2>
            <h3 className="text-xl font-semibold text-text mb-2">{t('pages.datenschutz.h1sub')}</h3>
            <p>{t('pages.datenschutz.p1')}</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-text mb-4">{t('pages.datenschutz.h2')}</h2>
            <p>{t('pages.datenschutz.p2')}</p>
            <p>
              Eden Sarl<br />
              [Adresse]<br />
              Luxemburg
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-text mb-4">{t('pages.datenschutz.h3')}</h2>
            <h3 className="text-xl font-semibold text-text mb-2">{t('pages.datenschutz.h3sub')}</h3>
            <p>{t('pages.datenschutz.p3')}</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-text mb-4">{t('pages.datenschutz.h4')}</h2>
            <p>{t('pages.datenschutz.p4')}</p>
          </section>
        </div>
      </div>
    </div>
  )
}
