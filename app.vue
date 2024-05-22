<script setup>

</script>
<template>
  <div>
    <a-config-provider>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </a-config-provider>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
::view-transition-new(root),
::view-transition-old(root) {
  animation: none;
}
.dark::view-transition-old(root) {
  z-index: 9999;
}
</style>
