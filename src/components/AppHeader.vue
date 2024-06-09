<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <nav class="app-container">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/register">Register</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: white;
  padding: 1em;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
}

nav {
  display: flex;
  justify-content: end;
}

nav a {
  color: #333;
  text-decoration: none;
  padding: 0.5em 1em;
  transition:
    background-color 0.3s ease-in-out,
    color 0.3s ease-in-out;
}

nav a:hover {
  background-color: #f0f0f0;
  border-radius: 5px;
}

nav a.active {
  background-color: #e0e0e0;
  border-radius: 5px;
}

main {
  padding: 2em;
}
</style>
