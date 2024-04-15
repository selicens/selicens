<script setup>
defineOptions({ name: 'PageIndex' })
const route = useRoute()

const open = ref(true)

defineShortcuts({
  o: () => open.value = !open.value
})
</script>

<template>
  <UContainer>
    <div style="display: flex;">
      <ul style="display: flex;">
        <li>指引</li>
        <UDivider orientation="vertical" />
        <li>随笔</li>
        <UDivider orientation="vertical" />
        <li>关于</li>
        <UDivider orientation="vertical" />
        <li>友链</li>
      </ul>
      <UToggle
        on-icon="i-heroicons-check-20-solid"
        off-icon="i-heroicons-x-mark-20-solid"
      />
      <UIcon name="i-heroicons-light-bulb" class="w-6 h-6" />
    </div>
    <div style="margin: 10px;">
      <h1>Logo</h1>
      <p class="text">Title</p>
      <P class="tagline">Description</P>
      <div>
        <UButton>button</UButton>
        <UButton>button</UButton>
        <UButton>button</UButton>
        <UButton>button</UButton>
      </div>
    </div>
    <div style="display: flex; align-content: space-between; flex-wrap: wrap;">
      <UCard v-for="item in 6" style="width: 30%; margin: 10px;">
        <UAvatar icon="i-heroicons-photo" size="sm" />
        <h5>title</h5>
        <p>content</p>
      </UCard>
    </div>
  </UContainer>
</template>

<style scoped>
.name {
  line-height: 64px;
  font-size: 56px;
}
.text {
  line-height: 64px;
  font-size: 56px;
}
.tagline {
  line-height: 36px;
  font-size: 24px;
}
</style>