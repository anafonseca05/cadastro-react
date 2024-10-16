import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'; // Certifique-se de que o caminho e o nome estão corretos
import './styles.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
