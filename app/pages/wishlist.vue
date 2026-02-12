<script setup lang="ts">
import ItemList from '~/components/cart/ItemList.vue'
import ItemInList from '~/components/cart/ItemInList.vue'
import { useWishlist } from '~/composables/useWishlist'
import { useCart } from '~/composables/useCart'

const { wishlist, removeFromWishlist } = useWishlist()
const { addToCart } = useCart()
</script>

<template>
  <ItemList
      title="Wishlist"
      :subtitle="wishlist.length ? `Items: ${wishlist.length}` : 'Your wishlist is empty'"
  >
    <div v-if="!wishlist.length" class="empty">
      <p>No items in wishlist.</p>
      <NuxtLink to="/products" class="link">Go to shop</NuxtLink>
    </div>

    <div v-else class="items">
      <ItemInList
          v-for="m in wishlist"
          :key="m.id"
          mode="wishlist"
          :manga="m"
          :on-remove="() => removeFromWishlist(m.id)"
          :on-add-to-cart="() => addToCart(m)"
      />
    </div>
  </ItemList>
</template>

<style scoped>
.items {
  display: flex;
  flex-direction: column;
}

.empty {
  padding: 14px 0;
  opacity: 0.8;
}

.link {
  display: inline-block;
  margin-top: 8px;
  text-decoration: underline;
}
</style>
