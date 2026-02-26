import TurndownService from 'turndown';
import { gfm } from 'turndown-plugin-gfm';
import { marked } from 'marked';

export interface ConversionOptions {
  headingStyle: 'atx' | 'setext';
  gfmSupport: boolean;
  taskLists: boolean;
  tables: boolean;
  strikethrough: boolean;
}

export const defaultOptions: ConversionOptions = {
  headingStyle: 'atx',
  gfmSupport: true,
  taskLists: true,
  tables: true,
  strikethrough: true,
};

/**
 * Convert HTML to Markdown
 */
export function htmlToMarkdown(html: string, options: ConversionOptions = defaultOptions): string {
  const turndownService = new TurndownService({
    headingStyle: options.headingStyle,
    codeBlockStyle: 'fenced',
    emDelimiter: '*',
    bulletListMarker: '-',
  });

  // Add GFM support if enabled
  if (options.gfmSupport) {
    turndownService.use(gfm);
  }

  try {
    return turndownService.turndown(html);
  } catch (error) {
    console.error('Error converting HTML to Markdown:', error);
    throw new Error('Failed to convert HTML to Markdown');
  }
}

/**
 * Convert Markdown to HTML
 */
export function markdownToHtml(markdown: string, options: ConversionOptions = defaultOptions): string {
  // Configure marked options
  marked.setOptions({
    gfm: options.gfmSupport,
    breaks: true,
  });

  try {
    return marked.parse(markdown) as string;
  } catch (error) {
    console.error('Error converting Markdown to HTML:', error);
    throw new Error('Failed to convert Markdown to HTML');
  }
}

/**
 * Calculate text statistics
 */
export interface TextStats {
  characters: number;
  words: number;
  lines: number;
}

export function calculateStats(text: string): TextStats {
  const lines = text.split('\n').length;
  const characters = text.length;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;

  return {
    characters,
    words,
    lines,
  };
}

/**
 * Strip HTML tags to plain text
 */
export function htmlToText(html: string): string {
  // Create a temporary div to parse HTML
  if (typeof window !== 'undefined') {
    const temp = document.createElement('div');
    temp.innerHTML = html;
    return temp.textContent || temp.innerText || '';
  }

  // Server-side: simple regex-based stripping
  return html.replace(/<[^>]*>/g, '');
}

/**
 * Sample content for demo purposes
 */
export const sampleHTML = `<h1>Welcome to markdowntohtml.net</h1>
<p>This is a <strong>free</strong> and <em>private</em> HTML to Markdown converter.</p>

<h2>Features</h2>
<ul>
  <li>GitHub Flavored Markdown support</li>
  <li>Tables, code blocks, and task lists</li>
  <li>Client-side processing</li>
</ul>

<h3>Code Example</h3>
<pre><code class="language-javascript">function greet(name) {
  return \`Hello, \${name}!\`;
}
</code></pre>

<blockquote>
  <p>Your data never leaves your browser. Everything is processed locally.</p>
</blockquote>`;

export const sampleMarkdown = `# Welcome to markdowntohtml.net

This is a **free** and *private* Markdown to HTML converter.

## Features

- GitHub Flavored Markdown support
- Tables, code blocks, and task lists
- Client-side processing

### Code Example

\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

> Your data never leaves your browser. Everything is processed locally.

## Table Example

| Feature | Supported |
|---------|-----------|
| Tables | ✓ |
| Task Lists | ✓ |
| Strikethrough | ✓ |

## Task List

- [x] HTML to Markdown
- [x] Markdown to HTML
- [ ] Try it yourself!
`;
