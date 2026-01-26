<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['addTask'])

const inputValue = ref('test')

function addTask() {
    emit('addTask', inputValue.value)
    inputValue.value = ''
}

</script>

<template>
    <input v-model="inputValue" type="text">
    <button @click="addTask">Add</button>
</template>