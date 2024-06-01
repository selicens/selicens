<script setup>
const dynamic = ref({
  top: '50%',
  left: '50%'
})
const onMousemove = (e) => {
  const { clientX, clientY } = e
  const rect = document.getElementById('__nuxt').getBoundingClientRect()
  dynamic.value = {
    top: `${clientY - rect.top - 50}px`,
    left: `${clientX - rect.left - 50}px`
  }
}
onMounted(() => {
  document.addEventListener('mousemove', onMousemove)
})
onUnmounted(() => {
  document.removeEventListener('mousemove', onMousemove)
})
</script>
<template>
  <div>
    <ClientOnly fallback-tag="div">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      <template #fallback>
        <div style="
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
        ">
          <div class="page-loading-warp">
            <div class="ant-spin ant-spin-lg ant-spin-spinning">
              <span class="ant-spin-dot ant-spin-dot-spin">
                <i class="ant-spin-dot-item"></i>
                <i class="ant-spin-dot-item"></i>
                <i class="ant-spin-dot-item"></i>
                <i class="ant-spin-dot-item"></i>
              </span>
            </div>
          </div>
          <div class="loading-title">
            正在加载资源
          </div>
          <div class="loading-sub-title">
            初次加载资源可能需要较多时间 请耐心等待
          </div>
          <div class="image-bg"></div>
        </div>
      </template>
    </ClientOnly>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
::view-transition-new(root),
::view-transition-old(root) {
  animation: none;
}
.dark::view-transition-old(root) {
  z-index: 9999;
}

.ant-spin {
  position: absolute;
  display: none;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  color: #1890ff;
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  text-align: center;
  list-style: none;
  opacity: 0;
  -webkit-transition: -webkit-transform 0.3s
    cubic-bezier(0.78, 0.14, 0.15, 0.86);
  transition: -webkit-transform 0.3s
    cubic-bezier(0.78, 0.14, 0.15, 0.86);
  transition: transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
  transition: transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86),
    -webkit-transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
  -webkit-font-feature-settings: "tnum";
  font-feature-settings: "tnum";
}

.ant-spin-spinning {
  position: static;
  display: inline-block;
  opacity: 1;
}

.ant-spin-dot {
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  font-size: 20px;
}

.ant-spin-dot-item {
  position: absolute;
  display: block;
  width: 9px;
  height: 9px;
  background-color: #1890ff;
  border-radius: 100%;
  -webkit-transform: scale(0.75);
  -ms-transform: scale(0.75);
  transform: scale(0.75);
  -webkit-transform-origin: 50% 50%;
  -ms-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  opacity: 0.3;
  -webkit-animation: antSpinMove 1s infinite linear alternate;
  animation: antSpinMove 1s infinite linear alternate;
}

.ant-spin-dot-item:nth-child(1) {
  top: 0;
  left: 0;
}

.ant-spin-dot-item:nth-child(2) {
  top: 0;
  right: 0;
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}

.ant-spin-dot-item:nth-child(3) {
  right: 0;
  bottom: 0;
  -webkit-animation-delay: 0.8s;
  animation-delay: 0.8s;
}

.ant-spin-dot-item:nth-child(4) {
  bottom: 0;
  left: 0;
  -webkit-animation-delay: 1.2s;
  animation-delay: 1.2s;
}

.ant-spin-dot-spin {
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-animation: antRotate 1.2s infinite linear;
  animation: antRotate 1.2s infinite linear;
}

.ant-spin-lg .ant-spin-dot {
  width: 32px;
  height: 32px;
  font-size: 32px;
}

.ant-spin-lg .ant-spin-dot i {
  width: 14px;
  height: 14px;
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .ant-spin-blur {
    background: #fff;
    opacity: 0.5;
  }
}

@-webkit-keyframes antSpinMove {
  to {
    opacity: 1;
  }
}

@keyframes antSpinMove {
  to {
    opacity: 1;
  }
}

@-webkit-keyframes antRotate {
  to {
    -webkit-transform: rotate(405deg);
    transform: rotate(405deg);
  }
}

@keyframes antRotate {
  to {
    -webkit-transform: rotate(405deg);
    transform: rotate(405deg);
  }
}

.image-bg {
    position: absolute;
    top: v-bind('dynamic.top');
    left: v-bind('dynamic.left');
    border-radius: 50%;
    width: 192px;
    height: 192px;
    background-image: linear-gradient( -45deg, #41b88380 30%, #35495e80 );
    filter: blur(72px);
    transform: translate(-50%,-50%)
}

@media (min-width: 640px) {
    .image-bg {
        width:256px;
        height: 256px
    }
}

@media (min-width: 960px) {
    .image-bg {
        width:320px;
        height: 320px
    }
}
</style>
