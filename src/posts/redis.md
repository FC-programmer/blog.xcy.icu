---
date: 2023-02-11
tag:
- redis
---
redis相关操作
<!-- more -->

# Redis 相关操作

再Linux中，可以通过yum源安装redis
```shell
#查询和redis有关的源
yum list redis*
```
以下为输出结果
```shell
Loaded plugins: fastestmirror, langpacks
Repository epel is listed more than once in the configuration
Loading mirror speeds from cached hostfile
Installed Packages
==redis.x86_64==                                                           3.2.12-2.el7                                                       @epel
Available Packages
redis-trib.noarch                                                      3.2.12-2.el7                                                       epel 
```

其中`redis.x86_64`就是redis的安装源，接下来直接安装即可
```shell
#通过yum安装redis, 命令中的-y表示安装中需要输入的y或者yes的都自动输入y或者yes
yum install -y redis.x86_64
```
因为是通过yum安装的，所有可以使用命令`systemctl`启动或者关闭
```shell
# 启动redis
systemctl start redis
# 查看redis的状态
systemctl status redis
# 关闭redis
systemctl stop redis
# 进入redis，查看是否正常
redis-cli
```
redis启动时的默认配置文件是在/ect/redis.conf的文件，如果需要使用其他的配置文件，可以自行配置
```shell
# 允许任何主机连接、访问
bind 127.0.0.1 改为 bind 0.0.0.0

# 允许启动后在后台运行，即关闭命令行窗口后仍能运行,通过systemctl启动的会自动在后台运行
daemonize no 改为 daemonize yes
```
如果需要进行远程连接，必须要设置密码，否则redis会被黑客拿去挖矿，到时候整个服务器都会崩溃导致无法连接
```shell
# 在redis.conf文件中启用此配置, password表示自己的需要设置的密码
requirepass password 
```