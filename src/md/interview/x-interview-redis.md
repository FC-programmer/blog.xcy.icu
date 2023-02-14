---
icon: article
date: 2022-01-20
category:
  - 面试
---

`more` Redis面试题总结（持续更新）。

<!-- more -->


# Redis面试题总结

## 1 Redis

### 1.1 redis是什么，优缺点？

redis本质上是一个key-value类型的内存数据库，所有的数据都是加载到内存中进行操作的，定期会通过异步操作吧数据库中的数据flush到硬盘上

因为是异步操作，redis的性能无疑是非常好的，每秒钟大概可以读写10万次，是已知性能最快的key-value数据库之一

**优点：**

* 读写性能极高，redis读取的速度可以达到10万次以上
* 支持数据持久化马，支持AOF和RDB两种持久化方式
* 支持事务，Redis的所有操作都是原子性的，意思就是要么执行成功，要么就不执行，单个操作是原子性的，多个操作也支持事务，即原子性
* 数据结构丰富，支持String，Set，ZSet，List，Hash等数据结构
* 支持主从复制，主机会自动将数据同步到从机，可以进行读写分离
* 丰富的特性-redis还支持public，通知，key过期等特性

**缺点：**

* 数据库因为是在内存中的，所以会受到物理内存的限制，不能作为海量数据库的高性能读写，更加适合较少数据的高性能操作和运算上
* 主机宕机，宕机前会有部分数据未能及时保存到从机，切换IP后还会引入数据不一致的问题，降低了系统的可用性

### 1.2 Redis和传统的关系型数据库有什么不同?
Redis是一种基于键值对的NoSQL数据库，Redis的数据都存在内存之中，性能极高，但不适合做海量数据的存储。

关系型数据库是基于二维数据表来存储数据的，他的数据更为严谨，支持关系查询，但关系型数据库的数据存在磁盘上，可以存储海量数据，但是性能上远不如Redis

### 1.2 Redis为什么这么快？

* 内存模型， redis使用内存进行存储，没有磁盘io上的开销，数据存储在内存中，类似于HashMap，HashMap的优势就是查询操作的时间复杂度是O(1)
* Redis6.0以前使用的是单线程处理请求，避免了多个线程之间因为切换和锁资源的竞争导致的开销
* 非阻塞IO，redis使用多路复用IO技术，使其在网络IO操作中能并发处理大量的客户端请求，实现高吞吐率。
* 优化的数据结构，redis拥有很多可以直接应用的数据结构的实现，应用层可以直接使用这种数据结构以提升性能
* 使用的底层模型不同，redis直接构建了VM内存机制，因为一般的系统调用系统函数的话，会浪费一定的时间去移动和请求

::: tip
**Redis是单线程的，为什么在持久化持由创建了一个fork子进程？这就是两个进程了，怎么能说是单线程呢？**

Redis是单线程的，主要是指Redis的网络IO和键值对读写是由一个线程来完成的。
而Redis的其他功能，如持久化、异步删除、集群数据同步等，则是依赖其他线程来执行的。
所以，说Redis是单线程的只是一种习惯的说法，事实上它的底层不是单线程的。

:::


### 1.3 为什么使用redis作为缓存

**从高并发上：**

* 直接操作缓存能够承受的请求是远远大于直接访问数据库的，所以我们可以把数据已中的一部分数据转移到缓存中，着用用户的一部分请求就会直接到缓存中查找，就不用经过数据库了

**从高性能上：**

* 用户第一次访问数据库的某些数据，因为是从硬盘上读取的，所以过程比较慢，将用户访问的数据存在缓存中，下一次再访问这些数据的时候就可以直接从缓存中获取了。操作缓存就是最直接操作内存，所以速度相当快。如果数据库中的对应数据改变后，同步到缓存中相应的数据就可以了

----

### 1.4 redis的常用场景有哪些？

热点缓存

缓存可以说是最常用的了，很多的大中型网站基本上都会用到缓存，不仅可以提高网站的访问速度，还可以降低数据库方面的压力，而redis提供了键过期功能，所以用redis应用到缓存的地方非常多

排行榜

排行榜也是非常常见的，比如说淘宝，京东上的销量排行榜单，都又用到，而redis提供了有序集合数据结构，能实现各种复杂的排行榜应用

计数器

计数器也是比较常见的，比如说在一些论坛上，浏览之后，点赞之后，评论之后，相应的数据就需要+1，但是在高并发的时候，数据库的压力是非常大的，而redis提供了计数器功能，性能非常好，很适合在高并发的场景下应用

分布式会话

集群模式下，在应用不多的情况下一般使用容器自带的session复制功能就能满足，当应用增多，相对复杂的系统中，一般都会搭建redis等内存数据库为中心的session服务，session不再又容器管理，而是由session服务及内存数据库管理

