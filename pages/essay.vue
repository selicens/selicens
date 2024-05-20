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
        @click="() => router.push('/:css-basic')"
      />
      <UAlert
        v-for="i in 9"
        icon="i-heroicons-command-line"
        description="You can add components to your app using the cli."
        title="Heads up!"
        class="my-2"
      />
    </div>
  </UContainer>
</template>

<style scoped></style>