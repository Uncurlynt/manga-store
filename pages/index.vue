<script setup lang="ts">
import { MangaData } from '~/data/manga-data'
</script>

<template>
  <div style="padding: 40px">
    <h1>Manga Store</h1>
    <p>Products loaded: {{ MangaData.length }}</p>
  </div>
</template>
