<script setup>
defineOptions({ name: 'PageIndex' })
const route = useRoute()

const links = [{
  label: '指引',
  // to: `${route.path.startsWith('/dev') ? '/dev' : ''}/components/horizontal-navigation`
}, {
  label: '随笔',
  // to: '/components/command-palette'
}, {
  label: '关于',
  // to: '/components/command-palette'
}, {
  label: '友情链接',
  // to: '/components/command-palette'
  }]
const items = [
  [{
    label: 'Profile'
  }]
]

const open = ref(true)

defineShortcuts({
  o: () => open.value = !open.value
})
</script>

<template>
  <UContainer>
    <div style="display: flex;">
      <UHorizontalNavigation :links="links" class="border-gray-200 dark:border-gray-800">
        <template #default="{ link }">
          <template v-if="link.label === '友情链接'">
            <UDropdown v-model:open="open" :items="items" :popper="{ placement: 'bottom-start' }">
              <UButton color="white" label="友情链接" trailing-icon="i-heroicons-chevron-down-20-solid" />
            </UDropdown>
          </template>
        </template>
      </UHorizontalNavigation>
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