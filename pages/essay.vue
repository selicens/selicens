<script setup>
defineOptions({ name: 'Essay' })
const router = useRouter()
</script>

<template>
  <IContainer class="py-2">
    <a-card
      class="my-2"
      @click="() => router.push('/css-basic')"
    >
      css
    </a-card>
    <a-card
      class="my-2"
      @click="() => router.push('/miniprogram-publish')"
    >
      微信小程序发布
    </a-card>
    <a-card
      class="my-2"
      @click="() => router.push('/miniprogram-local-images')"
    >
      微信小程序使用本地图片
    </a-card>
  </IContainer>
</template>

<style scoped></style>
