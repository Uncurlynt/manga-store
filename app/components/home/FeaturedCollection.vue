<script setup lang="ts">
import { MangaData } from '~/data/manga-data'
import { useCart } from '~/composables/useCart'

const featured = MangaData[0]
const { addToCart } = useCart()
</script>

<template>
  <section class="featured">
    <div class="image">
      <img :src="featured.image" :alt="featured.title" />
    </div>

    <div class="content">
      <h2>Featured Collection</h2>
      <h3>{{ featured.title }} Vol. {{ featured.vol }}</h3>

      <p class="description">
        {{ featured.context.main }}
      </p>

      <button @click="addToCart(featured)">
        ADD TO CART — £{{ featured.price }}
      </button>
    </div>
  </section>
</template>

<style scoped>
.featured {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 60px 80px;
  gap: 80px;
  background: #111;
}

.image img {
  width: 100%;
  max-height: 520px;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.image img:hover {
  transform: scale(1.03);
}

.content h2 {
  font-size: 14px;
  letter-spacing: 2px;
  opacity: 0.6;
  margin-bottom: 12px;
}

.content h3 {
  font-size: 32px;
  margin-bottom: 20px;
}

.description {
  opacity: 0.8;
  line-height: 1.6;
  margin-bottom: 30px;
  max-width: 480px;
}

button {
  background: #fff;
  color: #000;
  padding: 12px 28px;
  font-weight: 600;
  transition: 0.3s;
}

button:hover {
  background: #e6e6e6;
}
</style>
