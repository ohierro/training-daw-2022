<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';
import { useUsersStore } from '@/stores/UsersStore';

const store = useCounterStore()
const usersStore = useUsersStore()
</script>

<template>
    <div>
      <h1>This is a counter page</h1>
      <div>Valor del contador: {{ store.count }} - {{  store.doubleCount }}</div>
      <button @click="store.increment">Add</button>
      <button @click="store.multiply">Multiply</button>
      <button @click="usersStore.fetchData">Load users from server</button>
      <h2>Usuarios</h2>
      <div v-for="user in usersStore.users">
        <span>{{ user.name }} {{ user.lastName }}</span>
        <span>( {{ user.phoneNumber  }})</span>
      </div>
    </div>
  </template>