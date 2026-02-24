'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { trackViewCategory } from '@/lib/facebook-pixel'

/** Fires ViewContent (product_group) when user is on the products listing page. */
export function MetaPixelViewCategory() {
  const pathname = usePathname()
  const firedRef = useRef(false)

  useEffect(() => {
    if (pathname === '/products' && !firedRef.current) {
      trackViewCategory('Products')
      firedRef.current = true
    }
    if (pathname !== '/products') {
      firedRef.current = false
    }
  }, [pathname])

  return null
}
