---
icon: leaf
date: 2022-01-18
category:
  - Spring
star: true
---

`more` 本文章主要介绍Spring框架整体架构，Spring的核心IOC，AOP的案例和具体实现机制；以及SpringMVC框架的案例和实现机制。

<!-- more -->

# Spring

## 一、ioc

ioc---inversion of control控制反转

案例：

```java
public class UserServiceImpl implements UserService {
    private UserDao userDao = null;

    public void setUserDao(UserDao userDao) {
        this.userDao = userDao;
    }

    @Override
    public void getUser() {
        userDao.getUser();
    }
}
```

```java
public class Test {
    public static void main(String[] args) {
        UserServiceImpl userService = new UserServiceImpl();
        userService.setUserDao(new UserDaoOracleImpl());
        userService.getUser();
        System.out.println("-----------------------------");
        userService.setUserDao(new UserDaoImpl());
        userService.getUser();
    }
}
```

在service层与dao层进行联系时，原来是通过

```java
private UserDao userDao = new UserDaoImpl();
```

进行的，这使得service和dao之间存在直接的依赖关系，耦合度较高，当一个项目做大之后，需要对dao类进行更改时，会导致service也进行直接更改，不利于项目的维护。

而通过ioc，将对象有原来程序来创建，变为了程序接受对象。

程序员主要的精力集中于业务的实现。

实现了service和dao的解耦工作。Service层和dao层实现了分离。解除了service层与dao层的直接依赖关系

如果dao层发生改变，应用程序本身不需要在进行更改。

ioc：目的就是减少对代码的改动，也能实现不同的功能。实现解耦。

### 1、java中创建对象的方法

1. 构造方法：new User()
2. 反射
3. 序列化
4. 克隆
5. ioc：容器创建对象
6. 动态代理

### 2、ioc的体现

servlet：创建类继承HttpServlet，在web.xml中注册servlet，使用servlet-name等相关标签，我们并没有创建servelt对象，没有 new Servlet()，这是tomcat服务器帮我们创建的，所以tomcat也称为容器，里面存放的servlet对象。

### 3、ioc的技术实现

DI是ioc 的技术实现

DI（Dependency Injection）：依赖注入，只需要在程序中提供要使用的对象名称就可以了，至于对象如何在容器中实现，赋值，查找都由容器内部来实现。

spring是使用的di实现了ioc 的功能，spring底层创建对象，使用的是反射机制。

创建第一个spring对象

在创建时选择maven管理工具，之后在resources目录下创建xml配置文件，选中spring，名称为beans.xml

内容为：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">

</beans>
```

在其中创建\<bean id="" class="" /\>

告诉spring创建对象，声明bean，就是高数spring要创建某个类的对象

id：对象的自定义名称，唯一值，spring通过这个名称找到对象

class：类的全限定名称（不能是接口，因为spring是反射机制创建对象，必须使用类）

### 4、Spring创建对象

```java
public void fun () {
    //使用spring容器创建对象
    //1.指定spring容器配置文件名称
    String config = "beans.xml";
    //2.创建表示spring容器的对象,ApplicationContext
    ApplicationContext applicationContext = new ClassPathXmlApplicationContext(config);

    //获取其配置文件中bean的id值
    SomeService someService = (SomeService) applicationContext.getBean("someService");
    //使用spring创建好的对象
    someService.doSome();
    
}
```

Spring创建对象的时间：是在new ClassPathXmlApplicationContext(config)时创建的，此时会创建配置文件中所有的对象,默认调用的时无参的构造方法

```java
public void fun2 () {
        String config = "beans.xml";
        ClassPathXmlApplicationContext ac = new ClassPathXmlApplicationContext(config);
        //使用spring提供的方法,获取容器中定义的方法数量
        int count = ac.getBeanDefinitionCount();
        System.out.println("容器中定义的方法的数量:" + count);
        //容器中每个定义对象的名称
        String[] names = ac.getBeanDefinitionNames();
        for (String name : names) {
            System.out.println(name);
        }
}
```

### 5、属性赋值

在spring的配置文件中，给java对象的属性赋值

di：用来注入，表示创建对象，给属性赋值

#### (1) di的实现语法有两种：

1. 在spring的配置文件中，使用标签完成，叫做基于XML的di实现
2. 使用spring中的注解，完成属性赋值，叫做基于注解的id实现

#### (2) di的语法分类：

1. set注入（设值注入）：spring调用类的set方法，在set方法可以实现属性的注入，八成左右都是使用的set注入
2. 构造注入，spring调用类的有参构造方法，创建对象，在构造方法中完成赋值

##### ①、set注入

1. 简单类型的set注入

```xml
<bean id="myStudent" class="com.xialuote.domain.Student">
    <property name="name" value="沈梦琳"/>
    <property name="age" value="18"/>
</bean>
```

```xml
<bean id="xx" class="yyy">
	<property name="属性名字" value="属性值" />
</bean>
```

在这里的赋值，是通过调用set方法进行赋值的，在通过此种方式赋值，前提是类对象中有set方法才可以，否则会报错。当构造方法与set设值注入相遇时，先执行构造方法，后执行set注入通过<property name="xxx" value="yyy"/>只能确定bean中创建的对象中有set方法，不能确定其中有xxx的属性。因为即便没有xxx的属性，只有setXXX的方法依然可以被调用。

2. 引用类型的set注入：spring调用类的set方法

    <bean id="xxx" class="yyy">

   ​	<property name="属性名称" ref="bean的id（对象的名称）"/>

    </bean>

    ```xml
    <bean id="student" class="com.xialuote.domain.Student">
        <property name="name" value="沈梦琳"/>
        <property name="age" value="18"/>
        <property name="school" ref="school"/>
    </bean>
    
    <bean id="school" class="com.xialuote.domain.School">
        <property name="name" value="清华大学"/>
        <property name="address" value="北京大学对面"/>
    </bean>
    ```

<property name="school" ref="school"/>此行代码采用了ref，也就是用了引用数据设置注入。将下面的bean中设置的内容引用到自己的bean中设置内容，完成引用注入

##### ②、构造注入

spring调用类有参数构造方法，在创建对象的同时，在构造方法中给属性赋值

构造注入使用`<constructor-arg>`标签

`<constructor-arg>`：一个`<constructor-arg>`表示构造方法的一个参数

`<constructor-arg>`标签属性：

​	name：表示构造方法的形参名

​	index：表示构造方法的参数的位置，参数从左往右位置是0,1,2的顺序

​	value：构造方法的形参类型时简单类型的，使用value

​	ref：构造方法的形参类型时引用类型的，使用ref

###### 第一种：

采用name注入

```xml
<bean id="myTeacher" class="com.xialuote.domain.Teacher">
    <constructor-arg name="name" value="徐程洋"/>
    <constructor-arg name="profession" value="Spring框架"/>
    <constructor-arg name="salary" value="10000"/>
    <constructor-arg name="school" ref="school"/>
</bean>
```

通过name找到形参然后注入

###### 第二种：

采用index注入

```xml
<bean id="teacher" class="com.xialuote.domain.Teacher">
    <constructor-arg index="0" value="徐程洋"/>
    <constructor-arg index="1" value="Spring框架"/>
    <constructor-arg index="2" value="10000"/>
