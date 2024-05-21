<script setup>
defineOptions({ name: 'Essay' })
const router = useRouter()
</script>

<template>
  <UContainer>
    <div class="py-2">
      <UAlert
        icon="i-heroicons-command-line"
        description="css基础"
        title="css"
        class="my-2"
        @click="() => router.push('/css-basic')"
      />
    </div>
  </UContainer>
</template>

<style scoped></style>