export function Hero() {
  return (
    <div className="py-12 text-center border-b border-[var(--border)] bg-[var(--bg-elevated)]">
      <div className="container max-w-4xl">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
          Convert HTML ↔ Markdown. Instantly.
        </h1>
        <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
          Free, private, client-side conversion tool. Your data never leaves your browser.
        </p>
      </div>
    </div>
  );
}
