import type { Metadata } from 'next';
import Link from 'next/link';
import { FileCode, FileText, Eye, Edit, Type, Table } from 'lucide-react';

export const metadata: Metadata = {
  title: 'All Tools — Free Markdown & HTML Converters',
  description: 'Browse all free online tools for HTML, Markdown, and text conversion. HTML to Markdown, Markdown to HTML, editors, previews, and more.',
  alternates: {
    canonical: '/tools',
  },
};

export default function ToolsPage() {
  const tools = [
    {
      title: 'HTML to Markdown Converter',
      description: 'Convert HTML to Markdown format with full GFM support including tables, code blocks, and task lists.',
      href: '/html-to-markdown',
      icon: FileCode,
      category: 'Converters',
    },
    {
      title: 'Markdown to HTML Converter',
      description: 'Convert Markdown to HTML with live preview. Supports GitHub Flavored Markdown.',
      href: '/markdown-to-html',
      icon: FileText,
      category: 'Converters',
    },
    {
      title: 'Markdown Preview',
      description: 'Live preview your Markdown content as you type. See the rendered output instantly.',
      href: '/markdown-preview',
      icon: Eye,
      category: 'Editors',
    },
    {
      title: 'Markdown Editor',
      description: 'Full-featured Markdown editor with toolbar, shortcuts, and live preview.',
      href: '/markdown-editor',
      icon: Edit,
      category: 'Editors',
    },
    {
      title: 'HTML to Plain Text',
      description: 'Strip all HTML tags and extract clean plain text from HTML documents.',
      href: '/html-to-text',
      icon: Type,
      category: 'Utilities',
    },
    {
      title: 'Markdown Table Generator',
      description: 'Create and edit Markdown tables with an easy-to-use visual interface.',
      href: '/markdown-table-generator',
      icon: Table,
      category: 'Generators',
    },
  ];

  const categories = ['All', 'Converters', 'Editors', 'Utilities', 'Generators'];

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="font-display text-4xl font-bold text-[var(--text-primary)] mb-4">
          All Tools
        </h1>
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          Free online tools for converting, editing, and working with HTML, Markdown, and plain text. All tools run in your browser — your data stays private.
        </p>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <Link
              key={tool.href}
              href={tool.href}
              className="panel hover:border-[var(--accent)] transition-all group"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded bg-[var(--bg-elevated)] flex items-center justify-center group-hover:bg-[var(--accent)] transition-colors flex-shrink-0">
                    <Icon className="w-6 h-6 text-[var(--text-secondary)] group-hover:text-[var(--bg-primary)] transition-colors" />
                  </div>
                  <div className="flex-1">
                    <div className="inline-block px-2 py-1 text-xs font-medium bg-[var(--bg-elevated)] text-[var(--text-muted)] rounded mb-2">
                      {tool.category}
                    </div>
                    <h2 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                      {tool.title}
                    </h2>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {tool.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
