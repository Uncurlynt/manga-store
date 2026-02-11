import { ref, computed } from 'vue'
import { useState } from 'nuxt/app'
import type { Manga } from '~/types/manga'

export interface CartItem {
    manga: Manga
    quantity: number
}

export const useCart = () => {
    const cart = useState<CartItem[]>('cart', () => [])

    const addToCart = (manga: Manga) => {
        const item = cart.value.find(i => i.manga.id === manga.id)
        if (item) item.quantity++
        else cart.value.push({ manga, quantity: 1 })
    }

    const removeFromCart = (id: string) => {
        cart.value = cart.value.filter(i => i.manga.id !== id)
    }

    const changeQuantity = (id: string, quantity: number) => {
        const item = cart.value.find(i => i.manga.id === id)
        if (!item) return
        if (quantity <= 0) removeFromCart(id)
        else item.quantity = quantity
    }

    const clearCart = () => (cart.value = [])

    const totalItems = computed(() =>
        cart.value.reduce((sum, i) => sum + i.quantity, 0)
    )

    const subtotal = computed(() =>
        cart.value.reduce((sum, i) => sum + i.manga.price * i.quantity, 0)
    )

    const discount = computed(() => {
        const totalQuantity = cart.value.reduce((sum, i) => sum + i.quantity, 0)
        return totalQuantity >= 3 ? subtotal.value * 0.2 : 0
    })

    const shipping = computed(() =>
        subtotal.value - discount.value > 25 ? 0 : 3.99
    )

    const totalPrice = computed(() =>
        subtotal.value - discount.value + shipping.value
    )

    return {
        cart,
        addToCart,
        removeFromCart,
        changeQuantity,
        clearCart,
        totalItems,
        subtotal,
        discount,
        shipping,
        totalPrice
    }
}
