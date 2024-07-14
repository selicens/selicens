<script setup>
import { defineWebComponent } from '~/utils/webcomponent';
defineOptions({ name: 'Demo2' })
import { message } from 'ant-design-vue';
const [messageApi, contextHolder] = message.useMessage();
const info = () => {
messageApi.info('Hello, Ant Design Vue!');
};
</script>

<template>
   <context-holder />
   <a-button @click="info">Click me</a-button>
</template>

<style scoped>

</style>
