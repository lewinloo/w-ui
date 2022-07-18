import { defineConfig } from 'vite'
import defineOptionsPlugin from 'unplugin-vue-define-options/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [defineOptionsPlugin()]
})
