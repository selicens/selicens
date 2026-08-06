<script setup>
  const route = useRoute()
  const slug = route.params.slug
  const path = '/' + (Array.isArray(slug) ? slug.join('/') : slug)
  const { data: doc } = await useAsyncData('slug-' + path, () =>
    queryCollection('content').path(path).first()
  )
</script>

<template>
  <IContainer>
    <ContentRenderer v-if="doc" :value="doc" />
  </IContainer>
</template>
