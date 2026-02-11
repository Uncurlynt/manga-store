<script setup lang="ts">
import { MangaData } from '~/data/manga-data'
import { useFilters } from '~/composables/useFilters'

const {
  selectedGenres,
  priceRange,
  toggleGenre,
  clearFilters
} = useFilters()

const genres = computed(() =>
    Array.from(
        new Set(MangaData.flatMap(m => m.genres))
    )
)
</script>

<template>
  <aside class="filters">
    <h3>Genres</h3>

    <label v-for="g in genres" :key="g">
      <input
          type="checkbox"
          :checked="selectedGenres.includes(g)"
          @change="toggleGenre(g)"
      />
      {{ g }}
    </label>

    <h3>Price</h3>
    <input
        type="range"
        min="0"
        max="50"
        v-model.number="priceRange[1]"
    />
    <p>Up to £{{ priceRange[1] }}</p>

    <button class="clear" @click="clearFilters">
      Clear filters
    </button>
  </aside>
</template>

<style scoped>
.filters {
  border-right: 1px solid #222;
  padding-right: 24px;
}

label {
  display: block;
  margin-bottom: 6px;
}

.clear {
  margin-top: 16px;
  background: #fff;
  color: #000;
  padding: 8px;
}
</style>
