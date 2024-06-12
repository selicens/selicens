const BaseClass = (
  typeof HTMLElement !== 'undefined' ? HTMLElement : class {}
) as typeof HTMLElement

// 基类定义
class BaseElement extends BaseClass {
  constructor(templateContent: DocumentFragment) {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(templateContent.cloneNode(true));
  }

  connectedCallback() {
    // 每当元素添加到文档中时调用
    console.log(`${this.tagName.toLowerCase()} added to page.`);
  }

  disconnectedCallback() {
    // 每当元素从文档中移除时调用
    console.log(`${this.tagName.toLowerCase()} removed from page.`);
  }

  adoptedCallback() {
    // 每当元素被移动到新文档时调用
    console.log(`${this.tagName.toLowerCase()} moved to another document.`);
  }

  attributeChangedCallback(name: string, oldValue: unknown, newValue: unknown) {
    // 在属性更改、添加、移除或替换时调用
    console.log(`Attribute: ${name} changed from ${oldValue} to ${newValue}`);
  }

  static get observedAttributes() {
    // 返回一个数组，包含要观察的属性
    return ['some-attribute'];
  }
}
    
// 注册函数
export function defineWebComponent(name:string, templateString: string): void {
  const template = document.createElement('template');
  template.innerHTML = templateString;

  class CustomElement extends BaseElement {
    constructor() {
      super(template.content);
    }
  }

  customElements.define(name, CustomElement);
}