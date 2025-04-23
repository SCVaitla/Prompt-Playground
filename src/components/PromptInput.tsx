import React from 'react';

interface Props {
  prompt: string;
  setPrompt: (value: string) => void;
  setLatency: (value: number) => void;
}

export default function PromptInput({ prompt, setPrompt, setLatency }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    const start = performance.now();
    setPrompt(value);
    const simulatedLatency = Math.floor(Math.random() * 300) + 200;
    setTimeout(() => {
      const end = performance.now();
      const latency = end - start + simulatedLatency;
      setLatency(Math.floor(latency));
    }, simulatedLatency);
  };

  return (
    <textarea
      value={prompt}
      onChange={handleChange}
      placeholder="Type or paste your prompt here..."
      className="w-full p-2 bg-gray-700 rounded text-white"
      rows={4}
    />
  );
}
