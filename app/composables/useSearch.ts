import { useState } from 'nuxt/app'


export const useSearch = () => {
    const query = useState<string>('search-query', () => '')

    const setQuery = (value: string) => {
        query.value = value
    }

    const clearQuery = () => {
        query.value = ''
    }

    return {
        query,
        setQuery,
        clearQuery
    }
}
