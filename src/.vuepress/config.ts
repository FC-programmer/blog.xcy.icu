import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import {searchProPlugin} from "vuepress-plugin-search-pro";

// @ts-ignore
// @ts-ignore
export default defineUserConfig({
  head: [
    [
      'link', // 设置 favicon.ico
      { rel: 'icon', href: 'https://logo-1304336794.cos.ap-nanjing.myqcloud.com/logo_3.png' }
    ]
  ],

  base: "/",

  locales: {


    "/": {


      lang: "zh-CN",
      title: "FCBlog",
      description: "FC成神之路",
    },
  },

  plugins: [
    //搜索
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
    }),
  ],

  theme,

  shouldPrefetch: false,
});
