<script setup>
const route = useRoute()
</script>

<template>
  <main>
    <UContainer>
      <ContentDoc :path="route.path.replace(/:/, '')">
        <template #not-found>没有内容</template>
        <template #empty>Loading...</template>
      </ContentDoc>
    </UContainer>
  </main>
</template>

<style scoped></style>