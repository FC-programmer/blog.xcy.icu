import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  { text: "主页", icon: "iconfont icon-home-fill", link: "/" },
  { text: "面试", icon: "iconfont icon-mianshi", link: "/md/interview/x-interview-1.md" },
  {
    text: "Java",
    icon: "iconfont icon-java1",
    prefix: "/md/java/",
    children: [
      {
        text: "Java 基础",
        prefix: "basic/",
        children: [
          { text: "Java 面向对象", link: "java-basic-oop.md" },
          { text: "Java 基础知识", link: "java-basic-lan.md" },
        ],
      },
      {
        text: "Java IO",
        prefix: "io/",
        children: [
          { text: "Java IO ", link: "1",},
        ],
      },
      {
        text: "Java 集合",
        prefix: "collection/",
        children: [
          { text: "Java 集合框架", link: "java-collection.md",},
        ],
      },
    ],
  },

  {
    text: "数据库",
    icon: "iconfont icon-shujuku1",
    prefix: "/md/db/",
    children: [
      {
        text: "数据库基础",
        prefix: "sql/",
        children: [
          { text: "数据库原理", link: "sql-db.md" },
          { text: "SQL语言", link: "sql-lan.md" },
        ],
      },
      {
        text: "SQL数据库",
        prefix: "sql-mysql/",
        children: [
          { text: "MySQL", link: "sql-mysql-overview.md" },
        ],
      },
      {
        text: "NoSQL数据库",
        prefix: "nosql-redis/",
        children: [
          { text: "Redis", link: "sql-redis-overview.md" },
        ],
      },
    ],
  },

  {
    text: "Spring",
    icon: "iconfont icon-leaf1",
    prefix: "/md/spring/",
    children: [
      {
        text: "Spring 知识体系",
        children: [
          { text: "Spring Framework", link: "spring.md" },
        ],
      },
    ],
  },

  {
    text: "框架",
    icon: "iconfont icon-mn_kuangjia_fill",
    prefix: "/md/framework/",
    children: [
      {
        text: "ORM框架",
        icon: "edit",
        prefix: "orm-mybatis/",
        children: [
          { text: "Mybatis", link: "mybatis-overview.md" },
        ],
      },
    ],
  },
  { text: "关于作者", icon: "iconfont icon-aboutme", link: "/about-me.md" },
]);
