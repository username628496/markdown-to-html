# Quick Start Guide

Get markdowntohtml.net running locally in 5 minutes.

## 1. Install Dependencies

```bash
npm install
```

## 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 3. Project Overview

### Key Files

- `app/page.tsx` - Homepage with main converter
- `components/tool/ConverterTool.tsx` - Main converter component
- `lib/converter.ts` - Conversion logic (HTML ↔ Markdown)
- `app/globals.css` - Design system (colors, fonts, animations)
- `tailwind.config.ts` - Tailwind configuration

### File Structure

```
app/
├── page.tsx                    # Homepage
├── layout.tsx                  # Root layout
├── html-to-markdown/           # Tool page
├── markdown-to-html/           # Tool page
├── tools/                      # Tools directory
├── about/                      # About page
├── blog/                       # Blog index
├── convert/[platform]/         # SEO pages (WordPress, Notion, etc.)
└── api/fetch-url/              # API for URL fetching

components/
├── tool/                       # EditorPanel, Toolbar, etc.
├── ui/                         # Button, Toggle, Accordion
├── layout/                     # Header, Footer
├── home/                       # Hero, FeatureCards, FAQ
└── seo/                        # Schema components

lib/
├── converter.ts               # Conversion utilities
└── platforms.ts               # Platform data for SEO
```

## 4. Available Scripts

```bash
npm run dev          # Start development server (with Turbopack)
npm run build        # Create production build
npm start            # Start production server
npm run lint         # Run ESLint
```

## 5. Making Changes

### Add a New Tool Page

1. Create `app/your-tool/page.tsx`:
```tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your Tool Name',
  description: 'Tool description',
};

export default function YourToolPage() {
  return (
    <div className="container py-12">
      <h1>Your Tool</h1>
      {/* Your tool component */}
    </div>
  );
}
```

2. Add to tools list in `app/tools/page.tsx`

3. Add to sitemap in `app/sitemap.ts`

### Customize Colors

Edit `app/globals.css`:

```css
:root {
  --accent: #YOUR_COLOR;  /* Light theme accent */
}

.dark {
  --accent: #YOUR_COLOR;  /* Dark theme accent */
}
```

### Customize Fonts

Edit `app/layout.tsx`:

```tsx
import { Your_Font } from 'next/font/google';

const yourFont = Your_Font({
  subsets: ['latin'],
  variable: '--font-your-name',
});
```

Then update `tailwind.config.ts` and use in CSS.

## 6. Common Tasks

### Add FAQ to a Page

```tsx
import { FAQSchema } from '@/components/seo/FAQSchema';

const faqs = [
  {
    question: 'Your question?',
    answer: 'Your answer.',
  },
];

export default function Page() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      {/* Page content */}
    </>
  );
}
```

### Add a New Platform for SEO

Edit `lib/platforms.ts`:

```tsx
{
  slug: 'your-platform',
  name: 'Your Platform',
  description: 'Description here',
  tips: ['Tip 1', 'Tip 2'],
  useCases: ['Use case 1', 'Use case 2'],
}
```

Page auto-generates at `/convert/your-platform-to-markdown`

### Modify Conversion Options

Edit `lib/converter.ts`:

```tsx
export interface ConversionOptions {
  headingStyle: 'atx' | 'setext';
  gfmSupport: boolean;
  yourNewOption: boolean;  // Add here
}
```

Then update `OptionsPanel.tsx` to add UI control.

## 7. Testing

### Manual Testing

1. Test conversions:
   - Paste HTML → Check Markdown output
   - Paste Markdown → Check HTML output
   - Use sample data button

2. Test file upload:
   - Upload `.html` file
   - Upload `.md` file

3. Test URL fetch:
   - Try `https://example.com`
   - Test error handling

4. Test theme:
   - Toggle dark/light
   - Refresh page (should persist)

5. Test mobile:
   - Resize browser to < 768px
   - Check layout stacks vertically

### Automated Testing (Future)

```bash
# Add testing libraries
npm install --save-dev @testing-library/react @testing-library/jest-dom jest

# Create tests in __tests__ folder
```

## 8. Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # Optional
```

Access in code:
```tsx
process.env.NEXT_PUBLIC_SITE_URL
```

## 9. Troubleshooting

### "Module not found" error

```bash
rm -rf node_modules .next
npm install
```

### TypeScript errors

```bash
# Check types
npx tsc --noEmit

# Restart TypeScript server in VS Code:
# Cmd/Ctrl + Shift + P → "TypeScript: Restart TS Server"
```

### Theme not working

Check browser console. Make sure:
1. `ThemeProvider` wraps app in `layout.tsx`
2. `'use client'` directive at top of client components
3. No JavaScript errors

### Conversion not working

1. Check browser console for errors
2. Verify libraries installed: `npm list turndown marked`
3. Check `lib/converter.ts` imports

### Port already in use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

## 10. Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete deployment instructions.

Quick deploy to Vercel:

```bash
npm i -g vercel
vercel login
vercel
```

## 11. Resources

- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Turndown**: [github.com/mixmark-io/turndown](https://github.com/mixmark-io/turndown)
- **Marked**: [marked.js.org](https://marked.js.org)
- **CodeMirror**: [codemirror.net](https://codemirror.net)

## 12. Need Help?

1. Check [README.md](./README.md) for full documentation
2. Check [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment help
3. Open an issue on GitHub
4. Email: hello@markdowntohtml.net

---

Happy coding! 🚀
