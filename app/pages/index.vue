<script setup>
defineOptions({ name: 'PageIndex' })
useSeoMeta({
  title: 'selicens',
  ogTitle: 'selicens',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
  keywords: '开源,编程,技术博客',
  author: 'selicens',
  robots: 'index,follow'
})
const router = useRouter()
</script>

<template>
  <IContainer>
    <div class="flex flex-col gap-4" id="content">
      <div class="flex">
        <div>
          <p class="text-4xl typewriter">Selicens</p>
          <p class="text-3xl typewriter">不知名开源爱好者、野路子编程农民工</p>
        </div>
      </div>
      <div class="flex gap-2">
        <a-button>
          <NuxtLink to="/essay" aria-label="查看随笔">随笔</NuxtLink>
        </a-button>
        <a-button type="primary">
          <NuxtLink to="/about">关于</NuxtLink>
        </a-button>
      </div>
    </div>
    <div class="grid gap-x-8 gap-y-8 my-8 grid-cols-3">
      <ICard @click="() => router.push('/demo')">
        <a-avatar size="sm" />
        <h4>Nuxt加载时悬浮发光动效复刻</h4>
        <h5>通过鼠标滑动在background展示光晕</h5>
      </ICard>
      <ICard @click="() => router.push('/demo2')">
        <a-avatar size="sm" />
        <h4>拟态组件</h4>
        <h5>preview</h5>
      </ICard>
      <ICard @click="() => router.push('/demo3')">
        <a-avatar size="sm" />
        <h4>NuxtPress</h4>
        <h5>preview</h5>
      </ICard>
      <ICard @click="() => router.push('/demo4')">
        <a-avatar size="sm" />
        <h4>ErrorPage</h4>
        <h5>preview</h5>
      </ICard>
      <ICard v-for="item in 2">
        <a-avatar size="sm" />
        <h4>title</h4>
        <h5>content</h5>
      </ICard>
    </div>
    <div class="text-center">Copyright © 2024 by selicens</div>
  </IContainer>
</template>

<style>
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink {
  from, to {
    border-color: transparent;
  }
}

.typewriter {
  overflow: hidden;
  background: -webkit-linear-gradient(315deg, rgb(66, 211, 146) 25%, rgb(100, 126, 255));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: typing 3.5s steps(30, end), blink 0.5s step-end infinite;
  white-space: nowrap;
}
</style>
