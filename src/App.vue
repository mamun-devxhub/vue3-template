<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div>
    <AppHeader />
    <main class="app-container"><RouterView /></main>
    <AppFooter />
  </div>
</template>

<style scoped></style>
