<script setup lang="ts">
defineOptions({ name: 'ICard' })
</script>

<template>
  <div class="container">
    <div class="content"></div>
    <UCard v-bind="$attrs">
      <slot />
    </UCard>
  </div>
</template>

<style scoped>
.container {
  border: 2px solid transparent;
  border-image: linear-gradient(45deg, #ff9a9e, #fad0c4) 1;
  border-image-slice: 30;
  position: relative;
}
.content {
  position: absolute;
  width: 100px; /* 内部元素的宽度 */
  height: 5px; /* 内部元素的高度 */
  border-radius: 10%; /* 将内部元素设置为圆形 */
  background-color: #94d0c4; /* 内部元素的背景色 */
  animation: borderAnimation 4s linear infinite; /* 围绕边框旋转的动画 */
  animation-iteration-count: 1;
}
@keyframes borderAnimation {
  0% {
    transform: translateX(0);
  }
  20% {
    transform: translateX(100%);
  }
  40% {
    transform: translateY(500%);
  }
  60% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>