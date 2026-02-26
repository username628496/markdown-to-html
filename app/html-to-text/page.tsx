import type { Metadata } from 'next';
import { HtmlToTextTool } from '@/components/tool/HtmlToTextTool';
import { ToolSchema } from '@/components/seo/ToolSchema';

export const metadata: Metadata = {
  title: 'HTML to Text Converter — Strip HTML Tags',
  description: 'Strip HTML tags and extract clean plain text from HTML documents. Free online tool for cleaning HTML content. Works with emails, web pages, and more.',
  keywords: [
    'html to text',
    'html to plain text',
    'strip html tags',
    'html tag remover',
    'extract text from html',
  ],
  openGraph: {
    title: 'HTML to Text Converter — Strip HTML Tags',
    description: 'Strip HTML tags and extract clean plain text instantly.',
    url: '/html-to-text',
    siteName: 'markdowntohtml.net',
  },
  alternates: {
    canonical: '/html-to-text',
  },
};

export default function HtmlToTextPage() {
  return (
    <>
      <ToolSchema
        name="HTML to Text Converter"
        description="Strip HTML tags and extract clean plain text from HTML documents. Perfect for cleaning HTML content."
        url="https://markdowntohtml.net/html-to-text"
      />

      <div className="container py-12">
        <div className="max-w-4xl mx-auto mb-8">
          <h1 className="font-display text-4xl font-bold text-[var(--text-primary)] mb-4">
            HTML to Plain Text Converter
          </h1>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            Strip all HTML tags and extract clean, readable plain text. Perfect for cleaning HTML email content, extracting text from web pages, or removing formatting from copied content.
          </p>
        </div>

        <HtmlToTextTool />

        <div className="max-w-4xl mx-auto mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-display font-bold text-[var(--text-primary)] mb-4">
              Common Use Cases
            </h2>
            <ul className="space-y-2 text-[var(--text-secondary)]">
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">→</span>
                <span>Extract text from HTML emails for archiving or analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">→</span>
                <span>Remove formatting from copied web content</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">→</span>
                <span>Clean HTML content before processing with other tools</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">→</span>
                <span>Extract readable text from HTML documents</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">→</span>
                <span>Prepare content for plain text systems</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
