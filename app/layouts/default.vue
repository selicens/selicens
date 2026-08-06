<script setup lang="ts">
  import { useSwitchTheme } from '../utils/switchTheme'
  import { LayoutOutlined } from "@antdv-next/icons";

  const selected = ref(false)
  const [switchTheme, setTheme] = useSwitchTheme(selected)
  const items = [
    { label: '指引', key: '/', path: '/' },
    { label: '随笔', key: '/essay', path: '/essay' },
    { label: '关于', key: '/about', path: '/about' },
  ]
  const selectedKeys = ref(['/'])
  watch(selectedKeys, (newVal) => {
    console.log('selectedKeys', newVal)
  })
  const router = useRouter()
  const handleClick = (e: any) => {
    router.push(e.key)
  }
</script>

<template>
  <a-config-provider :theme="{
    algorithm: setTheme,
  }">
    <a-layout>
      <a-layout-header class="flex items-center bg-white dark:bg-black gap-4">
        <a-menu :items="items" mode="horizontal" :selected-keys="selectedKeys" @click="handleClick"></a-menu>
        <div>
          <a-switch v-model:checked="selected" checked-children="☀️" un-checked-children="🌙"
            @mouseup="e => switchTheme(e)" />
        </div>
        <div>
          <LayoutOutlined class="w-6 h-6" @click="() => setPageLayout('left')" />
        </div>
      </a-layout-header>
    </a-layout>
    <slot></slot>
  </a-config-provider>
</template>
