/**
 * Meta Conversions API (CAPI) – server-side event sending.
 * Use the same event_id as the Pixel for deduplication.
 * @see https://developers.facebook.com/docs/marketing-api/conversions-api
 */

const CAPI_VERSION = 'v21.0'
const CAPI_URL = `https://graph.facebook.com/${CAPI_VERSION}`

export type CAPIEventPayload = {
  event_name: string
  event_id: string
  event_source_url?: string
  action_source?: 'website' | 'app' | 'email' | 'phone_call' | 'chat' | 'physical_store' | 'system_generated' | 'other'
  user_data?: {
    fbc?: string
    fbp?: string
    client_user_agent?: string
    client_ip_address?: string
  }
  custom_data?: Record<string, unknown>
}

/**
 * Sends one or more events to Meta Conversions API.
 * Call from API route or server action only. Requires META_CAPI_ACCESS_TOKEN.
 */
export async function sendCAPIEvents(
  pixelId: string,
  accessToken: string,
  events: CAPIEventPayload[]
): Promise<{ success: boolean; error?: string }> {
  if (!pixelId || !accessToken || events.length === 0) {
    return { success: false, error: 'Missing pixelId, accessToken or events' }
  }

  const event_time = Math.floor(Date.now() / 1000)
  const data = events.map((e) => ({
    event_name: e.event_name,
    event_time,
    event_id: e.event_id,
    event_source_url: e.event_source_url ?? undefined,
    action_source: e.action_source ?? 'website',
    user_data: e.user_data
      ? {
          ...(e.user_data.fbc && { fbc: e.user_data.fbc }),
          ...(e.user_data.fbp && { fbp: e.user_data.fbp }),
          ...(e.user_data.client_user_agent && { client_user_agent: e.user_data.client_user_agent }),
          ...(e.user_data.client_ip_address && { client_ip_address: e.user_data.client_ip_address }),
        }
      : undefined,
    custom_data: e.custom_data ?? undefined,
  }))

  const res = await fetch(`${CAPI_URL}/${pixelId}/events`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data, access_token: accessToken }),
  })

  const json = await res.json().catch(() => ({}))
  if (!res.ok) {
    const err = json?.error?.message ?? res.statusText ?? 'CAPI request failed'
    return { success: false, error: err }
  }
  if (json?.error) {
    return { success: false, error: json.error.message ?? 'CAPI error' }
  }
  return { success: true }
}
