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
    <details class="filter-block" open>
      <summary class="filter-summary">
        <span>Genres</span>
        <span class="arrow" aria-hidden="true">
          <i class="fa-solid fa-chevron-right"></i>
        </span>
      </summary>

      <div class="filter-content">
        <label v-for="g in genres" :key="g" class="chk">
          <input
              type="checkbox"
              :checked="selectedGenres.includes(g)"
              @change="toggleGenre(g)"
          />
          <span class="box"></span>
          <span>{{ g }}</span>
        </label>
      </div>
    </details>

    <details class="filter-block" open>
      <summary class="filter-summary">
        <span>Price</span>
        <span class="arrow" aria-hidden="true">
          <i class="fa-solid fa-chevron-right"></i>
        </span>
      </summary>

      <div class="filter-content range">
        <input
            type="range"
            min="0"
            max="50"
            v-model.number="priceRange[1]"
        />
        <p class="value">Up to £{{ priceRange[1] }}</p>
      </div>
    </details>

    <button class="clear" @click="clearFilters">
      Clear filters
    </button>
  </aside>
</template>

<style scoped src="~/assets/styles/filter-section.css"></style>
