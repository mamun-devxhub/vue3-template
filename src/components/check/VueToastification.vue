<script setup lang="ts">
import { useToast } from 'vue-toastification'
const toast = useToast()

const openToastification = () => {
  toast.clear()
  toast.success('This is Default Success Toast Notification')
}
const openToastification2 = () => {
  toast.clear()
  toast.error('This is Default Error Toast Notification')
}
const openToastification3 = () => {
  toast.clear()
  toast('This is Custon BG Color Toast Notification', {
    toastClassName: 'toasted-bg-success'
  })
}
</script>
<template>
  <div class="Vue-Toastification">
    <h1>Vue-Toastification Test</h1>
    <div class="">
      <button @click="openToastification" class="button">Open Toastification</button>
      <button @click="openToastification2" class="button">Open Toastification 2</button>
      <button @click="openToastification3" class="button">Open Toastification 3</button>
    </div>
  </div>
</template>

<style>
.toasted-bg-info {
  background-color: #5bc0de !important;
}
.toasted-bg-success {
  background-color: #8db230 !important;
}
.toasted-bg-error {
  background-color: #a22a2a !important;
}
.toasted-bg-warning {
  background-color: #e0ad1f !important;
}

.button {
  display: inline-block;
  padding: 0.5em 1em;
  font-size: 1em;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #007bff;
  border: 1px solid #007bff;
  border-radius: 0.25em;
  cursor: pointer;
  margin-right: 10px;
}
</style>
