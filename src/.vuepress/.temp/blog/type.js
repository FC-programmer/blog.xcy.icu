export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-6e19edb7","v-6a278876","v-f08387ee","v-141d7897","v-3f0b1149","v-41d63b3b","v-617ab0a4","v-0d233a93","v-69d731e9","v-4531b1d2","v-432c8f78","v-fd0cf4b0","v-2e3eac9e","v-4e65ec78","v-1473bf53"]}},"star":{"/":{"path":"/star/","keys":["v-6a278876","v-f08387ee","v-141d7897","v-3f0b1149","v-41d63b3b","v-617ab0a4","v-0d233a93","v-69d731e9","v-4531b1d2","v-432c8f78","v-6e19edb7"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-6a278876","v-f08387ee","v-141d7897","v-3f0b1149","v-41d63b3b","v-617ab0a4","v-0d233a93","v-69d731e9","v-4531b1d2","v-432c8f78","v-6e19edb7"]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

