<script setup>
defineOptions({ name: 'CssBasic' })
</script>

<template>
  <UContainer>
    <h1>box-sizing</h1>
    <pre>
      * {
        width: 100px;
        box-sizing: content-box;
      }
      // 默认值，边框与内边距都会增加到元素宽度中, 内容区 = 100px + border + padding
      * {
        width: 100px;
        box-sizing: border-box;
      }
      // 设置的边框和内边距的值是包含在 width 内的, 内容区 = 100px - (border + padding)
    </pre>
  </UContainer>
</template>

<style scoped></style>