</bean>
```

通过参数的位置顺序依次注入

index属性的值，即0,1,2...可以忽略顺序

index属性名可以省略，但省略后必须保证是0,1,2...的顺序注入

##### ③、引用类型的自动注入

spring框架根据某些规则可以给引用类型赋值，不用我们再给引用类型赋值了。使用规则常用的是byName，byType

1. byName（按名字注入）：java类中引用类型的属性名和spring容器中（配置文件）`<bean>`的id名称一样，且数据类型是一致的，这样的容器中的bean，spring能够赋值给引用类型

   语法：

    ```xml
    <bean id="xx" class="yyy" autowire="byName">
    简单类型属性赋值
    </bean>
    ```

   例：User类中引用Student类

```java
public class User {
    private String name;
    private int age;
    private String sex;
    private Student student;

    public void setStudent(Student student) {
        this.student = student;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    @Override
    public String toString() {
        return "User{" +
                "name='" + name + '\'' +
                ", age=" + age +
                ", sex='" + sex + '\'' +
                ", student=" + student +
                '}';
    }
}
```

```java
public class Student {
    private String className;
    private String gradeName;
    private String degree;

    public void setClassName(String className) {
        this.className = className;
    }

    public void setGradeName(String gradeName) {
        this.gradeName = gradeName;
    }

    public void setDegree(String degree) {
        this.degree = degree;
    }

    @Override
    public String toString() {
        return "Student{" +
                "className='" + className + '\'' +
                ", gradeName='" + gradeName + '\'' +
                ", degree='" + degree + '\'' +
                '}';
    }
}
```

配置文件中`<bean>`的信息，在user的bean中用autowire的属性采用byName的方式，即可完成引用，spring容器会自动查找User类中的引用类型student属性，然后回到容器中比对后完成引用赋值

```xml
<bean id="user" class="org.example.domain.User" autowire="byName">
    <property name="name" value="沈梦琳" />
    <property name="age" value="18" />
    <property name="sex" value="女" />
</bean>

<bean id="student" class="org.example.domain.Student">
    <property name="className" value="软件工程5班"/>
    <property name="gradeName" value="2019级"/>
    <property name="degree" value="学士学位"/>
</bean>
```

2. byType（按类型注入）：java类中引用数据类型和spring容器中配置文件`<bean>`的class属性是同源关系，这样的bean能够赋值给引用类型

   同源就是一类的意思：

    * java类中引用类型的数据类型和bean的class的值时一样的。
    * java类中引用类型的数据类型和bean的class的值是父子类关系的。
    * java类中的引用类型的数据类型和bean的class的值是接口和实现类关系。

在这里，只需将autowire中的值改为byType即可

```xml
<bean id="user" class="org.example.domain.User" autowire="byType">
    <property name="name" value="沈梦琳" />
    <property name="age" value="18" />
    <property name="sex" value="女" />
</bean>

<bean id="myStudent" class="org.example.domain.Student">
    <property name="className" value="软件工程5班"/>
    <property name="gradeName" value="2019级"/>
    <property name="degree" value="学士学位"/>
</bean>
```

在使用byType注入时，spring容器会寻找到引用类型Student

```java
private Student student;
```

之后会在容器中寻找class属性的值满足同源关系的，然后完成引用

在此例中，是java类中的Student引用类型与bean中的class="org.example.domain.Student"的是一样的，完成的引用，即满足了第一类同源关系

如果是第二类，即满足父子关系的，这里的bean中class的值表示的类需要是子类才可以完成引用

如果是第三类，即满足接口与实现类关系，这里的bean中的class的值表示的类需要是接口的实现类才可以完成引用

注意：无论采用哪种，都必须满足<u>**==唯一==**</u>的符合条件的。

#### (3) 采用多个配置文件

多个配置文件的优势

1. 每个配置文件的大小比一个文件小很多效率高
2. 避免多个人竞争带来的冲突

如果你的项目有多个模块（相关的功能在一起），一个模块一个配置文件。

###### ①、多文件的分配方式：

1. 按功能模块，一个模块一个配置文件
2. 按类的功能，数据库相关的配置一个配置文件，做事务的功能一个配置文件，做service功能的一个配置文件等

###### ②、多文件使用方式：

包含关系的配置文件：

需要有一个主配置文件：包含其他的配置文件，主配置文件一般不定义对象

语法：<import resource="其他配置文件的路径" />

关键字："classpath:"表示类路径（class文件所在的目录），在spring的配置文件中要指定其他文件的位置，需要使用classpath，告诉spring到哪加载读取文件

```xml
<import resource="spring-userdao.xml"/>
<import resource="spring-student.xml"/>
<import resource="spring-user.xml"/>
```

包含关系的配置文件中，可以使用通配符（*：表示任意字符）

```xml
<import resource="spring-*.xml"/>
```

此行代买与上述的三条代码性质一样，一行顶多行

#### （4）基于注解的di

通过注解完成java对象创建，属性赋值

使用注解的步骤：

1. 加入，maven的依赖spring-context，在你加入spring-context的同时，会间接加入spring-aop的依赖。（使用注解必须使用spring-aop依赖）
2. 在类中加入spring的注解（多个不同功能的注解）
3. 在spring的配置文件中，加入一个组件扫描器的标签，说明注解在你的项目中的位置

注解：

1. @Component
2. @Respotory
3. @service
4. @Controller
5. @Value
6. @Autowired
7. @Resource

实现步骤：

1. 加入依赖
2. 创建类，在类中加入注解
3. 创建spring的配置文件，声明组件扫描器的标签，指名注解在你的项目中的位置
4. 使用注解创建对象，创建容器ApplicationContext

* @component：用来创建对象，等同于`<bean>`的功能。

    * 属性：value就是对象的名称，也就是bean的id值，value的值是唯一的，创建的对象在整个spring容器中就一个,如果属性中只有value，那么可以省略不写，即@Component("student")。如果不指定对象名称，即不写只有@Component，剩下的都不写，那么将由spring自动创建对象，默认的对象名称为该类首字母小写的名称：例类Student，spring自动创建的对象名称：student

    * 位置：在类的上面

    * ```java
        @Component(value = "student")
        public class Student {
            private String name;
            private int age;
        
            public void setName(String name) {
                this.name = name;
            }
        
