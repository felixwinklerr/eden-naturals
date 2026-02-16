import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AnnouncementBar } from '@/components/global/AnnouncementBar'
import { Navigation } from '@/components/global/Navigation'
import { Footer } from '@/components/global/Footer'
import { CartDrawer } from '@/components/cart/CartDrawer'
import { CartProvider } from '@/contexts/CartContext'
import { CartDrawerProvider } from '@/contexts/CartDrawerContext'
import { LocaleProvider } from '@/contexts/LocaleContext'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Eden Protein - Protein Wie die Natur es Meinte',
  description: 'Nur 2 Zutaten • Löst sich ohne Shaker • Keine E-Nummern. Premium Protein aus Luxemburg.',
  keywords: 'Protein, Whey, Vegan Protein, Clean Protein, Luxemburg',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={inter.variable} suppressHydrationWarning>
      <body>
        <LocaleProvider>
          <CartProvider>
            <CartDrawerProvider>
              <AnnouncementBar />
              <Navigation />
              <main className="min-h-screen">
                {children}
              </main>
              <Footer />
              <CartDrawer />
            </CartDrawerProvider>
          </CartProvider>
        </LocaleProvider>
      </body>
    </html>
  )
}
