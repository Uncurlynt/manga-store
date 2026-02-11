import { useState } from 'nuxt/app'
import type { Manga } from '~/types/manga'

export const useFilters = () => {
    const selectedGenres = useState<string[]>('selected-genres', () => [])
    const priceRange = useState<[number, number]>('price-range', () => [0, 100])

    const toggleGenre = (genre: string) => {
        if (selectedGenres.value.includes(genre)) {
            selectedGenres.value = selectedGenres.value.filter(g => g !== genre)
        } else {
            selectedGenres.value.push(genre)
        }
    }

    const clearFilters = () => {
        selectedGenres.value = []
        priceRange.value = [0, 100]
    }

    const filterManga = (list: Manga[]) => {
        return list.filter(manga => {
            const matchGenre =
                selectedGenres.value.length === 0 ||
                manga.genres.some(g => selectedGenres.value.includes(g))

            const matchPrice =
                manga.price >= priceRange.value[0] &&
                manga.price <= priceRange.value[1]

            return matchGenre && matchPrice
        })
    }

    return {
        selectedGenres,
        priceRange,
        toggleGenre,
        clearFilters,
        filterManga
    }
}
