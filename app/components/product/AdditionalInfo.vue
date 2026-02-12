<script setup lang="ts">
const props = defineProps<{
  title: string
  longText: string
  variant?: 'split' | 'stack'
}>()

const variant = computed(() => props.variant ?? 'split')

const paragraphs = computed(() => {
  const text = (props.longText || '').trim()
  if (!text) return []
  const blocks = text
      .split(/\n\s*\n/g)
      .map(s => s.trim())
      .filter(Boolean)

  return blocks.length ? blocks : [text]
})
</script>

<template>
  <section class="info">
    <h3 class="heading">{{ title }}</h3>

    <div v-if="variant === 'split'" class="split">
      <p v-for="(p, idx) in paragraphs" :key="idx" class="p">
        {{ p }}
      </p>
    </div>

    <div v-else class="stack">
      <p v-for="(p, idx) in paragraphs" :key="idx" class="p">
        {{ p }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.info {
  border-top: 1px solid #222;
  padding-top: 24px;
  margin-top: 24px;
}

.heading {
  margin: 0 0 12px;
  font-size: 14px;
  letter-spacing: 1px;
  opacity: 0.75;
}

.split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px 28px;
}

.stack {
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
}

.p {
  margin: 0;
  opacity: 0.85;
  line-height: 1.7;
}
</style>
