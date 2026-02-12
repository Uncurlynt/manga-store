<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
}>()
</script>

<template>
  <section class="list">
    <div class="head">
      <h1 class="title">{{ title }}</h1>
      <p v-if="subtitle" class="sub">{{ subtitle }}</p>
    </div>

    <div class="body">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.list {
  padding: 50px 80px;
}

.head {
  margin-bottom: 22px;
}

.title {
  margin: 0 0 8px;
  font-size: 42px;
}

.sub {
  margin: 0;
  opacity: 0.75;
}
</style>
