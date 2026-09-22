---
pubDatetime: 2020-12-19T17:56:08+08:00
title: "GPU虚拟化技术"
slug: "NVIDIA-GRID-VGPU"
draft: false
tags:
  - "开发"
  - "NVIDIA. GPU"
  - "软件开发"
description: "什么是NVIDIA GRID技术 NVIDIA GRID是一种共享GPU技术，能够在多个虚拟桌面或应用程序实例之间共享虚拟GPU（vGPU）。 什么是vGPU 使用软件虚拟出GPU来进行图形计算。 早期把vGPU的图形工作指令发给物理 CPU 来做的一种技术。 现在可以为虚拟提供..."
---


# 什么是NVIDIA GRID技术

NVIDIA GRID是一种共享GPU技术，能够在多个虚拟桌面或应用程序实例之间共享虚拟GPU（vGPU）。

# 什么是vGPU
使用软件虚拟出GPU来进行图形计算。

早期把vGPU的图形工作指令发给物理**CPU**来做的一种技术。

现在可以为虚拟提供CPU一样，提供GPU支持。并且能够把物理GPU查分成多个vGPU或者把多个物理GPU合成一个vGPU供应虚拟客户端使用。

虚拟技术的发展，

# NVIDIA vGPU的授权类型
NVIDIA vGPU产品组合共包含四种类型：

- NVIDIA Quadro® Virtual Data Center Workstation (Quadro vDWS)
  - 适用于专业级图形应用程序；包含 NVIDIA Quadro 驱动。
- NVIDIA GRID® Virtual PC (GRID vPC)
  - 适用于提供标准 PC 应用程序、浏览器和多媒体的虚拟桌面。
- NVIDIA GRID Virtual Applications (GRID vApps)
  - 与 Citrix XenApp 或其他 RDSH 解决方案（例如 VMware Horizon 应用程序）配合使用。
- NVIDIA Virtual Compute Server (vCS)
  - 适用于 AI、深度学习和数据科学工作负载；包含 NVIDIA 计算驱动。

![](https://pic3.zhimg.com/v2-9a9bef4c6aaed18b9852897483bdba16_r.jpg)

# 什么是VDI环境

# 什么是Hypervisor

# 什么是Device Module