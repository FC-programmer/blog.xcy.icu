<template><div><p>记录了开发中git常用的一些命令</p>
<!-- more -->
<h1 id="git常用命令" tabindex="-1"><a class="header-anchor" href="#git常用命令" aria-hidden="true">#</a> git常用命令</h1>
<h3 id="全局配置" tabindex="-1"><a class="header-anchor" href="#全局配置" aria-hidden="true">#</a> 全局配置</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">"xxx"</span>             <span class="token comment"># 配置用户名</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">"xxx@xxx.com"</span>    <span class="token comment"># 配置邮件</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> color.ui <span class="token boolean">true</span>               <span class="token comment"># git status等命令自动着色</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> color.status auto
<span class="token function">git</span> config <span class="token parameter variable">--global</span> color.diff auto
<span class="token function">git</span> config <span class="token parameter variable">--global</span> color.branch auto
<span class="token function">git</span> config <span class="token parameter variable">--global</span> color.interactive auto
<span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--unset</span> http.proxy          <span class="token comment"># remove  proxy configuration on git</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="初始化本地库" tabindex="-1"><a class="header-anchor" href="#初始化本地库" aria-hidden="true">#</a> 初始化本地库</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 初始化本地git仓库（创建新仓库）</span>
<span class="token function">git</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加暂存区" tabindex="-1"><a class="header-anchor" href="#添加暂存区" aria-hidden="true">#</a> 添加暂存区</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">test</span>                                     <span class="token comment"># 添加test文件至暂存区</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>                                       <span class="token comment"># 增加当前子目录下所有更改过的文件至暂存区</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看当前状态" tabindex="-1"><a class="header-anchor" href="#查看当前状态" aria-hidden="true">#</a> 查看当前状态</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> status                                      <span class="token comment"># 查看当前版本状态（是否修改）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="提交本地库" tabindex="-1"><a class="header-anchor" href="#提交本地库" aria-hidden="true">#</a> 提交本地库</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">'xxx'</span>                             <span class="token comment"># 提交</span>
<span class="token function">git</span> commit <span class="token parameter variable">--amend</span> <span class="token parameter variable">-m</span> <span class="token string">'xxx'</span>                     <span class="token comment"># 合并上一次提交（用于反复修改）</span>
<span class="token function">git</span> commit <span class="token parameter variable">-am</span> <span class="token string">'xxx'</span>                            <span class="token comment"># 将add和commit合为一步</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="地址别名" tabindex="-1"><a class="header-anchor" href="#地址别名" aria-hidden="true">#</a> 地址别名</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> origin git+ssh://git@***/**.git <span class="token comment"># 增加远程定义（用于push/pull/fetch）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="推送远程库" tabindex="-1"><a class="header-anchor" href="#推送远程库" aria-hidden="true">#</a> 推送远程库</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> push <span class="token operator">&lt;</span>推送地址<span class="token operator">></span> <span class="token operator">&lt;</span>推送分支<span class="token operator">></span>
<span class="token comment">#例如</span>
<span class="token function">git</span> push https://github.com/<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>. master
<span class="token comment">#如果为地址建立了别名，则可以使用别名作为地址，如下</span>
<span class="token function">git</span> push origin master                          <span class="token comment"># 将当前分支push到远程master分支</span>

