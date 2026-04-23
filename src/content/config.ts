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
    draft: z.boolean().default(false),
  }),
});

const celebrationsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    year: z.string(),
    cover: z.string(),
    gallery: z.array(z.string()).default([]),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

const seminarsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    year: z.string(),
    cover: z.string(),
    gallery: z.array(z.string()).default([]),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

const infrastructureGalleryCollection = defineCollection({
  type: 'content',
  schema: z.object({
    alt: z.string(),
    image: z.string(),
    order: z.number().default(0),
  }),
});

export const collections = {
  'posts': postsCollection,
  'celebrations': celebrationsCollection,
  'seminars': seminarsCollection,
  'infrastructure-gallery': infrastructureGalleryCollection,
};
