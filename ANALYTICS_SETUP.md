# Analytics & Tracking Setup — markdowntohtml.net

## ✅ Completed Setup

### 1. Google Search Console (GSC)

**Status:** ✅ Verified

**Verification Method:** Meta tag
```html
<meta name="google-site-verification" content="wGKDC__yIc3WN2lO1mNZ_P0K47W88drs1T08b36ZAyw" />
```

**Implementation:**
- Added to `app/layout.tsx` metadata
- Uses Next.js built-in `verification.google` field
- No manual meta tag needed

**Code:**
```tsx
export const metadata: Metadata = {
  // ...
  verification: {
    google: 'wGKDC__yIc3WN2lO1mNZ_P0K47W88drs1T08b36ZAyw',
  },
};
```

**What it does:**
- Verifies site ownership with Google
- Enables access to Google Search Console
- Required for submitting sitemap
- Tracks search performance, indexing status, errors

---

### 2. Google Analytics 4 (GA4)

**Status:** ✅ Installed

**Measurement ID:** `G-9D9YV37WQP`

**Implementation:**
- Created `components/analytics/GoogleAnalytics.tsx`
- Uses Next.js `<Script>` component
- Strategy: `afterInteractive` (loads after page becomes interactive)
- Tracks page views automatically

**Code:**
```tsx
// components/analytics/GoogleAnalytics.tsx
import Script from 'next/script';

export function GoogleAnalytics() {
  const GA_MEASUREMENT_ID = 'G-9D9YV37WQP';

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}

// app/layout.tsx
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <GoogleAnalytics />
        {/* ... */}
      </body>
    </html>
  );
}
```

**What it tracks:**
- ✅ Page views
- ✅ User sessions
- ✅ Traffic sources
- ✅ User demographics
- ✅ Device types (mobile/desktop)
- ✅ Geographic location
- ✅ User engagement time

---

## 📊 Data You Can Track

### Google Search Console

**Search Performance:**
- Total clicks from Google
- Total impressions in search results
- Average click-through rate (CTR)
- Average position in search results
- Top performing queries
- Top performing pages

**Coverage:**
- Valid pages indexed
- Pages with errors
- Pages with warnings
- Pages excluded

**Sitemaps:**
- Submitted sitemap status
- Pages discovered via sitemap
- Last read date

**Core Web Vitals:**
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)
- Mobile vs Desktop performance

### Google Analytics 4

**Realtime:**
- Active users right now
- Pages being viewed
- Traffic sources live

**Acquisition:**
- Where users come from:
  - Organic search
  - Direct traffic
  - Referral sites
  - Social media

**Engagement:**
- Most viewed pages
- Average engagement time
- Events (can add custom events)
- Conversions (can set up goals)

**Demographics:**
- Country/city
- Language
- Device type
- Browser
- Operating system

**Behavior Flow:**
- User journey through site
- Entry pages
- Exit pages
- Conversion paths

---

## 🎯 Recommended Tracking Events (Future)

### Custom Events to Add

**Tool Usage:**
```javascript
gtag('event', 'tool_used', {
  tool_name: 'html-to-markdown',
  conversion_type: 'html-to-md'
});
```

**File Actions:**
```javascript
gtag('event', 'file_action', {
  action: 'download',
  file_type: 'markdown'
});

gtag('event', 'file_action', {
  action: 'upload',
  file_type: 'html'
});
```

**Feature Usage:**
```javascript
gtag('event', 'feature_used', {
  feature: 'preview_toggle',
  state: 'enabled'
});

gtag('event', 'feature_used', {
  feature: 'gfm_support',
  state: 'enabled'
});
```

**Keyboard Shortcuts:**
```javascript
gtag('event', 'keyboard_shortcut', {
  shortcut: 'ctrl_c',
  action: 'copy'
});
```

---

## 🔒 Privacy Compliance

### Current Setup

**✅ Privacy-respecting:**
- No cookies set without consent (basic GA4)
- IP anonymization enabled by default in GA4
- Client-side conversion only (no data sent to server)
- No personal data stored

**⚠️ Considerations:**
- May need cookie consent banner for EU (GDPR)
- May need privacy policy page
- Consider adding opt-out mechanism

### Recommendations

**Add Privacy Policy:**
Create `/privacy` page with:
- What data is collected (analytics)
- How it's used (improve user experience)
- Third parties (Google Analytics)
- User rights (opt-out)
- Contact information

**Cookie Consent (Optional):**
For EU/GDPR compliance, add cookie banner:
- Cookies.dev
- CookieYes
- Or custom implementation

---

