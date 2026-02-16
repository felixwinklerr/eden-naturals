import { getServerTranslations } from '@/lib/i18n/server'

export default async function VersandPage() {
  const { t } = await getServerTranslations()

  return (
    <div className="section-padding">
      <div className="container-custom max-w-3xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6 md:mb-8 text-center">
          {t('pages.shipping.title')}
        </h1>

        <div className="space-y-6 md:space-y-8">
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-text mb-3 md:mb-4">{t('pages.shipping.countriesTitle')}</h2>
            <p className="text-text-light mb-4">{t('pages.shipping.countriesIntro')}</p>
            <ul className="list-disc list-inside space-y-2 text-text-light ml-4">
              <li><strong className="text-text">{t('pages.shipping.countryLux')}</strong></li>
              <li><strong className="text-text">{t('pages.shipping.countryDe')}</strong></li>
            </ul>
            <p className="text-text-light mt-4">{t('pages.shipping.countriesMore')}</p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-text mb-3 md:mb-4">{t('pages.shipping.costsTitle')}</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-text">{t('pages.shipping.costsUnder')}</span>
                  <span className="font-semibold text-text">€5,90</span>
                </div>
                <div className="flex justify-between items-center border-t border-gray-200 pt-3">
                  <span className="text-text font-semibold">{t('pages.shipping.costsOver')}</span>
                  <span className="font-bold text-accent">{t('pages.shipping.costsFree')}</span>
                </div>
              </div>
            </div>
            <p className="text-text-light text-sm mt-4">{t('pages.shipping.costsNote')}</p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-text mb-3 md:mb-4">{t('pages.shipping.deliveryTitle')}</h2>
            <p className="text-text-light mb-4">{t('pages.shipping.deliveryIntro')}</p>
            <div className="bg-accent-light bg-opacity-10 rounded-lg p-6">
              <h3 className="font-semibold text-text mb-2">{t('pages.shipping.standardShipping')}</h3>
              <ul className="space-y-2 text-text-light">
                <li>• <strong className="text-text">{t('pages.shipping.deliveryLux')}</strong></li>
                <li>• <strong className="text-text">{t('pages.shipping.deliveryDe')}</strong></li>
              </ul>
            </div>
            <p className="text-text-light text-sm mt-4">{t('pages.shipping.trackingNote')}</p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-text mb-3 md:mb-4">{t('pages.shipping.packagingTitle')}</h2>
            <p className="text-text-light">{t('pages.shipping.packagingText')}</p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-text mb-3 md:mb-4">{t('pages.shipping.trackingTitle')}</h2>
            <p className="text-text-light mb-4">{t('pages.shipping.trackingIntro')}</p>
            <ul className="list-disc list-inside space-y-2 text-text-light ml-4">
              <li>{t('pages.shipping.trackingList1')}</li>
              <li>{t('pages.shipping.trackingList2')}</li>
              <li>{t('pages.shipping.trackingList3')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-text mb-3 md:mb-4">{t('pages.shipping.problemsTitle')}</h2>
            <p className="text-text-light mb-4">{t('pages.shipping.problemsIntro')}</p>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-text-light">
                <strong className="text-text">E-Mail:</strong>{' '}
                <a href="mailto:info@eden.lu" className="text-accent hover:underline">info@eden.lu</a>
              </p>
              <p className="text-text-light mt-2">
                <strong className="text-text">Telefon:</strong>{' '}
                <a href="tel:+352" className="text-accent hover:underline">{t('pages.contact.phonePlaceholder')}</a>
              </p>
            </div>
          </section>

          <section className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-xl md:text-2xl font-bold text-text mb-3 md:mb-4">{t('pages.shipping.faqTitle')}</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-text mb-2">{t('pages.shipping.faq1q')}</h3>
                <p className="text-text-light text-sm">{t('pages.shipping.faq1a')}</p>
              </div>
              <div>
                <h3 className="font-semibold text-text mb-2">{t('pages.shipping.faq2q')}</h3>
                <p className="text-text-light text-sm">{t('pages.shipping.faq2a')}</p>
              </div>
              <div>
                <h3 className="font-semibold text-text mb-2">{t('pages.shipping.faq3q')}</h3>
                <p className="text-text-light text-sm">{t('pages.shipping.faq3a')}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
