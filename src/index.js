import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log("hit index.js in frontend ")
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
