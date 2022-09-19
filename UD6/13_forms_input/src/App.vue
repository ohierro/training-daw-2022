<template>
  <div id="app">
    Nombre: <input @change="changeText" :value="nombre" />
    Apellido: <input v-model="surname" />
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      nombre: 'texto',
      surname: 'value'
    }
  },
  methods: {
    changeText(e) {
      this.nombre = e.target.value
    }
  }
}
</script>