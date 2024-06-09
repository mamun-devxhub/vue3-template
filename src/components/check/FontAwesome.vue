<script setup lang="ts"></script>

<template>
  <div>
    <h1>FontAwesome Test</h1>
    <fa-icon :icon="['fas', 'times']" class="fa-2xl" />
    <fa-icon :icon="['far', 'moon']" class="fa-xl" />
    <fa-icon :icon="['fab', 'facebook']" class="fa-xl" />
    <fa-icon :icon="['fas', 'spinner']" class="fa-xl fa-spin" />
  </div>
</template>

<style scoped></style>
