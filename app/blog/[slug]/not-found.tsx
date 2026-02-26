import Link from 'next/link';
import { FileQuestion } from 'lucide-react';

export default function BlogPostNotFound() {
  return (
    <div className="container py-20">
      <div className="max-w-2xl mx-auto text-center">
        <FileQuestion className="w-16 h-16 text-[var(--text-muted)] mx-auto mb-6" />
        <h1 className="font-display text-4xl font-bold text-[var(--text-primary)] mb-4">
          Blog Post Not Found
        </h1>
        <p className="text-lg text-[var(--text-secondary)] mb-8">
          The blog post you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/blog"
            className="px-6 py-3 bg-[var(--accent)] text-[var(--bg-primary)] rounded hover:opacity-90 transition-opacity font-medium"
          >
            Back to Blog
          </Link>
          <Link
            href="/"
            className="px-6 py-3 bg-[var(--bg-surface)] border border-[var(--border)] text-[var(--text-primary)] rounded hover:bg-[var(--bg-elevated)] transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
