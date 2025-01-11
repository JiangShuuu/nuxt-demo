import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", "nuxt-icon"],
  alias: {
    '~': currentDir,
  },
  css: [
    join(currentDir, './assets/css/tailwind.css'),
  ],

  // 添加這個配置來導出 lib
  imports: {
    dirs: [
      // 掃描頂層模組
      'lib',
      // 掃描子目錄
      'lib/**'
    ]
  },

  components: [
    {
      path: join(currentDir, './components'),
      // this is required else Nuxt will autoImport `.ts` file
      extensions: ['.vue'],
    },
    {
      path: join(currentDir, './components/ui'),
      // this is required else Nuxt will autoImport `.ts` file
      extensions: ['.vue'],
    },
  ],
})