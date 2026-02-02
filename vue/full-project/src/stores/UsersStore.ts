import { defineStore } from "pinia";
import type { UserDto } from "./dtos/UserDto";
import { ref } from 'vue'

export const useUsersStore = defineStore('users', () => {
    const users = ref([] as UserDto[])

    users.value.push({
        id: 0,
        name: 'john',
        lastName: 'foo',
        birthDate: new Date(),
        phoneNumber: '555-123123'
    })

    async function fetchData() {
        const res = await fetch('http://localhost:3000/users')
        if (!res.ok) {
            // show error
        }

        const data = await res.json()

        users.value = data
    }

    async function addUser(user: UserDto) {
        const res = await fetch('http://localhost:3000/users', { 
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        
        if (!res.ok) {
            // show error
        }

        const userFromBackend = await res.json()

        users.value.push(userFromBackend)
    }

    return { users, fetchData, addUser }
})