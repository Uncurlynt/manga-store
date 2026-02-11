<script setup lang="ts">
import { MangaData } from '~/data/manga-data'
import { useCart } from '~/composables/useCart'

const special = MangaData[1] || MangaData[0]
const { addToCart } = useCart()
</script>

<template>
  <section class="special">
    <div class="content">
      <h2>20% Off When You Pick Any 3 Manga</h2>

      <h3>{{ special.title }} Vol. {{ special.vol }}</h3>

      <p class="description">
        {{ special.context.main }}
      </p>

      <button @click="addToCart(special)">
        ADD TO CART — £{{ special.price }}
      </button>
    </div>

    <div class="image">
      <img :src="special.image" :alt="special.title" />
    </div>
  </section>
</template>

<style scoped>
.special {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 60px 80px;
  gap: 80px;
  background: #0b0b0b;
}

.content h2 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
}

.content h3 {
  font-size: 28px;
  margin-bottom: 20px;
}

.description {
  opacity: 0.8;
  line-height: 1.6;
  margin-bottom: 30px;
  max-width: 480px;
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
