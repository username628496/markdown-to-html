import type { Metadata, Viewport } from 'next';
import { JetBrains_Mono, Manrope, DM_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { ToastProvider } from '@/components/ui/Toast';
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://markdowntohtml.net'),
  title: {
    default: 'Markdown to HTML Converter — Free, Fast & Private',
    template: '%s | markdowntohtml.net',
  },
  description: 'Convert Markdown to HTML instantly in your browser — or flip it to HTML to Markdown. Free, no signup, 100% private. Supports GFM tables, code blocks, task lists. Try it now →',
  keywords: [
    'markdown to html',
    'html to markdown',
    'markdown to html converter',
    'html to markdown converter',
    'markdown converter online',
    'markdown editor online',
    'markdown preview online',
    'convert markdown to html free',
    'github flavored markdown converter',
  ],
  authors: [{ name: 'markdowntohtml.net' }],
  creator: 'markdowntohtml.net',
  publisher: 'markdowntohtml.net',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://markdowntohtml.net',
    siteName: 'markdowntohtml.net',
    title: 'Markdown to HTML Converter — Free, Fast & Private',
    description: 'Convert Markdown to HTML instantly in your browser — or flip it to HTML to Markdown. Free, no signup, 100% private.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'markdowntohtml.net — Markdown to HTML Converter',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Markdown to HTML Converter — Free, Fast & Private',
    description: 'Convert Markdown to HTML instantly in your browser. Free, no signup, 100% private.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://markdowntohtml.net',
  },
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.svg',
  },
  manifest: '/manifest.json',
  verification: {
    google: 'wGKDC__yIc3WN2lO1mNZ_P0K47W88drs1T08b36ZAyw',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0D0D0D' },
    { media: '(prefers-color-scheme: light)', color: '#F5F2EC' },
  ],
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'markdowntohtml.net',
  url: 'https://markdowntohtml.net',
  description: 'Free online HTML to Markdown and Markdown to HTML converter',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://markdowntohtml.net/?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const stored = localStorage.getItem('theme');
                const theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        className={`${jetbrainsMono.variable} ${manrope.variable} ${dmSans.variable}`}
      >
        <GoogleAnalytics />
        <ThemeProvider>
          <ToastProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
