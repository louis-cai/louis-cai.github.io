---
pubDatetime: 2018-12-04T12:46:47+08:00
title: "html5 app cache"
slug: "html5-app-cache"
draft: false
tags:
  - "iOS"
  - "开发"
description: "重点一 manifest除了缓存manifest.appcache文件所指定的资源外，还必定会缓存当前的html页面，即 html <meta manifest=‘demo.appcache' 标签所在的页面以及demo.appcache文件里面所规定的静态资源一并存入 appl..."
---

# 重点一
manifest除了缓存manifest.appcache文件所指定的资源外，还必定会缓存当前的html页面，即
````html
<meta manifest=‘demo.appcache'>
````
标签所在的页面以及demo.appcache文件里面所规定的静态资源一并存入 application Cache 之中。
当用户再一次访问该页面时，demo.appcache文件之中CACHE MANIFEST所指向的资源就不需要重新进行加载了，但是问题是，当前的html页面也会跟着cache直接读出来了，可能会造成即使 我们的页面更新了，但是用户还是看的老旧版本页面（因为更新mainfest的时候，页面加载已经开始了，但是缓存更新却尚未完成，浏览器还是会使用缓存的资源，当浏览器检测到了Application Cache有更新时，本次不会使用新的资源，下一次才会进行使用）

解决方案：
````js
applicationCache.addEventListener("updateready",function(){
    applicationCache.swapCache();      // 手工更新本地缓存
    location.reload();    //重新加载页面页面
},true);
````
------
# 重点二
以 "#" 开头的是注释行，但也可满足其他用途。应用的缓存会在其 manifest 文件更改时被更新。如果您编辑了一幅图片，或者修改了一个 JavaScript 函数，这些改变都不会被重新缓存。更新注释行中的日期和版本号是一种使浏览器重新缓存文件的办法。

# 重点三
永远不要使用传统 GET 参数(例如 other-cached-page.html?parameterName=value) 来访问缓存文件。这会使浏览器绕过缓存，直接从网络获取。
若想链接一个参数需要在 JavaScript 中解析的资源，你可以将参数放到链接的 hash 部分，例如 other-cached-page.html#whatever?parameterName=value。
注：需要额外的解析

# 重点四
当应用被缓存后，仅仅更新在 web 页面中使用的资源(文件)还不足以更新被缓存的文件。
你需要在浏览器获取和使用更新的文件前，去更新缓存清单文件本身。
你可以使用 window.applicationCache.swapCache() 以编程的方式完成上述目的，虽然这无法影响到已经加载完毕的资源。
为了保证资源从应用缓存的最新版本中加载，最理想的办法就是刷新页面。