<script setup>
  const route = useRoute()
  console.log(route)
  const path = route?.path.replace('/', '')
  console.log(path)
</script>

<template>
  <div>
    <IMarkdown :name="path"/>
  </div>
</template>

<style scoped></style>
