// index.js
// import DefaultTheme from 'vitepress/theme'
// import './custom.css'

// export default DefaultTheme

// .vitepress/theme/index.js

// 可以直接在主题入口导入 Vue 文件
// VitePress 已预先配置 @vitejs/plugin-vue
import Layout from './MyLayout.vue';

export default {
  Layout,
  enhanceApp: ({ router }) => {
    router.onBeforeRouteChange = (to) => {
      //线上环境才上报
      if (import.meta.env.MODE === 'production') {
        if (typeof _hmt !== 'undefined' && !!to) {
          _hmt.push(['_trackPageview', to]);
        }
      }
    };
  },
};