<span class="token function">git</span> push origin :test/master                        <span class="token comment"># 删除远程仓库的test/master分支</span>
<span class="token function">git</span> push <span class="token parameter variable">--tags</span>                                 <span class="token comment"># 把所有tag推送到远程仓库</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="拉取远程库" tabindex="-1"><a class="header-anchor" href="#拉取远程库" aria-hidden="true">#</a> 拉取远程库</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> pull origin master                          <span class="token comment"># 获取远程分支master并merge到当前分支</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="克隆库" tabindex="-1"><a class="header-anchor" href="#克隆库" aria-hidden="true">#</a> 克隆库</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone git+ssh://git@***/**.git              <span class="token comment"># clone远程仓库</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="合并" tabindex="-1"><a class="header-anchor" href="#合并" aria-hidden="true">#</a> 合并</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> merge origin/master                         <span class="token comment"># 合并远程master分支至当前分支</span>
<span class="token function">git</span> cherry-pick <span class="token builtin class-name">test</span>                            <span class="token comment"># 合并提交test的修改</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除" tabindex="-1"><a class="header-anchor" href="#删除" aria-hidden="true">#</a> 删除</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> branch <span class="token parameter variable">-d</span> test/master                        <span class="token comment"># 删除分支test/master（本分支修改已合并到其他分支）</span>
<span class="token function">git</span> branch <span class="token parameter variable">-D</span> test/master                        <span class="token comment"># 强制删除分支test/master</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="显示提交日志" tabindex="-1"><a class="header-anchor" href="#显示提交日志" aria-hidden="true">#</a> 显示提交日志</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> log                                         <span class="token comment"># 显示提交日志</span>
<span class="token function">git</span> log <span class="token parameter variable">-n</span>                                      <span class="token comment"># 显示n行日志 -n为n行</span>
<span class="token function">git</span> log <span class="token parameter variable">--stat</span>                                  <span class="token comment"># 显示提交日志及相关变动文件</span>
<span class="token function">git</span> log <span class="token parameter variable">-p</span> <span class="token parameter variable">-m</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除文件" tabindex="-1"><a class="header-anchor" href="#删除文件" aria-hidden="true">#</a> 删除文件</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> <span class="token function">rm</span> xxx                                      <span class="token comment"># 删除暂存区中的文件</span>
<span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">-r</span> *                                     <span class="token comment"># 递归删除</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="展示分支历史" tabindex="-1"><a class="header-anchor" href="#展示分支历史" aria-hidden="true">#</a> 展示分支历史</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> show-branch                                 <span class="token comment"># 图示当前分支历史</span>
<span class="token function">git</span> show-branch <span class="token parameter variable">--all</span>                           <span class="token comment"># 图示所有分支历史</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="显示文件差异或变更" tabindex="-1"><a class="header-anchor" href="#显示文件差异或变更" aria-hidden="true">#</a> 显示文件差异或变更</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> <span class="token function">diff</span>                                        <span class="token comment"># 显示所有未添加至暂存区的变更</span>
<span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">--cached</span>                               <span class="token comment"># 显示所有已添加暂存区但还未commit的变更</span>
<span class="token function">git</span> <span class="token function">diff</span> HEAD^                                  <span class="token comment"># 比较与上一个版本的差异</span>
<span class="token function">git</span> <span class="token function">diff</span> HEAD -- ./lib                          <span class="token comment"># 比较与HEAD版本lib目录的差异</span>
<span class="token function">git</span> <span class="token function">diff</span> origin/master<span class="token punctuation">..</span>master                  <span class="token comment"># 比较远程分支master上有本地分支master上没有的</span>
<span class="token function">git</span> <span class="token function">diff</span> origin/master<span class="token punctuation">..</span>master <span class="token parameter variable">--stat</span>           <span class="token comment"># 只显示差异的文件，不显示具体内容</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="显示分支" tabindex="-1"><a class="header-anchor" href="#显示分支" aria-hidden="true">#</a> 显示分支</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> branch                                      <span class="token comment"># 显示本地分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">--contains</span> <span class="token builtin class-name">test</span>                      <span class="token comment"># 显示包含提交test的分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-a</span>                                   <span class="token comment"># 显示所有分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-r</span>                                   <span class="token comment"># 显示所有原创分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">--merged</span>                             <span class="token comment"># 显示所有已合并到当前分支的分支</span>
<span class="token function">git</span> branch --no-merged                          <span class="token comment"># 显示所有未合并到当前分支的分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-m</span> master master_copy                <span class="token comment"># 本地分支改名</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


