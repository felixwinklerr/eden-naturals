'use client'

import { createContext, useContext, useCallback, useState, useEffect } from 'react'
import { getMessage } from '@/lib/i18n/messages'
import type { Locale } from '@/lib/i18n/types'

const LOCALE_COOKIE = 'eden_locale'

function getStoredLocale(): Locale {
  if (typeof document === 'undefined') return 'de'
  const stored = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${LOCALE_COOKIE}=`))
  const value = stored?.split('=')[1] as Locale | undefined
  if (value && (value === 'de' || value === 'fr' || value === 'lb')) return value
  return 'de'
}

function setLocaleCookie(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale};path=/;max-age=31536000`
}

type LocaleContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string, vars?: Record<string, string | number>) => string
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('de')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setLocaleState(getStoredLocale())
    setMounted(true)
  }, [])

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    setLocaleCookie(newLocale)
    if (typeof window !== 'undefined') {
      window.document.documentElement.lang = newLocale === 'lb' ? 'lb' : newLocale
    }
  }, [])

  useEffect(() => {
    if (!mounted) return
    const lang = locale === 'lb' ? 'lb' : locale
    if (typeof document !== 'undefined') document.documentElement.lang = lang
  }, [locale, mounted])

  const t = useCallback(
    (key: string, vars?: Record<string, string | number>) => {
      return getMessage(locale, key, vars)
    },
    [locale]
  )

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider')
  return ctx
}

export function useTranslations() {
  const { t } = useLocale()
  return t
}
