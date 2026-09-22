---
pubDatetime: 2018-05-09T17:38:12+08:00
title: "iOS Device ID的几种形式"
slug: "ios-device-ID"
draft: false
tags:
  - "iOS"
  - "开发"
  - "软件开发"
description: "每次启动APP都会变更 objc NSString uuid = NSUUID UUID UUIDString 每次安装APP都会变更 objc NSString idfv = UIDevice currentDevice .identifierForVendor UUIDStr..."
---


### 每次启动APP都会变更

```objc
NSString *uuid = [[NSUUID UUID] UUIDString]  
```

### 每次安装APP都会变更
```objc
NSString *idfv = [[UIDevice currentDevice].identifierForVendor UUIDString];  
```

### 跟随广告设置，新启动和新安装都不会变更

```objc
#import <AdSupport/ASIdentifierManager.h>  
ASIdentifierManager *asIM = [[ASIdentifierManager alloc] init];  
NSString *idfa = [asIM.advertisingIdentifier UUIDString];  
```