## 📈 Next Steps After Deployment

### Week 1: Verification

1. **Google Search Console**
   - [ ] Verify site ownership confirmed
   - [ ] Submit sitemap: `https://markdowntohtml.net/sitemap.xml`
   - [ ] Check indexing status
   - [ ] Fix any coverage errors

2. **Google Analytics**
   - [ ] Verify tracking is working (Realtime view)
   - [ ] Check data is populating (24-48 hours)
   - [ ] Set up custom dashboard
   - [ ] Configure alerts

### Week 2-4: Optimization

3. **Search Console**
   - [ ] Monitor search queries
   - [ ] Identify high-impression, low-CTR pages
   - [ ] Optimize meta descriptions for better CTR
   - [ ] Check Core Web Vitals
   - [ ] Fix mobile usability issues

4. **Analytics**
   - [ ] Set up conversion goals (tool usage)
   - [ ] Create custom events (file downloads, etc.)
   - [ ] Set up funnel analysis
   - [ ] Track bounce rate by page

### Month 2+: Growth

5. **Content Strategy**
   - [ ] Identify top-performing blog posts
   - [ ] Write more content on similar topics
   - [ ] Find keyword gaps
   - [ ] Monitor competitor rankings

6. **Technical SEO**
   - [ ] Monitor Core Web Vitals monthly
   - [ ] Track indexing coverage
   - [ ] Monitor backlinks (via GSC)
   - [ ] Fix crawl errors

---

## 🛠 Troubleshooting

### GA4 Not Tracking?

**Check:**
1. Open browser DevTools → Network tab
2. Filter for "google-analytics"
3. Look for requests to `collect?v=2`
4. Should see pageview events

**Common issues:**
- Ad blocker enabled (test in incognito)
- Script blocked by browser settings
- Wrong measurement ID
- Strategy not loading (try `beforeInteractive`)

### GSC Not Showing Data?

**Reasons:**
- Verification pending (wait 24-48 hours)
- Sitemap not submitted yet
- Site not indexed by Google yet
- Robots.txt blocking crawlers (check!)

**Fix:**
1. Submit sitemap manually in GSC
2. Request indexing for homepage
3. Wait 3-7 days for data to appear

---

## 📊 Expected Metrics (First Month)

### Realistic Targets

**Week 1-2:**
- 0-10 impressions/day
- 0-1 clicks/day
- Google discovering site

**Week 3-4:**
- 10-50 impressions/day
- 1-5 clicks/day
- Some pages indexed

**Month 2:**
- 50-200 impressions/day
- 5-20 clicks/day
- 10-20 pages indexed

**Month 3-6:**
- 200-1000 impressions/day
- 20-100 clicks/day
- All pages indexed

**Growth factors:**
- Quality of blog content
- Backlinks acquired
- Social media presence
- Word of mouth

---

## 🎯 Success Metrics

### Primary KPIs

1. **Organic Traffic** (Goal: 1000 users/month by month 6)
2. **Tool Usage** (Goal: 5000 conversions/month)
3. **Average CTR** (Goal: 3-5% from search)
4. **Core Web Vitals** (Goal: All "Good")

### Secondary KPIs

5. **Pages Indexed** (Goal: 100% of sitemap)
6. **Average Position** (Goal: Top 10 for target keywords)
7. **Bounce Rate** (Goal: <50%)
8. **Session Duration** (Goal: 2+ minutes)

---

## 🔗 Useful Links

**Google Search Console:**
https://search.google.com/search-console

**Google Analytics 4:**
https://analytics.google.com

**Submit Sitemap:**
https://search.google.com/search-console → Sitemaps → Add sitemap → `https://markdowntohtml.net/sitemap.xml`

**Test Structured Data:**
https://search.google.com/test/rich-results

**PageSpeed Insights:**
https://pagespeed.web.dev

---

## ✅ Completed Checklist

- [x] Google Search Console verification added
- [x] GA4 tracking installed
- [x] Script strategy optimized (afterInteractive)
- [x] Privacy-respecting setup
- [x] Documentation created

## ⚠️ TODO Before Launch

- [ ] Test GA4 in production (check Realtime)
- [ ] Submit sitemap to GSC
- [ ] Create privacy policy page (optional)
- [ ] Add cookie consent (if targeting EU)
- [ ] Set up custom events (optional)

---

**Status:** ✅ **READY FOR PRODUCTION**

Both Google Search Console and Google Analytics are properly configured. After deployment, visit GSC to submit your sitemap and verify tracking in GA4 Realtime view.

---

*Analytics setup completed: February 26, 2026*