            public void setAge(int age) {
                this.age = age;
            }
        }
        ```

    * 声明组件扫描器（component-scan）,组件就是java对象

      base-package：指定注解在你的项目中的包名

      component-scan工作方式：spring会扫描遍历base-package指定的包，找打包中和子包中的所有类中的注解，按照注解的功能创建对象，或给属性赋值。

        ```xml
        <context:component-scan base-package="com.xialuote.domain"/>
        ```



    * 指定多个包的三种方式

        * 第一种方式：使用多次组件扫描器，指定不同的包

        ```xml
        <context:component-scan base-package="com.xialuote.domain"/>
        <context:component-scan base-package="com.xialuote.dao"/>
        ```

        * 第二种方式：使用分隔符（;或,）分隔多个包名

        ```xml
        <context:component-scan base-package="com.xialuote.dao;com.xialuote.dao"/>
        ```

        

        * 第三种方式：指定父包

        ```xml
        <context:component-scan base-package="com.xialuote"/>
        ```



* spring中和@component功能一致，可以创建对象的注解还有：

    * @Repository（用在持久层类的上面）：放在dao的实现类上面，表示创建dao对象，dao对象是能访问数据库的。dao层

    * @Service（用在业务层类的上面）：放在Service的实现类上面，创建service对象，service对象是做业务处理，可以有事务等功能的。service层

    * @Controller（用在控制器的上面）：放在控制器（处理器）类的上面，创建控制器对象的，控制器对象能够接受用户提交的参数，显示请求的处理结果。servlet层

      以上三个注解的使用语法和@Component是一样的，都能创建对象，但这撒个注解还有其他的功能。

* @Value:简单类型的属性赋值

    * 属性：value是String类型的，表示简单类型的属性值

    * 位置：

        * 1. 在属性的定义的上面，无需set方法，推荐使用。
        2. 在set方法的上面

        ```java
        @Value(value = "沈梦琳")
        public void setName(String name) {
            this.name = name;
        }
        ```

    * 因为Value的属性只有value，所以value可以省略不写，即@Value("沈梦琳")

* @Autowired：Spring框架提供的注解，实现引用类型的赋值。spring中通过注解给引用类型赋值，使用的是自动注入原理，支持byName，byType。@Autowried：默认使用的是byType自动注入

    * 位置：

        * 在属性定义的上面，无需set方法，推荐使用
        * 在set方法的上面

    * spring容器会自动寻找并注入School类的属性内容。

    * ```java
        @Autowired
        private School school;
        ```

    * 如果要使用byName方式，需要做的是：

        * 在属性上面加入@Autowired
        * 在属性上面加入@Qualifier(value = "bean的id")：表示使用指定的bean来完成赋值

    * ```java
        @Autowired
        @Qualifier("mySchool")
        private School school;
        ```

      @Autowired表示自动注入

      @Qualifier表示寻找指定的bean的id

    * 属性：required，是一个boolean类型的，默认true

        * required=true：表示引用类型赋值失败，程序报错，并终止执行
        * required=false：引用类型如果赋值失败，程序正常执行，引用类型为null

* @Resource：来自jdk中的注解，spring框架提供了对这个注解的功能的支持，可以使用它给引用类型赋值，使用的也是自动注入的原理，支持byName，byType，默认是byName

    * 位置：
        * 在属性定义的上面，无需set方法，推荐使用
        * 在set方法的上面
    * 默认是byName：先使用buName自动注入，如果byName赋值失败，再使用byType
    * 如果只使用byName方法注入，只需要在@Resource中添加一个属性name即可。即@Resource(name = "bean的id'")

#### 注解与配置文件的优缺点

配置文件：

* 优点：修改时是在配置文件修改，不影响源代码
* 缺点：不能直观的反映出代码中属性，且代码较多，处理起来效率比较低

注解：

* 优点：方便，效率较高，但是修改时需要修改源代码
* 缺点：需要大量的修改时，工作量较大，效率较低，源代码改动较多

## 二、aop

动态代理：可以在程序的执行过程中，创建代理对象。通过代理对象执行方法，给目标类的方法增加额外的功能（功能增强）

jdk动态代理实现步骤：

1. 创建目标类，SomeServiceIMpl目标类，给它的doSome，doOther增加输出时间，事务。
2. 创建InvocationHandler接口实现类，在这个类实现给目标方法增加功能。
3. 使用jdk中类Proxy，创建代理对象。实现创建对象的能力

### 1、*动态代理*

* 实现方式：jdk动态代理，使用jdk中的Proxy，Method，InvocationHanderl创建代理对象。

* cglib动态代理：第三方的工具库，创建代理对象，原理是继承。通过继承目标类，创建子类。子类就是代理对象。要求目标类不能是final的，方法也不能是final的

### 2、*动态代理的作用*

* 在目标类源代码不改变的情况下，增加功能
* 减少代码的重复
* 专注于业务逻辑代码
* 解耦合，让你的业务功能和日志，事务非业务功能分离。

### 3、Aop

面向切面编程，基于动态代理的，可以使用jdk，cglib两种代理方法。Aop就是动态代理的规范化，把动态代理的实现步骤，方式都定义好了，让开发人员用一种统一的方式，实现动态代理。

#### AOP（Aspect Orient Programming）面向切面编程

Aspect：

* 切面：给你的目标类增加的功能，就是切面。像上面用的日志，事务都是切面。
* 切面的提点：一般都是非业务方法，独立使用

Orient：面向

Programming：编程

oop：面向对象编程

### 4、*面向切面编程：*

1. 需要在分析项目功能时，找出切面。
2. 合理的安排切面的执行时间（在目标方法去前，还是目标方法后）
3. 合理的安排切面执行的位置，在哪个类，哪个方法增加增强功能

#### ①、术语：

1. Aspect：切面，便是增强的功能，就是一堆代码完成某一个功能。非业务功能，常见的切面功能有日志，事务，统计信息，参数检查，权限验证。
2. JoinPoint：连接点，连接业务方法和切面的位置。就是某类中的业务方法
3. Pointcut：切入点，指多个连接点方法的集合。多个方法。
4. 目标对象：给哪个类的方法增加功能，这个类就是目标对象
5. Advice：通知，通知表示切面功能执行的时间。

#### ②、切面的按个关键要素：

1. 切面的功能代码，切面干什么
2. 切面的执行位置，使用Pointcut表示切面执行的位置
3. 切面的执行时间，使用Advice表示时间，在目标方法之前，还是目标方法之后。

#### ③、aop的实现

aop是一个规范，是动态的一个规范化，一个标准

#### ④、aop的技术实现框架：

1. spring：spring在内部实现了aop规范，能做aop的工作。spring主要在事务处理时使用aop。我们在项目开发中很少使用spring的aop实现，因为spring的aop比较笨重。
2. aspectJ：一个开源的专门做aop的框架。spring框架中集成了aspectJ框架，通过spring就能够使用aspectJ的功能。
    * aspectJ框架实现aop有两种方式：
        * 使用xml的配置文件
        * 使用注解，在项目开发中要做aop功能，一般都使用注解，aspect有五个注解

#### ⑤、aspectJ框架的使用

1. 切面的执行时间，这个执行时间在规范中叫做Advice（通知，增强），在aspectJ框架中使用注解表示的，也可以使用xml配置文件中的标签
    1. @Before
    2. @AfterReturning
    3. @Around
    4. @AfterThrowing
    5. @After

#### ⑥、使用aspectJ实现aop的基本步骤：

使用aop：目的是给已经存在的一些类和方法，增加额外的功能。前提是不改变原来的类的代码

1. 加入依赖
    1. spring依赖
    2. aspectJ依赖
2. 创建目标类：接口和他的实现类。要做的就是给类中的方法增加功能
3. 创建切面类：普通类
    1. 在类的上面加入@Aspect
    2. 在类中都定义方法，方法就是切面要执行的功能代码。在方法的上面加入aspectJ中的通知注解，例如@Before，还需要指定切入点的表达式execution()
4. 创建spring的配置文件：声明对象，把对象交给容器统一管理
    1. 声明目标对象
    2. 声明切面类对象
    3. 声明aspectJ框架中的自动代理生成器标签。自动代理生成器：用来完成代理对象的自动创建功能的

#### ⑦、注解：

* @Aspect：是aspectj框架中的注解

    * 作用：表示当前类是切面类
    * 切面类：用来给业务方法增加功能的类，在这个类中有切面的功能代码
    * 位置：在类定义的上面

* @Before：前置通知注解

    * 属性：value，切入点表达式，表示切面的功能执行位置

    * 位置：类的上面

    * 特点：

        * 在目标方法之前先执行的
        * 不会改变目标方法的执行结果
        * 不会影响目标方法的执行

      接口实现类：

    * ```java
        public class SomeServiceImpl implements SomeService {
            @Override
            public void doSome(String name, int age) {
                System.out.println("======目标方法：doSome()======");
            }
        }
        ```

      切面类：

    * ```java
        @Aspect
        public class MyAspectj {
            /**
             * 定义方法，方法是实现切面功能的
             * 方法的定义要求
             * 1.公共的方法 public
             * 2.方法没有返回值
             * 3.方法名称自定义
             * 4.方法可以有参数
             *     如果有参数，参数不能是自定义的，有几个参数类型可以使用
             */
        
