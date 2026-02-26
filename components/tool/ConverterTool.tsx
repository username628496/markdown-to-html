'use client';

import { useState, useEffect, useCallback } from 'react';
import { EditorPanel } from './EditorPanel';
import { SwapButton } from './SwapButton';
import { Toolbar } from './Toolbar';
import { StatsBar } from './StatsBar';
import { OptionsPanel } from './OptionsPanel';
import { PreviewToggle } from './PreviewToggle';
import { Button } from '@/components/ui/Button';
import { KeyboardShortcutsHelp } from '@/components/ui/KeyboardShortcutsHelp';
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts';
import { useToast } from '@/components/ui/Toast';
import {
  htmlToMarkdown,
  markdownToHtml,
  calculateStats,
  ConversionOptions,
  defaultOptions,
  sampleHTML,
  sampleMarkdown,
} from '@/lib/converter';

type Direction = 'html-to-md' | 'md-to-html';

export function ConverterTool() {
  const [direction, setDirection] = useState<Direction>('html-to-md');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [options, setOptions] = useState<ConversionOptions>(defaultOptions);
  const [showPreview, setShowPreview] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const { showToast } = useToast();

  // Convert input to output whenever input or options change
  useEffect(() => {
    if (!input.trim()) {
      setOutput('');
      return;
    }

    try {
      if (direction === 'html-to-md') {
        setOutput(htmlToMarkdown(input, options));
      } else {
        setOutput(markdownToHtml(input, options));
      }
    } catch (error) {
      console.error('Conversion error:', error);
      setOutput('Error: Failed to convert. Please check your input.');
    }
  }, [input, options, direction]);

  const handleSwap = () => {
    // Swap direction
    setDirection(direction === 'html-to-md' ? 'md-to-html' : 'html-to-md');
    // Swap input/output
    setInput(output);
    setOutput('');
    setShowPreview(false);
  };

  const handleCopy = useCallback(async () => {
    if (!output) {
      showToast('Nothing to copy', 'warning');
      return;
    }
    try {
      await navigator.clipboard.writeText(output);
      setCopySuccess(true);
      showToast('Copied to clipboard!', 'success');
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
      showToast('Failed to copy to clipboard', 'error');
    }
  }, [output, showToast]);

  const handleDownload = useCallback(() => {
    if (!output) {
      showToast('Nothing to download', 'warning');
      return;
    }
    const extension = direction === 'html-to-md' ? 'md' : 'html';
    const mimeType = direction === 'html-to-md' ? 'text/markdown' : 'text/html';
    const blob = new Blob([output], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `converted.${extension}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast(`Downloaded as ${a.download}`, 'success');
  }, [output, direction, showToast]);

  const handleLoadSample = () => {
    setInput(direction === 'html-to-md' ? sampleHTML : sampleMarkdown);
    showToast('Sample loaded', 'info');
  };

  const handleClearAll = () => {
    setInput('');
    setOutput('');
    showToast('Cleared all content', 'info');
  };

  // Keyboard shortcuts
  useKeyboardShortcuts([
    {
      key: 'c',
      ctrl: true,
      callback: handleCopy,
    },
    {
      key: 's',
      ctrl: true,
      callback: handleDownload,
    },
    {
      key: 'k',
      ctrl: true,
      callback: handleClearAll,
    },
  ]);

  const inputStats = calculateStats(input);
  const outputStats = calculateStats(output);

  const inputLang = direction === 'html-to-md' ? 'html' : 'markdown';
  const outputLang = direction === 'html-to-md' ? 'markdown' : 'html';
  const inputFileTypes = direction === 'html-to-md' ? '.html,.htm' : '.md,.markdown,.txt';

  return (
    <div className="space-y-6">
      {/* Main Tool */}
      <div className="border border-[var(--border)] rounded bg-[var(--bg-surface)] overflow-hidden">
        {/* Editor Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[var(--border)]">
          {/* Input Panel */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-[var(--border)] bg-[var(--bg-elevated)]">
              <h3 className="font-semibold text-[var(--text-primary)]">
                {direction === 'html-to-md' ? 'HTML Input' : 'Markdown Input'}
              </h3>
              <Toolbar
                side="input"
                onFileUpload={setInput}
                onUrlFetch={setInput}
                acceptedFileTypes={inputFileTypes}
              />
            </div>
            <div className="flex-1 min-h-[400px]">
              <EditorPanel
                value={input}
                onChange={setInput}
                language={inputLang}
                placeholder={`Paste your ${inputLang.toUpperCase()} here...`}
              />
            </div>
          </div>

          {/* Output Panel */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-[var(--border)] bg-[var(--bg-elevated)]">
              <div className="flex items-center gap-4">
                <h3 className="font-semibold text-[var(--text-primary)]">
                  {direction === 'html-to-md' ? 'Markdown Output' : 'HTML Output'}
                </h3>
                {direction === 'md-to-html' && (
                  <PreviewToggle
                    showPreview={showPreview}
                    onToggle={() => setShowPreview(!showPreview)}
                  />
                )}
              </div>
              <Toolbar
                side="output"
                onCopy={handleCopy}
                onDownload={handleDownload}
                copySuccess={copySuccess}
              />
            </div>
            <div className="flex-1 min-h-[400px]">
              {showPreview && direction === 'md-to-html' ? (
                <div
                  className="p-6 prose prose-sm max-w-none overflow-auto h-full bg-[var(--bg-surface)] text-[var(--text-primary)]"
                  dangerouslySetInnerHTML={{ __html: output }}
                />
              ) : (
                <EditorPanel
                  value={output}
                  onChange={() => {}}
                  language={outputLang}
                  readOnly
                  placeholder="Converted output will appear here..."
                />
              )}
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <StatsBar inputStats={inputStats} outputStats={outputStats} />
      </div>

      {/* Center Toolbar */}
      <div className="flex items-center justify-center gap-4 flex-wrap">
        <SwapButton onSwap={handleSwap} />
        <Button variant="secondary" onClick={handleLoadSample}>
          Load Sample
        </Button>
        <Button variant="ghost" onClick={handleClearAll}>
          Clear All
        </Button>
        <KeyboardShortcutsHelp />
      </div>

      {/* Options Panel */}
      <OptionsPanel options={options} onChange={setOptions} />
    </div>
  );
}
