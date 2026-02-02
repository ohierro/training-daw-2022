<script setup lang="ts">
import { useUsersStore } from '@/stores/UsersStore';
import { ref } from 'vue';
const data = ref({
    name: '',
    lastName: '',
    phoneNumber: ''
})

const usersStore = useUsersStore()

function addUser() {
    usersStore.addUser({
        id: 4,
        name: data.value.name,
        lastName: data.value.lastName,
        birthDate: new Date(),
        phoneNumber: data.value.phoneNumber
    })
}
</script>

<template>
    <div>
        <div>Name: <input type="text" v-model="data.name"></div>
        <div>LastName: <input type="text" v-model="data.lastName"></div>
        <div>PhoneNumber: <input type="test" v-model="data.phoneNumber"></div>
        <button @click="addUser">Add user</button>
    </div>    
</template>