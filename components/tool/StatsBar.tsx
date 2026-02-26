'use client';

import { TextStats } from '@/lib/converter';

interface StatsBarProps {
  inputStats: TextStats;
  outputStats: TextStats;
}

export function StatsBar({ inputStats, outputStats }: StatsBarProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 text-sm px-3 py-2 border-t border-[var(--border)] bg-[var(--bg-surface)]">

      {/* Input stats */}
      <div className="flex items-center gap-3">
        <span className="font-medium text-[var(--text-primary)]">Input:</span>
        <span className="text-[var(--text-secondary)]">
          Chars: <strong className="text-[var(--text-primary)] font-mono">{inputStats.characters.toLocaleString()}</strong>
        </span>
        <span className="text-[var(--text-secondary)]">
          Words: <strong className="text-[var(--text-primary)] font-mono">{inputStats.words.toLocaleString()}</strong>
        </span>
        <span className="text-[var(--text-secondary)]">
          Lines: <strong className="text-[var(--text-primary)] font-mono">{inputStats.lines.toLocaleString()}</strong>
        </span>
      </div>

      {/* Divider — visible only on desktop */}
      <div className="hidden sm:block w-px h-4 bg-[var(--border)]" />

      {/* Output stats */}
      <div className="flex items-center gap-3">
        <span className="font-medium text-[var(--text-primary)]">Output:</span>
        <span className="text-[var(--text-secondary)]">
          Chars: <strong className="text-[var(--text-primary)] font-mono">{outputStats.characters.toLocaleString()}</strong>
        </span>
        <span className="text-[var(--text-secondary)]">
          Words: <strong className="text-[var(--text-primary)] font-mono">{outputStats.words.toLocaleString()}</strong>
        </span>
        <span className="text-[var(--text-secondary)]">
          Lines: <strong className="text-[var(--text-primary)] font-mono">{outputStats.lines.toLocaleString()}</strong>
        </span>
      </div>

    </div>
  );
}
