# CSS

[[toc]]

## box-sizing

```css
* {
  width: 100px;
  box-sizing: content-box;
}
// 默认值，边框与内边距都会增加到元素宽度中, 内容区 = 100px + border + padding
* {
  width: 100px;
  box-sizing: border-box;
}
// 设置的边框和内边距的值是包含在 width 内的, 内容区 = 100px - (border + padding)
```

```css
// 行元素与行快元素并列某一个不能垂直居中时
* {
  vertical-align: middle;
}
```

::: details  

- baseline（默认值）：元素的基线与父元素的基线对齐.  
- sub：元素的基线与父元素的下标基线对齐.  
- super：元素的基线与父元素的上标基线对齐.  
- top：元素的顶部与父元素的顶部对齐.  
- text-top：元素的顶部与父元素的文本顶部对齐.  
- middle：元素的中部与父元素的基线加上 x-height 的一半对齐.  
- bottom：元素的底部与父元素的底部对齐.  
- text-bottom：元素的底部与父元素的文本底部对齐.  
- length：元素的基线相对于父元素的基线上移或下移指定的长度.  
- %：元素的基线相对于父元素的基线上移或下移指定百分比的高度.  
:::

::: warning
这是个警告
:::
