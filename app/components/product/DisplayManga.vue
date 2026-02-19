<script setup lang="ts">
import type { Manga } from '~/types/manga'
import { useCart } from '~/composables/useCart'
import { useWishlist } from '~/composables/useWishlist'

defineProps<{ items: Manga[] }>()

const { addToCart, cart } = useCart()
const { toggleWishlist, isInWishlist } = useWishlist()

const isInCart = (id: string) => cart.value.some(i => i.manga.id === id)

const genreClass = (g: string) =>
    g.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

const limitedGenres = (genres: string[]) => genres.slice(0, 3)
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
        <div>
          <h3 class="title">{{ m.title }} Vol. {{ m.vol }}</h3>
          <p class="author">{{ m.author.name }}</p>

          <div class="genres">
            <span
                v-for="g in limitedGenres(m.genres)"
                :key="g"
                class="genre-tag"
                :class="genreClass(g)"
            >
              {{ g }}
            </span>
          </div>
        </div>

        <div class="bottom">
          <div class="price">£{{ m.price }}</div>

          <div class="actions">
            <button
                class="add"
                :class="{ active: isInCart(m.id) }"
                @click="addToCart(m)"
                aria-label="Add to cart"
                title="Add to cart"
            >
              <i class="fa-solid fa-cart-shopping" aria-hidden="true"></i>

            </button>


            <button
                class="wish"
                :class="{ active: isInWishlist(m.id) }"
                @click="toggleWishlist(m)"
                aria-label="Wishlist"
                title="Wishlist"
            >
              <i
                  :class="isInWishlist(m.id) ? 'fa-solid fa-heart' : 'fa-regular fa-heart'"
                  aria-hidden="true"
              ></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src="~/assets/styles/display-manga.css"></style>
<style scoped src="~/assets/styles/genres.css"></style>
