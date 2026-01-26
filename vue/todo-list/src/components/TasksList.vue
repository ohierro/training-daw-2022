<script setup lang="ts">
import type { TaskDto } from '@/core/task.dto';
import { onBeforeUpdate, onMounted } from 'vue';

const emit = defineEmits(['deleteTask'])
// defineProps(['tasks'])
defineProps<{
    tasks: TaskDto[]
}>()

onMounted(() => console.log('TasksList onMounted'))

onBeforeUpdate(() => console.log('On before update') )

function deleteTask(id: number) {
    emit('deleteTask', id)
}
</script>


<template>
    <ul v-if="tasks.length > 0">
        <li v-for="task in tasks" :class="{ done: task.enable }">
            <input type="checkbox" v-model="task.enable"/>
            [{{ task.id }}] ({{ task.duration }}) {{  task.name }}  
            <button @click="deleteTask(task.id)">Borrar</button>          
        </li>
    </ul>
    <div v-else>No hay tareas pendientes ;)</div>
</template>

<style>
.done {
    color: lightgrey;
    text-decoration: line-through;
}
</style>