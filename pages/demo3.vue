<script setup>
  defineOptions({ name: 'demo3', inheritAttrs: true })
  const attrs = useAttrs()
  console.log(attrs)
</script>

<template>
  <IContainer>
    <IMarkdown :name="nuxt-press" />
  </IContainer>
</template>

<style scoped></style>
