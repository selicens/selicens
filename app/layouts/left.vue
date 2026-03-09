<script setup lang="ts">
import { useSwitchTheme } from '../utils/switchTheme'
import { LayoutOutlined } from "@antdv-next/icons";
const selected = ref(false)

const [switchTheme, setTheme] = useSwitchTheme(selected)
</script>

<template>
  <a-config-provider :theme="{algorithm: setTheme}">
    <div class="flex">
      <div class="flex flex-col gap-2">
      <div class="flex flex-col gap-2">
        <a-button type="link"><NuxtLink to="/">指引</NuxtLink></a-button>
        <a-divider type="vertical" />
        <a-button type="link"><NuxtLink to="/essay">随笔</NuxtLink></a-button>
        <a-divider type="vertical" />
        <a-button type="link"><NuxtLink to="/about">关于</NuxtLink></a-button>
      </div>
      <a-switch
        v-model:checked="selected"
        checked-children="☀️"
        un-checked-children="🌙"
        @click="switchTheme"
      />
      <div class="align-center flex">
        <LayoutOutlined class="w-6 h-6" @click="() => setPageLayout('default')" />
      </div>
    </div>
    <slot />
    </div>
  </a-config-provider>
</template>
