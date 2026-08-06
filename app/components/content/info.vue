<script setup lang="ts">
  defineOptions({ name: 'info' })
</script>

<template>
  <a-alert type="info">
    <template #title>
      <slot />
    </template>
  </a-alert>
</template>
