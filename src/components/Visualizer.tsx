
import React, { useEffect, useRef } from 'react';

interface Props {
  prompt: string;
  setLatency: React.Dispatch<React.SetStateAction<number>>;
}

export default function Visualizer({ prompt }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  const tokens = prompt.trim().split(/\s+/).filter(Boolean);
  const visibleTokens = tokens.slice(-100); // last 100 tokens
  const highlightToken = visibleTokens.length ? visibleTokens[visibleTokens.length - 1] : '';

  // Auto-scroll to latest token
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = containerRef.current.scrollWidth;
    }
  }, [prompt]);

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-2"> Prompt Visualizer</h2>
      <p className="mb-2 text-gray-400">Simulating Claude-style latency and context awareness...</p>
      <div
        ref={containerRef}
        className="max-w-full overflow-x-auto bg-gray-900 p-3 rounded border border-gray-700"
      >
        <pre className="whitespace-nowrap text-sm text-gray-100">
          {visibleTokens.map((token, idx) => (
            <span
              key={idx}
              className={token === highlightToken ? 'text-yellow-300 font-bold' : ''}
            >
              {token + ' '}
            </span>
          ))}
        </pre>
      </div>
    </div>
  );
}
