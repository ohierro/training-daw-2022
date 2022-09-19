<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Quote></Quote>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";

export default {
  name: 'App',
  components: {
    Quote
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
</style>
