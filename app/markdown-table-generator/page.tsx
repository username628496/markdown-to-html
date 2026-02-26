import type { Metadata } from 'next';
import { TableGeneratorTool } from '@/components/tool/TableGeneratorTool';
import { ToolSchema } from '@/components/seo/ToolSchema';

export const metadata: Metadata = {
  title: 'Markdown Table Generator — Visual Table Editor',
  description: 'Create and edit Markdown tables with visual interface. No more aligning pipes manually! Generate perfect Markdown tables instantly.',
  keywords: [
    'markdown table generator',
    'markdown table',
    'create markdown table',
    'markdown table maker',
    'table to markdown',
  ],
  openGraph: {
    title: 'Markdown Table Generator — Visual Table Editor',
    description: 'Create Markdown tables visually. No manual alignment needed.',
    url: '/markdown-table-generator',
    siteName: 'markdowntohtml.net',
  },
  alternates: {
    canonical: '/markdown-table-generator',
  },
};

export default function MarkdownTableGeneratorPage() {
  return (
    <>
      <ToolSchema
        name="Markdown Table Generator"
        description="Visual Markdown table generator. Create perfectly formatted Markdown tables without manual alignment."
        url="https://markdowntohtml.net/markdown-table-generator"
      />

      <div className="container py-12">
        <div className="max-w-5xl mx-auto mb-8">
          <h1 className="font-display text-4xl font-bold text-[var(--text-primary)] mb-4">
            Markdown Table Generator
          </h1>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            Create perfectly formatted Markdown tables with a visual editor. No more manually aligning pipes! Add rows, add columns, edit cells, and copy the generated Markdown.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <TableGeneratorTool />
        </div>

        <div className="max-w-4xl mx-auto mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-display font-bold text-[var(--text-primary)] mb-4">
              How to Use
            </h2>
            <ol className="space-y-2 text-[var(--text-secondary)] list-decimal list-inside">
              <li>Click cells to edit content (first row is the header)</li>
              <li>Click + buttons to add rows or columns</li>
              <li>Click trash icons to delete rows or columns</li>
              <li>Copy the generated Markdown or download as .md file</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[var(--text-primary)] mb-4">
              Features
            </h2>
            <ul className="space-y-2 text-[var(--text-secondary)]">
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">✓</span>
                <span>Visual table editor - no manual formatting</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">✓</span>
                <span>Automatically aligned columns</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">✓</span>
                <span>Add/remove rows and columns dynamically</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">✓</span>
                <span>Live Markdown output preview</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">✓</span>
                <span>Copy or download generated Markdown</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
