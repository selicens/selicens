<script setup lang="ts">
  defineOptions({ name: 'warning' })
</script>

<template>
  <a-alert type="warning">
    <template #title>
      <slot />
    </template>
  </a-alert>
</template>
