import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const B2B_HOSTS = ['eden-partner.com', 'www.eden-partner.com']
const B2B_DOMAIN = 'www.eden-partner.com' // Kanonische B2B-Domain (Vercel leitet eden-partner.com → www)

export function middleware(request: NextRequest) {
  // Lokal: Middleware aus, / und /b2b normal nutzbar
  if (request.nextUrl.hostname === 'localhost' || process.env.NODE_ENV === 'development') {
    return NextResponse.next()
  }

  const host = request.nextUrl.hostname
  const pathname = request.nextUrl.pathname
  const isB2BHost = B2B_HOSTS.includes(host)

  // eden-partner.com / www.eden-partner.com: Root zeigt B2B-Seite (Rewrite / → /b2b)
  if (isB2BHost && pathname === '/') {
    return NextResponse.rewrite(new URL('/b2b', request.url))
  }

  // B2C-Domain: /b2b → zu eden-partner.com weiterleiten (nur in Production)
  if (process.env.NODE_ENV === 'production' && !isB2BHost && pathname === '/b2b') {
    return NextResponse.redirect(new URL('https://' + B2B_DOMAIN, request.url), 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/b2b'],
}
