---
icon: article
date: 2022-01-18
category:
  - 面试题
star: true

---

`more` Java全栈面试题总结（持续更新）。

<!-- more -->

# Java 全栈面试题汇总
## 1 Java 基础
### 1.1 JDK与JRE的区别？

Java运行时环境(JRE)是将要执行Java程序的Java虚拟机。它同时也包含了执行applet需要的浏览器插件。Java开发工具包(JDK)是完整的Java软件开发包，包含了JRE，编译器和其他的工具(比如：JavaDoc，Java调试器)，可以让开发者开发、编译、执行Java应用程序

### 1.2 class文件与二进制文件的区别？

class是java通过编译器预编译的一种java的执行文件的存在形式，他本身是二进制文件，但是不能直接执行，需要通过java虚拟机来解释执行

### 1.3 为什么要使用字节码文件？

主要原因是为了跨平台，只要在不同的操作系统上安装了java的运行环境，然后就可以在任一平台上通过编译器编译为class文件后再其他的装有java运行环境的平台上运行了

### 1.4 java是解释性语言还是编译性语言？

由于java语言跨平台的特性，虽然java也需要编译，编译成.class文件，但是并不是机器可以识别的语言，而是[字节码](https://so.csdn.net/so/search?q=字节码&spm=1001.2101.3001.7020)，最终还是需要 jvm的解释，才能在各个平台执行，所以说是解释型

### 1.5 java的基本数据类型？

byte（1）、short（2）、int（4）、long（8）、float（4）、double（8）、char（2）、boolean（1）

### 1.6 为什么要有包装类？

java本身秉承着万物皆对象，但是其中有八个基本数据类型却与对象格格不入。它们不具备对象的特性，因此为每个基本数据类型出了包装类

### 1.7 自动拆箱与自动装箱

自动拆箱指由基本数据类型的包装类转为对象基本数据类型

自动拆箱指由基本数据类型转为对应的包装类

### 1.8 int的自动装箱有几种？

=、new

### 1.9 int的表示范围

int占4个字节（8位），范围：-2^31 ~ 2^31 - 1

### 1.10 java中如何表示精确的数字

使用bigdecimal

### 1.11 String定义的字符串长度有限制吗？

有，具体范围时65535，也就是int的表示范围

### 1.12 Switch支持哪些类型？

String、enum、int、char

### 1.13 java的运行时区域有哪些？

方法区,堆,虚拟机栈,本地方法区,程序计数器

方法区和堆是所有线程共享的，而后面三个是线程独享的

### 1.14 堆和栈的区别？

1. 申请方式的不同。栈由系统自动分配，而堆是人为申请开辟

2. 申请大小的不同。栈获得的空间较小，而堆获得的空间较大

3. 申请效率的不同。栈由系统自动分配，速度较快，而堆一般速度比较慢

4. 存储内容的不同。栈在函数调用时，函数调用语句的下一条可执行语句的地址第一个进栈，然后函数的各个参数进栈，其中静态变量是不入栈的。而堆一般是在头部用一个字节存放堆的大小，堆中的具体内容是人为安排;

5. 底层不同。栈是连续的空间，而堆是不连续的空间

> 堆与栈的区别有：1、栈由系统自动分配，而堆是人为申请开辟；2、栈获得的空间较小，而堆获得的空间较大；3、栈由系统自动分配，速度较快，而堆一般速度比较慢；4、栈是连续的空间，而堆是不连续的空间.

### 1.15 是否可以在static环境中访问非static变量？

static变量在Java中是属于类的，它在所有的实例中的值是一样的。当类被Java虚拟机载入的时候，会对static变量进行初始化。如果你的代码尝试不用实例来访问非static的变量，编译器会报错，因为这些变量还没有被创建出来，还没有跟任何实例关联上

### 1.16 接口与抽象类的区别？

* 抽象类可以存在普通成员方法， 而接口只能存在public abstract 方法

* 抽象类中的成员变量可以是各种类型的，而接口中的成员变量只能是public static final类型的

* 抽象类只能继承一个，接口可以实现多个

## 2 Java IO

### 2.1 字符流、字节流

#### 2.1.1 字节与字符

Bit是最小的二进制单位，是计算机的操作部分，取值为0或1

Byte（字节）是计算机操作数据的最小单位由8位bit组成，取值为-128-127

Char（字符）用户可读写的最小单位，在java中由16位bit组成，取值0-65535

**字节流**

操作 byte 类型数据，主要操作类是 OutputStream、InputStream 的子类；不用缓冲区，直接对文件本身操作

**字符流**

操作字符类型数据，主要操作类是 Reader、Writer 的子类；使用缓冲区缓冲字符， 不关闭流就不会输出任何内容

**转换**

* OutputStreamWriter：是 Writer 的子类，将输出的字符流变为字节流，即将一个字 符流的输出对象变为字节流输出对象。
* InputStreamReader：是 Reader 的子类，将输入的字节流变为字符流，即将一个字 节流的输入对象变为字符流的输入对象

### 2.2 输入流、输出流

输入、输出，有一个参照物，参照物就是存储数据的介质。如果是把对象读入到介质中， 这就是输入。从介质中向外读数据，这就是输出。 所以，输入流是把数据写入存储介质的。输出流是从存储介质中把数据读取出来。

#### 2.2.1 字节流和字符流之间的转换

* OutputStreamWriter 是字符流通向字节流的桥梁
* InputStreamReader 是字节流通向字符流的桥梁

### 2.3 同步、异步

同步与异步描述的是被调用者的。

如 A 调用 B： 如果是同步，B 在接到 A 的调用后，会立即执行要做的事。A 的本次调用可以得到结 果。

如果是异步，B 在接到 A 的调用后，不保证会立即执行要做的事，但是保证会去做，B 在做好了之后会通知 A。A 的本次调用得不到结果，但是 B 执行完之后会通知A

### 2.4 阻塞、非阻塞

阻塞与非阻塞描述的是调用者的。

如 A 调用 B： 如果是阻塞，A 在发出调用后，要一直等待，等着 B 返回结果。

如果是非阻塞，A 在发出调用后，不需要等待，可以去做自己的事情

### 2.5 同步，异步和阻塞，非阻塞之间的区别

`同步`、`异步`，是描述被调用方的。

`阻塞`，`非阻塞`，是描述调用方的。

同步不一定阻塞，异步也不一定非阻塞。没有必然关系。

### 2.6 Linux5种IO模型

阻塞式IO

非阻塞式IO

IO复用

信号驱动IO

异步IO

### 2.7 BIO、NIO和AIO的区别、三种IO的用法与原理

## 3 Java 反射

### 3.1 反射的作用

1. 在运行时判断任意一个对象那个所属的类
2. 在运行时判断任意一个类所具有的成员变量和方法
3. 在运行时任意调用一个对象的方法
4. 在运行时构造任意一个类的对象

### 3.2 Class类

Java 的 Class 类是 java 反射机制的基础,通过 Class 类我们可以获得关于一个类的相关信息

### 3.3 反射机制的作用

1. 在运行时判断任意一个对象所属的类
2. 在运行时获取类的对象
3. 你在运行时访问 java 对象的属性，方法，构造方法等

> 静态编译：在编译时确定类型，绑定对象，即通过
>
> 动态编译：运行时确定类型，绑定对象。动态编译最大限度发挥了 Java 的灵活性，体现了多态的应用，有以降低类之间的藕合性

### 3.4 反射机制的优缺点

优点：

* 可以实现动态创建对象和编译，体现出很大的灵活性（特别是在 J2EE 的开发中它的灵活性就表现的十分明显）
* 通过反射机制我们可以获得类的各种内容， 进行反编译。对于 JAVA 这种先编译再运行的语言来说，反射机制可以使代码更加灵活， 更加容易实现面向对象

缺点：

* 对性能有影响。使用反射基本上是一种解释操作，我们可以告诉 JVM，我们希望做什么并且让它满足我们的要求。这类操作总是慢于直接执行相同的操作

### 3.5 反射与工厂模式实现IOC

> 我们可以把 IOC 容器的工作模式看做是工厂模式的升华，可以把 IOC 容器看作是一个 工厂，这个工厂里要生产的对象都在配置文件中给出定义，然后利用编程语言提供的反射机 制，根据配置文件中给出的类名生成相应的对象。从实现来看，IOC 是把以前在工厂方法 里写死的对象生成代码，改变为由配置文件来定义，也就是把工厂和对象生成这两者独立分 隔开来，目的就是提高灵活性和可维护性

### 3.6 使用IOC框架应该注意什么

使用 IOC 框架产品能够给我们的开发过程带来很大的好处，但是也要充分认识引入 I OC 框架的缺点，做到心中有数，杜绝滥用框架。

1. 软件系统中由于引入了第三方 IOC 容器，生成对象的步骤变得有些复杂，本来是两者 之间的事情，又凭空多出一道手续，所以，我们在刚开始使用 IOC 框架的时候，会感 觉系统变得不太直观。所以，引入了一个全新的框架，就会增加团队成员学习和认识的 培训成本，并且在以后的运行维护中，还得让新加入者具备同样的知识体系
2. 由于 IOC 容器生成对象是通过反射方式，在运行效率上有一定的损耗。如果你要追求 运行效率的话，就必须对此进行权衡
3. 具体到 IOC 框架产品（比如 Spring）来讲，需要进行大量的配制工作，比较繁琐，对 于一些小的项目而言，客观上也可能加大一些工作成本
4. IOC 框架产品本身的成熟度需要进行评估，如果引入一个不成熟的 IOC 框架产品，那 么会影响到整个项目，所以这也是一个隐性的风险

> 一些工作量不大的项目或者产品，不太适合使用 IOC 框架产品。另外，如果团队成员的知识能力欠缺，对于 IOC 框架产品缺乏深入的理解，也 不要贸然引入。最后，特别强调运行效率的项目或者产品，也不太适合引入 IOC 框架产品， 像 WEB2.0 网站就是这种情况。

### 3.7 动态代理与反射的关系

反射是动态代理的一种实现方式

### 3.8 动态代理的几种实现方式

Java 中，实现动态代理有两种方式：

1. JDK 动态代理：java.lang.reflect 包中的 Proxy 类和 InvocationHandler 接口提 供了生成动态代理类的能力
2. Cglib 动态代理：Cglib (Code Generation Library )是一个第三方代码生成类 库，运行时在内存中动态生成一个子类对象从而实现对目标对象功能的扩展

JDK 动态代理和 Cglib 动态代理的区别 JDK 的动态代理有一个限制，就是使用动态 代理的对象必须实现一个或多个接口。如果想代理没有实现接口的类，就可以使用 CGLIB 实现

**Cglib 与动态代理最大的区别就是**

使用动态代理的对象必须实现一个或多个接口 使用 cglib 代理的对象则无需实现接口，达到代理类无侵入

### 3.9 AOP
Spring AOP 中的动态代理主要有两种方式，JDK 动态代理和 CGLIB 动态代理
JDK 动态代理通过反射来接收被代理的类，并且要求被代理的类必须实现一个接口。JDK动态代理的核心是InvocationHandler接口和Proxy类
如果目标类没有实现接口，那么 Spring AOP 会选择使用 CGLIB 来动态代理目标类
CGLIB（Code Generation Library），是一个代码生成的类库，可以在运行时动态 的生成某个类的子类，注意，CGLIB 是通过继承的方式做的动态代理，因此如果某个类被 标记为 final，那么它是无法使用 CGLIB 做动态代理

## 4 Java 枚举

### 4.1 定义

枚举类型（enum type）是指由一组固定的常量组成合法的类型。Java 中由关键字 enum 来定义一个枚举类型。下面就是 java 枚举类型的定义

### 4.2 特点

1. 使用关键字 enum
2. 类型名称
3. 一串允许的值
4. 枚举可以单独定义在一个文件中，也可以嵌在其它 Java 类中，枚举类型和泛型中除了这样的基本要求外，用户还有一些其他选择
5. 枚举可以实现一个或多个接口（Interface）
6. 可以定义新的变量
7. 可以定义新的方法
8. 可以定义根据具体枚举值而相异的类

> **总结**：每当需要一组固定的常量的时候，如一周的天数、一年 四季等。或者是在我们编译前就知道其包含的所有值的集合。Java 1.5 的枚举能满足绝大 部分程序员的要求的，它的简明，易用的特点是很突出的

### 4.3 枚举的实现

通过反编译，我们可以看到，public final class T extends Enum，说明，该 类是继承了 Enum 类的，同时 final 关键字告诉我们，这个类也是不能被继承的

当我们使用 enmu 来定义一个枚举类型的时候，编译器会自动帮我们创建一个 final 类型的类继承 Enum类，所以枚举类型不能被继承

### 4.4 枚举与单例

当一个 Java 类第一次被真正使用 到的时候静态资源被初始化、Java 类的加载和初始化过程都是线程安全的（因为虚拟机在 加载枚举的类的时候，会使用 ClassLoader 的 loadClass 方法，而这个方法使用同步代 码块保证了线程安全）。所以，创建一个 enum 类型是线程安全的

也就是说，我们定义的一个枚举，在第一次被真正用到的时候，会被虚拟机加载并初始 化，而这个初始化过程是线程安全的。而我们知道，解决单例的并发问题，主要解决的就是 初始化过程中的线程安全问题

所以，由于枚举的以上特性，枚举实现的单例是天生线程安全的

### 4.5 Java 枚举如何比较

java 枚举值比较用 == 和 equals 方法没啥区别，两个随便用都是一样的效果

因为枚举 Enum 类的 equals 方法默认实现就是通过 == 来比较的

类似的 Enum 的 compareTo 方法比较的是 Enum 的 ordinal 顺序大小

类似的还有 Enum 的 name 方法和 toString 方法一样都返回的是 Enum 的 name 值

### 4.6 switch 对枚举的支持

Java 1.7 之前 switch 参数可用类型为 short、byte、int、char，枚举类型之所以 能使用其实是编译器层面实现的。

编译器会将枚举 switch 转换，但是实质还是 int 参数类型


## 5 Java 泛型


## 6 Java 集合

### 6.1 Java中有哪些集合类？

Java中的集合类都是由Collection和Map派生的，其中Collection又派生了三个子接口，Set、List、Queue，因此可以将集合分为四大类：

* Set：代表无序，不可重复的集合
* List：代表有序，可以重复的集合
* Queue：代表先进先出队列
* Map：代表具有映射关系的key-value集合

Set接口常用实现类：HashSet，TreeSet等

List接口常用实现类：ArrayList、LinkedList等

Map接口常用实现类：HashMap、TreeMap、Hashtable、LinkedHashMap、Properties等

Queue接口又派生出一个Deque(代表双端队列)接口，常用的Deque接口实现类：LinkedList、ArrayDeque

### 6.2 集合类中线程安全与不安全的分别有哪些？

在java.util包中，Vector、Hashtable是线程安全的，但是这两个类是古老的类，性能较差。除了Vector和Hashtable外，在java.util包中的其他集合类都是线程不安全的。

在JDK1.5后，在java.util.concurrent包下提供了大量支持高效并发访问的集合类，大致可分为两类：

* 以Concurrent开头的集合类
    * 代表了并发访问的集合，支持多线程并发访问，写操作都是线程安全的，这种集合类采用复杂的算法保证永远不会锁住整个集合，因此具有较好的性能
* CopyOnWrite开头的集合类
    * 其底层的实现原理是采用复制数组的方式实现操作。对这种集合类进行读操作的时候，会读取原数组；进行写操作的时候，会复制一份新的数组，然后在复制的数组中进行写操作，因为在复制的数组中进行写操作，所以线程是安全的

### 6.3 Map接口有哪些实现类？

常用的实现类：HashMap，LinkedHashMap，TreeMap，ConcurrentHashMap

对于不需要进行排序的场景，优先使用HashMap，它是性能最好的Map实现类，如果涉及到线程安全，则可以使用ConcurrentHashMap，它的性能好于Hashtable

对于需要进行排序的场景，如果需要按照插入的顺序进行排序，则可以使用LinkedHashMap；如果需要按照key自然进行排序，则可以使用TreeMap，如果涉及到线程安全，则可以使用Collections包装类

### 6.4 Map put的过程

* 首次扩容

    * 先判断数组是否为空，如果为空，则扩容

* 计算索引

    * 通过hash算法计算需要添加的元素的key-value位置

* 插入数据

    * 如果当前位置为空，则直接插入数据
    * 如果当前位置不为空，且key不存在，则将数据链到链表末尾
    * 如果当前位置不为空，且key存在，则将其value进行覆盖
    * 如果链表的长度达到8，则将链表转为红黑树，并将数据插入到树中

* 再次扩容

    * 如果数组中元素个数（size）超过threshold，则再次进行扩容

  具体过程图如下：

  ![img](https://uploadfiles.nowcoder.com/images/20220224/4107856_1645688900795/18330EB2310CB83A25FA317E65ED60EB)

### 6.5 如何得到一个线程安全的Map？

1. 使用Collections类中Map的包装类
2. 使用java.util.concurrent包下的Map类，如ConcurrentHashMap
3. 使用Hashtable类，但是性能较差，不建议使用

### 6.6 HashMap的特点？

1. 是一个线程不安全的实现
2. 可以使用null作为key或者value

### 6.7 JDK7与JDK8之间的HashMap有什么区别？

* 在JDK7中HashMap的底层是数组+链表实现的，底层会维护一个Entry数组。它会通过hashCode来将对象的key-value存储到数组中，如果发生了hashCode冲突，则将该key-value存放在对应元素的后面，形成一个链表。当链表中存储的数据越来越多时，查询的效率就会变得很差。

* 在JDK8中HashMap的底层是数组+链表+红黑树实现的，底层维护一个Node数组。它会通过hashCode来将对象的key-value存储到数组中，如果发生了hashCode冲突，则将该key-value存放在对应元素的后面，形成一个链表，当链表中存储的数据个数大于等于8时，会将链表转换为红黑树进行存储。这么做的原因是在查询时优化时间复杂度，提高查找性能。

### 6.8 ArrayList与LinkedList的区别？

* ArrayList与LinkedList都实现了List接口，但是LinkedList多实现了一个Deque接口，所以LinkedList也可以当做队列使用
* ArrayList与LinkedList的底层数据结构不同，ArrayList底层是基于动态数组实现的，而LinkedList是基于链表实现的
* 因为底层数据结构的不同，ArrayList与LinkedList的应用场景也不同，ArrayList更加适合查询数据，而LinkedList更加适合添加、删除、修改操作

> ArrayList进行添加操作时，如果添加的位置有元素，那么该元素将后移，该元素后面的元素都向后移动，所以进行添加元素时，效率相对不高
>
> LinkedList添加元素时，如果当前位置有元素，那么将遍历链表，找到指定位置的元素，然后添加，如果数据量较大，可能会遍历很多元素才能找到指定位置的元素，因此LinkedList在数据量不是很大时，添加操作的效率更高一些

### 6.9 CopyOnWriteArrayList的底层原理

* CopyOnWriteArrayList内部也是通过数组进行实现的，但是在向CopyOnWriteArrayList添加元素时，会复制一个新的数组，写操作在复制的数组中进行，读操作在原数组中进行
* 在进行写操作时，会进行加锁，防止数据丢失
* 写操作结束后，会将原数组指向复制的新数组
* CopyOnWriteArrayList允许在进行写操作时进行读数据，提高了读的性能，适合读多写少的场景，但是CopyOnWriteArrayList比较占用内存，同时读到的数据往往不是最新的数据，因此不适合对实时性要求较高的场景

### 6.10 HashMap的底层实现原理

基于hash算法，通过put和get方法存储和获取数据

存储对象时，将key-value传给put方法， 它通过hashCode获取hash值来确定存储的位置，然后进行存储。

获取对象是，将key传给get方法，它通过hashCode获取hash值来确定存储的位置，然后通过equals方法确定键值对

如果发生了hash冲突，则将其元素链接到链表的末尾，如果链表的长度超过了8，则将链表转为红黑树结构。

> HashMap 的数据是存储在链表数组里面的。在对 HashMap 进行插入/删除等操作时， 都需要根据 K-V 对的键值定位到他应该保存在数组的哪个下标中。而这个通过键值求取下 标的操作就叫做哈希。HashMap 的数组是有长度的，Java 中规定这个长度只能是 2 的倍 数，初始值为 16。简单的做法是先求取出键值的 hashcode，然后在将 hashcode 得到的 int 值对数组长度进行取模。为了考虑性能，Java 总采用按位与操作实现取模操作

### 6.11 HashMap的扩容机制

HashMap的默认初始大小是16，当数组中的个数达到临界值（装载因子=0.75*最大容量）时会进行扩容，扩容大小都是成倍的，但是最大容量一直都是2的指数幂，所以说，每次扩容完的大小都是2的指数幂，比如说：当初始状态下达到12时，就会进行扩容，扩容后的大小是32。

> HashMap 作为一种数据结构，元素在 put 的过程中需要进行 hash 运算，目的是计 算出该元素存放在 hashMap 中的具体位置。 hash 运算的过程其实就是对目标元素的 Key 进行 hashcode，再对 Map 的容量进行 取模，而 JDK 的工程师为了提升取模的效率，使用位运算代替了取模运算，这就要求 Map 的容量一定得是 2 的幂。 而作为默认容量，太大和太小都不合适，所以 16 就作为一个比较合适的经验值被采用 了。 为了保证任何情况下 Map 的容量都是 2 的幂，HashMap 在两个地方都做了限制。 集合类 < 164 首先是，如果用户制定了初始容量，那么 HashMap 会计算出比该数大的第一个 2 的 幂作为初始容量。 另外，在扩容的时候，也是进行成倍的扩容，即 4 变成 8，8 变成 16

### 6.12 HashMap中循环链表如何产生？

### 6.13 HashMap为什么是用红黑树，而不是B树？

### 6.14 HashMap为什么线程不安全？

HashMap在进行put操作的时候，可能会造成循环链表，也可能造成数据丢失

### 6.15 HashMap如何实现线程安全？

1. 使用ConcurrentHashMap
2. 使用Collections将HashMap包装成线程安全的类
3. 使用Hashtable，因为版本太老，性能较差，一般不建议使用

### 6.16 HashMap如何解决hash冲突的？

为了解决碰撞，数组中的元素是单向链表类型。当链表长度到达一个阈值时，会将链表转换成红黑树提高性能。而当链表长度缩小到另一个阈值时，又会将红黑树转换回单向链表提高性能

> 当发生哈希冲突后，HashMap会将冲突的元素直接添加在被冲突元素的后面，形成一个链表，当链表的长度超过或等于8时，将链表转换为红黑树的结构

### 6.17 说一说HashMap和Hashtable的区别？

1. 线程安全方面：Hashtable中的方法是同步的，HashMap是默认是不同步的

2. 继承关系方面：HashMap继承与AbstractMap类，实现了Map接口；Hashtable继承了一个陈旧的类Dictionary

3. 是否允许null值：HashMap允许使用null作为键和值，但是使用null作为键的时候只能存在一个；Hashtable不允许是null作为键和值

4. 遍历方式：都采用了Iterator，但Hashtable还使用了Enumeration方式，Hashtable不支持快速失败（fast-fail），HashMap支持快速失败（fast-fail）

5. 扩容机制：Hashtable初始大小是11，每次扩容为原来的2n+1，也就是说HashTable 的链表数组的默认大小是一个素数、奇数。之后的每次扩充结 果也都是奇数。；HashMap初始大小的16，每次扩容为原来的2倍

   > 当哈希表的大小为素数时，简单的取模哈希的结果会更加均匀，所以单从这一 点上看，HashTable 的哈希表大小选择，似乎更高明些。因为 hash 结果越分散 效果越好
   >
   > 在取模计算时，如果模数是 2 的幂，那么我们可以直接使用位运算来得到结 果，效率要大大高于做除法。所以从 hash 计算的效率上，又是 HashMap 更胜一 筹。
   >
   > 但是，HashMap 为了提高效率使用位运算代替哈希，这又引入了哈希分布 不均匀的问题，所以 HashMap 为解决这问题，又对 hash 算法做了一些改进，进 行了扰动计算

哈希值的使用：Hashtable直接使用对象的hashCode，而HashMap需要重新计算hash值

### 6.18 HashMap与ConcurrentHashMap的区别？

1. HashMap是线程不安全的线程Map实现，而Concurrent是线程安全的Map实现
2. HashMap虽然可以使用Collections包装提供的包装类，但是其原理也是将所有功能的委托给Map，而包装类是基于synchronized关键字来确保线程安全的，底层是互斥锁，性能和吞吐量比较低
3. ConcurrentHashMap底层没有使用全局锁来锁住自己，尽可能的减少锁的竞争而导致阻塞和冲突，同时ConcurrentHashMap检索操作是不需要锁的

### 6.19 ConcurrentHashMap是如何实现的？

1. JDK1.7时底层采用Segment数组+HashEntry数组+链表的分段锁技术，
2. JDK1.8时底层采用了Node数组+链表/红黑树的结构。当链表达到一定长度（TREEIFY_THRESHOLD=8）时，链表会转换成红黑树；若减少元素，红黑树可以再次转换成链表
3. 线程安全都是采用volatile修饰的自旋CAS操作
4. 为了保证线程安全，ConcurrentHashMap主要变量都被volatile修饰。这些主要变量与HashMap中的主要变量的最大区别，ConcurrentHashMap有volatile修饰，才能保证线程安全性

### 6.20 ConcurrentHashMap是如何分段分组的？



### 6.21 说说你对LinkedHashMap的理解？

* LinkedHashMap使用的是双向链表来维护key- value的，该链表只负责维护Map的迭代顺序，迭代顺序与key-value 的插入顺序保持一致
* LinkedHashMap可以避免了对HashMap和Hashtable中的key-value进行排序（只需要插入key-value时保持顺序），同时又可以避免使用TreeMap所增加的成本
* LinkedHashMap需要维护插入时的顺序，所以性能略低与HashMap，但是因为它以链表维护内部的顺序，所以在迭代访问Map里的全部元素时有较好的性能

### 6.22 LinkedHashMap的底层原理

1. LinkedHashMap 继承自 HashMap，所以它的底层仍然是基于拉链式散列结构。该结构由数组和链表+红黑树。在此基础上LinkedHashMap 增加了一条双向链表，保持遍历顺序和插入顺序一致的问题

2. 在实现上，LinkedHashMap 很多方法直接继承自 HashMap（比如put remove方法就是直接用的父类的），仅为维护双向链表覆写了部分方法（get（）方法是重写的）

3. LinkedHashMap使用的键值对节点是Entity 他继承了hashMap 的Node,并新增了两个引用，分别是 before 和 after。这两个引用的用途不难理解，也就是用于维护双向链表

4. 链表的建立过程是在插入键值对节点时开始的，初始情况下，让 LinkedHashMap 的 head 和 tail 引用同时指向新节点，链表就算建立起来了。随后不断有新节点插入，通过将新节点接在 tail 引用指向节点的后面，即可实现链表的更新

5. LinkedHashMap 允许使用null值和null键， 线程是不安全的，虽然底层使用了双线链表，但是增删相快了。因为他底层的Entity 保留了hashMap node 的next 属性

### 6.23 TreeMap的底层原理

1. TreeMap实现了SortedMap接口，保证了有序性。默认的排序是根据key值进行升序排序，也可以重写comparator方法来根据value进行排序具体取决于使用的构造方法，不允许有null值null键，TreeMap是线程不安全的

2. TreeMap基于红黑树（Red-Black tree）实现。TreeMap的基本操作 containsKey、get、put 和 remove 的时间复杂度是 log(n)

### 6.24 Map与Set的区别？

Set代表的是无序的，不可重复得集合

Map代表具有映射关系的key-value集合

Set继承自Collection接口，而Map自己就是顶级接口

### 6.25 List与Set的区别？

* List代表的是有序的，可以重复的集合，按照对象进入的顺序保存对象，允许多个null元素对象，可以使用Iterator取出元素，然后遍历，也可以使用get获取指定下标的元素

* Set代表的是无序的，不可重复得集合，允许一个null元素对象。取元素时只能用Iterator接口取的元素，逐一遍历

### 6.26 有哪些线程安全的List？

1. 直接实现类Vector，但是该类比较陈旧了，效率相对不高

2. java.util.concurrent包中的CobyOnWriteArrayList，通过复制的方法来实现线程安全

3. Collections类中将List包装成的SynchronizedList也是线程安全的类，但是Iterator没有加锁，所以在进行Iterator遍历的时候需要手动加锁

### 6.27 ArrayList的数据结构

* ArrayList底层是采用数组来进行数据的存储，数组元素的类型为Object类型，对ArrayList的所有操作底层都是基于数组的

* 对于随机访问的get和set方法，ArrayList要优于LinkedList，因为LinkedList要移动指针。对于新增和删除操作add和remove，LinkedList比较占优势，因为ArrayList要移动数据

### 6.28 TreeSet与HashSet的区别？

1. TreeSet底层是TreeMap实现的 ，HashSet底层是HashMap实现的
2. TreeSet 是二叉树实现的，TreeSet中的数据是自动排好序的，不允许放入null值
3. TreeSet判断两个对象不相等的方式是两个对象通过equals方法返回false，或者通过CompareTo方法比较没有返回0
4. HashSet 是哈希表实现的，HashSet中的数据是无序的，可以放入null，但只能放入一个null，两者中的值都不能重复，就如数据库中唯一约束。
5. HashSet要求放入的对象必须实现HashCode()方法，放入的对象，是以hashcode码作为标识的，而具有相同内容的 String对象，hashcode是一样，所以放入的内容不能重复。但是同一个类的对象可以放入不同的实例

### 6.29 HashSet的底层结构

1. HashSet底层是直接调用HashMap类实现
2. HashMap的基本单元Entry对象是key-value，HashSet运用HashMap满足自身要求时，所有key对应的value都是用一个final的Object的
3. 因为set里面是用的HashMap<E,Object> map，K, V要求是泛型所以必须传一个对象，这个Object字段是静态常量，set的每个元素都共享这个值，已经比较省空间了

### 6.30 BlockingQueue有哪些方法？为什么这样设计？



### 6.31 BlockingQueue如何实现的？



### 6.32 Stream（不是IOStream）有哪些方法？



### 6.33 Vector和SynchronizedList的区别？

1. SynchronizedList有很好的扩展和兼容功能，他可以将所有的 List 的子类转成线程安全的类。

2. 使用 SynchronizedList的时候，进行遍历时要手动进行同步处理。
3. SynchronizedList可以指定锁定的对象

> Vector使用同步方法实现，而SynchronizedList通过同步代码块实现（SynchronizedList的方法基本上都是使用了同步代码块包上了List的方法）。
>
> 但是SynchronizedList 中实现的类并没有都使用 synchronized 同步代码块。其中有 listIterator 和 listIterator(int index)并没有做同步处理。但是 Vector 却对该方法加了方法锁。 所以说，在使用 SynchronizedList 进行遍历的时候要 手动加锁。
>
> 二者的扩容方式也不同（差别就和ArrayList和Vector的区别一样），Vector的扩容默认情况下是自动增长原来的一倍，而ArrayList是扩容原来的50%，所以得到的集合空间总是比实际的大。如果要在集合中保存大量数据，使用Vector会有一些优势（可以通过设置初始值大小来避免浪费资源）
>
> > 因为 SynchronizedList 只是使用同步代码块包裹了 ArrayList 的方法，而 ArrayList 和 Vector 中同名方法的方法体内容并无太大差异，所以在锁定范围和锁的作用域上两者并无却别。
> >
> > 但是在锁定的对象上有区别，SynchronizedList 的同步代码块锁定的是 mutex 对象， Vector 锁定的是 this 对象。SynchronizedList 有一 个构造函数可以传入一个 Object,如果在调用的时候显示的传入一个对象，那么锁定的就是 用户传入的对象。如果没有指定，那么锁定的也是 this 对象

### 6.36 同步代码块与同步方法的区别？

1. 同步代码块的锁的范围是比同步方法小的，一般来说锁的范围是于性能成反比的

2. 同步代码块可以更加精确的控制锁的作用域（锁的作用域就是从锁被获取到其被释放的 时间），同步方法的锁的作用域就是整个方法

3. 静态代码块可以选择对哪个对象加锁，但是静态方法只能给this对象加锁

### 6.37 Set如何保证元素不重复？

Set的实现可以分为两大类，分别是：HashSet和TreeSet

HashSet中，基本操作都是由HashMap底层实现的，因为HashSet底层是通过HashMap存储数据的。向HashSet中插入添加数据时，会计算出元素的hashcode，然后算出元素的存储位置，如果该位置为空，则直接添加，如果不为空，则通过equals方法比较元素是否相等，相等就不添加，不相等就找一个空位添加

TreeSet是通过key进行排序的，元素在插入TreeSet时compareTo方法要被调用，所以TreeSet的元素需要实Comparable接口，TreeSet是通过compareTo方法判断是否重复元素的

### 6.38 HashMap中的hash方法的原理



### 6.39 常见的hash函数

* 直接定址法：直接以关键字k或者k加上某个常数（k + c）作为哈希地址
* 数字分析法：提取关键字中屈指比较均匀的数字作为哈希地址
* 除留余数法：用关键字k除以某个不大于哈希表长度m的数p，将所得的余数作为哈希表地址
* 分段叠加法：按照哈希表地址位数将关键字分成位数相等的几部分，其中最后一部分可以比较短。然后将这几部分相加，舍弃最高进位后的结果就是该关键字的哈希地址
* 平方取中法：如果关键字各个部分分布都不均匀的话，可以先求出它的平方值，然后按照需求去中间的几位作为哈希地址
* 伪随机数法：采用一个伪随机数当做哈希函数

### 6.40 HashMap的数据结构

> java中保存数据有两种比较简单的数据结构：数组和链表。数组的特点是：寻址容易，插入和删除困难，而链表的特点是：寻址困难，插入和删除容易。
>
> 常用的哈希函数的冲突解决办法中有一种犯法叫做链地址法，其实就是讲数组和链表组合在一起，发挥了两者的优势，我们可以将其理解为链表的数组。

外表看似是一个数组，但是每个数组的成员是一个链表。这种数据结构所容纳的所有元素均好汉一个指针，用于元素见得连接诶。我们根据元素的自身特征把元素分配到不同的链表汇中去，反过来我们也是通过这些特征找到正确的链表，再从链表中找打正确的元素。其中根据元素特征计算元素数组下标的方法就是哈希算法，也就是hash()函数。

当我们要对一个链表数组中的某个 元素进行增删的时候，首先要知道他应该保存在这个链表数组中的哪个位置，即他在这个数 组中的下标。而 `hash()`方法的功能就是根据` Key `来定位其在` HashMap `中的位置。 `HashTable`、`ConcurrentHashMap` 同理。

### 6.41 Collection如何迭代？

1. 通过普通for循环迭代
2. 通过增强for循环迭代
3. 使用Iterator迭代
4. 使用Stream迭代

### 6.42 Enumeration和Iterator的区别？

1. 函数接口不同
2. Iterator支持fail-fast机制，而Enumeration不支持

> **注意**：Enumeration 迭代器只能遍历 Vector、Hashtable 这种古老的集合，因此通 常不要使用它，除非在某些极端情况下，不得不使用 Enumeration，否则都应该选择 Iterator 迭代器

### 6.43 如何在遍历的同时删除ArrayList的中的元素？

1. 直接使用普通for循环进行操作

    * 在foreach种不能进行，因为foreach中用到了Iterator比哪里，会导致fail-fast
    * 但是可以使用普通for循环，因为普通for循环中没有用到Iterator遍历，不会导致fail-fast的检验
    * 但是这种方案也存在一个问题，就是remove操作会改变List种元素的下标，可能存在漏删的情况

2. 直接使用Iterator进行操作

    * 直接使用Iterator提供的remove方法，还可以修改到expectedModCount的值，那么也就不会抛出异常了

3. 使用Java8种提供的filter过滤

    * java8种可以把集合转换成流，对于流有一种filter操作，可以对原始Stream进行某项测试，通过测试的元素被留下来生成一个新的Stream

4. 使用增强for循环

    * 我们非常确定在一个集合中，某个即将删除的元素只包含一个的话， 比如对 Set 进行操作，那么其实也是可以使用增强 for 循环的，只要在删除之后，立刻结束循环体， 不要再继续进行遍历就可以了，也就是说不让代码执行到下一次的 next 方法

5. 直接使用fail-safe的集合类

    * java.util.concurrent 包下的容器都是安全失败，可以在多线程下并发使用，并发修改

   > 在 Java 中，除了一些普通的集合类以外，还有一些采用了 fail-safe 机制的集合类。 这样的集合容器在遍历时不是直接在集合内容上访问的，而是先复制原有集合内容，在拷贝 的集合上进行遍历。 由于迭代时是对原集合的拷贝进行遍历，所以在遍历过程中对原集合所作的修改并不能 被迭代器检测到，所以不会触发 ConcurrentModificationException。
   >
   > 基于拷贝内容的优点是避免了 ConcurrentModificationException，但同样地，迭代 器并不能访问到修改后的内容，即：迭代器遍历的是开始遍历那一刻拿到的集合拷贝，在遍 历期间原集合发生的修改迭代器是不知道的

   ### CopyOnWriteArrayList比较与ArrayList所具有的特性

   支持高效率并发且是线程安全的 因为通常需要复制整个基础数组，所以可变操作（ add()、set() 和 remove() 等等）的开销很大 迭代器支持 hasNext(), next()等不可变 操作，但不支持可变 remove()等操作 使用迭代器进行遍历的速度很快，并且不会与其他 线程发生冲突。在构造迭代器时，迭代器依赖于不变的数组快照

-------

#### Stream

Stream使用一种类似用SQL语句从数据库查询数据的直观方式来提供一种对Java集合运算和表达的高阶抽象

Stream的特性和优点：

* 无存储。Stream 不是一种数据结构，它只是某种数据源的一个视图，数据源可以是一 个数组，Java 容器或 I/O channel 等
* 为函数式编程而生。对 Stream 的任何修改都不会修改背后的数据源，比如对 Stream 执行过滤操作并不会删除被过滤的元素，而是会产生一个不包含被过滤元素 的新 Stream。
* 惰式执行。Stream 上的操作并不会立即执行，只有等到用户真正需要结果的时候才会 执行。
* 可消费性。Stream 只能被“消费”一次，一旦遍历过就会失效，就像容器的迭代器那 样，想要再次遍历必须重新生成。

## 7 MySQL


## 8 Spring

### 8.1 Spring框架的好处

spring框架是轻量级的，最基本的版本只有2M左右

spring中集成了包括ioc，aop，事务管理，异常处理，测试，MVC框架等模块，极大的提高了开发人员的效率，也简化了程序的开发。

### 8.2、区分BeanFactory和ApplicationContext？

BeanFactory：采用懒加载，使用语法显示提供资源对象，不支持国际化，不支持基于依赖的注解

ApplicationContext：采用即时加载，需要自己创建和管理资源对象，支持国际化，支持基于依赖的注解

BeanFactory：

* 优点：占用的资源较少，在对资源有较高要求的时候，会有一定的优势
* 缺点：运行速度会慢，而且可能出现空指针异常，通过Bean工厂创建的bean的生命周期比较简单

ApplicationContext：

* 优点：所有的Bean在启动的时候就进行加载了，系统运行的速度比较快，而且在启动的时候可以发现配置文件中存在的问题
* 缺点：所有Bean都是在启动的时候就开始预加载了，因此占用的内存资源比较多

### 8.3、依赖注入

也就是不用创建对象，但是需要描述如何创建的，在配置文件中描述哪些组件需要哪些服务就行了，由ioc容器来装配它们。

### 8.4、IOC容器

spring ioc容器是spring 的核心，ioc指的是控制反转，也就是将创建对象的主动权交给ioc容器去进行管理和创建，并完成对象的注入，ioc容器是使用依赖注入来管理和配置应用程序的组件的，ioc容器会根据配置文件或者注解中的配置数据来管理对象并实例化对象。

### 8.5、 @Autowired和@Resource注解有什么区别？

* @Autowired是Spring提供的注解，@Resource是JDK提供的注解。
* @Autowired是只能按类型注入，@Resource默认按名称注入，也支持按类型注入。
* @Autowired按类型装配依赖对象，默认情况下它要求依赖对象必须存在，如果允许null值，可以设置它required属性为false，如果我们想使用按名称装配，可以结合@Qualifier注解一起使用。
* @Resource有两个中重要的属性：name和type。name属性指定byName，如果没有指定name属性，当注解标注在字段上，即默认取字段的名称作为bean名称寻找依赖对象，当注解标注在属性的setter方法上，即默认取属性名作为bean名称寻找依赖对象。需要注意的是，@Resource如果没有指定name属性，并且按照默认的名称仍然找不到依赖对象时， @Resource注解会回退到按类型装配。但一旦指定了name属性，就只能按名称装配了。

### 8.6、Spring中默认提供的单例是线程安全的吗？

* 不是。
* Spring容器本身并没有提供Bean的线程安全策略。
* 如果单例的Bean是一个无状态的Bean，即线程中的操作不会对Bean的成员执行查询以外的操作，那么这个单例的Bean是线程安全的。比如，Controller、Service、DAO这样的组件，通常都是单例且线程安全的。如果单例的Bean是一个有状态的Bean，则可以采用ThreadLocal对状态数据做线程隔离，来保证线程安全

> 两种常见的解决方案：
>
> * 在bean对象中尽量避免定义可变的成员变量（不太现实）。
> * 在类中定义一个ThreadLocal成员变量，将需要的可变成员变量保存在ThreadLocal中（推荐的一种方式）

### 8.7、说一说你对Spring AOP的理解

​			AOP（Aspect Oriented Programming）是面向切面编程，它是一种编程思想，是面向对象编程（OOP）的一种补充。面向对象编程将程序抽象成各个层次的对象，而面向切面编程是将程序抽象成各个切面。所谓切面，相当于应用对象间的横切点，我们可以将其单独抽象为单独的模块。

​	术语：

* 连接点（join point）：对应的是具体被拦截的对象，因为Spring只能支持方法，所以被拦截的对象往往就是指特定的方法，AOP将通过动态代理技术把它织入对应的流程中。
* 切点（point cut）：有时候，我们的切面不单单应用于单个方法，也可能是多个类的不同方法，这时，可以通过正则式和指示器的规则去定义，从而适配连接点。切点就是提供这样一个功能的概念。
* 通知（advice）：就是按照约定的流程下的方法，分为前置通知、后置通知、环绕通知、事后返回通知和异常通知，它会根据约定织入流程中。
* 目标对象（target）：即被代理对象。
* 引入（introduction）：是指引入新的类和其方法，增强现有Bean的功能。
* 织入（weaving）：它是一个通过动态代理技术，为原有服务对象生成代理对象，然后将与切点定义匹配的连接点拦截，并按约定将各类通知织入约定流程的过程。
* 切面（aspect）：是一个可以定义切点、各类通知和引入的内容，SpringAOP将通过它的信息来增强Bean的功能或者将对应的方法织入流程。

### 8.8、@Component和@Bean的区别

* @Component通常需要类路径扫描来自动装配到spring容器中，是隐式的一对一的映射；而@Bean通常在标有该注解的方法中产生这个bean，告诉spring这是某个类的实例，在我需要的时候还给我，是显式声明单个bean，将类定义与bean的声明分开

* @Bean比@Component自定义性更强，在很多情况下都只能采用@Bean，比如说在使用第三方类库时，如果需要将第三方类库装配到spring容器中，就只能使用@Bean

### 8.9、spring中声明一个类为bean的注解有哪些？

* @Component，通用的注解，可以标识任意类为spring组件，如果一个bean不知道属于哪一层，就可以使用@Component来进行标识
* @Repository，用于标识dao层，主要用于数据库操作
* @Service，用于标识业务层，主要用于处理复杂的业务逻辑
* @Controller，对应MVC的Controller层，主要用于接收用户请求并调用Service层方法返回数据给前端页面

### 8.10、Spring事务有几种？

* 编程式事务：就是在代码中采用硬编码（不推荐使用）
* 声明式事务：在配置文件中进行配置，分为基于xml配置的声明式事务或者基于注解的声明式事务（推荐使用）

### 8.11、Spring事务的隔离级别？

一共有五种隔离级别：

* ISOLATION_DEfAULT:使用后端数据库默认的隔离级别，MySQL默认隔离级别是REPEATABLE_READ
* ISOLATION_UNCOMMITTED:最低的隔离级别，允许读取尚未提交的数据变更，可能会导致脏读、幻读、不可重复读
* ISOLATION_COMMITTED:允许读取并发事务已经提交的数据，可以阻止脏读，但是幻读和不可重复读仍然有可能发生
* ISOLATION_REPEATABLE_READ:对同一字段的多次读取结果都是一致的，除非数据是被本身事务自己所修改，可以阻止脏读和不可重复读，但幻读仍可能发生
* ISOLATION_SERIALIZABLE：最高的隔离级别，完全服从ACID隔离级别，所有的事务一依次逐个执行，这样事务之间就完全不可能产生干扰，该级别可以防止脏读，幻读，不可重复读，但是会严重影响性能，通常也不会使用到该级别

### 8.12、spring如何定义bean的范围

可以通过scope属性来定义，bean 的范围默认有五中：

* singleton：spring中的bean默认都是单例的
* prototype：每次请求都创建一个新的bean
* request：每次http请求都创建一个新的bean。这个bean 的范围只在一次http的request中有效
* session：每次http请求都创建一个新的bean。这个bean 的范围只在一次http的session中有效
* golbal-session：全局session作用域，spring5之后被取消了

### 8.13、spring通过三级缓存解决循环依赖

循环依赖：

AServeice的bean生命周期

1. 实例化——>Aservice的普通对象 ——> AOP ——>AService代理对象 ——>`Map<beanName, AService代理对象>`

2. 填充bService——>单例池 ——>创建Bservice

   BService的bean生命周期

    1. 实例化——>Bservice的普通对象
    2. 填充aService——>单例池 ——>`Map ——>AService代理对象`
    3. 填充其他属性
    4. 其他步骤（包括AOP）——>  AService代理对象
    5. 加入到线程池中

3. 填充其他属性

4. 其他步骤（包括AOP）

5. 加入到线程池中

三级缓存

* 第一级缓存 	单例池	singletonObjects
* 第二级缓存					earlysingletonObjects
* 第三级缓存					singletonFactories





### 8.14、Spring Bean 的生命周期

产生

* 开发人员命令spring启动时开始，启动开始时，通过加载`Bean定义loadBeanDefinitions方法`，用`xml，注解扫描`等各种方式，将定义的Bean类全部找到，并将其放入到容器中的一个`Bean定义集合beanDefinitionMap`中。有了这些Bean定义的集合后，就可以遍历这个集合，然后`通过createBean方法`创建这些Bean对象。

* 创建Bean对象大致分为`构造对象（实例化）、填充属性、初始化实例、注册销毁`四个步骤

    * 构造对象：`通过createBeanInstance方法`进行对象构造，先用`反射机制从Bean定义中的BeanClass`拿到这个类的构造方法。之后准备构造方法需要的参数，`通过Spring内部的单例池`中根据参数的Class类进行查找（如果这个类具有多个实例，则会通过参数名进行查找；如果没有找到，则认为构造信息不完整而抛出异常），参数准备好后就可以`通过反射进行Bean的构造`了（也就是常说的实例化），如果选择的是无参构造，则无需参数，直接构造就行了

      > * 如果获取构造方法时，这个方法只有一个构造方法，那就只能拿这一个，但如果Bean中有多个构造方法时，则会先拿带有@Autowired注解的构造方法，如果多个构造方法都带有@Autowired注解，那个Spring容器将无法判断到底用哪一个，将会抛出异常；如果构造方法都没有带@Autowired注解，那么会优先选用无入参构造方法；如果多个构造方法都无入参，Spring容器无法判断选用哪一个，那就会抛出异常
      > * 不建议在任何Bean中添加多个构造方法，会导致可读性差，不易理解，维护也会很困难

    * 属性填充：在Bean对象构造成功后，就可以进行属性填充了，`通过populateBean方法`为Bean内部的所需的属性进行赋值填充，通常就是带有@AutoWired注解的变量，会通过三级缓存机制进行填充（也就是所谓的依赖注入）

    * 初始化实例：属性填充后，就要`通过InitializeBean方法`对实例进行初始化了。初始化的第一步是初始化容器的相关信息，通过`invokeAwareMethods`方法，为实现了`Aware接口的Bean设置诸如beanName，beanFactory等`容器信息，之后`通过invokeInitMethods方法执行Bean的初始化方法`。这个方法设计开发人员通过实现InitializeBean接口而实现的`afterPropertiesSet`方法。在`afterPropertiesSet`方法执行后，还会继续执行开发人员在Bean上自定义的initMethod方法，在执行初始化方法之前和之后还需要对`Bean后置处理器BeanPostProcessors`进行处理，Spring通过applyBeanProcessorsBeforeInitialization、applyBeanProcessorsAfterInitialization分别在初始化之前和之后处理各种Bean的后置处理器，处理器包括Spring提供的负责AOP处理的AnnotationAwareAspectJAutoProxyCreator、负责构造后@PostConstruct和销毁前@PreDestroy处理的InitDestroyAnnatationBeanPostProcessor等系统级处理器，以及开发人员通过是实现BeanPostProcessor接口的自定义处理器，这些处理器很多，可以通过实现PriorityOrdered接口指定顺序进行逐一处理

      > * Aware接口代表信息感知接口，一旦实现了该接口，就可以在bean实例中感知并获取到对应的信息

    * 注册销毁：以上步骤完成后Bean实例就已经可用了，为了让Bean销毁，Spring通过注册销毁registerDisposableBean方法将实现了销毁接口DisposableBean的Bean进行注册，这样在销毁时就可以执行destroy方法了

* 通过以上四步Bean就被创建好了，之后只需要将这些bean对象通过addSingleton方法放入单例池singletonObjects中就可以被获取和使用了，至此产生Bean就全部完成了，之后开发人员就可以使用这些Bean了

使用

销毁

* 最后执行close方法之后，在销毁之前需要先执行销毁前处理器postProcessBeforeDestruction，这里会执行Bean中@PreDestroy注解的方法，然后通过destroyBeans方法逐一销毁Spring中所有的Bean，销毁时会执行destroy方法，destroy方法执行之后，会通过客户销毁方法invokeCustomDestroyMethod来执行开发人员在Bean上自定义的destroyMethod方法



### 8.15 SpringMVC的工作流程

客户端发送请求后由DispatcherServlet（前端控制器）根据请求调用HandlerMapping（处理器映射）来查询到具体的Handler（处理器），之后将具生成的Handler和HandlerInterceptor（处理器）一并返回给DispatcherServlet，之后DispatcherServlet会去通过Handler找到对应的Controller去执行处理数据，然后返回给DispatcherServlet一个ModleAndView对象，之后DispatcherServlet会通过视图解析器解析并渲染ModleAndView对象，得到一个View视图，最后DispatcherServlet会将View响应给用户的请求。

![SpringMVC执行流程](https://xcy-icu-interview-1304336794.cos.ap-nanjing.myqcloud.com/SpringMVC-Executive-process.png)

## 9 SpringBoot

1、什么是springboot是spring开源组织下的一个子项目，主要提供spring问题的一站式解决方案，简化了spring，让开发者可以快速上手


## 10 Mybatis

### 10.1 #{}和${}的区别是什么？

1. #{}是与预编译处理，${}是字符串替换
2. Mybatis在处理#{}时，会将SQL中的#{}替换为?号，使用PerparedStatement的set方法来赋值；Mybatis在处理\${}时，就是把${}替换成变量的值
3. 使用#{}可以有效的防止SQL注入，提高系统的安全性

> ​	要理解这个题目，需要抓住两点
>
> 1. 符号一般用来当做占位符，既然是占位符，当然就是用来替换的
> 2. 预编译机制。预编译是提前对SQL语句进行预编译，而其后注入的参数将不会在进行SQL编译。在SQL注入时发生在编译的过程中的，因为恶意注入了某些特殊符号，最后被编译成了恶意执行的操作。而预编译机制则可以很好的防止SQL注入。在某些特殊场合下只能用${}，不能用#{}，例如：在使用排序时ORDER BY时，如果使用#{}，则会被解析成ORDER BY “id”，这显然是一种错误的写法
> 3. \#{}是经过预编译的，是安全的；${}是未经过预编译的，仅仅是取变量的值，是非安全的，存在SQL注入

### 10.2 Mybatis框架简介

* Mybatis框架是一个开源的数据持久层框架
* 他的内部封装了通过JDBC访问数据库的操作，支持普通的sql查询、存储过程和高级映射，几乎消除了所有的JDBC代码和参数的手工设置以及结果集的检索
* Mybatis作为持久层框架，其主要思想是将程序中的大量sql语句剥离出来，配置在配置文件当中，实现sql的灵活配置
* 通过将sql语句与程序代码分离，可以在不修改代码的情况下，在配置文件中配置sql语句，提高了程序的可维护性

### 10.3 什么是ORM？

1. ORM是对象关系映射，是一种数据持久化技术，它把对象模型和关系型数据库直接建立了联系，并通过JavaBean对象的方式操作数据库中的数据。
2. 在Mybatis中是通过xml和注解的方式进行配置以达到原始映射，将实体类和sql语句建立起映射关系。
3. Mybatis是一种半自动的ORM实现。

> 之所以说是半自动是因为需要开发者手动写sql语句

### 10.4 Mybatis的优点以及缺点

* 优点
    * 与jdbc相比，减少了进50%的代码量
    * 简单易学
    * Mybatis非常灵活，不会对现有的应用程序和数据库产生任何影响。通过xml配置文件的方式将sql语句与代码分离开，降低了耦合度，提高了程序的可维护性，易于管理和优化，并且拥有可重用性
    * 在xml中提供了支持动态sql的标签l，满足不同的业务需求
    * 提供了映射标签，支持对象与数据库中的ORM字段关系映射

* 缺点
    * 需要编写大量的sql语句，对开发人员sql语句编写有一定要求
    * sql语句依赖于数据库，可移植性差，不能随便更换数据库
* 适用场景
    * Mybatis专注于sql自身，是一个足够灵活的Dao层解决方案。对性能要求很高，或者需求变化多的项目，例如web项目。

### 10.5 什么是数据持久化？

* 数据持久化是将内存中的数据模型转换为存储模型，以及将存储模型转换为内存中的数据模型的统称。
* 当我们编写应用程序操作数据库，对表数据增删改查操作的时候就是数据持久化的操作

> 例如：文件的存储，数据读取等都是数据持久化操作。数据模型可以是任何数据结构或对象的模型、xml、二进制流等

### 10.6 实体类中的属性名和表中的字段名不一样，怎么办？

1. 通过在sql语句中定义字段名的别名，让字段名的别名和实体类的属性名一致
2. 在xml中利用resultMap标签对实体类属性名和字段名建立起对应关系（包括级联属性赋值）
3. 如果属性名是采用的驼峰命名，则可以在全局配置文件中启用驼峰命名规则

### ==10.7 resultMap和resultType的区别？==

* resultType是直接表示返回类型的，而resultMap则是对外部ResultMap的引用，但是resultType跟resultMap不能同时存在
* 在MyBatis进行查询映射时，其实查询出来的每一个属性都是放在一个对应的Map里面的，其中键是属性名，值则是其对应的值

* 当提供的返回类型属性是resultType时，MyBatis会将Map里面的键值对取出赋给resultType所指定的对象对应的属性。所以其实MyBatis的每一个查询映射的返回类型都是ResultMap，只是当提供的返回类型属性是resultType的时候，MyBatis对自动的给把对应的值赋给resultType所指定对象的属性
* 当提供的返回类型是resultMap时，因为Map不能很好表示领域模型，就需要自己再进一步的把它转化为对应的对象，这常常在复杂查询中很有作用

### 10.8 模糊查询like语句该怎么写

1. 通过在java代码中添加sql通配符
2. 在sql语句中利用${}拼接通配符，但是会引起sql注入

```sql
SELECT * FROM t_user WHERE username LIKE '%${username}%';
```

3. 通过CONCAT关键字来进行拼接

```sql
SELECT * FROM t_user WHERE username LIKE CONCAT('%', #{username}, '%');
```

4. 通过“”直接拼接

```sql
SELECT * FROM t_user WHERE username LIKE "%"#{username}#"%";
```

### 10.9 在Mybatis的xml映射文件中，不同的xml映射文件，id是否可以重复？

* 不同的xml映射文件，如果配置了namespace，那么id可以重复；如果没有配置namespace，那么id不能重复；

> namespace+id是作为Map<String, MapperStatement>的key使用的，如果没有namespace，只剩下id，那么id重复会导致数据被覆盖

### 10.10 为什么说Mybatis是半自动ORM映射工具？与全自动的区别在哪里？

* Mybatis在进行查询关联对象时，需要手动编写sql语句，所以称之为半自动ORM映射
* Hibernate属于全自动ORM映射工具，因为在进行查询关联对象时，可以根据对象关系模型直接获取

### 10.11 Mybaits动态sql有什么用？执行原理？有哪些动态sql？

* Mybatis动态sql可以在xml映射文件内，以标签的形式编写动态sql
* 执行原理是根据表达式的值完成逻辑判断并动态拼接sql的功能

* 支持动态sql的标签：`<if><when><choose><otherwise><bind><trim><foreach><sql><include>`等

### 10.12 Mybatis实现一对一（多对一）有几种方式？

* 通过association标签，在标签中配置另一个实体类属性对应的字段
* 级联属性赋值
* 分步查询，分步查询同样需要用到association标签，但在标签中需要通过select属性来指定另一个select 的sql语句，然后通过colum属性来指定查询条件

分步查询第一步，设置字段对应关系，并利用association标签设置另一个字段对应关系，并利用select指定另一个表中的sql语句和column指定查询条件

```xml
<resultMap id="empAndDeptByStepResultMap" type="Emp">
	<id property="eid" column="eid"></id>
	<result property="empName" column="emp_name"></result>
	<association property="dept"
				 select="com.xialuote.mybatis.mapper.DeptMapper.getEmpAndDeptByStepTwo"
				 column="did"></association>
</resultMap>

<select id="getEmpAndDeptByStepOne" resultMap="empAndDeptByStepResultMap">
	select * from t_emp where eid = #{eid}
</select>
```

分步查询第二步，写出另一个sql语句

```xml
<!--此处的resultMap仅是处理字段和属性的映射关系-->
<resultMap id="EmpAndDeptByStepTwoResultMap" type="Dept">
	<id property="did" column="did"></id>
	<result property="deptName" column="dept_name"></result>
</resultMap>

<select id="getEmpAndDeptByStepTwo" resultMap="EmpAndDeptByStepTwoResultMap">
	select * from t_dept where did = #{did}
</select>
```

### 10.13 Mybatis实现一对多有几种方式？

* 通过collection标签处理一对多的映射关系，标签中通过ofType表示该属性所对应的集合中存储数据的类型
* 分步查询
    * 先查询部门，再查询员工，查询员工时根据部门id查询


### 10.14 Mybatis是否支持延迟加载？如果支持，它的实现原理是什么？

* Mybatis仅支持association关联对象和collection关联集合对象的延迟加载，通过在标签中设置fetchType=lazy|eager来开启或关闭
* 在Mybatis配置文件中，可以配置是否启用延迟加载lazyLoadingEnabled=true|false
* 原理是使用cglib创建目标对象的代理对象，当调用目标方法时，进入拦截器方法

### 10.15 Mybaits中批量删除和动态设置表名时应该用#{}还是${}

* 批量删除操作只能使用${}，因为使用#{}会自动添加单引号

```sql
DELETE t_user FROM WHERE IN (${id});

SELECT * FROM ${tableName};
```

### 10.16 Mybatis的一级缓存

- 一级缓存是SqlSession级别的，通过同一个SqlSession查询的数据会被缓存，下次查询相同的数据，就会从缓存中直接获取，不会从数据库重新访问

### 10.17 Mybatis的一级缓存失效的四种情况

1. 不同的SqlSession对应不同的一级缓存
2. 同一个SqlSession但是查询条件不同
3. 同一个SqlSession两次查询期间执行了任何一次增删改操作
4. 同一个SqlSession两次查询期间手动清空了缓存

### 10.18 MyBatis的二级缓存

* 二级缓存是SqlSessionFactory级别，通过同一个SqlSessionFactory创建的SqlSession查询的结果会被缓存；此后若再次执行相同的查询语句，结果就会从缓存中获取

### 10.19 Mybatis的二级缓存开启条件

1. 在核心配置文件中，设置全局配置属性cacheEnabled="true"，默认为true，不需要设置
2. 在映射文件中设置标签<cache />
3. 二级缓存必须在SqlSession关闭或提交之后有效
4. 查询的数据所转换的实体类类型必须实现序列化的接口Serializable

### 10.20 Mybatis二级缓存失效的情况

* 两次查询之间执行了任意的增删改，会使一级和二级缓存同时失效

### 10.21 MyBatis缓存查询的顺序

* 先查二级缓存，因为二级缓存中可能会有其他程序已经查出来的数据，可以拿来直接使用
* 如果二级缓存没有命中，再查一级缓存
* 如果一级缓存也没有命中，则查询数据库
* SqlSession关闭之后，一级缓存中的数据会写入二级缓存

### 10.22 mybatis如何防止sql注入的？

* MyBatis的SQL是一个具有“输入+输出”的功能，类似于函数的结构，parameterType表示了输入的参数类型，resultType表示了输出的参数类型，如果我们想防止SQL注入，可以在参数上下些功夫。

* 代码中使用#的即输入参数在SQL中拼接的部分，不管输入什么参数，最后都会被替换成 ==?== 占位符。这是因为MyBatis启用了预编译功能，在SQL执行前，会先将写好的SQL语句发送给数据库进行编译，执行时，直接使用编译好的SQL，替换占位符“?”就可以了。因为SQL注入只能对编译过程起作用，所以这样的方式就很好地避免了SQL注入的问题

> sql注入：是一种常见的攻击方式。攻击者在界面的表单信息或url输入一下奇怪的sql片段，有可能入侵参数检验不足的应用程序。所以，在应用中需要做一些工作，来防备这样的攻击方式。在一些安全性要求很高的应用中，（比如银行软件），经常将sql语句全部替换成存储过程这样的方式，来防止sql注入。但是在平时开发中吗，一般不需要这种死板的方式。

### 10.23 Mybatis是如何做到sql预编译的呢？

* 在框架底层，是JDBC中的PreparedStatement类在起作用，PreparedStatement是我们很熟悉的Statement的子类，它的对象包含了编译好的SQL语句。这种“准备好”的方式不仅能提高安全性，而且在多次执行同一个SQL时，能够提高效率。原因是SQL已编译好，再次执行时无需再编译

### 10.24 Mybatis是如何进行分页的？



### 10.25 分页插件的原理是什么？


## 11 Redis

### 11.1 redis是什么，优缺点？

reids本质上是一个key-value类型的内存数据库，所有的数据都是加载到内存中进行操作的，定期会通过异步操作吧数据库中的数据flush到硬盘上

因为是异步操作，redis的性能无疑是非常好的，每秒钟大概可以读写10万次，是已知性能最快的key-value数据库之一

**优点：**

* 读写性能极高，redis读取的速度可以达到10万次以上
* 支持数据持久化马，支持AOF和RDB两种持久化方式
* 支持事务，Redis的所有操作都是原子性的，意思就是要么执行成功，要么就不执行，单个操作是原子性的，多个操作也支持事务，即原子性
* 数据结构丰富，支持String，set，zset，list，hash等数据结构
* 支持主从复制，主机会自动将数据同步到从机，可以进行读写分离
* 丰富的特性-redis还支持public，通知，key过期等特性

**缺点：**

* 数据库因为是在内存中的，所以会受到物理内存的限制，不能作为海量数据库的高性能读写，更加适合较少数据的高性能操作和运算上
* 主机宕机，宕机前会有部分数据未能及时保存到从机，切换IP后还会引入数据不一致的问题，降低了系统的可用性

----

### 11.2 Redis为什么这么快？

* 内存模型， redis使用内存进行存储，没有磁盘io上的开销，数据存储在内存中，类似于HashMap，HashMap的优势就是查询操作的时间复杂度是O(1)
* Redis6.0以前使用的是单线程处理请求，避免了多个线程之间因为切换和锁资源的竞争导致的开销
* 非阻塞IO，reids使用多路复用IO技术，将epoll做i为I/O多路复用技术的实现，再加上redis自身事件处理模型将epoll中的连接，读写，关闭都转换为事件，不在网络I/O上浪费过多的时间
* 优化的数据结构，redis拥有很多可以直接应用的数据结构的实现，应用层可以直接使用这种数据结构以提升性能
* 使用的底层模型不同，redis直接构建了VM内存机制，因为一般的系统调用系统函数的话，会浪费一定的时间去移动和请求

---

### 11.3 为什么使用redis作为缓存

**从高并发上：**

* 直接操作缓存能够承受的请求是远远大于直接访问数据库的，所以我们可以把数据已中的一部分数据转移到缓存中，着用用户的一部分请求就会直接到缓存中查找，就不用经过数据库了

**从高性能上：**

* 用户第一次访问数据库的某些数据，因为是从硬盘上读取的，所以过程比较慢，将用户访问的数据存在缓存中，下一次再访问这些数据的时候就可以直接从缓存中获取了。操作缓存就是最直接操作内存，所以速度相当快。如果数据库中的对应数据改变后，同步到缓存中相应的数据就可以了

----

### 11.4 redis的常用场景有哪些？

缓存

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

### 11.5 redis的数据类型有哪些？

**常见的五种：String、Hash、Set、List、SortedSet**

**三种特殊的数据类型：Bitmap、HyperLogLog、Geospatial**，其中HyperLogLog、Bitmap的底层都是String数据类型，Geospatial的底层是SortedSet数据类型

**常用的五种数据类型：**

1. String：String是最常见的数据类型了，普通的key-value存储都可以归为此类，其中Value既可以是数字也可以是字符串。使用 场景：常规的key-value缓存应用，常规计数：微博数，粉丝数
2. Hash：Hash是一个键值（key=>value）的集合。

### 11.6 redis字符串

String是redis的基本数据类型，String类型时二进制安全的，意味着redis的String可以包含任何数据（比如图片或者序列化对象）

> redis中字符串value最多可以是523M

### 11.7 redis事务

redis事务时一个单独的隔离操作：事务中的所有命令都会序列化、按顺序地执行。事务在执行的过程中，不会被其他客户端发来的命令请求所打断

redis事务的主要作用就是串联多个命令防止别的命令插队

#### 11.8 multi、exec、discard

从输入`mult`i命令开始，输入的命令都会依次进入命令队列中，但不会执行，直到输入`exec`后，redis会将之前的命令队列中的命令依次执行，组队的过程中可以通过`discard`来放弃组队

在组队过程中，只要有任何一个命令出现error，那么全部的命令都不会执行成功

在执行过程中，某一个命令出现error，那么除了这个命令，其他的命令都会执行成功







