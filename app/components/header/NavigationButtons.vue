<script setup lang="ts">
import { useCart } from '~/composables/useCart'
import { useWishlist } from '~/composables/useWishlist'

const { totalItems } = useCart()
const { wishlist } = useWishlist()
</script>

<template>
  <div class="buttons">
    <button title="Account">[profile]</button>

    <NuxtLink to="/wishlist" class="icon">
      [lkes]
      <span v-if="wishlist.length" class="count">
        {{ wishlist.length }}
      </span>
    </NuxtLink>

    <NuxtLink to="/cart" class="icon">
      [cart]
      <span v-if="totalItems" class="count">
        {{ totalItems }}
      </span>
    </NuxtLink>
  </div>
</template>

<style scoped>
.buttons {
  display: flex;
  justify-content: flex-end;
  gap: 16px;
}

.icon {
  position: relative;
}

.count {
  position: absolute;
  top: -6px;
  right: -8px;
  background: #e50914;
  color: #fff;
  font-size: 11px;
  padding: 2px 6px;
  border-radius: 999px;
}
</style>
