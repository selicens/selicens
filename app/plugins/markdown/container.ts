/* eslint-disable @typescript-eslint/no-var-requires */
import type MarkdownIt from 'markdown-it'
import type Token from 'markdown-it/lib/token'
import container from 'markdown-it-container'

export const containerPlugin = (md: MarkdownIt) => {
  md.use(...createContainer('info', 'INFO', md))
    .use(...createContainer('tip', 'TIP', md))
    .use(...createContainer('warning', 'WARNING', md))
    .use(...createContainer('danger', 'WARNING', md))
    .use(...createContainer('details', 'DETAILS', md))
    // explicitly escape Vue syntax
    .use(container, 'v-pre', {
      render: (tokens: Token[], idx: number) =>
        tokens[idx].nesting === 1 ? `<div v-pre>\n` : `</div>\n`
    })
}

type ContainerArgs = [
  typeof container,
  string,
  {
    render(tokens: Token[], idx: number): string
  }
]

function createContainer(klass: string, defaultTitle: string, md): ContainerArgs {
  return [
    container,
    klass,
    {
      render(tokens, idx, _options, env: MarkdownEnv & { references?: any }) {
        const token = tokens[idx]
        if (token.nesting === 1) {
          token.attrJoin('class', `${klass} custom-block`)
          const attrs = md.renderer.renderAttrs(token)
          const info = token.info.trim().slice(klass.length).trim()
          const title = md.renderInline(info || defaultTitle, {
            references: env.references
          })
          const titleClass =
            'custom-block-title' + (info ? '' : ' custom-block-title-default')
          if (klass === 'details')
            return `<details ${attrs}><summary>${title}</summary>\n`
          return `<div ${attrs}><p class="${titleClass}">${title}</p>\n`
        } else return klass === 'details' ? `</details>\n` : `</div>\n`
      }
    }
  ]
}
