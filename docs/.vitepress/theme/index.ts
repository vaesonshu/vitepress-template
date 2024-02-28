// 主题入口文件

// 自定义主题
// import Layout from './Layout.vue'

// export default {
//   Layout,
//   enhanceApp({ app, router, siteData }) {
//     // ...
//   }
// }

// 扩展默认主题
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default DefaultTheme
