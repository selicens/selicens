<script setup lang="ts">
const selected = ref(false)
const colorMode = useColorMode()
const switchTheme = (e: MouseEvent) => {
  transitionAnimation(e, selected, colorMode)
}
</script>

<template>
  <UContainer>
    <div class="flex gap-2">
      <ul class="flex gap-2">
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
      <UIcon name="i-heroicons-adjustments-vertical" class="w-6 h-6" @click="() => setPageLayout('left')" />
    </div>
  </UContainer>
  <slot></slot>
</template>
