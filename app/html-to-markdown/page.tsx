import type { Metadata } from 'next';
import { ConverterTool } from '@/components/tool/ConverterTool';
import { ToolSchema } from '@/components/seo/ToolSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
  title: 'HTML to Markdown Converter — Free Online Tool',
  description: 'Convert HTML to Markdown instantly. Free, private, no signup. Supports tables, code blocks, GFM. Client-side processing — your data never leaves your browser.',
  keywords: [
    'html to markdown',
    'html to markdown converter',
    'convert html to markdown online',
    'html to md',
    'html markdown converter',
  ],
  openGraph: {
    title: 'HTML to Markdown Converter — Free Online Tool',
    description: 'Convert HTML to Markdown instantly. Free, private, client-side processing.',
    url: '/html-to-markdown',
    siteName: 'markdowntohtml.net',
    images: [
      {
        url: '/og/html-to-markdown.png',
        width: 1200,
        height: 630,
        alt: 'HTML to Markdown Converter',
      },
    ],
  },
  alternates: {
    canonical: '/html-to-markdown',
  },
};

const faqs = [
  {
    question: 'How do I convert HTML to Markdown?',
    answer: 'Simply paste your HTML code into the input panel, and the tool will automatically convert it to Markdown in real-time. You can also upload an HTML file or fetch content from a URL.',
  },
  {
    question: 'Is the conversion accurate?',
    answer: 'Yes, we use industry-standard Turndown library with GitHub Flavored Markdown support to ensure accurate conversions. It handles headings, lists, tables, code blocks, and more.',
  },
  {
    question: 'Can I convert HTML tables to Markdown?',
    answer: 'Absolutely! The tool fully supports converting HTML tables to Markdown table syntax when GFM (GitHub Flavored Markdown) is enabled.',
  },
  {
    question: 'What happens to my HTML code?',
    answer: 'All conversions happen locally in your browser. Your HTML code never leaves your device or gets sent to any server.',
  },
];

export default function HtmlToMarkdownPage() {
  return (
    <>
      <ToolSchema
        name="HTML to Markdown Converter"
        description="Convert HTML to Markdown format instantly. Free online tool with GitHub Flavored Markdown support."
        url="https://markdowntohtml.net/html-to-markdown"
      />
      <FAQSchema faqs={faqs} />

      <div className="container py-12">
        <div className="max-w-4xl mx-auto mb-8">
          <h1 className="font-display text-4xl font-bold text-[var(--text-primary)] mb-4">
            HTML to Markdown Converter
          </h1>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            Convert HTML to Markdown format with our free online tool. Supports GitHub Flavored
            Markdown (GFM) including tables, code blocks, task lists, and strikethrough. All
            processing happens in your browser — your HTML never leaves your device.
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
              <li>Paste your HTML code into the input panel, or upload an HTML file</li>
              <li>The tool automatically converts it to Markdown in real-time</li>
              <li>Customize conversion options if needed (heading style, GFM features)</li>
              <li>Copy the Markdown output or download it as a .md file</li>
              <li>Use the swap button to reverse direction (Markdown to HTML)</li>
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
