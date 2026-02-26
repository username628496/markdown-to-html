# markdowntohtml.net

A production-ready Next.js 15 web application for converting HTML ↔ Markdown with SEO-first architecture.

## 🚀 Features

- **Bidirectional Conversion**: HTML to Markdown and Markdown to HTML
- **Client-Side Processing**: All conversions happen in the browser - your data never leaves your device
- **GitHub Flavored Markdown**: Full GFM support including tables, task lists, and strikethrough
- **Live Preview**: Toggle between raw code and rendered preview
- **Multiple Input Methods**: Paste, upload files, or fetch from URLs
- **SEO Optimized**: Comprehensive metadata, JSON-LD schemas, and programmatic SEO pages
- **Dark/Light Theme**: System preference detection with manual toggle
- **Fully Responsive**: Works on desktop, tablet, and mobile

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Conversion Libraries**:
  - `turndown` + `turndown-plugin-gfm` for HTML → Markdown
  - `marked` for Markdown → HTML
- **Editor**: CodeMirror 6
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗 Project Structure

```
.
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout with fonts & theme
│   ├── page.tsx                 # Homepage with main converter
│   ├── html-to-markdown/        # Dedicated HTML→MD page
│   ├── markdown-to-html/        # Dedicated MD→HTML page
│   ├── tools/                   # Tools directory page
│   ├── blog/                    # Blog index
│   ├── about/                   # About page
│   ├── convert/[platform]/      # Programmatic SEO pages
│   ├── api/fetch-url/           # API route for URL fetching
│   ├── sitemap.ts              # Dynamic sitemap
│   └── robots.ts               # Robots.txt
├── components/
│   ├── layout/                  # Header, Footer
│   ├── ui/                      # Button, Toggle, Accordion, etc.
│   ├── tool/                    # Tool-specific components
│   ├── home/                    # Homepage sections
│   ├── seo/                     # SEO schema components
│   └── providers/               # Theme provider
├── lib/
│   ├── converter.ts            # Conversion utilities
│   └── platforms.ts            # Platform data for SEO pages
├── public/                      # Static assets
└── styles/
    └── globals.css             # Global styles & CSS variables
```

## 🎨 Design System

### Colors
- **Dark Theme** (default): Dark backgrounds with neon accent (#E8FF5A)
- **Light Theme**: Warm cream backgrounds (#F5F2EC) with dark accent

### Typography
- **Mono**: JetBrains Mono (code, editors, logo)
- **Display**: Fraunces (headings)
- **Body**: DM Sans (body text, UI)

### Principles
- Sharp corners (4px border radius)
- Generous spacing (24px minimum padding)
- Subtle animations
- No gratuitous gradients

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://markdowntohtml.net
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Fonts

Fonts are loaded via `next/font/google` in `app/layout.tsx` with:
- `display: swap` for better performance
- Automatic subsetting
- Self-hosted via Next.js

## 🚢 Deployment

### Vercel (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/markdowntohtml.git
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Framework preset: Next.js
   - Build command: `next build`
   - Output directory: `.next`
   - Install command: `npm install`

3. **Set Environment Variables** in Vercel dashboard:
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_GA_ID` (if using Google Analytics)

4. **Configure Custom Domain**:
   - Add `markdowntohtml.net` in Vercel project settings
   - Update DNS records as instructed by Vercel
   - Add `www.markdowntohtml.net` as an alias

### Self-Hosting

```bash
# Build the application
npm run build

# Start production server
npm start

# Or use PM2 for process management
npm install -g pm2
pm2 start npm --name "markdowntohtml" -- start
```

## 📊 SEO Implementation

### Metadata
Every page includes:
- Title, description, keywords
- Open Graph tags
- Twitter Card tags
- Canonical URLs

### Structured Data (JSON-LD)
- WebApplication schema on tool pages
- FAQPage schema for FAQ sections
- BreadcrumbList schema on nested pages
- Organization schema in root layout

### Sitemap
Auto-generated at `/sitemap.xml` including:
- Static pages
- Tool pages
- Blog posts
- Programmatic SEO pages (10+ platforms)

### Performance Targets
- Lighthouse Performance: 95+
- Lighthouse SEO: 100
- LCP: < 2.5s
- CLS: < 0.1
- INP: < 200ms

## 🔐 Privacy & Security

- **100% Client-Side**: All conversions use JavaScript in the browser
- **No Server Processing**: HTML/Markdown never sent to servers
- **CORS Bypass API**: `/api/fetch-url` only for user-requested URL fetches
- **Security Headers**: CSP, X-Frame-Options, etc. configured in `next.config.js`
- **No Tracking Abuse**: Minimal, privacy-respecting analytics

## 📝 Content Management

### Adding Blog Posts
Blog posts are currently placeholders. To implement:
1. Use `next-mdx-remote` or `contentlayer`
2. Create MDX files in `content/blog/`
3. Add frontmatter: title, description, publishedAt, keywords
4. Update `app/blog/page.tsx` to read from file system

### Adding Platforms
To add more programmatic SEO pages:
1. Edit `lib/platforms.ts`
2. Add new platform object with slug, name, description, tips, useCases
3. Pages auto-generate via `generateStaticParams()`

## 🧪 Testing Checklist

- [ ] Test HTML → Markdown conversion with complex HTML
- [ ] Test Markdown → HTML with GFM features (tables, task lists)
- [ ] Test file upload (.html, .md files)
- [ ] Test URL fetching (valid URLs, error handling)
- [ ] Test copy to clipboard functionality
- [ ] Test download as file
- [ ] Test theme toggle (dark ↔ light)
- [ ] Test mobile responsiveness
- [ ] Test all conversion options (heading style, GFM toggles)
- [ ] Test swap direction button
- [ ] Verify all links work (header, footer, internal)
- [ ] Check Lighthouse scores (Performance, SEO, Accessibility)
- [ ] Verify structured data with Google Rich Results Test
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)

## 🎯 Roadmap

- [ ] Implement actual blog system with MDX
- [ ] Build Markdown Editor with toolbar
- [ ] Build Markdown Table Generator
- [ ] Build HTML to Text converter
- [ ] Add keyboard shortcuts
- [ ] Add syntax highlighting themes
- [ ] Add export to different formats (PDF, DOCX)
- [ ] Add Markdown linting
- [ ] Add collaborative editing (stretch goal)

## 📄 License

MIT License - feel free to use for your own projects.

## 🤝 Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📧 Contact

Questions or feedback? Email: hello@markdowntohtml.net

---

Built with ❤️ for developers and content creators.
