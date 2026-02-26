import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'secondary', size = 'md', className = '', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed border-radius-[4px]';

    const variants = {
      primary: 'bg-[var(--accent)] text-[var(--bg-primary)] hover:bg-[var(--accent-hover)] border border-[var(--accent)]',
      secondary: 'bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] border border-[var(--border)] hover:border-[var(--border-hover)]',
      accent: 'bg-[var(--accent)] text-[var(--bg-primary)] hover:bg-[var(--accent-hover)] border-none font-semibold',
      ghost: 'bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] border border-transparent',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
