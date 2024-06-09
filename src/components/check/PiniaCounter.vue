<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useCounterStore } from '../../stores/counter'

const { increment, setName } = useCounterStore()
const { count, doubleCount, name } = storeToRefs(useCounterStore())
const inputName = ref('')
</script>

<template>
  <div>
    <h1>Pinia Test</h1>
    <h1>Name: {{ name }}</h1>
    <p>Counter: {{ count }}</p>
    <p>Double Counter: {{ doubleCount }}</p>

    <input
      v-model="inputName"
      type="text"
      name="name"
      id="name"
      class="border border-gray-800 px-3 py-1.5"
    />

    <button @click="setName(inputName)" class="button">Set Name</button>

    <button @click="increment" class="button">Increment</button>
  </div>
</template>

<style scoped>
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
