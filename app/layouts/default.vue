<script setup lang="ts">
import HeaderSection from '~/components/header/HeaderSection.vue'
import FooterSection from '~/components/footer/FooterSection.vue'
</script>

<template>
  <div class="layout">
    <HeaderSection />
    <main class="content">
      <slot />
    </main>
    <FooterSection />
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
}
</style>
