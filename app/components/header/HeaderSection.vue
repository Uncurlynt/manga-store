<script setup lang="ts">
import Navigation from './Navigation.vue'
import NavigationButtons from './NavigationButtons.vue'
import { useSearch } from '~/composables/useSearch'

const { query, setQuery, clearQuery } = useSearch()
</script>

<template>
  <header class="header">
    <div class="banner">
      Free shipping on orders over £25
    </div>

    <div class="top">
      <NuxtLink to="/" class="logo">MANGA.</NuxtLink>

      <div class="search">
        <input
            type="text"
            placeholder="Search by title or author"
            :value="query"
            @input="setQuery(($event.target as HTMLInputElement).value)"
        />
        <button v-if="query" class="clear" @click="clearQuery">✕</button>
      </div>

      <NavigationButtons />
    </div>

    <Navigation />
  </header>
</template>

<style scoped>
.header {
  background: #0e0e0e;
  border-bottom: 1px solid #222;
}

.banner {
  background: #111;
  text-align: center;
  font-size: 13px;
  padding: 6px 0;
}

.top {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  padding: 16px 40px;
}

.logo {
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 2px;
}

.search {
  position: relative;
}

.search input {
  width: 100%;
  padding: 10px 36px 10px 12px;
  background: #1a1a1a;
  border: 1px solid #333;
  color: #fff;
}

.clear {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 14px;
}
</style>
