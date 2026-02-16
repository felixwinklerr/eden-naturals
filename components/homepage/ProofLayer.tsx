'use client'

import { useTranslations } from '@/contexts/LocaleContext'

export function ProofLayer() {
  const t = useTranslations()

  const proofPoints = [
    { icon: '🧪', stat: '2', labelKey: 'home.proof.ingredients', descKey: 'home.proof.ingredientsOther' },
    { icon: '⚡', stat: '0', labelKey: 'home.proof.eNumbers', descKey: 'home.proof.eNumbersOther' },
    { icon: '⚙️', stat: '3', labelKey: 'home.proof.steps', descKey: 'home.proof.stepsOther' },
    { icon: '💧', stat: '10s', labelKey: 'home.proof.noShaker', descKey: 'home.proof.noShakerDesc' },
  ]

  return (
    <section className="py-8 md:py-10 bg-white border-b border-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {proofPoints.map((point, index) => (
            <div key={index} className="text-center">
              <span className="text-2xl md:text-3xl block mb-1.5">{point.icon}</span>
              <div className="text-2xl md:text-3xl font-bold text-accent mb-0.5">{point.stat}</div>
              <div className="font-semibold text-text text-xs md:text-sm mb-0.5">{t(point.labelKey)}</div>
              <div className="text-text-muted text-[10px] md:text-xs">{t(point.descKey)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
