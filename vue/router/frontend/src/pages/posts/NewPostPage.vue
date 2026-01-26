<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const title = ref('')
const router = useRouter()

async function doSubmit() {
    const res = await fetch('http://localhost:3000/posts', { 
        method: 'POST', 
        body: JSON.stringify({ 
            title: title.value,
            views: 0
        })
    })

    router.push('/posts')
}

</script>

<template>
<form>
    <input type="text" placeholder="Título" v-model="title" />
    <button type="submit" @click.prevent="doSubmit">Añadir</button>
</form>
</template>