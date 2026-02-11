import { useState } from 'nuxt/app'
import type { Manga } from '~/types/manga'

export const useWishlist = () => {
    const wishlist = useState<Manga[]>('wishlist', () => [])

    const toggleWishlist = (manga: Manga) => {
        const exists = wishlist.value.find(i => i.id === manga.id)
        if (exists) wishlist.value = wishlist.value.filter(i => i.id !== manga.id)
        else wishlist.value.push(manga)
    }

    const isInWishlist = (id: string) =>
        wishlist.value.some(i => i.id === id)

    const removeFromWishlist = (id: string) => {
        wishlist.value = wishlist.value.filter(i => i.id !== id)
    }

    return {
        wishlist,
        toggleWishlist,
        removeFromWishlist,
        isInWishlist
    }
}
