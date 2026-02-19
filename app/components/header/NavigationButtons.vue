<script setup lang="ts">
import { useCart } from '~/composables/useCart'
import { useWishlist } from '~/composables/useWishlist'

const { totalItems } = useCart()
const { wishlist } = useWishlist()
</script>

<template>
  <div class="buttons">
    <button class="iconbtn" title="Account" aria-label="Account">
      <i class="fa-solid fa-user"></i>
    </button>

    <NuxtLink to="/wishlist" class="icon" aria-label="Wishlist">
      <i class="fa-solid fa-heart"></i>
      <span v-if="wishlist.length" class="count">
        {{ wishlist.length }}
      </span>
    </NuxtLink>

    <NuxtLink to="/cart" class="icon" aria-label="Cart">
      <i class="fa-solid fa-cart-shopping"></i>
      <span v-if="totalItems" class="count">
        {{ totalItems }}
      </span>
    </NuxtLink>
  </div>
</template>

<style scoped src="~/assets/styles/navigation-buttons.css"></style>
