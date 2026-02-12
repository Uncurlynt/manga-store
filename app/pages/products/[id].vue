<script setup lang="ts">
import { MangaData } from '~/data/manga-data'
import ProductDetail from '~/components/product/ProductDetail.vue'

const route = useRoute()

const id = computed(() => String(route.params.id || ''))
const manga = computed(() => MangaData.find(m => m.id === id.value))

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

watch(
    () => route.params.id,
    () => {
      if (import.meta.client) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
)
</script>

<template>
  <div>
    <div v-if="!manga" class="not-found">
      <h1>Product not found</h1>
      <NuxtLink to="/products">Back to shop</NuxtLink>
    </div>

    <ProductDetail v-else :manga="manga" />
  </div>
</template>

<style scoped>
.not-found {
  padding: 60px 80px;
}

.not-found a {
  display: inline-block;
  margin-top: 10px;
  opacity: 0.8;
}
</style>
