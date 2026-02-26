import type { Metadata } from 'next';
import { ConverterTool } from '@/components/tool/ConverterTool';
import { ToolSchema } from '@/components/seo/ToolSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
  title: 'Markdown to HTML Converter — Free Online Tool',
  description: 'Convert Markdown to HTML instantly. Free, private, no signup. Full GitHub Flavored Markdown support. Live preview available. Client-side processing.',
  keywords: [
    'markdown to html',
    'markdown to html converter',
    'convert markdown to html online',
    'md to html',
    'markdown html converter',
  ],
  openGraph: {
    title: 'Markdown to HTML Converter — Free Online Tool',
    description: 'Convert Markdown to HTML instantly. Free, private, client-side processing.',
    url: '/markdown-to-html',
    siteName: 'markdowntohtml.net',
    images: [
      {
        url: '/og/markdown-to-html.png',
        width: 1200,
        height: 630,
        alt: 'Markdown to HTML Converter',
      },
    ],
  },
  alternates: {
    canonical: '/markdown-to-html',
  },
};

const faqs = [
  {
    question: 'How do I convert Markdown to HTML?',
    answer: 'Paste your Markdown text into the input panel, and it will automatically be converted to HTML. You can toggle between raw HTML view and rendered preview.',
  },
  {
    question: 'Does it support GitHub Flavored Markdown?',
    answer: 'Yes! The tool fully supports GFM including tables, task lists, strikethrough, and fenced code blocks with syntax highlighting.',
  },
  {
    question: 'Can I see a preview of the rendered HTML?',
    answer: 'Absolutely. Use the Preview toggle in the output panel to switch between raw HTML code and the rendered preview.',
  },
  {
    question: 'Is my Markdown data stored anywhere?',
    answer: 'No, all conversion happens in your browser. Your Markdown never touches our servers or leaves your device.',
  },
];

export default function MarkdownToHtmlPage() {
  return (
    <>
      <ToolSchema
        name="Markdown to HTML Converter"
        description="Convert Markdown to HTML format instantly. Free online tool with GitHub Flavored Markdown support and live preview."
        url="https://markdowntohtml.net/markdown-to-html"
      />
      <FAQSchema faqs={faqs} />

      <div className="container py-12">
        <div className="max-w-4xl mx-auto mb-8">
          <h1 className="font-display text-4xl font-bold text-[var(--text-primary)] mb-4">
            Markdown to HTML Converter
          </h1>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            Convert Markdown to HTML format with our free online tool. Full GitHub Flavored
            Markdown (GFM) support including tables, task lists, and code blocks. Toggle between
            raw HTML and live preview. All processing happens in your browser.
          </p>
        </div>

        <ConverterTool />

        <div className="max-w-4xl mx-auto mt-12 space-y-12">
          {/* How to Use */}
          <section id="how-to-use">
            <h2 className="text-2xl font-display font-bold text-[var(--text-primary)] mb-4">
              How to Use
            </h2>
            <ol className="space-y-3 text-[var(--text-secondary)] list-decimal list-inside">
              <li>Paste your Markdown text into the input panel, or upload a .md file</li>
              <li>The tool automatically converts it to HTML in real-time</li>
              <li>Toggle between Raw HTML and Preview to see the rendered output</li>
              <li>Adjust conversion options if needed (GFM features, tables, task lists)</li>
              <li>Copy the HTML output or download it as an .html file</li>
            </ol>
          </section>

          {/* FAQ */}
          <section id="faq">
            <h2 className="text-2xl font-display font-bold text-[var(--text-primary)] mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
