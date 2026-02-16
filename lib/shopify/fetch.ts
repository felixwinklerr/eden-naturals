import { request } from 'graphql-request'
import type { DocumentNode } from 'graphql'

// Server-side fetch function
export async function shopifyFetch<T = any>({
  query,
  variables,
  cache = 'force-cache',
}: {
  query: DocumentNode | string
  variables?: Record<string, any>
  cache?: RequestCache
}): Promise<T> {
  const storeDomain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN
  const accessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN

  if (!storeDomain || !accessToken) {
    throw new Error('Shopify Storefront API credentials are missing')
  }

  const apiUrl = `https://${storeDomain}/api/2025-01/graphql.json`
  const headers = {
    'Content-Type': 'application/json',
    'X-Shopify-Storefront-Access-Token': accessToken,
  }

  try {
    const result = await request<T>(apiUrl, query, variables, headers)
    return result
  } catch (error) {
    console.error('Shopify API Error:', error)
    throw error
  }
}

// Client-side fetch function
export async function shopifyFetchClient<T = any>({
  query,
  variables,
}: {
  query: DocumentNode | string
  variables?: Record<string, any>
}): Promise<T> {
  try {
    const response = await fetch('/api/shopify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    })

    if (!response.ok) {
      throw new Error(`Shopify API error: ${response.statusText}`)
    }

    const result = await response.json()
    
    if (result.errors) {
      throw new Error(result.errors[0]?.message || 'Shopify API error')
    }

    return result.data
  } catch (error) {
    console.error('Shopify API Error:', error)
    throw error
  }
}