            @Before("execution(public void com.xialuote.service.impl.SomeServiceImpl.doSome(String , int))")
            public void myBefore() {
                //切面要执行的功能代码
                System.out.println("切面功能：在目标方法之前输出执行时间：" + new Date());
            }
        }
        ```

      其中

        ```java
        @Before("execution(public void com.xialuote.service.impl.SomeServiceImpl.doSome(String , int))")
        ```

      可以更改为：

        ```java
        @Before("execution(void *..SomeServiceImpl.doSome(..))")
        ```

      同时在目标类执行前可以加入多次前置通知

* @AfterReturning：后置通知

    * 属性：
        * value：切入点表达式
        * returning：自定义的变量，表示目标方法的返回值。自定义变量名必须和通知方法的形参名一样
        * 位置：在方法定义的上面
    * 特点：
        * 在目标方法之后执行的
        * 能够获取到目标方法的返回值，可以根据这个返回值做不同的处理功能
        * 可以修改这个返回值

* @Around：环绕通知

    * 属性：value 切入点表达式

    * 位置：在方法的定义上面

    * 特点

        * 它是功能最强的通知
        * 在目标方法的前和后都能增强功能
        * 控制目标方法是否被调用执行
        * 修改原来的目标方法的执行结果。影响最后的调用结果

        * 环绕通知，等同于jdk动态代理的，InvocationHandler接口
        * 参数：ProcedingJoinPoint 就等同于Method
        * 作用：执行目标方法
        * 返回值：就是目标的方法的执行结果，可以被修改
        * 环绕通知：经常做事务，在目标方法之前开启事务，执行目标方法，在执行目标方法之后提交事务



    * ```java
        @Aspect
        public class MyAspectj {
            /**
             * 环绕通知方法的定义格式
             * 1.public
             * 2.必须有一个返回值，推荐使用Object
             * 3.方法名称自定义
             * 4.方法有参数，固定的参数 ProceeddingJoinPoint
             */
            @Around("execution(* *..SomeServiceImpl.doFirst(..))")
            public Object myAround(ProceedingJoinPoint pjp) throws Throwable {
                Object result = null;
                Object[] args = pjp.getArgs();
                if (args[0].equals("沈梦琳")) {
                    System.out.println("环绕通知：在目标方法之前输出时间：" + new Date());
                    result= pjp.proceed();
                    System.out.println("环绕通知：在目标方法之后提交事务");
                } else {
                    return "判断错误";
                }
        
                return result;
            }
        }
        ```

* @AfterThrowing：异常通知

    * 属性：

        * value 切入点表达式
        * throwomg 自定义的变量，表达目标方法抛出的异常对象

    * 特点：

        * 在目标方法抛出异常时执行的
        * 可以做异常的监控程序，监控目标方法执行时是不是有异常。如果有异常，可以发送邮件，短信进行通知



    * ```java
        @Aspect
        public class MyAspectj {
            /**
             * 异常通知方法的定义格式
             * 1.public
             * 2.没有返回值
             * 3.方法名称自定义
             * 4.方法有一个Exception，如果还有就是JoinPoint
             */
            @AfterThrowing(value = "execution(* *..SomeServiceImpl.doSecond(..))",throwing = "e")
            public void myThrowing(Exception e) {
                System.out.println("异常通知：方法发生异常：" + e.getMessage());
            }
        
        }
        ```

* @After：最终通知

    * 属性：value 切入点表达式

    * 位置：在方法的上面

    * 特点：

        * 总是会执行
        * 在目标方法之后执行的



    * ```java
        @Aspect
        public class MyAspectj {
            /**
             * 最终通知方法的定义格式
             * 1.public
             * 2.没有返回值
             * 3.方法名称自定义
             * 4.方法没有参数，如果有就是JoinPoint
             */
            @After(value = "execution(* *..SomeServiceImpl.doThird(..))")
            public void myAfter(JoinPoint joinPoint) {
                System.out.println("最终通知：方法总是被执行");
                Object[] args = joinPoint.getArgs();
                System.out.println("姓名：" + args[0] + "、年龄：" + args[1]);
                //该方法一般用来做资源清除工作
            }
        }
        ```

* @Pointcut：定义和管理切入点

  如果项目中有多个切入点表达式是重复的，可以复用的。可以使用@Pointcut

    * 属性：value 切入点表达式

    * 位置：在自定义的方法上面

    * 特点：当使用@Pointcut定义在一个方法的上面，此时这个方法的名称就是切入点表达式的别名。其他通知中，value属性就可以使用这个方法名称，代替切入点表达式了



    * ```java
        @Aspect
        public class MyAspectj {
            @Pointcut("execution(* *..SomeServiceImpl.doFour())")
            public void myPointcut () {
                //无需代码
            }
        
            @Before("myPointcut()")
            public void before() {
                System.out.println("前置通知：目标方法执行时间：" + new Date());
            }
        
            @After("myPointcut()")
            public void after() {
                System.out.println("后置通知：目标方法日志事务完成");
            }
        }
        ```

如果项目中没有接口，那么就无法使用jdk动态代理，但是spring框架会自动应用cglib代理，因此有没有接口并不影响使用代理功能，只是spring框架应用的代理方式不同。

如果你期望目标类有接口，同时使用cglib代理，需要将spring的配置文件加入：

```xml
<aop:aspectj-autoproxy proxy-target-class="true"/>
```

proxy-target-class="true"：告诉框架，要使用cglib动态代理

#### ⑧、JoinPoint

JoinPoint：业务方法，要加入切面功能的业务方法
*      作用：可以在通知方法中获取方法执行时的信息，例如方法名称，方法的实参
*      如果你的切面功能中需要用到方法的信息，就加入JoinPoint，
*      这个JoinPoint参数的值是由框架赋予的，必须是第一个位置的参数

```java
@Aspect
public class MyAspectj {
    
    /**
     * 指定通知方法中的参数：JoinPoint
     * JoinPoint：业务方法，要加入切面功能的业务方法
     *      作用：可以在通知方法中获取方法执行时的信息，例如方法名称，方法的实参
     *      如果你的切面功能中需要用到方法的信息，就加入JoinPoint，
     *      这个JoinPoint参数的值是由框架赋予的，必须是第一个位置的参数
     */
    
