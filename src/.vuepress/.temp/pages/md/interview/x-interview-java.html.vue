<template><div><p><code v-pre>more</code> Java面试题总结（持续更新）。</p>
<!-- more -->
<h1 id="java面试题总结" tabindex="-1"><a class="header-anchor" href="#java面试题总结" aria-hidden="true">#</a> Java面试题总结</h1>
<h2 id="_1-java-基础" tabindex="-1"><a class="header-anchor" href="#_1-java-基础" aria-hidden="true">#</a> 1 Java 基础</h2>
<h3 id="_1-1-jdk与jre的区别" tabindex="-1"><a class="header-anchor" href="#_1-1-jdk与jre的区别" aria-hidden="true">#</a> 1.1 JDK与JRE的区别？</h3>
<p>Java运行时环境(JRE)是将要执行Java程序的Java虚拟机。它同时也包含了执行applet需要的浏览器插件。Java开发工具包(JDK)是完整的Java软件开发包，包含了JRE，编译器和其他的工具(比如：JavaDoc，Java调试器)，可以让开发者开发、编译、执行Java应用程序</p>
<h3 id="_1-2-class文件与二进制文件的区别" tabindex="-1"><a class="header-anchor" href="#_1-2-class文件与二进制文件的区别" aria-hidden="true">#</a> 1.2 class文件与二进制文件的区别？</h3>
<p>class是java通过编译器预编译的一种java的执行文件的存在形式，他本身是二进制文件，但是不能直接执行，需要通过java虚拟机来解释执行</p>
<h3 id="_1-3-为什么要使用字节码文件" tabindex="-1"><a class="header-anchor" href="#_1-3-为什么要使用字节码文件" aria-hidden="true">#</a> 1.3 为什么要使用字节码文件？</h3>
<p>主要原因是为了跨平台，只要在不同的操作系统上安装了java的运行环境，然后就可以在任一平台上通过编译器编译为class文件后再其他的装有java运行环境的平台上运行了</p>
<h3 id="_1-4-java是解释性语言还是编译性语言" tabindex="-1"><a class="header-anchor" href="#_1-4-java是解释性语言还是编译性语言" aria-hidden="true">#</a> 1.4 java是解释性语言还是编译性语言？</h3>
<p>由于java语言跨平台的特性，虽然java也需要编译，编译成.class文件，但是并不是机器可以识别的语言，而是字节码，最终还是需要 jvm的解释，才能在各个平台执行，如果单说java语言是编译性和解释性共有的。</p>
<h3 id="_1-5-java的基本数据类型" tabindex="-1"><a class="header-anchor" href="#_1-5-java的基本数据类型" aria-hidden="true">#</a> 1.5 java的基本数据类型？</h3>
<p>byte（1）、short（2）、int（4）、long（8）、float（4）、double（8）、char（2）、boolean（1）</p>
<h3 id="_1-6-为什么要有包装类" tabindex="-1"><a class="header-anchor" href="#_1-6-为什么要有包装类" aria-hidden="true">#</a> 1.6 为什么要有包装类？</h3>
<p>java本身秉承着万物皆对象，但是其中有八个基本数据类型却与对象格格不入。它们不具备对象的特性，因此为每个基本数据类型出了包装类</p>
<h3 id="_1-7-自动拆箱与自动装箱" tabindex="-1"><a class="header-anchor" href="#_1-7-自动拆箱与自动装箱" aria-hidden="true">#</a> 1.7 自动拆箱与自动装箱</h3>
<p>自动拆箱指由基本数据类型的包装类转为对象基本数据类型</p>
<p>自动拆箱指由基本数据类型转为对应的包装类</p>
<h3 id="_1-8-int的自动装箱有几种" tabindex="-1"><a class="header-anchor" href="#_1-8-int的自动装箱有几种" aria-hidden="true">#</a> 1.8 int的自动装箱有几种？</h3>
<p>=、new</p>
<h3 id="_1-9-int的表示范围" tabindex="-1"><a class="header-anchor" href="#_1-9-int的表示范围" aria-hidden="true">#</a> 1.9 int的表示范围</h3>
<p>int占4个字节（8位），范围：-2^31 ~ 2^31 - 1</p>
<h3 id="_1-10-java中如何表示精确的数字" tabindex="-1"><a class="header-anchor" href="#_1-10-java中如何表示精确的数字" aria-hidden="true">#</a> 1.10 java中如何表示精确的数字</h3>
<p>使用bigdecimal</p>
<h3 id="_1-11-string定义的字符串长度有限制吗" tabindex="-1"><a class="header-anchor" href="#_1-11-string定义的字符串长度有限制吗" aria-hidden="true">#</a> 1.11 String定义的字符串长度有限制吗？</h3>
<p>有，具体范围时65535，也就是int的表示范围</p>
<h3 id="_1-12-switch支持哪些类型" tabindex="-1"><a class="header-anchor" href="#_1-12-switch支持哪些类型" aria-hidden="true">#</a> 1.12 Switch支持哪些类型？</h3>
<p>String、enum、int、char</p>
<h3 id="_1-13-java的运行时区域有哪些" tabindex="-1"><a class="header-anchor" href="#_1-13-java的运行时区域有哪些" aria-hidden="true">#</a> 1.13 java的运行时区域有哪些？</h3>
<p>方法区,堆,虚拟机栈,本地方法区,程序计数器</p>
<p>方法区和堆是所有线程共享的，而后面三个是线程独享的</p>
<h3 id="_1-14-堆和栈的区别" tabindex="-1"><a class="header-anchor" href="#_1-14-堆和栈的区别" aria-hidden="true">#</a> 1.14 堆和栈的区别？</h3>
<ol>
<li>
<p>申请方式的不同。栈由系统自动分配，而堆是人为申请开辟</p>
</li>
<li>
<p>申请大小的不同。栈获得的空间较小，而堆获得的空间较大</p>
</li>
<li>
<p>申请效率的不同。栈由系统自动分配，速度较快，而堆一般速度比较慢</p>
</li>
<li>
<p>存储内容的不同。栈在函数调用时，函数调用语句的下一条可执行语句的地址第一个进栈，然后函数的各个参数进栈，其中静态变量是不入栈的。而堆一般是在头部用一个字节存放堆的大小，堆中的具体内容是人为安排;</p>
</li>
<li>
<p>底层不同。栈是连续的空间，而堆是不连续的空间</p>
</li>
</ol>
<blockquote>
<p>堆与栈的区别有：1、栈由系统自动分配，而堆是人为申请开辟；2、栈获得的空间较小，而堆获得的空间较大；3、栈由系统自动分配，速度较快，而堆一般速度比较慢；4、栈是连续的空间，而堆是不连续的空间.</p>
</blockquote>
<h3 id="_1-15-是否可以在static环境中访问非static变量" tabindex="-1"><a class="header-anchor" href="#_1-15-是否可以在static环境中访问非static变量" aria-hidden="true">#</a> 1.15 是否可以在static环境中访问非static变量？</h3>
<p>static变量在Java中是属于类的，它在所有的实例中的值是一样的。当类被Java虚拟机载入的时候，会对static变量进行初始化。如果你的代码尝试不用实例来访问非static的变量，编译器会报错，因为这些变量还没有被创建出来，还没有跟任何实例关联上</p>
<h3 id="_1-16-接口与抽象类的区别" tabindex="-1"><a class="header-anchor" href="#_1-16-接口与抽象类的区别" aria-hidden="true">#</a> 1.16 接口与抽象类的区别？</h3>
<ul>
<li>
<p>抽象类可以存在普通成员方法， 而接口只能存在public abstract 方法</p>
</li>
<li>
<p>抽象类中的成员变量可以是各种类型的，而接口中的成员变量只能是public static final类型的</p>
</li>
<li>
<p>抽象类只能继承一个，接口可以实现多个</p>
</li>
</ul>
<h2 id="_2-java-io" tabindex="-1"><a class="header-anchor" href="#_2-java-io" aria-hidden="true">#</a> 2 Java IO</h2>
<h3 id="_2-1-字符流、字节流" tabindex="-1"><a class="header-anchor" href="#_2-1-字符流、字节流" aria-hidden="true">#</a> 2.1 字符流、字节流</h3>
<h4 id="_2-1-1-字节与字符" tabindex="-1"><a class="header-anchor" href="#_2-1-1-字节与字符" aria-hidden="true">#</a> 2.1.1 字节与字符</h4>
<p>Bit是最小的二进制单位，是计算机的操作部分，取值为0或1</p>
<p>Byte（字节）是计算机操作数据的最小单位由8位bit组成，取值为-128-127</p>
<p>Char（字符）用户可读写的最小单位，在java中由16位bit组成，取值0-65535</p>
<p><strong>字节流</strong></p>
<p>操作 byte 类型数据，主要操作类是 OutputStream、InputStream 的子类；不用缓冲区，直接对文件本身操作</p>
<p><strong>字符流</strong></p>
<p>操作字符类型数据，主要操作类是 Reader、Writer 的子类；使用缓冲区缓冲字符， 不关闭流就不会输出任何内容</p>
<p><strong>转换</strong></p>
<ul>
<li>OutputStreamWriter：是 Writer 的子类，将输出的字符流变为字节流，即将一个字 符流的输出对象变为字节流输出对象。</li>
<li>InputStreamReader：是 Reader 的子类，将输入的字节流变为字符流，即将一个字 节流的输入对象变为字符流的输入对象</li>
</ul>
<h3 id="_2-2-输入流、输出流" tabindex="-1"><a class="header-anchor" href="#_2-2-输入流、输出流" aria-hidden="true">#</a> 2.2 输入流、输出流</h3>
<p>输入、输出，有一个参照物，参照物就是存储数据的介质。如果是把对象读入到介质中， 这就是输入。从介质中向外读数据，这就是输出。 所以，输入流是把数据写入存储介质的。输出流是从存储介质中把数据读取出来。</p>
<h4 id="_2-2-1-字节流和字符流之间的转换" tabindex="-1"><a class="header-anchor" href="#_2-2-1-字节流和字符流之间的转换" aria-hidden="true">#</a> 2.2.1 字节流和字符流之间的转换</h4>
<ul>
<li>OutputStreamWriter 是字符流通向字节流的桥梁</li>
<li>InputStreamReader 是字节流通向字符流的桥梁</li>
</ul>
<h3 id="_2-3-同步、异步" tabindex="-1"><a class="header-anchor" href="#_2-3-同步、异步" aria-hidden="true">#</a> 2.3 同步、异步</h3>
<p>同步与异步描述的是被调用者的。</p>
<p>如 A 调用 B： 如果是同步，B 在接到 A 的调用后，会立即执行要做的事。A 的本次调用可以得到结 果。</p>
<p>如果是异步，B 在接到 A 的调用后，不保证会立即执行要做的事，但是保证会去做，B 在做好了之后会通知 A。A 的本次调用得不到结果，但是 B 执行完之后会通知A</p>
<h3 id="_2-4-阻塞、非阻塞" tabindex="-1"><a class="header-anchor" href="#_2-4-阻塞、非阻塞" aria-hidden="true">#</a> 2.4 阻塞、非阻塞</h3>
<p>阻塞与非阻塞描述的是调用者的。</p>
<p>如 A 调用 B： 如果是阻塞，A 在发出调用后，要一直等待，等着 B 返回结果。</p>
<p>如果是非阻塞，A 在发出调用后，不需要等待，可以去做自己的事情</p>
<h3 id="_2-5-同步-异步和阻塞-非阻塞之间的区别" tabindex="-1"><a class="header-anchor" href="#_2-5-同步-异步和阻塞-非阻塞之间的区别" aria-hidden="true">#</a> 2.5 同步，异步和阻塞，非阻塞之间的区别</h3>
<p><code v-pre>同步</code>、<code v-pre>异步</code>，是描述被调用方的。</p>
<p><code v-pre>阻塞</code>，<code v-pre>非阻塞</code>，是描述调用方的。</p>
<p>同步不一定阻塞，异步也不一定非阻塞。没有必然关系。</p>
<h3 id="_2-6-linux5种io模型" tabindex="-1"><a class="header-anchor" href="#_2-6-linux5种io模型" aria-hidden="true">#</a> 2.6 Linux5种IO模型</h3>
<p>阻塞式IO</p>
<p>非阻塞式IO</p>
<p>IO复用</p>
<p>信号驱动IO</p>
<p>异步IO</p>
<h3 id="_2-7-bio、nio和aio的区别、三种io的用法与原理" tabindex="-1"><a class="header-anchor" href="#_2-7-bio、nio和aio的区别、三种io的用法与原理" aria-hidden="true">#</a> 2.7 BIO、NIO和AIO的区别、三种IO的用法与原理</h3>
<h2 id="_3-java-反射" tabindex="-1"><a class="header-anchor" href="#_3-java-反射" aria-hidden="true">#</a> 3 Java 反射</h2>
<h3 id="_3-1-反射的作用" tabindex="-1"><a class="header-anchor" href="#_3-1-反射的作用" aria-hidden="true">#</a> 3.1 反射的作用</h3>
<ol>
<li>在运行时判断任意一个对象那个所属的类</li>
<li>在运行时判断任意一个类所具有的成员变量和方法</li>
<li>在运行时任意调用一个对象的方法</li>
<li>在运行时构造任意一个类的对象</li>
</ol>
<h3 id="_3-2-class类" tabindex="-1"><a class="header-anchor" href="#_3-2-class类" aria-hidden="true">#</a> 3.2 Class类</h3>
<p>Java 的 Class 类是 java 反射机制的基础,通过 Class 类我们可以获得关于一个类的相关信息</p>
<h3 id="_3-3-反射机制的作用" tabindex="-1"><a class="header-anchor" href="#_3-3-反射机制的作用" aria-hidden="true">#</a> 3.3 反射机制的作用</h3>
<ol>
<li>在运行时判断任意一个对象所属的类</li>
<li>在运行时获取类的对象</li>
<li>你在运行时访问 java 对象的属性，方法，构造方法等</li>
</ol>
<blockquote>
<p>静态编译：在编译时确定类型，绑定对象，即通过</p>
<p>动态编译：运行时确定类型，绑定对象。动态编译最大限度发挥了 Java 的灵活性，体现了多态的应用，有以降低类之间的藕合性</p>
</blockquote>
<h3 id="_3-4-反射机制的优缺点" tabindex="-1"><a class="header-anchor" href="#_3-4-反射机制的优缺点" aria-hidden="true">#</a> 3.4 反射机制的优缺点</h3>
<p>优点：</p>
<ul>
<li>可以实现动态创建对象和编译，体现出很大的灵活性（特别是在 J2EE 的开发中它的灵活性就表现的十分明显）</li>
<li>通过反射机制我们可以获得类的各种内容， 进行反编译。对于 JAVA 这种先编译再运行的语言来说，反射机制可以使代码更加灵活， 更加容易实现面向对象</li>
</ul>
<p>缺点：</p>
<ul>
<li>对性能有影响。使用反射基本上是一种解释操作，我们可以告诉 JVM，我们希望做什么并且让它满足我们的要求。这类操作总是慢于直接执行相同的操作</li>
</ul>
<h3 id="_3-5-反射与工厂模式实现ioc" tabindex="-1"><a class="header-anchor" href="#_3-5-反射与工厂模式实现ioc" aria-hidden="true">#</a> 3.5 反射与工厂模式实现IOC</h3>
<blockquote>
<p>我们可以把 IOC 容器的工作模式看做是工厂模式的升华，可以把 IOC 容器看作是一个 工厂，这个工厂里要生产的对象都在配置文件中给出定义，然后利用编程语言提供的反射机 制，根据配置文件中给出的类名生成相应的对象。从实现来看，IOC 是把以前在工厂方法 里写死的对象生成代码，改变为由配置文件来定义，也就是把工厂和对象生成这两者独立分 隔开来，目的就是提高灵活性和可维护性</p>
</blockquote>
<h3 id="_3-6-使用ioc框架应该注意什么" tabindex="-1"><a class="header-anchor" href="#_3-6-使用ioc框架应该注意什么" aria-hidden="true">#</a> 3.6 使用IOC框架应该注意什么</h3>
<p>使用 IOC 框架产品能够给我们的开发过程带来很大的好处，但是也要充分认识引入 I OC 框架的缺点，做到心中有数，杜绝滥用框架。</p>
<ol>
<li>软件系统中由于引入了第三方 IOC 容器，生成对象的步骤变得有些复杂，本来是两者 之间的事情，又凭空多出一道手续，所以，我们在刚开始使用 IOC 框架的时候，会感 觉系统变得不太直观。所以，引入了一个全新的框架，就会增加团队成员学习和认识的 培训成本，并且在以后的运行维护中，还得让新加入者具备同样的知识体系</li>
<li>由于 IOC 容器生成对象是通过反射方式，在运行效率上有一定的损耗。如果你要追求 运行效率的话，就必须对此进行权衡</li>
<li>具体到 IOC 框架产品（比如 Spring）来讲，需要进行大量的配制工作，比较繁琐，对 于一些小的项目而言，客观上也可能加大一些工作成本</li>
<li>IOC 框架产品本身的成熟度需要进行评估，如果引入一个不成熟的 IOC 框架产品，那 么会影响到整个项目，所以这也是一个隐性的风险</li>
</ol>
<blockquote>
<p>一些工作量不大的项目或者产品，不太适合使用 IOC 框架产品。另外，如果团队成员的知识能力欠缺，对于 IOC 框架产品缺乏深入的理解，也 不要贸然引入。最后，特别强调运行效率的项目或者产品，也不太适合引入 IOC 框架产品， 像 WEB2.0 网站就是这种情况。</p>
</blockquote>
<h3 id="_3-7-动态代理与反射的关系" tabindex="-1"><a class="header-anchor" href="#_3-7-动态代理与反射的关系" aria-hidden="true">#</a> 3.7 动态代理与反射的关系</h3>
<p>反射是动态代理的一种实现方式</p>
<h3 id="_3-8-动态代理的几种实现方式" tabindex="-1"><a class="header-anchor" href="#_3-8-动态代理的几种实现方式" aria-hidden="true">#</a> 3.8 动态代理的几种实现方式</h3>
<p>Java 中，实现动态代理有两种方式：</p>
<ol>
<li>JDK 动态代理：java.lang.reflect 包中的 Proxy 类和 InvocationHandler 接口提 供了生成动态代理类的能力</li>
<li>Cglib 动态代理：Cglib (Code Generation Library )是一个第三方代码生成类 库，运行时在内存中动态生成一个子类对象从而实现对目标对象功能的扩展</li>
</ol>
<p>JDK 动态代理和 Cglib 动态代理的区别 JDK 的动态代理有一个限制，就是使用动态 代理的对象必须实现一个或多个接口。如果想代理没有实现接口的类，就可以使用 CGLIB 实现</p>
<p><strong>Cglib 与动态代理最大的区别就是</strong></p>
<p>使用动态代理的对象必须实现一个或多个接口 使用 cglib 代理的对象则无需实现接口，达到代理类无侵入</p>
<h3 id="_3-9-aop" tabindex="-1"><a class="header-anchor" href="#_3-9-aop" aria-hidden="true">#</a> 3.9 AOP</h3>
<p>Spring AOP 中的动态代理主要有两种方式，JDK 动态代理和 CGLIB 动态代理
JDK 动态代理通过反射来接收被代理的类，并且要求被代理的类必须实现一个接口。JDK动态代理的核心是InvocationHandler接口和Proxy类
如果目标类没有实现接口，那么 Spring AOP 会选择使用 CGLIB 来动态代理目标类
CGLIB（Code Generation Library），是一个代码生成的类库，可以在运行时动态 的生成某个类的子类，注意，CGLIB 是通过继承的方式做的动态代理，因此如果某个类被 标记为 final，那么它是无法使用 CGLIB 做动态代理</p>
<h2 id="_4-java-枚举" tabindex="-1"><a class="header-anchor" href="#_4-java-枚举" aria-hidden="true">#</a> 4 Java 枚举</h2>
<h3 id="_4-1-定义" tabindex="-1"><a class="header-anchor" href="#_4-1-定义" aria-hidden="true">#</a> 4.1 定义</h3>
<p>枚举类型（enum type）是指由一组固定的常量组成合法的类型。Java 中由关键字 enum 来定义一个枚举类型。下面就是 java 枚举类型的定义</p>
<h3 id="_4-2-特点" tabindex="-1"><a class="header-anchor" href="#_4-2-特点" aria-hidden="true">#</a> 4.2 特点</h3>
<ol>
<li>使用关键字 enum</li>
<li>类型名称</li>
<li>一串允许的值</li>
<li>枚举可以单独定义在一个文件中，也可以嵌在其它 Java 类中，枚举类型和泛型中除了这样的基本要求外，用户还有一些其他选择</li>
<li>枚举可以实现一个或多个接口（Interface）</li>
<li>可以定义新的变量</li>
<li>可以定义新的方法</li>
<li>可以定义根据具体枚举值而相异的类</li>
</ol>
<blockquote>
<p><strong>总结</strong>：每当需要一组固定的常量的时候，如一周的天数、一年 四季等。或者是在我们编译前就知道其包含的所有值的集合。Java 1.5 的枚举能满足绝大 部分程序员的要求的，它的简明，易用的特点是很突出的</p>
</blockquote>
<h3 id="_4-3-枚举的实现" tabindex="-1"><a class="header-anchor" href="#_4-3-枚举的实现" aria-hidden="true">#</a> 4.3 枚举的实现</h3>
<p>通过反编译，我们可以看到，public final class T extends Enum，说明，该 类是继承了 Enum 类的，同时 final 关键字告诉我们，这个类也是不能被继承的</p>
<p>当我们使用 enmu 来定义一个枚举类型的时候，编译器会自动帮我们创建一个 final 类型的类继承 Enum类，所以枚举类型不能被继承</p>
<h3 id="_4-4-枚举与单例" tabindex="-1"><a class="header-anchor" href="#_4-4-枚举与单例" aria-hidden="true">#</a> 4.4 枚举与单例</h3>
<p>当一个 Java 类第一次被真正使用 到的时候静态资源被初始化、Java 类的加载和初始化过程都是线程安全的（因为虚拟机在 加载枚举的类的时候，会使用 ClassLoader 的 loadClass 方法，而这个方法使用同步代 码块保证了线程安全）。所以，创建一个 enum 类型是线程安全的</p>
<p>也就是说，我们定义的一个枚举，在第一次被真正用到的时候，会被虚拟机加载并初始 化，而这个初始化过程是线程安全的。而我们知道，解决单例的并发问题，主要解决的就是 初始化过程中的线程安全问题</p>
<p>所以，由于枚举的以上特性，枚举实现的单例是天生线程安全的</p>
<h3 id="_4-5-java-枚举如何比较" tabindex="-1"><a class="header-anchor" href="#_4-5-java-枚举如何比较" aria-hidden="true">#</a> 4.5 Java 枚举如何比较</h3>
<p>java 枚举值比较用 == 和 equals 方法没啥区别，两个随便用都是一样的效果</p>
<p>因为枚举 Enum 类的 equals 方法默认实现就是通过 == 来比较的</p>
<p>类似的 Enum 的 compareTo 方法比较的是 Enum 的 ordinal 顺序大小</p>
<p>类似的还有 Enum 的 name 方法和 toString 方法一样都返回的是 Enum 的 name 值</p>
<h3 id="_4-6-switch-对枚举的支持" tabindex="-1"><a class="header-anchor" href="#_4-6-switch-对枚举的支持" aria-hidden="true">#</a> 4.6 switch 对枚举的支持</h3>
<p>Java 1.7 之前 switch 参数可用类型为 short、byte、int、char，枚举类型之所以 能使用其实是编译器层面实现的。</p>
<p>编译器会将枚举 switch 转换，但是实质还是 int 参数类型</p>
<h2 id="_5-java-泛型" tabindex="-1"><a class="header-anchor" href="#_5-java-泛型" aria-hidden="true">#</a> 5 Java 泛型</h2>
<h3 id="泛型" tabindex="-1"><a class="header-anchor" href="#泛型" aria-hidden="true">#</a> 泛型</h3>
<p>Java 泛型（ generics） 是 JDK 5 中引⼊的⼀个新特性， 允许在定义类和接口的时候使⽤类型参数（ type parameter） 。 声明的类型参数在使⽤时⽤具体的类型来替换。 泛型最主要的应⽤是在 JDK 5 中的 新集合类框架中</p>
<p>泛型最⼤的好处是可以提⾼代码的复⽤性。 以 List 接口为例，我们可以将 String、 Integer 等类型放⼊List 中， 如不⽤泛型， 存放 String 类型要写⼀个 List 接口， 存放 Integer 要写另外⼀个 List 接口</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<ol>
<li>虚拟机中没有泛型，只有普通类和普通方法,所有泛型类的类型参数在编译时都会被 擦除,泛型类并没有自己独有的 Class 类对象。</li>
<li>创建泛型对象时请指明类型，让编译器尽早的做参数检查（Effective Java，第23条：请不要在新代码中使用原生态类型）</li>
<li>不要忽略编译器的警告信息，那意味着潜在的ClassCastException等着你</li>
<li>静态变量是被泛型类的所有实例所共享的。对于声明为 MyClass的类，访问其中的 态变量的方法仍然是MyClass.myStaticVar。不管是通过new MyClass还是new MyClass创建的对象，都是共享一个静态变量</li>
<li>泛型的类型参数不能用在Java异常处理的catch语句中。因为异常处理是由JVM在运行时刻来进行的。由于类型信息被擦除，JVM 是无法区分两个异常类型<code v-pre>MyException&lt;A&gt;</code>和<code v-pre>MyException&lt;B&gt;</code>的。对于 JVM 来说，它们都是 MyException 类型的。也就无法执行与异常对应的 catch 语句</li>
</ol>
</div>
<h3 id="泛型ktve-object等的含义" tabindex="-1"><a class="header-anchor" href="#泛型ktve-object等的含义" aria-hidden="true">#</a> 泛型KTVE?object等的含义</h3>
<p>E - Element (在集合中使用，因为集合中存放的是元素)</p>
<p>T - Type（Java 类）</p>
<p>K - Key（键）</p>
<p>V - Value（值）</p>
<p>N - Number（数值类型）</p>
<p>？ - 表示不确定的 java 类型（无限制通配符类型）</p>
<p>S、U、V - 2nd、3rd、4th types</p>
<p>Object - 是所有类的根类，任何类的对象都可以设置给该 Object 引用变量，使用的 时候可能需要类型强制转换，但是用使用了泛型 T、E 等这些标识符后，在实际用之前类型 就已经确定了，不需要再进行类型强制转换</p>
<h3 id="限定通配符和非限定通配符" tabindex="-1"><a class="header-anchor" href="#限定通配符和非限定通配符" aria-hidden="true">#</a> 限定通配符和非限定通配符</h3>
<p>限定通配符对类型进⾏限制， 泛型中有两种限定通配符：</p>
<p>表示类型的上界，格式为：&lt;？ extends T&gt;，即类型必须为T类型或者T的子类</p>
<p>表示类型的下界，格式为：&lt;？ super T&gt;，即类型必须为 T类或T的父类</p>
<p>泛型类型必须⽤限定内的类型来进⾏初始化，否则会导致编译错误</p>
<p>⾮限定通配符表示可以⽤任意泛型类型来替代，类型为&lt; T &gt;</p>
<h3 id="list-object-和原始类型list之间的区别" tabindex="-1"><a class="header-anchor" href="#list-object-和原始类型list之间的区别" aria-hidden="true">#</a> <code v-pre>List&lt;Object&gt;</code>和原始类型List之间的区别</h3>
<p>原始类型List和带参数类型<code v-pre>List&lt;Object&gt;</code>之间的主要区别是，在编译时编译器不会对原始类型进行类型安全检查，却会对带参数的类型进行检查</p>
<p>通过使用Object作为类型，可以告知编译器该方法可以接受任何类型的对象，比如String或Integer</p>
<p>它们之间的第二点区别是，你可以把任何带参数的类型传递给原始类型List，但却不能把<code v-pre>List&lt;String&gt;</code>传递给接受<code v-pre>List&lt;Object&gt;</code>的方法，因为会产生编译错误</p>
<h3 id="list-和list-object-之间的区别是什么" tabindex="-1"><a class="header-anchor" href="#list-和list-object-之间的区别是什么" aria-hidden="true">#</a> <code v-pre>List&lt;?&gt;</code>和<code v-pre>List&lt;Object&gt;</code>之间的区别是什么？</h3>
<p><code v-pre>List&lt;?&gt;</code> 是一个未知类型的List，而<code v-pre>List&lt;Object&gt;</code>其实是任意类型的List。你可以把 <code v-pre>List&lt;String&gt;</code>, <code v-pre>List&lt;Integer&gt;</code>赋值给 <code v-pre>List&lt;?&gt;</code>，却不能把 <code v-pre>List&lt;?&gt;</code>赋值给 <code v-pre>List&lt;Object&gt;</code></p>
<h2 id="_6-java-集合" tabindex="-1"><a class="header-anchor" href="#_6-java-集合" aria-hidden="true">#</a> 6 Java 集合</h2>
<h3 id="_6-1-java中有哪些集合类" tabindex="-1"><a class="header-anchor" href="#_6-1-java中有哪些集合类" aria-hidden="true">#</a> 6.1 Java中有哪些集合类？</h3>
<p>Java中的集合类都是由Collection和Map派生的，其中Collection又派生了三个子接口，Set、List、Queue，因此可以将集合分为四大类：</p>
<ul>
<li>Set：代表无序，不可重复的集合</li>
<li>List：代表有序，可以重复的集合</li>
<li>Queue：代表先进先出队列</li>
<li>Map：代表具有映射关系的key-value集合</li>
</ul>
<p>Set接口常用实现类：HashSet，TreeSet等</p>
<p>List接口常用实现类：ArrayList、LinkedList等</p>
<p>Map接口常用实现类：HashMap、TreeMap、Hashtable、LinkedHashMap、Properties等</p>
<p>Queue接口又派生出一个Deque(代表双端队列)接口，常用的Deque接口实现类：LinkedList、ArrayDeque</p>
<h3 id="_6-2-集合类中线程安全与不安全的分别有哪些" tabindex="-1"><a class="header-anchor" href="#_6-2-集合类中线程安全与不安全的分别有哪些" aria-hidden="true">#</a> 6.2 集合类中线程安全与不安全的分别有哪些？</h3>
<p>在java.util包中，Vector、Hashtable是线程安全的，但是这两个类是古老的类，性能较差。除了Vector和Hashtable外，在java.util包中的其他集合类都是线程不安全的。</p>
<p>在JDK1.5后，在java.util.concurrent包下提供了大量支持高效并发访问的集合类，大致可分为两类：</p>
<ul>
<li>以Concurrent开头的集合类
<ul>
<li>代表了并发访问的集合，支持多线程并发访问，写操作都是线程安全的，这种集合类采用复杂的算法保证永远不会锁住整个集合，因此具有较好的性能</li>
</ul>
</li>
<li>CopyOnWrite开头的集合类
<ul>
<li>其底层的实现原理是采用复制数组的方式实现操作。对这种集合类进行读操作的时候，会读取原数组；进行写操作的时候，会复制一份新的数组，然后在复制的数组中进行写操作，因为在复制的数组中进行写操作，所以线程是安全的</li>
</ul>
</li>
</ul>
<h3 id="_6-3-map接口有哪些实现类" tabindex="-1"><a class="header-anchor" href="#_6-3-map接口有哪些实现类" aria-hidden="true">#</a> 6.3 Map接口有哪些实现类？</h3>
<p>常用的实现类：HashMap，LinkedHashMap，TreeMap，ConcurrentHashMap</p>
<p>对于不需要进行排序的场景，优先使用HashMap，它是性能最好的Map实现类，如果涉及到线程安全，则可以使用ConcurrentHashMap，它的性能好于Hashtable</p>
<p>对于需要进行排序的场景，如果需要按照插入的顺序进行排序，则可以使用LinkedHashMap；如果需要按照key自然进行排序，则可以使用TreeMap，如果涉及到线程安全，则可以使用Collections包装类</p>
<h3 id="_6-4-map-put的过程" tabindex="-1"><a class="header-anchor" href="#_6-4-map-put的过程" aria-hidden="true">#</a> 6.4 Map put的过程</h3>
<ul>
<li>
<p>首次扩容</p>
<ul>
<li>先判断数组是否为空，如果为空，则扩容</li>
</ul>
</li>
<li>
<p>计算索引</p>
<ul>
<li>通过hash算法计算需要添加的元素的key-value位置</li>
</ul>
</li>
<li>
<p>插入数据</p>
<ul>
<li>如果当前位置为空，则直接插入数据</li>
<li>如果当前位置不为空，且key不存在，则将数据链到链表末尾</li>
<li>如果当前位置不为空，且key存在，则将其value进行覆盖</li>
<li>如果链表的长度达到8，则将链表转为红黑树，并将数据插入到树中</li>
</ul>
</li>
<li>
<p>再次扩容</p>
<ul>
<li>如果数组中元素个数（size）超过threshold，则再次进行扩容</li>
</ul>
<p>具体过程图如下：</p>
<figure><img src="https://uploadfiles.nowcoder.com/images/20220224/4107856_1645688900795/18330EB2310CB83A25FA317E65ED60EB" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
</li>
</ul>
<h3 id="_6-5-如何得到一个线程安全的map" tabindex="-1"><a class="header-anchor" href="#_6-5-如何得到一个线程安全的map" aria-hidden="true">#</a> 6.5 如何得到一个线程安全的Map？</h3>
<ol>
<li>使用Collections类中Map的包装类</li>
<li>使用java.util.concurrent包下的Map类，如ConcurrentHashMap</li>
<li>使用Hashtable类，但是性能较差，不建议使用</li>
</ol>
<h3 id="_6-6-hashmap的特点" tabindex="-1"><a class="header-anchor" href="#_6-6-hashmap的特点" aria-hidden="true">#</a> 6.6 HashMap的特点？</h3>
<ol>
<li>是一个线程不安全的实现</li>
<li>可以使用null作为key或者value</li>
</ol>
<h3 id="_6-7-jdk7与jdk8之间的hashmap有什么区别" tabindex="-1"><a class="header-anchor" href="#_6-7-jdk7与jdk8之间的hashmap有什么区别" aria-hidden="true">#</a> 6.7 JDK7与JDK8之间的HashMap有什么区别？</h3>
<ul>
<li>
<p>在JDK7中HashMap的底层是数组+链表实现的，底层会维护一个Entry数组。它会通过hashCode来将对象的key-value存储到数组中，如果发生了hashCode冲突，则将该key-value存放在对应元素的后面，形成一个链表。当链表中存储的数据越来越多时，查询的效率就会变得很差。</p>
</li>
<li>
<p>在JDK8中HashMap的底层是数组+链表+红黑树实现的，底层维护一个Node数组。它会通过hashCode来将对象的key-value存储到数组中，如果发生了hashCode冲突，则将该key-value存放在对应元素的后面，形成一个链表，当链表中存储的数据个数大于等于8时，会将链表转换为红黑树进行存储。这么做的原因是在查询时优化时间复杂度，提高查找性能。</p>
</li>
</ul>
<h3 id="_6-8-arraylist与linkedlist的区别" tabindex="-1"><a class="header-anchor" href="#_6-8-arraylist与linkedlist的区别" aria-hidden="true">#</a> 6.8 ArrayList与LinkedList的区别？</h3>
<ul>
<li>ArrayList与LinkedList都实现了List接口，但是LinkedList多实现了一个Deque接口，所以LinkedList也可以当做队列使用</li>
<li>ArrayList与LinkedList的底层数据结构不同，ArrayList底层是基于动态数组实现的，而LinkedList是基于链表实现的</li>
<li>因为底层数据结构的不同，ArrayList与LinkedList的应用场景也不同，ArrayList更加适合查询数据，而LinkedList更加适合添加、删除、修改操作</li>
</ul>
<blockquote>
<p>ArrayList进行添加操作时，如果添加的位置有元素，那么该元素将后移，该元素后面的元素都向后移动，所以进行添加元素时，效率相对不高</p>
<p>LinkedList添加元素时，如果当前位置有元素，那么将遍历链表，找到指定位置的元素，然后添加，如果数据量较大，可能会遍历很多元素才能找到指定位置的元素，因此LinkedList在数据量不是很大时，添加操作的效率更高一些</p>
</blockquote>
<h3 id="_6-9-copyonwritearraylist的底层原理" tabindex="-1"><a class="header-anchor" href="#_6-9-copyonwritearraylist的底层原理" aria-hidden="true">#</a> 6.9 CopyOnWriteArrayList的底层原理</h3>
<ul>
<li>CopyOnWriteArrayList内部也是通过数组进行实现的，但是在向CopyOnWriteArrayList添加元素时，会复制一个新的数组，写操作在复制的数组中进行，读操作在原数组中进行</li>
<li>在进行写操作时，会进行加锁，防止数据丢失</li>
<li>写操作结束后，会将原数组指向复制的新数组</li>
<li>CopyOnWriteArrayList允许在进行写操作时进行读数据，提高了读的性能，适合读多写少的场景，但是CopyOnWriteArrayList比较占用内存，同时读到的数据往往不是最新的数据，因此不适合对实时性要求较高的场景</li>
</ul>
<h3 id="_6-10-hashmap的底层实现原理" tabindex="-1"><a class="header-anchor" href="#_6-10-hashmap的底层实现原理" aria-hidden="true">#</a> 6.10 HashMap的底层实现原理</h3>
<p>基于hash算法，通过put和get方法存储和获取数据</p>
<p>存储对象时，将key-value传给put方法， 它通过hashCode获取hash值来确定存储的位置，然后进行存储。</p>
<p>获取对象是，将key传给get方法，它通过hashCode获取hash值来确定存储的位置，然后通过equals方法确定键值对</p>
<p>如果发生了hash冲突，则将其元素链接到链表的末尾，如果链表的长度超过了8，则将链表转为红黑树结构。</p>
<blockquote>
<p>HashMap 的数据是存储在链表数组里面的。在对 HashMap 进行插入/删除等操作时， 都需要根据 K-V 对的键值定位到他应该保存在数组的哪个下标中。而这个通过键值求取下 标的操作就叫做哈希。HashMap 的数组是有长度的，Java 中规定这个长度只能是 2 的倍 数，初始值为 16。简单的做法是先求取出键值的 hashcode，然后在将 hashcode 得到的 int 值对数组长度进行取模。为了考虑性能，Java 总采用按位与操作实现取模操作</p>
</blockquote>
<h3 id="_6-11-hashmap的扩容机制" tabindex="-1"><a class="header-anchor" href="#_6-11-hashmap的扩容机制" aria-hidden="true">#</a> 6.11 HashMap的扩容机制</h3>
<p>HashMap的默认初始大小是16，当数组中的个数达到临界值（装载因子=0.75*最大容量）时会进行扩容，扩容大小都是成倍的，但是最大容量一直都是2的指数幂，所以说，每次扩容完的大小都是2的指数幂，比如说：当初始状态下达到12时，就会进行扩容，扩容后的大小是32。</p>
<blockquote>
<p>HashMap 作为一种数据结构，元素在 put 的过程中需要进行 hash 运算，目的是计 算出该元素存放在 hashMap 中的具体位置。 hash 运算的过程其实就是对目标元素的 Key 进行 hashcode，再对 Map 的容量进行 取模，而 JDK 的工程师为了提升取模的效率，使用位运算代替了取模运算，这就要求 Map 的容量一定得是 2 的幂。 而作为默认容量，太大和太小都不合适，所以 16 就作为一个比较合适的经验值被采用 了。 为了保证任何情况下 Map 的容量都是 2 的幂，HashMap 在两个地方都做了限制。 集合类 &lt; 164 首先是，如果用户制定了初始容量，那么 HashMap 会计算出比该数大的第一个 2 的 幂作为初始容量。 另外，在扩容的时候，也是进行成倍的扩容，即 4 变成 8，8 变成 16</p>
</blockquote>
<h3 id="_6-12-hashmap中循环链表如何产生" tabindex="-1"><a class="header-anchor" href="#_6-12-hashmap中循环链表如何产生" aria-hidden="true">#</a> 6.12 HashMap中循环链表如何产生？</h3>
<h3 id="_6-13-hashmap为什么是用红黑树-而不是b树" tabindex="-1"><a class="header-anchor" href="#_6-13-hashmap为什么是用红黑树-而不是b树" aria-hidden="true">#</a> 6.13 HashMap为什么是用红黑树，而不是B树？</h3>
<h3 id="_6-14-hashmap为什么线程不安全" tabindex="-1"><a class="header-anchor" href="#_6-14-hashmap为什么线程不安全" aria-hidden="true">#</a> 6.14 HashMap为什么线程不安全？</h3>
<p>HashMap在进行put操作的时候，可能会造成循环链表，也可能造成数据丢失</p>
<h3 id="_6-15-hashmap如何实现线程安全" tabindex="-1"><a class="header-anchor" href="#_6-15-hashmap如何实现线程安全" aria-hidden="true">#</a> 6.15 HashMap如何实现线程安全？</h3>
<ol>
<li>使用ConcurrentHashMap</li>
<li>使用Collections将HashMap包装成线程安全的类</li>
<li>使用Hashtable，因为版本太老，性能较差，一般不建议使用</li>
</ol>
<h3 id="_6-16-hashmap如何解决hash冲突的" tabindex="-1"><a class="header-anchor" href="#_6-16-hashmap如何解决hash冲突的" aria-hidden="true">#</a> 6.16 HashMap如何解决hash冲突的？</h3>
<p>为了解决碰撞，数组中的元素是单向链表类型。当链表长度到达一个阈值时，会将链表转换成红黑树提高性能。而当链表长度缩小到另一个阈值时，又会将红黑树转换回单向链表提高性能</p>
<blockquote>
<p>当发生哈希冲突后，HashMap会将冲突的元素直接添加在被冲突元素的后面，形成一个链表，当链表的长度超过或等于8时，将链表转换为红黑树的结构</p>
</blockquote>
<h3 id="_6-17-说一说hashmap和hashtable的区别" tabindex="-1"><a class="header-anchor" href="#_6-17-说一说hashmap和hashtable的区别" aria-hidden="true">#</a> 6.17 说一说HashMap和Hashtable的区别？</h3>
<ol>
<li>
<p>线程安全方面：Hashtable中的方法是同步的，HashMap是默认是不同步的</p>
</li>
<li>
<p>继承关系方面：HashMap继承与AbstractMap类，实现了Map接口；Hashtable继承了一个陈旧的类Dictionary</p>
</li>
<li>
<p>是否允许null值：HashMap允许使用null作为键和值，但是使用null作为键的时候只能存在一个；Hashtable不允许是null作为键和值</p>
</li>
<li>
<p>遍历方式：都采用了Iterator，但Hashtable还使用了Enumeration方式，Hashtable不支持快速失败（fast-fail），HashMap支持快速失败（fast-fail）</p>
</li>
<li>
<p>扩容机制：Hashtable初始大小是11，每次扩容为原来的2n+1，也就是说HashTable 的链表数组的默认大小是一个素数、奇数。之后的每次扩充结 果也都是奇数。；HashMap初始大小的16，每次扩容为原来的2倍</p>
<blockquote>
<p>当哈希表的大小为素数时，简单的取模哈希的结果会更加均匀，所以单从这一 点上看，HashTable 的哈希表大小选择，似乎更高明些。因为 hash 结果越分散 效果越好</p>
<p>在取模计算时，如果模数是 2 的幂，那么我们可以直接使用位运算来得到结 果，效率要大大高于做除法。所以从 hash 计算的效率上，又是 HashMap 更胜一 筹。</p>
<p>但是，HashMap 为了提高效率使用位运算代替哈希，这又引入了哈希分布 不均匀的问题，所以 HashMap 为解决这问题，又对 hash 算法做了一些改进，进 行了扰动计算</p>
</blockquote>
</li>
</ol>
<p>哈希值的使用：Hashtable直接使用对象的hashCode，而HashMap需要重新计算hash值</p>
<h3 id="_6-18-hashmap与concurrenthashmap的区别" tabindex="-1"><a class="header-anchor" href="#_6-18-hashmap与concurrenthashmap的区别" aria-hidden="true">#</a> 6.18 HashMap与ConcurrentHashMap的区别？</h3>
<ol>
<li>HashMap是线程不安全的线程Map实现，而Concurrent是线程安全的Map实现</li>
<li>HashMap虽然可以使用Collections包装提供的包装类，但是其原理也是将所有功能的委托给Map，而包装类是基于synchronized关键字来确保线程安全的，底层是互斥锁，性能和吞吐量比较低</li>
<li>ConcurrentHashMap底层没有使用全局锁来锁住自己，尽可能的减少锁的竞争而导致阻塞和冲突，同时ConcurrentHashMap检索操作是不需要锁的</li>
</ol>
<h3 id="_6-19-concurrenthashmap是如何实现的" tabindex="-1"><a class="header-anchor" href="#_6-19-concurrenthashmap是如何实现的" aria-hidden="true">#</a> 6.19 ConcurrentHashMap是如何实现的？</h3>
<ol>
<li>JDK1.7时底层采用Segment数组+HashEntry数组+链表的分段锁技术，</li>
<li>JDK1.8时底层采用了Node数组+链表/红黑树的结构。当链表达到一定长度（TREEIFY_THRESHOLD=8）时，链表会转换成红黑树；若减少元素，红黑树可以再次转换成链表</li>
<li>线程安全都是采用volatile修饰的自旋CAS操作</li>
<li>为了保证线程安全，ConcurrentHashMap主要变量都被volatile修饰。这些主要变量与HashMap中的主要变量的最大区别，ConcurrentHashMap有volatile修饰，才能保证线程安全性</li>
</ol>
<h3 id="_6-20-concurrenthashmap是如何分段分组的" tabindex="-1"><a class="header-anchor" href="#_6-20-concurrenthashmap是如何分段分组的" aria-hidden="true">#</a> 6.20 ConcurrentHashMap是如何分段分组的？</h3>
<h3 id="_6-21-说说你对linkedhashmap的理解" tabindex="-1"><a class="header-anchor" href="#_6-21-说说你对linkedhashmap的理解" aria-hidden="true">#</a> 6.21 说说你对LinkedHashMap的理解？</h3>
<ul>
<li>LinkedHashMap使用的是双向链表来维护key- value的，该链表只负责维护Map的迭代顺序，迭代顺序与key-value 的插入顺序保持一致</li>
<li>LinkedHashMap可以避免了对HashMap和Hashtable中的key-value进行排序（只需要插入key-value时保持顺序），同时又可以避免使用TreeMap所增加的成本</li>
<li>LinkedHashMap需要维护插入时的顺序，所以性能略低与HashMap，但是因为它以链表维护内部的顺序，所以在迭代访问Map里的全部元素时有较好的性能</li>
</ul>
<h3 id="_6-22-linkedhashmap的底层原理" tabindex="-1"><a class="header-anchor" href="#_6-22-linkedhashmap的底层原理" aria-hidden="true">#</a> 6.22 LinkedHashMap的底层原理</h3>
<ol>
<li>
<p>LinkedHashMap 继承自 HashMap，所以它的底层仍然是基于拉链式散列结构。该结构由数组和链表+红黑树。在此基础上LinkedHashMap 增加了一条双向链表，保持遍历顺序和插入顺序一致的问题</p>
</li>
<li>
<p>在实现上，LinkedHashMap 很多方法直接继承自 HashMap（比如put remove方法就是直接用的父类的），仅为维护双向链表覆写了部分方法（get（）方法是重写的）</p>
</li>
<li>
<p>LinkedHashMap使用的键值对节点是Entity 他继承了hashMap 的Node,并新增了两个引用，分别是 before 和 after。这两个引用的用途不难理解，也就是用于维护双向链表</p>
</li>
<li>
<p>链表的建立过程是在插入键值对节点时开始的，初始情况下，让 LinkedHashMap 的 head 和 tail 引用同时指向新节点，链表就算建立起来了。随后不断有新节点插入，通过将新节点接在 tail 引用指向节点的后面，即可实现链表的更新</p>
</li>
<li>
<p>LinkedHashMap 允许使用null值和null键， 线程是不安全的，虽然底层使用了双线链表，但是增删相快了。因为他底层的Entity 保留了hashMap node 的next 属性</p>
</li>
</ol>
<h3 id="_6-23-treemap的底层原理" tabindex="-1"><a class="header-anchor" href="#_6-23-treemap的底层原理" aria-hidden="true">#</a> 6.23 TreeMap的底层原理</h3>
<ol>
<li>
<p>TreeMap实现了SortedMap接口，保证了有序性。默认的排序是根据key值进行升序排序，也可以重写comparator方法来根据value进行排序具体取决于使用的构造方法，不允许有null值null键，TreeMap是线程不安全的</p>
</li>
<li>
<p>TreeMap基于红黑树（Red-Black tree）实现。TreeMap的基本操作 containsKey、get、put 和 remove 的时间复杂度是 log(n)</p>
</li>
</ol>
<h3 id="_6-24-map与set的区别" tabindex="-1"><a class="header-anchor" href="#_6-24-map与set的区别" aria-hidden="true">#</a> 6.24 Map与Set的区别？</h3>
<p>Set代表的是无序的，不可重复得集合</p>
<p>Map代表具有映射关系的key-value集合</p>
<p>Set继承自Collection接口，而Map自己就是顶级接口</p>
<h3 id="_6-25-list与set的区别" tabindex="-1"><a class="header-anchor" href="#_6-25-list与set的区别" aria-hidden="true">#</a> 6.25 List与Set的区别？</h3>
<ul>
<li>
<p>List代表的是有序的，可以重复的集合，按照对象进入的顺序保存对象，允许多个null元素对象，可以使用Iterator取出元素，然后遍历，也可以使用get获取指定下标的元素</p>
</li>
<li>
<p>Set代表的是无序的，不可重复得集合，允许一个null元素对象。取元素时只能用Iterator接口取的元素，逐一遍历</p>
</li>
</ul>
<h3 id="_6-26-有哪些线程安全的list" tabindex="-1"><a class="header-anchor" href="#_6-26-有哪些线程安全的list" aria-hidden="true">#</a> 6.26 有哪些线程安全的List？</h3>
<ol>
<li>
<p>直接实现类Vector，但是该类比较陈旧了，效率相对不高</p>
</li>
<li>
<p>java.util.concurrent包中的CobyOnWriteArrayList，通过复制的方法来实现线程安全</p>
</li>
<li>
<p>Collections类中将List包装成的SynchronizedList也是线程安全的类，但是Iterator没有加锁，所以在进行Iterator遍历的时候需要手动加锁</p>
</li>
</ol>
<h3 id="_6-27-arraylist的数据结构" tabindex="-1"><a class="header-anchor" href="#_6-27-arraylist的数据结构" aria-hidden="true">#</a> 6.27 ArrayList的数据结构</h3>
<ul>
<li>
<p>ArrayList底层是采用数组来进行数据的存储，数组元素的类型为Object类型，对ArrayList的所有操作底层都是基于数组的</p>
</li>
<li>
<p>对于随机访问的get和set方法，ArrayList要优于LinkedList，因为LinkedList要移动指针。对于新增和删除操作add和remove，LinkedList比较占优势，因为ArrayList要移动数据</p>
</li>
</ul>
<h3 id="_6-28-treeset与hashset的区别" tabindex="-1"><a class="header-anchor" href="#_6-28-treeset与hashset的区别" aria-hidden="true">#</a> 6.28 TreeSet与HashSet的区别？</h3>
<ol>
<li>TreeSet底层是TreeMap实现的 ，HashSet底层是HashMap实现的</li>
<li>TreeSet 是二叉树实现的，TreeSet中的数据是自动排好序的，不允许放入null值</li>
<li>TreeSet判断两个对象不相等的方式是两个对象通过equals方法返回false，或者通过CompareTo方法比较没有返回0</li>
<li>HashSet 是哈希表实现的，HashSet中的数据是无序的，可以放入null，但只能放入一个null，两者中的值都不能重复，就如数据库中唯一约束。</li>
<li>HashSet要求放入的对象必须实现HashCode()方法，放入的对象，是以hashcode码作为标识的，而具有相同内容的 String对象，hashcode是一样，所以放入的内容不能重复。但是同一个类的对象可以放入不同的实例</li>
</ol>
<h3 id="_6-29-hashset的底层结构" tabindex="-1"><a class="header-anchor" href="#_6-29-hashset的底层结构" aria-hidden="true">#</a> 6.29 HashSet的底层结构</h3>
<ol>
<li>HashSet底层是直接调用HashMap类实现</li>
<li>HashMap的基本单元Entry对象是key-value，HashSet运用HashMap满足自身要求时，所有key对应的value都是用一个final的Object的</li>
<li>因为set里面是用的HashMap&lt;E,Object&gt; map，K, V要求是泛型所以必须传一个对象，这个Object字段是静态常量，set的每个元素都共享这个值，已经比较省空间了</li>
</ol>
<h3 id="_6-30-blockingqueue有哪些方法-为什么这样设计" tabindex="-1"><a class="header-anchor" href="#_6-30-blockingqueue有哪些方法-为什么这样设计" aria-hidden="true">#</a> 6.30 BlockingQueue有哪些方法？为什么这样设计？</h3>
<h3 id="_6-31-blockingqueue如何实现的" tabindex="-1"><a class="header-anchor" href="#_6-31-blockingqueue如何实现的" aria-hidden="true">#</a> 6.31 BlockingQueue如何实现的？</h3>
<h3 id="_6-32-stream-不是iostream-有哪些方法" tabindex="-1"><a class="header-anchor" href="#_6-32-stream-不是iostream-有哪些方法" aria-hidden="true">#</a> 6.32 Stream（不是IOStream）有哪些方法？</h3>
<h3 id="_6-33-vector和synchronizedlist的区别" tabindex="-1"><a class="header-anchor" href="#_6-33-vector和synchronizedlist的区别" aria-hidden="true">#</a> 6.33 Vector和SynchronizedList的区别？</h3>
<ol>
<li>
<p>SynchronizedList有很好的扩展和兼容功能，他可以将所有的 List 的子类转成线程安全的类。</p>
</li>
<li>
<p>使用 SynchronizedList的时候，进行遍历时要手动进行同步处理。</p>
</li>
<li>
<p>SynchronizedList可以指定锁定的对象</p>
</li>
</ol>
<p>Vector使用同步方法实现，而SynchronizedList通过同步代码块实现（SynchronizedList的方法基本上都是使用了同步代码块包上了List的方法）。</p>
<p>但是SynchronizedList 中实现的类并没有都使用 synchronized 同步代码块。其中有 listIterator 和 listIterator(int index)并没有做同步处理。但是 Vector 却对该方法加了方法锁。 所以说，在使用 SynchronizedList 进行遍历的时候要 手动加锁。</p>
<p>二者的扩容方式也不同（差别就和ArrayList和Vector的区别一样），Vector的扩容默认情况下是自动增长原来的一倍，而ArrayList是扩容原来的50%，所以得到的集合空间总是比实际的大。如果要在集合中保存大量数据，使用Vector会有一些优势（可以通过设置初始值大小来避免浪费资源）</p>
<blockquote>
<p>因为 SynchronizedList 只是使用同步代码块包裹了 ArrayList 的方法，而 ArrayList 和 Vector 中同名方法的方法体内容并无太大差异，所以在锁定范围和锁的作用域上两者并无却别。</p>
<p>但是在锁定的对象上有区别，SynchronizedList 的同步代码块锁定的是 mutex 对象， Vector 锁定的是 this 对象。SynchronizedList 有一 个构造函数可以传入一个 Object,如果在调用的时候显示的传入一个对象，那么锁定的就是 用户传入的对象。如果没有指定，那么锁定的也是 this 对象</p>
</blockquote>
<h3 id="_6-36-同步代码块与同步方法的区别" tabindex="-1"><a class="header-anchor" href="#_6-36-同步代码块与同步方法的区别" aria-hidden="true">#</a> 6.36 同步代码块与同步方法的区别？</h3>
<ol>
<li>
<p>同步代码块的锁的范围是比同步方法小的，一般来说锁的范围是于性能成反比的</p>
</li>
<li>
<p>同步代码块可以更加精确的控制锁的作用域（锁的作用域就是从锁被获取到其被释放的 时间），同步方法的锁的作用域就是整个方法</p>
</li>
<li>
<p>静态代码块可以选择对哪个对象加锁，但是静态方法只能给this对象加锁</p>
</li>
</ol>
<h3 id="_6-37-set如何保证元素不重复" tabindex="-1"><a class="header-anchor" href="#_6-37-set如何保证元素不重复" aria-hidden="true">#</a> 6.37 Set如何保证元素不重复？</h3>
<p>Set的实现可以分为两大类，分别是：HashSet和TreeSet</p>
<p>HashSet中，基本操作都是由HashMap底层实现的，因为HashSet底层是通过HashMap存储数据的。向HashSet中插入添加数据时，会计算出元素的hashcode，然后算出元素的存储位置，如果该位置为空，则直接添加，如果不为空，则通过equals方法比较元素是否相等，相等就不添加，不相等就找一个空位添加</p>
<p>TreeSet是通过key进行排序的，元素在插入TreeSet时compareTo方法要被调用，所以TreeSet的元素需要实Comparable接口，TreeSet是通过compareTo方法判断是否重复元素的</p>
<h3 id="_6-38-hashmap中的hash方法的原理" tabindex="-1"><a class="header-anchor" href="#_6-38-hashmap中的hash方法的原理" aria-hidden="true">#</a> 6.38 HashMap中的hash方法的原理</h3>
<h3 id="_6-39-常见的hash函数" tabindex="-1"><a class="header-anchor" href="#_6-39-常见的hash函数" aria-hidden="true">#</a> 6.39 常见的hash函数</h3>
<ul>
<li>直接定址法：直接以关键字k或者k加上某个常数（k + c）作为哈希地址</li>
<li>数字分析法：提取关键字中屈指比较均匀的数字作为哈希地址</li>
<li>除留余数法：用关键字k除以某个不大于哈希表长度m的数p，将所得的余数作为哈希表地址</li>
<li>分段叠加法：按照哈希表地址位数将关键字分成位数相等的几部分，其中最后一部分可以比较短。然后将这几部分相加，舍弃最高进位后的结果就是该关键字的哈希地址</li>
<li>平方取中法：如果关键字各个部分分布都不均匀的话，可以先求出它的平方值，然后按照需求去中间的几位作为哈希地址</li>
<li>伪随机数法：采用一个伪随机数当做哈希函数</li>
</ul>
<h3 id="_6-40-hashmap的数据结构" tabindex="-1"><a class="header-anchor" href="#_6-40-hashmap的数据结构" aria-hidden="true">#</a> 6.40 HashMap的数据结构</h3>
<blockquote>
<p>java中保存数据有两种比较简单的数据结构：数组和链表。数组的特点是：寻址容易，插入和删除困难，而链表的特点是：寻址困难，插入和删除容易。</p>
<p>常用的哈希函数的冲突解决办法中有一种犯法叫做链地址法，其实就是讲数组和链表组合在一起，发挥了两者的优势，我们可以将其理解为链表的数组。</p>
</blockquote>
<p>外表看似是一个数组，但是每个数组的成员是一个链表。这种数据结构所容纳的所有元素均好汉一个指针，用于元素见得连接诶。我们根据元素的自身特征把元素分配到不同的链表汇中去，反过来我们也是通过这些特征找到正确的链表，再从链表中找打正确的元素。其中根据元素特征计算元素数组下标的方法就是哈希算法，也就是hash()函数。</p>
<p>当我们要对一个链表数组中的某个 元素进行增删的时候，首先要知道他应该保存在这个链表数组中的哪个位置，即他在这个数 组中的下标。而 <code v-pre>hash()</code>方法的功能就是根据<code v-pre>Key</code>来定位其在<code v-pre>HashMap</code>中的位置。 <code v-pre>HashTable</code>、<code v-pre>ConcurrentHashMap</code> 同理。</p>
<h3 id="_6-41-collection如何迭代" tabindex="-1"><a class="header-anchor" href="#_6-41-collection如何迭代" aria-hidden="true">#</a> 6.41 Collection如何迭代？</h3>
<ol>
<li>通过普通for循环迭代</li>
<li>通过增强for循环迭代</li>
<li>使用Iterator迭代</li>
<li>使用Stream迭代</li>
</ol>
<h3 id="_6-42-enumeration和iterator的区别" tabindex="-1"><a class="header-anchor" href="#_6-42-enumeration和iterator的区别" aria-hidden="true">#</a> 6.42 Enumeration和Iterator的区别？</h3>
<ol>
<li>函数接口不同</li>
<li>Iterator支持fail-fast机制，而Enumeration不支持</li>
</ol>
<blockquote>
<p><strong>注意</strong>：Enumeration 迭代器只能遍历 Vector、Hashtable 这种古老的集合，因此通 常不要使用它，除非在某些极端情况下，不得不使用 Enumeration，否则都应该选择 Iterator 迭代器</p>
</blockquote>
<h3 id="_6-43-如何在遍历的同时删除arraylist的中的元素" tabindex="-1"><a class="header-anchor" href="#_6-43-如何在遍历的同时删除arraylist的中的元素" aria-hidden="true">#</a> 6.43 如何在遍历的同时删除ArrayList的中的元素？</h3>
<ol>
<li>
<p>直接使用普通for循环进行操作</p>
<ul>
<li>在foreach种不能进行，因为foreach中用到了Iterator比哪里，会导致fail-fast</li>
<li>但是可以使用普通for循环，因为普通for循环中没有用到Iterator遍历，不会导致fail-fast的检验</li>
<li>但是这种方案也存在一个问题，就是remove操作会改变List种元素的下标，可能存在漏删的情况</li>
</ul>
</li>
<li>
<p>直接使用Iterator进行操作</p>
<ul>
<li>直接使用Iterator提供的remove方法，还可以修改到expectedModCount的值，那么也就不会抛出异常了</li>
</ul>
</li>
<li>
<p>使用Java8种提供的filter过滤</p>
<ul>
<li>java8种可以把集合转换成流，对于流有一种filter操作，可以对原始Stream进行某项测试，通过测试的元素被留下来生成一个新的Stream</li>
</ul>
</li>
<li>
<p>使用增强for循环</p>
<ul>
<li>我们非常确定在一个集合中，某个即将删除的元素只包含一个的话， 比如对 Set 进行操作，那么其实也是可以使用增强 for 循环的，只要在删除之后，立刻结束循环体， 不要再继续进行遍历就可以了，也就是说不让代码执行到下一次的 next 方法</li>
</ul>
</li>
<li>
<p>直接使用fail-safe的集合类</p>
<ul>
<li>java.util.concurrent 包下的容器都是安全失败，可以在多线程下并发使用，并发修改</li>
</ul>
<blockquote>
<p>在 Java 中，除了一些普通的集合类以外，还有一些采用了 fail-safe 机制的集合类。 这样的集合容器在遍历时不是直接在集合内容上访问的，而是先复制原有集合内容，在拷贝 的集合上进行遍历。 由于迭代时是对原集合的拷贝进行遍历，所以在遍历过程中对原集合所作的修改并不能 被迭代器检测到，所以不会触发 ConcurrentModificationException。</p>
<p>基于拷贝内容的优点是避免了 ConcurrentModificationException，但同样地，迭代 器并不能访问到修改后的内容，即：迭代器遍历的是开始遍历那一刻拿到的集合拷贝，在遍 历期间原集合发生的修改迭代器是不知道的</p>
</blockquote>
<h3 id="copyonwritearraylist比较与arraylist所具有的特性" tabindex="-1"><a class="header-anchor" href="#copyonwritearraylist比较与arraylist所具有的特性" aria-hidden="true">#</a> CopyOnWriteArrayList比较与ArrayList所具有的特性</h3>
<p>支持高效率并发且是线程安全的 因为通常需要复制整个基础数组，所以可变操作（ add()、set() 和 remove() 等等）的开销很大 迭代器支持 hasNext(), next()等不可变 操作，但不支持可变 remove()等操作 使用迭代器进行遍历的速度很快，并且不会与其他 线程发生冲突。在构造迭代器时，迭代器依赖于不变的数组快照</p>
</li>
</ol>
<hr>
<h4 id="stream" tabindex="-1"><a class="header-anchor" href="#stream" aria-hidden="true">#</a> Stream</h4>
<p>Stream使用一种类似用SQL语句从数据库查询数据的直观方式来提供一种对Java集合运算和表达的高阶抽象</p>
<p>Stream的特性和优点：</p>
<ul>
<li>无存储。Stream 不是一种数据结构，它只是某种数据源的一个视图，数据源可以是一 个数组，Java 容器或 I/O channel 等</li>
<li>为函数式编程而生。对 Stream 的任何修改都不会修改背后的数据源，比如对 Stream 执行过滤操作并不会删除被过滤的元素，而是会产生一个不包含被过滤元素 的新 Stream。</li>
<li>惰式执行。Stream 上的操作并不会立即执行，只有等到用户真正需要结果的时候才会 执行。</li>
<li>可消费性。Stream 只能被“消费”一次，一旦遍历过就会失效，就像容器的迭代器那 样，想要再次遍历必须重新生成。</li>
</ul>
<h2 id="_7-多线程" tabindex="-1"><a class="header-anchor" href="#_7-多线程" aria-hidden="true">#</a> 7 多线程</h2>
<h3 id="线程池如何实现复用的" tabindex="-1"><a class="header-anchor" href="#线程池如何实现复用的" aria-hidden="true">#</a> 线程池如何实现复用的？</h3>
<p>1、当Thread的run方法执行完一个任务之后，会循环地从阻塞队列中取任务来执行，这样执行完一个任务之后就不会立即销毁了；
2、当工作线程数小于核心线程数，那些空闲的核心线程再去队列取任务的时候，如果队列中的Runnable数量为0，就会阻塞当前线程，这样线程就不会回收了</p>
</div></template>


