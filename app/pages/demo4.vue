<script setup lang="ts">
import type { NuxtError } from '#app'

const error = reactive({
    statusCode: 500,
    statusMessage: 'Internal Server Error'
})

const errorMap = ['403', '404', '500']
const currentSelect = ref(errorMap[0])
watch(currentSelect, (newSelect) => {
    error.statusCode = newSelect
    error.statusMessage = `${newSelect} error`
})
</script>

<template>
  <div>
    <a-segmented v-model:value="currentSelect" :options="errorMap" />
    <a-result :status="error.statusCode" :title="error.statusCode" :sub-title="error.statusMessage">
    <template #extra>
      <a-button type="primary">
    <NuxtLink to="/">Go back home</NuxtLink></a-button>
    </template>
  </a-result>
  </div>
</template>
