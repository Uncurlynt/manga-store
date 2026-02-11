import { ref, onMounted, onUnmounted } from 'vue'

export const useWindowWidth = () => {
    const width = ref<number>(0)

    const update = () => {
        width.value = window.innerWidth
    }

    onMounted(() => {
        update()
        window.addEventListener('resize', update)
    })

    onUnmounted(() => {
        window.removeEventListener('resize', update)
    })

    return { width }
}
