export const pagesRoutes = [
  ["v-fd0cf4b0","/about-me.html",{"d":"2022-01-19T00:00:00.000Z","l":"2022年1月19日","e":"<p><code>more</code> 这里是作者的的简单介绍</p>\n","r":{"minutes":3.48,"words":1043},"y":"a","title":"关于作者","i":"iconfont icon-aboutme"},["/about-me","/about-me.md"]],
  ["v-8daa1a0e","/",{"y":"h","title":"主页","i":"iconfont icon-home-fill"},["/index.html","/README.md"]],
  ["v-2e3eac9e","/slides.html",{"d":"2023-01-18T13:13:53.000Z","e":"<!-- markdownlint-disable MD024 MD033 MD051 -->\n","r":{"minutes":4.47,"words":1341},"y":"s","title":"幻灯片页","i":"iconfont icon-line-slideshowhuandengpianfangying-02"},["/slides","/slides.md"]],
  ["v-6e19edb7","/demo/page.html",{"d":"2023-01-18T13:13:53.000Z","e":"<p><code>more</code> 注释之前的内容被视为文章摘要。</p>\n","r":{"minutes":1.52,"words":457},"y":"a","title":"页面配置","i":"page"},["/demo/page","/demo/page.md"]],
  ["v-1473bf53","/demo/",{"d":"2023-01-18T13:13:53.000Z","c":["使用指南"],"e":"<h2> 目录</h2>\n<ul>\n<li>\n<p><a href=\"/demo/page.html\" target=\"blank\">页面展示</a></p>\n</li>\n<li>\n<p><a href=\"/demo/disable.html\" target=\"blank\">禁用展示</a></p>\n</li>\n</ul>\n","r":{"minutes":0.1,"words":31},"y":"a","title":"主要功能与配置演示","i":"discover"},["/demo/index.html","/demo/README.md"]],
  ["v-649ee9f1","/posts/elasticsearch.html",{"e":"<h1> Elasticsearch</h1>\n<h2> elasticsearch</h2>\n<h3> 简介</h3>\n<ul>\n<li>分布式的，restful风格的搜索引擎</li>\n</ul>\n<p>-支持对各种类型的数据检索</p>\n<ul>\n<li>\n<p>搜索速度快，可以提供实时的搜索服务</p>\n</li>\n<li>\n<p>便于水平扩展，每秒可以处理PB级别的数据</p>\n</li>\n</ul>\n<h3> elasticsearch术语</h3>\n<ul>\n<li>\n<p>索引、类型、文档、字段</p>\n</li>\n<li>\n<p>集群、节点、分片、副本</p>\n</li>\n</ul>","r":{"minutes":0.46,"words":137},"y":"a","title":"Elasticsearch"},["/posts/elasticsearch","/posts/elasticsearch.md"]],
  ["v-c5e5db88","/posts/git.html",{"d":"2023-01-20T00:00:00.000Z","l":"2023年1月20日","g":["git"],"e":"<p>记录了开发中git常用的一些命令</p>\n","r":{"minutes":2.55,"words":764},"y":"a","title":"git常用命令"},["/posts/git","/posts/git.md"]],
  ["v-012f8ba8","/posts/mysql.html",{"e":"<h1> MySQL 相关命令</h1>\n<div class=\"language-mysql line-numbers-mode\" data-ext=\"mysql\"><pre class=\"language-mysql\"><code>truncate table &lt;表名&gt;     #删除表数据并让id重新编号\n</code></pre><div class=\"line-numbers\" aria-hidden=\"true\"><div class=\"line-number\"></div></div></div>","r":{"minutes":0.07,"words":22},"y":"a","title":"MySQL 相关命令"},["/posts/mysql","/posts/mysql.md"]],
  ["v-7e0d34f3","/posts/redis.html",{"d":"2023-02-11T00:00:00.000Z","l":"2023年2月11日","g":["redis"],"e":"<p>redis相关操作</p>\n","r":{"minutes":1.23,"words":369},"y":"a","title":"Redis 相关操作"},["/posts/redis","/posts/redis.md"]],
  ["v-72780ac1","/md/interview/x-interview-gq.html",{"a":"GQ","d":"2023-01-21T00:00:00.000Z","l":"2023年1月21日","c":["面试"],"e":"<p><code>来源</code> <a href=\"http://zgq.cool/#/docs\" target=\"_blank\" rel=\"noopener noreferrer\">zgq.cool</a></p>\n","r":{"minutes":57.8,"words":17339},"y":"a","title":"GQ面试题"},["/md/interview/x-interview-gq","/md/interview/x-interview-gq.md"]],
  ["v-7765d7ee","/md/interview/x-interview-java.html",{"d":"2022-01-20T00:00:00.000Z","l":"2022年1月20日","c":["面试"],"e":"<p><code>more</code> Java面试题总结（持续更新）。</p>\n","r":{"minutes":40.24,"words":12072},"y":"a","title":"Java面试题总结","i":"article"},["/md/interview/x-interview-java","/md/interview/x-interview-java.md"]],
  ["v-53c32d94","/md/interview/x-interview-mybatis.html",{"d":"2022-01-20T00:00:00.000Z","l":"2022年1月20日","c":["面试"],"e":"<p><code>more</code> Mybatis面试题总结（持续更新）。</p>\n","r":{"minutes":10.6,"words":3179},"y":"a","title":"Mybatis面试题总结","i":"article"},["/md/interview/x-interview-mybatis","/md/interview/x-interview-mybatis.md"]],
  ["v-05f21fa5","/md/interview/x-interview-mysql.html",{"e":"<h1> 数据库相关</h1>\n<h2> 1 SQL原理</h2>\n<h3> 什么是事务？</h3>\n<p>事务是指满足ACID特性的一组操作，可以通过commit提交或者rollback回滚</p>\n<p>事务的基本特性：ACID</p>\n<ul>\n<li>A 原子性：指事务中的操作要么成功，要么不执行。</li>\n<li>C 一致性：指从数据库中的一个状态到另一个状态一致性的过程，比如说A修改了一个数字，但是sql在执行过程中系统崩溃，最后也不会影响这个数字，因为事务没有提交。</li>\n<li>I 隔离性：在事务提交之前，对其他事务是不可见的。</li>\n<li>D 持久性：事务一旦提交，将永久的保存到数据库中。</li>\n</ul>","r":{"minutes":8.22,"words":2467},"y":"a","title":"数据库相关"},["/md/interview/x-interview-mysql","/md/interview/x-interview-mysql.md"]],
  ["v-f6d1cb28","/md/interview/x-interview-redis.html",{"d":"2022-01-20T00:00:00.000Z","l":"2022年1月20日","c":["面试"],"e":"<p><code>more</code> Redis面试题总结（持续更新）。</p>\n","r":{"minutes":13.58,"words":4075},"y":"a","title":"Redis面试题总结","i":"article"},["/md/interview/x-interview-redis","/md/interview/x-interview-redis.md"]],
  ["v-048ce638","/md/interview/x-interview-replay.html",{"d":"2022-01-20T00:00:00.000Z","l":"2022年1月20日","c":["面试"],"u":true,"e":"<p><code>more</code> 复盘（持续更新中）</p>\n","r":{"minutes":23,"words":6900},"y":"a","title":"面试复盘","i":"article"},["/md/interview/x-interview-replay","/md/interview/x-interview-replay.md"]],
  ["v-d8b58b04","/md/interview/x-interview-spring.html",{"d":"2022-01-20T00:00:00.000Z","l":"2022年1月20日","c":["面试"],"e":"<p><code>more</code> Spring面试题总结（持续更新中）</p>\n","r":{"minutes":17.14,"words":5141},"y":"a","title":"Spring面试题总结","i":"article"},["/md/interview/x-interview-spring","/md/interview/x-interview-spring.md"]],
  ["v-f08387ee","/md/spring/spring.html",{"d":"2022-01-18T00:00:00.000Z","l":"2022年1月18日","c":["Spring"],"e":"<p><code>more</code> 本文章主要介绍Spring框架整体架构，Spring的核心IOC，AOP的案例和具体实现机制；以及SpringMVC框架的案例和实现机制。</p>\n","r":{"minutes":40.45,"words":12135},"y":"a","title":"Spring","i":"leaf"},["/md/spring/spring","/md/spring/spring.md"]],
  ["v-3f0b1149","/md/db/nosql-redis/sql-redis-overview.html",{"d":"2022-01-17T00:00:00.000Z","l":"2022年1月17日","c":["数据库"],"e":"<h1> Redis数据库</h1>\n","r":{"minutes":0.05,"words":16},"y":"a","title":"Redis数据库","i":"mysql"},["/md/db/nosql-redis/sql-redis-overview","/md/db/nosql-redis/sql-redis-overview.md"]],
  ["v-69d731e9","/md/db/sql/sql-db.html",{"d":"2022-01-17T00:00:00.000Z","l":"2022年1月17日","c":["数据库"],"e":"<h1> 数据库原理</h1>\n","r":{"minutes":0.06,"words":17},"y":"a","title":"数据库原理","i":"mysql"},["/md/db/sql/sql-db","/md/db/sql/sql-db.md"]],
  ["v-4531b1d2","/md/db/sql/sql-lan.html",{"d":"2022-01-17T00:00:00.000Z","l":"2022年1月17日","c":["数据库"],"e":"<h1> SQL 语言</h1>\n","r":{"minutes":0.05,"words":15},"y":"a","title":"SQL 语言","i":"mysql"},["/md/db/sql/sql-lan","/md/db/sql/sql-lan.md"]],
  ["v-432c8f78","/md/db/sql-mysql/sql-mysql-overview.html",{"d":"2022-01-17T00:00:00.000Z","l":"2022年1月17日","c":["数据库"],"e":"<h1> MySQL 数据库</h1>\n","r":{"minutes":0.05,"words":16},"y":"a","title":"MySQL 数据库","i":"mysql"},["/md/db/sql-mysql/sql-mysql-overview","/md/db/sql-mysql/sql-mysql-overview.md"]],
  ["v-141d7897","/md/framework/orm-mybatis/mybatis-overview.html",{"d":"2022-01-18T00:00:00.000Z","l":"2022年1月18日","c":["Framework"],"e":"<p><code>more</code> Mybatis知识体系。</p>\n","r":{"minutes":35.1,"words":10530},"y":"a","title":"Mybatis","i":"edit"},["/md/framework/orm-mybatis/mybatis-overview","/md/framework/orm-mybatis/mybatis-overview.md"]],
  ["v-41d63b3b","/md/java/basic/java-basic-lan.html",{"d":"2022-01-17T00:00:00.000Z","l":"2022年1月17日","c":["Java"],"e":"<h1> Java 面向对象</h1>\n","r":{"minutes":0.05,"words":15},"y":"a","title":"Java 面向对象","i":"java"},["/md/java/basic/java-basic-lan","/md/java/basic/java-basic-lan.md"]],
  ["v-617ab0a4","/md/java/basic/java-basic-oop.html",{"d":"2022-01-17T00:00:00.000Z","l":"2022年1月17日","c":["Java"],"e":"<h1> Java 基础知识</h1>\n","r":{"minutes":0.05,"words":15},"y":"a","title":"Java 基础知识","i":"java"},["/md/java/basic/java-basic-oop","/md/java/basic/java-basic-oop.md"]],
  ["v-0d233a93","/md/java/collection/java-collection.html",{"d":"2022-01-17T00:00:00.000Z","l":"2022年1月17日","c":["Java"],"e":"<h1> Java 集合框架</h1>\n","r":{"minutes":0.05,"words":15},"y":"a","title":"Java 集合框架","i":"java"},["/md/java/collection/java-collection","/md/java/collection/java-collection.md"]],
  ["v-3706649a","/404.html",{"y":"p","title":""},["/404"]],
  ["v-e1e3da16","/posts/",{"y":"p","title":"Posts"},["/posts/index.html"]],
  ["v-49a01026","/md/interview/",{"y":"p","title":"Interview"},["/md/interview/index.html"]],
  ["v-2d0aa3df","/md/",{"y":"p","title":"Md"},["/md/index.html"]],
  ["v-59715303","/md/spring/",{"y":"p","title":"Spring"},["/md/spring/index.html"]],
  ["v-e9b4b0b4","/md/db/nosql-redis/",{"y":"p","title":"Nosql Redis"},["/md/db/nosql-redis/index.html"]],
  ["v-ed95419c","/md/db/",{"y":"p","title":"Db"},["/md/db/index.html"]],
  ["v-24647253","/md/db/sql/",{"y":"p","title":"Sql"},["/md/db/sql/index.html"]],
  ["v-4d7f055e","/md/db/sql-mysql/",{"y":"p","title":"Sql Mysql"},["/md/db/sql-mysql/index.html"]],
  ["v-4b13e162","/md/framework/orm-mybatis/",{"y":"p","title":"Orm Mybatis"},["/md/framework/orm-mybatis/index.html"]],
  ["v-2ac2e710","/md/framework/",{"y":"p","title":"Framework"},["/md/framework/index.html"]],
  ["v-4630290f","/md/java/basic/",{"y":"p","title":"Basic"},["/md/java/basic/index.html"]],
  ["v-11af89ce","/md/java/",{"y":"p","title":"Java"},["/md/java/index.html"]],
  ["v-0be40ec3","/md/java/collection/",{"y":"p","title":"Collection"},["/md/java/collection/index.html"]],
  ["v-5bc93818","/category/",{"y":"p","title":"分类"},["/category/index.html"]],
  ["v-744d024e","/tag/",{"y":"p","title":"标签"},["/tag/index.html"]],
  ["v-e52c881c","/article/",{"y":"p","title":"文章"},["/article/index.html"]],
  ["v-154dc4c4","/star/",{"y":"p","title":"收藏"},["/star/index.html"]],
  ["v-01560935","/timeline/",{"y":"p","title":"时间轴"},["/timeline/index.html"]],
  ["v-03d57386","/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/",{"y":"p","title":"使用指南 分类"},["/category/使用指南/","/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/index.html"]],
  ["v-b310d42a","/tag/git/",{"y":"p","title":"git 标签"},["/tag/git/index.html"]],
  ["v-116a43a7","/category/%E9%9D%A2%E8%AF%95/",{"y":"p","title":"面试 分类"},["/category/面试/","/category/%E9%9D%A2%E8%AF%95/index.html"]],
  ["v-0d1f4c3c","/tag/redis/",{"y":"p","title":"redis 标签"},["/tag/redis/index.html"]],
  ["v-08073caa","/category/spring/",{"y":"p","title":"Spring 分类"},["/category/spring/index.html"]],
  ["v-5e0b61bd","/category/%E6%95%B0%E6%8D%AE%E5%BA%93/",{"y":"p","title":"数据库 分类"},["/category/数据库/","/category/%E6%95%B0%E6%8D%AE%E5%BA%93/index.html"]],
  ["v-3b776fee","/category/framework/",{"y":"p","title":"Framework 分类"},["/category/framework/index.html"]],
  ["v-5831b135","/category/java/",{"y":"p","title":"Java 分类"},["/category/java/index.html"]],
]
