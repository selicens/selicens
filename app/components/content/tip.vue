<script setup lang="ts">
  defineOptions({ name: 'tip' })
</script>

<template>
  <a-alert type="success">
    <template #title>
      <slot />
    </template>
  </a-alert>
</template>
