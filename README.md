# Prompt Playground

Prompt Playground is a Claude-style prompt visualization tool built with React + TypeScript. It simulates latency, token usage, and displays which tokens are visible near the end of a context window (like Claude’s 100K token range).

---

## Features

- Live token count 
- Simulated latency measurement 
- Progress bar toward a 10,000-token limit 
- Prompt visualizer showing last 100 visible tokens 
- Last token highlight and scroll behavior 

---

##  Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open your browser at:

```
http://localhost:5173
```

---

##  Tech Stack

- React + TypeScript
- Tailwind CSS
- Vite

---

## Future Enhancements

- Claude-style token attribution per segment
- Token cost estimations
- JSON/Markdown input support

---
