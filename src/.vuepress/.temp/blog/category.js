export const categoryMap = {"category":{"/":{"path":"/category/","map":{"使用指南":{"path":"/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","keys":["v-6e19edb7","v-4e65ec78","v-c151bf32","v-438ffe52","v-1473bf53"]},"面试题":{"path":"/category/%E9%9D%A2%E8%AF%95%E9%A2%98/","keys":["v-6a278876"]},"Spring":{"path":"/category/spring/","keys":["v-f08387ee"]},"Framework":{"path":"/category/framework/","keys":["v-141d7897"]},"Java":{"path":"/category/java/","keys":["v-41d63b3b","v-617ab0a4","v-0d233a93"]},"数据库":{"path":"/category/%E6%95%B0%E6%8D%AE%E5%BA%93/","keys":["v-3f0b1149","v-69d731e9","v-4531b1d2","v-432c8f78"]}}}},"tag":{"/":{"path":"/tag/","map":{"禁用":{"path":"/tag/%E7%A6%81%E7%94%A8/","keys":["v-4e65ec78"]},"文章加密":{"path":"/tag/%E6%96%87%E7%AB%A0%E5%8A%A0%E5%AF%86/","keys":["v-c151bf32"]},"Markdown":{"path":"/tag/markdown/","keys":["v-438ffe52"]},"页面配置":{"path":"/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/","keys":["v-6e19edb7"]},"使用指南":{"path":"/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","keys":["v-6e19edb7"]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
  });


