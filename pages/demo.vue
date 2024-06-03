<script setup>
defineOptions({ name: 'Demo' })
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
  <div class="box">
    <div class="image-bg"></div>
  </div>
</template>

<style scoped>
.box {
  position: relative;
  height: 100%;
  width: 100%;
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
    transform: translate(-50%,-50%);
    z-index: -9999;
    overflow: hidden;
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