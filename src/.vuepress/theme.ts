import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  //作者
  author: {
    name: "FuChen",
    url: "https://xcy.icu",
  },
  //引入图标
  iconAssets: "https://at.alicdn.com/t/c/font_3867075_72cg9wkeehh.css",
  //引入logo
  logo: "https://logo-1304336794.cos.ap-nanjing.myqcloud.com/logo_3.png",

  docsDir: "docs",

  darkmode: "toggle",

  fullscreen: true,
  //其他blog
  blog: {
    medias: {
      Baidu: "https://baidu.com",
      BiliBili: "https://space.bilibili.com/323664397?spm_id_from=333.1007.0.0",
      Email: "https://example.com",
      GitHub: "https://github.com/FC-programmer",
      Gmail: "https://example.com",
      Zhihu: "https://www.zhihu.com/people/ju-zi-ai-guo-jiang-26",
    },
  },

  //引入其他配置文件
  locales: {
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,


      footer: '<a href="https://beian.miit.gov.cn/#/Integrated/index">豫ICP备2023001076号-1</a>',
      displayFooter: true,

      blog: {
        description: "Java开发的初学者",
        intro: "/about-me.html",
      },
    },
  },

  plugins: {
    blog: true,

    // If you don’t need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    //这里是评论功能
    // comment: {
    //   /**
    //    * Using Giscus
    //    */
    //   provider: "Giscus",
    //   repo: "vuepress-theme-hope/giscus-discussions",
    //   repoId: "R_kgDOG_Pt2A",
    //   category: "Announcements",
    //   categoryId: "DIC_kwDOG_Pt2M4COD69",
    //
    //   /**
    //    * Using Twikoo
    //    */
    //   // provider: "Twikoo",
    //   // envId: "https://twikoo.ccknbc.vercel.app",
    //
    //   /**
    //    * Using Waline
    //    */
    //   // provider: "Waline",
    //   // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    // },

    // Disable features you don’t want here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

  },
});
