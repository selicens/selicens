<script setup>
defineOptions({ name: 'Demo2' })
const show = ref(false)
const transform = () => {
  show.value = !show.value
}
// 基类定义
    class BaseElement extends HTMLElement {
      constructor(templateContent) {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(templateContent.cloneNode(true));
      }

      connectedCallback() {
        console.log(`${this.tagName.toLowerCase()} added to page.`);
      }

      disconnectedCallback() {
        console.log(`${this.tagName.toLowerCase()} removed from page.`);
      }

      attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Attribute: ${name} changed from ${oldValue} to ${newValue}`);
      }

      static get observedAttributes() {
        return ['some-attribute'];
      }
    }

    // 注册函数
    function defineCustomElement(name, templateString) {
      const template = document.createElement('template');
      template.innerHTML = templateString;

      class CustomElement extends BaseElement {
        constructor() {
          super(template.content);
        }
      }

      customElements.define(name, CustomElement);
    }

    // 定义和注册具体的自定义元素
    defineCustomElement('my-component', `
      <style>
        :host {
          display: block;
          border: 1px solid #000;
          padding: 16px;
          border-radius: 8px;
          background-color: #f9f9f9;
        }
      </style>
      <div>
        <h2>My Component</h2>
        <p>This is my custom element.</p>
      </div>
    `);

    defineCustomElement('another-component', `
      <style>
        :host {
          display: block;
          border: 1px solid #00f;
          padding: 16px;
          border-radius: 8px;
          background-color: #e0f7fa;
        }
      </style>
      <div>
        <h2>Another Component</h2>
        <p>This is another custom element.</p>
      </div>
    `);
</script>

<template>
  <a-button @click="transform">switch</a-button>
  <a-tooltip title="title">
    <span class="red" v-show="show">tooltip-hover</span>
  </a-tooltip>
  <br>
  <a-popover>
    <template #content> content </template>
    <span class="red" v-if="show">popover-hover</span>
  </a-popover>
  <my-component></my-component>
  <another-component></another-component>
</template>

<style scoped>
.red {
  color: red
}
</style>