import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://markdowntohtml.net';

  // Blog posts
  const postsDirectory = path.join(process.cwd(), 'content/blog');
  const filenames = fs.readdirSync(postsDirectory);

  const blogPosts: MetadataRoute.Sitemap = filenames
    .filter((filename) => filename.endsWith('.mdx'))
    .map((filename) => {
      const slug = filename.replace('.mdx', '');
      const fullPath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        url: `${baseUrl}/blog/${slug}`,
        lastModified: new Date(data.updatedAt || data.publishedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      };
    });

  // Tool pages
  const toolPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/html-to-markdown`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/markdown-to-html`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/markdown-preview`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/markdown-editor`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/html-to-text`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/markdown-table-generator`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Programmatic SEO pages - platforms
  const platforms = [
    'wordpress',
    'notion',
    'confluence',
    'medium',
    'ghost',
    'substack',
    'google-docs',
    'jira',
    'slack',
    'email',
  ];

  const programmaticPages: MetadataRoute.Sitemap = platforms.map((platform) => ({
    url: `${baseUrl}/convert/${platform}-to-markdown`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  return [...staticPages, ...toolPages, ...programmaticPages, ...blogPosts];
}
