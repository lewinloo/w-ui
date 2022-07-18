import { createApp } from 'vue'
import App from './App.vue'

import Icon from '@w-ui/components/icon'
import '@w-ui/theme-chalk/src/index.scss'

const plugins = [Icon]

const app = createApp(App);

// 自动注册组件
plugins.forEach(plugin => app.use(plugin))

app.mount('#app')
