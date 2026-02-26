'use client';

import { useEffect, useRef } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import { markdown } from '@codemirror/lang-markdown';
import { oneDark } from '@codemirror/theme-one-dark';
import { EditorView } from '@codemirror/view';

interface EditorPanelProps {
  value: string;
  onChange: (value: string) => void;
  language: 'html' | 'markdown';
  readOnly?: boolean;
  placeholder?: string;
}

// Light theme for CodeMirror
const lightTheme = EditorView.theme({
  '&': {
    backgroundColor: '#FFFFFF',
    color: '#1A1A1A',
  },
  '.cm-content': {
    caretColor: '#1A1A1A',
  },
  '.cm-cursor, .cm-dropCursor': {
    borderLeftColor: '#1A1A1A',
  },
  '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection': {
    backgroundColor: '#E0DDD6',
  },
  '.cm-activeLine': {
    backgroundColor: '#F5F2EC',
  },
  '.cm-gutters': {
    backgroundColor: '#F5F2EC',
    color: '#666666',
    border: 'none',
  },
  '.cm-activeLineGutter': {
    backgroundColor: '#E0DDD6',
  },
}, { dark: false });

export function EditorPanel({
  value,
  onChange,
  language,
  readOnly = false,
  placeholder,
}: EditorPanelProps) {
  const isDark = useRef(false);

  useEffect(() => {
    // Check if dark mode is active
    isDark.current = document.documentElement.classList.contains('dark');
  }, []);

  const extensions = [
    language === 'html' ? html() : markdown(),
    EditorView.lineWrapping,
  ];

  return (
    <div className="h-full w-full border border-[var(--border)] rounded overflow-hidden">
      <CodeMirror
        value={value}
        height="100%"
        minHeight="400px"
        extensions={extensions}
        onChange={onChange}
        theme={isDark.current ? oneDark : lightTheme}
        readOnly={readOnly}
        placeholder={placeholder}
        basicSetup={{
          lineNumbers: true,
          highlightActiveLineGutter: true,
          highlightActiveLine: true,
          foldGutter: true,
          dropCursor: true,
          indentOnInput: true,
          bracketMatching: true,
          closeBrackets: true,
          autocompletion: true,
          rectangularSelection: true,
          highlightSelectionMatches: true,
        }}
        className="font-mono text-sm"
      />
    </div>
  );
}
