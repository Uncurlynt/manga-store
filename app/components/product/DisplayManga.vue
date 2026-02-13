<script setup lang="ts">
import type { Manga } from '~/types/manga'
import { useCart } from '~/composables/useCart'
import { useWishlist } from '~/composables/useWishlist'

defineProps<{ items: Manga[] }>()

const { addToCart, cart } = useCart()
const { toggleWishlist, isInWishlist } = useWishlist()

const isInCart = (id: string) => cart.value.some(i => i.manga.id === id)

const genresShort = (genres: string[]) => genres.slice(0, 3).join(' · ')
</script>

<template>
  <div class="grid">
    <div v-for="m in items" :key="m.id" class="card">
      <NuxtLink class="cover" :to="`../products/${m.id}`">
        <img :src="m.image" :alt="m.title" />
        <div class="badges">
          <span v-if="m.additionalInfo.bestSeller" class="badge">Best Seller</span>
          <span v-if="m.additionalInfo.newRelease" class="badge alt">New</span>
        </div>
      </NuxtLink>

      <div class="body">
        <h3 class="title">{{ m.title }} Vol. {{ m.vol }}</h3>
        <p class="author">{{ m.author.name }}</p>
        <p class="genres">{{ genresShort(m.genres) }}</p>

        <div class="bottom">
          <div class="price">£{{ m.price }}</div>

          <div class="actions">
            <button class="add" @click="addToCart(m)">
              {{ isInCart(m.id) ? 'ADDED' : 'ADD' }}
            </button>

            <button
                class="wish"
                :class="{ active: isInWishlist(m.id) }"
                @click="toggleWishlist(m)"
                aria-label="wishlist"
                title="Wishlist"
            >
              ♥
            </button>
          </div>
        </div>
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

.card {
  border: 1px solid #222;
  background: #0f0f0f;
}

.cover {
  position: relative;
  display: block;
}

.cover img {
  width: 100%;
  height: 320px;
  object-fit: contain;
  background: #111;
}

.badges {
  position: absolute;
  left: 10px;
  top: 10px;
  display: flex;
  gap: 8px;
}

.badge {
  font-size: 11px;
  padding: 6px 8px;
  background: #ffffff;
  color: #000;
  font-weight: 800;
}

.badge.alt {
  background: #e50914;
  color: #fff;
}

.body {
  padding: 14px;
}

.title {
  margin: 0 0 6px;
  font-size: 18px;
}

.author {
  margin: 0;
  opacity: 0.75;
  font-size: 13px;
}

.genres {
  margin: 8px 0 0;
  opacity: 0.7;
  font-size: 12px;
}

.bottom {
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price {
  font-weight: 800;
}

.actions {
  display: flex;
  gap: 10px;
  align-items: center;
}

.add {
  padding: 8px 10px;
  background: #1a1a1a;
  border: 1px solid #2a2a2a;
}

.wish {
  width: 36px;
  height: 36px;
  background: #151515;
  border: 1px solid #2a2a2a;
  display: grid;
  place-items: center;
  font-size: 16px;
}

.wish.active {
  color: #e50914;
}
</style>
