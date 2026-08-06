<script setup lang="ts">
  defineOptions({ name: 'danger' })
</script>

<template>
  <a-alert type="error">
    <template #title>
      <slot />
    </template>
  </a-alert>
</template>
