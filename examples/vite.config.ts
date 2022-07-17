import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import defineOptionsPlugin from "unplugin-vue-define-options/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), defineOptionsPlugin()],
});
