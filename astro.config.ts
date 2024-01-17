import { defineConfig } from 'astro/config';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import relativeLinks from 'astro-relative-links';

const katex = {
    trust: true,
    fleqn: false,
    strict: false,
    macros: {
        '\\le': '\\leqslant',
        '\\ge': '\\geqslant',
    },
};


// https://astro.build/config
export default defineConfig({
    trailingSlash: 'always',
    compressHTML: true,
    build: {
        format: 'directory',
        assets: 'assets',
    },
    markdown: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [() => rehypeKatex(katex)],
    },
    integrations: [relativeLinks(), mdx(), tailwind({
        config: { applyBaseStyles: false },
    })],
});
