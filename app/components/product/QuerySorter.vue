<script setup lang="ts">
const props = defineProps<{
  sort: string
  perPage: number
}>()

const emit = defineEmits<{
  (e: 'update:sort', value: string): void
  (e: 'update:perPage', value: number): void
}>()

const onSortChange = (event: Event) => {
  const target = event.target as HTMLSelectElement
  emit('update:sort', target.value)
}

const onPerPageChange = (event: Event) => {
  const target = event.target as HTMLSelectElement
  emit('update:perPage', Number(target.value))
}
</script>

<template>
  <div class="sorter">
    <select :value="sort" @change="onSortChange">
      <option value="recommended">Recommended</option>
      <option value="price-asc">Price Low → High</option>
      <option value="price-desc">Price High → Low</option>
      <option value="az">A → Z</option>
      <option value="za">Z → A</option>
    </select>

    <select :value="perPage" @change="onPerPageChange">
      <option :value="9">9</option>
      <option :value="15">15</option>
      <option :value="30">30</option>
    </select>
  </div>
</template>
