<template>
  <div id="app">
    <h2>TO-DO List</h2>
    <input type="text" v-model="taskName" />
    <button @click="addTask">Add</button>
    <div id="content">
      <Task
        v-for="task in tasks" :key="task.id"
        :id="task.id"
        :name="task.name"
        :done="task.done"
        @mark="onMark"
      />
    </div>
  </div>
</template>

<script>
import Task from "./components/Task.vue"

export default {
  name: 'App',
  components: {
    Task
  },
  data() {
    return {
      taskName: '',
      tasks: [
        { id: 0, name: 'Hacer los deberes', done: false },
        { id: 1, name: 'Preparar exámen de asignatura :)', done: true },
      ]
    }
  },
  methods: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
