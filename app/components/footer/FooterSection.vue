<script setup lang="ts">
import FooterDetails from './FooterDetails.vue'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <FooterDetails />

    <div class="bottom">
      <p>© {{ year }} Manga Store</p>
      <a
          href="https://github.com/Uncurlynt/manga-store"
          target="_blank"
          rel="noopener"
      >
        GitHub
      </a>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid #222;
  padding: 40px;
}

.bottom {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  opacity: 0.7;
}
</style>
