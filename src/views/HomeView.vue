<script setup lang="ts">
import FontAwesome from '../components/check/FontAwesome.vue'
import VueToastification from '../components/check/VueToastification.vue'
import PiniaCounter from '../components/check/PiniaCounter.vue'
import VueUse from '../components/check/VueUse.vue'
</script>

<template>
  <div class="home mt-5 mb-5">
    <h1>This is Home Page</h1>
    <div>
      <TButton>TButton</TButton>
      <MButton>MButton</MButton>
    </div>
    <FontAwesome class="mt-5" />
    <button class="mt-5">This is Button</button>
    <VueToastification class="mt-5" />
    <PiniaCounter class="mt-5" />
    <VueUse class="mt-5" />
  </div>
</template>
<style scoped>
.mt-5 {
  margin-top: 20px;
}
.mb-5 {
  margin-bottom: 20px;
}
</style>
