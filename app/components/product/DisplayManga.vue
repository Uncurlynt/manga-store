<script setup lang="ts">
import type { Manga } from '~/types/manga'
import { useCart } from '~/composables/useCart'
import { useWishlist } from '~/composables/useWishlist'

defineProps<{ items: Manga[] }>()

const { addToCart } = useCart()
const { toggleWishlist, isInWishlist } = useWishlist()
</script>

<template>
  <div class="grid">
    <div v-for="m in items" :key="m.id" class="card">
      <NuxtLink :to="`../products/${m.id}`">
        <img :src="m.image" />
      </NuxtLink>

      <h3>{{ m.title }} Vol. {{ m.vol }}</h3>
      <p>{{ m.author.name }}</p>
      <p>£{{ m.price }}</p>

      <div class="actions">
        <button @click="addToCart(m)">ADD</button>
        <button
            :class="{ active: isInWishlist(m.id) }"
            @click="toggleWishlist(m)"
        >
          ♥
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.card img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.actions {
  display: flex;
  justify-content: space-between;
}

.active {
  color: red;
}
</style>
