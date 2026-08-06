<script setup lang="ts">
  defineOptions({ name: 'details' })
  defineProps<{
    title: string
  }>()
</script>

<template>
  <details>
    <summary>{{ title }}</summary>
    <a-card>
      <slot />
    </a-card>
  </details>
</template>
