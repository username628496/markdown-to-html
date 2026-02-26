import { Accordion } from '@/components/ui/Accordion';

export function FAQ() {
  const faqs = [
    {
      question: 'Is my data safe? Do you store my content?',
      answer: 'Absolutely safe. All conversions happen 100% in your browser using JavaScript. Your content never leaves your device and is never sent to our servers. We have no way to see or store your data.',
    },
    {
      question: 'What is Markdown?',
      answer: 'Markdown is a lightweight markup language that uses plain text formatting syntax. It\'s widely used for documentation, README files, blog posts, and comments on platforms like GitHub, Reddit, and Stack Overflow.',
    },
    {
      question: 'Do you support GitHub Flavored Markdown (GFM)?',
      answer: 'Yes! We fully support GitHub Flavored Markdown, including tables, task lists, strikethrough text, and fenced code blocks with syntax highlighting.',
    },
    {
      question: 'Can I convert files or only paste text?',
      answer: 'You can paste text directly, upload HTML or Markdown files from your computer, or fetch content from any public URL. All three methods are supported.',
    },
    {
      question: 'What\'s the difference between ATX and Setext heading styles?',
      answer: 'ATX style uses # symbols (e.g., # Heading 1, ## Heading 2). Setext style underlines headings with = or - characters. ATX is more common and recommended for most use cases.',
    },
    {
      question: 'Is this tool free?',
      answer: 'Yes, completely free with no limits. No sign-up required, no ads (currently), and no hidden fees.',
    },
  ];

  return (
    <div className="py-12 bg-[var(--bg-primary)]">
      <div className="container max-w-3xl">
        <h2 className="text-2xl font-display font-bold text-center text-[var(--text-primary)] mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Accordion key={index} title={faq.question} defaultOpen={index === 0}>
              <p className="text-[var(--text-secondary)] leading-relaxed">{faq.answer}</p>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
}
