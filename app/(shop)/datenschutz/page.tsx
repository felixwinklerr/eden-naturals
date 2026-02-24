import { getServerTranslations } from '@/lib/i18n/server'
import { datenschutzLastUpdated as lastUpdatedDe, datenschutzSections as sectionsDe } from '@/content/legal/datenschutz-de'
import { datenschutzLastUpdated as lastUpdatedEn, datenschutzSections as sectionsEn } from '@/content/legal/datenschutz-en'

export default async function DatenschutzPage() {
  const { t, locale } = await getServerTranslations()
  const isDe = locale === 'de'
  const lastUpdated = isDe ? lastUpdatedDe : lastUpdatedEn
  const datenschutzSections = isDe ? sectionsDe : sectionsEn
  const lastUpdatedLabel = isDe ? 'Letzte Fassung:' : 'Last updated:'

  return (
    <div className="section-padding">
      <div className="container-custom max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-text mb-2 md:mb-4">
          {t('pages.datenschutz.title')}
        </h1>
        <p className="text-text-light text-sm mb-6 md:mb-8">
          {lastUpdatedLabel} {lastUpdated}
        </p>
        <div className="prose prose-lg text-text-light space-y-8">
          {datenschutzSections.map((section, i) => (
            <section key={i}>
              {section.title && (
                <h2 className="text-2xl font-semibold text-text mb-4">{section.title}</h2>
              )}
              {section.subtitle && (
                <h3 className="text-xl font-semibold text-text mb-2">{section.subtitle}</h3>
              )}
              <div className="space-y-3">
                {section.paragraphs.map((para, j) => (
                  <p key={j}>{para}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