分布式锁

社交网络

最新列表

消息系统

----

### 1.5 redis的数据类型有哪些？

**常见的五种：String、Hash、Set、List、SortedSet**

**三种特殊的数据类型：Bitmap、HyperLogLog、Geospatial**，其中HyperLogLog、Bitmap的底层都是String数据类型，Geospatial的底层是SortedSet数据类型

**常用的五种数据类型：**

1. String：String是最常见的数据类型了，普通的key-value存储都可以归为此类，其中Value既可以是数字也可以是字符串。使用 场景：常规的key-value缓存应用，常规计数：微博数，粉丝数
2. Hash：Hash是一个键值（key=>value）的集合。

可以是字符串、整数或浮点数
| 结构类型       | 结构存储的值                           |                                                    结构的读写能力                                                 |
| ----------   | ------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| String字符串  | 可以是字符串、整数或浮点数	            | 对整个字符串或字符串的一部分进行操作；对整数或浮点数进行自增或自减操作；                                                     |
| List列表	   | 一个链表，链表上的每个节点都包含一个字符串   | 对链表的两端进行push和pop操作，读取单个或多个元素；根据值查找或删除元素；                                                   |
| Set集合	   | 包含字符串的无序集合                     | 字符串的集合，包含基础的方法有看是否存在添加、获取、删除；还包含计算交集、并集、差集等                                          |
| Hash散列	   | 包含键值对的无序散列表                   | 包含方法有添加、获取、删除单个元素                                                                                    |
| ZSet有序集合  | 和散列一样，用于存储键值对               | 字符串成员与浮点数分数之间的有序映射；元素的排列顺序由分数的大小决定；包含方法有添加、获取、删除单个元素以及根据分值范围或成员来获取元素 |

### Set 和 ZSet 有什么区别？
set：
* 集合中的元素是无序、不可重复的，一个集合最多能存储232-1个元素；
* 集合除了支持对元素的增删改查之外，还支持对多个集合取交集、并集、差集。

ZSet：
* 有序集合保留了集合元素不能重复的特点；
* 有序集合会给每个元素设置一个分数，并以此作为排序的依据；
* 有序集合不能包含相同的元素，但是不同元素的分数可以相同。

### Redis中List结构的相关操作
链表是线性有序的数据结构，它内部的元素是可以重复的，并且一个列表最多能存储2^32-1个元素。列表包含如下的常用命令：
* lpush/rpush：从列表的左侧/右侧添加数据；
* lrange：指定索引范围，并返回这个范围内的数据；
* lindex：返回指定索引处的数据；
* lpop/rpop：从列表的左侧/右侧弹出一个数据；
* blpop/brpop：从列表的左侧/右侧弹出一个数据，若列表为空则进入阻塞状态。

### 1.6 redis字符串

String是redis的基本数据类型，String类型时二进制安全的，意味着redis的String可以包含任何数据（比如图片或者序列化对象）

> redis中字符串value最多可以是523M

### 1.7 redis事务

redis事务是一个单独的隔离操作：事务中的所有命令都会序列化、按顺序地执行。事务在执行的过程中，不会被其他客户端发来的命令请求所打断

redis事务的主要作用就是串联多个命令防止别的命令插队

::: tip
redis中有三个命令 multi、exec、discard
* multi：输入的命令会依次进入命令队列，但不会执行，直到输入exec后，redis会将之前的命令队列中的命令依次执行。
* 组队过程中可以通过discard放弃组队。

事务的错误处理：组队中的某个命令如果出现了错误，执行时整个命令队列都会被取消。
如果执行中某个命令出现了错误，则只有报错的命令不会执行，其他命令都会执行，不会回滚。
:::

### 1.8 你要如何设计Redis的过期时间？
1. 热点数据不设置过期时间，使其达到“物理”上的永不过期，可以避免缓存击穿问题； 
2. 在设置过期时间时，可以附加一个随机数，避免大量的key同时过期，导致缓存雪崩。

### 1.9 Redis的发布与订阅？
redis的发布与订阅其实就是一种消息通信模式：由发送者发送消息，订阅者接受消息。而redis可以订阅任意数量的频道。

### 1.10 事务冲突问题？
可以通过悲观锁和乐观锁解决

### 1.11 Redis事务的三个特性？
* 单独的隔离线程
  * 事务中的所有命令都会被序列化，按顺序执行。事务在执行过程中，不会被其他客户端发送的请求打断。
* 没有隔离级别的概念
  * 队列中的命令没有提交之前都不会执行。
* 不保证原子性
  * 事务中如果有一条命令执行失败，其后的命令仍然会被执行，不会回滚。

