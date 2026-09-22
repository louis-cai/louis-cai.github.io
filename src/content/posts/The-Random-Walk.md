---
pubDatetime: 2020-06-30T08:55:34+08:00
title: "随机漫步（译文）"
slug: "The-Random-Walk"
draft: false
tags:
  - "交易"
  - "交易策略"
description: "我们拥有的最简单的市场模型之一就是随机步伐或随机游走。这仅意味着市场在每个间隔内都会随机波动。价格可以通过漂移参数向上升趋势或下降趋势倾斜。 $$\\ce{Y_t = Y_{t 1} + α}$$ 使用离散unit步函数对这些价格走势建模，可以发现价格随时达到某个最大值的概率为 $..."
---


我们拥有的最简单的市场模型之一就是随机步伐或随机游走。这仅意味着市场在每个间隔内都会随机波动。价格可以通过漂移参数向上升趋势或下降趋势倾斜。
$$\ce{Y_t = Y_{t-1} + α}$$

使用离散unit步函数对这些价格走势建模，可以发现价格随时达到某个最大值的概率为
$$\ce{p(Y_n = m) = \left(\frac{(m + n)^n}{2}\right){\frac{1}{2^n}}} $$

然后，我们使用波动率将价格Z转换为标准单位变量，以便与逐步过程进行比较。据此，我们为不同的时间范围创建了一组曲线。

从本质上讲，时间间隔越长，波动性越大，价格可以从现有水平移动得越远。

从这些我们可以计算出在任何时间长度内价格变动的可能性。


----
# 原文

The Random Walk

One of the simplest market models we have for forex is the random step process or random walk.

This just means that in every interval, the market moves by a random step value. The price can slant towards an uptrend or a downtrend with a drift parameter.

Yt = Yt-1 + α

Using a discrete unitary step function to model these price moves, the probability that price reaches a certain maximum at any time can be found as
![](https://forexop.com/assets/uploads/2015/02/rand_proc_eq1.png)

We then transform the price Z, using the volatility into a standard unit variable for comparison against the step process. From this we create a set of curves for different timeframes.

In essence, the longer the time interval and the greater the volatility, the further the price can move from the existing level.

From these we can calculate the probability of a price change over any length of time. 