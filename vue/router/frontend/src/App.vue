<script setup lang="ts"></script>

<template>
  <h1>You did it!</h1>

  <RouterView />

  <div>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/admin">Go to Admin area</RouterLink>
  </div>
</template>

<style scoped></style>
