'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/components/providers/ThemeProvider';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded border border-[var(--border)] hover:border-[var(--border-hover)] bg-[var(--bg-surface)] transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-[var(--text-primary)]" />
      ) : (
        <Moon className="w-5 h-5 text-[var(--text-primary)]" />
      )}
    </button>
  );
}
