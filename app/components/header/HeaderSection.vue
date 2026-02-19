<script setup lang="ts">
import Navigation from './Navigation.vue'
import NavigationButtons from './NavigationButtons.vue'
import { useSearch } from '~/composables/useSearch'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const { query, setQuery, clearQuery } = useSearch()
</script>

<template>
  <header class="header">
    <div class="banner">
      Free shipping on orders over ¬£25
    </div>

    <div class="top">
      <NuxtLink to="/" class="logo" aria-label="Manga Store">
        <span class="logo-top">Manga</span>
        <span class="logo-bottom">Store</span>
      </NuxtLink>

      <div class="search">
        <div class="search-inner">
          <input
              type="text"
              placeholder="Search by title or author"
              :value="query"
              @input="setQuery(($event.target as HTMLInputElement).value)"
          />

          <button
              v-if="query"
              class="clear"
              @click="clearQuery"
              aria-label="Clear search"
              type="button"
          >
            <FontAwesomeIcon :icon="faXmark" />
          </button>
        </div>
      </div>

      <NavigationButtons />
    </div>

    <Navigation />
  </header>
</template>

<style scoped src="~/assets/styles/header-section.css"></style>
