import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const B2B_HOSTS = ['edenpartner.de', 'www.edenpartner.de']
const B2B_DOMAIN = 'www.edenpartner.de' // Kanonische B2B-Domain (Vercel leitet edenpartner.de → www)

export function middleware(request: NextRequest) {
  const host = request.nextUrl.hostname
  const pathname = request.nextUrl.pathname
  const isB2BHost = B2B_HOSTS.includes(host)

  // edenpartner.de / www.edenpartner.de: Root zeigt B2B-Seite (Rewrite / → /b2b)
  if (isB2BHost && pathname === '/') {
    return NextResponse.rewrite(new URL('/b2b', request.url))
  }

  // B2C-Domain: /b2b → zu edenpartner.de weiterleiten (nur in Production)
  if (process.env.NODE_ENV === 'production' && !isB2BHost && pathname === '/b2b') {
    return NextResponse.redirect(new URL('https://' + B2B_DOMAIN, request.url), 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/b2b'],
}