    @Before("execution(void *..SomeServiceImpl.doSome(..))")
    public void myBefore(JoinPoint joinPoint) {
        //切面要执行的功能代码
        System.out.println("切面功能：在目标方法之前输出执行时间：" + new Date());
        System.out.println("方法名称：" + joinPoint.getSignature().getName());
        System.out.println("方法签名：" + joinPoint.getSignature());
        Object[] args = joinPoint.getArgs();
        for (int i = 0; i < args.length; i++) {
            System.out.print("方法参数：" + args[i] + "、");
        }
    }
}
```

---------------

## 三、把mybatis框架和spring集成在一起，像一个框架一样使用

用的技术是：ioc

为什么是ioc：ioc能把mybatis和spring集成在一起，像一个框架，是因为ioc能创建对象

​						可以把mybatis框架中的对象交给spring统一创建，开发人员从spring中获取对象

​						开发人员就不用同时面对两个或多个框架了，就面对spring就可以了

### 1、mybatis使用步骤，对象

1. 定义dao对象，StudentDao
2. 定义mapper文件，StudentDao.xml
3. 定义mybatis的主配置文件 mybatis.xml
4. 创建dao的代理对象，StudentDao dao = SqlSession.getMapper(StudentDao.class);
```java
List<Student> students = dao.selectStudents();
```
### 2、要使用dao对象，需要使用getMapper()方法

怎么能使用getMapper()方法，需要哪些条件

1. 获取SqlSession对象，需要使用SqlSessionFactory的openSession()方法
2. 创建SqlSessionFactory对象，通过读取mybatis的主配置文件，能创建SqlSessionFactory对象

需要创建SqlSessionFactory对象，使用Factory能获取SqlSession，有了SqlSession就能有dao，目的是获取dao对象

### 3、Factory创建需要读取主配置文件

主配置文件：

1. 数据库信息（待填写）
2. mapper文件的位置（待填写）

------------------------

### 4、通过以上的说明，我们需要让spring创建一下对象

1. 独立的连接池类对象，使用阿里的druid连接池
2. SqlSessionFactory对象
3. 创建出dao对象

需要学习以上三个对象的创建语法，使用xml的bean标签

-----------

### 5、mybatis和spring框架集成

步骤：

1. 新建maven项目

2. 加入maven的依赖

    1. spring依赖

    2. mybatis依赖

    3. mysql驱动

    4. spring的事务的依赖

    5. mybatis和spirng集成的依赖：mybatis官方用的，用来spring项目中创建mybatis的

       的SqlSessionFactory，dao对象的

3. 创建实体类

4. 创建dao接口和mapper文件

5. 创建mybatis主配置文件

6. 创建Service接口和实现类，属性是dao

7. 创建spring的配置文件声明mybatis的对象交给spring创建

    1. 数据源
    2. SqlSessionFactory
    3. Dao对象
    4. 声明自定义的service

8. 创建测试类，获取Service对象，通过service调用dao完成数据库的访问

**源代码：**

dao接口：

```java
public interface UserDao {
    /**
     * 添加用户
     * @param user
     * @return
     */
    int insertUser(User user);

    /**
     * 查询用户
     * @return
     */
    List<User> selectUser();
}
```

dao的实现类（impl）：

```java
public class UserDaoImpl implements UserDao {
    @Override
    public int insertUser(User user) {
        return 0;
    }

    @Override
    public List<User> selectUser() {
        return null;
    }
}
```

domain：

```java
public class User {
    private int id;
    private String userName;
    private String password;
    private String email;

    public User() {}

