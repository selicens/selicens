<script setup>
  defineOptions({ name: 'IMarkdown' })
  const props = defineProps({
    name: {
      type: String,
      required: true
    }
  })
  const { $md } = useNuxtApp()
  const { data } = useFetch('/api/article', {
    method: 'post',
    body: { name: props.name }
  })
  const mdRender = ref('')
  watch(data, (newData) => {
    if (newData?.mdContent) {
      mdRender.value = $md(newData.mdContent);
    }
  });
</script>

<template>
  <div v-html="mdRender" />
</template>

<style scoped></style>
