---
pubDatetime: 2020-12-18T17:41:09+08:00
title: "CleanGatesTrojan"
slug: "CleanGatesTrojan"
draft: false
tags:
  - "开发"
  - "Centos"
  - "软件开发"
description: "Gates Trojan(盖茨)木马 阿里云报警服务器有木马，有异常ps进程。按着这个线索找资料手动清理改木马. 查 bash ls lh /usr/bin/bsd port ls lh /usr/bin/dpkgd ls lh /etc/rc.d/init.d/ ls lh /..."
---

# Gates Trojan(盖茨)木马

    阿里云报警服务器有木马，有异常ps进程。按着这个线索找资料手动清理改木马.

# 查
```bash
ls -lh /usr/bin/bsd-port
ls -lh /usr/bin/dpkgd
ls -lh /etc/rc.d/init.d/
ls -lh /etc/rc[1-5].d/DbSecuritySpt
ls -lh /etc/rc[1-5].d/S97VsystemsshMdt
ls -lh /etc/rc[1-5].d/S99selinux
```
查看大小是否正常(篡改大小后均为1.2M)
```bash
ls -lh /bin/netstat
ls -lh /bin/ps
ls -lh /bin/ss
ls -lh /usr/sbin/netstat
ls -lh /usr/sbin/ps
ls -lh /usr/sbin/lsof
ls -lh /usr/sbin/ss
```

stat命令查看文件修改记录
```bash
stat /bin/netstat
stat /bin/ps
stat /bin/ss
```

# 杀
```bash
# 守护进程木马文件，首先应该被干掉
rm /usr/bin/.sshd
# 主功能木马文件，直接删除
# 木马残留文件直接删除
/root/chattr -i rm -r /usr/bin/bsd-port
rm /usr/bin/bsd-port/getty
rm /usr/bin/bsd-port/getty.lock
rm /usr/bin/bsd-port/knerl
rm /usr/bin/bsd-port/knerl.conf

# 过滤功能木马文件，通过文件大小可判断 /bin /usr/bin
# 删除被篡改的命令文件
/root/chattr -i /bin/pythno & rm /bin/pythno
/root/chattr -i /bin/ps & rm /bin/ps
rm /bin/netstat

rm /usr/bin/pythno
rm /usr/bin/netstat
rm /usr/bin/ps
rm -r /usr/bin/dpkgd

rm /usr/sbin/netstat
rm /usr/sbin/ss

# 安装功能木马文件，直接删除
rm /tmp/os

# 自启动配置文件，清理掉里面的含有木马路径的 /etc/rc.local

# 自启动配置文件，直接删除
rm /etc/init.d/DbSecuritySpt
rm /etc/rc[1-5].d/S97DbSecuritySpt

# 自启动配置文件，直接删除
rm -f /etc/init.d/selinux
rm /etc/rc[1-5].d/S99selinux

# 自启动配置文件，直接删除
rm -f /etc/init.d/VsystemsshMdt
rm -f /etc/rc[1-5].d/S97VsystemsshMdt

```

# 修

从干净的机器上拷贝ps，netstat，ss，lsof到root下

```
/root/chattr -i -a /bin/ps && rm /bin/ps -f 
cp /root/ps /bin

/root/chattr -i -a /bin/netstat && rm /bin/netstat -f 
cp /root/netstat /bin

/root/chattr -i -a /bin/lsof && rm /usr/sbin/lsof -f 
cp /root/lsof /usr/sbin

/root/chattr -i -a /usr/sbin/ss && rm /usr/sbin/ss -f 
cp /root/ss /usr/sbin 
```

```
/root/chattr -i -a /bin/ps && rm /bin/ps -f 
yum reinstall procps -y

/root/chattr -i -a /bin/netstat && rm /bin/netstat -f 
yum reinstall net-tools -y

/root/chattr -i -a /bin/lsof && rm /usr/sbin/lsof -f 
yum reinstall lsof -y

/root/chattr -i -a /usr/sbin/ss && rm /usr/sbin/ss -f 
yum -y reinstall iproute
```

## 检查DNS
cat /etc/resolv.conf
nameserver 8.8.8.8
nameserver 8.8.4.4

## 杀毒工具扫描

### 1、安装杀毒工具clamav

```
yum -y install clamav clamav-milter 
```

### 2、启动服务

```
service clamd restart 
```

### 3、更新病毒库
```
freshclam 
```
### 4、扫描方法

可以使用clamscan -h查看相应的帮助信息
```
clamscan -r /etc --max-dir-recursion=5 -l /root/etcclamav.log
clamscan -r /bin --max-dir-recursion=5 -l /root/binclamav.log
clamscan -r /usr --max-dir-recursion=5 -l /root/usrclamav.log
clamscan -r --remove /usr/bin/bsd-port
clamscan -r --remove /usr/bin/
```