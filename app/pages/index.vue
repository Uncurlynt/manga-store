<script setup lang="ts">
import MangaCarousel from '~/components/home/MangaCarousel.vue'
import FeaturedCollection from '~/components/home/FeaturedCollection.vue'
import SpecialOffers from '~/components/home/SpecialOffers.vue'
</script>

<template>
  <div class="home">
    <MangaCarousel />

    <FeaturedCollection />

    <SpecialOffers />
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding-bottom: 100px;
}
</style>
