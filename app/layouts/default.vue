<script setup lang="ts">
import { useSwitchTheme } from '../utils/switchTheme'
import { LayoutOutlined } from "@antdv-next/icons";

const selected = ref(false)
  const [switchTheme, setTheme] = useSwitchTheme(selected)
</script>

<template>
  <a-config-provider
    :theme="{
      algorithm: setTheme,
    }">
    <IContainer>
      <div class="flex gap-2">
        <div class="flex">
          <a-button type="link"><NuxtLink to="/">指引</NuxtLink></a-button>
          <div class="line-height-8">
            <a-divider type="vertical" />
          </div>
          <a-button type="link"><NuxtLink to="/essay">随笔</NuxtLink></a-button>
          <div class="line-height-8">
            <a-divider type="vertical" />
          </div>
          <a-button type="link"><NuxtLink to="/about">关于</NuxtLink></a-button>
        </div>
        <div class="line-height-7">
          <a-switch
            v-model:checked="selected"
            checked-children="☀️"
            un-checked-children="🌙"
            @mouseup="e => switchTheme(e)"
          />
        </div>
        <div class="line-height-7">
          <LayoutOutlined class="w-6 h-6" @click="() => setPageLayout('left')" />
        </div>
      </div>
    </IContainer>
    <slot></slot>
  </a-config-provider>
</template>

<style scoped>
ul, li {
  margin: 0;
  padding: 0;
  list-style: none;
}
a {
  text-decoration: none;
}
</style>
