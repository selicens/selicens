<script setup lang="ts">
  defineOptions({ name: 'ICard' })
  const slotsName = ref(['default', 'actions', 'cover', 'customTab', 'extra', 'tabBarExtraContent', 'title'])
</script>

<template>
  <a-border-beam>
    <a-card v-bind="$attrs">
      <template #[item]="data" v-for="item in slotsName" :key="item">
        <slot :name="item" v-bind="data || {}" />
      </template>
    </a-card>
  </a-border-beam>
</template>
