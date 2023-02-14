---
date: 2023-01-20
tag:
  - git
---
记录了开发中git常用的一些命令
<!-- more -->
# git常用命令

### 全局配置
```sh
git config --global user.name "xxx"             # 配置用户名
git config --global user.email "xxx@xxx.com"    # 配置邮件
git config --global color.ui true               # git status等命令自动着色
git config --global color.status auto
git config --global color.diff auto
git config --global color.branch auto
git config --global color.interactive auto
git config --global --unset http.proxy          # remove  proxy configuration on git
```

### 初始化本地库
````sh
# 初始化本地git仓库（创建新仓库）
git init
````

### 添加暂存区
```sh
git add test                                     # 添加test文件至暂存区
git add .                                       # 增加当前子目录下所有更改过的文件至暂存区
```

### 查看当前状态
```sh
git status                                      # 查看当前版本状态（是否修改）
```

### 提交本地库
```sh
git commit -m 'xxx'                             # 提交
git commit --amend -m 'xxx'                     # 合并上一次提交（用于反复修改）
git commit -am 'xxx'                            # 将add和commit合为一步
```

### 地址别名
```sh
git remote add origin git+ssh://git@***/**.git # 增加远程定义（用于push/pull/fetch）
```

### 推送远程库
```sh
git push <推送地址> <推送分支>
#例如
git push https://github.com/....... master
#如果为地址建立了别名，则可以使用别名作为地址，如下
git push origin master                          # 将当前分支push到远程master分支

git push origin :test/master                        # 删除远程仓库的test/master分支
git push --tags                                 # 把所有tag推送到远程仓库
```

### 拉取远程库
```sh
git pull origin master                          # 获取远程分支master并merge到当前分支
```

### 克隆库
```sh
git clone git+ssh://git@***/**.git              # clone远程仓库
```


### 合并
```sh
git merge origin/master                         # 合并远程master分支至当前分支
git cherry-pick test                            # 合并提交test的修改
```

### 删除
```sh
git branch -d test/master                        # 删除分支test/master（本分支修改已合并到其他分支）
git branch -D test/master                        # 强制删除分支test/master
```

### 显示提交日志
```sh
git log                                         # 显示提交日志
git log -n                                      # 显示n行日志 -n为n行
git log --stat                                  # 显示提交日志及相关变动文件
git log -p -m
```

###  删除文件
```sh
git rm xxx                                      # 删除暂存区中的文件
git rm -r *                                     # 递归删除
```

### 展示分支历史
```sh
git show-branch                                 # 图示当前分支历史
git show-branch --all                           # 图示所有分支历史
```


### 显示文件差异或变更
```sh
git diff                                        # 显示所有未添加至暂存区的变更
git diff --cached                               # 显示所有已添加暂存区但还未commit的变更
git diff HEAD^                                  # 比较与上一个版本的差异
git diff HEAD -- ./lib                          # 比较与HEAD版本lib目录的差异
git diff origin/master..master                  # 比较远程分支master上有本地分支master上没有的
git diff origin/master..master --stat           # 只显示差异的文件，不显示具体内容
```

### 显示分支
```sh
git branch                                      # 显示本地分支
git branch --contains test                      # 显示包含提交test的分支
git branch -a                                   # 显示所有分支
git branch -r                                   # 显示所有原创分支
git branch --merged                             # 显示所有已合并到当前分支的分支
git branch --no-merged                          # 显示所有未合并到当前分支的分支
git branch -m master master_copy                # 本地分支改名
```