    public User(int id, String name, String password, String email) {
        this.id = id;
        this.userName = name;
        this.password = password;
        this.email = email;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String name) {
        this.userName = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + userName + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
```

service接口：

```java
public interface UserService {
    int addUser(User user);
    List<User> queryUsers();
}
```

service的实现类（impl）：

```java
public class UserServiceImpl implements UserService {
    private UserDao userDao;

    public void setUserDao(UserDao userDao) {
        this.userDao = userDao;
    }

    @Override
    public int addUser(User user) {
        int nums = userDao.insertUser(user);
        return nums;
    }

    @Override
    public List<User> queryUsers() {
        List<User> users = userDao.selectUser();
        return users;
    }
}
```

UserDao.xml:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="org.example.dao.UserDao">
    <insert id="insertUser">
        insert into user values (#{id},#{userName},#{password},#{email})
    </insert>
    <select id="selectUser" resultType="org.example.domain.User">
        select * from user
    </select>
</mapper>
```

resource：

applicationContext.xml：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd">
    <!--把数据库的配置信息，写在一个独立的文件，便于修改数据库的配置内容
    首先需要让spring知道properties文件的位置-->
    <context:property-placeholder location="classpath:druid.properties"/>

    <!--声明数据源DataSource，作用是连接数据库-->
    <bean id="myDataSource" class="com.alibaba.druid.pool.DruidDataSource" init-method="init" destroy-method="close">
    <!--通过set注入连接数据库-->

        <!--使用属性配置文件中的数据，语法：${key}-->
        <property name="url" value="${url}"/>
        <property name="username" value="${userName}"/>
        <property name="password" value="${password}"/>
        <property name="maxActive" value="${maxActive}"/>
    </bean>
    <!--声明mybatis中提供的SqlSessionFactoryBean，这个类是创建SqlSessionFactory的-->
    <bean id="sqlSessionFactory" class="org.mybatis.spring.SqlSessionFactoryBean">
        <!--set注入，把数据库连接池交付给了dataSource属性-->
        <property name="dataSource" ref="myDataSource"/>
        <!--mybatis主配置文件的位置，configLocation是Resource类型的-->
        <property name="configLocation" value="classpath:mybatis.xml"/>
    </bean>
    <!--创建dao对象，使用SqlSession的getMapper(UserDao.class)
    MapperScannerConfigurer:在内部调用getMapper()生成每个dao接口的代理对象-->
    <bean class="org.mybatis.spring.mapper.MapperScannerConfigurer">
        <!--指定SqlSessionFactory对象的id-->
        <property name="sqlSessionFactoryBeanName" value="sqlSessionFactory"/>
        <!--指定包名，包名是dao接口中所有的包名
        MapperScannerConfigurer会扫描这个包中的所有接口，把每个接口都执行一次getMapper()方法，得到的每个接口的dao对象
        创建好的对象会放到spring容器中去-->
        <property name="basePackage" value="org.example.dao"/>
    </bean>
    <!--声明service-->
    <bean id="userService" class="org.example.service.impl.UserServiceImpl">
        <property name="userDao" ref="userDao"/>
    </bean>
</beans>
```

druid.properties：

```properties
url=jdbc:mysql://localhost:3306/xlt_computer?serverTimezone=UTC
userName=root
password=000000
maxActive=20
```

mybatis.xml：

```xml
<?xml version="1.0" encoding="UTF-8" ?><!-- 文档声明 -->
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd"><!-- 约束声明 -->

<!-- mybatis的全局配置文件 -->
<configuration>
<!-- settings:控制mybatis全局行为 -->
    <settings>
        <!-- 设置mybatis输出日志 -->
        <setting name="logImpl" value="STDOUT_LOGGING"/>
    </settings>
    <!-- 设置别名 -->
    <typeAliases>
        <!-- 实体类所在包名 -->
        <package name="org.example.domain"/>
    </typeAliases>

    <!-- 导入mapper.xml映射文件-->
    <mappers>
        <package name="org.example.dao"/>
    </mappers>

</configuration>
```

测试类：

```java
public class MyTest {
    @Test
    public void fun1() {
        ApplicationContext ac = new ClassPathXmlApplicationContext("applicationContext.xml");
        String[] names = ac.getBeanDefinitionNames();
        for (String name : names) {
            System.out.println("对象名称：" + name);
        }
    }
    @Test
    public void fun2() {
        ApplicationContext ac = new ClassPathXmlApplicationContext("applicationContext.xml");
        String[] names = ac.getBeanDefinitionNames();
        for (String name : names) {
            System.out.println("对象名称：" + name);
        }

        UserDao userDao = (UserDao) ac.getBean("userDao");
        User user = new User(12,"沈梦琳","000000000","000000000@qq.com");
        int nums = userDao.insertUser(user);
        System.out.println(nums);
    }

    @Test
    public void fun3() {
        ApplicationContext ac = new ClassPathXmlApplicationContext("applicationContext.xml");

        UserDao userDao = (UserDao) ac.getBean("userDao");
        List<User> users = userDao.selectUser();
        for (User user : users) {
            System.out.println(user.getUserName());
        }
    }

    @Test
    public void fun4() {
        ApplicationContext ac = new ClassPathXmlApplicationContext("applicationContext.xml");
        UserService userService = (UserService) ac.getBean("userService");
        User user = new User(13,"sss","000000000","111111111@qq.com");
        int nums = userService.addUser(user);
        System.out.println(nums);
    }
    @Test
    public void fun5() {
        ApplicationContext ac = new ClassPathXmlApplicationContext("applicationContext.xml");
        UserService userService = (UserService) ac.getBean("userService");
        List<User> users = userService.queryUsers();
        for (User user : users) {
            System.out.println(user);
        }
    }
}
```

--------------------------

spring的事务处理

1. 什么是事务

​	事务是指一组sql语句的集合，集合中有多条sql语句，可能是insert，update，select，delete，我们希望这些多个sql语句都能成功，或者都失败，这些sql语句中的执行是一致的，作为一个整体执行。

2. 在什么时候想到使用事务

​		当操作涉及到多个表，或者多个sql语句的insert，update，delete。需要保证这些语句都是成功才能完成我的功能，或者都失败，保证操作是符合要求的

​		在java代码中写程序，控制事务，此时事务应该放在service类的业务方法上，因为业务方法会调用多个dao方法，执行多个sql语句

3. 通常使用JDBC访问数据库，还有mybatis访问数据库怎么处理事务

​		jdbc访问数据库，处理事务 Connection conn; conn.commit(); conn.rollback();

​		mybatis访问数据库，处理事务 SqlSession.commit(); SqlSession.rollback();

4. 问题中事务的处理方式，有什么不足

    1. 不同的数据库访问技术，处理事务的对象，方法不同，需要了解不同数据库访问技术使用事务的原理
    2. 掌握多种数据库中事务的处理逻辑，什么时候提交事务，什么时候回滚事务
    3. 处理事务的多种方法

   总结：就是多种数据库的访问技术，有不同的事务处理的机制，对象，方法

5. 怎么解决不足

​		spring提供一种处理事务的统一模型，能使用统一的步骤，方式完成多种不同数据库访问技术的事务处理

​		使用spring的事务处理机制，可以完成mybatis访问数据库的事务处理

6. 处理事务，需要怎么做，做什么

​		spring处理事务的模型，使用的步骤都是固定的

1. 事务内部提交，回滚事务，使用的事务管理器对象，代替你完成commit，rollback

   ​	事务管理器是一个接口和他的众多的实现类。

   ​	接口：PlatformTransactionManager，定义了事务重要方法commit，rollback

   ​	实现类：spring把每一种数据库访问技术对应的事务处理类都创建好了

   ​		mybatis访问数据库--spring创建好的DataSourceTransactionManager

   ​	怎么使用：需要告诉spring使用的是哪一种数据库的访问技术

   ​			声明数据库访问技术对于事务管理器的实现类，在spring的配置文件中使用`<bean>`声明

   ​					例如：使用mybatis访问你数据库，应该在xml配置文件中
```xml
    <bean id="xxx" class="...DataSourceTransactionManager">
```
2. 你的业务方法需要什么样的事务，说明需要的事务的类型

    1. 事务的隔离级别：有四个值
    2. 事务的超时时间：表示一个方法最长的执行时间，如果方法执行时超过了时间，事务就回滚。单位是秒，整数值，默认是 -1
    3. 事务的传播行为：控制业务方法是不是有事务的，是什么样的事务的。7个传播行为，表示你的业务方法调用时，事务在方法之间是如何使用的
        * ***PROPAGTION_REQUIRED***
            * 指定的方法必须在事务内执行。若当前存在事务，就加入到当前事务中；若没有事务，则创建一个新事务。是spring默认传播行为
        * ***PROPAGTION_REQUIRES_NEW***
            * 总是创建一个新事务，若当前存在事务，就将当前事务挂起，直到新事务执行完毕
        * ***PROPAGTION_SUPPORTS***
            * 指定的方法支持当前事务，但若当前没有事务，也可以以非事务方式执行
        * PROPAGTION_MANDATORY
        * PROPAGTION_NESTED
        * PROPAGTION_NEVER
        * PROPAGTION_NOT_SUPPORTED

​				前三个是需要掌握的

3. 事务提交时，回滚事务的时机

    1. 当你的业务方法，执行成功，没有抛出异常，当方法执行完毕，sring在方法执行后提交事务。事务管理器commit

    2. 当你的业务方法抛出运行时异常或ERROR时，spring执行回滚，调用事务管理器的rollback

       运行时异常的定义：RuntimeException 和它的子类都是运行时异常，例如：NullPointException，NumberFormatException

    3. 当你的业务方法抛出的是非运行时异常，主要是受查异常时，提交事务

        * 受查异常：在你的代码中，必须处理的异常。例如IOException，SQLException

   总结spring的事务：

    1. 管理事务的是 事务管理器和它的实现类

    2. spring的事务是一个统一的模型

        1. 指定要使用的事务管理器实现类，使用`<bean>`
        2. 指定哪些类，哪些方法需要加入事务的功能
        3. 指定方法需要的隔离级别，传播行为，超时

       你需要告诉spring，你的项目中类信息，方法的名称，方法的事务传播行为

spring框架中提供的事务处理方案

1. 适合中小项目使用的，注解方案

    * spring框架自己用aop实现给业务方法增加事务的功能，使用@Transactional注解增加事务
    * @Transaction注解是spring框架自己的朱姐，放在public方法的上面，表示当前方法具有事务
    * 可以给注解的属性赋值，表示具体的隔离级别，传播行为，异常信息等

   使用@Transactional的步骤

    1. 需要声明事务管理器
```xml
    <bean id="xxx" class="DataSourceTransactionManager">
```
    2. 开启事务注解驱动，告诉spring框架，我要使用注解的方式管理事务

       spring使用aop机制，创建@Transactional所在的类代理对相爱那个，给方法加入事务的功能

       spring给业务方法加入事务：

       ​	在你的业务方法执行之前，先开始事务，在业务方法之后提交或回滚事务，使用aop的环绕通知

        ```java
        @Around("增加事务功能的业务方法名称")
        
        Object myAround(){
        
        	开启事务，spring给你开启
        
        	try{
        
        		buy();
        
        		spring的事务管理器.commit();
        
        	}catch(Exception e){
        
        		spring的事务管理器.rollback();
        
        	}
        
        }
        ```

    3. 在方法上面加入注解@Transaction

2. 适合大型项目，有很多类，方法，需要大量的配置事务，使用aspectj框架功能，在spring配置文件中声明类，方法需要的事务。这种方式业务方法和事务配置完全分离

实现步骤：都是在xml配置文件中实现

1. 要使用的是aspectj的功能，需要加入依赖
2. 声明事务管理器对象
```xml
<bean id="xxx" class="DataSourceTransactionManager">
```
3. 声明方法需要的事务类型（配置方法的事务属性【隔离级别，传播行为，超时】）
4. 配置aop：指定哪些类需要创建代理

源代码：

domain：

商品类：

```java
public class Goods {
    private Integer id;
    private String name;
    private Integer amount;
    private float price;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }
}
```

订单类：

```java
public class Sale {
    private Integer id;
    private Integer gid;
    private Integer nums;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getGid() {
        return gid;
    }

