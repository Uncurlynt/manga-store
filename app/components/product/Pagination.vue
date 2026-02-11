<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  page: number
  total: number
}>()

const emit = defineEmits<{
  (e: 'change', value: number): void
}>()

const pages = computed(() => {
  const result: (number | string)[] = []

  for (let i = 1; i <= props.total; i++) {
    if (
        i === 1 ||
        i === props.total ||
        Math.abs(i - props.page) <= 1
    ) {
      result.push(i)
    } else if (result[result.length - 1] !== '...') {
      result.push('...')
    }
  }

  return result
})
</script>

<template>
  <div class="pagination">
    <button
        v-for="p in pages"
        :key="p"
        :disabled="p === '...'"
        :class="{ active: p === props.page }"
        @click="p !== '...' && emit('change', p as number)"
    >
      {{ p }}
    </button>
  </div>
</template>

<style scoped>
.pagination {
  display: flex;
  gap: 8px;
  justify-content: center;
}

.active {
  background: #fff;
  color: #000;
}
</style>
