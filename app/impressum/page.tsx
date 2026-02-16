import { getServerTranslations } from '@/lib/i18n/server'

export default async function ImpressumPage() {
  const { t } = await getServerTranslations()

  return (
    <div className="section-padding">
      <div className="container-custom max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-text mb-6 md:mb-8">{t('pages.impressum.title')}</h1>
        <div className="prose prose-lg text-text-light space-y-6">
          <p><strong>{t('pages.impressum.legalNote')}</strong></p>
          <p>
            {t('pages.impressum.companyName')}<br />
            {t('pages.impressum.address')}<br />
            {t('pages.impressum.addressZip')}
          </p>
          <p>
            <strong>{t('pages.impressum.contact')}</strong><br />
            {t('pages.impressum.phone')}<br />
            {t('pages.impressum.emailLabel')}{' '}
            <a href="mailto:info@hoerentfernung.lu" className="text-accent hover:underline">info@hoerentfernung.lu</a><br />
            {t('pages.impressum.webLabel')}{' '}
            <a href="https://www.hoerentfernung.lu" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">www.hoerentfernung.lu</a>
          </p>
          <p>
            <strong>{t('pages.impressum.managingDirector')}</strong><br />
            {t('pages.impressum.managingDirectorName')}
          </p>
          <p>
            <strong>{t('pages.impressum.register')}</strong><br />
            {t('pages.impressum.registerNum')}
          </p>

          <section>
            <h2 className="text-xl font-semibold text-text mt-8 mb-2">{t('pages.impressum.termsTitle')}</h2>
            <p>{t('pages.impressum.termsText')}</p>
          </section>
          <p>{t('pages.impressum.liabilityText')}</p>
          <p>{t('pages.impressum.dataProtectionText')}</p>
        </div>
      </div>
    </div>
  )
}
