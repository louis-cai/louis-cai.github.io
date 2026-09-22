---
pubDatetime: 2018-12-12T19:56:45+08:00
title: "踩坑WKWebView"
slug: "WKWebView-fix-pit"
draft: false
tags:
  - "iOS"
  - "开发"
description: "引子 最近为了提升公司app的性能，计划使用登场已久的WKWebView。 话说WKWebView刚出来时，神坑无数，一直不敢用，这次提前也有心理准备，but坑还是踩了一遍 泪奔 cookie坑 WKWebView的cookie管理与NSHTTPCookieStorage是不共享..."
---

# 引子
最近为了提升公司app的性能，计划使用登场已久的WKWebView。
话说WKWebView刚出来时，神坑无数，一直不敢用，这次提前也有心理准备，but坑还是踩了一遍~泪奔~

# cookie坑
- WKWebView的cookie管理与NSHTTPCookieStorage是不共享的，网上有大量的文章，各种同步方法。
我们用了一个简单暴力的方法，引用第三方库[GGWkCookie](https://github.com/GaoGuohao/GGWkCookie)管理cookie。

- 我们项目在WKWebsiteDataStore调用removeDataOfTypes后，会导致正在使用中的业内cookie丢失，解决办法就是reload一下页面。

# 缓存坑
- WKWebView实现的了HTML5的Application Cache特性，但是Application Cache过于暴力，不够灵活被广为诟病，请谨慎使用。

- 如果使用NSURLProtocol一些缓存处理，在WKWebView不起作用，我可以愉快的告诉你，WKWebView是不走NSURLProtocol的。

# 后台白屏坑
在1G内存的设备上，由于一个WKWebView的对象使用内存过多，会重载其他WKWebView对象，导致白屏出现，WKWebView是独立于APP的进程运行，导致如果WKWebView crash或者重载，APP是不知情的。

解决办法就是判断title还有没有，如果没有说明被重载了，WKWebView reload一下即可。

# 总结
踩过了这些坑，基本上WKWebView就可以用的很溜了，剩下就是一些代理方法的使用，网上资料无数。

收工。