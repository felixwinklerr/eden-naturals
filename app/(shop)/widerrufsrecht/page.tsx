import { getServerTranslations } from '@/lib/i18n/server'

export default async function WiderrufsrechtPage() {
  const { t } = await getServerTranslations()

  return (
    <div className="section-padding">
      <div className="container-custom max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-text mb-6 md:mb-8">{t('pages.widerrufsrecht.title')}</h1>
        <div className="prose prose-lg text-text-light space-y-6">
          <section>
            <p>{t('pages.widerrufsrecht.intro')}</p>
            <p>{t('pages.widerrufsrecht.conditions')}</p>
            <p>{t('pages.widerrufsrecht.howTo')}</p>
            <div className="bg-gray-50 p-6 rounded-lg mt-4 font-mono text-sm whitespace-pre-line">
              {t('pages.widerrufsrecht.addressBlock')}
            </div>
            <p className="mt-4">{t('pages.widerrufsrecht.afterAccept')}</p>
            <p>{t('pages.widerrufsrecht.contactQ')}</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-text mb-4">{t('pages.widerrufsrecht.damageTitle')}</h2>
            <p>{t('pages.widerrufsrecht.damageText')}</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-text mb-4">{t('pages.widerrufsrecht.exceptionsTitle')}</h2>
            <div className="space-y-3">
              {t('pages.widerrufsrecht.exceptionsText')
                .split('\n\n')
                .map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-text mb-4">{t('pages.widerrufsrecht.exchangeTitle')}</h2>
            <p>{t('pages.widerrufsrecht.exchangeText')}</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-text mb-4">{t('pages.widerrufsrecht.euTitle')}</h2>
            <p>{t('pages.widerrufsrecht.euText')}</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-text mb-4">{t('pages.widerrufsrecht.refundTitle')}</h2>
            <div className="space-y-3">
              {t('pages.widerrufsrecht.refundText')
                .split('\n\n')
                .map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
