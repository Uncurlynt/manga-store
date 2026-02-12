<script setup lang="ts">
import ItemList from '~/components/cart/ItemList.vue'
import ItemInList from '~/components/cart/ItemInList.vue'
import {useCart} from '~/composables/useCart'

const {
  cart,
  changeQuantity,
  removeFromCart,
  clearCart,
  subtotal,
  discount,
  shipping,
  totalPrice,
  totalItems
} = useCart()

const proceedToCheckout = () => {
  if (!totalItems.value) return
  alert('Карты не принимаем')
  clearCart()
  window.scrollTo({top: 0, behavior: 'smooth'})
}
</script>

<template>
  <ItemList
      title="Cart"
      :subtitle="totalItems ? `Items: ${totalItems}` : 'Your cart is empty'"
  >
    <div v-if="!cart.length" class="empty">
      <p>No items in cart.</p>
      <NuxtLink to="/products" class="link">Go to shop</NuxtLink>
    </div>

    <div v-else class="grid">
      <div class="items">
        <ItemInList
            v-for="item in cart"
            :key="item.manga.id"
            mode="cart"
            :manga="item.manga"
            :quantity="item.quantity"
            :on-inc="() => changeQuantity(item.manga.id, item.quantity + 1)"
            :on-dec="() => changeQuantity(item.manga.id, item.quantity - 1)"
            :on-remove="() => removeFromCart(item.manga.id)"
        />
      </div>

      <aside class="summary">
        <h2>Summary</h2>

        <div class="row">
          <span>Subtotal</span>
          <span>£{{ subtotal.toFixed(2) }}</span>
        </div>

        <div class="row" v-if="discount > 0">
          <span>Discount (20% for 3+ items)</span>
          <span>£{{ discount.toFixed(2) }}</span>
        </div>

        <div class="row">
          <span>Shipping</span>
          <span>
            <template v-if="shipping === 0">FREE</template>
            <template v-else>£{{ shipping.toFixed(2) }}</template>
          </span>
        </div>

        <div class="divider"/>

        <div class="row total">
          <span>Total</span>
          <span>£{{ totalPrice.toFixed(2) }}</span>
        </div>

        <button
            class="checkout"
            :disabled="!totalItems"
            @click="proceedToCheckout"
        >
          Proceed to Checkout
        </button>

        <p class="hint">
          Free shipping over £25. Otherwise £3.99.
        </p>
      </aside>
    </div>
  </ItemList>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 40px;
  align-items: start;
}

.summary {
  padding: 18px;
  background: #111;
  border: 1px solid #222;
}

.summary h2 {
  margin: 0 0 14px;
}

.row {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 10px 0;
  border-bottom: 1px dashed #222;
  opacity: 0.9;
}

.divider {
  height: 1px;
  background: #222;
  margin: 16px 0;
}

.total {
  font-weight: 800;
  border-bottom: none;
}

.checkout {
  width: 100%;
  margin-top: 14px;
  padding: 12px 14px;
  background: #fff;
  color: #000;
  font-weight: 800;
}

.checkout:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.hint {
  margin: 12px 0 0;
  opacity: 0.7;
  font-size: 13px;
  line-height: 1.5;
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
