'use client';

import { Eye, Code } from 'lucide-react';

interface PreviewToggleProps {
  showPreview: boolean;
  onToggle: () => void;
}

export function PreviewToggle({ showPreview, onToggle }: PreviewToggleProps) {
  return (
    <div className="flex items-center gap-2 bg-[var(--bg-elevated)] border border-[var(--border)] rounded p-1">
      <button
        onClick={onToggle}
        className={`
          flex items-center gap-2 px-3 py-1.5 rounded text-sm font-medium transition-all
          ${!showPreview
            ? 'bg-[var(--accent)] text-[var(--bg-primary)]'
            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
          }
        `}
      >
        <Code className="w-4 h-4" />
        Raw
      </button>
      <button
        onClick={onToggle}
        className={`
          flex items-center gap-2 px-3 py-1.5 rounded text-sm font-medium transition-all
          ${showPreview
            ? 'bg-[var(--accent)] text-[var(--bg-primary)]'
            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
          }
        `}
      >
        <Eye className="w-4 h-4" />
        Preview
      </button>
    </div>
  );
}
