import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ConverterTool } from '@/components/tool/ConverterTool';
import { ToolSchema } from '@/components/seo/ToolSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { platforms, getPlatformBySlug } from '@/lib/platforms';

interface Props {
  params: {
    'platform': string;
  };
}

export async function generateStaticParams() {
  return platforms.map((platform) => ({
    platform: platform.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const platform = getPlatformBySlug(params.platform);

  if (!platform) {
    return {
      title: 'Not Found',
    };
  }

  const title = `Convert ${platform.name} to Markdown — Free Online Tool`;
  const description = `Convert ${platform.name} HTML content to Markdown format. ${platform.description}`;

  return {
    title,
    description,
    keywords: [
      `${platform.slug} to markdown`,
      `convert ${platform.slug} to markdown`,
      `${platform.name} markdown converter`,
      `${platform.name} to md`,
    ],
    openGraph: {
      title,
      description,
      url: `/convert/${platform.slug}-to-markdown`,
      siteName: 'markdowntohtml.net',
    },
    alternates: {
      canonical: `/convert/${platform.slug}-to-markdown`,
    },
  };
}

export default function PlatformConversionPage({ params }: Props) {
  const platform = getPlatformBySlug(params.platform);

  if (!platform) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://markdowntohtml.net' },
    { name: 'Convert', url: 'https://markdowntohtml.net/convert' },
    {
      name: `${platform.name} to Markdown`,
      url: `https://markdowntohtml.net/convert/${platform.slug}-to-markdown`,
    },
  ];

  return (
    <>
      <ToolSchema
        name={`${platform.name} to Markdown Converter`}
        description={`Convert ${platform.name} HTML content to Markdown format. ${platform.description}`}
        url={`https://markdowntohtml.net/convert/${platform.slug}-to-markdown`}
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="container py-12">
        <div className="max-w-4xl mx-auto mb-8">
          <h1 className="font-display text-4xl font-bold text-[var(--text-primary)] mb-4">
            Convert {platform.name} to Markdown
          </h1>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            {platform.description}
          </p>
        </div>

        <ConverterTool />

        <div className="max-w-4xl mx-auto mt-12 space-y-12">
          {/* Use Cases */}
          <section>
            <h2 className="text-2xl font-display font-bold text-[var(--text-primary)] mb-4">
              Common Use Cases
            </h2>
            <ul className="space-y-2">
              {platform.useCases.map((useCase, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-[var(--text-secondary)]"
                >
                  <span className="text-[var(--accent)] mt-1">→</span>
                  <span>{useCase}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Tips */}
          <section>
            <h2 className="text-2xl font-display font-bold text-[var(--text-primary)] mb-4">
              Tips for Converting {platform.name}
            </h2>
            <div className="space-y-3">
              {platform.tips.map((tip, index) => (
                <div
                  key={index}
                  className="panel-elevated"
                >
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    <span className="font-semibold text-[var(--text-primary)]">Tip:</span> {tip}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* How to Use */}
          <section>
            <h2 className="text-2xl font-display font-bold text-[var(--text-primary)] mb-4">
              How to Convert
            </h2>
            <ol className="space-y-3 text-[var(--text-secondary)] list-decimal list-inside">
              <li>Export or copy your {platform.name} content as HTML</li>
              <li>Paste the HTML into the converter tool above</li>
              <li>Adjust conversion options if needed (GFM, tables, task lists)</li>
              <li>Copy or download the converted Markdown</li>
              <li>Use the Markdown in your new platform or workflow</li>
            </ol>
          </section>
        </div>
      </div>
    </>
  );
}
