import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

interface FrontMatter {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  keywords: string[];
  author: string;
  category: string;
  readTime: string;
}

// Get all blog post slugs for static generation
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'content/blog');
  const filenames = fs.readdirSync(postsDirectory);

  return filenames
    .filter((filename) => filename.endsWith('.mdx'))
    .map((filename) => ({
      slug: filename.replace('.mdx', ''),
    }));
}

// Get blog post content
async function getPost(slug: string) {
  try {
    const postsDirectory = path.join(process.cwd(), 'content/blog');
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { data, content } = matter(fileContents);

    return {
      frontMatter: data as FrontMatter,
      content,
    };
  } catch (error) {
    return null;
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const { frontMatter } = post;

  return {
    title: frontMatter.title,
    description: frontMatter.description,
    keywords: frontMatter.keywords,
    authors: [{ name: frontMatter.author }],
    openGraph: {
      title: frontMatter.title,
      description: frontMatter.description,
      type: 'article',
      publishedTime: frontMatter.publishedAt,
      modifiedTime: frontMatter.updatedAt || frontMatter.publishedAt,
      authors: [frontMatter.author],
      url: `/blog/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: frontMatter.title,
      description: frontMatter.description,
    },
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

// Custom components for MDX
const components = {
  h1: (props: any) => (
    <h1 className="font-display text-4xl font-bold text-[var(--text-primary)] mt-8 mb-4" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] mt-12 mb-4" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="font-display text-2xl font-bold text-[var(--text-primary)] mt-8 mb-3" {...props} />
  ),
  h4: (props: any) => (
    <h4 className="font-display text-xl font-bold text-[var(--text-primary)] mt-6 mb-2" {...props} />
  ),
  p: (props: any) => (
    <p className="text-[var(--text-secondary)] leading-relaxed mb-4" {...props} />
  ),
  a: (props: any) => (
    <a className="text-[var(--accent)] hover:underline" {...props} />
  ),
  ul: (props: any) => (
    <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2 mb-4 ml-4" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal list-inside text-[var(--text-secondary)] space-y-2 mb-4 ml-4" {...props} />
  ),
  li: (props: any) => (
    <li className="text-[var(--text-secondary)]" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-[var(--accent)] pl-4 italic text-[var(--text-muted)] my-4" {...props} />
  ),
  code: (props: any) => (
    <code className="bg-[var(--bg-elevated)] text-[var(--text-primary)] px-1.5 py-0.5 rounded text-sm font-mono" {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-[var(--bg-elevated)] text-[var(--text-primary)] p-4 rounded overflow-x-auto mb-4 border border-[var(--border)]" {...props} />
  ),
  table: (props: any) => (
    <div className="overflow-x-auto mb-4">
      <table className="min-w-full border border-[var(--border)]" {...props} />
    </div>
  ),
  th: (props: any) => (
    <th className="border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-2 text-left text-[var(--text-primary)] font-semibold" {...props} />
  ),
  td: (props: any) => (
    <td className="border border-[var(--border)] px-4 py-2 text-[var(--text-secondary)]" {...props} />
  ),
  hr: (props: any) => (
    <hr className="border-[var(--border)] my-8" {...props} />
  ),
};

export default async function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const { frontMatter, content } = post;

  // Format dates
  const publishedDate = new Date(frontMatter.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const updatedDate = frontMatter.updatedAt
    ? new Date(frontMatter.updatedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null;

  return (
    <>
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: frontMatter.title,
            description: frontMatter.description,
            author: {
              '@type': 'Organization',
              name: frontMatter.author,
              url: 'https://markdowntohtml.net',
            },
            publisher: {
              '@type': 'Organization',
              name: 'markdowntohtml.net',
              url: 'https://markdowntohtml.net',
            },
            datePublished: frontMatter.publishedAt,
            dateModified: frontMatter.updatedAt || frontMatter.publishedAt,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://markdowntohtml.net/blog/${slug}`,
            },
            keywords: frontMatter.keywords.join(', '),
          }),
        }}
      />

      <article className="container py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back to Blog */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-[var(--bg-elevated)] text-[var(--text-muted)] rounded">
                {frontMatter.category}
              </span>
              <span className="text-[var(--text-muted)] text-sm flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {frontMatter.readTime}
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
              {frontMatter.title}
            </h1>

            <p className="text-xl text-[var(--text-secondary)] mb-6 leading-relaxed">
              {frontMatter.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{frontMatter.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={frontMatter.publishedAt}>{publishedDate}</time>
              </div>
              {updatedDate && (
                <span className="text-xs">
                  Updated: {updatedDate}
                </span>
              )}
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <MDXRemote source={content} components={components} />
          </div>

          {/* Footer */}
          <footer className="mt-12 pt-8 border-t border-[var(--border)]">
            <div className="bg-[var(--bg-elevated)] rounded p-6">
              <h3 className="font-display text-xl font-bold text-[var(--text-primary)] mb-3">
                Try Our Tools
              </h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Convert your content with our free online tools
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/"
                  className="px-4 py-2 bg-[var(--accent)] text-[var(--bg-primary)] rounded hover:opacity-90 transition-opacity font-medium"
                >
                  HTML ↔ Markdown Converter
                </Link>
                <Link
                  href="/markdown-preview"
                  className="px-4 py-2 bg-[var(--bg-surface)] border border-[var(--border)] text-[var(--text-primary)] rounded hover:bg-[var(--bg-elevated)] transition-colors"
                >
                  Markdown Preview
                </Link>
                <Link
                  href="/markdown-table-generator"
                  className="px-4 py-2 bg-[var(--bg-surface)] border border-[var(--border)] text-[var(--text-primary)] rounded hover:bg-[var(--bg-elevated)] transition-colors"
                >
                  Table Generator
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </article>
    </>
  );
}
