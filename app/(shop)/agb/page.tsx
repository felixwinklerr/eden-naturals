import { getServerTranslations } from '@/lib/i18n/server'
import { agbSections as agbSectionsDe } from '@/content/legal/agb-de'
import { agbSections as agbSectionsEn } from '@/content/legal/agb-en'

export default async function AGBPage() {
  const { t, locale } = await getServerTranslations()
  const agbSections = locale === 'de' ? agbSectionsDe : agbSectionsEn

  return (
    <div className="section-padding">
      <div className="container-custom max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-text mb-6 md:mb-8">
          {t('pages.agb.title')}
        </h1>
        <div className="prose prose-lg text-text-light space-y-8">
          {agbSections.map((section, i) => (
            <section key={i}>
              <h2 className="text-xl md:text-2xl font-semibold text-text mb-4">
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.body.split('\n\n').map((para, j) => (
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
