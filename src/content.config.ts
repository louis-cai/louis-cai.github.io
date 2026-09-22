import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/posts',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    categories: z.union([z.string(), z.array(z.string())]).nullable().default([]),
    tags: z.union([z.string(), z.array(z.string())]).nullable().default([]),
  }),
});

export const collections = { posts };