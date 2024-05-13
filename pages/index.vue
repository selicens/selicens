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
    <div class="flex flex-col gap-4" id="content">
      <div class="flex">
        <div>
          <p class="text-4xl typewriter">Selicens</p>
          <P class="text-3xl typewriter">不知名开源爱好者、野路子编程农民工</P>
        </div>
        <div class="image-bg"></div>
      </div>
      <div class="flex gap-2">
        <UButton color="sky" variant="outline">
          <NuxtLink to="/essay">随笔</NuxtLink>
        </UButton>
        <UButton color="pink" variant="outline">
          <NuxtLink to="/about">关于</NuxtLink>
        </UButton>
      </div>
    </div>
    <div class="grid gap-x-8 gap-y-8 my-8 grid-cols-3">
      <UCard v-for="item in 6" style="width: 100%;">
        <UAvatar icon="i-heroicons-photo" size="sm" />
        <h5>title</h5>
        <h5>content</h5>
      </UCard>
    </div>
  </UContainer>
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

.image-bg {
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    width: 192px;
    height: 192px;
    background-image: linear-gradient( -45deg, #41b88380 30%, #35495e80 );
    filter: blur(72px);
    transform: translate(-50%,-50%)
}

@media (min-width: 640px) {
    .image-bg {
        width:256px;
        height: 256px
    }
}

@media (min-width: 960px) {
    .image-bg {
        width:320px;
        height: 320px
    }
}

.image-src {
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: 192px;
    max-height: 192px;
    /* transform:translate(-50%,-50%); */
}

@media (min-width: 640px) {
    .image-src {
        max-width:256px;
        max-height: 256px
    }
}

@media (min-width: 960px) {
    .image-src {
        max-width:320px;
        max-height: 320px
    }
}
</style>