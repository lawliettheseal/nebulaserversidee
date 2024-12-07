import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>
  );

  const redirectPath = localStorage.getItem('path-redirect');
  if (redirectPath) {
    localStorage.removeItem('path-redirect');
    window.history.replaceState(null, '', redirectPath);
  }
}