import{_ as e,V as l,W as p,X as i,Y as a,Z as s,$ as o,a1 as n,F as c}from"./framework-ce2e419d.js";const u={},r=a("p",null,[a("code",null,"more"),s(" Mybatis面试题总结（持续更新）。")],-1),d=n(`<h1 id="mybatis面试题总结" tabindex="-1"><a class="header-anchor" href="#mybatis面试题总结" aria-hidden="true">#</a> Mybatis面试题总结</h1><h2 id="_1-mybatis" tabindex="-1"><a class="header-anchor" href="#_1-mybatis" aria-hidden="true">#</a> 1 Mybatis</h2><h3 id="_1-1-和-的区别是什么" tabindex="-1"><a class="header-anchor" href="#_1-1-和-的区别是什么" aria-hidden="true">#</a> 1.1 #{}和\${}的区别是什么？</h3><ol><li>#{}是与预编译处理，\${}是字符串替换</li><li>Mybatis在处理#{}时，会将SQL中的#{}替换为?号，使用PreparedStatement的set方法来赋值；Mybatis在处理\${}时，就是把\${}替换成变量的值</li><li>使用#{}可以有效的防止SQL注入，提高系统的安全性</li></ol><blockquote><p>​ 要理解这个题目，需要抓住两点</p><ol><li>符号一般用来当做占位符，既然是占位符，当然就是用来替换的</li><li>预编译机制。预编译是提前对SQL语句进行预编译，而其后注入的参数将不会在进行SQL编译。在SQL注入时发生在编译的过程中的，因为恶意注入了某些特殊符号，最后被编译成了恶意执行的操作。而预编译机制则可以很好地防止SQL注入。在某些特殊场合下只能用\${}，不能用#{}，例如：在使用排序时ORDER BY时，如果使用#{}，则会被解析成ORDER BY “id”，这显然是一种错误的写法</li><li>#{}是经过预编译的，是安全的；\${}是未经过预编译的，仅仅是取变量的值，是非安全的，存在SQL注入</li></ol></blockquote><h3 id="_1-2-mybatis框架简介" tabindex="-1"><a class="header-anchor" href="#_1-2-mybatis框架简介" aria-hidden="true">#</a> 1.2 Mybatis框架简介</h3><ul><li>Mybatis框架是一个开源的数据持久层框架</li><li>他的内部封装了通过JDBC访问数据库的操作，支持普通的sql查询、存储过程和高级映射，几乎消除了所有的JDBC代码和参数的手工设置以及结果集的检索</li><li>Mybatis作为持久层框架，其主要思想是将程序中的大量sql语句剥离出来，配置在配置文件当中，实现sql的灵活配置</li><li>通过将sql语句与程序代码分离，可以在不修改代码的情况下，在配置文件中配置sql语句，提高了程序的可维护性</li></ul><h3 id="_1-3-什么是orm" tabindex="-1"><a class="header-anchor" href="#_1-3-什么是orm" aria-hidden="true">#</a> 1.3 什么是ORM？</h3><ol><li>ORM是对象关系映射，是一种数据持久化技术，它把对象模型和关系型数据库直接建立了联系，并通过JavaBean对象的方式操作数据库中的数据。</li><li>在Mybatis中是通过xml和注解的方式进行配置以达到原始映射，将实体类和sql语句建立起映射关系。</li><li>Mybatis是一种半自动的ORM实现。</li></ol><blockquote><p>之所以说是半自动是因为需要开发者手动写sql语句</p></blockquote><h3 id="_1-4-mybatis的优点以及缺点" tabindex="-1"><a class="header-anchor" href="#_1-4-mybatis的优点以及缺点" aria-hidden="true">#</a> 1.4 Mybatis的优点以及缺点</h3><ul><li><p>优点</p><ul><li>与jdbc相比，减少了进50%的代码量</li><li>简单易学</li><li>Mybatis非常灵活，不会对现有的应用程序和数据库产生任何影响。通过xml配置文件的方式将sql语句与代码分离开，降低了耦合度，提高了程序的可维护性，易于管理和优化，并且拥有可重用性</li><li>在xml中提供了支持动态sql的标签l，满足不同的业务需求</li><li>提供了映射标签，支持对象与数据库中的ORM字段关系映射</li></ul></li><li><p>缺点</p><ul><li>需要编写大量的sql语句，对开发人员sql语句编写有一定要求</li><li>sql语句依赖于数据库，可移植性差，不能随便更换数据库</li></ul></li><li><p>适用场景</p><ul><li>Mybatis专注于sql自身，是一个足够灵活的Dao层解决方案。对性能要求很高，或者需求变化多的项目，例如web项目。</li></ul></li></ul><h3 id="_1-5-什么是数据持久化" tabindex="-1"><a class="header-anchor" href="#_1-5-什么是数据持久化" aria-hidden="true">#</a> 1.5 什么是数据持久化？</h3><ul><li>数据持久化是将内存中的数据模型转换为存储模型，以及将存储模型转换为内存中的数据模型的统称。</li><li>当我们编写应用程序操作数据库，对表数据增删改查操作的时候就是数据持久化的操作</li></ul><blockquote><p>例如：文件的存储，数据读取等都是数据持久化操作。数据模型可以是任何数据结构或对象的模型、xml、二进制流等</p></blockquote><h3 id="_1-6-实体类中的属性名和表中的字段名不一样-怎么办" tabindex="-1"><a class="header-anchor" href="#_1-6-实体类中的属性名和表中的字段名不一样-怎么办" aria-hidden="true">#</a> 1.6 实体类中的属性名和表中的字段名不一样，怎么办？</h3><ol><li>通过在sql语句中定义字段名的别名，让字段名的别名和实体类的属性名一致</li><li>在xml中利用resultMap标签对实体类属性名和字段名建立起对应关系（包括级联属性赋值）</li><li>如果属性名是采用的驼峰命名，则可以在全局配置文件中启用驼峰命名规则</li></ol><h3 id="_1-7-resultmap和resulttype的区别" tabindex="-1"><a class="header-anchor" href="#_1-7-resultmap和resulttype的区别" aria-hidden="true">#</a> 1.7 resultMap和resultType的区别？</h3><ul><li><p>resultType是直接表示返回类型的，而resultMap则是对外部ResultMap的引用，但是resultType跟resultMap不能同时存在</p></li><li><p>在MyBatis进行查询映射时，其实查询出来的每一个属性都是放在一个对应的Map里面的，其中键是属性名，值则是其对应的值</p></li><li><p>当提供的返回类型属性是resultType时，MyBatis会将Map里面的键值对取出赋给resultType所指定的对象对应的属性。所以其实MyBatis的每一个查询映射的返回类型都是ResultMap，只是当提供的返回类型属性是resultType的时候，MyBatis对自动的给把对应的值赋给resultType所指定对象的属性</p></li><li><p>当提供的返回类型是resultMap时，因为Map不能很好表示领域模型，就需要自己再进一步的把它转化为对应的对象，这常常在复杂查询中很有作用</p></li></ul><h3 id="_1-8-模糊查询like语句该怎么写" tabindex="-1"><a class="header-anchor" href="#_1-8-模糊查询like语句该怎么写" aria-hidden="true">#</a> 1.8 模糊查询like语句该怎么写</h3><ul><li>通过在java代码中添加sql通配符</li><li>在sql语句中利用\${}拼接通配符，但是会引起sql注入</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> t_user <span class="token keyword">WHERE</span> username <span class="token operator">LIKE</span> <span class="token string">&#39;%\${username}%&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>通过CONCAT关键字来进行拼接</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> t_user <span class="token keyword">WHERE</span> username <span class="token operator">LIKE</span> CONCAT<span class="token punctuation">(</span><span class="token string">&#39;%&#39;</span><span class="token punctuation">,</span> <span class="token comment">#{username}, &#39;%&#39;);</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>通过“”直接拼接</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> t_user <span class="token keyword">WHERE</span> username <span class="token operator">LIKE</span> <span class="token string">&quot;%&quot;</span><span class="token comment">#{username}#&quot;%&quot;;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-9-在mybatis的xml映射文件中-不同的xml映射文件-id是否可以重复" tabindex="-1"><a class="header-anchor" href="#_1-9-在mybatis的xml映射文件中-不同的xml映射文件-id是否可以重复" aria-hidden="true">#</a> 1.9 在Mybatis的xml映射文件中，不同的xml映射文件，id是否可以重复？</h3><ul><li>不同的xml映射文件，如果配置了namespace，那么id可以重复；如果没有配置namespace，那么id不能重复；</li></ul><blockquote><p>namespace+id是作为Map&lt;String, MapperStatement&gt;的key使用的，如果没有namespace，只剩下id，那么id重复会导致数据被覆盖</p></blockquote><h3 id="_1-10-为什么说mybatis是半自动orm映射工具-与全自动的区别在哪里" tabindex="-1"><a class="header-anchor" href="#_1-10-为什么说mybatis是半自动orm映射工具-与全自动的区别在哪里" aria-hidden="true">#</a> 1.10 为什么说Mybatis是半自动ORM映射工具？与全自动的区别在哪里？</h3><ul><li>Mybatis在进行查询关联对象时，需要手动编写sql语句，所以称之为半自动ORM映射</li><li>Hibernate属于全自动ORM映射工具，因为在进行查询关联对象时，可以根据对象关系模型直接获取</li></ul><h3 id="_1-11-mybatis动态sql有什么用-执行原理-有哪些动态sql" tabindex="-1"><a class="header-anchor" href="#_1-11-mybatis动态sql有什么用-执行原理-有哪些动态sql" aria-hidden="true">#</a> 1.11 Mybatis动态sql有什么用？执行原理？有哪些动态sql？</h3><ul><li><p>Mybatis动态sql可以在xml映射文件内，以标签的形式编写动态sql</p></li><li><p>执行原理是根据表达式的值完成逻辑判断并动态拼接sql的功能</p></li><li><p>支持动态sql的标签：<code>&lt;if&gt;&lt;when&gt;&lt;choose&gt;&lt;otherwise&gt;&lt;bind&gt;&lt;trim&gt;&lt;foreach&gt;&lt;sql&gt;&lt;include&gt;</code>等</p></li></ul><h3 id="_1-12-mybatis实现一对一-多对一-有几种方式" tabindex="-1"><a class="header-anchor" href="#_1-12-mybatis实现一对一-多对一-有几种方式" aria-hidden="true">#</a> 1.12 Mybatis实现一对一（多对一）有几种方式？</h3><ul><li>通过association标签，在标签中配置另一个实体类属性对应的字段</li><li>级联属性赋值</li><li>分步查询，分步查询同样需要用到association标签，但在标签中需要通过select属性来指定另一个select 的sql语句，然后通过colum属性来指定查询条件</li></ul><p>分步查询第一步，设置字段对应关系，并利用association标签设置另一个字段对应关系，并利用select指定另一个表中的sql语句和column指定查询条件</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resultMap</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>empAndDeptByStepResultMap<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Emp<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>eid<span class="token punctuation">&quot;</span></span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>eid<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>empName<span class="token punctuation">&quot;</span></span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>emp_name<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>result</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>association</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dept<span class="token punctuation">&quot;</span></span>
				 <span class="token attr-name">select</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.xcy.mybatis.mapper.DeptMapper.getEmpAndDeptByStepTwo<span class="token punctuation">&quot;</span></span>
				 <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>did<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>association</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resultMap</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getEmpAndDeptByStepOne<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>empAndDeptByStepResultMap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	select * from t_emp where eid = #{eid}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分步查询第二步，写出另一个sql语句</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--此处的resultMap仅是处理字段和属性的映射关系--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resultMap</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>EmpAndDeptByStepTwoResultMap<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Dept<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>did<span class="token punctuation">&quot;</span></span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>did<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>deptName<span class="token punctuation">&quot;</span></span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dept_name<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>result</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resultMap</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getEmpAndDeptByStepTwo<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>EmpAndDeptByStepTwoResultMap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	select * from t_dept where did = #{did}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-13-mybatis实现一对多有几种方式" tabindex="-1"><a class="header-anchor" href="#_1-13-mybatis实现一对多有几种方式" aria-hidden="true">#</a> 1.13 Mybatis实现一对多有几种方式？</h3><ul><li>通过collection标签处理一对多的映射关系，标签中通过ofType表示该属性所对应的集合中存储数据的类型</li><li>分步查询 <ul><li>先查询部门，再查询员工，查询员工时根据部门id查询</li></ul></li></ul><h3 id="_1-14-mybatis是否支持延迟加载-如果支持-它的实现原理是什么" tabindex="-1"><a class="header-anchor" href="#_1-14-mybatis是否支持延迟加载-如果支持-它的实现原理是什么" aria-hidden="true">#</a> 1.14 Mybatis是否支持延迟加载？如果支持，它的实现原理是什么？</h3><ul><li>Mybatis仅支持association关联对象和collection关联集合对象的延迟加载，通过在标签中设置fetchType=lazy|eager来开启或关闭</li><li>在Mybatis配置文件中，可以配置是否启用延迟加载lazyLoadingEnabled=true|false</li><li>原理是使用cglib创建目标对象的代理对象，当调用目标方法时，进入拦截器方法</li></ul><h3 id="_1-15-mybatis中批量删除和动态设置表名时应该用-还是" tabindex="-1"><a class="header-anchor" href="#_1-15-mybatis中批量删除和动态设置表名时应该用-还是" aria-hidden="true">#</a> 1.15 Mybatis中批量删除和动态设置表名时应该用#{}还是\${}</h3><ul><li>批量删除操作只能使用\${}，因为使用#{}会自动添加单引号</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DELETE</span> t_user <span class="token keyword">FROM</span> <span class="token keyword">WHERE</span> <span class="token operator">IN</span> <span class="token punctuation">(</span>\${id}<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> \${tableName}<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-16-mybatis的一级缓存" tabindex="-1"><a class="header-anchor" href="#_1-16-mybatis的一级缓存" aria-hidden="true">#</a> 1.16 Mybatis的一级缓存</h3><ul><li>一级缓存是SqlSession级别的，通过同一个SqlSession查询的数据会被缓存，下次查询相同的数据，就会从缓存中直接获取，不会从数据库重新访问</li></ul><h3 id="_1-17-mybatis的一级缓存失效的四种情况" tabindex="-1"><a class="header-anchor" href="#_1-17-mybatis的一级缓存失效的四种情况" aria-hidden="true">#</a> 1.17 Mybatis的一级缓存失效的四种情况</h3><ol><li>不同的SqlSession对应不同的一级缓存</li><li>同一个SqlSession但是查询条件不同</li><li>同一个SqlSession两次查询期间执行了任何一次增删改操作</li><li>同一个SqlSession两次查询期间手动清空了缓存</li></ol><h3 id="_1-18-mybatis的二级缓存" tabindex="-1"><a class="header-anchor" href="#_1-18-mybatis的二级缓存" aria-hidden="true">#</a> 1.18 MyBatis的二级缓存</h3><ul><li>二级缓存是SqlSessionFactory级别，通过同一个SqlSessionFactory创建的SqlSession查询的结果会被缓存；此后若再次执行相同的查询语句，结果就会从缓存中获取</li></ul><h3 id="_1-19-mybatis的二级缓存开启条件" tabindex="-1"><a class="header-anchor" href="#_1-19-mybatis的二级缓存开启条件" aria-hidden="true">#</a> 1.19 Mybatis的二级缓存开启条件</h3>`,53),k=a("li",null,'在核心配置文件中，设置全局配置属性cacheEnabled="true"，默认为true，不需要设置',-1),m=a("li",null,"二级缓存必须在SqlSession关闭或提交之后有效",-1),h=a("li",null,"查询的数据所转换的实体类类型必须实现序列化的接口Serializable",-1),b=n('<h3 id="_1-20-mybatis二级缓存失效的情况" tabindex="-1"><a class="header-anchor" href="#_1-20-mybatis二级缓存失效的情况" aria-hidden="true">#</a> 1.20 Mybatis二级缓存失效的情况</h3><ul><li>两次查询之间执行了任意地增删改，会使一级和二级缓存同时失效</li></ul><h3 id="_1-21-mybatis缓存查询的顺序" tabindex="-1"><a class="header-anchor" href="#_1-21-mybatis缓存查询的顺序" aria-hidden="true">#</a> 1.21 MyBatis缓存查询的顺序</h3><ul><li>先查二级缓存，因为二级缓存中可能会有其他程序已经查出来的数据，可以拿来直接使用</li><li>如果二级缓存没有命中，再查一级缓存</li><li>如果一级缓存也没有命中，则查询数据库</li><li>SqlSession关闭之后，一级缓存中的数据会写入二级缓存</li></ul><h3 id="_1-22-mybatis如何防止sql注入的" tabindex="-1"><a class="header-anchor" href="#_1-22-mybatis如何防止sql注入的" aria-hidden="true">#</a> 1.22 mybatis如何防止sql注入的？</h3><ul><li><p>MyBatis的SQL是一个具有“输入+输出”的功能，类似于函数的结构，parameterType表示了输入的参数类型，resultType表示了输出的参数类型，如果我们想防止SQL注入，可以在参数上下些功夫。</p></li><li><p>代码中使用#的即输入参数在SQL中拼接的部分，不管输入什么参数，最后都会被替换成 ? 占位符。这是因为MyBatis启用了预编译功能，在SQL执行前，会先将写好的SQL语句发送给数据库进行编译，执行时，直接使用编译好的SQL，替换占位符“?”就可以了。因为SQL注入只能对编译过程起作用，所以这样的方式就很好地避免了SQL注入的问题</p></li></ul><blockquote><p>sql注入：是一种常见的攻击方式。攻击者在界面的表单信息或url输入一下奇怪的sql片段，有可能入侵参数检验不足的应用程序。所以，在应用中需要做一些工作，来防备这样的攻击方式。在一些安全性要求很高的应用中，（比如银行软件），经常将sql语句全部替换成存储过程这样的方式，来防止sql注入。但是在平时开发中吗，一般不需要这种死板的方式。</p></blockquote><h3 id="_1-23-mybatis是如何做到sql预编译的呢" tabindex="-1"><a class="header-anchor" href="#_1-23-mybatis是如何做到sql预编译的呢" aria-hidden="true">#</a> 1.23 Mybatis是如何做到sql预编译的呢？</h3><ul><li>在框架底层，是JDBC中的PreparedStatement类在起作用，PreparedStatement是我们很熟悉的Statement的子类，它的对象包含了编译好的SQL语句。这种“准备好”的方式不仅能提高安全性，而且在多次执行同一个SQL时，能够提高效率。原因是SQL已编译好，再次执行时无需再编译</li></ul><h3 id="_1-24-mybatis是如何进行分页的" tabindex="-1"><a class="header-anchor" href="#_1-24-mybatis是如何进行分页的" aria-hidden="true">#</a> 1.24 Mybatis是如何进行分页的？</h3><p>Mybatis使用RowBounds对象进行分页，它是针对ResultSet结果集执行的内存分页。</p><p>我们也可以采用直接在sql语句中写对应的分页条件来完成物理分页，如limit关键字。</p><p>也可以通过分页插件完成物理分页。</p><h3 id="_1-25-分页插件的原理是什么" tabindex="-1"><a class="header-anchor" href="#_1-25-分页插件的原理是什么" aria-hidden="true">#</a> 1.25 分页插件的原理是什么？</h3><p>分页插件的原理是使用Mybatis提供的插件接口，实现自定义的插件，在插件的拦截方法内拦截待执行的sql语句，然后重写sql，添加对应的物理分页参数完成物理分页。</p><h3 id="mybatis是如何将sql执行结果封装为目标对象并返回的" tabindex="-1"><a class="header-anchor" href="#mybatis是如何将sql执行结果封装为目标对象并返回的" aria-hidden="true">#</a> Mybatis是如何将sql执行结果封装为目标对象并返回的？</h3><ul><li>使用标签，建立起数据库的字段名与实体类的属性名之间的映射关系。</li><li>使用sql别名，将字段的别名与实体类的属性名保持一致。</li><li>开启驼峰命名方式。</li></ul>',17);function q(y,v){const t=c("cache");return l(),p("div",null,[r,i(" more "),d,a("ol",null,[k,a("li",null,[s("在映射文件中设置标签"),o(t)]),m,h]),b])}const _=e(u,[["render",q],["__file","x-interview-mybatis.html.vue"]]);export{_ as default};
