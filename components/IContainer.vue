<script setup>
defineOptions({ name: 'IContainer' })
</script>

<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped>
  .container {
    min-width: 600px;
    max-width: 1100px;
    margin: 0 auto;
    padding: 10px;
  }
</style>