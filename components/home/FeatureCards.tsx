import { Lock, Zap, Target } from 'lucide-react';

export function FeatureCards() {
  const features = [
    {
      icon: Lock,
      title: 'Private',
      description: '100% client-side processing. Your data never leaves your browser or touches our servers.',
    },
    {
      icon: Zap,
      title: 'Instant',
      description: 'Real-time conversion as you type. No waiting, no loading, no delays.',
    },
    {
      icon: Target,
      title: 'Accurate',
      description: 'Full GitHub Flavored Markdown support including tables, code blocks, and task lists.',
    },
  ];

  return (
    <div className="py-12 bg-[var(--bg-primary)]">
      <div className="container">
        <h2 className="text-2xl font-display font-bold text-center text-[var(--text-primary)] mb-8">
          Why Use This Tool?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="panel-elevated hover:border-[var(--border-hover)] transition-colors"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-[var(--accent)] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[var(--bg-primary)]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