### 1.12 Redis持久化？
redis提供了两种持久化方式：
* RDB：在指定的时间间隔内将内存中的数据快照到磁盘上，恢复时将快照文件读取到内存中。但RDB不适合实时性持久化
* AOF：以日志的方式来记录每个写操作（增量保存），将redis执行的所有写操作记录下来（读操作不记录），只需追加文件，不许修改文件，redis在启动之初会读取该文件重新构建数据。
* 当RDB和AOF同时开启时，redis默认会采用AOF

### 1.13 RDB执行流程？
redis会创建一个fork子进程进行持久化，会先将数据写入到一个临时文件中，待持久化过程结束了，再用这个临时文件替换上次持久化好的文件。
整个过程主进程是不进行任何IO操作的，这就保证了极高的性能，如果需要进行大规模数据恢复，且对于数据完整性不敏感，那么RDB方式要比AOF方式更高效。
RDB的缺点四最后一次持久化数据可能会丢失。

### 1.14 RDB的优势和劣势？
优势：
* 适合大规模的数据恢复
* 对数据完整性和一致性要求不高场景更高效
* 节省磁盘空间
* 恢复速度快

劣势：
* fork的时候，内存是克隆了一份的，会膨胀1倍的数据
* 虽然redis在fork的时候使用了写时复制，但是数据庞大时依然会消耗性能
* 在备份周期在一定时间间隔做一次备份，如果redis以外停止了，那么就会丢失掉最后一次快照的所有修改

### 1.15 AOF执行流程？
* 客户端请求写命令会被append追加到AOF缓存区
* AOF缓存区根据AOF持久化策略将操作sync同步到磁盘的AOF文件中
* AOF文件大小超过重写策略或手动重写时，会对 AOF文件 rewrite重写，压缩AOF文件容量
* redis服务重启时，会重新加载AOF文件的写操作，以达到数据恢复的目的

### 1.16 AOF放入优势和劣势？
优势：
* 备份机制更稳健，丢失数据概率更低
* 可读的日志文本，通过操作AOF，可以处理误操作

劣势：
* 比起RDB占用更多磁盘空间
* 恢复备份速度慢
* 每次读写都同步，会有一定的性能压力
* 存在个别bug，造成不能恢复

### 1.17 缓存穿透
现象：
* 应用服务器压力突然增大了
* redis查询不到数据导致redis命中率低
* 出现了非正常的url访问
* 不停的访问数据库

解决方案：
* 空值缓存：如果数据库查询返回的数据为空，仍然对空进行缓存，设置空结果过期时间非常短
* 设置访问白名单
* 采用布隆过滤器
* 对redis进行实时监控

### 1.18 缓存击穿
现象：
* 数据库压力突然增大了
* redis中没有出现大量key过期
* redis正常运行
* redis中某个key过期，同时大量访问使用这个key

解决方案：
* 预先设置热门数据
* 实时调整
* 使用锁

### 1.19 缓存雪崩
现象：
* 数据库压力突然增大了，服务器崩溃
* 极少时间内，查询的大量key集中过期

解决方案：
* 构建多级缓存
* 使用锁和队列（不适合高并发）
* 设置过期标志更新缓存
* 将缓存失效时间分散开

### 1.20 分布式锁
在单机系统中加了锁，但对于集群模式下的其他系统是无效的，因此需要进行分布式锁
分布式锁的主流方案：
1. 基于数据库实现分布式锁
2. 基于缓存（Redis）等
3. 基于zookeeper

redis性能最高，但zookeeper可靠性更高

在redis中：
1. 使用setnx可以上锁，使用del可以释放锁
2. 锁一直没有释放，设置key过期时间，自动释放
3. 上锁后突然出现异常，无法设置过期时间可以通过上锁的时候同时设置过期时间解决

### Redis中，sexnx命令的返回值是什么，如何使用该命令实现分布式锁？
setnx命令返回整数值，当返回1时表示设置值成果，当返回0时表示设置值失败（key已存在）。

加锁：

第一种，这种方式的缺点是容易产生死锁，因为客户端有可能忘记解锁，或者解锁失败。
```shell
setnx key value
```
第二种，给锁增加了过期时间，避免出现死锁。但这两个命令不是原子的，第二步可能会失败，依然无法避免死锁问题。
```shell
setnx key value expire key seconds
```
第三种，通过“set...nx...”命令，将加锁、过期命令编排到一起，它们是原子操作了，可以避免死锁。
```shell
set key value nx ex seconds
```
解锁：
解锁就是删除代表锁的那份数据。
```shell
del key
```

### 主从复制
主机数据更新后，根据配置和策略，自动同步到从机的机制