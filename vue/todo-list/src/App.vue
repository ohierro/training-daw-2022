<script setup lang="ts">
import { ref } from 'vue';
import InputTask from './components/InputTask.vue';
import TasksList from './components/TasksList.vue';
import TasksSummary from './components/TasksSummary.vue';
import type { TaskDto } from './core/task.dto';

// const tasksList = ref(['one', 'two', 'three'])
const tasksList = ref([] as TaskDto[])
const taskId = ref(0)

tasksList.value.push({
  id: 0,
  name: 'Terminar aplicación de vue',
  enable: true,
  creationDate: new Date(),
  duration: 60
})

function addTask(taskName: string) {
  // tasksList.value.push(taskName)
  taskId.value++

  const myTask = {
    id: taskId.value,
    name: taskName,
    creationDate: new Date(),
    enable: false,
    duration: 60
  }

  tasksList.value.push(myTask)
}

function deleteTask(id: number) {
  // search id and delete
  tasksList.value = tasksList.value.filter((task) => task.id !== id)
}
</script>

<template>
  <InputTask @addTask="addTask"></InputTask>
  <TasksList 
    :tasks="tasksList"
    @delete-task="deleteTask"
  >
  </TasksList>
  <TasksSummary :tasks="tasksList"></TasksSummary>
</template>

<style scoped></style>
