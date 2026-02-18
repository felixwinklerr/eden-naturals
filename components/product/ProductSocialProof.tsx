'use client'

import { useTranslations } from '@/contexts/LocaleContext'

export function ProductSocialProof() {
  const t = useTranslations()

  const testimonials = [
    { quoteKey: 'home.socialProof.quote1', name: 'Sarah M.', locationKey: 'home.socialProof.locationLux' },
    { quoteKey: 'home.socialProof.quote2', name: 'Thomas K.', locationKey: 'home.socialProof.locationDe' },
    { quoteKey: 'home.socialProof.quote3', name: 'Julia R.', locationKey: 'home.socialProof.locationLux' },
  ]

  return (
    <div className="mb-6 md:mb-12">
      <h3 className="text-lg md:text-2xl font-bold text-text mb-3 md:mb-6 text-center">
        {t('home.socialProof.title')}
      </h3>
      {/* Horizontal scroll on mobile, grid on sm+ */}
      <div className="flex gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible snap-x snap-mandatory">
        {testimonials.map((tst, index) => (
          <div key={index} className="bg-gray-50 rounded-xl p-4 flex-shrink-0 w-[80vw] sm:w-auto snap-start md:flex-shrink md:p-5">
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-amber-400 text-xs">★</span>
              ))}
            </div>
            <p className="text-text text-xs md:text-base leading-relaxed mb-3 italic">
              &ldquo;{t(tst.quoteKey)}&rdquo;
            </p>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 md:w-8 md:h-8 bg-accent bg-opacity-10 rounded-full flex items-center justify-center text-accent font-semibold text-xs flex-shrink-0">
                {tst.name[0]}
              </div>
              <div>
                <p className="text-text text-xs font-medium">{tst.name}</p>
                <p className="text-text-muted text-[10px] md:text-xs">{t(tst.locationKey)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-text-muted text-xs mt-2 md:mt-3">
        {t('home.socialProof.subtitle')}
      </p>
    </div>
  )
}
