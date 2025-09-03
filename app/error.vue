<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <div>
    <a-result :status="error.statusCode" :title="error.statusCode" :sub-title="error.statusMessage">
    <template #extra>
      <a-button type="primary">
    <NuxtLink to="/">Go back home</NuxtLink></a-button>
    </template>
  </a-result>
  </div>
</template>
