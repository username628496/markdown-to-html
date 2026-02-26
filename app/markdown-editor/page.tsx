import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Markdown Editor — Coming Soon',
  description: 'Full-featured Markdown editor with toolbar and shortcuts. Coming soon.',
  alternates: {
    canonical: '/markdown-editor',
  },
};

export default function MarkdownEditorPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h1 className="font-display text-4xl font-bold text-[var(--text-primary)]">
          Markdown Editor
        </h1>
        <p className="text-xl text-[var(--text-secondary)]">
          Coming Soon
        </p>
        <p className="text-[var(--text-secondary)] leading-relaxed">
          We&apos;re building a full-featured Markdown editor with formatting toolbar, keyboard shortcuts, and live preview.
        </p>
        <div className="pt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-[var(--bg-primary)] font-semibold rounded hover:bg-[var(--accent-hover)] transition-colors"
          >
            Try the Main Converter
          </Link>
        </div>
      </div>
    </div>
  );
}
