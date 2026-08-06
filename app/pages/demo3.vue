<script setup>
  defineOptions({ name: 'demo3' })
  const { data: doc } = await useAsyncData('demo3-nuxt-press', () =>
    queryCollection('content').path('/nuxt-press').first()
  )
</script>

<template>
  <IContainer>
    <ContentRenderer v-if="doc" :value="doc" :prose="true" />
  </IContainer>
</template>
