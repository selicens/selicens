<script setup lang="ts">

defineOptions({ name: 'ICard' })
const slotsName = ref(['default', 'actions', 'cover', 'customTab', 'extra', 'tabBarExtraContent', 'title'])
</script>

<template>
  <div class="container">
    <div class="content"></div>
    <a-card v-bind="$attrs">
      <template #[item]="data" v-for="item in slotsName" :key="item">
        <slot :name="item" v-bind="data || {}" />
      </template>
    </a-card>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  transition: margin-top 0.3s ease-in-out;
  cursor: pointer;
}
.container:hover {
  margin-top: -10px;
}
.content {
  position: absolute;
  width: 5px; /* 内部元素的宽度 */
  height: 5px; /* 内部元素的高度 */
  border-radius: 50%; /* 将内部元素设置为圆形 */
  background-color: #94d0c4; /* 内部元素的背景色 */
  z-index: 9999;
  animation: borderAnimation 4s linear infinite; /* 围绕边框旋转的动画 */
  animation-iteration-count: 10;
}

@keyframes borderAnimation {
  0% {
    top: 0;
    left: 0;
  }

  25% {
    top: 0;
    left: 100%;
    transform: translateX(-100%);
  }

  50% {
    top: 100%;
    left: 100%;
    transform: translate(-100%, -100%);
  }

  75% {
    top: 100%;
    left: 0;
    transform: translateY(-100%);
  }
  
  100% {
    top: 0;
    left: 0;
  }
}
.ant-card:hover::before {  
  content: "";  
  position: absolute;  
  top: 0;  
  left: 0;  
  right: 0;  
  bottom: 0;  
  z-index: -1;  
  pointer-events: none;  
  margin: -2px; /* 根据边框宽度调整 */  
  border-radius: 8px;
  background: linear-gradient(315deg, rgb(66, 211, 146) 25%, rgb(100, 126, 255));  
}
</style>
