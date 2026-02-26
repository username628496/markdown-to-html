'use client';

import { useState, useCallback } from 'react';
import { EditorPanel } from './EditorPanel';
import { Toolbar } from './Toolbar';
import { StatsBar } from './StatsBar';
import { Button } from '@/components/ui/Button';
import { markdownToHtml, calculateStats, sampleMarkdown } from '@/lib/converter';
import { FileDown } from 'lucide-react';

export function MarkdownPreviewTool() {
  const [markdown, setMarkdown] = useState('');
  const [html, setHtml] = useState('');

  // Convert markdown to HTML whenever input changes
  const handleMarkdownChange = useCallback((value: string) => {
    setMarkdown(value);
    try {
      const converted = markdownToHtml(value);
      setHtml(converted);
    } catch (error) {
      console.error('Preview error:', error);
      setHtml('<p style="color: red;">Error rendering preview</p>');
    }
  }, []);

  const handleLoadSample = () => {
    handleMarkdownChange(sampleMarkdown);
  };

  const handleClear = () => {
    setMarkdown('');
    setHtml('');
  };

  const handleExportHtml = () => {
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'preview.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const inputStats = calculateStats(markdown);
  const outputStats = calculateStats(html);

  return (
    <div className="space-y-6">
      {/* Main Tool */}
      <div className="border border-[var(--border)] rounded bg-[var(--bg-surface)] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[var(--border)]">
          {/* Editor Panel */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-[var(--border)] bg-[var(--bg-elevated)]">
              <h3 className="font-semibold text-[var(--text-primary)]">Markdown Editor</h3>
              <Toolbar
                side="input"
                onFileUpload={handleMarkdownChange}
                acceptedFileTypes=".md,.markdown,.txt"
              />
            </div>
            <div className="flex-1 min-h-[500px]">
              <EditorPanel
                value={markdown}
                onChange={handleMarkdownChange}
                language="markdown"
                placeholder="Type or paste Markdown here..."
              />
            </div>
          </div>

          {/* Preview Panel */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-[var(--border)] bg-[var(--bg-elevated)]">
              <h3 className="font-semibold text-[var(--text-primary)]">Live Preview</h3>
              <Button
                variant="secondary"
                size="sm"
                onClick={handleExportHtml}
                disabled={!html}
                className="flex items-center gap-2"
              >
                <FileDown className="w-4 h-4" />
                Export HTML
              </Button>
            </div>
            <div className="flex-1 min-h-[500px] overflow-auto">
              {html ? (
                <div
                  className="p-6 prose prose-sm max-w-none dark:prose-invert"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              ) : (
                <div className="flex items-center justify-center h-full text-[var(--text-muted)]">
                  Preview will appear here...
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <StatsBar inputStats={inputStats} outputStats={outputStats} />
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-center gap-4">
        <Button variant="secondary" onClick={handleLoadSample}>
          Load Sample
        </Button>
        <Button variant="ghost" onClick={handleClear}>
          Clear All
        </Button>
      </div>
    </div>
  );
}
