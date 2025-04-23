// src/App.tsx
import { useState } from 'react';
import PromptInput from './components/PromptInput';
import PromptStats from './components/PromptStats';
import Visualizer from './components/Visualizer';

function App() {
  const [prompt, setPrompt] = useState('');
  const [latency, setLatency] = useState(0);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">🧠 Prompt Playground</h1>
      <PromptInput prompt={prompt} setPrompt={setPrompt} setLatency={setLatency} />
      <PromptStats prompt={prompt} latency={latency} />
      <Visualizer prompt={prompt} setLatency={setLatency} />
    </div>
  );
}

export default App;
