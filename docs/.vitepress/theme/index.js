import DefaultTheme from 'vitepress/theme'

import WIcon from '@w-ui/components/icon'
import '@w-ui/theme-chalk/src/index.scss'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(WIcon) // 在 vitepress 组册全局组件
  }
}
