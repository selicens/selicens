<script setup>
  defineOptions({ name: 'demo3', inheritAttrs: true })
  const attrs = useAttrs()
  console.log(attrs)
</script>

<template>
  <div>
    <slot></slot>
  </div>
</template>

<style scoped></style>
