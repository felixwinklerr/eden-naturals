'use client'

import { shopifyFetchClient } from './fetch'
import { CREATE_CART, ADD_TO_CART, GET_CART, UPDATE_CART_LINES } from './queries'

export interface CartLine {
  id: string
  quantity: number
  merchandise: {
    id: string
    title: string
    price: {
      amount: string
      currencyCode: string
    }
    product: {
      title: string
      handle: string
      images: {
        edges: Array<{
          node: {
            url: string
            altText?: string
          }
        }>
      }
    }
  }
}

export interface Cart {
  id: string
  checkoutUrl: string
  totalQuantity: number
  cost: {
    totalAmount: {
      amount: string
      currencyCode: string
    }
  }
  lines: {
    edges: Array<{
      node: CartLine
    }>
  }
}

const CART_ID_KEY = 'shopify_cart_id'

// Get cart ID from localStorage
export function getCartId(): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem(CART_ID_KEY)
}

// Save cart ID to localStorage
export function setCartId(cartId: string): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(CART_ID_KEY, cartId)
}

// Remove cart ID from localStorage
export function removeCartId(): void {
  if (typeof window === 'undefined') return
  localStorage.removeItem(CART_ID_KEY)
}

// Create a new cart
export async function createCart(): Promise<Cart | null> {
  try {
    const result = await shopifyFetchClient<{ cartCreate: { cart: Cart; userErrors: any[] } }>({
      query: CREATE_CART,
      variables: {
        input: {},
      },
    })

    if (result.cartCreate.userErrors.length > 0) {
      console.error('Cart creation errors:', result.cartCreate.userErrors)
      return null
    }

    const cart = result.cartCreate.cart
    setCartId(cart.id)
    return cart
  } catch (error) {
    console.error('Error creating cart:', error)
    return null
  }
}

// Add item to cart
export async function addToCart(
  cartId: string,
  variantId: string,
  quantity: number = 1
): Promise<Cart | null> {
  try {
    const result = await shopifyFetchClient<{ cartLinesAdd: { cart: Cart; userErrors: any[] } }>({
      query: ADD_TO_CART,
      variables: {
        cartId,
        lines: [
          {
            merchandiseId: variantId,
            quantity,
          },
        ],
      },
    })

    if (result.cartLinesAdd.userErrors.length > 0) {
      console.error('Add to cart errors:', result.cartLinesAdd.userErrors)
      return null
    }

    return result.cartLinesAdd.cart
  } catch (error) {
    console.error('Error adding to cart:', error)
    return null
  }
}

// Update line quantity (set quantity to 0 to remove)
export async function updateCartLine(
  cartId: string,
  lineId: string,
  quantity: number
): Promise<Cart | null> {
  try {
    const result = await shopifyFetchClient<{ cartLinesUpdate: { cart: Cart; userErrors: any[] } }>({
      query: UPDATE_CART_LINES,
      variables: {
        cartId,
        lines: [{ id: lineId, quantity }],
      },
    })

    if (result.cartLinesUpdate.userErrors?.length > 0) {
      console.error('Update cart line errors:', result.cartLinesUpdate.userErrors)
      return null
    }

    return result.cartLinesUpdate.cart
  } catch (error) {
    console.error('Error updating cart line:', error)
    return null
  }
}

// Get cart by ID
export async function getCart(cartId: string): Promise<Cart | null> {
  try {
    const result = await shopifyFetchClient<{ cart: Cart }>({
      query: GET_CART,
      variables: { cartId },
    })

    return result.cart
  } catch (error) {
    console.error('Error fetching cart:', error)
    // If cart doesn't exist, remove the invalid cart ID
    removeCartId()
    return null
  }
}

// Get or create cart
export async function getOrCreateCart(): Promise<Cart | null> {
  const existingCartId = getCartId()
  
  if (existingCartId) {
    const cart = await getCart(existingCartId)
    if (cart) return cart
    // Cart doesn't exist, create a new one
  }

  return createCart()
}
