// components/PromptStats.tsx
import React from 'react';

function countTokens(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

interface Props {
  prompt: string;
  latency: number;
}

export default function PromptStats({ prompt, latency }: Props) {
  const tokenCount = countTokens(prompt);
  const tokenLimit = 10000;
  const progress = Math.min((tokenCount / tokenLimit) * 100, 100);

  return (
    <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
        Prompt Stats
      </h2>
      <p>
        <strong>Token Count:</strong> {tokenCount}
      </p>
      <p>
        <strong>Latency:</strong> {latency}ms
      </p>
      <div className="mt-2 bg-gray-700 h-4 rounded-full overflow-hidden">
        <div
          className="bg-green-400 h-4 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-sm mt-1 text-gray-300">
        {progress.toFixed(2)}% of 10,000 token limit
      </p>
    </div>
  );
}