    public void setGid(Integer gid) {
        this.gid = gid;
    }

    public Integer getNums() {
        return nums;
    }

    public void setNums(Integer nums) {
        this.nums = nums;
    }
}
```

dao：

商品dao：

```java
public interface GoodsDao {
    /**
     * 更新库存
     * @param goods
     * @return
     */
    int updateGoods (Goods goods);

    /**
     * 查询商品的信息
     * @param id
     * @return
     */
    Goods selectGoods (Integer id);
}
```

商品配置文件：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.spring.dao.GoodsDao">
    <select id="selectGoods" resultType="com.spring.domain.Goods">
        select * from goods where id=#{id}
    </select>
    <update id="updateGoods">
        update goods set amount = amount - #{amount} where id=#{id}
    </update>
</mapper>
```

订单dao：

```java
public interface SaleDao {
    /**
     * 添加销售记录
     * @param sale
     * @return
     */
    int insertSale (Sale sale);
}
```

订单配置文件：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.spring.dao.SaleDao">
    <insert id="insertSale">
        insert into sale(gid,nums) values (#{gid},#{nums})
    </insert>
</mapper>
```

购买商品service接口：

```java
public interface BuyGoodsService {
    /**
     * 购买商品的方法
     * goodsID：购买商品的编号
     * nums：购买的数量
     * @param goodsId
     * @param nums
     */
    void buy (Integer goodsId,Integer nums);
}
```

购买商品service实现类：

```java
public class BuyGoodsServiceImpl implements BuyGoodsService {
    private SaleDao saleDao;
    private GoodsDao goodsDao;

    /**
     * rollbackFor表示发生指定的异常一定回滚
     *      1，处理逻辑是：spring框架首先检查方法异常是不是在rollbackFor的属性值中，
     *          如果异常是在rollbackFor列表中，无论抛出什么类型的异常，都回滚
     *      2.如果抛出的异常不在rollbackFor列表中，spring会判断异常是不是运行时异常，
     *          如果是，则回滚
     */
    // @Transactional(
    //         propagation = Propagation.REQUIRED,
    //         isolation = Isolation.DEFAULT,
    //         readOnly = false,
    //         rollbackFor = {
    //                 NullPointerException.class,NotEnoughException.class
    //         }
    // )
    // 使用的是事务控制的默认值，默认的传播行为是REQUIRED，默认的隔离级别是DEFAULT
    // 默认抛出运行时异常时，回滚事务
    // @Transactional
    @Override
    public void buy(Integer goodsId, Integer nums) {
        // 记录销售信息，向sale表中添加记录
        Sale sale = new Sale();
        sale.setGid(goodsId);
        sale.setNums(nums);
        saleDao.insertSale(sale);
        // 更新库存
        Goods goods = goodsDao.selectGoods(goodsId);
        if (goods == null) {
            // 商品不存在
            throw new NullPointerException("编号是：" + goodsId + "商品不存在！");
        } else if (goods.getAmount() < nums){
            // 商品不足
            throw new NotEnoughException("编号是：" + goodsId + "商品不足！");
        }
        // 修改库存
        Goods buyGoods = new Goods();
        buyGoods.setId(goodsId);
        buyGoods.setAmount(nums);
        goodsDao.updateGoods(buyGoods);
    }

    public void setSaleDao(SaleDao saleDao) {
        this.saleDao = saleDao;
    }

    public void setGoodsDao(GoodsDao goodsDao) {
        this.goodsDao = goodsDao;
    }
}
```

异常类：

```java
public class NotEnoughException extends RuntimeException{
    public NotEnoughException() {
        super();
    }

    public NotEnoughException(String message) {
        super(message);
    }
}
```

spring配置文件：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context" xmlns:tx="http://www.springframework.org/schema/tx"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd http://www.springframework.org/schema/tx http://www.springframework.org/schema/tx/spring-tx.xsd http://www.springframework.org/schema/aop https://www.springframework.org/schema/aop/spring-aop.xsd">
    <!--把数据库的配置信息，写在一个独立的文件，便于修改数据库的配置内容
    首先需要让spring知道properties文件的位置-->
    <context:property-placeholder location="classpath:jdbc.properties"/>

    <!--声明数据源DataSource，作用是连接数据库-->
    <bean id="myDataSource" class="com.alibaba.druid.pool.DruidDataSource" init-method="init" destroy-method="close">
    <!--通过set注入连接数据库-->

        <!--使用属性配置文件中的数据，语法：${key}-->
        <property name="url" value="${jdbc.url}"/>
        <property name="username" value="${jdbc.username}"/>
        <property name="password" value="${jdbc.password}"/>
        <property name="maxActive" value="${jdbc.max}"/>
    </bean>
    <!--声明mybatis中提供的SqlSessionFactoryBean，这个类是创建SqlSessionFactory的-->
    <bean id="sqlSessionFactory" class="org.mybatis.spring.SqlSessionFactoryBean">
        <!--set注入，把数据库连接池交付给了dataSource属性-->
        <property name="dataSource" ref="myDataSource"/>
        <!--mybatis主配置文件的位置，configLocation是Resource类型的-->
        <property name="configLocation" value="classpath:mybatis.xml"/>
    </bean>
    <!--创建dao对象，使用SqlSession的getMapper(UserDao.class)
    MapperScannerConfigurer:在内部调用getMapper()生成每个dao接口的代理对象-->
    <bean class="org.mybatis.spring.mapper.MapperScannerConfigurer">
        <!--指定SqlSessionFactory对象的id-->
        <property name="sqlSessionFactoryBeanName" value="sqlSessionFactory"/>
        <!--指定包名，包名是dao接口中所有的包名
        MapperScannerConfigurer会扫描这个包中的所有接口，把每个接口都执行一次getMapper()方法，得到的每个接口的dao对象
        创建好的对象会放到spring容器中去-->
        <property name="basePackage" value="com.spring.dao"/>
    </bean>
    <!--声明service-->
    <bean id="buyService" class="com.spring.service.impl.BuyGoodsServiceImpl">
        <property name="saleDao" ref="saleDao"/>
        <property name="goodsDao" ref="goodsDao"/>
    </bean>

    <!--使用spring的事务管理器-->
    <!--1.声明事务管理器-->
    <bean id="transactionManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
        <!--创建数据库，指定数据源-->
        <property name="dataSource" ref="myDataSource"/>
    </bean>
    <!--2.开启事务注解驱动，告诉spring使用注解管理事务，创建代理对象-->
    <!--transaction-manager:事务管理器对象的id-->
    <!--<tx:annotation-driven transaction-manager="transactionManager"/>-->
    <!--声明事务的属性（隔离级别，传播行为，超时时间）-->
    <!--id:自定义名称，表示<tx:advice>和</tx:advice>之间的配置内容-->
    <tx:advice id="myAdvice" transaction-manager="transactionManager">
        <!--tx:method:给出具体的方法事务属性，method可以有多个，分别给不同的方法设置事务属性-->
        <!--name：方法名称，1）给出完成的名称，不带有包和类
                        2）方法可以使用通配符
        propagation：传播行为，枚举值
        isolation：隔离级别
        rollback-for：指定的异常类名，全限定类名。发生异常一定回滚-->
        <tx:attributes>
            <tx:method name="buy" propagation="REQUIRED" isolation="DEFAULT" rollback-for="java.lang.NullPointerException,com.spring.excep.NotEnoughException"/>
            <!--使用通配符-->
            <!--<tx:method name="add*" propagation="REQUIRED"/>-->
            <!--寻找过程，首先寻找完成名称的，之后寻找名称加通配符的，最后寻找只有*的-->
        </tx:attributes>
    </tx:advice>
    <!--配置aop-->
    <aop:config>
        <!--配置切入点表达式：指定哪些包中的类，需要用到事务-->
        <!--id:切入点表达式的名称，唯一值-->
        <!--expression：切入点表达式 ，指定哪些类需要使用事务，aspectj会创建代理对象-->

        <aop:pointcut id="servicePt" expression="execution(* *..service..*.*(..))"/>
        <!--
        配置增强器：关联advice和pointcut
        advice-ref：通知，上面tx：advice那里的配置
        point-ref：切入点表达式的id
        -->
        <aop:advisor advice-ref="myAdvice" pointcut-ref="servicePt"/>
    </aop:config>
</beans>
```

数据库配置文件：

```properties
jdbc.url=jdbc:mysql://localhost:3306/spring?serverTimezone=UTC
jdbc.username=root
jdbc.password=000000
jdbc.max=20
```

mybatis配置文件：

```xml
<?xml version="1.0" encoding="UTF-8" ?><!-- 文档声明 -->
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd"><!-- 约束声明 -->

<!-- mybatis的全局配置文件 -->
<configuration>
<!-- settings:控制mybatis全局行为 -->
<!--    <settings>-->
<!--        &lt;!&ndash; 设置mybatis输出日志 &ndash;&gt;-->
<!--        <setting name="logImpl" value="STDOUT_LOGGING"/>-->
<!--    </settings>-->
    <!-- 设置别名 -->
    <typeAliases>
        <!-- 实体类所在包名 -->
        <package name="com.spring.domain"/>
    </typeAliases>

    <!-- 导入mapper.xml映射文件-->
    <mappers>
        <package name="com.spring.dao"/>
    </mappers>

</configuration>
```

测试类：

```java
public class AppTest {

    @Test
    public void fun1() {
      String config = "applicationContext.xml";
      ApplicationContext ac = new ClassPathXmlApplicationContext(config);
      BuyGoodsService buyService = (BuyGoodsService) ac.getBean("buyService");
      buyService.buy(1002, 1);
    }
}
```

------------

spring与web

web项目是在服务器上运行的，服务启动，项目一直运行

需求：

web项目中容器对象只需要创建一次，把容器对象放入到全局作用域ServletContext中

实现过程：

使用监听器，当全局作用域对象被创建爱你时，创建容器存入ServletContext

监听器作用：

1. 创建容器对象，执行Application
2. 把容器对象放入到ServletContext，ServletContext.sertAttribute(key,ctx)

监听器可以自己创建，也可以使用框架中提供好的ContextLoaderListener

web.xml中加入：

```xml
<context-param>
    <param-name>contextConfigLocation</param-name>
    <param-value>classpath:spring.xml</param-value>
</context-param>
<listener>
    <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
</listener>
```

ApplicationContext：javase项目中使用的容器对象

WebApplicationContext：web项目中使用的

把创建的容器对象，放入到全局作用域

key：	WebApplicationContext.Root_WEBAPPLICATION_CONTEXT_ATTRIBUTE

​	WebApplicationContext.Root_WEBAPPLICATION_CONTEXT_ATTRIBUTE

value：this.context

servletContext.setAttribute(WebApplicationContext.Root_WEBAPPLICATION_CONTEXT_ATTRIBUTE,this.context)

--------

spring提供获取应用上下文的工具

spring提供了一个监听器ContextLoaderListener就是对上述功能的封装，该监听器内部加载spring配置文件，创建应用上下文对象，并存储到ServletContext域中，提供了一个客户端工具WebApplicationContextUtils供使用者获取应用上下文对象

因此，我们只需做两件事：

1. 在web.xml中配置ContextLoaderListener监听器（导入spring-web坐标）
2. 使用WebApplicationContextUtils获取应用上下文对象ApplicationContext

添加依赖：

```xml
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-web</artifactId>
    <version>5.3.5</version>
</dependency>
```

web.xml：

```xml
<!DOCTYPE web-app PUBLIC
 "-//Sun Microsystems, Inc.//DTD Web Application 2.3//EN"
 "http://java.sun.com/dtd/web-app_2_3.dtd" >

<web-app>
  <context-param>
    <param-name>contextConfigLocation</param-name>
    <param-value>classpath:applicationContext.xml</param-value>
  </context-param>
  
  <listener>
    <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
  </listener>
  
</web-app>
```

servlet：

```java
@WebServlet(name = "UserServlet", value = "/UserServlet")
public class UserServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ServletContext servletContext = request.getServletContext();
        // ApplicationContext acp = (ApplicationContext) servletContext.getAttribute("acp");
        // ApplicationContext app = WebApplicationContextUtils.getApplicationContext(servletContext);
        // WebApplicationContext 是 ApplicationContext 的子类
        WebApplicationContext app = WebApplicationContextUtils.getWebApplicationContext(servletContext);
        UserService userService = app.getBean(UserService.class);
        userService.save();
    }
}
```

service：

```java
public interface UserService {

    void save();

    User queryUser(User user);
}
```

listener：

```java
public class ContextLoaderListener implements ServletContextListener {
    @Override
    public void contextInitialized(ServletContextEvent sce) {

        ServletContext servletContext = sce.getServletContext();
        // 读取web.xml配置文件中的全局参数
        String contextConfigLocation = servletContext.getInitParameter("contextConfigLocation");
        ApplicationContext app = new ClassPathXmlApplicationContext(contextConfigLocation);
        //将Spring的应用程序上下文对象存储到ServletContext域中
        servletContext.setAttribute("app", app);
    }

    @Override
    public void contextDestroyed(ServletContextEvent sce) {
        ServletContextListener.super.contextDestroyed(sce);
    }
```

值得注意的是，这里的监听器中的类是自己写的，并不是spring提供的，但是在servlet中使用的是spring提供的监听器。但原理基本相同，这里的监听器代码可以用来参考