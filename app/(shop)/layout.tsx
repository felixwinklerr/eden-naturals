import { AnnouncementBar } from '@/components/global/AnnouncementBar'
import { Navigation } from '@/components/global/Navigation'
import { Footer } from '@/components/global/Footer'
import { CartDrawer } from '@/components/cart/CartDrawer'
import { CartProvider } from '@/contexts/CartContext'
import { CartDrawerProvider } from '@/contexts/CartDrawerContext'
import { LocaleProvider } from '@/contexts/LocaleContext'
import { FacebookPixel } from '@/components/analytics/FacebookPixel'

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <FacebookPixel />
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
    </>
  )
}
