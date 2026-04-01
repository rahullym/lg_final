import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    // When running locally, use 'local' storage.
    // For deployment on AWS Amplify, you can change this to 'github' and configure the repo.
    kind: 'local',
  },
  collections: {
    posts: collection({
      label: 'Blog Posts',
      slugField: 'permalink',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        permalink: fields.slug({ name: { label: 'URL Slug' } }),
        title: fields.text({ label: 'Title' }),
        excerpt: fields.text({ label: 'Excerpt', multiline: true }),
        image: fields.image({
          label: 'Cover Image',
          directory: 'public',
          publicPath: '/',
        }),
        author: fields.text({ label: 'Author', defaultValue: 'Admin' }),
        date: fields.text({ label: 'Date', defaultValue: '' }),
        category: fields.text({ label: 'Category' }),
        content: fields.markdoc({
          label: 'Content',
          extension: 'md',
          options: {
            divider: true,
            link: true,
            image: {
              directory: 'public/blog-images',
              publicPath: '/blog-images/',
            },
          },
        }),
      },
    }),
  },
});
