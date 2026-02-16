import { cookies } from 'next/headers'
import { getMessage } from './messages'
import type { Locale } from './types'

const LOCALE_COOKIE = 'eden_locale'

export async function getServerTranslations() {
  const cookieStore = await cookies()
  const locale = (cookieStore.get(LOCALE_COOKIE)?.value as Locale) || 'de'
  const validLocale: Locale = locale === 'fr' || locale === 'lb' ? locale : 'de'
  const t = (key: string, vars?: Record<string, string | number>) =>
    getMessage(validLocale, key, vars)
  return { t, locale: validLocale }
}
