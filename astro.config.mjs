// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://louis-cai.github.io',
  trailingSlash: 'always',
  markdown: {
    shikiConfig: { theme: 'github-light' }
  },
  redirects: {
    '/30岁你还能如何改变/': '/archive/30岁你还能如何改变/',
    '/Be-proactive-The-7-Habits-of-Highly-Effective-People/': '/archive/Be-proactive-The-7-Habits-of-Highly-Effective-People/',
    '/Begin-with-the-end-in-mind-The-7-Habits-of-Highly-Effective-People/': '/archive/Begin-with-the-end-in-mind-The-7-Habits-of-Highly-Effective-People/',
    '/Best-Practices-for-Voice-to-Text-Conversion-1/': '/archive/Best-Practices-for-Voice-to-Text-Conversion-1/',
    '/Best-Practices-for-Voice-to-Text-Conversion-2/': '/archive/Best-Practices-for-Voice-to-Text-Conversion-2/',
    '/CleanGatesTrojan/': '/archive/CleanGatesTrojan/',
    '/Grid-Trading-–-Hedged-Grid-Strategy/': '/archive/Grid-Trading-–-Hedged-Grid-Strategy/',
    '/How-is-Python-Web-Scraping-Monetized/': '/archive/How-is-Python-Web-Scraping-Monetized/',
    '/How-to-DYOR/': '/archive/How-to-DYOR/',
    '/How-to-Place-Stop-Losses-and-Take-Profits-Using-a-Maximal-Strategy/': '/archive/How-to-Place-Stop-Losses-and-Take-Profits-Using-a-Maximal-Strategy/',
    '/How-to-Spot-an-Overbought-or-Oversold-Market/': '/archive/How-to-Spot-an-Overbought-or-Oversold-Market/',
    '/Martingale-Strategy-How-To-Use-It/': '/archive/Martingale-Strategy-How-To-Use-It/',
    '/Meta-Scalper-–-A-Simple-Low-Risk-Scalping-Strategy/': '/archive/Meta-Scalper-–-A-Simple-Low-Risk-Scalping-Strategy/',
    '/NVIDIA-GRID-VGPU/': '/archive/NVIDIA-GRID-VGPU/',
    '/Put-first-things-first-The-7-Habits-of-Highly-Effective-People/': '/archive/Put-first-things-first-The-7-Habits-of-Highly-Effective-People/',
    '/SEO网站的关键词应该怎么规划和布局/': '/archive/SEO网站的关键词应该怎么规划和布局/',
    '/Seek-first-to-understand-then-to-be-understood-The-7-Habits-of-Highly-Effective-People/': '/archive/Seek-first-to-understand-then-to-be-understood-The-7-Habits-of-Highly-Effective-People/',
    '/Summarize-of-How-to-brainstorm-great-business-ideas/': '/archive/Summarize-of-How-to-brainstorm-great-business-ideas/',
    '/Synergize-The-7-Habits-of-Highly-Effective-People/': '/archive/Synergize-The-7-Habits-of-Highly-Effective-People/',
    '/The-Random-Walk/': '/archive/The-Random-Walk/',
    '/Think-win-win-The-7-Habits-of-Highly-Effective-People/': '/archive/Think-win-win-The-7-Habits-of-Highly-Effective-People/',
    '/Trend-Following-with-a-Vertical-Grid/': '/archive/Trend-Following-with-a-Vertical-Grid/',
    '/WKWebView-fix-pit/': '/archive/WKWebView-fix-pit/',
    '/get-things-done/': '/archive/get-things-done/',
    '/html5-app-cache/': '/archive/html5-app-cache/',
    '/ios-device-ID/': '/archive/ios-device-ID/',
    '/more-principle-such-as-First-Principles/': '/archive/more-principle-such-as-First-Principles/',
    '/trading-with-dual-grid-system/': '/archive/trading-with-dual-grid-system/',
    '/使用Python脚本监控docker/': '/archive/使用Python脚本监控docker/',
    '/如何把BTC变现为CNY/': '/archive/如何把BTC变现为CNY/',
    '/如何用Langchain生成优质的SEO文章/': '/archive/如何用Langchain生成优质的SEO文章/',
    '/婴儿几个月开始可以使用安抚奶嘴/': '/archive/婴儿几个月开始可以使用安抚奶嘴/',
    '/正面管教/': '/archive/正面管教/',
    '/移民德国/': '/archive/移民德国/',
    '/第一章-教育基本知识和基本原理/': '/archive/第一章-教育基本知识和基本原理/',
    '/第七章-中学德育/': '/archive/第七章-中学德育/',
    '/第三章-中学教学/': '/archive/第三章-中学教学/',
    '/第二章-中学课程/': '/archive/第二章-中学课程/',
    '/第五章-中学生发展心理/': '/archive/第五章-中学生发展心理/',
    '/第八章-中学班级管理与教师心理/': '/archive/第八章-中学班级管理与教师心理/',
    '/第六章-中学生心理辅导/': '/archive/第六章-中学生心理辅导/',
    '/第四章-中学生学习心理/': '/archive/第四章-中学生学习心理/'

  }
});