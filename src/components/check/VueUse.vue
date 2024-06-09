<script setup lang="ts">
import { ref } from 'vue'
import { useMouse, onClickOutside } from '@vueuse/core'
import { useToast } from 'vue-toastification'

const toast = useToast()
const { x, y } = useMouse()

const el = ref(null)

function close(data: any) {
  console.log('Outside Clicked', data)
  toast.clear()
  toast.success('Outside clicked Success of the Red Box')
}

onClickOutside(el, close)
</script>

<template>
  <div>
    <h1>VueUse Test</h1>
    <p>Mouse position: {{ x }}x{{ y }}</p>
    <div class="outside mt-5" ref="el">Click Outside of Me</div>
  </div>
</template>

<style scoped>
.outside {
  width: 200px;
  height: 100px;
  background-color: red;
  color: white;
  text-align: center;
  line-height: 100px;
  cursor: pointer;
}
.mt-5 {
  margin-top: 20px;
}
.mb-5 {
  margin-bottom: 20px;
}
</style>
