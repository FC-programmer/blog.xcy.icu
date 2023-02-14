---
date: 2023-01-21
author: GQ
category:
  - 面试
---

`来源` [zgq.cool](http://zgq.cool/#/docs)

<!-- more -->

# GQ面试题

## JDK、JRE和JVM的区别

`JDK`是java开发工具包，它包含了JRE、还有编译器（javac）、开发工具（javadoc）

`JRE`是java运行时环境，它是运行java程序所必须的环境，它包含了JVM 和 Java类库

`JVM`：Java虚拟机是运行Java字节码的虚拟机，它是Java实现跨平台最核心的部分

## 为什么说Java语言"编译与解释并存"

- **编译型** ：编译型语言会通过编译器将源代码一次性翻译成可被该平台执行的机器码。一般情况下，编译语言的执行速度比较快，开发效率比较低。常见的编译性语言有 C、C++、Go、Rust 等等。
- **解释型** ：解释型语言会通过解释器一句一句的将代码解释为机器代码后再执行。解释型语言开发效率比较快，执行速度比较慢。常见的解释性语言有 Python、JavaScript、PHP 等等。

**为什么说 Java 语言“编译与解释并存”？**

这是因为 Java 语言既具有编译型语言的特征，也具有解释型语言的特征。因为 Java 程序要经过先编译，后解释两个步骤，由 Java 编写的程序需要先经过编译步骤，生成字节码（`.class` 文件），这种字节码必须由 Java 解释器来解释执行

## 什么是平台无关性

平台无关性，指的是我们Java语言可以不受平台的约束，一次编译、到处运行。实现平台无关性的因素有：Java语言规范、Class文件、Java虚拟机。

- 字节码文件（.class）：所有Java文件都要编译成统一的Class文件
- Java虚拟机是实现平台无关性的核心，我们可以在不同的操作系统上安装对应的JVM，它可以做到使用同一份字节码文件，在不同的操作系统上运行会有相同的效果

- Java语言规范：通过规定Java语言中基本数据类型的取值范围和行为

> 比如：int类型，在Java中，int占4个字节，这是固定的

## 面向对象和面向过程

两者主要的区别在于解决问题的方式不同：

**面向过程：**

面向过程是一种自顶而下的编程模式。比如说C语言。

在面向过程中，我们需要把问题分解成一个个步骤，每个步骤是用函数实现，依次调用即可。

> **面向对象：**

面向对象是将构成问题的事物，抽象成若干个对象，事物的特征形成对象的属性，事物的行为形成对象的方法。之后通过不同对象之间的调用，组合解决问题。

面向过程方式的代码执行起来效率很高，而面向对象方式的代码一般更易维护、易复用、易扩展

## 封装

**定义：**

封装就是将一个类的某些信息隐藏在类的内部，不允许外界直接访问，而是通过提供一些可以被外界访问的方法来操作属性

**好处：**

可以提高代码的安全性，防止程序中无关的部分，错误的使用了对象的私有部分

## 继承

如果我们想复用现有的类，并在该类的基础上进行 扩展，可以使用extends关键字，让子类继承父类。

- 子类会自动拥有父类的所有属性和方法
- 子类可以有自己的方法（即对父类进行扩展）
- 子类可以重写父类的方法

## 多态

所谓多态就是同一操作，作用在不同的对象之上，会有不同的执行效果。

常用的多态是向上转型，我们可以将子类对象传入带有父类类型方法参数中，根据传入的子类对象来决定方法具体的执行逻辑。这是一种运行时多态。

还有一种编译期多态，就是方法的重载，它可以根据传入参数的不同，执行不同的方法。

## 构造方法的特点

构造方法的作用是完成对象的初始化工作

- 方法名与类名相同
- 没有返回值，但不能用void声明构造函数
- 生成类的对象时自动执行，无需调用

- 一个类没有声明构造方法，也会有一个默认的无参构造方法

构造方法不能被 override（重写）,但是可以 overload（重载）,也就是可以看到一个类中有多个构造函数的情况

## 类变量、成员变量、局部变量

Java中共有三种变量，分别是类变量、成员变量和局部变量。他们分别存放在JVM的方法区、堆内存和栈内存中。

```java
    public class Variables {    
        //类变量
        private static int a;
        //成员变量
        private int b;
        
        //局部变量
        public void test(int c){
            int d;
        }
    }
```

共享变量才会遇到并发问题,所以对于类变量和成员变量的操作需要考虑线程安全

## 访问修饰符

`public` : 对所有类或者对象都是可见的

`protected` : 在同在一个包中，或者子类可见

`default` : 在同一个包内可见

`private` : 只有当前类对其具有访问权限

## 重载和重写的区别

**重载：**发生在同一类中，方法名相同，参数列表必须不同，返回值和访问修饰符可以不同

**重写：**发生在子父类关系中，方法名和参数列表必须相同，子类返回值和异常范围小于等于父类，访问权限大于等于父类（两同量小一大）

## 接口和抽象类有什么共同点和区别

**共同点：**

- 都不能被实例化
- 都可以包含抽象方法
- 都可以有默认实现的方法（Java 8 可以用 `default` 关键字在接口中定义默认方法）。

**区别：**

- 接口主要用于对类的行为进行约束，你实现了某个接口就具有了对应的行为
- 抽象类主要用于代码复用，强调的是所属关系
- 一个类只能继承一个类，但可以实现多个接口
- 接口中的成员变量只能是 `public static final` 类型的，不能被修改且必须有初始值，而抽象类的成员变量默认 default，可在子类中被重新定义，也可被重新赋值

## == 和 equals的区别

**==：**

- 对于基本数据类型，==比较的是数值是否相等
- 对于引用数据类型，比较的是对象的地址值是否相同

**equals：**

- 只能用来比较引用数据类型，默认也是比较对象的地址值，但我们一般都会重写该方法，用来比较对象的内容是否相等


## hashcode方法的作用

`hashCode()`是 `Object` 类中的方法，这就意味着 Java 中的任何类都包含有 `hashCode()` 函数。另外需要注意的是： `Object` 的 `hashCode()` 方法是**本地方法**，也就是用 C 语言或 C++ 实现的，该方法通常用来将对象的内存地址转换为int类型整数之后返回。

```java
public native int hashCode();
```

## Object类的常用方法

```java
public final native Class<?> getClass()//native方法，用于返回当前运行时对象的Class对象，使用了final关键字修饰，故不允许子类重写。

public native int hashCode() //native方法，用于返回对象的哈希码，主要使用在哈希表中，比如JDK中的HashMap。
public boolean equals(Object obj)//用于比较2个对象的内存地址是否相等，String类对该方法进行了重写用户比较字符串的值是否相等。

protected native Object clone() throws CloneNotSupportedException//naitive方法，用于创建并返回当前对象的一份拷贝。一般情况下，对于任何对象 x，表达式 x.clone() != x 为true，x.clone().getClass() == x.getClass() 为true。Object本身没有实现Cloneable接口，所以不重写clone方法并且进行调用的话会发生CloneNotSupportedException异常。

public String toString()//返回类的名字@实例的哈希码的16进制的字符串。建议Object所有的子类都重写这个方法。

public final native void notify()//native方法，并且不能重写。唤醒一个在此对象监视器上等待的线程(监视器相当于就是锁的概念)。如果有多个线程在等待只会任意唤醒一个。

public final native void notifyAll()//native方法，并且不能重写。跟notify一样，唯一的区别就是会唤醒在此对象监视器上等待的所有线程，而不是一个线程。

public final native void wait(long timeout) throws InterruptedException//native方法，并且不能重写。暂停线程的执行。注意：sleep方法没有释放锁，而wait方法释放了锁 。timeout是等待时间。

public final void wait(long timeout, int nanos) throws InterruptedException//多了nanos参数，这个参数表示额外时间（以毫微秒为单位，范围是 0-999999）。 所以超时的时间还需要加上nanos毫秒。

public final void wait() throws InterruptedException//跟之前的2个wait方法一样，只不过该方法一直等待，没有超时时间这个概念

protected void finalize() throws Throwable { }//实例被垃圾回收器回收的时候触发的操作

```

## 浅拷贝和深拷贝

**浅拷贝：**对基本数据类型进行值传递，对引用数据类型会复制其对象地址进行引用传递。

**深拷贝：**对基本数据类型进行值传递，对引用数据类型创建一个新对象，并复制其内容。

**引用拷贝：**就是两个不同的引用指向同一个对象

(G:/%E7%AC%94%E8%AE%B0/%E7%AC%94%E8%AE%B0%E6%88%AA%E5%9B%BE/shallow&deep-copy.png)

## 如何实现深拷贝

### 重写clone方法

如果一个类想实现深拷贝，就必须Cloneable接口，重写clone方法。并且类中引用数据类型的对象属性也要重写clone方法

```java
public class Address implements Cloneable{
    private String name;
    // 省略构造函数、Getter&Setter方法
    @Override
    public Address clone() {
        try {
            return (Address) super.clone();
        } catch (CloneNotSupportedException e) {
            throw new AssertionError();
        }
    }
}

public class Person implements Cloneable {
    private Address address;
    // 省略构造函数、Getter&Setter方法
   @Override
    public Person clone() {
        try {
            //先调用Object.clone()方法克隆一个新的对象
            Person person = (Person) super.clone();
            //再克隆引用类型属性，并重新赋值
            person.setAddress(person.getAddress().clone());
            return person;
        } catch (CloneNotSupportedException e) {
            throw new AssertionError();
        }
    }
}
```

### 序列化实现深拷贝

重写clone方法实现深拷贝有两个缺点：一是，如果在一个对象中包含多个子对象，clone方法就写的很长。二是如果在这个对象中新增属性，则需要修改clone方法

**序列化实现深拷贝：**就是先把对象序列化成流，再将流反序列化成对象，这样得到的对象就一定是新的对象。

也可以使用各种JSON工具把对象序列化成JSON字符串，再将字符串反序列化成对象。

使用fastjson举例：

```java
	User newUser = JSON.paraseObject(JSON.toJSONString(User),User.class)
```



# String

## String s1 = "a"； 创建了多少个对象？

创建了0个或1个对象，如果字符串a在执行到该句之前就存在字符串常量池则，创建0个对象，否则在堆中的字符串常量池创建1个对象

## String s2 = new String(“b”) 创建了多少个对象？

创建了1个或者2个对象，如果字符串常量池中已存在字符串b，则只会在堆中创建一个String对象，若不存在，则在常量池中创建一个对象，结果为两个对象

## String、StringBuffered和StringBuilder的区别

`String`是不可变字符串，是字符串常量。每次对String类型进行改变，都会产生一个新的对象

`StringBuffered`和`StringBuilder`是可变字符串，它们都继承自`AbstractStringBuilder`,该类提供了一些字符串的基本操作，比如`append`

- StringBuffered对方法加了同步锁，所以是线程安全的
- StringBuilder，没有对方法加同步锁，线程不安全

总结：

1. 如果操作少量的数据：适合用String
2. 多线程在字符串缓冲区中操作大量数据：适合用StringBuffered
3. 单线程在字符串缓冲区中操作大量数据：适合用StringBuilder



## String为什么不可变

String底层保存的字符串数组被private final 所修饰

- final修饰保证了该引用不能在指向其他的对象，
- private保证了该字符数组不能被直接访问，并且String类没有提供修改这个字符数组的方法
- `String` 类被 `final` 修饰导致其不能被继承，进而避免了子类破坏 `String` 不可变。

## String为什么设计为不可变

主要是从缓存、安全性、线程安全等角度考虑的。

**缓存**：Java提供了对字符串的缓存功能，也就是字符串常量池，通过字符串池，两个内容相同的字符串变量，可以从池中指向同一个字符串对象，可以大大的节省堆空间。

**安全性**：String是在程序中常用的数据类型，会广泛用于存储敏感信息，如用户名、密码。在程序中传递一个字符串的时候，如果这个字符串的内容是如果是可变的，那么这个字符串内容就可能随时都被修改。那么这个字符串内容就完全不可信了。这样整个系统就没有安全性可言了。

**线程安全**：不可变会自动使字符串成为线程安全的，因为当从多个线程访问它们时，它们不会被更改。

## 字符串常量池

```java
String aa = "ab"; // 放在常量池中
String bb = "ab"; // 从常量池中查找
System.out.println(aa==bb);// true
```

当代码中出现双引号形式（字面量）创建字符串对象时，JVM 会先对这个字符串进行检查，如果字符串常量池中存在相同内容的字符串对象的引用，则将这个引用返回；否则，创建新的字符串对象，然后将这个引用放入字符串常量池，并返回该引用。

## 字符串拼接用"+"还是StringBuilder

```java
String wechat = "Hollis";
String introduce = "每日更新Java相关技术文章";
String hollis = wechat + "," + introduce;
```

反编译后：

```java
String wechat = "Hollis";
String introduce = "\u6BCF\u65E5\u66F4\u65B0Java\u76F8\u5173\u6280\u672F\u6587\u7AE0";//每日更新Java相关技术文章
String hollis = (new StringBuilder()).append(wechat).append(",").append(introduce).toString();
```

可以看出，“+”的字符串拼接方式，实际上是通过 `StringBuilder` 调用 `append()` 方法实现的，拼接完成之后调用 `toString()` 得到一个 `String` 对象

```java
String[] arr = {"he", "llo", "world"};
String s = "";
for (int i = 0; i < arr.length; i++) {
    s += arr[i];
}
System.out.println(s);
```

不过，在循环内使用“+”进行字符串的拼接的话，每循环一次就会创建一个 `StringBuilder` 对象，浪费内存和影响效率

**总结**：

- 如果不是在循环体中进行字符串拼接的话，直接使用`+`就好了。
- 再循环体中，使用StringBuilder，进行字符串拼接
- 并发环境下，使用StringBuffer代替StringBuilder

## replaceFirst、replaceAll、replace区别

replace、replaceAll和replaceFirst是Java中常用的替换字符的方法

- replace(CharSequence target, CharSequence replacement) ，用replacement替换所有的target，两个参数都是字符串。

- replaceAll(String regex, String replacement) ，用replacement替换所有的regex匹配项，regex很明显是个正则表达式，replacement是字符串。

- replaceFirst(String regex, String replacement) ，基本和replaceAll相同，区别是只替换第一个匹配项。

可以看到，其中replaceAll以及replaceFirst是和正则表达式有关的，而replace和正则表达式无关。

replaceAll和replaceFirst的区别主要是替换的内容不同，replaceAll是替换所有匹配的字符，而replaceFirst()仅替换第一次出现的字符它们的方法定义是：

## String有哪些常用方法

- indexOf()：返回指定字符的索引。
- charAt()：返回指定索引处的字符。
- replace()：字符串替换。
- trim()：去除字符串两端空白。
- split()：分割字符串，返回一个分割后的字符串数组。
- getBytes()：返回字符串的 byte 类型数组。
- length()：返回字符串长度。
- toLowerCase()：将字符串转成小写字母。
- toUpperCase()：将字符串转成大写字符。
- substring()：截取字符串。
- equals()：字符串比较。

# 基本、包装类型

## 基本类型和包装类型的区别？

- 成员变量包装类型不赋值就是 `null` ，而基本类型有默认值且不是 `null`。
- 包装类型可用于泛型，而基本类型不可以。
- 基本数据类型的**局部变量**存放在 Java 虚拟机**栈中**
- 基本数据类型的**成员变量**（未被 `static` 修饰 ）存放在 Java 虚拟机的**堆中。**
- 包装类型属于对象类型，我们知道几乎所有对象实例都存在于堆中。
- 相比于对象类型， 基本数据类型占用的空间非常小。

## 包装类的缓存机制

Java 基本数据类型的包装类型的大部分都用到了缓存机制来提升性能。

`Byte`,`Short`,`Integer`,`Long` 这 4 种包装类默认创建了数值 **[-128，127]** 的相应类型的缓存数据，`Character` 创建了数值在 **[0,127]** 范围的缓存数据，`Boolean` 直接返回 `True` or `False`。

例如Integer类中有个IntegerCache内部类，`private static`所修饰

该类会在Integer首次使用时，初始化缓存。以后，就可以使用缓存中包含的实例对象，而不是创建一个新的实例(**在自动装箱的情况下**)。

```java
public static Integer valueOf(int i) {
    if (i >= IntegerCache.low && i <= IntegerCache.high)
        return IntegerCache.cache[i + (-IntegerCache.low)];
    return new Integer(i);
}
private static class IntegerCache {
    static final int low = -128;
    static final int high;
    static {
        // high value may be configured by property
        int h = 127;
    }
}

```

Java 6中，可以通过`java.lang.Integer.IntegerCache.high`设置最大值。这使我们可以根据应用程序的实际情况灵活地调整来提高性能。

## 自动拆装箱

**什么是自动拆装箱？**

- **装箱**：将基本类型用它们对应的引用类型包装起来；
- **拆箱**：将包装类型转换为基本数据类型；

```java
    Integer i = 10;  //自动装箱
    int b = i;     //自动拆箱
```

**拆装箱的原理：**

我们有以下自动拆装箱的代码：

```java
    public static  void main(String[]args){
        Integer integer=1; //装箱
        int i=integer; //拆箱
    }复制ErrorOK!
```

对以上代码进行反编译后可以得到以下代码：

```java
    public static  void main(String[]args){
        Integer integer=Integer.valueOf(1);
        int i=integer.intValue();
    }复制ErrorOK!
```

从上面反编译后的代码可以看出，int 的自动装箱都是通过 `Integer.valueOf()` 方法来实现的，Integer 的自动拆箱都是通过 `integer.intValue` 来实现的。如果读者感兴趣，可以试着将八种类型都反编译一遍 ，你会发现以下规律：

> 自动装箱都是通过包装类的 `valueOf()` 方法来实现的.自动拆箱都是通过包装类对象的 `xxxValue()` 来实现的。

## 包装类型的数值比较

包装对象的数值比较，不能简单的使用 `==`，虽然 -128 到 127 之间的数字可以，但是这个范围之外不会使用缓存，还是需要使用 `equals` 比较。

## 浮点数运算有丢失精度的风险

计算机存储二进制的，而且计算机在表示一个数字时，宽度是有限的，无限循环的小数存储在计算机时，只能被截断，所以就会导致小数精度发生损失的情况

就比如说十进制下的 0.2 就没办法精确转换成二进制小数：

```java
// 0.2 转换为二进制数的过程为，不断乘以 2，直到不存在小数为止，
// 在这个计算过程中，得到的整数部分从上到下排列就是二进制的结果。
0.2 * 2 = 0.4 -> 0
0.4 * 2 = 0.8 -> 0
0.8 * 2 = 1.6 -> 1
0.6 * 2 = 1.2 -> 1
0.2 * 2 = 0.4 -> 0（发生循环）
...
```

需要浮点数精确运算结果的业务场景（比如涉及到钱的场景）都是通过 `BigDecimal` 来做的。

## 超过 long 整型的数据应该如何表示？

基本数值类型都有一个表达范围，如果超过这个范围就会有数值溢出的风险。

在 Java 中，64 位 long 整型是最大的整数类型。超过该范围的数值，可以用BigDecimal表示

```java
long l = Long.MAX_VALUE;
System.out.println(l + 1); // -9223372036854775808
System.out.println(l + 1 == Long.MIN_VALUE); // true
```

`BigInteger` 内部使用 `int[]` 数组来存储任意大小的整形数据。

相对于常规整数类型的运算来说，`BigInteger` 运算的效率会相对较低。

# 异常

(G:/%E7%AC%94%E8%AE%B0/%E7%AC%94%E8%AE%B0%E6%88%AA%E5%9B%BE/image-20221030223811582.png)

## Error和Exception

Exception和 Error，均继承自Throwable类。

`Error:`表⽰系统级的错误， 是java运⾏环境内部错误或者硬件问题， 属于程序无法处理的错误 ，除了退出运⾏外别⽆选择， 是由Java虚拟机抛出的。

`Exception:` 表⽰程序需要捕捉、 需要处理的异常， 是由于程序设计的不完善⽽出现的问题， 程序必须处理的问题。

## 受检异常与非受检异常

`受检异常`( checked exception)，也叫做编译时异常。在代码中调用时，就必须对该异常做出处理（捕获或者向上抛出），否则是无法编译通过的。常见的有：IO相关的异常、`ClassNotFoundException` 、`SQLException`

`非受检异常`（unchecked exception），也就做运行时异常，`RuntimeException` 及其子类都统称为非受检查异常。该异常不需要显示的进行捕获，但是在运行期间发生异常会中断程序的执行，一般是代码逻辑错误导致。

常见的有：

- `NullPointerException`(空指针错误)
- `IllegalArgumentException`(参数错误比如方法入参类型错误)
- `NumberFormatException`（字符串转换为数字格式错误，`IllegalArgumentException`的子类）
- `ArrayIndexOutOfBoundsException`（数组越界错误）
- `ClassCastException`（类型转换错误）
- `ArithmeticException`（算术错误）

## Throwable 类常用方法有哪些

- `String getMessage()`: 返回异常发生时的简要描述
- `String toString()`: 返回异常发生时的详细信息
- `String getLocalizedMessage()`: 返回异常对象的本地化信息。使用 `Throwable` 的子类覆盖这个方法，可以生成本地化信息。如果子类没有覆盖该方法，则该方法返回的信息与 `getMessage()`返回的结果相同
- `void printStackTrace()`: 在控制台上打印 `Throwable` 对象封装的异常信息

## try-catch-finally 如何使用？

- `try`块 ： 用于捕获异常。其后可接零个或多个 `catch` 块，如果没有 `catch` 块，则必须跟一个 `finally` 块。
- `catch`块 ： 用于处理 try 捕获到的异常。
- `finally` 块 ： 无论是否捕获或处理异常，`finally` 块里的语句都会被执行。当在 `try` 块或 `catch` 块中遇到 `return` 语句时，`finally` 语句块将在方法返回之前被执行。

## throw和throws

throw 关键字用来在一个方法中明确的抛出一个异常

throws用来声明一个方法可能会出现的异常，出现异常时会向上抛出，是处理异常的一种方式

## finally一定会被执行吗

finally不被执行的情况有3中：

1. 程序不执行try代码块
2. 虚拟机停止运行（例如使用Systemc.exit(0)）
3. 线程终止（如：带finally块的线程是守护线程，非守护线程都执行完毕）

## try-catch-resources

Java 7开始，jdk提供了一种更好的方式关闭资源，使用try-with-resources语句，减少了我们手动在finally块中关闭资源的操作。本质上也是一个语法糖，最后编译器帮我们关闭了资源。

```java
public static void main(String... args) {
    try (BufferedReader br = new BufferedReader(new FileReader("d:\\ hollischuang.xml"))) {
        String line;
        while ((line = br.readLine()) != null) {
            System.out.println(line);
        }
    } catch (IOException e) {
        // handle exception
    }
}
```

## 自定义异常

通过继承Exception的子类实现，重写相应方法，自定义异常信息



# 集合

(GQJava面试题-基础.assets/集合.png)

## Collection和Collections区别

Collection 是集合类的顶级接口、提供了对集合对象进行基本操作的通用方法。是list、set等的父接口

Collections 是一个工具类，不能实例化，提供了对集合各种操作的静态方法，例如：搜索、排序、线程安全化

# List

## List, Set, Queue, Map 四者的区别？

- `List`(对付顺序的好帮手): 存储的元素是有序的、可重复的。
- `Set`(注重独一无二的性质): 存储的元素是无序的、不可重复的。
- `Queue`(实现排队功能的叫号机): 按特定的排队规则来确定先后顺序，存储的元素是有序的、可重复的。
- `Map`(用 key 来搜索的专家): 使用键值对（key-value）存储，类似于数学上的函数 y=f(x)，"x" 代表 key，"y" 代表 value，key 是无序的、不可重复的，value 是无序的、可重复的，每个键最多映射到一个值。

## ArrayList与Vector的区别

首先两者底层数据结构都是动态数组

**线程安全性：**ArrayList线程不安全，效率高；Vector线程安全，效率较低

**扩容机制不同：**

- ArrayList使用无参构造，第一次默认容量为10，之后每次1.5倍扩容；使用有参构造，每次按照1.5倍扩容
- Vector使用无参构造，第一次默认容量为10，之后按照2倍扩容；使用有参构造，每次按照2倍扩容

## ArrayList与LinkedList的区别

**数据结构：**ArrayList底层是动态数组；LinkedList底层是双向链表（JDK1.6 之前为循环链表，JDK1.7 取消了循环。）

**线程安全性：**两者都线程不安全

**随机访问：**ArrayList支持随机访问、LinkedList不支持

**插入和删除元素的效率：**①ArrayList采用数组存储，默认添加元素到末尾时，时间复杂度为o(1)；在指定位置`i`添加或删除元素时，时间复杂度为`o(n-i)`，因为之后的元素都会向前或向后移动一位；②LinkedList采用链表存储，默认添加元素时，时间复杂度是o(1)；在指定位置添加或删除元素，时间复杂度是o(n)，因为需要先移动到指定位置再插入

**使用场景：**ArrayList适合频繁的查找，修改；LinkedList适合频繁的插入、删除

此外：LinkedList还是实现了Deque接口，可以用作双端队列

## ArrayList的扩容机制

### 分析ArrayList扩容机制

**1. 构造方法：**

```java
 	private static final Object[] DEFAULTCAPACITY_EMPTY_ELEMENTDATA = {};

	/** 无参构造
     * Constructs an empty list with an initial capacity of ten.
     */
    public ArrayList() {
        this.elementData = DEFAULTCAPACITY_EMPTY_ELEMENTDATA;//null
    }
```

**使用无参构造创建ArrayList、实际上初始化的是一个空数组；数组中添加第一个元素时，数组容量扩为 10。**

**2. add方法：**

add方法首先调用了ensureCapacityInternal(size + 1）；

```java
    /**
     * Appends the specified element to the end of this list.
     *
     * @param e element to be appended to this list
     * @return <tt>true</tt> (as specified by {@link Collection#add})
     */
    public boolean add(E e) {
        ensureCapacityInternal(size + 1);  // Increments modCount!! 此时size:0
        elementData[size++] = e;
        return true;
    }
```

**3. ensureCapacityInternal()方法**

```java
    private void ensureCapacityInternal(int minCapacity) {	// minCapacity:1
    	ensureExplicitCapacity(calculateCapacity(elementData, minCapacity));
    }

	private static int calculateCapacity(Object[] elementData, int minCapacity) {
        // 判断是否为 默认初始化数组对象
        if (elementData == DEFAULTCAPACITY_EMPTY_ELEMENTDATA) {
            // 返回默认容量10 与 minCapacity的较大者
            return Math.max(DEFAULT_CAPACITY, minCapacity);
        }
        return minCapacity;
    }
	
```

**4.ensureExplicitCapacity()方法 **

```java
	// 判断是否需要扩容
	private void ensureExplicitCapacity(int minCapacity) {
        modCount++;

        // overflow-conscious code
        // 调用grow方法进行扩容，调用此方法代表已经开始扩容了
        if (minCapacity - elementData.length > 0)
            grow(minCapacity);
    }
```

我们来仔细分析一下：

- 当我们要 add 进第 1 个元素到 ArrayList 时，elementData.length 为 0 （因为还是一个空的 list），因为执行了 `ensureCapacityInternal()` 方法 ，所以 minCapacity 此时为 10。此时，`minCapacity - elementData.length > 0`成立，所以会进入 `grow(minCapacity)` 方法。
- 当 add 第 2 个元素时，minCapacity 为 2，此时 e lementData.length(容量)在添加第一个元素后扩容成 10 了。此时，`minCapacity - elementData.length > 0` 不成立，所以不会进入 （执行）`grow(minCapacity)` 方法。
- 添加第 3、4···到第 10 个元素时，依然不会执行 grow 方法，数组容量都为 10。

直到添加第 11 个元素，minCapacity(为 11)比 elementData.length（为 10）要大。进入 grow 方法进行扩容。

**5.grow（）方法**

```java
    /**
     * Increases the capacity to ensure that it can hold at least the
     * number of elements specified by the minimum capacity argument.
     *
     * @param minCapacity the desired minimum capacity
     */
    private void grow(int minCapacity) { //首次扩容 minCapacity:10
        // overflow-conscious code
        // 旧容量oldCapacity
        int oldCapacity = elementData.length;
        // 新容量为旧容量的1.5倍
        int newCapacity = oldCapacity + (oldCapacity >> 1);
        //然后检查新容量是否大于最小需要容量，若还是小于最小需要容量，那么就把最小需要容量当作数组的新容量，（因为首次oldCapacity=0，导致newCapacity=0）
        if (newCapacity - minCapacity < 0)
        if (newCapacity - minCapacity < 0)
            newCapacity = minCapacity;
        // 判断新容量是否大于最大容量
        if (newCapacity - MAX_ARRAY_SIZE > 0)
            newCapacity = hugeCapacity(minCapacity);
        // minCapacity is usually close to size, so this is a win:
        elementData = Arrays.copyOf(elementData, newCapacity);
    }

	// 如果新容量newcapacity>最大容量MAX_ARRAY_SIZE 会进入该方法
	private static int hugeCapacity(int minCapacity) {
        if (minCapacity < 0) // overflow
            throw new OutOfMemoryError();
        // 如果最小需要容量>最大容量 返回Integer最大值;反之，返回最大容量值
        return (minCapacity > MAX_ARRAY_SIZE) ?
            Integer.MAX_VALUE :
            MAX_ARRAY_SIZE;
    }

	private static final int MAX_ARRAY_SIZE = Integer.MAX_VALUE - 8;
```

**int newCapacity = oldCapacity + (oldCapacity >> 1),所以 ArrayList 每次扩容之后容量都会变为原来的 1.5 倍左右（oldCapacity 为偶数就是 1.5 倍，否则是 1.5 倍左右）！** 奇偶不同，比如 ：10+10/2 = 15, 33+33/2=49。如果是奇数的话会丢掉小数.

**总结grow方法：**

- 当 add 第 1 个元素时，oldCapacity 为 0，经比较后第一个 if 判断成立，newCapacity = minCapacity(为 10)。但是第二个 if 判断不会成立，即 newCapacity 不比 MAX_ARRAY_SIZE 大，则不会进入 `hugeCapacity` 方法。数组容量为 10，add 方法中 return true,size 增为 1。
- 当 add 第 11 个元素进入 grow 方法时，newCapacity 为 15，比 minCapacity（为 11）大，第一个 if 判断不成立。新容量没有大于数组最大 size，不会进入 hugeCapacity 方法。数组容量扩为 15，add 方法中 return true,size 增为 11。
- 以此类推······

### **System.arraycopy() 和 Arrays.copyOf()方法**

```java
    // 我们发现 arraycopy 是一个 native 方法,接下来我们解释一下各个参数的具体意义
    /**
    *   复制数组
    * @param src 源数组
    * @param srcPos 源数组中的起始位置
    * @param dest 目标数组
    * @param destPos 目标数组中的起始位置
    * @param length 要复制的数组元素的数量
    */
    public static native void arraycopy(Object src,  int  srcPos,
                                        Object dest, int destPos,
                                        int length);

```

```java
	public static <T,U> T[] copyOf(U[] original, int newLength, Class<? extends T[]> newType) {
        @SuppressWarnings("unchecked")
        T[] copy = ((Object)newType == (Object)Object[].class)
            ? (T[]) new Object[newLength]
            : (T[]) Array.newInstance(newType.getComponentType(), newLength);
        System.arraycopy(original, 0, copy, 0,
                         Math.min(original.length, newLength));
        return copy;
    }
```

**Arrays.copyOf()调用了System.arraycopy()方法，该方法被native修饰**

> native关键字修饰的Java方法是一个原生态方法，方法对应的实现Java作用范围达不到，而是在用其他编程语言（如C和C++）文件中实现

# Set

## comparable 和 Comparator 的区别

Comparable接口，也叫做内比较器，它有一个comparaTo(Object obj)方法，用来和自己比较

Comparator接口，也叫做外比较器，有一个compare(Object obj1, Object obj2)方法，实现两个对象之间比较

例如：Collections.sort()方法有两种比较方式：

1. 对象实现Comparable接口，重写comparaTo方法，自定义比较规则
2. sort(Comparator<? super E> c)方法中传入比较器，根据compare方法进行比较

## 无序性和不可重复性的含义是什么

**无序性：**无序性不代表是随机存储的，无序性是指根据数据的哈希值存储的。存入时，就决定了取出来的顺序

**不可重复性：**相同元素在set中只会保存一份

## HashSet、LinkedHashSet 和 TreeSet

- 三者都能保证元素唯一、都非线程安全的
- HashSet底层数据结构是哈希表（基于HashMap实现）。LinkedHashSet底层数据结构是哈希表+双向链表，链表维护了 元素的次序。TreeSet底层数据为红黑树，元素是有序的，支持自定义排序规则
- 总结：`HashSet` 无序，`LinkedHashSet` 插入顺序与取出顺序相同，`TreeSet` 用于支持对元素自定义排序规则的场景。

## HashSet如何检查重复

`HashSet` 底层基于 `HashMap`，向 `HashSet` 添加元素时，`HashSet (HashMap)`会先计算对象的 `hashcode` 值，通过扰动计算和按位与 `(n - 1) & hash`的方式计算出这个元素的存储位置；如果该位置为空，则直接存放到该位置；

如果不为空，则比较对象的`hash值`和配合`equals方法`进行判断，判断它是否为重复元素，若重复，那么最后会将这个重复元素返回。

> 注意这里的hash值是经过扰动函数运算处理后的hash值，不是真正的hashcode值

```java
//hash的计算方法
static final int hash(Object key) {
        int h;
        return (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16); // 扰动函数
    }
```

```java
//这段代码通过hash计算该元素的位置，判断是否有值； n为table数组的大小
if ((p = tab[i = (n - 1) & hash]) == null)	//哈希函数
            tab[i] = newNode(hash, key, value, null);
```

```java
//该位置已有元素，接下来就通过hash和equals方法进行判断，是否为重复元素
if (p.hash == hash &&
                ((k = p.key) == key || (key != null && key.equals(k))))
                e = p;
```

所以经过上述代码所示，存放自定义对象时，一定要重写hashcode和equals方法来确保set中存放的不是重复的元素

## TreeSet如何检查重复

构造器中传入Comparator类型对象时，会根据实现的Compare方法进行去重

使用无参构造时，会根据对象实现的ComparaTo方法去重，若对象没有实现Comparable接口，会报出`java.lang.Object cannot be cast to java.lang.Comparable`

## **为什么重写equals方法还要重写hashCode方法？**

在HashSet、HashMap等中的key是用hashCode + equals()进行唯一性判断的，**`重写hashCode()方法，其底层是根据对象的属性值来生成新的hashCode，保证属性相同的对象的hashCode相等`**

如果不重写hashCode()方法，那么`相同属性值的两个对象可能出现不同的hashCode`，那在HashSet、HashMap等中的key就不是唯一的了，`可能出现相同的对象因为hashCode不同而存放在不同的位置`

`hashCode()`与 `equals()` 的相关规定：

1. 如果两个对象相等，则 `hashcode` 一定也是相同的
2. 两个对象相等,对两个 `equals()` 方法判断 返回 true
3. 两个对象有相同的 `hashcode` 值，它们也不一定是相等的
4. 综上，`equals()` 方法被覆盖过，则 `hashCode()` 方法也必须被覆盖
5. `hashCode()`的默认行为是对堆上的对象产生独特值。如果没有重写 `hashCode()`，则该 class 的两个对象无论如何都不会相等（即使这两个对象指向相同的数据）。

# Map

## HashMap和Hashtable的区别

**线程安全性：**hashmap线程不安全、Hashtable线程安全

**效率：**因为线程安全的问题，HashMap效率要比Hashtable高

**数据结构：**HashMap在jdk1.8中底层变为了数组+链表+红黑树。Hashtable是数组+链表形式

**对 Null key 和 Null value 的支持：** `HashMap` 可以存储 null 的 key 和 value，但 null 作为键只能有一个，null 作为值可以有多个；Hashtable 不允许有 null 键和 null 值，否则会抛出 `NullPointerException`。

**初始容量大小和扩容大小不同：**①Hashtable默认初始容量为`11`，之后每次扩容为原来的`2n+1` 。HashMap默认初始容量为16，之后每次扩容为原来的2倍。②若使用有参构造执行初始容量，Hashtable会直接使用给定的容量大小。而HashMap会将其扩充为`2的幂次方大小`。（也就是HashMap总是使用2的幂作为哈希表的大小）



HashMap带有初始容量的构造方法：

```java
public HashMap(int initialCapacity, float loadFactor) {
        if (initialCapacity < 0)
            throw new IllegalArgumentException("Illegal initial capacity: " +
                                               initialCapacity);
        if (initialCapacity > MAXIMUM_CAPACITY)
            initialCapacity = MAXIMUM_CAPACITY;
        if (loadFactor <= 0 || Float.isNaN(loadFactor))
            throw new IllegalArgumentException("Illegal load factor: " +
                                               loadFactor);
        this.loadFactor = loadFactor;
    	//调用了tableSize
        this.threshold = tableSizeFor(initialCapacity);
    }
     public HashMap(int initialCapacity) {
        this(initialCapacity, DEFAULT_LOAD_FACTOR);
    }
```

方法保证了 `HashMap` 总是使用 2 的幂作为哈希表的大小。

```java
	/**
     * Returns a power of two size for the given target capacity.
     */
    static final int tableSizeFor(int cap) {
        int n = cap - 1;
        n |= n >>> 1;
        n |= n >>> 2;
        n |= n >>> 4;
        n |= n >>> 8;
        n |= n >>> 16;
        return (n < 0) ? 1 : (n >= MAXIMUM_CAPACITY) ? MAXIMUM_CAPACITY : n + 1;
    }
```

## HashMap的底层实现

JDK1.7 时`HashMap` 底层是 **数组+链表** 。HashMap 通过 key 的 `hashcode` 经过扰动函数处理过后得到 hash 值，然后通过 `(n - 1) & hash` 判断当前元素存放的位置（这里的 n 指的是数组的长度），如果当前位置存在元素的话，就判断该元素与要存入的元素的 hash 值以及 使用equals（）方法判断key 是否相同，如果相同的话，直接覆盖，不相同就通过拉链法解决冲突。

JDK1.8时在处理哈希冲突时，当单个链表长度大于8时，并且数组长度>=64，会将数组转换为红黑树。（小于64，会优先对数组进行扩容）

当红黑树节点数降为6时，会还原为单链表。



扰动函数指的就是 HashMap 的 `hash` 方法。使用 `hash` 方法也就是扰动函数是为了降低哈希冲突的概率。

**hash方法（1.8版本）：**

```java
     static final int hash(Object key) {
          int h;
          // key.hashCode()：返回散列值也就是hashcode
          // ^ ：按位异或
          // >>>:无符号右移，忽略符号位，空位都以0补齐
          return (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16);
      }
```

> `(n - 1) & hash` = `hash % n`，也就是对hash取模，前提是数组的长度是2的幂次方

## HashMap的扩容机制

HashMap中几个重要变量：

- `Size` ：记录了map中的K，V对的个数
- `Capacity`：容量（哈希表的大小）
- `loadFactor`：装载因子
- `threshold`：临界值

HashMap在进行无参构造初始化时，默认容量为16。之后再每次put元素时，都会先判断当前元素个数size是否大于临界值threshold。大于临界值就会自动扩容为2倍

临界值threshold = loadFactor * capacity，loadfactor装载因子默认值为0.75

HashMap的有参构造，用来指定初始容量，但HashMap会使用大于该数字的第一个2的幂次方作为容量（capacity）

(1->1、7->8、9->16)

> 这里有一个小建议：在初始化HashMap的时候，应该尽量指定其大小。尤其是当你已知map中存放的元素个数时。（《阿里巴巴Java开发规约》）

## HashMap的长度为什么是2的幂次方

HashMap是通过`（n-1）& hash` 来计算元素在数组中的存放位置。这个公式其实就是代替了取模运算。只要保证数组长度为2的幂次方，`（n-1）& hash 等效于 hash%n` ，

所以HashMap为了提高计算效率，实现位运算代替取模运算，将数组长度设计为2的幂次方。

所以为了提高运算效率，使用 位运算代替取模，HashMap将数组长度设计为2的幂次方。

## HashMap线程不安全问题

多线程环境下使用HashMap，会出现数据丢失、覆盖问题。且JDK1.7时HashMap是采用头插法进行扩容的，头插法会将链表的数据翻转，并发场景会产生循环链表。

JDK1.8版本改为尾插法进行扩容，不会产生循环链表，但并发场景会有数据丢失问题。

## HashMap的几种遍历方式

(img\HashMap的几种遍历方式.png)

```java
 // 创建并赋值 HashMap
        Map<Integer, String> map = new HashMap();
        map.put(1, "Java");
        map.put(2, "JDK");
        map.put(3, "Spring Framework");
        map.put(4, "MyBatis framework");
        map.put(5, "Java中文社群");
```



**1.迭代器EntrySet:**

```java
		Iterator<Map.Entry<Integer, String>> iterator = map.entrySet().iterator();
        while (iterator.hasNext()) {
            Map.Entry<Integer, String> entry = iterator.next();
            System.out.println(entry.getKey());
            System.out.println(entry.getValue());
        }
```

**2.迭代器KeySet**

```java
        Iterator<Integer> iterator = map.keySet().iterator();
        while (iterator.hasNext()) {
            Integer key = iterator.next();
            System.out.println(key);
            System.out.println(map.get(key));
        }
```

**3.ForEach EntrySet**:

```java
		for(Map.Entry<Integer,String> entry : map.entrySet()){
            System.out.println(entry.getKey());
            System.out.println(entry.getValue());
        }
```

**4.ForEach KeySet:**

```java
		for(Integer key : map.keySet()){
            System.out.println(key);
            System.out.println(map.getValue(key));
        }
```

**5.lambda**

```java
		map.forEach((key, value) -> {
            System.out.println(key);
            System.out.println(value);
        });
```

**6.Streams API 单线程**

```
		map.entrySet().stream().forEach((entry) -> {
            System.out.println(entry.getKey());
            System.out.println(entry.getValue());
        });
```

**7.Streams API 多线程**

```java
		map.entrySet().parallelStream().forEach((entry) -> {
            System.out.println(entry.getKey());
            System.out.println(entry.getValue());
        });
```

**性能比较：**

(GQJava面试题-基础.assets/1667554907083-d0b2ccb0-ef4b-4cc0-bace-a7345b3aec3b.png)

`entrySet` 的性能相近，并且执行速度最快，接下来是 `stream` ，然后是两个 `keySet`，性能最差的是 `KeySet`

`EntrySet` 的性能比 `KeySet` 的性能高出了一倍，因为 `KeySet` 相当于循环了两遍 Map 集合，而 `EntrySet` 只循环了一遍。

## fail-fast和fail-safe

### fail-fast

`fail-fast`（快速失败）是Java集合的一种错误检测机制，当多个线程对集合进行结构上的改变时，会抛出ConcurrentModificationException（并发修改异常）。

Java中， 如果在foreach 循环里对集合元素进行元素的 remove/add 操作的时候，就会触发fail-fast机制，进而抛出CMException。

```java
    List<String> userNames = new ArrayList<String>() {{
        add("Hollis");
        add("hollis");
        add("HollisChuang");
        add("H");
    }};

    for (String userName : userNames) {
        if (userName.equals("Hollis")) {
            userNames.remove(userName);
        }
    }

    System.out.println(userNames);

```

以上代码，使用增强for循环遍历元素，并尝试删除其中的Hollis字符串元素。运行以上代码，会抛出以下异常：

```java
    Exception in thread "main" java.util.ConcurrentModificationException
    at java.util.ArrayList$Itr.checkForComodification(ArrayList.java:909)
    at java.util.ArrayList$Itr.next(ArrayList.java:859)
    at com.hollis.ForEach.main(ForEach.java:22)
```

同样的，在增强for循环中使用add方法添加元素，结果也会同样抛出该异常。

**异常原理：**

Iterator.next()方法中会调用如下代码：

```java
    if (modCount != expectedModCount)
       throw new ConcurrentModificationException();
```

对modCount和expectedModCount进行了比较，如果二者不相等，则抛出CMException。

modCount是集合中的一个成员变量。它表示该集合实际被修改的次数。

```java
    transient int modCount;
```

expectedModCount表示这个迭代器预期该集合被修改的次数。其值随着Itr被创建而初始化。只有通过迭代器对集合进行操作，该值才会改变。

使用集合自身的remove/add操作时，只会增长modCount的值，导致两值不一致，下一轮执行iterator.next(）时，发生并发修改异常

### fail-safe

Java中提供的一些采用了fail-safe（安全失败）机制的集合类。java.util.current包下的容器都是fail-safe的，可以在多线程环境下使用。同时也可以在forEach中进行add/remove。

fail-safe集合的所有对集合的修改都是先拷贝一份副本，然后在副本集合上进行的，并不是直接对原集合进行修改。并且这些修改方法，如add/remove都是通过加锁来控制并发的。

## 如何在遍历的同时删除ArrayList中的元素

也就是如何避免fail-fast的检验机制

**1.使用普通for进行操作：**

```java
    List<String> userNames = new ArrayList<String>() {{
        add("Hollis");
        add("hollis");
        add("HollisChuang");
        add("H");
    }};

    for (int i = 0; i < 1; i++) {
        if (userNames.get(i).equals("Hollis")) {
            userNames.remove(i);
        }
    }
    System.out.println(userNames);

```

​	普通for循环并没有用到Iterator的遍历，所以压根就没有进行fail-fast的检验。

**2.使用Iterator提供的remove方法：**

使用Iterator提供的remove方法，那么就可以修改到expectedModCount的值。那么就不会再抛出异常了。



**3. 使用Java8中提供的filter过滤：**

使用Stream流中的中间操作filter，过滤后会形成一个新的Stream

```java
    List<String> userNames = new ArrayList<String>() {{
        add("Hollis");
        add("hollis");
        add("HollisChuang");
        add("H");
    }};

    userNames = userNames.stream().filter(userName -> !userName.equals("Hollis")).collect(Collectors.toList());
    System.out.println(userNames);

```

**4.直接使用fail-safe的集合**

这样的集合容器在遍历时不是直接在集合内容上访问的，而是先复制原有集合内容，在拷贝的集合上进行遍历。

由于迭代时是对原集合的拷贝进行遍历，所以在遍历过程中对原集合所作的修改并不能被迭代器检测到，所以不会触发ConcurrentModificationException。

## CopyOnWriteArrayList

CopyOnWriteArrayList相当于线程安全的ArrayList，由Java并发包中提供。

CopyOnWriteArrayList使用了一种叫`写时复制`的方法，添加新元素时，先对原始数组拷贝一份，然后在新的数组做写操作，写完之后，再将原来的数组引用指向到新数组。

这样做的好处是我们可以对CopyOnWrite容器进行并发的读，而不需要加锁，因为当前容器不会添加任何元素。所以CopyOnWrite容器也是一种读写分离的思想，读和写不同的容器。

当然，读到的数据可能不是最新的。因为写时复制的思想是通过延时更新的策略来实现数据的最终一致性的，并非强一致性。

CopyOnWriteArrayList的整个add操作都是在锁的保护下进行的。也就是说add方法是线程安全的

CopyOnWrite并发容器用于读多写少的并发场景。比如白名单，黑名单，商品类目的访问和更新场景。

## CurrentHashMap的底层实现

**JDK1.7**

(GQJava面试题-基础.assets/1667554932451-ffc6d05d-0d77-4660-ae83-e0a1b9c0612c.png)

在JDK1.7，`CurrentHashMap`采用了`Segment`数组+`HashEntry`数组的结构来分段存储。每段就是一个`Segment`， 当一个线程占用锁访问其中一个段的数据时，其它段的数据也能被其它线程访问。

`Segment` 继承了 `ReentrantLock`,所以 `Segment` 是一种可重入锁，扮演锁的角色。`HashEntry` 用于存储键值对数据。

```java
static class Segment<K,V> extends ReentrantLock implements Serializable {
}
```

一个 `ConcurrentHashMap` 里包含一个 `Segment` 数组，`Segment` 的个数一旦**初始化就不能改变**。 `Segment` 数组的大小默认是 16，也就是说默认可以同时支持 16 个线程并发写。

`Segment` 的结构和 `HashMap` 类似，是一种数组和链表结构，一个 `Segment` 包含一个 `HashEntry` 数组，每个 `HashEntry` 是一个链表结构的元素。

每个 `Segment` 守护着一个 `HashEntry` 数组里的元素，当对 `HashEntry` 数组的数据进行修改时，必须首先获得对应的 `Segment` 的锁。也就是说，对同一 `Segment` 的并发写入会被阻塞，不同 `Segment` 的写入是可以并发执行的。

**总结：**

JDK1.7时，CurrentHashMap采用分段锁（Segment）来保证线程安全，每段就是一个Segment，锁只会锁住当前段的数据，其它段的数据也能被其它线程访问。`Segment` 继承了 `ReentrantLock`，是一种可重入锁

每个Segment包含了一个HashEntry数组（类似一个HashMap结构），用来存储数据。每一个HashEntry是一个链表结构

**JDK1.8 之后：**

(GQJava面试题-基础.assets/1667554946208-37cf0ad2-8c06-4393-a7db-212ec051619f.png)

JDK1.8取消了分段锁`Segment`，数据结构与HashMap类似，数组+链表/红黑树。采用了`CAS`和`Synchronized`来保证线程安全。

`synchronized` 只锁定当前链表或红黑二叉树的首节点，锁粒度更细，这样只要hash不冲突，就不会产生线程阻塞（并发），效率大幅提升。

# 泛型

## 什么是泛型

泛型是在定义类和定义接口时候使用类型参数，声明的类型参数在使⽤时⽤具体的类型来替换。

编译器可以对泛型参数进行检测，并且通过泛型参数可以指定传入的对象类型。如果传入其他类型的对象就会报错。

泛型最⼤的好处是可以提⾼代码的复⽤性。 以List接口为例，我们可以将String、 Integer等类型放⼊List中， 如不⽤泛型， 存放String类型要写⼀个List接口， 存放Integer要写另外⼀个List接口， 泛型可以很好的解决这个问题。

## 泛型的使用方式

泛型一般有三种使用方式：**泛型类**、**泛型接口**、**泛型方法**

**1.泛型类：**

```java
//此处T可以随便写为任意标识，常见的如T、E、K、V等形式的参数常用于表示泛型
//在实例化泛型类时，必须指定T的具体类型
public class Generic<T>{

    private T key;

    public Generic(T key) {
        this.key = key;
    }

    public T getKey(){
        return key;
    }
}
```

如何实例化泛型类：

```java
Generic<Integer> genericInteger = new Generic<Integer>(123456);
```

**2.泛型接口** ：

```java
public interface Generator<T> {
    public T method();
}
```

实现泛型接口，不指定类型：

```java
class GeneratorImpl<T> implements Generator<T>{
    @Override
    public T method() {
        return null;
    }
}
```

实现泛型接口，指定类型：

```java
class GeneratorImpl<T> implements Generator<String>{
    @Override
    public String method() {
        return "hello";
    }
}
```

**3.泛型方法** ：

```java
   public static < E > void printArray( E[] inputArray )
   {
         for ( E element : inputArray ){
            System.out.printf( "%s ", element );
         }
         System.out.println();
    }
```

使用：

```java
// 创建不同类型数组： Integer, Double 和 Character
Integer[] intArray = { 1, 2, 3 };
String[] stringArray = { "Hello", "World" };
printArray( intArray  );
printArray( stringArray  );
```

> 注意: `public static < E > void printArray( E[] inputArray )` 一般被称为静态泛型方法;在 java 中泛型只是一个占位符，必须在传递类型后才能使用。类在实例化时才能真正的传递类型参数，由于静态方法的加载先于类的实例化，也就是说类中的泛型还没有传递真正的类型参数，静态的方法的加载就已经完成了，所以静态泛型方法是没有办法使用类上声明的泛型的。只能使用自己声明的 `<E>`

## 什么是类型擦除

Java在处理泛型时，编译器会将所有泛型参数擦除掉，替换成泛型类型的顶级父类型（最左边界）。

所以编译器只会为泛型类型生成一份字节码，并将所有实例关联到这一份字节码上。

在虚拟机中没有泛型，只有普通类和普通方法。

类型擦除可以简单地理解为将泛型代码转换为普通代码。

> < T> 会被擦除编程Object，< E extends Serializable>则变成Serializable（最左边界）



## 限定通配符和非限定通配符

`限定通配符`对类型进⾏限制， 泛型中有两种限定通配符：

- 一种是限定类型的上界，格式为：`<？ extends T>`，即类型必须为T类型或者T子类

- 另一种是限定类型的下界，格式为：`<？ super T>`，即类型必须为T类型或者T的父类

`非限定通配符`表⽰可以⽤任意泛型类型来替代，类型为< T >

泛型类型必须⽤限定内的类型来进⾏初始化，否则会导致编译错误。



# 枚举

## 枚举的用法

枚举类型（`enum type`）是指由一组固定的常量组成合法的类型。`Java`中由关键字`enum`来定义一个枚举类型。下面就是`java`枚举类型的定义。

```java
    public enum Season {
        SPRING(1), SUMMER(2), AUTUMN(3), WINTER(4);

        private int code;
        private Season(int code){
            this.code = code;
        }

        public int getCode(){
            return code;
        }
    }
```

## 应用场景

每当需要一组固定的常量的时候，如一周的天数、一年四季等。或者是在我们编译前就知道其包含的所有值的集合。Java 1.5的枚举能满足绝大部分程序员的要求的，它的简明，易用的特点是很突出的。

## 枚举实现单例

```java
	public enum Singleton {  
        INSTANCE;  
        public void whateverMethod() {  
        }  
	}  

```

在所有的单例实现方式中，枚举是一种在代码写法上最简单的方式，之所以代码十分简洁，是因为Java给我们提供了`enum`关键字，我们便可以很方便的声明一个枚举类型，而不需要关心其初始化过程中的线程安全问题，因为枚举类在被虚拟机加载的时候会保证线程安全的被初始化。

除此之外，在序列化方面，Java中有明确规定，枚举的序列化和反序列化是有特殊定制的。这就可以避免反序列化过程中由于反射而导致的单例被破坏问题。

## 枚举是如何序列化的

在序列化的时候Java仅仅是将枚举对象的name属性输出到结果中，反序列化的时候则是通过java.lang.Enum的valueOf方法来根据名字查找枚举对象。

同时，编译器是不允许任何对这种序列化机制的定制的，因此禁用了writeObject、readObject、readObjectNoData、writeReplace和readResolve等方法。

我们看一下这个`valueOf`方法：

```java
		public static <T extends Enum<T>> T valueOf(Class<T> enumType,String name) {  
            T result = enumType.enumConstantDirectory().get(name);  
            if (result != null)  
                return result;  
            if (name == null)  
                throw new NullPointerException("Name is null");  
            throw new IllegalArgumentException(  
                "No enum const " + enumType +"." + name);  
        }  

```

代码会尝试从调用`enumType`这个`Class`对象的`enumConstantDirectory()`方法返回的`map`中获取名字为`name`的枚举对象，如果不存在就会抛出异常。再进一步跟到`enumConstantDirectory()`方法，就会发现到最后会以反射的方式调用`enumType`这个类型的`values()`静态方法，也就是上面我们看到的编译器为我们创建的那个方法，然后用返回结果填充`enumType`这个`Class`对象中的`enumConstantDirectory`属性。

这就保证了每一个枚举项在JVM中都是单例的

# 注解

## 元注解

可以理解为，定义其他注解的注解。比如Override这个注解，就不是一个元注解。而是通过元注解定义出来的。

```java
    @Target(ElementType.METHOD)
    @Retention(RetentionPolicy.SOURCE)
    public @interface Override {
    }
```

这里面的 @Target @Retention 就是元注解。

元注解有六个:

- @Target（表示该注解可以用于什么地方）
- @Retention（表示再什么级别保存该注解信息）
- @Documented（将此注解包含再javadoc中）
- @Inherited（允许子类继承父类中的注解）
- @Repeatable（1.8新增，允许一个注解在一个元素上使用多次）
- @Native（1.8新增，修饰成员变量，表示这个变量可以被本地代码引用，常常被代码生成工具使用）。

## 如何自定义一个注解

在Java中，类使用class定义，接口使用interface定义，注解和接口的定义差不多，增加了一个@符号，即@interface，代码如下：

```java
public @interface EnableAuth {

}
```

注解中可以定义成员变量，用于信息的描述，跟接口中方法的定义类似，代码如下：

```java
public @interface EnableAuth {
    String name();
}
```

还可以添加默认值：

```java
public @interface EnableAuth {
    String name() default "猿天地";
}
```

上面的介绍只是完成了自定义注解的第一步，开发中日常使用注解大部分是用在类上，方法上，字段上，示列代码如下：

```java
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface EnableAuth {

}
```

## 注解的解析方法有哪几种？

注解只有被解析之后才会生效，常见的解析方法有两种：

- **编译期直接扫描** ：编译器在编译 Java 代码的时候扫描对应的注解并处理，比如某个方法使用`@Override` 注解，编译器在编译的时候就会检测当前的方法是否重写了父类对应的方法。
- **运行期通过反射处理** ：像框架中自带的注解(比如 Spring 框架的 `@Value` 、`@Component`)都是通过反射来进行处理的。



# 反射

## 何谓反射

反射是Java的一种特性，它可以在运行时获取任意类的所有有属性和方法，还可以调用这些属性和方法。

## 反射的作用

1. 在运行时判断任意一个对象所属的类。
2. 在运行时判断任意一个类所具有的成员变量和方法。
3. 在运行时任意调用一个对象的方法
4. 在运行时构造任意一个类的对象



## Class类

Java.lang.Class是一个比较特殊的类，当一个类或者接口被加载进内存时，JVM便会产生一个相应的Class对象，并且只有一份，可以通过这个Class对象对类的详细信息进行访问

虚拟机为每种类型管理一个独一无二的Class对象。也就是说，每个类（型）都有一个Class对象。运行程序时，Java虚拟机(JVM)首先检查是否所要加载的类对应的Class对象是否已经加载。如果没有加载，JVM就会根据类名查找.class文件，并将其Class对象载入。

## 获取Class对象的方式

三个阶段：

1. 编译期间：通过Class.forName()
    - 多用于配置文件，读取类全路径，加载类
2. 类加载阶段：通过类名.class
    - 多用于参数传递，比如通过反射得到对应构造器对象.
3. 运行阶段：对象实例.getClass()
    - 通过创建好的对象，获取Class对象

(G:/%E7%AC%94%E8%AE%B0/%E7%AC%94%E8%AE%B0%E6%88%AA%E5%9B%BE/image-20221103124801658.png)

基本数据类型

```
	Class cls = int.class
```

包装类型可以通过 TYPE属性获得

```
	Class cls =  包装类.TYPE
```

## 反射获取创建对象、获取属性和方法

**创建对象：**

```java
	//获取User类的Class对象    
	Class<?> userClass = Class.forName("chapter23.User");

	//1.通过public的无参构造器创建实例
    Object o = userClass.newInstance();

	//2.通过public的有参构造器创建实例
	Constructor<?> constructor = userClass.getConstructor(String.class);
    Object o1 = constructor.newInstance("李四");
	
	//3.通过私有的有参构造器创建实例，该方法可以获得所有的构造器
    Constructor<?> constructor1 = userClass.getDeclaredConstructor(int.class, String.class);
    //暴力破解
    constructor1.setAccessible(true);
    constructor1.newInstance(25,"王二");
```

**获取属性：**

```java
	//访问属性
    //1.根据属性名获得Filed对象  私有属性需要爆破
    Field f = userClass.getDeclaredField("name");
    //2.爆破
    f.setAccessible(true);
    //3.访问
    f.set(o,"张三丰");//设置值，o为对象实例
    System.out.println(f.get(o));//获取属性值
    //3.1若是静态属性
    f.set(null,"张三丰");
    System.out.println(f.get(null));
```

**访问方法：**

```java
	//获取对象
	Object o = userClass.newInstance();
	//根据方法名和参数列表获取Method方法对象：
	Method m = uerClass.getDeclaredMethod("方法名"，String.class,int.class);
	//爆破
	m.setAccessible(true);	
	//反射调用方法	如果是静态方法，则invoke的参数o，可以写成null
	Object returnValue = m.invoke(o,实参列表);
```

## 反射的优缺点？

反射可以实现动态创建对象和编译，让我们的代码更加灵活、为各种框架提供开箱即用的功能提供了便利。

不过，反射让我们在运行时有了分析操作类的能力的同时，也增加了安全问题，比如可以`无视泛型参数的安全检查`（泛型参数的安全检查发生在编译时）。另外，`反射的性能也要稍差点`，不过，对于框架来说实际是影响不大的。

## 反射的应用场景

Spring/Spring Boot、MyBatis 等等框架中都大量使用了反射机制。

注解的实现也用到了反射机制，例如：Spring中一个@component注解就声明了一个类为Spring Bean，是因为你可以基于反射分析类，然后获取到类/属性/方法/方法的参数上的注解。你获取到注解之后，就可以做进一步的处理。

动态代理的实现也依赖与反射机制



# IO

## Java IO流了解吗

IO即`Input/Output`，输入和输出。数据从磁盘中读取进计算机内存为输入，反之从内存中输出到磁盘的过程为输出。数据传输过程像水流一样，因此称为IO流。

IO流在Java中分为输入流和输出流，根据数据的处理方式又称为字节流和字符流。

## 字符流与字节流

**字节与字符**

Bit（比特位）最小的二进制单位 ，是计算机的操作部分。取值0或者1

Byte（字节）是计算机操作数据的最小单位由8位bit组成 取值（-128-127）

Char（字符）是用户的可读写的最小单位，在Java里面由16位bit组成 取值（0-65535）

1 Byte = 8 位；	Char =  2 Byte = 16位

(GQJava面试题-基础.assets/1667554984221-1b884b06-baef-4e69-9af7-f5891f01c3a0.png)

**字节流**

操作byte类型数据，主要操作类是OutputStream、InputStream的子类；不用缓冲区，直接对文件本身操作。

**字符流**

操作字符类型数据，主要操作类是Reader、Writer的子类；使用缓冲区缓冲字符，不关闭流就不会输出任何内容。

## 字节与字符流的转换

文件在磁盘上的存储是按二进制存储的，也即按字节存储的。想要实现字符流和字节流之间的相互转换需要用到两个类：

OutputStreamWriter 是字符流通向字节流的桥梁

InputStreamReader 是字节流通向字符流的桥梁

(GQJava面试题-基础.assets/1667554995991-15980445-71c5-4c24-9e3a-18314f529dc3.png)

**字符流转换字节流**

```java
    public static void main(String[] args) throws IOException {
        File f = new File("test.txt");

        // OutputStreamWriter 是字符流通向字节流的桥梁,创建了一个字符流通向字节流的对象
        OutputStreamWriter osw = new OutputStreamWriter(new FileOutputStream(f),"UTF-8");

        osw.write("我是字符流转换成字节流输出的");
        osw.close();

    }
```

**字节流转换字符流**

```java
	  public static void main(String[] args) throws IOException {
        
        File f = new File("test.txt");
        
        InputStreamReader inr = new InputStreamReader(new FileInputStream(f),"UTF-8");
        
        char[] buf = new char[1024];
        
        int len = inr.read(buf);
        System.out.println(new String(buf,0,len));
        
        inr.close();

    }

```

## 字节流与字符流的区别

- 字节流适合处理图片、视频等类型的文件、处理文本类型，会有编码问题
- 字符流一般用于处理纯文本文件
- 字节流没有使用到缓冲区(内存),是与文件本身直接操作的。
- 字符流使用到了缓冲区,在缓冲区的数据需要使用close()或者flush()方法强制刷新缓冲区将其输出(程序没有关闭数据是不会从缓冲区输出出来的)。

## 为什么需要转换流

操作文本数据，涉及到具体的指定编码表时，必须使用转换流 。
如果使用非默认编码保存文件或者读取文件时，需要用到转换流，因为转换流的重载构造方法中有指定编码格式的参数，而FileReader 与 FileWriter 是默认编码的文本文件。

字节流处理不了编码问题，转换流是为了解决字符流编码问题。

编码方式不同决定处理文件类型不同，字节流(ASCII)处理二进制文件，字符流(Unicode)处理文本文件，仅此而已。

## BIO、NIO和AIO

**BIO(blocking I/O) ：** 同步阻塞，服务器实现模式为一个连接一个线程，即客户端有连接请求时服务器端就需要启动一个线程进行处理，如果这个连接不做任何事情会造成不必要的线程开销，可以通过线程池机制改善(实现多个客户连接服务器).

(GQJava面试题-基础.assets/1667555008583-d6dbd683-f4dc-44e0-8dd6-dcdcdb3cd375.png)

**Java NIO ：** 同步非阻塞，服务器实现模式为一个线程处理多个请求(连接)，即客户端发送的连接请求都会注册到多路复用器上，多路复用器轮询到连接有 I/O 请求就进行处理

(GQJava面试题-基础.assets/1667555017820-8e320419-1d3c-44b5-a579-cd79e29c4518.png)

**异步 IO（Asynchronous I/O）** 是基于事件和回调机制实现的，也就是应用操作之后会直接返回，不会堵塞在那里，当后台处理完成，操作系统会通知相应的线程进行后续的操作。

(GQJava面试题-基础.assets/1667555026027-9d380ede-3fd1-4c56-984e-baf98c4b3c44.png)

# 序列化

## 什么是序列化与反序列化

序列化是将对象转换为可传输格式的过程。 是一种数据的持久化手段。反序列化是序列化的逆操作。

如果我们需要持久化 Java 对象比如将 Java 对象保存在文件中，或者在网络传输 Java 对象，这些场景都需要用到序列化。

## 如果有些字段不想序列化怎么办

对于不想进行序列化的变量，使用 `transient` 关键字修饰。

关于 `transient` 还有几点注意：

- `transient` 只能修饰变量，不能修饰类和方法。
- `transient` 修饰的变量，在反序列化后变量值将会被置成类型的默认值。例如，如果是修饰 `int` 类型，那么反序列后结果就是 `0`。
- `static` 变量因为不属于任何对象(Object)，所以无论有没有 `transient` 关键字修饰，均不会被序列化。

## Java如何实现序列化

### 实现Serializable接口

如果需要对一个对象进项序列化，该类所属类要实现`java.io.Serializable`接口，如果遇到不支持 Serializable 接口的对象。在此情况下，将抛出 `NotSerializableException`。

下面是一个实现了`java.io.Serializable`接口的类

```java
public class User1 implements Serializable {

    private String name;
    private int age;

    public String getName() {return name;}
    public void setName(String name) {this.name = name;}
    public int getAge() {return age;}
    public void setAge(int age) {this.age = age;}

    @Override
    public String toString() {
        return "User{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }
}
```

使用ObjectOuputStream字节输出流进行序列化，ObjectInputStream字节输入流进行反序列化

```java
public class SerializableDemo1 {

    public static void main(String[] args) {
        //Initializes The Object
        User1 user = new User1();
        user.setName("hollis");
        user.setAge(23);
        System.out.println(user);

        //Write Obj to File
        ObjectOutputStream oos = null;
        try {
            oos = new ObjectOutputStream(new FileOutputStream("tempFile"));
            oos.writeObject(user);
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            IOUtils.closeQuietly(oos);
        }

        //Read Obj from File
        File file = new File("tempFile");
        ObjectInputStream ois = null;
        try {
            ois = new ObjectInputStream(new FileInputStream(file));
            User1 newUser = (User1) ois.readObject();
            System.out.println(newUser);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } finally {
            IOUtils.closeQuietly(ois);
            try {
                FileUtils.forceDelete(file);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

    }
}

//OutPut:
//User{name='hollis', age=23}
//User{name='hollis', age=23}
```

### 实现Externalizable接口

Externalizable继承了Serializable，该接口中定义了两个抽象方法：`writeExternal()`与`readExternal()`。当使用Externalizable接口来进行序列化与反序列化的时候需要开发人员重写`writeExternal()`与`readExternal()`方法。

一点值得注意：在使用Externalizable进行序列化的时候，在读取对象时，**会调用被序列化类的无参构造器去创建一个新的对象**，然后再将被保存对象的字段的值分别填充到新对象中。所以，**实现Externalizable接口的类必须要提供一个public的无参的构造器。**

```java
public class User1 implements Externalizable {

    private String name;
    private int age;

    public String getName() {return name;}
    public void setName(String name) {this.name = name;}
    public int getAge() {return age;}
    public void setAge(int age) {this.age = age;}
    
	public void writeExternal(ObjectOutput out) throws IOException {
    }
    public void readExternal(ObjectInput in) throws IOException, ClassNotFoundException {
    }
    
    @Override
    public String toString() {
        return "User{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }
}
```

```java
public class ExternalizableDemo1 {

    //为了便于理解和节省篇幅，忽略关闭流操作及删除文件操作。真正编码时千万不要忘记
    //IOException直接抛出
    public static void main(String[] args) throws IOException, ClassNotFoundException {
        //Write Obj to file
        ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("tempFile"));
        User1 user = new User1();
        user.setName("hollis");
        user.setAge(23);
        oos.writeObject(user);
        //Read Obj from file
        File file = new File("tempFile");
        ObjectInputStream ois =  new ObjectInputStream(new FileInputStream(file));
        User1 newInstance = (User1) ois.readObject();
        //output
        System.out.println(newInstance);
    }
}
//OutPut:
//User{name='null', age=0}
```

上面的代码中，并没有在`writeExternal()`与`readExternal()`这两个方法中定义序列化实现细节，所以输出的内容为空。

### JSON序列化

通过JSON序列化类库，将对象序列化为JSON格式



## Serializable 和 Externalizable 的区别

如果一个类需要使用序列化的功能，该类就必须实现 `java.io.Serializable` 接口。 该接口没有方法或字段，仅用于标识作用，未实现此接口的类将⽆法使其任何状态序列化或反序列化， 将抛`NotSerializableException`。

可序列化类的所有⼦类型本⾝都是可序列化的。

`Externalizable`继承了`Serializable`， 该接口中定义了两个抽象⽅法：`writeExternal()`与`readExternal()`。 当使⽤`Externalizable`接口来进⾏序列化与反序列化的时候需要开发⼈员重写writeExternal()与readExternal()⽅法。

实现`Externalizable`接口的类必须要提供⼀个`public`的⽆参的构造器。

所以， 实现`Externalizable`， 并实现`writeExternal()`和`readExternal()`⽅法可以指定序列化哪些属性。

## serialversionuid的作用

serialVersionUID，作用是验证版本的一致性。

如果没有定义serialVersionUID的变量，Java的序列化机制会根据编译的class自动生成一个serialVersionUID，这种情况，如果对一个类进行修改的话，该类的serialVersionUID就会不一致，进行反序列化时就会报错。

一般设置一个类的private static final long serialVersionUID = 1L，为一个固定值，这样，如果忘记了对一个类进行过修改，该类也能正常被反序列化。

## ArrayList的序列化机制

ArrayList的属性elementData是`transient`修饰的，那它是怎么序列化时保存属性的呢？

```java
public class ArrayList<E> extends AbstractList<E>
        implements List<E>, RandomAccess, Cloneable, java.io.Serializable
{
    private static final long serialVersionUID = 8683452581122892189L;
    transient Object[] elementData; // non-private to simplify nested class access
    private int size;
}
```

在ArrayList中定义了这个方法： `writeObject`和`readObject`。

在序列化过程中，如果被序列化的类中定义了writeObject 和 readObject 方法，**虚拟机会试图调用对象类里的 writeObject 和 readObject 方法**(通过反射方式调用)，进行用户自定义的序列化和反序列化。

```
如果没有这样的方法，则默认调用是 ObjectOutputStream 的 defaultWriteObject 方法以及 ObjectInputStream 的 defaultReadObject 方法。

用户自定义的 writeObject 和 readObject 方法可以允许用户控制序列化的过程，比如可以在序列化的过程中动态改变序列化的数值。
```

readObject()方法:

```java
private void readObject(java.io.ObjectInputStream s)
        throws java.io.IOException, ClassNotFoundException {
        elementData = EMPTY_ELEMENTDATA;

        // Read in size, and any hidden stuff
        s.defaultReadObject();

        // Read in capacity
        s.readInt(); // ignored

        if (size > 0) {
            // be like clone(), allocate array based upon size not capacity
            ensureCapacityInternal(size);

            Object[] a = elementData;
            // Read in all elements in the proper order.
            for (int i=0; i<size; i++) {
                a[i] = s.readObject();
            }
        }
    }

```

writeObject()方法

```java
private void writeObject(java.io.ObjectOutputStream s)
        throws java.io.IOException{
        // Write out element count, and any hidden stuff
        int expectedModCount = modCount;
        s.defaultWriteObject();

        // Write out size as capacity for behavioural compatibility with clone()
        s.writeInt(size);

        // Write out all elements in the proper order.
        for (int i=0; i<size; i++) {
            s.writeObject(elementData[i]);
        }

        if (modCount != expectedModCount) {
            throw new ConcurrentModificationException();
        }
    }
```

**那么为什么ArrayList要用这种方式来实现序列化呢？**

ArrayList实际上是动态数组，每次在放满以后自动扩容，如果数组自动增长长度设为100，而实际只放了一个元素，那就会序列化99个null元素。

为了保证在序列化的时候不会将这么多null同时进行序列化，ArrayList把元素数组设置为transient。通过重写`writeObject` 和 `readObject`方法的方式把其中不为null的元素保留下来。

## 如何自定义序列化

在类中增加writeObject 和 readObject 方法可以实现自定义序列化策略