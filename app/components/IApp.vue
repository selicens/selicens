<script setup lang="ts">
  import { App } from 'antdv-next';

  const { message } = App.useApp();

  const showMessage = () => {
    message.info({
      content: 'message',
      duration: 0
    });
  }
  defineOptions({ name: 'IApp' })
</script>

<template>
  <a-button type="primary" @click="showMessage">Open message</a-button>
</template>

<style scoped></style>
