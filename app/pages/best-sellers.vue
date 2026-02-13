<script setup lang="ts">
import { MangaData } from '~/data/manga-data'
import { useSearch } from '~/composables/useSearch'

import QuerySorter from '~/components/product/QuerySorter.vue'
import DisplayManga from '~/components/product/DisplayManga.vue'
import Pagination from '~/components/product/Pagination.vue'

const { query } = useSearch()

const sort = ref<'recommended' | 'price-asc' | 'price-desc' | 'az' | 'za'>('recommended')
const perPage = ref(9)
const page = ref(1)

const base = computed(() => MangaData.filter(m => m.additionalInfo.bestSeller))

const searched = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return base.value
  return base.value.filter(m =>
      m.title.toLowerCase().includes(q) ||
      m.author.name.toLowerCase().includes(q)
  )
})

const sorted = computed(() => {
  const list = [...searched.value]
  switch (sort.value) {
    case 'price-asc':
      return list.sort((a, b) => a.price - b.price)
    case 'price-desc':
      return list.sort((a, b) => b.price - a.price)
    case 'az':
      return list.sort((a, b) => a.title.localeCompare(b.title))
    case 'za':
      return list.sort((a, b) => b.title.localeCompare(a.title))
    default:
      return list
  }
})

const totalPages = computed(() => Math.max(1, Math.ceil(sorted.value.length / perPage.value)))

const paginated = computed(() => {
  const start = (page.value - 1) * perPage.value
  return sorted.value.slice(start, start + perPage.value)
})

watch([sort, perPage], () => (page.value = 1))
watch(page, () => {
  if (import.meta.client) window.scrollTo({ top: 0, behavior: 'smooth' })
})
</script>

<template>
  <div class="page">
    <div class="head">
      <h1>Best Sellers</h1>
      <p>Top picks based on popularity.</p>
    </div>

    <div class="main">
      <QuerySorter v-model:sort="sort" v-model:perPage="perPage" />

      <DisplayManga v-if="paginated.length" :items="paginated" />
      <div v-else class="empty">No products to show</div>

      <Pagination :page="page" :total="totalPages" @change="page = $event" />
    </div>
  </div>
</template>

<style scoped>
.page {
  padding: 40px 80px;
}

.head {
  margin-bottom: 22px;
}

.head h1 {
  margin: 0 0 10px;
  font-size: 44px;
}

.head p {
  margin: 0;
  opacity: 0.75;
}

.main {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.empty {
  opacity: 0.8;
}
</style>
