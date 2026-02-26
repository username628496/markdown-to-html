import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          'bg-primary': '#0D0D0D',
          'bg-surface': '#141414',
          'bg-elevated': '#1C1C1C',
          border: '#2A2A2A',
          'border-hover': '#3A3A3A',
        },
        light: {
          'bg-primary': '#F5F2EC',
          'bg-surface': '#FFFFFF',
          'bg-elevated': '#F0EDE6',
          border: '#E0DDD6',
        },
        accent: {
          DEFAULT: '#E8FF5A',
          hover: '#D4EB3F',
          dark: '#1A1A1A',
        },
        text: {
          primary: '#F0F0F0',
          secondary: '#888888',
          muted: '#555555',
          'primary-light': '#1A1A1A',
          'secondary-light': '#666666',
        },
        success: '#4ADE80',
        error: '#F87171',
      },
      fontFamily: {
        mono: ['var(--font-mono)', 'monospace'],
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-body)', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '4px',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'var(--text-primary)',
            a: {
              color: 'var(--accent)',
              '&:hover': {
                color: 'var(--accent-hover)',
              },
            },
            code: {
              color: 'var(--text-primary)',
              backgroundColor: 'var(--bg-elevated)',
              padding: '0.2em 0.4em',
              borderRadius: '4px',
              fontWeight: '400',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: 'var(--bg-elevated)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border)',
            },
            blockquote: {
              borderLeftColor: 'var(--accent)',
              color: 'var(--text-secondary)',
            },
            h1: {
              color: 'var(--text-primary)',
            },
            h2: {
              color: 'var(--text-primary)',
            },
            h3: {
              color: 'var(--text-primary)',
            },
            h4: {
              color: 'var(--text-primary)',
            },
            strong: {
              color: 'var(--text-primary)',
            },
            table: {
              borderColor: 'var(--border)',
            },
            thead: {
              borderBottomColor: 'var(--border)',
            },
            'tbody tr': {
              borderBottomColor: 'var(--border)',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
