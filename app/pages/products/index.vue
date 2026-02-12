<script setup lang="ts">
import { MangaData } from '~/data/manga-data'
import { useFilters } from '~/composables/useFilters'
import { useSearch } from '~/composables/useSearch'

import FilterSection from '~/components/product/FilterSection.vue'
import QuerySorter from '~/components/product/QuerySorter.vue'
import DisplayManga from '~/components/product/DisplayManga.vue'
import Pagination from '~/components/product/Pagination.vue'

const { filterManga } = useFilters()
const { query } = useSearch()

const sort = ref<'recommended' | 'price-asc' | 'price-desc' | 'az' | 'za'>('recommended')
const perPage = ref(9)
const page = ref(1)

const searched = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return MangaData

  return MangaData.filter(m =>
      m.title.toLowerCase().includes(q) ||
      m.author.name.toLowerCase().includes(q)
  )
})

const filtered = computed(() => filterManga(searched.value))

const sorted = computed(() => {
  const list = [...filtered.value]
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


</script>

<template>
  <div class="products">
    <FilterSection />

    <div class="main">
      <QuerySorter v-model:sort="sort" v-model:perPage="perPage" />

      <DisplayManga v-if="paginated.length" :items="paginated" />
      <div v-else class="empty">No products to show</div>

      <Pagination :page="page" :total="totalPages" @change="page = $event" />
    </div>
  </div>
</template>

<style scoped>
.products {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 40px;
  padding: 40px;
}

.main {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

</style>
