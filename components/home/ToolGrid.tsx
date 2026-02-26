import Link from 'next/link';
import { FileCode, FileText, Eye, Edit, Type, Table } from 'lucide-react';

export function ToolGrid() {
  const tools = [
    {
      title: 'HTML to Markdown',
      description: 'Convert HTML to Markdown format',
      href: '/html-to-markdown',
      icon: FileCode,
    },
    {
      title: 'Markdown to HTML',
      description: 'Convert Markdown to HTML format',
      href: '/markdown-to-html',
      icon: FileText,
    },
    {
      title: 'Markdown Preview',
      description: 'Live preview your Markdown',
      href: '/markdown-preview',
      icon: Eye,
    },
    {
      title: 'Markdown Editor',
      description: 'Full-featured Markdown editor',
      href: '/markdown-editor',
      icon: Edit,
    },
    {
      title: 'HTML to Text',
      description: 'Strip HTML tags to plain text',
      href: '/html-to-text',
      icon: Type,
    },
    {
      title: 'Table Generator',
      description: 'Create Markdown tables easily',
      href: '/markdown-table-generator',
      icon: Table,
    },
  ];

  return (
    <div className="py-12 bg-[var(--bg-surface)]">
      <div className="container">
        <h2 className="text-2xl font-display font-bold text-center text-[var(--text-primary)] mb-8">
          Other Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.href}
                href={tool.href}
                className="panel hover:border-[var(--accent)] transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-[var(--bg-elevated)] flex items-center justify-center group-hover:bg-[var(--accent)] transition-colors">
                    <Icon className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-[var(--bg-primary)] transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[var(--text-primary)] mb-1 group-hover:text-[var(--accent)] transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)]">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-[var(--accent)] hover:underline font-medium"
          >
            View all tools →
          </Link>
        </div>
      </div>
    </div>
  );
}
