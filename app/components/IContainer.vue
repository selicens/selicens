<script setup>
  defineOptions({ name: 'IContainer' })
</script>

<template>
  <a-card>
    <slot></slot>
  </a-card>
</template>

<style scoped>
  .container {
    min-width: 600px;
    max-width: 1100px;
    margin: 0 auto;
    padding: 10px;
  }
</style>
