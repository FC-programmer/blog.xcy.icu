import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
    "/": [
        "",
        {
            text: "面试",
            icon: "iconfont icon-mianshi",
            prefix: "md/",
            collapsible: true,
            children: [
                {text: "Java", link: "interview/x-interview-java.md"},
                {text: "MySQL", link: "interview/x-interview-mysql.md"},
                {text: "Spring", link: "interview/x-interview-spring.md"},
                {text: "Mybatis", link: "interview/x-interview-mybatis.md"},
                {text: "Redis", link: "interview/x-interview-redis.md"},
                {text: "复盘", link: "interview/x-interview-replay.md"},
                {text: "GQ面试题", link: "interview/x-interview-gq.md"},
            ],
        },
        {
            text: "文章",
            icon: "iconfont icon-16",
            prefix: "posts/",
            collapsible: true,
            children: [
                {text: "git", link: "git.md"},
            ],
        },
        "about-me",
        "slides",
    ],
});