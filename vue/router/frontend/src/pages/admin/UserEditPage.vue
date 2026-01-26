<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()



</script>

<template>
    Editando usuario {{  route.params.id }}
</template>