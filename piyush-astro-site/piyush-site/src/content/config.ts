import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: z.string().default('Piyush'),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
    cover_image: z.string().optional(),
  }),
});

export const collections = { blog };
