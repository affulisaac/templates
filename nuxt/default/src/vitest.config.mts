import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import AutoImport from  'unplugin-auto-import/vite'
import Components from  'unplugin-vue-components/vite'
import path from "path";

export default defineConfig({
    plugins: [
        vue(),
        AutoImport ( {
            imports: [
                'vue',
                {
                    '@vueuse/head': [ 'useHead' ] ,
                    '#app': ['useNuxtApp', 'useRouter', 'useRoute',],
                     
                } ,
            ] ,
        } ),
         

    test: {
    globals: true,
    environment: "jsdom",
    reporters: [
      ["junit", { outputFile: "test-results.xml" }]
    ],
    coverage: {
      reportsDirectory: "./coverage",
      provider: "v8",
      reporter: ["text", "html", "lcov", "cobertura"]
    }
  },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '.'),
            '~' : path.resolve ( __dirname ,  '.' ),
            '#app': path.resolve( __dirname, 'node_modules/nuxt/dist/app'),
            "@vueuse/head" : path.resolve ( __dirname ,  "node_modules/@unhead/vue/dist/index"),
        },
    },

})