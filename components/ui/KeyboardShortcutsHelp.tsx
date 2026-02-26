'use client';

import { useState } from 'react';
import { Keyboard, X } from 'lucide-react';
import { Button } from './Button';

export function KeyboardShortcutsHelp() {
  const [isOpen, setIsOpen] = useState(false);

  const shortcuts = [
    { keys: ['Ctrl', 'C'], description: 'Copy output to clipboard' },
    { keys: ['Ctrl', 'S'], description: 'Download output file' },
    { keys: ['Ctrl', 'K'], description: 'Clear all content' },
  ];

  return (
    <>
      {/* Trigger Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2"
        title="Keyboard shortcuts"
      >
        <Keyboard className="w-4 h-4" />
        <span className="hidden sm:inline">Shortcuts</span>
      </Button>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-lg p-6 max-w-md w-full mx-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-display font-bold text-[var(--text-primary)]">
                Keyboard Shortcuts
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-[var(--bg-elevated)] rounded transition-colors"
              >
                <X className="w-5 h-5 text-[var(--text-secondary)]" />
              </button>
            </div>

            <div className="space-y-3">
              {shortcuts.map((shortcut, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-[var(--bg-elevated)] rounded"
                >
                  <span className="text-sm text-[var(--text-secondary)]">
                    {shortcut.description}
                  </span>
                  <div className="flex items-center gap-1">
                    {shortcut.keys.map((key, i) => (
                      <span key={i} className="flex items-center gap-1">
                        <kbd className="px-2 py-1 text-xs font-mono bg-[var(--bg-primary)] border border-[var(--border)] rounded shadow-sm">
                          {key}
                        </kbd>
                        {i < shortcut.keys.length - 1 && (
                          <span className="text-[var(--text-muted)]">+</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs text-[var(--text-muted)] text-center">
              Press <kbd className="px-1 py-0.5 bg-[var(--bg-elevated)] border border-[var(--border)] rounded text-xs">Esc</kbd> to close
            </p>
          </div>
        </div>
      )}
    </>
  );
}
