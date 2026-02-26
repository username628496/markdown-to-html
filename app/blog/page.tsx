import type { Metadata } from 'next';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog — Markdown & HTML Tips, Tutorials, and Guides',
  description: 'Learn about Markdown, HTML, and web development. Tutorials, guides, and tips for developers and content creators.',
  alternates: {
    canonical: '/blog',
  },
};

interface FrontMatter {
  title: string;
  description: string;
  publishedAt: string;
  category: string;
  readTime: string;
}

interface BlogPost extends FrontMatter {
  slug: string;
}

// Get all blog posts from file system
function getAllPosts(): BlogPost[] {
  const postsDirectory = path.join(process.cwd(), 'content/blog');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames
    .filter((filename) => filename.endsWith('.mdx'))
    .map((filename) => {
      const slug = filename.replace('.mdx', '');
      const fullPath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        ...(data as FrontMatter),
      };
    });

  // Sort by publishedAt date (newest first)
  return posts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export default function BlogPage() {
  const blogPosts = getAllPosts();
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="font-display text-4xl font-bold text-[var(--text-primary)] mb-4">
            Blog
          </h1>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            Guides, tutorials, and insights about Markdown, HTML, and web development.
          </p>
        </div>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="panel hover:border-[var(--accent)] transition-colors"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-[var(--bg-elevated)] text-[var(--text-muted)] rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <time className="text-sm text-[var(--text-muted)]">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>
                <h2 className="text-2xl font-display font-bold text-[var(--text-primary)] mb-2 hover:text-[var(--accent)] transition-colors">
                  {post.title}
                </h2>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {post.description}
                </p>
                <div className="mt-4">
                  <span className="text-[var(--accent)] hover:underline font-medium">
                    Read more →
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
