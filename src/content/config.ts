import { z, defineCollection } from 'astro:content';

const collection = defineCollection({
    schema: z.object({
        title: z.optional(z.string()),
    }),
});

const contents = [
    'd92',
]

export const collections = Object.assign({}, ...contents.map(
    content => ({ [content]: collection })
));
