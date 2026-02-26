'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Plus, Trash2, Copy, Check } from 'lucide-react';

interface Cell {
  value: string;
}

export function TableGeneratorTool() {
  const [rows, setRows] = useState<Cell[][]>([
    [{ value: 'Header 1' }, { value: 'Header 2' }, { value: 'Header 3' }],
    [{ value: 'Cell 1' }, { value: 'Cell 2' }, { value: 'Cell 3' }],
    [{ value: 'Cell 4' }, { value: 'Cell 5' }, { value: 'Cell 6' }],
  ]);
  const [copySuccess, setCopySuccess] = useState(false);

  const addRow = () => {
    const newRow = rows[0].map(() => ({ value: '' }));
    setRows([...rows, newRow]);
  };

  const addColumn = () => {
    setRows(rows.map(row => [...row, { value: '' }]));
  };

  const deleteRow = (rowIndex: number) => {
    if (rows.length <= 2) {
      alert('Table must have at least a header and one row');
      return;
    }
    setRows(rows.filter((_, i) => i !== rowIndex));
  };

  const deleteColumn = (colIndex: number) => {
    if (rows[0].length <= 1) {
      alert('Table must have at least one column');
      return;
    }
    setRows(rows.map(row => row.filter((_, i) => i !== colIndex)));
  };

  const updateCell = (rowIndex: number, colIndex: number, value: string) => {
    const newRows = [...rows];
    newRows[rowIndex][colIndex].value = value;
    setRows(newRows);
  };

  const generateMarkdown = () => {
    if (rows.length === 0) return '';

    const colWidths = rows[0].map((_, colIndex) => {
      const maxLength = Math.max(
        ...rows.map(row => row[colIndex].value.length),
        3
      );
      return maxLength;
    });

    let markdown = '|';
    rows[0].forEach((cell, i) => {
      markdown += ` ${cell.value.padEnd(colWidths[i])} |`;
    });
    markdown += '\n|';
    colWidths.forEach(width => {
      markdown += ` ${'-'.repeat(width)} |`;
    });
    markdown += '\n';

    for (let i = 1; i < rows.length; i++) {
      markdown += '|';
      rows[i].forEach((cell, colIndex) => {
        markdown += ` ${cell.value.padEnd(colWidths[colIndex])} |`;
      });
      markdown += '\n';
    }

    return markdown.trim();
  };

  const handleCopy = async () => {
    const markdown = generateMarkdown();
    try {
      await navigator.clipboard.writeText(markdown);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
      alert('Failed to copy to clipboard');
    }
  };

  const handleDownload = () => {
    const markdown = generateMarkdown();
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'table.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const markdown = generateMarkdown();

  return (
    <div className="space-y-6">
      {/* Table Editor */}
      <div className="border border-[var(--border)] rounded bg-[var(--bg-surface)] p-6">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="w-12"></th>
                {rows[0]?.map((_, colIndex) => (
                  <th key={colIndex} className="p-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteColumn(colIndex)}
                      className="text-[var(--error)] hover:bg-[var(--error)] hover:bg-opacity-10"
                    >
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </th>
                ))}
                <th className="p-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={addColumn}
                    title="Add column"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td className="p-2 text-center">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteRow(rowIndex)}
                      className="text-[var(--error)] hover:bg-[var(--error)] hover:bg-opacity-10"
                      disabled={rows.length <= 2}
                    >
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </td>
                  {row.map((cell, colIndex) => (
                    <td key={colIndex} className="p-2">
                      <input
                        type="text"
                        value={cell.value}
                        onChange={(e) =>
                          updateCell(rowIndex, colIndex, e.target.value)
                        }
                        className={`
                          w-full px-3 py-2 border rounded
                          ${rowIndex === 0 ? 'font-semibold' : ''}
                          bg-[var(--bg-elevated)]
                          border-[var(--border)]
                          text-[var(--text-primary)]
                          focus:border-[var(--accent)]
                          focus:outline-none
                        `}
                        placeholder={rowIndex === 0 ? 'Header' : 'Cell'}
                      />
                    </td>
                  ))}
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 pt-4 border-t border-[var(--border)] flex justify-center">
          <Button variant="secondary" onClick={addRow}>
            <Plus className="w-4 h-4 mr-2" />
            Add Row
          </Button>
        </div>
      </div>

      {/* Markdown Output */}
      <div className="border border-[var(--border)] rounded bg-[var(--bg-surface)] overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-[var(--border)] bg-[var(--bg-elevated)]">
          <h3 className="font-semibold text-[var(--text-primary)]">Markdown Output</h3>
          <div className="flex gap-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={handleCopy}
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
              onClick={handleDownload}
            >
              Download
            </Button>
          </div>
        </div>
        <div className="p-6">
          <pre className="font-mono text-sm text-[var(--text-primary)] whitespace-pre overflow-x-auto">
            {markdown}
          </pre>
        </div>
      </div>
    </div>
  );
}
