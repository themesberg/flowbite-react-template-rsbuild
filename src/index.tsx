import { initThemeMode } from 'flowbite-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeInit } from '../.flowbite-react/init';
import App from './App';
import './App.css';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <ThemeInit />
      <App />
    </React.StrictMode>,
  );
}

initThemeMode();
