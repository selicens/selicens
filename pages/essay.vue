<script setup>
defineOptions({ name: 'Essay' })
const router = useRouter()
</script>

<template>
  <div class="py-2">
    <a-card
      class="my-2"
      @click="() => router.push('/:css-basic')"
    >
      css
    </a-card>
  </div>
</template>

<style scoped></style>