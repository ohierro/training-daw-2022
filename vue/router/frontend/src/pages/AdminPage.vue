<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()

function goToUsers() {
    router.push('/admin/users')
}

</script>

<template>
    Soy el admin

    <RouterLink to="/admin/users">Users list</RouterLink>


    <button @click="goToUsers">Listado de usuarios</button>
</template>