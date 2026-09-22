// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://louis-cai.github.io',
  trailingSlash: 'always',
  markdown: {
    shikiConfig: { theme: 'github-light' }
  }
});