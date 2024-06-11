<script setup>
import { defineWebComponent } from '~/utils/webcomponent';
defineOptions({ name: 'Demo2' })
const previewVisible = ref(false)
const currentIndex = ref(0)
const custom = ref()
const handleToggleVisible = () => {
  // previewVisible.value = !previewVisible.value
  custom.value.style.color = 'red'
}
const images = [
  "https://aliyuncdn.antdv.com/vue.png",
  "https://aliyuncdn.antdv.com/logo.png",
  "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
]
defineWebComponent('custom-component', `<div>xx</div>`)
</script>

<template>
  <ClientOnly>
    <a-image
      :width="200"
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    />
    <a-button @click="handleToggleVisible">toggle</a-button>
    <a-image-preview-group
      :preview="{
        visible: previewVisible,
        current: currentIndex,
        onVisibleChange: (vis) => { previewVisible = vis }
      }"
    >
      <a-image v-for="(src, index) in images" :key="index" :src="src" :width="200" />
    </a-image-preview-group>
    <custom-component ref="custom" some-attribute="10"></custom-component>
  </ClientOnly>
</template>

<style scoped>
.red {
  color: red
}
</style>