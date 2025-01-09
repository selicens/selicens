<script setup>
  defineOptions({ name: 'IMarkdown' })
  const props = defineProps({
    name: {
      type: String,
      required: true
    }
  })
  const mdRender = ref()
  const nuxtApp = useNuxtApp()
  // import.meta.glob默认是懒加载和返回文件路径，所以需要设置as: 'raw'来获取文件内容，eager: true来提前加载
  const markdownModules = import.meta.glob(`~/content/*.md`, { as: 'raw', eager: true })
  for (const module in markdownModules) {
    const name = module.split('/').pop().split('.').shift()
    if (name === props.name) {
      mdRender.value = nuxtApp.$md(markdownModules[module])
      console.log(module, name)
    }
  }
</script>

<template>
  <div v-html="mdRender" />
</template>

<style scoped></style>
