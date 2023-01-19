import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "D:/workkspace/WebstormProjects/FCBolg/node_modules/vuepress-plugin-components/lib/client/shared.js";
import { h } from "vue";

import { useStyleTag } from "D:/workkspace/WebstormProjects/FCBolg/node_modules/vuepress-plugin-components/lib/client/vueuse.js";
import Badge from "D:/workkspace/WebstormProjects/FCBolg/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "D:/workkspace/WebstormProjects/FCBolg/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import BackToTop from "D:/workkspace/WebstormProjects/FCBolg/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";


import "D:/workkspace/WebstormProjects/FCBolg/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
    useStyleTag(`@import url("https://at.alicdn.com/t/c/font_3867075_72cg9wkeehh.css");`, { id: "icon-assets" });
    
  },
  rootComponents: [
    () => h(BackToTop, { threshold: 300 }),
    
  ],
});
