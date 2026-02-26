import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    tools: [
      { label: 'HTML to Markdown', href: '/html-to-markdown' },
      { label: 'Markdown to HTML', href: '/markdown-to-html' },
      { label: 'Markdown Preview', href: '/markdown-preview' },
      { label: 'Table Generator', href: '/markdown-table-generator' },
      { label: 'HTML to Text', href: '/html-to-text' },
    ],
    resources: [
      { label: 'Blog', href: '/blog' },
      { label: 'All Tools', href: '/tools' },
      { label: 'About', href: '/about' },
    ],
    platforms: [
      { label: 'WordPress', href: '/convert/wordpress-to-markdown' },
      { label: 'Notion', href: '/convert/notion-to-markdown' },
      { label: 'Confluence', href: '/convert/confluence-to-markdown' },
      { label: 'Medium', href: '/convert/medium-to-markdown' },
    ],
  };

  const socialLinks = [
    { icon: Mail, href: 'mailto:hello@markdowntohtml.net', label: 'Email' },
  ];

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-surface)] mt-24">
      <div className="container py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">

          {/* Brand Section - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-4 group">
              <Logo className="text-[var(--accent)] group-hover:scale-110 transition-transform" />
              <div className="flex flex-col">
                <span className="font-mono text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                  markdowntohtml
                </span>
                <span className="text-[9px] text-[var(--text-muted)] font-medium tracking-wider">
                  FREE CONVERTER TOOL
                </span>
              </div>
            </Link>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 max-w-sm">
              Convert HTML to Markdown and Markdown to HTML instantly. 100% free, private, and runs entirely in your browser. No signup, no data tracking.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--bg-elevated)] rounded-md transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Tools Links */}
          <div>
            <h3 className="font-display font-semibold text-[var(--text-primary)] mb-4 text-sm">
              Tools
            </h3>
            <ul className="space-y-2.5">
              {links.tools.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--text-secondary)] hover:text-[var(--accent)] text-sm inline-block hover:translate-x-1 transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platforms Links */}
          <div>
            <h3 className="font-display font-semibold text-[var(--text-primary)] mb-4 text-sm">
              Platforms
            </h3>
            <ul className="space-y-2.5">
              {links.platforms.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--text-secondary)] hover:text-[var(--accent)] text-sm inline-block hover:translate-x-1 transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-display font-semibold text-[var(--text-primary)] mb-4 text-sm">
              Resources
            </h3>
            <ul className="space-y-2.5">
              {links.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--text-secondary)] hover:text-[var(--accent)] text-sm inline-block hover:translate-x-1 transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[var(--text-muted)] text-sm text-center sm:text-left">
            © {currentYear} markdowntohtml.net · Made with <Heart className="inline w-3.5 h-3.5 text-red-500 fill-current" /> for developers
          </p>

          <div className="flex items-center gap-6 text-xs text-[var(--text-muted)]">
            <Link href="/privacy" className="hover:text-[var(--accent)] transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[var(--accent)] transition-colors">
              Terms
            </Link>
            <a
              href="https://github.com/yourusername/markdowntohtml"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent)] transition-colors"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
