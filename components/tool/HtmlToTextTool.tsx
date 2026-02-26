'use client';

import { useState, useCallback } from 'react';
import { EditorPanel } from './EditorPanel';
import { Toolbar } from './Toolbar';
import { StatsBar } from './StatsBar';
import { Button } from '@/components/ui/Button';
import { calculateStats, htmlToText } from '@/lib/converter';

export function HtmlToTextTool() {
  const [html, setHtml] = useState('');
  const [text, setText] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);

  const handleHtmlChange = useCallback((value: string) => {
    setHtml(value);
    try {
      const plainText = htmlToText(value);
      setText(plainText);
    } catch (error) {
      console.error('Conversion error:', error);
      setText('Error: Failed to extract text');
    }
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
      alert('Failed to copy to clipboard');
    }
  };

  const handleDownload = () => {
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'extracted-text.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleLoadSample = () => {
    const sample = `<html>
<head>
  <title>Sample HTML Document</title>
  <style>
    body { font-family: Arial; }
  </style>
</head>
<body>
  <h1>Welcome to HTML to Text Converter</h1>
  <p>This tool <strong>strips all HTML tags</strong> and extracts clean <em>plain text</em>.</p>

  <ul>
    <li>No formatting</li>
    <li>No tags</li>
    <li>Just text</li>
  </ul>

  <div class="footer">
    <p>Perfect for extracting content from HTML emails or web pages.</p>
  </div>
</body>
</html>`;
    handleHtmlChange(sample);
  };

  const handleClear = () => {
    setHtml('');
    setText('');
  };

  const inputStats = calculateStats(html);
  const outputStats = calculateStats(text);

  return (
    <div className="space-y-6">
      {/* Main Tool */}
      <div className="border border-[var(--border)] rounded bg-[var(--bg-surface)] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[var(--border)]">
          {/* Input Panel */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-[var(--border)] bg-[var(--bg-elevated)]">
              <h3 className="font-semibold text-[var(--text-primary)]">HTML Input</h3>
              <Toolbar
                side="input"
                onFileUpload={handleHtmlChange}
                onUrlFetch={handleHtmlChange}
                acceptedFileTypes=".html,.htm"
              />
            </div>
            <div className="flex-1 min-h-[500px]">
              <EditorPanel
                value={html}
                onChange={handleHtmlChange}
                language="html"
                placeholder="Paste HTML here..."
              />
            </div>
          </div>

          {/* Output Panel */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-[var(--border)] bg-[var(--bg-elevated)]">
              <h3 className="font-semibold text-[var(--text-primary)]">Plain Text Output</h3>
              <Toolbar
                side="output"
                onCopy={handleCopy}
                onDownload={handleDownload}
                copySuccess={copySuccess}
              />
            </div>
            <div className="flex-1 min-h-[500px]">
              <div className="p-6 font-mono text-sm whitespace-pre-wrap text-[var(--text-primary)] bg-[var(--bg-surface)] h-full overflow-auto">
                {text || <span className="text-[var(--text-muted)]">Plain text will appear here...</span>}
              </div>
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
