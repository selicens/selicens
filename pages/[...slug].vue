<script setup>
  const route = useRoute()
  console.log(route)
  const slug = route.params.slug
</script>

<template>
  <div>
    <IMarkdown :name="slug[0]"/>
  </div>
</template>

<style scoped></style>
