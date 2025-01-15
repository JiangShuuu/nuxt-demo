import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const currentDir = dirname(fileURLToPath(import.meta.url))
const uiDir = join(currentDir, '../ui')  // 指向 ui 專案目錄

export default defineNuxtConfig({
  extends: '../ui',

  modules: ['nuxt-auth-utils'],

  // 指定 shadcn 組件目錄為 ui 專案的目錄
  shadcn: {
    prefix: '',
    componentDir: join(uiDir, 'components/ui')
  },

  // 添加 ui 專案的組件目錄
  components: [
    {
      path: join(uiDir, 'components/ui'),
      extensions: ['.vue']
    }
  ],
  runtimeConfig: {
    authSecret: process.env.AUTH_SECRET,
  },
  compatibilityDate: '2025-01-11',
  devServer: {
    port: 8080,
  },
})