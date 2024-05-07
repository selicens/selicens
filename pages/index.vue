<script setup>
defineOptions({ name: 'PageIndex' })
useSeoMeta({
  title: 'selicens',
  ogTitle: 'selicens',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
const route = useRoute()
</script>

<template>
  <UContainer>
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <p class="text">Selicens</p>
      <P class="tagline">不知名开源爱好者、野路子编程农民工</P>
      <div style="display: flex; flex-direction: row; gap: 10px;">
        <UButton>button</UButton>
        <UButton>button</UButton>
      </div>
    </div>
    <div style="display: flex; align-content: space-between; flex-wrap: wrap; gap: 20px 20px; margin: 10px 0;">
      <UCard v-for="item in 6" style="width: calc(33.33% - 2 * 10px);">
        <UAvatar icon="i-heroicons-photo" size="sm" />
        <h5>title</h5>
        <h5>content</h5>
      </UCard>
    </div>
  </UContainer>
</template>

<style>
.name {
  line-height: 64px;
  font-size: 56px;
}
.text {
  line-height: 64px;
  font-size: 56px;
  background: -webkit-linear-gradient(315deg, rgb(66, 211, 146) 25%, rgb(100, 126, 255));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.tagline {
  line-height: 36px;
  font-size: 24px;
}
</style>