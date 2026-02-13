<template>
  <nav class="nav">
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/products">Shop All</NuxtLink>
    <NuxtLink to="/best-sellers">Best Sellers</NuxtLink>
    <NuxtLink to="/new-arrivals">New Arrivals</NuxtLink>
  </nav>
</template>

<style scoped>
.nav {
  display: flex;
  gap: 24px;
  padding: 12px 40px;
  border-top: 1px solid #222;
}

.nav a {
  font-size: 14px;
  opacity: 0.8;
}

.nav a.router-link-active {
  opacity: 1;
  font-weight: 600;
}
</style>
