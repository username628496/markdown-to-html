'use client';

import { Upload, Link as LinkIcon, Copy, Download, Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useRef, useState } from 'react';

interface ToolbarProps {
  onFileUpload?: (content: string) => void;
  onUrlFetch?: (url: string) => void;
  onCopy?: () => void;
  onDownload?: () => void;
  acceptedFileTypes?: string;
  side: 'input' | 'output';
  copySuccess?: boolean;
}

export function Toolbar({
  onFileUpload,
  onUrlFetch,
  onCopy,
  onDownload,
  acceptedFileTypes = '.html,.md,.txt',
  side,
  copySuccess = false,
}: ToolbarProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const content = await file.text();
      onFileUpload?.(content);
    } catch (error) {
      console.error('Error reading file:', error);
      alert('Failed to read file');
    }

    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleUrlSubmit = async () => {
    if (!url.trim()) return;

    setIsLoading(true);
    try {
      const response = await fetch('/api/fetch-url', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: url.trim() }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch URL');
      }

      const data = await response.json();
      onUrlFetch?.(data.content);
      setShowUrlInput(false);
      setUrl('');
    } catch (error) {
      console.error('Error fetching URL:', error);
      alert('Failed to fetch content from URL');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {side === 'input' && (
        <>
          <Button
            variant="secondary"
            size="sm"
            onClick={handleFileClick}
            className="flex items-center gap-2"
          >
            <Upload className="w-4 h-4" />
            Upload
          </Button>
          <input
            ref={fileInputRef}
            type="file"
            accept={acceptedFileTypes}
            onChange={handleFileChange}
            className="hidden"
          />

          {!showUrlInput ? (
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setShowUrlInput(true)}
              className="flex items-center gap-2"
            >
              <LinkIcon className="w-4 h-4" />
              From URL
            </Button>
          ) : (
            <div className="flex items-center gap-2">
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleUrlSubmit()}
                placeholder="Enter URL..."
                className="px-3 py-1.5 text-sm border border-[var(--border)] rounded bg-[var(--bg-surface)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)]"
                disabled={isLoading}
              />
              <Button
                variant="accent"
                size="sm"
                onClick={handleUrlSubmit}
                disabled={isLoading || !url.trim()}
              >
                {isLoading ? 'Loading...' : 'Fetch'}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setShowUrlInput(false);
                  setUrl('');
                }}
              >
                Cancel
              </Button>
            </div>
          )}
        </>
      )}

      {side === 'output' && (
        <>
          <Button
            variant="secondary"
            size="sm"
            onClick={onCopy}
            className="flex items-center gap-2"
          >
            {copySuccess ? (
              <>
                <Check className="w-4 h-4 text-[var(--success)]" />
                Copied
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy
              </>
            )}
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={onDownload}
            className="flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download
          </Button>
        </>
      )}
    </div>
  );
}
