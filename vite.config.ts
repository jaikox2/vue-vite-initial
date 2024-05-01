import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import Pages from "vite-plugin-pages"
import path from "path"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import IconsResolver from "unplugin-icons/resolver"
import Icons from "unplugin-icons/vite"
import Layouts from "vite-plugin-vue-layouts"
import WindiCSS from 'vite-plugin-windicss'
import { HeadlessUiResolver, VueUseComponentsResolver } from "unplugin-vue-components/resolvers"
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    vue(), 
    Pages(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        "vue-i18n",
        {
          "@vueuse/core": [
            "createEventHook",
            "onClickOutside",
            "toReactive",
            "until",
            "useFetch",
            "useVModel",
          ],
        },
      ],
      dts: 'src/types/auto-import.d.ts',
    }),
    Components({
      dts: "src/types/components.d.ts",
      resolvers: [
        HeadlessUiResolver(),
        VueUseComponentsResolver(),
        IconsResolver({
          componentPrefix: "",
          enabledCollections: ["heroicons-outline", "heroicons-solid", "mdi"],
        }),
      ]
    }),
    Icons({ autoInstall: true }),
    Layouts(),
    WindiCSS(),
    VueI18nPlugin({
      include: [path.resolve(__dirname, './locales/**')],
    })
  ],
})
