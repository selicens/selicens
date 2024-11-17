<script setup>
  import { defineWebComponent } from '~/utils/webcomponent'
  const { $md } = useNuxtApp()
  const { data } = useFetch('/api/article', {
    method: 'post',
    body: { name: 'css-basic' }
  })
  const mdRender = ref('')
  watch(data, (newData) => {
    if (newData?.mdContent) {
      mdRender.value = $md(newData.mdContent);
    }
  });
  defineOptions({ name: 'Demo2' })

</script>

<template>
   <div v-html="mdRender"></div>
</template>

<style scoped>
</style>
