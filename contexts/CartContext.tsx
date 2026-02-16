'use client'

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { getOrCreateCart, addToCart, getCart, updateCartLine, type Cart, type CartLine } from '@/lib/shopify/cart'
import { getCartId } from '@/lib/shopify/cart'

interface CartContextType {
  cart: Cart | null
  loading: boolean
  error: string | null
  addItem: (variantId: string, quantity?: number) => Promise<boolean>
  updateLineQuantity: (lineId: string, quantity: number) => Promise<boolean>
  refreshCart: () => Promise<void>
  itemCount: number
  subtotal: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Cart | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Load cart on mount
  useEffect(() => {
    loadCart()
  }, [])

  const loadCart = async () => {
    try {
      setLoading(true)
      setError(null)
      const cartData = await getOrCreateCart()
      setCart(cartData)
    } catch (err) {
      console.error('Error loading cart:', err)
      setError('Fehler beim Laden des Warenkorbs')
    } finally {
      setLoading(false)
    }
  }

  const refreshCart = useCallback(async () => {
    const cartId = getCartId()
    if (!cartId) {
      await loadCart()
      return
    }

    try {
      const cartData = await getCart(cartId)
      if (cartData) {
        setCart(cartData)
      } else {
        // Cart doesn't exist, create new one
        await loadCart()
      }
    } catch (err) {
      console.error('Error refreshing cart:', err)
      await loadCart()
    }
  }, [])

  const addItem = useCallback(async (variantId: string, quantity: number = 1): Promise<boolean> => {
    try {
      setError(null)
      const cartId = getCartId()
      
      if (!cartId) {
        // Create cart first
        const newCart = await getOrCreateCart()
        if (!newCart) {
          setError('Fehler beim Erstellen des Warenkorbs')
          return false
        }
        const updatedCart = await addToCart(newCart.id, variantId, quantity)
        if (updatedCart) {
          setCart(updatedCart)
          return true
        }
        return false
      }

      const updatedCart = await addToCart(cartId, variantId, quantity)
      if (updatedCart) {
        setCart(updatedCart)
        return true
      }
      
      setError('Fehler beim Hinzufügen zum Warenkorb')
      return false
    } catch (err) {
      console.error('Error adding item:', err)
      setError('Fehler beim Hinzufügen zum Warenkorb')
      return false
    }
  }, [])

  const updateLineQuantity = useCallback(async (lineId: string, quantity: number): Promise<boolean> => {
    const cartId = getCartId()
    if (!cartId || quantity < 0) return false
    try {
      setError(null)
      const updatedCart = await updateCartLine(cartId, lineId, quantity)
      if (updatedCart) {
        setCart(updatedCart)
        return true
      }
      return false
    } catch (err) {
      console.error('Error updating line quantity:', err)
      return false
    }
  }, [])

  const itemCount = cart?.totalQuantity || 0
  const subtotal = cart ? parseFloat(cart.cost.totalAmount.amount) : 0

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        error,
        addItem,
        updateLineQuantity,
        refreshCart,
        itemCount,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
