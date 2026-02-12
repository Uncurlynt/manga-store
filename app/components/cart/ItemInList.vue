<script setup lang="ts">
import type { Manga } from '~/types/manga'

const props = defineProps<{
  manga: Manga
  mode: 'cart' | 'wishlist'
  quantity?: number
  onInc?: () => void
  onDec?: () => void
  onRemove?: () => void
  onAddToCart?: () => void
}>()
</script>

<template>
  <div class="item">
    <NuxtLink class="thumb" :to="`/products/${manga.id}`">
      <img :src="manga.image" :alt="manga.title" />
    </NuxtLink>

    <div class="info">
      <div class="top">
        <div>
          <h3 class="title">{{ manga.title }} Vol. {{ manga.vol }}</h3>
          <p class="sub">{{ manga.author.name }}</p>
        </div>

        <button class="remove" @click="onRemove?.()">Remove</button>
      </div>

      <div class="bottom">
        <div class="price">£{{ manga.price }}</div>

        <div v-if="mode === 'cart'" class="qty">
          <button class="qbtn" @click="onDec?.()">-</button>
          <span class="qval">{{ quantity ?? 1 }}</span>
          <button class="qbtn" @click="onInc?.()">+</button>
        </div>

        <button
            v-else
            class="add"
            @click="onAddToCart?.()"
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item {
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 18px;
  padding: 16px 0;
  border-bottom: 1px solid #222;
}

.thumb img {
  width: 140px;
  height: 160px;
  object-fit: contain;
  background: #111;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
}

.title {
  margin: 0;
  font-size: 18px;
}

.sub {
  margin: 6px 0 0;
  opacity: 0.7;
  font-size: 13px;
}

.remove {
  opacity: 0.7;
  text-decoration: underline;
}

.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.price {
  font-weight: 700;
}

.qty {
  display: flex;
  align-items: center;
  gap: 10px;
}

.qbtn {
  width: 34px;
  height: 34px;
  background: #151515;
  border: 1px solid #2a2a2a;
}

.qval {
  min-width: 26px;
  text-align: center;
}

.add {
  padding: 10px 14px;
  background: #fff;
  color: #000;
  font-weight: 700;
}
</style>
