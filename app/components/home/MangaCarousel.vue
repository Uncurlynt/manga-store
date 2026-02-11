<script setup lang="ts">
import { MangaData } from '~/data/manga-data'
import { useWindowWidth } from '~/composables/useWindowWidth'
import { useCart } from '~/composables/useCart'
import { useWishlist } from '~/composables/useWishlist'

const { width } = useWindowWidth()
const { addToCart } = useCart()
const { toggleWishlist, isInWishlist } = useWishlist()

const current = ref(0)

const visibleCount = computed(() => {
  if (width.value >= 1600) return 5
  if (width.value >= 1280) return 4
  if (width.value >= 1024) return 4
  if (width.value >= 768) return 3
  return 2
})

const maxIndex = computed(() =>
    Math.max(0, MangaData.length - visibleCount.value)
)

const next = () => {
  if (current.value < maxIndex.value) {
    current.value++
  }
}

const prev = () => {
  if (current.value > 0) {
    current.value--
  }
}

watch(visibleCount, () => {
  current.value = 0
})
</script>

<template>
  <section class="carousel">
    <div class="header">
      <h2>Trending Manga</h2>
      <div class="controls">
        <button @click="prev">‹</button>
        <button @click="next">›</button>
      </div>
    </div>

    <div class="viewport">
      <div
          class="track"
          :style="{
          transform: `translateX(-${current * (100 / visibleCount)}%)`
        }"
      >
        <div
            v-for="manga in MangaData"
            :key="manga.id"
            class="card"
            :style="{ flex: `0 0 ${100 / visibleCount}%` }"
        >
          <img :src="manga.image" :alt="manga.title" />

          <div class="info">
            <h3>{{ manga.title }} Vol. {{ manga.vol }}</h3>
            <p>£{{ manga.price }}</p>
          </div>

          <div class="actions">
            <button @click="addToCart(manga)">
              ADD
            </button>

            <button
                :class="{ active: isInWishlist(manga.id) }"
                @click="toggleWishlist(manga)"
            >
              ♥
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.carousel {
  padding: 40px 80px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.controls button {
  font-size: 22px;
  margin-left: 8px;
}

.viewport {
  overflow: hidden;
}

.track {
  display: flex;
  transition: transform 0.4s ease;
}

.card {
  padding: 12px;
}

.card img {
  width: 100%;
  height: 360px;
  object-fit: contain;
  background: #111;
}

.info {
  margin-top: 8px;
}

.actions {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
}

.actions button {
  padding: 6px 10px;
  background: #1a1a1a;
}

.actions button.active {
  color: #e50914;
}
</style>
