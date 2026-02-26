'use client';

import { Accordion } from '@/components/ui/Accordion';
import { Toggle } from '@/components/ui/Toggle';
import { ConversionOptions } from '@/lib/converter';

interface OptionsPanelProps {
  options: ConversionOptions;
  onChange: (options: ConversionOptions) => void;
}

export function OptionsPanel({ options, onChange }: OptionsPanelProps) {
  const updateOption = <K extends keyof ConversionOptions>(
    key: K,
    value: ConversionOptions[K]
  ) => {
    onChange({ ...options, [key]: value });
  };

  return (
    <Accordion title="Conversion Options" defaultOpen={false}>
      <div className="space-y-6">
        {/* Heading Style */}
        <div>
          <label className="block text-sm font-medium text-[var(--text-primary)] mb-3">
            Heading Style
          </label>
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="headingStyle"
                value="atx"
                checked={options.headingStyle === 'atx'}
                onChange={() => updateOption('headingStyle', 'atx')}
                className="w-4 h-4 text-[var(--accent)] border-[var(--border)] focus:ring-[var(--accent)] focus:ring-2"
              />
              <span className="text-sm text-[var(--text-secondary)]">
                ATX <span className="font-mono text-xs">(# Heading)</span>
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="headingStyle"
                value="setext"
                checked={options.headingStyle === 'setext'}
                onChange={() => updateOption('headingStyle', 'setext')}
                className="w-4 h-4 text-[var(--accent)] border-[var(--border)] focus:ring-[var(--accent)] focus:ring-2"
              />
              <span className="text-sm text-[var(--text-secondary)]">
                Setext <span className="font-mono text-xs">(Heading<br />======)</span>
              </span>
            </label>
          </div>
        </div>

        {/* Toggle Options */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-[var(--text-primary)]">
                GitHub Flavored Markdown (GFM)
              </label>
              <p className="text-xs text-[var(--text-muted)] mt-1">
                Enable GitHub-specific extensions
              </p>
            </div>
            <Toggle
              enabled={options.gfmSupport}
              onChange={(enabled) => updateOption('gfmSupport', enabled)}
              label="GFM Support"
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-[var(--text-primary)]">
                Task Lists
              </label>
              <p className="text-xs text-[var(--text-muted)] mt-1">
                Support for - [ ] and - [x] checkboxes
              </p>
            </div>
            <Toggle
              enabled={options.taskLists}
              onChange={(enabled) => updateOption('taskLists', enabled)}
              label="Task Lists"
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-[var(--text-primary)]">
                Tables
              </label>
              <p className="text-xs text-[var(--text-muted)] mt-1">
                Convert HTML tables to Markdown tables
              </p>
            </div>
            <Toggle
              enabled={options.tables}
              onChange={(enabled) => updateOption('tables', enabled)}
              label="Tables"
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-[var(--text-primary)]">
                Strikethrough
              </label>
              <p className="text-xs text-[var(--text-muted)] mt-1">
                Support for ~~strikethrough~~ text
              </p>
            </div>
            <Toggle
              enabled={options.strikethrough}
              onChange={(enabled) => updateOption('strikethrough', enabled)}
              label="Strikethrough"
            />
          </div>
        </div>
      </div>
    </Accordion>
  );
}
