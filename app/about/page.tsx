import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — markdowntohtml.net',
  description: 'Learn about markdowntohtml.net, our free online HTML and Markdown conversion tools, and our commitment to privacy and open-source software.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <h1 className="font-display text-4xl font-bold text-[var(--text-primary)] mb-4">
            About markdowntohtml.net
          </h1>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            Free, private, and powerful conversion tools for developers and content creators.
          </p>
        </div>

        <section className="panel-elevated space-y-4">
          <h2 className="text-2xl font-display font-bold text-[var(--text-primary)]">
            Our Mission
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            We built markdowntohtml.net to provide free, reliable, and privacy-respecting tools for converting between HTML and Markdown formats. Whether you're a developer working with documentation, a content creator managing blog posts, or anyone who needs to convert markup formats, our tools are here to help.
          </p>
        </section>

        <section className="panel-elevated space-y-4">
          <h2 className="text-2xl font-display font-bold text-[var(--text-primary)]">
            Why We're Different
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-[var(--text-primary)] mb-2">
                100% Client-Side Processing
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                All conversions happen directly in your browser using JavaScript. Your content never touches our servers, never gets logged, and never leaves your device. We couldn't see your data even if we wanted to.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--text-primary)] mb-2">
                No Tracking, No Analytics Abuse
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                We use minimal, privacy-respecting analytics to understand which tools are most popular. We never track individual users, never sell data, and never use invasive third-party tracking scripts.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--text-primary)] mb-2">
                Built on Open Source
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Our tools are powered by industry-standard open-source libraries including Turndown for HTML to Markdown conversion and Marked for Markdown to HTML conversion. This ensures accurate, reliable conversions that match community standards.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--text-primary)] mb-2">
                Always Free
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                No paywalls, no premium tiers, no feature limits. Everything is free and will stay free. We believe essential developer tools should be accessible to everyone.
              </p>
            </div>
          </div>
        </section>

        <section className="panel-elevated space-y-4">
          <h2 className="text-2xl font-display font-bold text-[var(--text-primary)]">
            The Technology
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Built with Next.js 15, TypeScript, and Tailwind CSS. Hosted on Vercel's edge network for blazing-fast performance worldwide. We use:
          </p>
          <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2">
            <li><strong>Turndown</strong> with GFM plugin for HTML to Markdown conversion</li>
            <li><strong>Marked</strong> for Markdown to HTML conversion</li>
            <li><strong>CodeMirror</strong> for the code editor experience</li>
            <li><strong>Lucide React</strong> for beautiful, consistent icons</li>
          </ul>
        </section>

        <section className="panel-elevated space-y-4">
          <h2 className="text-2xl font-display font-bold text-[var(--text-primary)]">
            Contact
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Have questions, feedback, or feature requests? We'd love to hear from you.
          </p>
          <p className="text-[var(--text-secondary)]">
            Email: <a href="mailto:hello@markdowntohtml.net" className="text-[var(--accent)] hover:underline">hello@markdowntohtml.net</a>
          </p>
        </section>
      </div>
    </div>
  );
}
