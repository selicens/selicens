// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  app: {
    baseURL: '/selicens/', // 默认是 '/'，但GitHub Pages 默认部署到仓库同名路径下，所以一些文件会加载不到，因此需要改成仓库名
    buildAssetsDir: '/assets/' // 默认是 '/_nuxt/'，但GitHub Pages 部署会忽略隐藏文件如'.'和'_'开头的文件，所以一些文件会加载不到，因此改成没有下划线开头的作为产物文件夹
  },
  experimental: {
    payloadExtraction: false // 默认是 true，但GitHub Pages 部署会忽略隐藏文件如'.'和'_'开头的文件，他会生成_payload.json，因此改成 false
  }
})
