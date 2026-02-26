'use client';

import { ArrowLeftRight } from 'lucide-react';
import { useState } from 'react';

interface SwapButtonProps {
  onSwap: () => void;
}

export function SwapButton({ onSwap }: SwapButtonProps) {
  const [isRotating, setIsRotating] = useState(false);

  const handleClick = () => {
    setIsRotating(true);
    onSwap();
    setTimeout(() => setIsRotating(false), 300);
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center justify-center w-12 h-12 rounded bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-all border border-[var(--accent)] shadow-lg hover:shadow-xl"
      aria-label="Swap input and output"
      title="Swap direction"
    >
      <ArrowLeftRight
        className={`w-5 h-5 text-[var(--bg-primary)] ${isRotating ? 'animate-rotate' : ''}`}
      />
    </button>
  );
}
