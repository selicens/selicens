<script setup>
  const route = useRoute()
  console.log(route)
  const slug = route.params.slug
</script>

<template>
  <IContainer>
    <IMarkdown :name="slug[0]"/>
  </IContainer>
</template>

<style src="../themes/index.css">

</style>
