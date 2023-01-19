import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "文章",
      icon: "iconfont icon-16",
      prefix: "md/",
      children: "structure",
    },
    "about-me",
    "slides",
  ],
});
