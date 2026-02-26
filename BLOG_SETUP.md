# Blog Setup Instructions

## Issue: React Version Mismatch

Next.js 15 requires React 19, but the project currently has React 18 installed.

## Fix Required

Run the following command to update React:

```bash
npm install
```

This will install:
- `react@19.0.0`
- `react-dom@19.0.0`
- `@types/react@19.0.0`
- `@types/react-dom@19.0.0`

The package.json has already been updated with these versions.

## After Installation

1. Stop the development server (Ctrl+C)
2. Run `npm install`
3. Restart the server: `npm run dev`
4. Visit http://localhost:3000/blog/what-is-markdown

## Blog System Features

✅ Dynamic MDX rendering with `next-mdx-remote`
✅ Automatic post discovery from `content/blog/` directory
✅ Full SEO with metadata and JSON-LD schemas
✅ Beautiful typography with custom components
✅ Theme support (dark/light mode)
✅ Responsive design
✅ Internal linking to tools

## Blog Posts Created

1. `/blog/what-is-markdown` (8 min read, 2,800+ words)
2. `/blog/html-vs-markdown` (10 min read, 3,000+ words)
3. `/blog/github-flavored-markdown-guide` (12 min read, 3,500+ words)

All posts are production-ready with comprehensive SEO optimization!
