<script setup lang="ts">
import type { Manga } from '~/types/manga'
import { useCart } from '~/composables/useCart'
import { useWishlist } from '~/composables/useWishlist'
import AdditionalInfo from '~/components/product/AdditionalInfo.vue'

const props = defineProps<{
  manga: Manga
}>()

const { addToCart, cart } = useCart()
const { toggleWishlist, isInWishlist } = useWishlist()

const inWishlist = computed(() => isInWishlist(props.manga.id))
const inCart = computed(() => cart.value.some(i => i.manga.id === props.manga.id))

const addCartText = computed(() => (inCart.value ? 'ADDED' : 'ADD TO CART'))
const wishlistText = computed(() => (inWishlist.value ? 'IN WISHLIST' : 'ADD TO WISHLIST'))

const genresText = computed(() => props.manga.genres.join(' · '))

const additionalVariant = computed<'split' | 'stack'>(() => {
  const long = `${props.manga.context.sub || ''}`.trim()
  return long.length > 520 ? 'split' : 'stack'
})
</script>

<template>
  <section class="detail">
    <div class="media">
      <img class="image" :src="manga.image" :alt="manga.title" />
    </div>

    <div class="summary">
      <div class="kicker">
        <span class="tag">Vol. {{ manga.vol }}</span>
        <span class="tag">{{ genresText }}</span>
      </div>

      <h1 class="title">{{ manga.title }}</h1>

      <p class="price">£{{ manga.price }}</p>

      <p class="main-desc">
        {{ manga.context.main }}
      </p>

      <div class="buttons">
        <button class="primary" @click="addToCart(manga)">
          {{ addCartText }}
        </button>

        <button
            class="secondary"
            :class="{ active: inWishlist }"
            @click="toggleWishlist(manga)"
        >
          {{ wishlistText }}
        </button>
      </div>

      <div class="meta">
        <div class="meta-row">
          <span class="label">Author</span>
          <span class="value">{{ manga.author.name }}</span>
        </div>
        <div class="meta-row">
          <span class="label">Publisher</span>
          <span class="value">{{ manga.publisher }}</span>
        </div>
        <div class="meta-row">
          <span class="label">ISBN</span>
          <span class="value">{{ manga.isbn }}</span>
        </div>
        <div class="meta-row">
          <span class="label">Pages</span>
          <span class="value">{{ manga.pageLength }}</span>
        </div>
      </div>

      <AdditionalInfo
          title="Additional Information"
          :variant="additionalVariant"
          :long-text="manga.context.sub"
      />

      <AdditionalInfo
          title="About the Author"
          variant="stack"
          :long-text="manga.author.bio"
      />
    </div>
  </section>
</template>

<style scoped>
.detail {
  padding: 50px 80px;
  display: grid;
  grid-template-columns: 520px 1fr;
  gap: 60px;
}

.media {
  background: #111;
  padding: 20px;
}

.image {
  width: 100%;
  height: 620px;
  object-fit: contain;
  background: #0b0b0b;
}

.kicker {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 16px;
}

.tag {
  font-size: 12px;
  padding: 6px 10px;
  background: #111;
  border: 1px solid #222;
  opacity: 0.9;
}

.title {
  margin: 0 0 8px;
  font-size: 44px;
}

.price {
  margin: 0 0 18px;
  font-size: 18px;
  opacity: 0.9;
}

.main-desc {
  margin: 0 0 22px;
  line-height: 1.7;
  opacity: 0.85;
  max-width: 680px;
}

.buttons {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
}

.primary {
  background: #fff;
  color: #000;
  padding: 12px 18px;
  font-weight: 700;
  transition: 0.2s;
}

.primary:hover {
  background: #e6e6e6;
}

.secondary {
  padding: 12px 18px;
  background: #151515;
  border: 1px solid #2a2a2a;
  transition: 0.2s;
}

.secondary:hover {
  border-color: #3a3a3a;
}

.secondary.active {
  border-color: #e50914;
  color: #e50914;
}

.meta {
  display: grid;
  gap: 10px;
  padding: 18px 0 0;
  border-top: 1px solid #222;
  margin-top: 16px;
}

.meta-row {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 12px;
}

.label {
  opacity: 0.6;
  font-size: 13px;
}

.value {
  opacity: 0.9;
}
</style>
