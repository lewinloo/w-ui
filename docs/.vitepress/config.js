import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'W-UI',
  description: '基于 Vue3 组件库',
  themeConfig: {
    lastUpdatedText: '最后更新时间',
    footer: {
      message: 'Released under the MIT License',
      copyright: 'Copyright © 2022-present Lewin'
    },
    nav: [
      { text: '指南', link: '/guide/installation', activeMatch: '/guide/' },
      { text: '组件', link: '/component/icon', activeMatch: '/component/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '安装', link: '/guide/installation' },
            { text: '快速开始', link: '/guide/quickStart' }
          ]
        }
      ],
      '/component/': [
        {
          text: '基础组件',
          items: [{ text: 'Icon', link: '/component/icon' }]
        }
      ]
    }
  }
})
