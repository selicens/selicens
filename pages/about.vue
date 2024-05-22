<script setup>
defineOptions({ name: 'About' })
const { data } = await useAsyncData('about', () => queryContent('/about').findOne())
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
</script>

<template>
  <ContentDoc path="/about" >
      <template #doc="doc">
        <ContentRenderer :value="doc" />
      </template>
    </ContentDoc>
</template>

<style scoped></style>