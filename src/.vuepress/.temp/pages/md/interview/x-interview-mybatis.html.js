export const data = JSON.parse("{\"key\":\"v-53c32d94\",\"path\":\"/md/interview/x-interview-mybatis.html\",\"title\":\"Mybatis面试题总结\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"article\",\"date\":\"2022-01-20T00:00:00.000Z\",\"category\":[\"面试\"]},\"headers\":[{\"level\":2,\"title\":\"1 Mybatis\",\"slug\":\"_1-mybatis\",\"link\":\"#_1-mybatis\",\"children\":[{\"level\":3,\"title\":\"1.1 #{}和${}的区别是什么？\",\"slug\":\"_1-1-和-的区别是什么\",\"link\":\"#_1-1-和-的区别是什么\",\"children\":[]},{\"level\":3,\"title\":\"1.2 Mybatis框架简介\",\"slug\":\"_1-2-mybatis框架简介\",\"link\":\"#_1-2-mybatis框架简介\",\"children\":[]},{\"level\":3,\"title\":\"1.3 什么是ORM？\",\"slug\":\"_1-3-什么是orm\",\"link\":\"#_1-3-什么是orm\",\"children\":[]},{\"level\":3,\"title\":\"1.4 Mybatis的优点以及缺点\",\"slug\":\"_1-4-mybatis的优点以及缺点\",\"link\":\"#_1-4-mybatis的优点以及缺点\",\"children\":[]},{\"level\":3,\"title\":\"1.5 什么是数据持久化？\",\"slug\":\"_1-5-什么是数据持久化\",\"link\":\"#_1-5-什么是数据持久化\",\"children\":[]},{\"level\":3,\"title\":\"1.6 实体类中的属性名和表中的字段名不一样，怎么办？\",\"slug\":\"_1-6-实体类中的属性名和表中的字段名不一样-怎么办\",\"link\":\"#_1-6-实体类中的属性名和表中的字段名不一样-怎么办\",\"children\":[]},{\"level\":3,\"title\":\"1.7 resultMap和resultType的区别？\",\"slug\":\"_1-7-resultmap和resulttype的区别\",\"link\":\"#_1-7-resultmap和resulttype的区别\",\"children\":[]},{\"level\":3,\"title\":\"1.8 模糊查询like语句该怎么写\",\"slug\":\"_1-8-模糊查询like语句该怎么写\",\"link\":\"#_1-8-模糊查询like语句该怎么写\",\"children\":[]},{\"level\":3,\"title\":\"1.9 在Mybatis的xml映射文件中，不同的xml映射文件，id是否可以重复？\",\"slug\":\"_1-9-在mybatis的xml映射文件中-不同的xml映射文件-id是否可以重复\",\"link\":\"#_1-9-在mybatis的xml映射文件中-不同的xml映射文件-id是否可以重复\",\"children\":[]},{\"level\":3,\"title\":\"1.10 为什么说Mybatis是半自动ORM映射工具？与全自动的区别在哪里？\",\"slug\":\"_1-10-为什么说mybatis是半自动orm映射工具-与全自动的区别在哪里\",\"link\":\"#_1-10-为什么说mybatis是半自动orm映射工具-与全自动的区别在哪里\",\"children\":[]},{\"level\":3,\"title\":\"1.11 Mybaits动态sql有什么用？执行原理？有哪些动态sql？\",\"slug\":\"_1-11-mybaits动态sql有什么用-执行原理-有哪些动态sql\",\"link\":\"#_1-11-mybaits动态sql有什么用-执行原理-有哪些动态sql\",\"children\":[]},{\"level\":3,\"title\":\"1.12 Mybatis实现一对一（多对一）有几种方式？\",\"slug\":\"_1-12-mybatis实现一对一-多对一-有几种方式\",\"link\":\"#_1-12-mybatis实现一对一-多对一-有几种方式\",\"children\":[]},{\"level\":3,\"title\":\"1.13 Mybatis实现一对多有几种方式？\",\"slug\":\"_1-13-mybatis实现一对多有几种方式\",\"link\":\"#_1-13-mybatis实现一对多有几种方式\",\"children\":[]},{\"level\":3,\"title\":\"1.14 Mybatis是否支持延迟加载？如果支持，它的实现原理是什么？\",\"slug\":\"_1-14-mybatis是否支持延迟加载-如果支持-它的实现原理是什么\",\"link\":\"#_1-14-mybatis是否支持延迟加载-如果支持-它的实现原理是什么\",\"children\":[]},{\"level\":3,\"title\":\"1.15 Mybaits中批量删除和动态设置表名时应该用#{}还是${}\",\"slug\":\"_1-15-mybaits中批量删除和动态设置表名时应该用-还是\",\"link\":\"#_1-15-mybaits中批量删除和动态设置表名时应该用-还是\",\"children\":[]},{\"level\":3,\"title\":\"1.16 Mybatis的一级缓存\",\"slug\":\"_1-16-mybatis的一级缓存\",\"link\":\"#_1-16-mybatis的一级缓存\",\"children\":[]},{\"level\":3,\"title\":\"1.17 Mybatis的一级缓存失效的四种情况\",\"slug\":\"_1-17-mybatis的一级缓存失效的四种情况\",\"link\":\"#_1-17-mybatis的一级缓存失效的四种情况\",\"children\":[]},{\"level\":3,\"title\":\"1.18 MyBatis的二级缓存\",\"slug\":\"_1-18-mybatis的二级缓存\",\"link\":\"#_1-18-mybatis的二级缓存\",\"children\":[]},{\"level\":3,\"title\":\"1.19 Mybatis的二级缓存开启条件\",\"slug\":\"_1-19-mybatis的二级缓存开启条件\",\"link\":\"#_1-19-mybatis的二级缓存开启条件\",\"children\":[]},{\"level\":3,\"title\":\"1.20 Mybatis二级缓存失效的情况\",\"slug\":\"_1-20-mybatis二级缓存失效的情况\",\"link\":\"#_1-20-mybatis二级缓存失效的情况\",\"children\":[]},{\"level\":3,\"title\":\"1.21 MyBatis缓存查询的顺序\",\"slug\":\"_1-21-mybatis缓存查询的顺序\",\"link\":\"#_1-21-mybatis缓存查询的顺序\",\"children\":[]},{\"level\":3,\"title\":\"1.22 mybatis如何防止sql注入的？\",\"slug\":\"_1-22-mybatis如何防止sql注入的\",\"link\":\"#_1-22-mybatis如何防止sql注入的\",\"children\":[]},{\"level\":3,\"title\":\"1.23 Mybatis是如何做到sql预编译的呢？\",\"slug\":\"_1-23-mybatis是如何做到sql预编译的呢\",\"link\":\"#_1-23-mybatis是如何做到sql预编译的呢\",\"children\":[]},{\"level\":3,\"title\":\"1.24 Mybatis是如何进行分页的？\",\"slug\":\"_1-24-mybatis是如何进行分页的\",\"link\":\"#_1-24-mybatis是如何进行分页的\",\"children\":[]},{\"level\":3,\"title\":\"1.25 分页插件的原理是什么？\",\"slug\":\"_1-25-分页插件的原理是什么\",\"link\":\"#_1-25-分页插件的原理是什么\",\"children\":[]}]}],\"git\":{\"createdTime\":null,\"updatedTime\":null,\"contributors\":[]},\"readingTime\":{\"minutes\":10.6,\"words\":3179},\"filePathRelative\":\"md/interview/x-interview-mybatis.md\",\"localizedDate\":\"2022年1月20日\",\"excerpt\":\"<p><code>more</code> Mybatis面试题总结（持续更新）。</p>\\n\"}")