<script setup>
defineOptions({ name: 'Essay' })
</script>

<template>
  <UContainer>
    <div class="py-2">
      <UAlert
        v-for="i in 10"
        icon="i-heroicons-command-line"
        description="You can add components to your app using the cli."
        title="Heads up!"
        class="my-2"
      />
    </div>
  </UContainer>
</template>

<style scoped></style>