import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './portfolio/App';
import './portfolio/styles.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
