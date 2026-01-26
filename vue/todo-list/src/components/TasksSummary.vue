<script setup lang="ts">
import type { TaskDto } from '@/core/task.dto';
import { computed, watch } from 'vue';

//defineProps(['tasks'])
const props = defineProps<{
    tasks: TaskDto[]
}>()

const finishedTasks = computed( () => props.tasks.filter((task) => task.enable).length )

watch(props.tasks, (newValue, oldValue) => {
    console.log(`Ahora tenemos ${newValue.length} elementos`);
})
</script>


<template>
    {{ finishedTasks }}/{{ tasks.length }} tareas terminadas
</template>