export interface Platform {
  slug: string;
  name: string;
  description: string;
  tips: string[];
  useCases: string[];
}

export const platforms: Platform[] = [
  {
    slug: 'wordpress',
    name: 'WordPress',
    description: 'Convert WordPress HTML content to Markdown format for migration to static site generators, version control, or Markdown-based CMSs.',
    tips: [
      'WordPress HTML often contains extra div wrappers and classes',
      'Use the HTML to Markdown converter to clean up WordPress post content',
      'Consider using a WordPress export plugin first to get clean HTML',
      'GFM support helps preserve code blocks from WordPress posts',
    ],
    useCases: [
      'Migrating WordPress blog to Jekyll, Hugo, or Gatsby',
      'Backing up WordPress content in a readable format',
      'Converting WordPress documentation to GitHub wiki',
      'Moving content to Markdown-based headless CMS',
    ],
  },
  {
    slug: 'notion',
    name: 'Notion',
    description: 'Export Notion pages to Markdown format for backup, migration, or version control. Perfect for developers who want their Notion docs in Git.',
    tips: [
      'Notion\'s HTML export can be converted to clean Markdown',
      'Tables and task lists convert seamlessly with GFM enabled',
      'Code blocks preserve syntax highlighting information',
      'Nested content structures are maintained',
    ],
    useCases: [
      'Backing up Notion workspace to Git',
      'Converting Notion docs to static site',
      'Creating documentation from Notion pages',
      'Migrating team wiki from Notion',
    ],
  },
  {
    slug: 'confluence',
    name: 'Confluence',
    description: 'Convert Confluence wiki pages to Markdown for migration to developer-friendly documentation platforms.',
    tips: [
      'Export Confluence pages as HTML first',
      'Tables and code blocks convert well to GFM',
      'Macros and plugins may need manual cleanup',
      'Preserve page hierarchy during batch conversions',
    ],
    useCases: [
      'Moving Confluence docs to GitHub/GitLab wikis',
      'Creating developer documentation in Markdown',
      'Migrating to ReadTheDocs or GitBook',
      'Version controlling technical documentation',
    ],
  },
  {
    slug: 'medium',
    name: 'Medium',
    description: 'Convert Medium articles to Markdown for cross-posting, backup, or migration to your own blog.',
    tips: [
      'Use browser inspector to copy article HTML',
      'Medium\'s HTML is relatively clean and converts well',
      'Images may need manual re-hosting',
      'Code snippets convert to fenced code blocks',
    ],
    useCases: [
      'Cross-posting Medium articles to Dev.to or Hashnode',
      'Backing up your Medium content',
      'Migrating articles to self-hosted blog',
      'Creating newsletter content from Medium posts',
    ],
  },
  {
    slug: 'ghost',
    name: 'Ghost',
    description: 'Convert Ghost CMS content to Markdown for migration or backup. Ghost already uses Markdown, but HTML exports can be converted back.',
    tips: [
      'Ghost HTML exports are clean and semantic',
      'Built-in Markdown features preserve well',
      'Cards and embeds may need special handling',
      'Use for migrating between Ghost versions',
    ],
    useCases: [
      'Migrating between Ghost instances',
      'Creating static site from Ghost blog',
      'Backing up Ghost content to Git',
      'Converting Ghost posts to other platforms',
    ],
  },
  {
    slug: 'substack',
    name: 'Substack',
    description: 'Convert Substack newsletter HTML to Markdown for archiving, cross-posting, or migration.',
    tips: [
      'Export newsletter HTML from Substack dashboard',
      'Email-specific HTML elements convert to clean Markdown',
      'Preserve formatting for republishing',
      'Image URLs remain intact',
    ],
    useCases: [
      'Archiving newsletter content',
      'Cross-posting to blog or social media',
      'Creating compiled newsletter archives',
      'Migrating to another newsletter platform',
    ],
  },
  {
    slug: 'google-docs',
    name: 'Google Docs',
    description: 'Convert Google Docs HTML to Markdown for version control, static sites, or developer-friendly editing.',
    tips: [
      'Download Google Doc as HTML first',
      'Google Docs HTML contains lots of styling - converter cleans it up',
      'Tables and lists convert well',
      'Remove inline styles for clean Markdown',
    ],
    useCases: [
      'Moving Google Docs to Git repositories',
      'Creating documentation from shared docs',
      'Converting collaborative docs to Markdown',
      'Building static sites from Google Docs content',
    ],
  },
  {
    slug: 'jira',
    name: 'Jira',
    description: 'Convert Jira ticket descriptions and comments to Markdown for documentation or issue tracking migration.',
    tips: [
      'Jira uses its own wiki markup, but HTML export converts well',
      'Tables and lists preserve structure',
      'Code blocks maintain formatting',
      'Useful for creating documentation from tickets',
    ],
    useCases: [
      'Creating documentation from Jira tickets',
      'Migrating to GitHub/GitLab issues',
      'Archiving project history',
      'Converting specs to Markdown docs',
    ],
  },
  {
    slug: 'slack',
    name: 'Slack',
    description: 'Convert Slack message HTML to Markdown for documentation, archiving, or knowledge base creation.',
    tips: [
      'Export Slack conversations as HTML',
      'Slack\'s mrkdwn format differs from standard Markdown',
      'Code snippets and threads convert cleanly',
      'Useful for creating documentation from discussions',
    ],
    useCases: [
      'Documenting decisions from Slack threads',
      'Creating knowledge base from Slack channels',
      'Archiving important conversations',
      'Building FAQ from support channels',
    ],
  },
  {
    slug: 'email',
    name: 'Email',
    description: 'Convert HTML email content to Markdown for newsletters, documentation, or archiving.',
    tips: [
      'Email HTML often has inline styles - converter removes them',
      'Table-based layouts convert to semantic Markdown',
      'Useful for converting newsletter archives',
      'Preserve links and basic formatting',
    ],
    useCases: [
      'Archiving HTML newsletters as Markdown',
      'Converting email content to blog posts',
      'Creating documentation from email threads',
      'Building knowledge base from support emails',
    ],
  },
];

export function getPlatformBySlug(slug: string): Platform | undefined {
  return platforms.find((p) => p.slug === slug);
}
