<script setup>
defineOptions({ name: 'About' })
const { data } = await useAsyncData('about', () => queryContent('/about').findOne())
</script>

<template>
  about
  <NuxtLink to="/">home</NuxtLink>
  <ContentRenderer :value="data" />
</template>

<style scoped></style>