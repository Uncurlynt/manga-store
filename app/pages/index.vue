<script setup lang="ts">
import { MangaData } from '~/data/manga-data'
import { useCart } from '~/composables/useCart'
import { useWishlist } from '~/composables/useWishlist'

const { addToCart, totalItems } = useCart()
const { toggleWishlist, wishlist } = useWishlist()
</script>

<template>
  <div style="padding: 40px">
    <h1>Manga Store</h1>

    <p>Cart items: {{ totalItems }}</p>
    <p>Wishlist items: {{ wishlist.length }}</p>


    <button @click="addToCart(MangaData[0])">
      Add to Cart
    </button>

    <button @click="toggleWishlist(MangaData[0])">
      Toggle Wishlist
    </button>
  </div>
</template>
