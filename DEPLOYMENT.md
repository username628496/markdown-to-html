# Deployment Guide for markdowntohtml.net

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git installed
- GitHub account (for Vercel deployment)
- Vercel account (free tier works)

## Step 1: Install Dependencies

```bash
cd /Users/peter/md-to-html
npm install
```

This will install all dependencies from `package.json`.

## Step 2: Test Locally

```bash
# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and verify:
- Homepage loads with converter tool
- Theme toggle works
- Conversion works (paste HTML, see Markdown output)
- Navigation links work
- Tool pages load correctly

## Step 3: Build for Production

```bash
# Create production build
npm run build

# Test production build locally
npm start
```

Check console for any build errors or warnings. Fix before deploying.

## Step 4: Deploy to Vercel

### Option A: GitHub + Vercel (Recommended)

1. **Initialize Git repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: markdowntohtml.net"
   ```

2. **Create GitHub repository**:
   - Go to [github.com/new](https://github.com/new)
   - Name: `markdowntohtml` (or any name)
   - Don't initialize with README (you already have one)
   - Create repository

3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/markdowntohtml.git
   git branch -M main
   git push -u origin main
   ```

4. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New..." → "Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings:
     - Framework Preset: Next.js
     - Build Command: `next build`
     - Output Directory: `.next`
     - Install Command: `npm install`
   - Click "Deploy"

5. **Wait for deployment** (usually 2-3 minutes)

### Option B: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? markdowntohtml
# - Directory? ./
# - Override settings? No

# Deploy to production
vercel --prod
```

## Step 5: Configure Custom Domain

### In Vercel Dashboard:

1. Go to your project → Settings → Domains
2. Add domain: `markdowntohtml.net`
3. Vercel provides DNS records (usually A and CNAME records)

### At Your Domain Registrar:

1. Log in to your domain registrar (Namecheap, GoDaddy, etc.)
2. Go to DNS settings for `markdowntohtml.net`
3. Add the records Vercel provided:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21 (Vercel's IP)

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
4. Save changes
5. Wait for DNS propagation (5 minutes to 48 hours, usually 15 minutes)

### Verify:

```bash
# Check if DNS has propagated
nslookup markdowntohtml.net

# Or visit in browser
https://markdowntohtml.net
```

## Step 6: Set Environment Variables (Optional)

In Vercel Dashboard → Settings → Environment Variables:

1. **NEXT_PUBLIC_SITE_URL**
   - Value: `https://markdowntohtml.net`
   - Environments: Production, Preview

2. **NEXT_PUBLIC_GA_ID** (if using Google Analytics)
   - Value: Your GA4 ID (e.g., `G-XXXXXXXXXX`)
   - Environments: Production only

After adding variables, redeploy:
```bash
vercel --prod
```

## Step 7: Verify SEO Setup

### Test Sitemap:
Visit `https://markdowntohtml.net/sitemap.xml`
Should show all pages.

### Test Robots.txt:
Visit `https://markdowntohtml.net/robots.txt`
Should allow all and reference sitemap.

### Test Structured Data:
1. Go to [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Test URLs:
   - `https://markdowntohtml.net/html-to-markdown`
   - `https://markdowntohtml.net/markdown-to-html`
3. Should show WebApplication and FAQPage schemas

### Submit to Google Search Console:
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `markdowntohtml.net`
3. Verify ownership (via DNS TXT record or HTML file)
4. Submit sitemap: `https://markdowntohtml.net/sitemap.xml`

## Step 8: Performance Check

### Run Lighthouse:
1. Open site in Chrome
2. Open DevTools (F12)
3. Go to Lighthouse tab
4. Select: Performance, Accessibility, SEO
5. Click "Analyze page load"

**Target Scores:**
- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

### Common Issues:

**Low Performance?**
- Check image optimization
- Verify fonts are loading correctly
- Check for unused JavaScript

**Low SEO?**
- Verify all pages have meta descriptions
- Check canonical URLs
- Verify structured data

## Troubleshooting

### Build Fails on Vercel

**Error: "Module not found"**
```bash
# Locally, delete node_modules and reinstall
rm -rf node_modules
npm install
npm run build
```

**TypeScript errors**
```bash
# Check for type errors locally
npx tsc --noEmit
```

### Page Not Loading

**404 on tool pages**
- Verify file structure matches route
- Check `app/html-to-markdown/page.tsx` exists
- Rebuild: `vercel --prod`

**Theme not persisting**
- Check localStorage in browser DevTools
- Verify ThemeProvider wraps all content
- Check for JavaScript errors in console

### Conversion Not Working

**"Failed to convert"**
- Open browser console
- Check for library import errors
- Verify `turndown` and `marked` are installed:
  ```bash
  npm list turndown marked
  ```

### URL Fetching Fails

**CORS errors**
- Verify API route exists: `app/api/fetch-url/route.ts`
- Check Vercel Functions logs in dashboard
- Test API route directly: `POST /api/fetch-url` with `{"url": "..."}`

## Monitoring

### Vercel Analytics (Free)
Already included, view in Vercel Dashboard → Analytics

### Google Analytics (Optional)
1. Create GA4 property
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to Vercel environment variables as `NEXT_PUBLIC_GA_ID`
4. Add script to `app/layout.tsx`:
```tsx
{process.env.NEXT_PUBLIC_GA_ID && (
  <>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `,
      }}
    />
  </>
)}
```

## Post-Deployment Checklist

- [ ] Site loads at `https://markdowntohtml.net`
- [ ] SSL certificate is active (https)
- [ ] All pages accessible (/, /tools, /about, /blog, etc.)
- [ ] Converter tool works (HTML ↔ Markdown)
- [ ] File upload works
- [ ] URL fetching works
- [ ] Copy/download buttons work
- [ ] Theme toggle works
- [ ] Mobile responsive (test on phone)
- [ ] Sitemap accessible and complete
- [ ] Robots.txt accessible
- [ ] Google Search Console verified
- [ ] Sitemap submitted to Google
- [ ] Lighthouse scores meet targets
- [ ] All internal links work
- [ ] All external links work (if any)

## Updating the Site

```bash
# Make changes locally
git add .
git commit -m "Description of changes"
git push origin main

# Vercel auto-deploys on push to main
# Or manually trigger:
vercel --prod
```

## Support

If you encounter issues:
1. Check Vercel deployment logs
2. Check browser console for errors
3. Review Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
4. Review Vercel documentation: [vercel.com/docs](https://vercel.com/docs)

---

🎉 Your site is now live at markdowntohtml.net!
