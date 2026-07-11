import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';          // Asegúrate de que este archivo existe en la raíz
import App from './App';        // App está en la raíz, no en ./src

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);