import type { Metadata } from 'next';
import { MarkdownPreviewTool } from '@/components/tool/MarkdownPreviewTool';
import { ToolSchema } from '@/components/seo/ToolSchema';

export const metadata: Metadata = {
  title: 'Markdown Preview — Live Markdown Renderer',
  description: 'Live Markdown preview tool. Type Markdown and see the rendered HTML output instantly. Free, client-side, with GitHub Flavored Markdown support.',
  keywords: [
    'markdown preview',
    'markdown preview online',
    'live markdown preview',
    'markdown renderer',
    'markdown viewer',
  ],
  openGraph: {
    title: 'Markdown Preview — Live Markdown Renderer',
    description: 'Live Markdown preview tool with instant rendering.',
    url: '/markdown-preview',
    siteName: 'markdowntohtml.net',
  },
  alternates: {
    canonical: '/markdown-preview',
  },
};

export default function MarkdownPreviewPage() {
  return (
    <>
      <ToolSchema
        name="Markdown Preview Tool"
        description="Live Markdown preview with instant rendering. See your Markdown rendered as HTML in real-time."
        url="https://markdowntohtml.net/markdown-preview"
      />

      <div className="container py-12">
        <div className="max-w-4xl mx-auto mb-8">
          <h1 className="font-display text-4xl font-bold text-[var(--text-primary)] mb-4">
            Markdown Preview Tool
          </h1>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            Type or paste Markdown on the left and see it rendered instantly on the right. Perfect for writing documentation, README files, and blog posts. Full GitHub Flavored Markdown support.
          </p>
        </div>

        <MarkdownPreviewTool />

        <div className="max-w-4xl mx-auto mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-display font-bold text-[var(--text-primary)] mb-4">
              Features
            </h2>
            <ul className="space-y-2 text-[var(--text-secondary)]">
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">✓</span>
                <span>Real-time preview as you type</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">✓</span>
                <span>GitHub Flavored Markdown support (tables, task lists, code blocks)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">✓</span>
                <span>Upload Markdown files for preview</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">✓</span>
                <span>Export rendered HTML</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">✓</span>
                <span>Character, word, and line count</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
