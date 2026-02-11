import { ref, computed } from 'vue'

interface Product {
    id: string
    title: string
    price: number
    description: string
    images: string[]
}

const products = ref<Product[]>([])
const loading = ref(false)

export function useProducts() {
    const total = computed(() => products.value.length)

    const fetchProducts = async () => {
        loading.value = true
        try {
            const { data } = await useFetch<Product[]>(
                'https://api.escuelajs.co/api/v1/products?offset=0&limit=20'
            )

            if (data.value) {
                products.value = data.value
            }
        } catch (e) {
            console.error(e)
        } finally {
            loading.value = false
        }
    }

    const getProductById = (id: string) => {
        return products.value.find(p => p.id === id)
    }

    if (!products.value.length) {
        fetchProducts()
    }

    return {
        products,
        total,
        loading,
        fetchProducts,
        getProductById
    }
}
