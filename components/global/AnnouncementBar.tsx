'use client'

import { useState } from 'react'
import { useTranslations } from '@/contexts/LocaleContext'

export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false)
  const t = useTranslations()

  if (dismissed) return null

  return (
    <div className="bg-accent text-white text-xs md:text-sm py-2 md:py-2.5 px-4 relative">
      <div className="container-custom flex items-center justify-center gap-2 md:gap-4">
        <span className="text-center leading-tight">
          {t('announcement.freeShipping')}
          <span className="hidden sm:inline"> | </span>
          <br className="sm:hidden" />
          {t('announcement.guarantee')}
        </span>
        <button
          onClick={() => setDismissed(true)}
          className="absolute right-2 md:right-4 lg:right-8 text-white hover:opacity-70 transition-opacity p-1"
          aria-label={t('common.close')}
          style={{ minWidth: '32px', minHeight: '32px' }}
        >
          ✕
        </button>
      </div>
    </div>
  )
}
