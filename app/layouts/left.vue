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
  const router = useRouter()
  const handleClick = (e: any) => {
    router.push(e.key)
  }
</script>

<template>
  <a-config-provider :theme="{ algorithm: setTheme }">
    <a-layout>
      <a-layout-sider class="min-h-vdh bg-white dark:bg-black flex flex-row gap-4 items-center">
        <a-menu :items="items" mode="vertical" @click="handleClick"></a-menu>
        <a-switch v-model:checked="selected" checked-children="☀️" un-checked-children="🌙" @click="switchTheme" />
        <div class="align-center flex">
          <LayoutOutlined class="w-6 h-6" @click="() => setPageLayout('default')" />
        </div>
      </a-layout-sider>
      <slot />
    </a-layout>
  </a-config-provider>
</template>
