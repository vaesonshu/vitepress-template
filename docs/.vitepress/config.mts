import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'vitepress-template',
  description: 'a vitepress template',
  srcDir: './src',
  base: '/vitepress-template/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/example/' },
      { text: 'Section', link: '/section/' }
    ],

    // 数组形式
    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   },
    //   {
    //     text: 'Section Title A',
    //     items: [
    //       { text: 'Item A', link: '/item-a' },
    //       { text: 'Item B', link: '/item-b' }
    //     ]
    //   },
    //   {
    //     text: 'Section Title B',
    //     items: [
    //       { text: 'Item C', link: '/item-c' },
    //       { text: 'Item D', link: '/item-d' }
    //     ]
    //   }
    // ],

    // 对象形式
    sidebar: {
      // 当用户位于 `example` 目录时，会显示此侧边栏
      '/example/': [
        {
          text: 'Examples',
          collapsed: false,
          items: [
            { text: 'Examples', link: '/example/' },
            { text: 'Markdown Examples', link: '/example/markdown-examples' },
            { text: 'Runtime API Examples', link: '/example/api-examples' }
          ]
        }
      ],

      // 当用户位于 `example` 目录时，会显示此侧边栏
      '/section/': [
        {
          text: 'Section Title A',
          collapsed: false,
          items: [
            { text: 'Item A', link: '/section/item-a' },
            { text: 'Item B', link: '/section/item-b' }
          ]
        },
        {
          text: 'Section Title B',
          collapsed: false,
          items: [
            { text: 'Item C', link: '/section/item-c' },
            { text: 'Item D', link: '/section/item-d' }
          ]
        }
      ]
    },

    // 自定义配置上下页上方的文本
    // docFooter: {
    //   prev: '上一页',
    //   next: '下一页'
    // },

    // 自定义配置 outline
    outline: {
      label: '页面导航'
    },

    // 自定义配置上次更新的文本和日期格式
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
  },
  markdown: {
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true
    }
  }
})
