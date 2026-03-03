import { NextRequest, NextResponse } from 'next/server'
import { sendCAPIEvents } from '@/lib/meta-capi'

const PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID
const CAPI_TOKEN = process.env.META_CAPI_ACCESS_TOKEN

export async function POST(request: NextRequest) {
  if (!PIXEL_ID || !CAPI_TOKEN) {
    return NextResponse.json(
      { error: 'Meta CAPI not configured (missing pixel ID or access token)' },
      { status: 503 }
    )
  }

  try {
    const body = await request.json()
    const {
      eventName,
      eventId,
      eventSourceUrl,
      params = {},
      fbc,
      fbp,
      userAgent,
    } = body as {
      eventName: string
      eventId: string
      eventSourceUrl?: string
      params?: Record<string, unknown>
      fbc?: string
      fbp?: string
      userAgent?: string
    }

    if (!eventName || !eventId) {
      return NextResponse.json(
        { error: 'eventName and eventId are required' },
        { status: 400 }
      )
    }

    const clientIp =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      undefined

    const result = await sendCAPIEvents(PIXEL_ID, CAPI_TOKEN, [
      {
        event_name: eventName,
        event_id: eventId,
        event_source_url: eventSourceUrl ?? undefined,
        action_source: 'website',
        user_data: {
          ...(fbc && { fbc }),
          ...(fbp && { fbp }),
          ...(userAgent && { client_user_agent: userAgent }),
          ...(clientIp && { client_ip_address: clientIp }),
        },
        custom_data: Object.keys(params).length ? params : undefined,
      },
    ])

    if (!result.success) {
      return NextResponse.json(
        { error: result.error ?? 'CAPI send failed' },
        { status: 502 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error('Meta CAPI route error:', e)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
