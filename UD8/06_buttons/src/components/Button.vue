<template>
<span>
  <span :class="[{ active: isActive, inactive: !isActive }, 'button']">Ejemplo de div</span>
  <span :class="[classObject, 'button']">Ejemplo de div</span>
</span>
</template>

<script>
export default {
  name: 'Button',
  props: {
    active: Boolean
  },
  computed: {
    isActive: function() {
      return this.active
    },
    classObject() {
      return {
        isActive: true
      }
    }
  }
}
</script>

<style>
.active {
  background-color: green
}
.inactive {
  background-color: brown;
}
.button {
  padding: 15px;
}

.button:hover  {
  background-color: lightblue;
}

.button:active  {
  background-color: blueviolet;
}
</style>