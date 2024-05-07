<script setup lang="ts">
const selected = useState('selected', () => false)
const colorMode = useColorMode()
const switchTheme = (e: MouseEvent) => {
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
        <li><NuxtLink to="/">指引</NuxtLink></li>
        <UDivider orientation="vertical" />
        <li><NuxtLink to="/essay">随笔</NuxtLink></li>
        <UDivider orientation="vertical" />
        <li><NuxtLink to="/about">关于</NuxtLink></li>
      </ul>
      <UToggle
        v-model="selected"
        on-icon="i-heroicons-moon-20-solid"
        off-icon="i-heroicons-sun-20-solid"
        @click="(e: MouseEvent) => switchTheme(e)"
      />
      <UIcon name="i-heroicons-light-bulb" class="w-6 h-6" />
    </div>
  </UContainer>
  <slot></slot>
</template>

<style>
::view-transition-new(root),
::view-transition-old(root) {
  animation: none;
}
.dark::view-transition-old(root) {
  z-index: 9999;
}
</style>