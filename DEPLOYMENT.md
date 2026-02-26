# Deployment Guide — markdowntohtml.net

## ✅ Current Status

- **GitHub Repository:** https://github.com/username628496/markdown-to-html
- **Code Status:** All code committed and pushed
- **Dependencies:** React 19, Next.js 15
- **Analytics:** Google Analytics 4 (G-9D9YV37WQP) + Search Console verification
- **Ready to Deploy:** ✅ YES

---

## Prerequisites

- Vercel account (free tier works) — Sign up at [vercel.com](https://vercel.com)
- GitHub repository already pushed ✅

---

## Deploy to Vercel — 3 Methods

### Method 1: Vercel CLI (Fastest — 2 minutes)

**Step 1: Install Vercel CLI**
```bash
npm install -g vercel
```

**Step 2: Login**
```bash
vercel login
```
This opens your browser to authenticate.

**Step 3: Deploy**
```bash
cd /Users/peter/md-to-html
vercel --prod
```

**Output:**
```
🔍 Inspect: https://vercel.com/username/markdown-to-html/...
✅ Production: https://markdown-to-html-username.vercel.app [2m]
```

**Done!** Your site is live.

---

### Method 2: Vercel Web Dashboard (Recommended for first-time)

**Step 1: Import GitHub Repository**

1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Search for: `username628496/markdown-to-html`
4. Click "Import"

**Step 2: Configure Project**

Vercel auto-detects Next.js settings:
- ✅ Framework Preset: **Next.js**
- ✅ Build Command: `next build`
- ✅ Output Directory: `.next`
- ✅ Install Command: `npm install`
- ✅ Node.js Version: 18.x (auto)

**No changes needed!**

**Step 3: Deploy**

Click "Deploy" button. Wait 2-3 minutes.

**Step 4: Get Your URL**

You'll receive:
- Production URL: `https://markdown-to-html-*.vercel.app`
- Deployment logs (check if any errors)

---

### Method 3: Vercel GitHub Integration (Auto-deploy on push)

**Step 1: Install Vercel GitHub App**

1. Go to https://vercel.com/dashboard
2. Click "Add New..." → "Project"
3. Click "Import Git Repository"
4. Authorize Vercel to access your GitHub account
5. Select repository: `username628496/markdown-to-html`

**Step 2: Configure & Deploy**

Same as Method 2 — click "Deploy"

**Step 3: Automatic Deployments Enabled**

Now every `git push` to `main` automatically deploys to production.

**Preview Deployments:**
- Every pull request gets a unique preview URL
- Test changes before merging

---

## Add Custom Domain (Optional)

### Step 1: Add Domain in Vercel

```bash
# Via CLI
vercel domains add markdowntohtml.net

# Or via Dashboard:
# Project → Settings → Domains → Add Domain
```

### Step 2: Configure DNS

**At your domain registrar (Namecheap, GoDaddy, etc.):**

Add these DNS records:

```
Type: A
Name: @
Value: 76.76.21.21
TTL: Auto

Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: Auto
```

### Step 3: Wait for DNS Propagation

- Usually: 5-15 minutes
- Maximum: 48 hours

**Check status:**
```bash
nslookup markdowntohtml.net
```

### Step 4: SSL Certificate

Vercel automatically provisions SSL certificate (Let's Encrypt).
- No action needed
- Takes 1-2 minutes after DNS propagates

---

## Post-Deployment Verification

### 1. Test All Pages

**Visit these URLs (replace with your Vercel URL or custom domain):**

- [ ] Homepage: `https://your-site.vercel.app/`
- [ ] HTML to Markdown: `https://your-site.vercel.app/html-to-markdown`
- [ ] Markdown to HTML: `https://your-site.vercel.app/markdown-to-html`
- [ ] Markdown Preview: `https://your-site.vercel.app/markdown-preview`
- [ ] Table Generator: `https://your-site.vercel.app/markdown-table-generator`
- [ ] HTML to Text: `https://your-site.vercel.app/html-to-text`
- [ ] Tools Page: `https://your-site.vercel.app/tools`
- [ ] Blog: `https://your-site.vercel.app/blog`
- [ ] Blog Post: `https://your-site.vercel.app/blog/what-is-markdown`
- [ ] About: `https://your-site.vercel.app/about`

### 2. Test Core Functionality

- [ ] **HTML → Markdown conversion** works
- [ ] **Markdown → HTML conversion** works
- [ ] **Copy to clipboard** button works
- [ ] **Download file** button works
- [ ] **Theme toggle** (light/dark) works
- [ ] **Mobile navigation** (hamburger menu) works
- [ ] **Logo** displays correctly
- [ ] **Stats bar** shows counts correctly (mobile + desktop)
- [ ] **Blog posts** render with proper formatting

### 3. Verify Google Analytics

**Check GA4 Tracking:**

1. Open your deployed site
2. Open DevTools (F12) → Network tab
3. Filter for: `collect`
4. Navigate between pages
5. You should see requests to `https://www.google-analytics.com/g/collect`

**Check Realtime:**

1. Go to https://analytics.google.com
2. Select your property (markdowntohtml.net)
3. Click "Realtime" in left sidebar
4. Open your site in another tab
5. You should see "1 user active now"

**If not working:**
- Wait 24-48 hours for data to populate
- Check ad blocker is disabled
- Test in incognito mode

### 4. Submit to Google Search Console

**Verify Ownership:**

1. Go to https://search.google.com/search-console
2. Click "Add Property"
3. Enter: `https://markdowntohtml.net` (or your domain)
4. Choose verification method: **HTML tag**
5. Verification code is already in your `app/layout.tsx`:
   ```tsx
   verification: {
     google: 'wGKDC__yIc3WN2lO1mNZ_P0K47W88drs1T08b36ZAyw',
   }
   ```
6. Click "Verify" — should succeed immediately

**Submit Sitemap:**

1. In Google Search Console → Sitemaps
2. Add new sitemap: `https://markdowntohtml.net/sitemap.xml`
3. Click "Submit"
4. Status should change to "Success"
5. Wait 24-48 hours for indexing to begin

### 5. Test SEO Meta Tags

**Open Graph Preview:**
- Go to https://www.opengraph.xyz
- Enter your site URL
- Check preview image and text

**Twitter Card Preview:**
- Go to https://cards-dev.twitter.com/validator
- Enter your site URL
- Check card renders correctly

**Structured Data:**
- Go to https://search.google.com/test/rich-results
- Test homepage URL
- Should show "WebSite" schema
- No errors

### 6. Performance Check

**PageSpeed Insights:**

1. Go to https://pagespeed.web.dev
2. Enter your site URL
3. Run test for **Mobile** and **Desktop**

**Expected Scores:**
- Performance: 90+ (Good)
- Accessibility: 95+ (Good)
- Best Practices: 95+ (Good)
- SEO: 100 (Perfect)

**Core Web Vitals:**
- LCP (Largest Contentful Paint): < 2.5s ✅
- FID (First Input Delay): < 100ms ✅
- CLS (Cumulative Layout Shift): < 0.1 ✅

### 7. Mobile Responsiveness

**Test on real devices or browser DevTools:**

Breakpoints to test:
- 375px (iPhone SE)
- 390px (iPhone 12/13/14)
- 768px (iPad portrait)
- 1024px (iPad landscape)
- 1440px (Desktop)

**Check:**
- [ ] Mobile navigation (hamburger) works
- [ ] Stats bar stacks vertically on mobile
- [ ] Logo and tagline display correctly
- [ ] All text is readable (not too small)
- [ ] Buttons are tappable (not too small)
- [ ] No horizontal scrolling

---

## Environment Variables (Optional)

Currently no environment variables needed. Everything runs client-side.

**If you need to add variables later:**

**Via Vercel Dashboard:**
1. Go to Project → Settings → Environment Variables
2. Add variable name and value
3. Select environments (Production, Preview, Development)
4. Click "Save"
5. Redeploy for changes to take effect

**Via CLI:**
```bash
vercel env add VARIABLE_NAME
# Enter value when prompted
```

---

## Troubleshooting

### Build Fails on Vercel

**Error: "Module not found: Can't resolve 'react'"**

**Solution:** Make sure package.json has React 19
```json
{
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  }
}
```

Then redeploy:
```bash
git add package.json package-lock.json
git commit -m "Update React to 19"
git push
```

**Error: TypeScript type errors**

**Solution:** Fix locally first
```bash
npm run build  # Check for errors locally
npx tsc --noEmit  # Type check without building
```

### Page Shows 404

**Blog posts not loading:**
- Check MDX files exist in `content/blog/`
- Verify frontmatter is valid YAML
- Check file extension is `.mdx` not `.md`

**Tool pages not loading:**
- Verify file exists: `app/[tool-name]/page.tsx`
- Check route name matches URL
- Redeploy: `vercel --prod`

### Google Analytics Not Tracking

**Check Script Loads:**
1. Open DevTools → Network tab
2. Filter: `gtag`
3. Should see `gtag/js?id=G-9D9YV37WQP` loaded

**If not loading:**
- Check ad blocker (disable for testing)
- Test in incognito mode
- Verify script in `app/layout.tsx` exists

**Data not showing:**
- Wait 24-48 hours for GA4 to populate
- Check Realtime view for immediate verification

### Theme Not Persisting

**Issue:** Theme resets on page reload

**Solution:**
1. Check localStorage in DevTools → Application tab
2. Should see `theme: "dark"` or `theme: "light"`
3. Verify ThemeProvider wraps app in `app/layout.tsx`

### Custom Domain Not Working

**DNS not propagated:**
- Wait 15-60 minutes
- Check with: `nslookup yourdomain.com`
- Verify DNS records at registrar

**SSL certificate pending:**
- Wait 5-10 minutes after DNS propagates
- Vercel auto-provisions Let's Encrypt cert
- Check status in Vercel Dashboard → Domains

---

## Monitoring & Maintenance

### Week 1: Initial Monitoring

**Daily checks:**
- [ ] Site is accessible
- [ ] No errors in Vercel logs
- [ ] Google Analytics showing data

**First week tasks:**
- [ ] Submit sitemap to Google Search Console
- [ ] Request indexing for homepage
- [ ] Check Coverage report in GSC (3-7 days)

### Monthly: Performance Review

**Google Search Console:**
- Check search queries (Performance tab)
- Monitor click-through rate (CTR)
- Fix any coverage errors
- Review Core Web Vitals

**Google Analytics:**
- Review top pages
- Check traffic sources
- Analyze user behavior
- Monitor bounce rate

**Performance:**
- Run PageSpeed Insights monthly
- Check Core Web Vitals don't regress
- Update dependencies: `npm update`

### Quarterly: Content Strategy

**SEO Review:**
- Write new blog posts (target new keywords)
- Update existing content
- Build backlinks
- Monitor competitor rankings

**Technical SEO:**
- Verify all pages indexed
- Check for broken links
- Update sitemap if needed
- Review structured data

---

## Continuous Deployment

**Auto-deploy on Git Push:**

Once connected to GitHub, Vercel automatically deploys:
- **Main branch → Production** (your live site)
- **Other branches → Preview URLs** (for testing)
- **Pull requests → Preview URLs** (for review)

**Workflow:**
```bash
# Create feature branch
git checkout -b feature/new-tool

# Make changes
# ... edit files ...

# Commit and push
git add .
git commit -m "Add new tool"
git push origin feature/new-tool

# Vercel creates preview URL automatically
# Example: https://markdown-to-html-git-feature-new-tool-username.vercel.app

# Create pull request on GitHub
# Review preview deployment
# Merge to main when ready
# Production automatically updates
```

---

## Useful Commands

**Deploy to production:**
```bash
vercel --prod
```

**View deployment logs:**
```bash
vercel logs
```

**List deployments:**
```bash
vercel ls
```

**Check domains:**
```bash
vercel domains ls
```

**Remove project (careful!):**
```bash
vercel remove markdown-to-html
```

---

## Next Steps After Deployment

### Immediate (Week 1)

1. **Verify Analytics Working**
   - Check GA4 Realtime view
   - Submit sitemap to GSC

2. **Create Missing Assets**
   - OG Image: `public/og-image.png` (1200x630px)
   - Include logo and tagline

3. **Create Legal Pages**
   - Privacy Policy: `app/privacy/page.tsx`
   - Terms of Service: `app/terms/page.tsx`

### Short-term (Month 1)

4. **Write More Blog Posts**
   - "Markdown Cheat Sheet for Developers"
   - "How to Convert WordPress to Markdown"
   - "Best Markdown Editors in 2026"

5. **Add Custom Events to GA4**
   - Track tool usage (which converter used most)
   - Track file downloads
   - Track copy/paste actions

### Long-term (Month 2+)

6. **SEO Optimization**
   - Monitor keyword rankings
   - Build backlinks
   - Write guest posts
   - Share on social media

7. **Feature Enhancements**
   - Add more conversion tools
   - Add templates library
   - Add keyboard shortcuts
   - Add syntax highlighting themes

---

## Success Metrics

### Week 1
- ✅ Site deployed and accessible
- ✅ No errors in production
- ✅ Analytics tracking verified
- ✅ Sitemap submitted

### Month 1
- 🎯 100+ unique visitors
- 🎯 10+ pages indexed in Google
- 🎯 All Core Web Vitals "Good"
- 🎯 Lighthouse score: 90+

### Month 3
- 🎯 1,000+ unique visitors/month
- 🎯 50+ pages indexed
- 🎯 Top 20 for "markdown to html converter"
- 🎯 5,000+ conversions

### Month 6
- 🎯 5,000+ unique visitors/month
- 🎯 Top 10 for primary keyword
- 🎯 10+ high-quality backlinks
- 🎯 20,000+ conversions

---

## Support Resources

**Vercel Documentation:**
- https://vercel.com/docs
- https://vercel.com/docs/deployments/overview

**Next.js Documentation:**
- https://nextjs.org/docs
- https://nextjs.org/docs/app/building-your-application/deploying

**Google Tools:**
- Analytics: https://analytics.google.com
- Search Console: https://search.google.com/search-console
- PageSpeed: https://pagespeed.web.dev

**Testing Tools:**
- Open Graph: https://www.opengraph.xyz
- Rich Results: https://search.google.com/test/rich-results
- Mobile Friendly: https://search.google.com/test/mobile-friendly

---

---

## Quick Start Commands

**Install dependencies (if not done):**
```bash
cd /Users/peter/md-to-html
npm install
```

**Test locally before deploying:**
```bash
npm run build
npm run start
# Open http://localhost:3000
```

**Deploy to Vercel (fastest):**
```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## Status: ✅ READY TO DEPLOY

- Code committed to GitHub: https://github.com/username628496/markdown-to-html
- React 19 + Next.js 15 configured
- Google Analytics integrated
- SEO optimized
- Mobile responsive
- All features tested

**Choose your deployment method above and deploy in 2-3 minutes!**

---

*Last updated: February 26, 2026*
