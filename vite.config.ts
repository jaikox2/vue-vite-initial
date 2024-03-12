import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import Pages from "vite-plugin-pages"
import path from "path"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"

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
      ],
      dts: 'src/types/auto-import.d.ts',
    }),
    Components({
      dts: "src/types/components.d.ts",
    })
  ],
})
