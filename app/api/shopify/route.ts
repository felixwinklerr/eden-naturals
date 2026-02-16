import { NextRequest, NextResponse } from 'next/server'
import { shopifyFetch } from '@/lib/shopify/fetch'

export async function POST(request: NextRequest) {
  try {
    const { query, variables } = await request.json()

    if (!query) {
      return NextResponse.json(
        { error: 'Query is required' },
        { status: 400 }
      )
    }

    const result = await shopifyFetch({
      query,
      variables,
    })

    return NextResponse.json({ data: result })
  } catch (error: any) {
    console.error('Shopify API route error:', error)
    return NextResponse.json(
      { 
        error: error.message || 'Internal server error',
        errors: error.response?.errors || []
      },
      { status: 500 }
    )
  }
}
