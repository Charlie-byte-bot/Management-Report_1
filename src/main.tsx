import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// 1. 引入 HashRouter
import { HashRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* 2. 用 HashRouter 包裹 App */}
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
);
