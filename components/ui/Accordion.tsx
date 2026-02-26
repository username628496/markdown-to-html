'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function Accordion({ title, children, defaultOpen = false }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-[var(--border)] rounded">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] transition-colors"
      >
        <span className="font-medium text-[var(--text-primary)]">{title}</span>
        <ChevronDown
          className={`w-5 h-5 text-[var(--text-secondary)] transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="p-4 border-t border-[var(--border)] bg-[var(--bg-surface)] animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
}
