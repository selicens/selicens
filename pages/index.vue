<script setup>
defineOptions({ name: 'PageIndex' })
useSeoMeta({
  title: 'selicens',
  ogTitle: 'selicens',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
const route = useRoute()
const selected = useState('selected', () => false)
const colorMode = useColorMode()
const switchTheme = (e) => {
  selected.value = !selected.value
  const transition = document.startViewTransition(() => {
    colorMode.preference = selected.value ? 'dark' : 'light'
  })
  transition.ready.then(() => {
    // 获取鼠标点击的位置
    const { clientX, clientY } = e
    // 计算半径，以鼠标点击的位置为圆心，到四个角的距离中最大的那个作为半径
    const radius = Math.hypot(
      Math.max(clientX, window.innerWidth - clientX),
      Math.max(clientY, window.innerHeight - clientY)
    )
    const clipPath = [
      `circle(0% at ${clientX}px ${clientY}px)`,
      `circle(${radius}px at ${clientX}px ${clientY}px)`
    ]
    // 自定义动画
    document.documentElement.animate(
      {
        // 如果要切换到暗色主题，我们在过渡的时候从半径 100% 的圆开始，到 0% 的圆结束
        clipPath: selected.value ? clipPath.reverse() : clipPath
      },
      {
        duration: 500,
        // 如果要切换到暗色主题，我们应该裁剪 view-transition-old(root) 的内容
        pseudoElement: selected.value
          ? '::view-transition-old(root)'
          : '::view-transition-new(root)'
      }
    )
  })
}
</script>

<template>
  <UContainer>
    <div style="display: flex; gap: 10px 10px;">
      <ul style="display: flex; gap: 10px;">
        <li>指引</li>
        <UDivider orientation="vertical" />
        <li>随笔</li>
        <UDivider orientation="vertical" />
        <li>关于</li>
        <UDivider orientation="vertical" />
        <li>友链</li>
      </ul>
      <UToggle
        v-model="selected"
        on-icon="i-heroicons-moon-20-solid"
        off-icon="i-heroicons-sun-20-solid"
        @click="e => switchTheme(e)"
      />
      <UIcon name="i-heroicons-light-bulb" class="w-6 h-6" />
    </div>
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <p class="text">Selicens</p>
      <P class="tagline">不知名开源爱好者、野路子编程农民工</P>
      <div style="display: flex; flex-direction: row; gap: 10px;">
        <UButton>button</UButton>
        <UButton>button</UButton>
      </div>
    </div>
    <div style="display: flex; align-content: space-between; flex-wrap: wrap; gap: 20px 20px; margin: 10px 0;">
      <UCard v-for="item in 6" style="width: calc(33.33% - 2 * 10px);">
        <UAvatar icon="i-heroicons-photo" size="sm" />
        <h5>title</h5>
        <h5>content</h5>
      </UCard>
    </div>
  </UContainer>
</template>

<style>
.name {
  line-height: 64px;
  font-size: 56px;
}
.text {
  line-height: 64px;
  font-size: 56px;
  background: -webkit-linear-gradient(315deg, rgb(66, 211, 146) 25%, rgb(100, 126, 255));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.tagline {
  line-height: 36px;
  font-size: 24px;
}
::view-transition-new(root),
::view-transition-old(root) {
  animation: none;
}
.dark::view-transition-old(root) {
  z-index: 9999;
}
</style>