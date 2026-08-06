<template>
  <div>
    <ClientOnly fallback-tag="div">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      <template #fallback>
        <ILoading />
      </template>
    </ClientOnly>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
::view-transition-new(root),
::view-transition-old(root) {
  animation: none;
}
.dark::view-transition-old(root) {
  z-index: 9999;
}

body {
  background-color: #fff;
  color: rgba(0,0,0,0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}

/* Inline code — `code` 标签的样式 */
code:not(pre code) {
  font-family: 'Cascadia Code', 'Fira Code', 'JetBrains Mono', 'Consolas', monospace;
  font-size: 0.9em;
  background-color: #f0f0f0;
  color: #e83e8c;
  padding: 2px 6px;
  border-radius: 4px;
  word-break: break-word;
}
.dark-mode code:not(pre code) {
  background-color: #3a3a3a;
  color: #ff79c6;
}
.sepia-mode code:not(pre code) {
  background-color: #e6d5b0;
  color: #a0522d;
}

/* Blockquote */
blockquote {
  margin: 1em 0;
  padding: 0.5em 1em;
  border-left: 4px solid #d0d0d0;
  background-color: #f8f8f8;
  color: #666;
}
.dark-mode blockquote {
  border-left-color: #444;
  background-color: #1a1a1a;
  color: #999;
}
.sepia-mode blockquote {
  border-left-color: #c4a574;
  background-color: #efe0c4;
  color: #6b5b3e;
}

/* Pre (code block) */
pre {
  margin: 1em 0;
  padding: 12px 16px;
  background-color: #f5f5f5;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  overflow-x: auto;
  font-family: 'Cascadia Code', 'Fira Code', 'JetBrains Mono', 'Consolas', monospace;
  font-size: 0.875em;
  line-height: 1.6;
}
.dark-mode pre {
  background-color: #1e1e1e;
  border-color: #333;
}
.sepia-mode pre {
  background-color: #efe0c4;
  border-color: #d4c4a0;
}
pre code {
  background: transparent;
  padding: 0;
  border-radius: 0;
  font-size: inherit;
  color: inherit;
}

/* Table */
table {
  margin: 1em 0;
  width: 100%;
  border-collapse: collapse;
  overflow-x: auto;
}
thead {
  background-color: #f5f5f5;
  border-bottom: 2px solid #d0d0d0;
}
.dark-mode thead {
  background-color: #222;
  border-bottom-color: #444;
}
.sepia-mode thead {
  background-color: #efe0c4;
  border-bottom-color: #c4a574;
}
tr {
  border-bottom: 1px solid #e0e0e0;
}
.dark-mode tr {
  border-bottom-color: #333;
}
.sepia-mode tr {
  border-bottom-color: #d4c4a0;
}
th,
td {
  padding: 8px 12px;
  text-align: left;
  vertical-align: top;
}
.dark-mode th {
  font-weight: 600;
}
</style>
