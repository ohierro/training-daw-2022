<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';

const counterStore = useCounterStore()

</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="counterStore.reset">Reset</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
