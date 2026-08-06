<script setup>
  defineOptions({ name: 'About' })
  const { data: doc } = await useAsyncData('about', () =>
    queryCollection('content').path('/about').first()
  )
</script>

<template>
  <IContainer>
    <ContentRenderer v-if="doc" :value="doc" :prose="true" />
  </IContainer>
</template>
