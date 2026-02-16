import { getServerTranslations } from '@/lib/i18n/server'

export default async function WiderrufsrechtPage() {
  const { t } = await getServerTranslations()

  return (
    <div className="section-padding">
      <div className="container-custom max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-text mb-6 md:mb-8">{t('pages.widerrufsrecht.title')}</h1>
        <div className="prose prose-lg text-text-light space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-text mb-4">{t('pages.widerrufsrecht.h1')}</h2>
            <h3 className="text-xl font-semibold text-text mb-2">{t('pages.widerrufsrecht.h1sub')}</h3>
            <p>{t('pages.widerrufsrecht.p1')}</p>
            <p>{t('pages.widerrufsrecht.p2')}</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-text mb-4">{t('pages.widerrufsrecht.h2')}</h2>
            <p>{t('pages.widerrufsrecht.p3')}</p>
            <div className="bg-gray-50 p-6 rounded-lg mt-4">
              <p className="font-semibold mb-2">{t('pages.widerrufsrecht.formTo')}</p>
              <p>Eden Sarl<br />[Adresse]<br />Luxemburg</p>
              <p className="mt-4 font-semibold mb-2">{t('pages.widerrufsrecht.formText')}</p>
              <p className="mt-2">{t('pages.widerrufsrecht.formProduct')}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
