<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router';

const router = useRouter()

const users = [
    { id: 0, name: 'John' },
    { id: 1, name: 'Mary' },
    { id: 2, name: 'Brian' },
]

function goBack() {
    router.go(-1)
}

function edit(id: number) {
    router.push(`/admin/users/${id}`)
}
</script>

<template>
    Listado de usuarios del admin

    <div v-for="user in users">
        {{ user.name }} <button @click="edit(user.id)">editar</button>
    </div>

    <button @click="goBack">Back</button>
</template>