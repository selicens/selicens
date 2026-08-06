<script setup>
  defineOptions({ name: 'Essay' })
  const router = useRouter()
</script>

<template>
  <IContainer class="min-h-dvh">
    <div class="flex flex-col gap-4 mt-0 mb-0 ml-auto mr-auto">
      <ICard @click="() => router.push('/css-basic')">
        css
      </ICard>
      <ICard @click="() => router.push('/miniprogram-publish')">
        微信小程序发布
      </ICard>
      <ICard @click="() => router.push('/miniprogram-local-images')">
        微信小程序使用本地图片
      </ICard>
    </div>
  </IContainer>
</template>
