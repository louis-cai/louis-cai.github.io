---
pubDatetime: 2019-05-29T17:42:51+08:00
title: "使用Python脚本监控docker"
slug: "使用Python脚本监控docker"
draft: false
tags:
  - "开发"
  - "docker"
  - "Python"
  - "软件开发"
description: "因为仅需要监控docker容器的状态，所以直接用Python脚本配合Linux的crontab定时检查即可实现需求。 脚本如下: python !/usr/bin/env python import os import yagmail def docker_status_disc..."
---


    因为仅需要监控docker容器的状态，所以直接用Python脚本配合Linux的crontab定时检查即可实现需求。

脚本如下:

```python
#!/usr/bin/env python
import os
import yagmail


def docker_status_discovery(docker_status_finder):
    for containerid in docker_status_finder.readlines():
        if 'xxxxx' in containerid:
            mail(subject='%s Exited' % containerid, text='containerid:%s Exited.' % containerid)
    return


def mail(subject='', text=''):
    Me = 'xxxxx@163.com'
    PWD = 'xxxxx'
    SMTP_HOST = 'smtp.163.com'
    yagmail.SMTP(Me, PWD, SMTP_HOST).send(Me, subject=subject, contents=text)


if __name__ == "__main__":
    docker_status_finder = os.popen("""sudo docker ps -a |grep 'Exited'|awk {'print $NF'} """)
    docker_status_discovery(docker_status_finder)

```

## 结合linux的crontab工具定时地检测制定docker容器

```
* * * * * sleep 30;python /root/peer0.py
```