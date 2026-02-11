export interface MangaAuthor {
    name: string
    bio: string
}

export interface MangaContext {
    main: string
    sub: string
}

export interface MangaAdditionalInfo {
    bestSeller: boolean
    newRelease: boolean
    wishlist: boolean
}

export interface Manga {
    id: string
    image: string
    title: string
    vol: number
    pageLength: number
    genres: string[]
    author: MangaAuthor
    context: MangaContext
    price: number
    publisher: string
    isbn: string
    additionalInfo: MangaAdditionalInfo
}
