import{_ as s,V as e,W as n,X as a,Y as i,a0 as d}from"./framework-abcd85d4.js";const l={},r=i("p",null,"redis相关操作",-1),c=d(`<h1 id="redis-相关操作" tabindex="-1"><a class="header-anchor" href="#redis-相关操作" aria-hidden="true">#</a> Redis 相关操作</h1><p>再Linux中，可以通过yum源安装redis</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#查询和redis有关的源</span>
yum list redis*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>以下为输出结果</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Loaded plugins: fastestmirror, langpacks
Repository epel is listed <span class="token function">more</span> than once <span class="token keyword">in</span> the configuration
Loading mirror speeds from cached hostfile
Installed Packages
<span class="token operator">==</span>redis.x86_64<span class="token operator">==</span>                                                           <span class="token number">3.2</span>.12-2.el7                                                       @epel
Available Packages
redis-trib.noarch                                                      <span class="token number">3.2</span>.12-2.el7                                                       epel 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中<code>redis.x86_64</code>就是redis的安装源，接下来直接安装即可</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#通过yum安装redis, 命令中的-y表示安装中需要输入的y或者yes的都自动输入y或者yes</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> redis.x86_64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>因为是通过yum安装的，所有可以使用命令<code>systemctl</code>启动或者关闭</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动redis</span>
systemctl start redis
<span class="token comment"># 查看redis的状态</span>
systemctl status redis
<span class="token comment"># 关闭redis</span>
systemctl stop redis
<span class="token comment"># 进入redis，查看是否正常</span>
redis-cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>redis启动时的默认配置文件是在/ect/redis.conf的文件，如果需要使用其他的配置文件，可以自行配置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 允许任何主机连接、访问</span>
<span class="token builtin class-name">bind</span> <span class="token number">127.0</span>.0.1 改为 <span class="token builtin class-name">bind</span> <span class="token number">0.0</span>.0.0

<span class="token comment"># 允许启动后在后台运行，即关闭命令行窗口后仍能运行,通过systemctl启动的会自动在后台运行</span>
daemonize no 改为 daemonize <span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果需要进行远程连接，必须要设置密码，否则redis会被黑客拿去挖矿，到时候整个服务器都会崩溃导致无法连接</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在redis.conf文件中启用此配置, password表示自己的需要设置的密码</span>
requirepass password 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function t(o,m){return e(),n("div",null,[r,a(" more "),c])}const u=s(l,[["render",t],["__file","redis.html.vue"]]);export{u as default};
