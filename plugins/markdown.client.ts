import MarkdownIt from 'markdown-it';
import container from 'markdown-it-container'
import { full as emoji } from 'markdown-it-emoji'
import anchor from 'markdown-it-anchor'
import tableOfContents from 'markdown-it-table-of-contents'
import { fromHighlighter } from '@shikijs/markdown-it/core'
import { createHighlighterCore } from 'shiki/core'
 
const md = new MarkdownIt({
  html: true, // 允许 HTML 标签
  xhtmlOut: true, // 使用 '/' 来闭合空标签
  breaks: true, // 转换 '\n' 为 <br>
  linkify: true, // 自动识别链接
  typographer: true, // 启用一些排版替换
  quotes: '“”‘’', // 使用双引号和单引号
})

const highlighter = await createHighlighterCore({
  themes: [
    import('shiki/themes/github-light.mjs'),
    import('shiki/themes/github-dark.mjs')
  ],
  langs: [
    import('shiki/langs/javascript.mjs'),
    import('shiki/langs/css.mjs'),
    import('shiki/langs/html.mjs')
  ],
  loadWasm: import('shiki/wasm')
})

md.use(container, 'details', {
  render: function (tokens, idx) {
    const token = tokens[idx]
    const info = token.info?.trim().slice('details'.length)?.trim()
    if (token.nesting === 1) {
      return `<details><summary>Details</summary>\n`
    } else {
      return `</details>\n`
    }
  }
})
md.use(container, 'warning', {
  render: function (tokens, idx) {
    const token = tokens[idx]
    const info = token.info?.trim().slice('warning'.length)?.trim()
    if (token.nesting === 1) {
      return `<div style="background: #EAB30824"><p>WARNING</p>\n`
    } else {
      return `</div>\n`
    }
  }
})
md.use(tableOfContents)
md.use(
  fromHighlighter(highlighter, {
    themes: {
      light: 'github-light',
      dark: 'github-dark'
    }
  })
)
md.use(emoji) 
md.use(anchor)

export default defineNuxtPlugin(() => {
  return {
    provide: {
      md: (data: string) => {
        return md.render(data)
      }
    }
  }
})
