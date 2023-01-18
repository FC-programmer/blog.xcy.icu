import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  { text: "面试", icon: "discover", link: "/md/interview/x-interview-1.md" },
  {
    text: "Java",
    icon: "edit",
    prefix: "/md/java/",
    children: [
      {
        text: "Java 基础",
        icon: "edit",
        prefix: "basic/",
        children: [
          { text: "Java 面向对象", icon: "edit", link: "java-basic-oop.md" },
          { text: "Java 基础知识", icon: "edit", link: "java-basic-lan.md" },
        ],
      },
      {
        text: "Java IO",
        icon: "edit",
        prefix: "io/",
        children: [
          { text: "香蕉 1", icon: "edit", link: "1",},
          { text: "香蕉 1", icon: "edit", link: "1",},
          { text: "香蕉 1", icon: "edit", link: "1",},
        ],
      },
      {
        text: "Java 集合",
        icon: "edit",
        prefix: "collection/",
        children: [
          { text: "Java 集合框架", icon: "edit", link: "java-collection.md",},
        ],
      },
    ],
  },

  {
    text: "数据库",
    icon: "note",
    prefix: "/md/db/",
    children: [
      {
        text: "数据库基础",
        icon: "edit",
        prefix: "sql/",
        children: [
          { text: "数据库原理", icon: "edit", link: "sql-db.md" },
          { text: "SQL语言", icon: "edit", link: "sql-lan.md" },
        ],
      },
      {
        text: "SQL数据库",
        icon: "edit",
        prefix: "sql-mysql/",
        children: [
          { text: "MySQL", icon: "edit", link: "sql-mysql-overview.md" },
        ],
      },
      {
        text: "NoSQL数据库",
        icon: "edit",
        prefix: "nosql-redis/",
        children: [
          { text: "Redis", icon: "edit", link: "sql-redis-overview.md" },
        ],
      },
    ],
  },

  {
    text: "Spring",
    icon: "note",
    prefix: "/md/spring/",
    children: [
      {
        text: "Spring 知识体系",
        icon: "edit",
        children: [
          { text: "Spring Framework", icon: "edit", link: "spring.md" },
        ],
      },
    ],
  },

  {
    text: "框架",
    icon: "note",
    prefix: "/md/framework/",
    children: [
      {
        text: "ORM框架",
        icon: "edit",
        prefix: "orm-mybatis/",
        children: [
          { text: "Mybatis", icon: "edit", link: "mybatis-overview.md" },
        ],
      },
    ],
  },
]);
