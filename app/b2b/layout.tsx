import { LocaleProvider } from '@/contexts/LocaleContext'

export default function B2BLayout({ children }: { children: React.ReactNode }) {
  return <LocaleProvider>{children}</LocaleProvider>
}
