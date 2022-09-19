<template>
<div>
  <span>{{quote.name}}</span>
  <span>{{quote.value}}</span>
  <span :class="classObject">{{quote.change}}</span>
  <span :class="classObject">{{percentChange}}</span>
</div>
</template>

<script>
export default {
  name: 'Stock',
  props: {
    quote: Object
  },
  computed: {
    percentChange: function() {
      return Math.round(this.quote.change / this.quote.value * 10000) / 100
    },
    classObject() {
      return {
        green: this.quote.change > 0,
        red: this.quote.change < 0,
      }
    }
  }
}
</script>

<style>
.green {
  color: green
}
.red {
  color: red;
}
span {
  margin: 0px 10px;
}
</style>