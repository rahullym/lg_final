# SEO Implementation Walkthrough

This document outlines the SEO architecture and implementation strategies used in the Logistics Gurukul project to ensure maximum visibility and optimized search engine performance.

## 1. Centralized SEO Component (`src/components/SEO.astro`)

We implemented a core `SEO` component that manages all meta tags, social graph tags (Open Graph), and canonical URLs in one place.

### Key Features:
- **Dynamic Titles & Descriptions**: Accepts props to set unique page titles and meta descriptions.
- **Open Graph Support**: Ready for social media sharing with OG tags for Facebook, LinkedIn, etc.
- **Canonical URLs**: Ensures search engines index the primary version of each page.
- **Twitter Cards**: Optimized for Twitter sharing.

## 2. Layout Integration

The `SEO` component is integrated directly into the primary `Layout.astro` file. This ensures that every page built using the standard layout is automatically SEO-compliant.

```astro
---
import SEO from "../components/SEO.astro";
const { title, description } = Astro.props;
---
<head>
    <SEO title={title} description={description} />
</head>
```

## 3. Dynamic Blog SEO

For dynamic content like blog posts, the SEO metadata is pulled directly from the `blogPosts.ts` data file. This ensures that individual articles have highly specific metadata.

- **URL Structure**: Clean, descriptive slugs (e.g., `/blog/importance-of-incoterms-in-global-trade`).
- **Dynamic Props**: Page components pass the post title and excerpt as SEO props.

## 4. Technical SEO Infrastructure

### Sitemap Generation
The project uses `@astrojs/sitemap`. Every time the project is built (`npm run build`), a comprehensive `sitemap-index.xml` is generated in the `dist` folder, helping search engines discover all pages.

### Robots.txt
A `public/robots.txt` file is included to guide search engine crawlers on which pages to index and where to find the sitemap.

### Image Optimization
- All images include descriptive `alt` tags.
- Large images (like Hero backgrounds) are placed in `public/` and referenced semantically.

## 5. Semantic HTML & Content Structure

- **Header Hierarchy**: Strictly follows `<h1>` through `<h4>` hierarchies.
- **Main Content**: Uses `<main>` and `<article>` tags for clear document structure.
- **Interlinking**: Strategic internal linking between the blog, courses, and faculty pages to improve "link juice" distribution.

---

## Future Checklist for New Pages:
1. Wrap new pages in `<Layout>`.
2. Provide a unique, keyword-rich `title` prop.
3. Provide a concise (under 160 chars) `description` prop.
4. Ensure at least one `<h1>` tag exists and describes the primary topic.
5. Ensure all images have `alt` text.
