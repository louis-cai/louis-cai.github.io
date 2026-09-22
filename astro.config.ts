import {
  defineConfig,
  envField,
  fontProviders,
  svgoOptimizer,
} from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { unified } from "@astrojs/markdown-remark";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import rehypeCallouts from "rehype-callouts";
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers";
import { transformerFileName } from "./src/utils/transformers/fileName";
import config from "./astro-paper.config";

export default defineConfig({
  site: config.site.url,
  integrations: [
    mdx(),
    sitemap({
      filter: page =>
        config.features?.showArchives !== false || !page.endsWith("/archives/"),
    }),
  ],
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
    },
  },
  markdown: {
    processor: unified({
      remarkPlugins: [
        remarkToc,
        [remarkCollapse, { test: "Table of contents" }],
      ],
      rehypePlugins: [rehypeCallouts],
    }),
    shikiConfig: {
      themes: { light: "min-light", dark: "night-owl" },
      defaultColor: false,
      wrap: false,
      transformers: [
        transformerFileName({ style: "v2", hideDot: false }),
        transformerNotationHighlight(),
        transformerNotationWordHighlight(),
        transformerNotationDiff({ matchAlgorithm: "v3" }),
      ],
    },
  },
  redirects: {
    "/30岁你还能如何改变/": "/posts/30岁你还能如何改变/",
    "/Be-proactive-The-7-Habits-of-Highly-Effective-People/":
      "/posts/Be-proactive-The-7-Habits-of-Highly-Effective-People/",
    "/Begin-with-the-end-in-mind-The-7-Habits-of-Highly-Effective-People/":
      "/posts/Begin-with-the-end-in-mind-The-7-Habits-of-Highly-Effective-People/",
    "/Best-Practices-for-Voice-to-Text-Conversion-1/":
      "/posts/Best-Practices-for-Voice-to-Text-Conversion-1/",
    "/Best-Practices-for-Voice-to-Text-Conversion-2/":
      "/posts/Best-Practices-for-Voice-to-Text-Conversion-2/",
    "/CleanGatesTrojan/": "/posts/CleanGatesTrojan/",
    "/Grid-Trading-–-Hedged-Grid-Strategy/":
      "/posts/Grid-Trading-–-Hedged-Grid-Strategy/",
    "/How-is-Python-Web-Scraping-Monetized/":
      "/posts/How-is-Python-Web-Scraping-Monetized/",
    "/How-to-DYOR/": "/posts/How-to-DYOR/",
    "/How-to-Place-Stop-Losses-and-Take-Profits-Using-a-Maximal-Strategy/":
      "/posts/How-to-Place-Stop-Losses-and-Take-Profits-Using-a-Maximal-Strategy/",
    "/How-to-Spot-an-Overbought-or-Oversold-Market/":
      "/posts/How-to-Spot-an-Overbought-or-Oversold-Market/",
    "/Martingale-Strategy-How-To-Use-It/":
      "/posts/Martingale-Strategy-How-To-Use-It/",
    "/Meta-Scalper-–-A-Simple-Low-Risk-Scalping-Strategy/":
      "/posts/Meta-Scalper-–-A-Simple-Low-Risk-Scalping-Strategy/",
    "/NVIDIA-GRID-VGPU/": "/posts/NVIDIA-GRID-VGPU/",
    "/Put-first-things-first-The-7-Habits-of-Highly-Effective-People/":
      "/posts/Put-first-things-first-The-7-Habits-of-Highly-Effective-People/",
    "/SEO网站的关键词应该怎么规划和布局/":
      "/posts/SEO网站的关键词应该怎么规划和布局/",
    "/Seek-first-to-understand-then-to-be-understood-The-7-Habits-of-Highly-Effective-People/":
      "/posts/Seek-first-to-understand-then-to-be-understood-The-7-Habits-of-Highly-Effective-People/",
    "/Summarize-of-How-to-brainstorm-great-business-ideas/":
      "/posts/Summarize-of-How-to-brainstorm-great-business-ideas/",
    "/Synergize-The-7-Habits-of-Highly-Effective-People/":
      "/posts/Synergize-The-7-Habits-of-Highly-Effective-People/",
    "/The-Random-Walk/": "/posts/The-Random-Walk/",
    "/Think-win-win-The-7-Habits-of-Highly-Effective-People/":
      "/posts/Think-win-win-The-7-Habits-of-Highly-Effective-People/",
    "/Trend-Following-with-a-Vertical-Grid/":
      "/posts/Trend-Following-with-a-Vertical-Grid/",
    "/WKWebView-fix-pit/": "/posts/WKWebView-fix-pit/",
    "/get-things-done/": "/posts/get-things-done/",
    "/html5-app-cache/": "/posts/html5-app-cache/",
    "/ios-device-ID/": "/posts/ios-device-ID/",
    "/more-principle-such-as-First-Principles/":
      "/posts/more-principle-such-as-First-Principles/",
    "/trading-with-dual-grid-system/": "/posts/trading-with-dual-grid-system/",
    "/使用Python脚本监控docker/": "/posts/使用Python脚本监控docker/",
    "/如何把BTC变现为CNY/": "/posts/如何把BTC变现为CNY/",
    "/如何用Langchain生成优质的SEO文章/":
      "/posts/如何用Langchain生成优质的SEO文章/",
    "/婴儿几个月开始可以使用安抚奶嘴/":
      "/posts/婴儿几个月开始可以使用安抚奶嘴/",
    "/正面管教/": "/posts/正面管教/",
    "/移民德国/": "/posts/移民德国/",
    "/第一章-教育基本知识和基本原理/": "/posts/第一章-教育基本知识和基本原理/",
    "/第七章-中学德育/": "/posts/第七章-中学德育/",
    "/第三章-中学教学/": "/posts/第三章-中学教学/",
    "/第二章-中学课程/": "/posts/第二章-中学课程/",
    "/第五章-中学生发展心理/": "/posts/第五章-中学生发展心理/",
    "/第八章-中学班级管理与教师心理/": "/posts/第八章-中学班级管理与教师心理/",
    "/第六章-中学生心理辅导/": "/posts/第六章-中学生心理辅导/",
    "/第四章-中学生学习心理/": "/posts/第四章-中学生学习心理/",
    "/archive/30岁你还能如何改变/": "/posts/30岁你还能如何改变/",
    "/archive/Be-proactive-The-7-Habits-of-Highly-Effective-People/":
      "/posts/Be-proactive-The-7-Habits-of-Highly-Effective-People/",
    "/archive/Begin-with-the-end-in-mind-The-7-Habits-of-Highly-Effective-People/":
      "/posts/Begin-with-the-end-in-mind-The-7-Habits-of-Highly-Effective-People/",
    "/archive/Best-Practices-for-Voice-to-Text-Conversion-1/":
      "/posts/Best-Practices-for-Voice-to-Text-Conversion-1/",
    "/archive/Best-Practices-for-Voice-to-Text-Conversion-2/":
      "/posts/Best-Practices-for-Voice-to-Text-Conversion-2/",
    "/archive/CleanGatesTrojan/": "/posts/CleanGatesTrojan/",
    "/archive/Grid-Trading-–-Hedged-Grid-Strategy/":
      "/posts/Grid-Trading-–-Hedged-Grid-Strategy/",
    "/archive/How-is-Python-Web-Scraping-Monetized/":
      "/posts/How-is-Python-Web-Scraping-Monetized/",
    "/archive/How-to-DYOR/": "/posts/How-to-DYOR/",
    "/archive/How-to-Place-Stop-Losses-and-Take-Profits-Using-a-Maximal-Strategy/":
      "/posts/How-to-Place-Stop-Losses-and-Take-Profits-Using-a-Maximal-Strategy/",
    "/archive/How-to-Spot-an-Overbought-or-Oversold-Market/":
      "/posts/How-to-Spot-an-Overbought-or-Oversold-Market/",
    "/archive/Martingale-Strategy-How-To-Use-It/":
      "/posts/Martingale-Strategy-How-To-Use-It/",
    "/archive/Meta-Scalper-–-A-Simple-Low-Risk-Scalping-Strategy/":
      "/posts/Meta-Scalper-–-A-Simple-Low-Risk-Scalping-Strategy/",
    "/archive/NVIDIA-GRID-VGPU/": "/posts/NVIDIA-GRID-VGPU/",
    "/archive/Put-first-things-first-The-7-Habits-of-Highly-Effective-People/":
      "/posts/Put-first-things-first-The-7-Habits-of-Highly-Effective-People/",
    "/archive/SEO网站的关键词应该怎么规划和布局/":
      "/posts/SEO网站的关键词应该怎么规划和布局/",
    "/archive/Seek-first-to-understand-then-to-be-understood-The-7-Habits-of-Highly-Effective-People/":
      "/posts/Seek-first-to-understand-then-to-be-understood-The-7-Habits-of-Highly-Effective-People/",
    "/archive/Summarize-of-How-to-brainstorm-great-business-ideas/":
      "/posts/Summarize-of-How-to-brainstorm-great-business-ideas/",
    "/archive/Synergize-The-7-Habits-of-Highly-Effective-People/":
      "/posts/Synergize-The-7-Habits-of-Highly-Effective-People/",
    "/archive/The-Random-Walk/": "/posts/The-Random-Walk/",
    "/archive/Think-win-win-The-7-Habits-of-Highly-Effective-People/":
      "/posts/Think-win-win-The-7-Habits-of-Highly-Effective-People/",
    "/archive/Trend-Following-with-a-Vertical-Grid/":
      "/posts/Trend-Following-with-a-Vertical-Grid/",
    "/archive/WKWebView-fix-pit/": "/posts/WKWebView-fix-pit/",
    "/archive/get-things-done/": "/posts/get-things-done/",
    "/archive/html5-app-cache/": "/posts/html5-app-cache/",
    "/archive/ios-device-ID/": "/posts/ios-device-ID/",
    "/archive/more-principle-such-as-First-Principles/":
      "/posts/more-principle-such-as-First-Principles/",
    "/archive/trading-with-dual-grid-system/":
      "/posts/trading-with-dual-grid-system/",
    "/archive/使用Python脚本监控docker/": "/posts/使用Python脚本监控docker/",
    "/archive/如何把BTC变现为CNY/": "/posts/如何把BTC变现为CNY/",
    "/archive/如何用Langchain生成优质的SEO文章/":
      "/posts/如何用Langchain生成优质的SEO文章/",
    "/archive/婴儿几个月开始可以使用安抚奶嘴/":
      "/posts/婴儿几个月开始可以使用安抚奶嘴/",
    "/archive/正面管教/": "/posts/正面管教/",
    "/archive/移民德国/": "/posts/移民德国/",
    "/archive/第一章-教育基本知识和基本原理/":
      "/posts/第一章-教育基本知识和基本原理/",
    "/archive/第七章-中学德育/": "/posts/第七章-中学德育/",
    "/archive/第三章-中学教学/": "/posts/第三章-中学教学/",
    "/archive/第二章-中学课程/": "/posts/第二章-中学课程/",
    "/archive/第五章-中学生发展心理/": "/posts/第五章-中学生发展心理/",
    "/archive/第八章-中学班级管理与教师心理/":
      "/posts/第八章-中学班级管理与教师心理/",
    "/archive/第六章-中学生心理辅导/": "/posts/第六章-中学生心理辅导/",
    "/archive/第四章-中学生学习心理/": "/posts/第四章-中学生学习心理/",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      name: "Google Sans Code",
      cssVariable: "--font-google-sans-code",
      provider: fontProviders.google(),
      fallbacks: ["monospace"],
      weights: [300, 400, 500, 600, 700],
      styles: ["normal", "italic"],
      formats: ["woff", "ttf"],
    },
  ],
  env: {
    schema: {
      PUBLIC_GOOGLE_SITE_VERIFICATION: envField.string({
        access: "public",
        context: "client",
        optional: true,
      }),
    },
  },
  experimental: {
    svgOptimizer: svgoOptimizer(),
  },
});
