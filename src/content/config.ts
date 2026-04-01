import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    permalink: z.string().optional(),
    title: z.string(),
    excerpt: z.string().optional(),
    image: z.string().optional(),
    author: z.string().default('Admin'),
    date: z.string().optional(),
    category: z.string().optional(),
  }),
});

export const collections = {
  'posts': postsCollection,
};
