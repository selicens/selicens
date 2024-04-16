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
        on-icon="i-heroicons-check-20-solid"
        off-icon="i-heroicons-x-mark-20-solid"
      />
      <UIcon name="i-heroicons-light-bulb" class="w-6 h-6" />
    </div>
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <h1>Logo</h1>
      <p class="text">Title</p>
      <P class="tagline">Description</P>
      <div style="display: flex; flex-direction: row; gap: 10px;">
        <UButton>button</UButton>
        <UButton>button</UButton>
        <UButton>button</UButton>
        <UButton>button</UButton>
      </div>
    </div>
    <div style="display: flex; align-content: space-between; flex-wrap: wrap; gap: 20px 20px; margin: 10px 0;">
      <UCard v-for="item in 6" style="width: calc(33.33% - 2 * 10px);">
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