import { defineConfig } from 'vitepress';
import nav from './nav.mjs';
import sidebar from './sidebar.mjs';
import socialLinks from './socialLinks.mjs';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [["link", { rel: "icon", href: "/home/Ambition_LOGO_LIGHT.png" }],
  ["meta", 
    {
    name: "baidu-site-verification",
    content: "codeva-pJXIGYLWho"
    }
  ]
  ],
  title: "SYDX-Ambition",//网页大标题
  description: "A VitePress Site",
  themeConfig: {
    outlineTitle: '目录',
    outline: [2, 6],
    logo: {
      light: '/home/SLDX_LOGO_LIGHT.png',
      dark: '/home/SLDX_LOGO_DARK.png'
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: nav,//页眉按钮

    sidebar: sidebar,//左侧边栏

    socialLinks: socialLinks,//跳转
    footer: {//页脚
      // 在这里添加友链
      message: `
        <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
          <div>
            <strong>链接：</strong>
            <a href="https://www.robomaster.com/zh-CN" target="_blank" rel="noopener noreferrer" style="margin: 0 5px;">RoboMaster 官网</a> |
            <a href="https://www.sylu.edu.cn/" target="_blank" rel="noopener noreferrer" style="margin: 0 5px;">沈阳理工大学 官网</a>
          </div>
          <div>${new Date().getFullYear()} © By 运营组 Zhan_Kong</div>
        </div>
      `,
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },
    lastUpdated: {//更新时间设置
      text: '更新时间',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    docFooter: {//页面底部跳转
      prev: '上一篇',
      next: '下一篇'
    },
    returnToTopLabel: '返回顶部',
    lightModeSwitchTitle: '浅色模式',
    darkModeSwitchTitle: '深色模式',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '切换主题',
  },
  vite: {
    ssr: {
      noExternal: ['@escook/vitepress-theme', 'vitepress'],
    }
  },
  srcDir: './doc',//MD页面根目录
  lastUpdated: true,//更新时间开关
  markdown: {
    lineNumbers: true,//代码块行数
  },
  cleanUrls: true,//清除URL中的.html后缀
  base: '/',
})